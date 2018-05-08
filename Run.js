const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.TOKEN);

bot.on('message', async function (message){
    if(message.author.bot) return;
    switch(message.content.toLowerCase()){
        case "pong" : pong(message);
            break;

        case "k!fuli" : await sleep(500 + random(500,0)); 
                      message.channel.send('Ugh, baboons');
                      await sleep(1000 + random(500,0));
                      message.channel.send('Seriously?');
                      await sleep(1500 + random(500,0));
                      message.channel.send('Nowhere to run that I cannot run faster');
                      await sleep(1000 + random(500,0));
                      message.channel.send('Huwezi', {file: "https://cdn.discordapp.com/attachments/355274540248596480/356537450190995458/Fuli-eyes.gif"});
            break;
        
        case "k!foolishm" : message.channel.send('MacGuy has 100% foolishness');
            break;
        
        case "k!help" : message.channel.send('1) k!how are you = respond : How Foolish smth is');
                        message.channel.send('2) k!foolish = respond : rate the foolishness of smth');
                        message.channel.send('3) k!fuli = respond with waiting time : Ugh, baboons; Seriously?; Nowhere to run that I cannot run faster; Huwezi');
                        message.channel.send('4) pong = respond : ping');
                        message.channel.send('5) k!birthdaymac = wish a happy birthday to Mac Guy');
                        message.channel.send('6) k!beshte, k!kion, k!bunga, k!ono = say a sentence of the charactere and a gif');
                        
            break;
        case "k!kion" : await sleep(500 + random(500,0));
                        message.channel.send('Hevi Kabesa');
                        await sleep(500 + random(500,0));                   
                        message.channel.send('Till the Pridelands end...');
                        await sleep(500 + random(500,0));                    
                        message.channel.send('ROAR');
                        await sleep(500 + random(500,0));                    
                        message.channel.send('I dont want to end up like Scar.', {file: "https://cdn.discordapp.com/attachments/355274540248596480/356530551143792662/49dc73b2bf47bdacafc40f402b2781df7f4aead9_hq.gif"});
            break;
        case "k!bunga" : await sleep(500 + random(500,0));
                         message.channel.send('Zuka Zama');
                         await sleep(500 + random(500,0));
                         message.channel.send('Unbungalievible');
                         await sleep(500 + random(500,0));
                         message.channel.send('Big B');
                         await sleep(500 + random(500,0));
                         message.channel.send('Galleallegoes', {file: "https://cdn.discordapp.com/attachments/355274540248596480/356530469266915330/Bunga-hand.gif"});
            break;
        case "k!ono" :  await sleep(500 + random(500,0));
                        message.channel.send('Kinda common knolege really');
                        await sleep(500 + random(500,0));
                        message.channel.send('Hapana!');
                        await sleep(500 + random(500,0));
                        message.channel.send('Everyone, everyone.');
                        await sleep(500 + random(500,0));
                        message.channel.send('Affirmitive!', {file: "https://cdn.discordapp.com/attachments/355274540248596480/356530809525633025/tumblr_o527fcWzvB1v9ez4qo1_1280.gif"});
            break;
        case "k!beshte" : await sleep(500 + random(500,0));
                          message.channel.send('Twindke Kiboko');
                          await sleep(500 + random(500,0));
                          message.channel.send('Pua');
                          await sleep(500 + random(500,0));
                          message.channel.send('Little B', {file: "https://cdn.discordapp.com/attachments/355274540248596480/356530695637565440/Beshte-jump.gif"});
            break;
            
            
            
        case "k!birthdaymac" : message.channel.send('**HAPPY FOOLISH BIRTHDAY Mac Guy !!!!!!!**' , {file: "https://vignette2.wikia.nocookie.net/lionguard/images/5/5b/Fuli-splash.gif"});
            break;
            
        }
        
	if (message.content.toLowerCase().startsWith('k!how are you ')){
            
            var reason = message.content.substring(14, message.content.length);
            message.channel.send('How Foolish ' + reason + ' is ?');
            
	}
        if (message.content.toLowerCase().startsWith('k!foolish ')){
            
            var reason = message.content.substring(10, message.content.length);
            message.channel.send(  reason + ' has ' +  Math.floor(random(100,0)) + '% foolishness'); 
            
	}
      
       
			
});


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function pong(message){
    message.channel.send('ping');
}
function random(max,min) {
    return Math.random() * ( max - min );
}
