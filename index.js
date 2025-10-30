// index.js

require('dotenv').config();

// CONFIG
const TOKEN = process.env.DISCORD_TOKEN; // user token
const CHANNEL_ID = ""; // Add your own channel id
const BUMP_BOT_ID = "302050872383242240"; // app id for disboard

const { Client } = require('discord.js-selfbot-v13');
const client = new Client({
    checkUpdate: false,
});

async function bump() {
    const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
    try {
        const channel = await client.channels.fetch(CHANNEL_ID);
        
        if (channel) {
            await channel.sendSlash(BUMP_BOT_ID, 'bump');
            console.log(`[${timestamp}] ✅ Successfully bumped in channel ${CHANNEL_ID}.`);
        } else {
            console.log(`[${timestamp}] ❌ Error: Channel ${CHANNEL_ID} not found.`);
        }

    } catch (error) {
        console.error(`[${timestamp}] ❌ An unexpected error occurred:`, error);
    }
}

client.on('ready', async () => {
    console.log(`--- Logged in as: ${client.user.tag} ---`);
    console.log(`--- Self-bot is ready. Starting bump task. ---`);
    
    await bump();

    // 7210000 milliseconds = 2 hours and 10 seconds
    setInterval(bump, 7210000); 
});

if (!TOKEN) {
    console.error("--- ERROR: DISCORD_TOKEN is not defined in your .env file. ---");
} else {
    client.login(TOKEN).catch(err => {
        console.error("--- FAILED TO LOG IN: The token is invalid or has expired. ---");
        console.error(err.message);
    });
}
