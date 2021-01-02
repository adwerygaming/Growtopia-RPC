const app = require('./src/bundle');
const rpc = require("discord-rpc");
const client = require('discord-rich-presence')('728786611743228014');
const _cp = require('child_process');
const {
    ErrorHandler
} = require('./src/lib/functionFactory');
process.title = "Growtopia RPC - By AykutSarac - Re Code By LQLoLGT";

//  Create timestamp
const now = new Date();


console.log('Growtopia Presence is running now!\nMade by Phemus --> https://github.com/AykutSarac/Growtopia-RPC');
console.log("")
app.data().then(data => {
    //console.log(data)
    let growid = data.growid
    let world = data.world.toUpperCase()
    if (growid == "meta") {
        growid = "Playing As Guest"
    }
    console.log(`Playing As: ${growid}\nLast World Entered: ${world}`)
    setInterval(() => {
        client.updatePresence({
            details: data.growid,
            state: "In World: " + world,
            largeImageKey: "banner",
            largeImageText: "Growtopia",
            startTimestamp: now
        });
    }, 3000);
}).catch(e => {
    console.log(e)
    ErrorHandler(e);
});