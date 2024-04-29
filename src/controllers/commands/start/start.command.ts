import { Telegraf } from 'telegraf';
import { Command } from '../base/command.class';
import { phoneRequire } from '../../constants/messages';
import { MainMenuCommand } from '../mainMenu/mainMenu.command';
import { IBotContext } from '../../../models/context.interface';

export class StartCommand extends Command {
	mainMenuCommand: MainMenuCommand;
	constructor(bot: Telegraf<IBotContext>) {
		super(bot);
	}
	handle(): void {
		this.bot.start((ctx) => {
			ctx.sendMessage(phoneRequire)
			ctx.session.username = ctx.from?.username ? ctx.from?.username : '';
			ctx.session.name = ctx.from?.first_name ? ctx.from?.first_name : '';
			ctx.session.chat_id = ctx.chat?.id ? ctx.chat?.id : NaN;
			ctx.session.learnState = false;
		});
		this.bot.hears(/^\+?[0-9]{1,3}[ -]?\(?[0-9]{3}\)?[ -]?[0-9]{3}[ -]?[0-9]{2}[ -]?[0-9]{2}$/, (ctx) => {
			ctx.session.phoneToCall = ctx.update.message?.text as string ? ctx.update.message?.text as string : '';
			ctx.reply(`Ваш номер:\n\n${ctx.session.phoneToCall}\n\nВерно?`, {
				reply_markup: {
					inline_keyboard: [
						[{text: 'Верно!', callback_data: 'mainmenu'}]
					]
				}
			});
		})
	}
}