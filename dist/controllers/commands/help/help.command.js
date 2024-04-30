"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpCommand = void 0;
const command_class_1 = require("../base/command.class");
const messages_1 = require("../../constants/messages");
class HelpCommand extends command_class_1.Command {
    constructor(bot) {
        super(bot);
    }
    handle() {
        this.bot.command('help', (ctx, next) => {
            ctx.reply(messages_1.help_txt, messages_1.backtomenu_btn);
            return next();
        });
        this.bot.action('help', (ctx, next) => {
            ctx.reply(messages_1.help_txt, messages_1.backtomenu_btn);
            return next();
        });
    }
}
exports.HelpCommand = HelpCommand;
//# sourceMappingURL=help.command.js.map