# Discord Bot Free Serverless Template🚀


[日本語](README.md)

**Serverless Discord Bot using Glitch and Google Apps Script (GAS) :robot:**

## Overview

This project is a template for running a Discord Bot without the need for a dedicated server. The Bot runs on Glitch, and Google Apps Script (GAS) is used to keep it alive periodically.

### Features

- :cloud: **Serverless**: No need for a dedicated server
- :moneybag: **Cost-Effective**: Completely free to operate
- :wrench: **Easy Setup**: Detailed instructions make it easy for beginners to set up
- :art: **Highly Customizable**: Flexible functionality with discord.js

## Setup Instructions

### 1. Setting Up Glitch

1. Visit [Glitch](https://glitch.com/) and sign in or create a new account.
2. Click on "New Project" and select "Import From GitHub."
3. Enter the repository URL: https://github.com/nezumi0627/discord-nbot-free-server-template and click "OK."

### 2. Setting Up Discord Developer Portal

1. Visit [Discord Developer Portal](https://discord.com/developers/applications).
2. Click on "New Application" to create a new application.
3. In the "Bot" tab, add a bot and generate the token.
4. Add `DISCORD_TOKEN=your-bot-token` to the `.env` file in your Glitch project.

### 3. Setting Up Google Apps Script (workspace)

1. Visit [Google Apps Script](https://script.google.com/) and sign in or create a new account.
2. Click the "+ New Project" button to create a new Google Apps Script project.
3. Copy and paste the code from [コード.gs](コード.gs) into the script editor.
4. Click the deployment icon (rocket) and select "New deployment" to deploy the script as a web app.
5. Set up the trigger:

- Go to Trigger ➔ Timer ➔ Add trigger
- Select the function to execute: `wakeGlitch`
- Select the deployment to execute: Leave as is
- Select the event source: Leave as is
- Select the type of time-based trigger: Minute-based timer
- Set the interval: Every 5 minutes
- Click Save.

## App Authentication

If you encounter the "This app isn't verified" message when adding triggers in Google Apps Script, proceed with the following steps:

1. Click on "Advanced" on the left.
2. Click "Show details."
3. Click "Go to (unsafe page)."

This will allow you to access the application. This warning typically appears for apps created by individuals and is usually safe to ignore.

### 4. Discord Developer Portal

1. Visit the Discord Developer Portal, sign in, or create a new account.
2. Create a new application and add a bot.
3. Copy the bot token and set it as an environment variable in your Glitch project (create a `.env` file and add it).

## Usage

1. Ensure the Glitch project is running correctly.
2. Invite the Bot generated in Discord Developer Portal to your Discord server.
3. Verify that the Bot is responding (e.g., send the `!ping` command).

## Customization

You can edit the [main.js](main.js) file to add new commands and features. Example:

```javascript
client.on("messageCreate", (message) => {
  if (message.content === "!hello") {
    message.reply("Hello! I'm a Bot.");
  }
});
```

## Troubleshooting

- If the Bot is not responding:

1. Check that the Glitch project is running correctly.
2. Verify that the GAS trigger is set up correctly.
3. Ensure the Bot token is correct in the Discord Developer Portal.

## Notes

- Be careful not to expose your Bot token.
- Do not commit your `.env` file to the Git repository.
- This template is created for educational purposes. For commercial use, consider using a proper hosting service.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [discord.js](https://discord.js.org/)
- [Glitch](https://glitch.com/)
- [Google Apps Script](https://developers.google.com/apps-script)
