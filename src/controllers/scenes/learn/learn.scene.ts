import { Composer, Scenes, Telegraf } from 'telegraf';
import { Scene } from '../base/scene.class';
import { backtomenu_btn, learn_step1, learn_step1_btn, learn_step2, learn_step2_btn, learn_step3 } from '../../constants/messages';
import { IBotContext } from '../../../models/context.interface';

export class LearnScene extends Scene {
	state: string;
	scene: Scenes.WizardScene<IBotContext>
	constructor(bot: Telegraf<IBotContext>) {
		super(bot);
	}

	handle() {
		const stepHandler = new Composer<IBotContext>();
		
		stepHandler.action('mainmenu', async (ctx: IBotContext) => {
			return await ctx.scene.leave();
		});
		stepHandler.action('learn_watch', async (ctx: IBotContext) => {
			ctx.session.learnState = true;
			// await ctx.telegram.sendVideo(ctx.chat.id, { source: './src/public/videos/example.mp4'}, {
			// 	reply_markup: learn_step2_btn,
			// 	width: 320,
			// 	height: 180,
			// 	caption: learn_step2,
			// })
			return ctx.wizard.next();
		});

		this.scene = new Scenes.WizardScene(
			'learn',
			async ctx => {
				await ctx.reply(learn_step1, learn_step1_btn);
				return ctx.wizard.next();
			},
			stepHandler,
			async ctx => {
				await ctx.reply(learn_step3, backtomenu_btn);
				return await ctx.scene.leave();
			},
		);
	}
}