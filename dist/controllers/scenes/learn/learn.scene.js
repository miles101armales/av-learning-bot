"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LearnScene = void 0;
const telegraf_1 = require("telegraf");
const scene_class_1 = require("../base/scene.class");
const messages_1 = require("../../constants/messages");
class LearnScene extends scene_class_1.Scene {
    constructor(bot) {
        super(bot);
    }
    handle() {
        const stepHandler = new telegraf_1.Composer();
        stepHandler.action('mainmenu', (ctx) => __awaiter(this, void 0, void 0, function* () {
            return yield ctx.scene.leave();
        }));
        stepHandler.action('learn_watch', (ctx) => __awaiter(this, void 0, void 0, function* () {
            ctx.session.learnState = true;
            yield ctx.telegram.sendVideo(ctx.chat.id, { source: './src/public/videos/example.mp4' }, {
                reply_markup: messages_1.learn_step2_btn,
                width: 320,
                height: 180,
                caption: messages_1.learn_step2,
            });
            return ctx.wizard.next();
        }));
        this.scene = new telegraf_1.Scenes.WizardScene('learn', (ctx) => __awaiter(this, void 0, void 0, function* () {
            yield ctx.reply(messages_1.learn_step1, messages_1.learn_step1_btn);
            return ctx.wizard.next();
        }), stepHandler, (ctx) => __awaiter(this, void 0, void 0, function* () {
            yield ctx.reply(messages_1.learn_step3, messages_1.backtomenu_btn);
            return yield ctx.scene.leave();
        }));
    }
}
exports.LearnScene = LearnScene;
//# sourceMappingURL=learn.scene.js.map