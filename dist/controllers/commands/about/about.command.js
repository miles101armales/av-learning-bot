"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutCommand = void 0;
const command_class_1 = require("../base/command.class");
const messages_1 = require("../../constants/messages");
class AboutCommand extends command_class_1.Command {
    constructor(bot) {
        super(bot);
    }
    handle() {
        this.bot.command('about', (ctx, next) => {
            ctx.reply(messages_1.about_txt, messages_1.backtomenu_btn);
            return next();
        });
        this.bot.action('about', (ctx, next) => {
            ctx.reply(messages_1.about_txt, messages_1.backtomenu_btn);
            return next();
        });
    }
}
exports.AboutCommand = AboutCommand;
//# sourceMappingURL=about.command.js.map