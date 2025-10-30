# Discord Auto-Bumper
Node.js script that automatically bumps your Discord server on [Disboard](https://disboard.org/) every 2 hours

## Prerequisites
-   [Node.js](https://nodejs.org/) (version 16.9.0 or newer is recommended)
-   npm (comes bundled with Node.js)

**Install Dependencies**
```bash
npm install dotenv discord.js-selfbot-v13
```

**Configure env**
Make a .env file in project root

```env
DISCORD_TOKEN="user token"
```

**Find and Set Your Channel ID**
Turn on devoloper mode in settings and right click on the channel and copy id
open the `index.js` file
```javascript
const CHANNEL_ID = "PASTE_YOUR_CHANNEL_ID_HERE"; // Add your own channel id
```

## Run
```bash
node index.js
```
