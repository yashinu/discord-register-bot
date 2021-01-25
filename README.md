# discord-register-bot

 Discord Register (Teyit) Botu
 
 - [Discord Register Bot](#discord-register-bot)
    - [Kurulum & Kullanım](#kurulum), [Anlatım Videosu](https://youtu.be/iC4plq2h5pI)
    - [Komutlar](#komutlar)
    - [Serendia Squad](https://discord.gg/ZBmhQ2T)
 
 [![Bot Kurulum Anlatım Videosu](https://yashinu.is-inside.me/Hnda0el9.png)](https://youtu.be/iC4plq2h5pI)
    
    
# Neden Yayınlandı?
 Herkes register botu yayınlıyor ben neden yayınlamayayım? :D

# Bilgilendirme
* Projeyi [Serendia Squad](https://discord.gg/ZBmhQ2T) sunucusu için hazırladım, izinsiz paylaşılması/videosunun çekilmesi yasaktır.
* Projeyle ilgili sorunlarınız için sunucuya gelerek bana ulaşabilirsiniz. [(Yashinu#0001)](https://discord.com/users/367679437816463360)
* Projeyi Glitchte kullanmak isteyen arkadaşlar, yeni bir Glitch projesi açarak oradaki package.json dosyasını bu projedeki package.json ile değişmelidirler.

# Komutlar
* ![Komutlar](https://yashinu.is-inside.me/3CjBhRNr.png)

# Kurulum
* [Node.JS](https://nodejs.org/en/) kurduğunuzdan emin olmalısınız.
* MongoDB hesabınızın olması gerekiyor. (Nasıl kuracağınızı ve URL alacağınızı bilmiyorsanız; [anlatım](https://youtu.be/yG6105VL8H4)
* Projeyi zip halinde indirin ve bir klasöre çıkarın.
* Çıkardığınız klasördeki `config.json` adlı dosyayı açın ve içindekileri doğru bir biçimde doldurun.
  * `prefixes` botunuzun komutlarının çalışmasını sağlayan ön-eklerdir. (Artırabilir/Azaltabilirsiniz)
  * `botToken` botunuzun Discord Developer Portal profilinden aldığınız tokenidir.
  * `developers` geliştiricilerin kullanıcı ID'leri.
  * `mongooseConnectURL` MongoDB hesabınızdan aldığınız bağlantı URL'si.
  * `botStatus` botunuzun oynuyor metni.
  * `name_age` kayıt sisteminin isim-yaş şeklinde olup olmayacağı. (true/false)
  * `embedColor` botun embedlerinin renkleri.
  * `defaultTag` tagsız üyelerin isminin başında olacak tag.
  * `tag` taglı üyelerin isminin başında olacak tag.
  * `staffRoles` botu kullanabilecek roller.
  * `invalids` botun kullanılamayacağı kanallar veya roller.
  * `unregisterRoles` kayıtsız üyelerin rolleri.
  * `boyRoles` erkek rolleri.
  * `girlRoles` kız rolleri.
  * `tagRoles` tag alan üyelere verilen roller.
* Bunları doldurduktan sonra klasöre geri dönün ve boş bir yere `shift` + `sağ tık` yaparak powershell çalıştırın.
* Gelen terminale sırasıyla `npm init -y` `npm install` komutlarını uygulayın.
* Gerekli modüllerin kurulduğundan emin olduktan sonra `start.bat` adlı dosyayı çalıştırarak botu aktif edebilirsiniz.
* Botun rolünü üste taşımayı, gerekli izinleri vermeyi ve en önemlisi botun intentlerini açmayı unutmayın. (Developer Portal > Applications > Botun Profili > Bot Sekmesi > Sayfanın Aşağısındaki Intent tikleri)
* yardım komutuyla botun komutlarıyla ilgili bilgi alabilirsin.
