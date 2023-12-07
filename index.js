const TelegramApi = require("node-telegram-bot-api");

const token = "6720041777:AAG2jvhvUdzgyzaoRGxJlwU2DavHyPLMjZE";

const bot = new TelegramApi(token, { polling: true });

bot.on("message", (message) => {
  const text = message.text;
  const chatId = message.chat.id;
  bot.setMyCommands([
    { command: "/start", description: "START" },
    { command: "/info", description: "info" },
  ]);
  if (text === "/start") {
    return bot.sendMessage(chatId, "Any text");
  }
  return bot.sendMessage(chatId, "Неизвестная команда");
});
