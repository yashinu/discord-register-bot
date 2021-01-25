const { MessageEmbed } = require("discord.js");
const teyitci = require("../models/teyitci.js");

module.exports.run = async (client, message, args) => {
  let embed = new MessageEmbed().setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true })).setColor(client.config.embedColor);
  let data = await teyitci.find().sort({ teyitler: "descending" });
  message.channel.send(embed.setDescription(`Top 20 Teyit Listesi;\n\n${data.length ? data.map((d, index) => `\`${index+1}.\` <@${d._id}> | ${d.teyitler}`).join("\n") : "Bulunamadı!"}`));
};

module.exports.config = {
  name: "topteyit",
  description: "Top 20 teyitçi listesi.",
  usage: "topteyit",
  aliases: ["top-teyit"],
};