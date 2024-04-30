import { Composer, Scenes, Telegraf } from 'telegraf';
import { Scene } from '../base/scene.class';
import { warmup_step1, warmup_step2, warmup_step3, warmup_step4, warmup_step4_btn, warmup_watch_complete } from '../../../controllers/constants/messages';
import { IBotContext } from '../../../models/context.interface';

export class WarmUpScene extends Scene {
	warmup_index: any = 0;
	scene: Scenes.WizardScene<IBotContext>
	constructor(bot: Telegraf<IBotContext>) {
		super(bot);
	}
	handle(): void {
		const stepHandler = new Composer<IBotContext>();
		stepHandler.action('step2_1', async(ctx) => {
			this.warmup_index = 1;
			ctx.wizard.next();
		})

		stepHandler.action('step2_2', async(ctx) => {
			this.warmup_index = 2;
			ctx.wizard.next();
		})

		stepHandler.action('step2_3', async(ctx) => {
			this.warmup_index = 3;
			ctx.wizard.next();
		})

		stepHandler.action('step2_4', async(ctx) => {
			this.warmup_index = 4;
			ctx.wizard.next();
		})

		stepHandler.action('step2_5', async(ctx) => {
			this.warmup_index = 5;
			ctx.wizard.next();
		})

		stepHandler.action('step2_6', async(ctx) => {
			this.warmup_index = 6;
			ctx.wizard.next();
		})

		stepHandler.action('step2_7', async(ctx) => {
			this.warmup_index = 7;
			ctx.wizard.next();
		})

		stepHandler.action('step2_8', async(ctx) => {
			this.warmup_index = 8;
			ctx.wizard.next();
		})

		stepHandler.action('step2_9', async(ctx) => {
			this.warmup_index = 9;
			ctx.wizard.next();
		})

		stepHandler.action('step2_10', async(ctx) => {
			this.warmup_index = 10;
			ctx.wizard.next();
		})

		stepHandler.hears(/[1-9]|10/, async (ctx) => {
			this.warmup_index = ctx.msg.text;
			ctx.wizard.next();
		})

		const stepHandler1 = new Composer<IBotContext>();
		stepHandler1.action('form_complete', async (ctx) => {
			ctx.scene.leave();
		})

		this.scene = new Scenes.WizardScene(
			'warmup',
			async ctx => {
				await ctx.telegram.sendVideo(ctx.chat.id, { source: './src/public/videos/greeting_video_1.MOV'}, {
					reply_markup: warmup_watch_complete,
					width: 180,
					height: 320,
					caption: warmup_step1,
				})
				return ctx.wizard.next();
			},
			async ctx => {
				await ctx.reply(warmup_step2, {
					reply_markup: {
						inline_keyboard: [
							[{ text: '1', callback_data: 'step2_1' }, { text: '2', callback_data: 'step2_2' }, { text: '3', callback_data: 'step2_3' }],
							[{ text: '4', callback_data: 'step2_4' }, { text: '5', callback_data: 'step2_5' }, { text: '6', callback_data: 'step2_6' }],
							[{ text: '7', callback_data: 'step2_7' }, { text: '8', callback_data: 'step2_8' }, { text: '9', callback_data: 'step2_9' }],
							[{ text: '10', callback_data: 'step2_10' }]
						]
					}
				});
				return ctx.wizard.next();
			},
			stepHandler,
			async ctx => {
				await ctx.telegram.sendVideo(ctx.chat.id, { source: './src/public/videos/greeting_video_2.MOV'}, {
					reply_markup: warmup_watch_complete,
					width: 180,
					height: 320,
					caption: warmup_step3,
				})
				return ctx.wizard.next();
			},
			async ctx => {
				await ctx.reply(warmup_step4, warmup_step4_btn);
				return ctx.wizard.next();
			},
		);
	}
}