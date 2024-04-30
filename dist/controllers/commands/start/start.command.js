"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartCommand = void 0;
const command_class_1 = require("../base/command.class");
const messages_1 = require("../../constants/messages");
class StartCommand extends command_class_1.Command {
    constructor(bot) {
        super(bot);
    }
    handle() {
        this.bot.start((ctx) => {
            var _a, _b, _c, _d, _e, _f;
            ctx.sendMessage(messages_1.phoneRequire);
            ctx.session.username = ((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.username) ? (_b = ctx.from) === null || _b === void 0 ? void 0 : _b.username : '';
            ctx.session.name = ((_c = ctx.from) === null || _c === void 0 ? void 0 : _c.first_name) ? (_d = ctx.from) === null || _d === void 0 ? void 0 : _d.first_name : '';
            ctx.session.chat_id = ((_e = ctx.chat) === null || _e === void 0 ? void 0 : _e.id) ? (_f = ctx.chat) === null || _f === void 0 ? void 0 : _f.id : NaN;
            ctx.session.learnState = false;
        });
        this.bot.hears(/^\+?[0-9]{1,3}[ -]?\(?[0-9]{3}\)?[ -]?[0-9]{3}[ -]?[0-9]{2}[ -]?[0-9]{2}$/, (ctx) => {
            var _a, _b;
            ctx.session.phoneToCall = ((_a = ctx.update.message) === null || _a === void 0 ? void 0 : _a.text) ? (_b = ctx.update.message) === null || _b === void 0 ? void 0 : _b.text : '';
            ctx.reply(`Ваш номер:\n\n${ctx.session.phoneToCall}\n\nВерно?`, {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Верно!', callback_data: 'mainmenu' }]
                    ]
                }
            });
        });
    }
}
exports.StartCommand = StartCommand;
//# sourceMappingURL=start.command.js.map