const Discord = require('discord.js');

const client = new Discord.Client();

const moment = require('moment');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

const ytdl = require('ytdl-core');

const fs = require('fs');

const gif = require("gif-search");

const prefix = "spam"

























 client.on("message", message => {

 if (message.content === prefix + "help") {

if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: | `Adminstrator`ááÇÓÝ áíÓ áÏíß ÕáÇÍíÉ íÌí Çä íßæä áÏíß ÈÑãÔä!');	 

  const embed = new Discord.RichEmbed()

      .setColor("RANDOM")

      .setDescription(`

????????????? {?SpamHelp??} ?????????????

?-|spamon| ÍÊì ÊÔÛá ÇáÓÈÇã

?-|spamoff|ÍÊì ÊæÞÝ ÇáÓÈÇã

?-|spamcome|ÍÊì ÊËÈÊ ÇáÍÓÇÈ ÈÑæã ÕæÊí

?-|spamon| ÍÊì ÊÔÛá ÇáÓÈÇã

?-|spamsay|ÍÊì ÊÊÍßã ÈáÈæÊ ãä ÍÓÇÈß 

  **spamsay #creditãËáÇ**

  **#credit ÇáÈæÊ íÞæá**   

????????????? {?Spam Help??} ?????????????

      `)

   message.channel.sendEmbed(embed)

    }

   });















client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;



  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);



let args = message.content.split(" ").slice(1);

if(!args) return message.channel.send('${prefix}say <words>');	



if (command == "say") {

if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("*áÇ Êãáß ÇáÕáÇÍíÇÊ ÇáãØáæÈå**");



message.channel.send(args.join("  "))

    message.delete();

  }

});













 

 

client.on("message", msg => {  

if(msg.content.startsWith(prefix + `on`)) {

if(!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send(':no_entry: | `Adminstrator`ááÇÓÝ áíÓ áÏíß ÕáÇÍíÉ íÌí Çä íßæä áÏíß ÈÑãÔä!');

let spam = msg.guild.channels.find('name', 'spam');

 if (!spam) return msg.channel.send('**`spam`íÑÌì ÇÖÇÝÉ Ñæã ÈÇÓã**' );

setInterval(function(){

	spam.send('spam')

}, 500);

setInterval(function(){

	spam.send('hi')

}, 1000);

setInterval(function(){

	spam.send('i like this')

}, 1500);	

	}

});

client.on("message", msg => {  

if(msg.content.startsWith(prefix + `1on`)) {

if(!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send(':no_entry: | `Adminstrator`ááÇÓÝ áíÓ áÏíß ÕáÇÍíÉ íÌí Çä íßæä áÏíß ÈÑãÔä!');

let spam = msg.guild.channels.find('name', '1spam');

 if (!spam) return msg.channel.send('**`spam`íÑÌì ÇÖÇÝÉ Ñæã ÈÇÓã**' );

setInterval(function(){

	spam.send('spam')

}, 500);

setInterval(function(){

	spam.send('hi')

}, 1000);

setInterval(function(){

	spam.send('i like this')

}, 1500);	

	}

});

client.on("message", msg => {  

if(msg.content.startsWith(prefix + `2on`)) {

if(!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send(':no_entry: | `Adminstrator`ááÇÓÝ áíÓ áÏíß ÕáÇÍíÉ íÌí Çä íßæä áÏíß ÈÑãÔä!');

let spam = msg.guild.channels.find('name', '2spam');

 if (!spam) return msg.channel.send('**`2spam`íÑÌì ÇÖÇÝÉ Ñæã ÈÇÓã**' );

setInterval(function(){

	spam.send('spam')

}, 500);

setInterval(function(){

	spam.send('hi')

}, 1000);

setInterval(function(){

	spam.send('i like this')

}, 1500);	

	}

});	  

client.on("message", msg => {  

if(msg.content.startsWith(prefix + `3on`)) {

if(!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send(':no_entry: | `Adminstrator`ááÇÓÝ áíÓ áÏíß ÕáÇÍíÉ íÌí Çä íßæä áÏíß ÈÑãÔä!');

let spam = msg.guild.channels.find('name', '3spam');

 if (!spam) return msg.channel.send('**`3spam`íÑÌì ÇÖÇÝÉ Ñæã ÈÇÓã**' );

setInterval(function(){

	spam.send('spam')

}, 500);

setInterval(function(){

	spam.send('hi')

}, 1000);

setInterval(function(){

	spam.send('i like this')

}, 1500);	

	}

});	  

client.on("message", msg => {  

if(msg.content.startsWith(prefix + `4on`)) {

if(!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send(':no_entry: | `Adminstrator`ááÇÓÝ áíÓ áÏíß ÕáÇÍíÉ íÌí Çä íßæä áÏíß ÈÑãÔä!');

let spam = msg.guild.channels.find('name', '4spam');

 if (!spam) return msg.channel.send('**`4spam`íÑÌì ÇÖÇÝÉ Ñæã ÈÇÓã**' );

setInterval(function(){

	spam.send('spam')

}, 500);

setInterval(function(){

	spam.send('hi')

}, 1000);

setInterval(function(){

	spam.send('i like this')

}, 1500);	

	}

});









    client.on('message',async message => {

    if(message.content.startsWith(prefix + "off")) {

       if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':no_entry: | `Adminstrator`ááÇÓÝ áíÓ áÏíß ÕáÇÍíÉ íÌí Çä íßæä áÏíß ÈÑãÔä!');

        message.channel.send('**Stopping.**').then(msg => {

            setTimeout(() => {

               msg.edit('**Stoppping..**');

            },1000);

            setTimeout(() => {

               msg.edit('**Done i will relunch early...**');

            },2000);

        });

        setTimeout(() => {

            client.destroy();

client.login(process.env.BOT_TOKEN);

        },3000);

    }

});





client.on('message', message => {

 if(message.content.startsWith(prefix + "come")) {

message.member.voiceChannel.join();

}

});



client.login(process.env.BOT_TOKEN);
