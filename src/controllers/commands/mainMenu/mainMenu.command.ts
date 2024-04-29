import { Telegraf } from 'telegraf';
import { Command } from '../base/command.class';
import { mainmenu_txt } from '../../constants/messages';
import { mainmenu_btn } from '../../constants/messages';
import { IBotContext } from '../../../models/context.interface';

export class MainMenuCommand extends Command {
	constructor(bot: Telegraf<IBotContext>) {
		super(bot);
	}
	handle(): void {
		this.bot.action('mainmenu', (ctx) => {
			ctx.sendMessage(mainmenu_txt, mainmenu_btn);
		})
		this.bot.command('mainmenu', (ctx) => {
			ctx.sendMessage(mainmenu_txt, mainmenu_btn);
		})
	}

}