import { Telegraf } from 'telegraf';
import { Command } from '../base/command.class';
import { about_txt, backtomenu_btn } from '../../constants/messages';
import { IBotContext } from '../../../models/context.interface';

export class AboutCommand extends Command {
	constructor(bot: Telegraf<IBotContext>) {
		super(bot);
	}

	handle() {
		this.bot.command('about', (ctx, next) => {
			ctx.reply(about_txt, backtomenu_btn);
			return next();
		})

		this.bot.action('about', (ctx, next) => {
			ctx.reply(about_txt, backtomenu_btn);
			return next();
		})
	}
}