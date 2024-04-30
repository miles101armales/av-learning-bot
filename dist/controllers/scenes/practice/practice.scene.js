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
exports.PracticeScene = void 0;
const telegraf_1 = require("telegraf");
const scene_class_1 = require("../base/scene.class");
const messages_1 = require("../../constants/messages");
class PracticeScene extends scene_class_1.Scene {
    constructor(bot) {
        super(bot);
        this.score = 0; // Инициализация переменной score
    }
    handle() {
        const stepHandler = new telegraf_1.Composer();
        stepHandler.action('mainmenu', (ctx) => __awaiter(this, void 0, void 0, function* () {
            return yield ctx.scene.leave();
        }));
        stepHandler.action('continue', (ctx) => __awaiter(this, void 0, void 0, function* () {
            ctx.reply(messages_1.practice_step2, messages_1.practice_step2_btn);
            ctx.session.score = 0;
            this.score = 0; // Инициализация переменной score
            return ctx.wizard.next();
        }));
        const stepHandler1 = new telegraf_1.Composer();
        stepHandler1.action('correct_1', (ctx) => __awaiter(this, void 0, void 0, function* () {
            ctx.session.question1 = 'correct';
            this.score += 1;
            ctx.reply(messages_1.practice_step3, messages_1.practice_step3_btn);
            return ctx.wizard.next();
        }));
        stepHandler1.action('incorrect_1', (ctx) => __awaiter(this, void 0, void 0, function* () {
            ctx.session.question1 = 'incorrect';
            ctx.reply(messages_1.practice_step3, messages_1.practice_step3_btn);
            return ctx.wizard.next();
        }));
        const stepHandler2 = new telegraf_1.Composer();
        stepHandler2.action('correct_2', (ctx) => __awaiter(this, void 0, void 0, function* () {
            ctx.session.question2 = 'correct';
            this.score += 1;
            ctx.reply(messages_1.practice_step4, messages_1.practice_step4_btn);
            return ctx.wizard.next();
        }));
        stepHandler2.action('incorrect_2', (ctx) => __awaiter(this, void 0, void 0, function* () {
            ctx.session.question2 = 'incorrect';
            ctx.reply(messages_1.practice_step4, messages_1.practice_step4_btn);
            return ctx.wizard.next();
        }));
        const stepHandler3 = new telegraf_1.Composer();
        stepHandler3.action('correct_3', (ctx) => __awaiter(this, void 0, void 0, function* () {
            ctx.session.question2 = 'correct';
            this.score += 1;
            ctx.session.score = this.score;
            this.examine(ctx.session.score);
            yield ctx.reply(this.result_text, this.result_btn);
            return ctx.wizard.next();
        }));
        stepHandler3.action('incorrect_3', (ctx) => __awaiter(this, void 0, void 0, function* () {
            ctx.session.question2 = 'incorrect';
            this.examine(ctx.session.score);
            yield ctx.reply(this.result_text, this.result_btn);
            return ctx.wizard.next();
        }));
        const stepHandler4 = new telegraf_1.Composer();
        stepHandler4.action('mainmenu', (ctx) => __awaiter(this, void 0, void 0, function* () {
            return yield ctx.scene.leave();
        }));
        stepHandler4.action('restart', (ctx) => __awaiter(this, void 0, void 0, function* () {
            return yield ctx.scene.reenter();
        }));
        this.scene = new telegraf_1.Scenes.WizardScene('practice', (ctx) => __awaiter(this, void 0, void 0, function* () {
            ctx.reply(messages_1.practice_step1, messages_1.practice_step1_btn);
            return ctx.wizard.next();
        }), stepHandler, stepHandler1, stepHandler2, stepHandler3, stepHandler4);
    }
    examine(score) {
        console.log(score);
        if (score === 3) {
            this.result_text = messages_1.practice_success;
            this.result_btn = messages_1.backtomenu_btn;
        }
        else {
            this.result_text = messages_1.practice_fail;
            this.result_btn = messages_1.practice_fail_btn;
        }
    }
}
exports.PracticeScene = PracticeScene;
//# sourceMappingURL=practice.scene.js.map