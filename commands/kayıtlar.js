const { MessageEmbed } = require("discord.js");
const kayitlar = require("../models/kayitlar.js");

module.exports.run = async (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true })).setColor(client.config.embedColor);
  if (!member) return message.channel.send(embed.setDescription("Geçerli bir üye belirtmelisin!")).then(x => x.delete({ timeout: 5000 }));
  let memberData = await kayitlar.findById(member.id);
  if (!memberData) return message.channel.send(embed.setDescription(`${member} üyesinin kayıt geçmişi bulunamadı!`));
  message.channel.send(embed.setDescription(`${member} üyesinin kayıt geçmişi; **(son 10)**\n\n${memberData.kayitlar.reverse().slice(0, 10).map((data, index) => `\`${index+1}.\` ${data.isim} (${data.roller.map(r => `<@&${r}>`).join(", ")}) | ${new Date(data.tarih).toTurkishFormat()}`).join("\n")}`));
};

module.exports.config = {
  name: "kayıtlar",
  description: "Belirtilen üyenin kayıt geçmişi.",
  usage: "kayıtlar <@üye>",
  aliases: ["isimler", "teyitler"],
};