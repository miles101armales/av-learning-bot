import { Telegraf } from 'telegraf';
import { Command } from '../base/command.class';
import { help_txt, backtomenu_btn } from '../../constants/messages';
import { IBotContext } from '../../../models/context.interface';


export class HelpCommand extends Command {
	constructor(bot: Telegraf<IBotContext>) {
		super(bot);
	}

	handle() {
		this.bot.command('help', (ctx, next) => {
			ctx.reply(help_txt, backtomenu_btn);
			return next();
		})

		this.bot.action('help', (ctx, next) => {
			ctx.reply(help_txt, backtomenu_btn);
			return next();
		})
	}
}