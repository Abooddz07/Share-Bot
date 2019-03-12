const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
      حياك الله ي بعد راسي
       خش بتنورنا فعاليات وكل شيء حلو موجود !
        ي بعد عيني الرابط تحت
         Carezma SERVER

		 [ https://discord.gg/D74hax ] **`)
}).catch(console.error)
})

client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
      حياك الله ي بعد راسي
       خش بتنورنا فعاليات وكل شيء حلو موجود !
        ي بعد عيني الرابط تحت
         Carezma SERVER

                                 [ https://discord.gg/D74hax ] **`)
}).catch(console.error)
})
client.login(process.env.NTU1MDM1MzQwMjMxMDE2NDYw.D2lUiw.htfctbpcvEE6soQJ6a7S3s1f9Pc);
