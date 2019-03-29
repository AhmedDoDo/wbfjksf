const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+>";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Texo`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Texo ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`+help`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});


const client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`عضو جديد`)
    .setDescription(`اهلا بك في السيرفر`)
    .addField(' 👤  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter('اسم بوتك', 'https://cdn.discordapp.com/icons/390551815072251904/418fa2788d8115808951c9881ba8f190.jpg')

var channel =member.guild.channels.find('name', 'اسم روم الولكم')
if (!channel) return;
channel.send({embed : embed});
});


const client.on("guildMemberAdd", member => {
  let welcomer = member.guild.channels.find("name","اسم الروم");
        if(!welcomer) return;
        if(welcomer) {
           moment.locale('ar-ly');
           var h = member.user;
          let norelden = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setThumbnail(h.avatarURL)
          .setAuthor(h.username,h.avatarURL)
          .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **n** `${moment(member.user.createdAt).fromNow()}``,true)            
           .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} n``${moment(member.joinedAt).startOf(' ').fromNow()}```, true) 
           .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
       welcomer.send({embed:norelden});          
                 
   
        }
        });
		

const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);
  client.guilds.forEach(king => {
    king.fetchInvites().then(guildInvites => {
      invites[king.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const gamer = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => gamer.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const welcome = member.guild.channels.find(channel => channel.name === "اسم الروم");
    welcome.send(` ||${member.user.tag}|| invited by ||${inviter.tag}|| invites =  ||${invite.uses}|| `)
  });
});


const= client.on("message", message => {
  if (message.channel.type === "dm") {

      message.channel.startTyping(); 
      setTimeout(() => {
        message.channel.stopTyping(); 
      }, Math.random() * (1 - 3) + 1 * 1000);
   });


const client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
    return channel.send(**🌹  ولكم نورت السيرفر 🌹** 
  
  **👑 اسم العضو  ${member} 👑**  
  
  **👤  انت العضو رقم ${member.guild.memberCount} **) 
  }).catch(console.error)
  });