import { Composer, Scenes, Telegraf } from 'telegraf';
import { Scene } from '../base/scene.class';
import { backtomenu_btn, practice_fail, practice_fail_btn, practice_step1, practice_step1_btn, practice_step2, practice_step2_btn, practice_step3, practice_step3_btn, practice_step4, practice_step4_btn, practice_success } from '../../constants/messages';
import { IBotContext } from '../../../models/context.interface';

export class PracticeScene extends Scene {
	score: number;
	result_text: any;
	result_btn: any;
	scene: Scenes.WizardScene<IBotContext>
	constructor(bot: Telegraf<IBotContext>) {
		super(bot);
		this.score = 0; // Инициализация переменной score
	}

	handle() {

		const stepHandler = new Composer<IBotContext>();
		stepHandler.action('mainmenu', async (ctx: IBotContext) => {
			return await ctx.scene.leave();
		});
		stepHandler.action('continue', async (ctx: IBotContext) => {
			ctx.reply(practice_step2, practice_step2_btn)
			ctx.session.score = 0;
			this.score = 0; // Инициализация переменной score
			return ctx.wizard.next();
		});

		const stepHandler1 = new Composer<IBotContext>();
		stepHandler1.action('correct_1', async (ctx: IBotContext) => {
			ctx.session.question1 = 'correct'
			this.score += 1;
			ctx.reply(practice_step3, practice_step3_btn)
			return ctx.wizard.next();
		});
		stepHandler1.action('incorrect_1', async (ctx: IBotContext) => {
			ctx.session.question1 = 'incorrect'
			ctx.reply(practice_step3, practice_step3_btn)
			return ctx.wizard.next();
		});

		const stepHandler2 = new Composer<IBotContext>();
		stepHandler2.action('correct_2', async (ctx: IBotContext) => {
			ctx.session.question2 = 'correct'
			this.score += 1;
			ctx.reply(practice_step4, practice_step4_btn)
			return ctx.wizard.next();
		});
		stepHandler2.action('incorrect_2', async (ctx: IBotContext) => {
			ctx.session.question2 = 'incorrect'
			ctx.reply(practice_step4, practice_step4_btn)
			return ctx.wizard.next();
		});

		const stepHandler3 = new Composer<IBotContext>();
		stepHandler3.action('correct_3', async (ctx: IBotContext) => {
			ctx.session.question2 = 'correct'
			this.score += 1;
			ctx.session.score = this.score;
			this.examine(ctx.session.score)
			await ctx.reply(this.result_text, this.result_btn);
			return ctx.wizard.next();
		});
		stepHandler3.action('incorrect_3', async (ctx: IBotContext) => {
			ctx.session.question2 = 'incorrect'
			this.examine(ctx.session.score)
			await ctx.reply(this.result_text, this.result_btn);
			return ctx.wizard.next();
		});

		const stepHandler4 = new Composer<IBotContext>();
		stepHandler4.action('mainmenu', async (ctx) => {
			return await ctx.scene.leave();
		})
		stepHandler4.action('restart', async (ctx) => {
			return await ctx.scene.reenter();
		})
		
		
		this.scene = new Scenes.WizardScene(
			'practice',
			async ctx => {
				ctx.reply(practice_step1, practice_step1_btn)
				return ctx.wizard.next();
			},
			stepHandler,
			stepHandler1,
			stepHandler2,
			stepHandler3,
			stepHandler4
		);
	}

	examine(score: number) {
		console.log(score)
		if(score === 3) {
			this.result_text = practice_success
			this.result_btn = backtomenu_btn
		} else {
			this.result_text = practice_fail
			this.result_btn = practice_fail_btn
		}
	}
}