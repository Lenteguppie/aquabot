const Discord = require('discord.js');
 const client = new Discord.Client();

 var d = new Date(); // for now
 var h = d.getHours(); // => 9
 var m = d.getMinutes(); // =>  30
 var s = d.getSeconds(); // => 51

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'ping') {
 msg.reply('pong');
 }
 });

 client.on('message', msg => {
  if (msg.content === 'What\'s the time') {
  msg.reply(h + ':' + m);
  }
  });
  client.on('message', msg => {
   if (msg.content === 'new meme pls') {
     var links = [
                 "i.redd.it/89bajt1nml221.jpg",
                 "i.redd.it/aw3stzbdjk221.jpg",
                 "i.redd.it/i5j76it0jl221.jpg",
                 "i.redd.it/uktbq7kwdm221.jpg"]

                 var roll = Math.floor(Math.random() * links.length()) + 1;
                 // int i = rnd.Next(0, responses.Length); //Indexing starts from 0, and the max value is minused by 1 (just how Random.Next works) so this will even out perfectly.
if (links[roll] === 'undefined/'){
  roll = Math.floor(Math.random() * links.length) + 1;
}

    msg.channel.send('https://' + links[roll]);
   }
   });

   function openSite() {
var links = [
              "google.com",
              "youtube.com",
              "reddit.com",
              "apple.com"]

            openSite = function() {
              // get a random number between 0 and the number of links
              var randIdx = Math.random() * links.length;
              // round it, so it can be used as array index
              randIdx = parseInt(randIdx, 10);
              // construct the link to be opened
              var link = 'http://' + links[randIdx];
              };

    return link;

    document.getElementById("link").innerHTML = openSite();
}



//   client.on('message', msg => {
//     if (msg.content === 'meme pls')
//
// });

client.login('NDYwNDcwNjc0Njk2MTc1NjE2.Dupa3Q.fpLqOqy88fMcTXSuua1zkORTThQ');
