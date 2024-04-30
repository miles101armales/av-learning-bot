"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMenuCommand = void 0;
const command_class_1 = require("../base/command.class");
const messages_1 = require("../../constants/messages");
const messages_2 = require("../../constants/messages");
class MainMenuCommand extends command_class_1.Command {
    constructor(bot) {
        super(bot);
    }
    handle() {
        this.bot.action('mainmenu', (ctx) => {
            ctx.sendMessage(messages_1.mainmenu_txt, messages_2.mainmenu_btn);
        });
        this.bot.command('mainmenu', (ctx) => {
            ctx.sendMessage(messages_1.mainmenu_txt, messages_2.mainmenu_btn);
        });
    }
}
exports.MainMenuCommand = MainMenuCommand;
//# sourceMappingURL=mainMenu.command.js.map