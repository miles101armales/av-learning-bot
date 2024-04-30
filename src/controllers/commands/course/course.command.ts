import { Telegraf } from 'telegraf';
import { Command } from '../base/command.class';
import { course_txt, course_btn, course_keymoney_txt, course_invmaster_txt, course_airdrop_txt, course_tobuy_btn, backtomenu_btn } from '../../constants/messages';
import { IBotContext } from '../../../models/context.interface';

export class CourseCommand extends Command {
	constructor(bot: Telegraf<IBotContext>) {
		super(bot);
	}

	handle() {
		this.bot.command('course', (ctx) => {
			ctx.reply(course_txt, course_btn)
		})

		this.bot.action('course', (ctx) => {
			ctx.reply(course_txt, course_btn)
		})

		this.bot.action('keymoney', (ctx) => {
			// ctx.telegram.sendVideo(ctx.chat.id, { source: './src/public/videos/example.mp4'}, {
			// 	reply_markup: course_tobuy_btn,
			// 	width: 320,
			// 	height: 180,
			// 	caption: course_keymoney_txt,
			// })
		})

		this.bot.action('inv-master', (ctx) => {
			// ctx.telegram.sendVideo(ctx.chat.id, { source: './src/public/videos/example.mp4'}, {
			// 	reply_markup: course_tobuy_btn,
			// 	width: 320,
			// 	height: 180,
			// 	caption: course_invmaster_txt,
			// })
		})

		this.bot.action('airdrop', (ctx) => {
			// ctx.telegram.sendVideo(ctx.chat.id, { source: './src/public/videos/example.mp4'}, {
			// 	reply_markup: course_tobuy_btn,
			// 	width: 320,
			// 	height: 180,
			// 	caption: course_airdrop_txt,
			// })
		})

		this.bot.action('purchase', (ctx) => {
			ctx.reply('Мы будем очень рады увидеть вас в нашей школе!\n\nВскоре с вами свяжется наш менеджер!', backtomenu_btn)
		})

		this.bot.action('manager', (ctx) => {
			ctx.reply('Вскоре с вами свяжется наш менеджер!', backtomenu_btn)
		})
	}
}