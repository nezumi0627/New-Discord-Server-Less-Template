# Discord Bot サーバーレステンプレート🚀

[English](README-en.md)

**Glitch と Google Apps Script (GAS) を使用した無料のサーバーレス Discord Bot :robot:**

## 概要

このプロジェクトは、サーバーを必要とせずに Discord Bot を運用するためのテンプレートです。Glitch で Bot を実行し、Google Apps Script (GAS) を使用して定期的に起動状態を維持します。

### 特徴

- :cloud: **サーバーレス**: 専用サーバーが不要
- :moneybag: **コスト効率**: 完全無料で運用可能
- :wrench: **簡単セットアップ**: 詳細な手順で初心者でも簡単に構築可能
- :art: **高度なカスタマイズ**: discord.js を使用し、柔軟な機能拡張が可能

## セットアップ手順

### 1. Glitch の設定

1. [Glitch](https://glitch.com/) にアクセスし、サインインまたは新しいアカウントを作成します。
2. "New Project" をクリックし、"Import From GitHub" を選択します。
3. リポジトリの URL: https://github.com/nezumi0627/discord-nbot-free-server-template を入力し、「OK」をクリックします。

### 2. Discord Developer Portal の設定

1. [Discord Developer Portal](https://discord.com/developers/applications) にアクセスします。
2. 「New Application」をクリックし、新しいアプリケーションを作成します。
3. 「Bot」タブで Bot を追加し、トークンを生成します。
4. Glitch プロジェクトの `.env` ファイルに `DISCORD_TOKEN=あなたのボットトークン` を追加します。

### 3. Google Apps Script (workspace) の設定

1. [Google Apps Script](https://script.google.com/) にアクセスし、サインインまたは新しいアカウントを作成します。
2. "+新しいプロジェクト" ボタンをクリックし、新しい Google Apps Script プロジェクトを作成します。
3. [コード.gs](コード.gs) のコードをスクリプトエディタにコピーして貼り付けます。
4. デプロイアイコン（ロケット）をクリックし、「New deployment」を選択してスクリプトをウェブアプリとしてデプロイします。
5. トリガーを設定します：

- トリガー ➔ タイマー ➔ トリガーを追加 を開きます。
- 実行する関数を選択: `wakeGlitch`
- 実行するデプロイを選択: 触らない
- イベントのソースを選択: 触らない
- 時間ベースのトリガーのタイプを選択: 分ベースのタイマー
- 時間の間隔: 5 分おき
- 保存をクリックします。

## アプリの認証

Google Apps Script のトリガー追加時に「このアプリは確認されていません」と表示された場合は、以下の手順で進めてください：

1. 左側の「詳細」をクリックします。
2. 「詳細を表示」をクリックします。
3. 「（安全ではないページ）に移動」をクリックします。

これにより、アプリケーションにアクセスできるようになります。この警告は、個人で作成したアプリケーションで表示されるもので、通常は問題ありません。

### 4. Discord 開発者ポータル

1. Discord 開発者ポータルを訪れて、サインインまたは新しいアカウントを作成します。
2. 新しいアプリケーションを作成し、ボットを追加します。
3. ボットトークンをコピーし、Glitch プロジェクトの環境変数として設定します（.env ファイルを作成し、入れてください）。

## 使用方法

1. Glitch プロジェクトが正常に起動していることを確認します。
2. Discord Developer Portal で生成した Bot を Discord サーバーに招待します。
3. Bot が応答することを確認します（例：`!ping`コマンドを送信）。

## カスタマイズ

[main.js](main.js) ファイルを編集して、新しいコマンドや機能を追加できます。例：

```javascript
client.on("messageCreate", (message) => {
  if (message.content === "!hello") {
    message.reply("こんにちは！Botです。");
  }
});
```

## トラブルシューティング

- Bot が応答しない場合：

1. Glitch プロジェクトが正常に動作しているか確認します。
2. GAS のトリガーが正しく設定されているか確認します。
3. Discord Developer Portal で Bot のトークンが正しいか確認します。

## 注意事項

- Bot トークンを公開しないよう注意してください。
- `.env`ファイルを Git リポジトリにコミットしないでください。
- このテンプレートは教育目的で作成されています。商用利用する場合は、適切なホスティングサービスの使用を検討してください。

## ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。詳細は[LICENSE](LICENSE)ファイルをご覧ください。

## 謝辞

- [discord.js](https://discord.js.org/)
- [Glitch](https://glitch.com/)
- [Google Apps Script](https://developers.google.com/apps-script)
