"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseCommand = void 0;
const command_class_1 = require("../base/command.class");
const messages_1 = require("../../constants/messages");
class CourseCommand extends command_class_1.Command {
    constructor(bot) {
        super(bot);
    }
    handle() {
        this.bot.command('course', (ctx) => {
            ctx.reply(messages_1.course_txt, messages_1.course_btn);
        });
        this.bot.action('course', (ctx) => {
            ctx.reply(messages_1.course_txt, messages_1.course_btn);
        });
        this.bot.action('keymoney', (ctx) => {
            ctx.telegram.sendVideo(ctx.chat.id, { source: './src/public/videos/example.mp4' }, {
                reply_markup: messages_1.course_tobuy_btn,
                width: 320,
                height: 180,
                caption: messages_1.course_keymoney_txt,
            });
        });
        this.bot.action('inv-master', (ctx) => {
            ctx.telegram.sendVideo(ctx.chat.id, { source: './src/public/videos/example.mp4' }, {
                reply_markup: messages_1.course_tobuy_btn,
                width: 320,
                height: 180,
                caption: messages_1.course_invmaster_txt,
            });
        });
        this.bot.action('airdrop', (ctx) => {
            ctx.telegram.sendVideo(ctx.chat.id, { source: './src/public/videos/example.mp4' }, {
                reply_markup: messages_1.course_tobuy_btn,
                width: 320,
                height: 180,
                caption: messages_1.course_airdrop_txt,
            });
        });
        this.bot.action('purchase', (ctx) => {
            ctx.reply('Мы будем очень рады увидеть вас в нашей школе!\n\nВскоре с вами свяжется наш менеджер!', messages_1.backtomenu_btn);
        });
        this.bot.action('manager', (ctx) => {
            ctx.reply('Вскоре с вами свяжется наш менеджер!', messages_1.backtomenu_btn);
        });
    }
}
exports.CourseCommand = CourseCommand;
//# sourceMappingURL=course.command.js.map