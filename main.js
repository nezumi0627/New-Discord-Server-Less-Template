const { Client, Intents, Collection } = require('discord.js');
const http = require('http');
const express = require('express');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    allowedMentions: { parse: [] },
});

client.commands = new Collection();

const PREFIX = '!';

client.on('messageCreate', async (message) => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).trim().split(/\s+/);
    const command = args.shift().toLowerCase();

    try {
        if (command === 'ping') {
            const sentMessage = await message.reply('Pinging...');
            const pingTime = sentMessage.createdTimestamp - message.createdTimestamp;
            await sentMessage.edit(`Pong! レイテンシーは ${pingTime}ms です。API レイテンシーは ${Math.round(client.ws.ping)}ms です。`);
        }
    } catch (error) {
        console.error('コマンド実行中にエラーが発生しました:', error);
        await message.reply('コマンドの実行中にエラーが発生しました。');
    }
});

const app = express();
app.get('/', (_, response) => response.sendStatus(200));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`サーバーがポート${PORT}で起動しました`));

const keepAlive = () => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
};
setInterval(keepAlive, 5 * 60 * 1000); // 5分ごとに実行

const startBot = async () => {
    try {
        await client.login(process.env.TOKEN);
        console.log('Botが正常に起動しました');
    } catch (error) {
        console.error('Botの起動に失敗しました:', error);
    }
};

if (process.env.TOKEN) {
    startBot();
} else {
    console.error('.envファイル内のトークンを確認してください。');
}
