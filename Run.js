const Discord = require('discord.js');
const bot = new Discord.Client();
const GoogleImages = require('google-images');
const client = new GoogleImages('CSE ID', 'API KEY');

var lionkingg;
var lionking = ["Scar","Simba","Mufasa","Nala","Shenzi","Sarabi","Rafiki","Timon","Zazu","Ed","Shenzi clan","Banzai","Great Kings of the past","Pumbaa","Sarafina","Pride Landers","Simba Pride","Mole","Kovu","Kiara","Zira","Vitani","Nuka","Outsiders","Kion","Fuli","Askari","Bunga","Ono","Beshte","Uncle Max","Ma","Timon colony","Iron Joe","Army of Scar","Sumu","Janja","Ushari","Makucha","Kiburi","Reirei","Shupavu","Nduli","Dogo","Mzingo","The Zimwi","Makucha leap","Nne","Cheezi","Chungu","Njano","Goigoi","Dogo brothers","Tamka","Mapigano","Mpishi","Mwoga","Mzingo's parliament","Tano","Nyeusi","Uroho","Mwevi","Mwizi","Kopa","Mohatu","Lion Guard","Kopa","Jasiri","Makini","Furaha","Dhahabu","Mzaha","Mtoto","Hadari","Badili","Kifaru","Herman","Ona",];


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
	
	case "k!bothair" : message.channel.send('Oh bothair.');
            break;
		    
	case "k!ballast" : message.channel.send('Oh ballast.');
            break;
		    
	case "k!blast" : message.channel.send('How repetitive.');
            break;
        
        case "k!help" : message.channel.send('```1) k!how are you = respond : How Foolish smth is\n'+
			'2) k!foolish = respond : rate the foolishness of smth\n'+
			'3) k!fuli = respond with waiting time : Ugh, baboons; Seriously?; Nowhere to run that I cannot run faster; Huwezi\n'+
			'4) pong = respond : ping\n'+
			'5) k!birthdaymac = wish a happy birthday to Mac Guy\n'+
			'6) k!beshte, k!kion, k!bunga, k!ono = say a sentence of the charactere and a gif\n'+
		    	'7) k!say = make the bot talk\n'+
		    	'8) k!random lion king = say a random name from the Lion king and Lion guard\n'+
		    	'9) k!bothair = says Oh bothair.\n'+
		    	'10) k!ballast = says Oh ballast.\n'+
		    	'11) k!blast = says How repetitive.```');
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
		    
	case "k!random lion king" : lionkingg = Math.floor(Math.random() * (lionking.length - 0) + 0);  
		        message.channel.send(lionking[lionkingg]);
            break;
		
	case "search" : client.search('Lions !'),
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
	if(message.content.toLowerCase().startsWith('k!say')) {
	    var reason = message.content.substring(5, message.content.length);
	    message.delete(); 
	    message.channel.send(reason);
	}
      
	if(message.content.toLowerCase() === 'hello') {
	    message.author.sendMessage("Hey there")
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
