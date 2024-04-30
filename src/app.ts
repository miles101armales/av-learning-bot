import { Scenes, Telegraf, session } from 'telegraf';
import { ConfigService } from './utils/config/config.service';
import { LoggerService } from './utils/logger/logger.service';
import { Command } from './controllers/commands/base/command.class';
import { StartCommand } from './controllers/commands/start/start.command';
import { MainMenuCommand } from './controllers/commands/mainMenu/mainMenu.command';
import { HelpCommand } from './controllers/commands/help/help.command';
import { CourseCommand } from './controllers/commands/course/course.command';
import { AboutCommand } from './controllers/commands/about/about.command';
import { LearnScene } from './controllers/scenes/learn/learn.scene';
import { Scene } from './controllers/scenes/base/scene.class';
import { PracticeScene } from './controllers/scenes/practice/practice.scene';
import LocalSession from 'telegraf-session-local';
import { IBotContext } from './models/context.interface';
import { WarmUpScene } from './controllers/scenes/warmup/warmup.scene';

export class Bot {
	bot: Telegraf<IBotContext>;
	stage: any
	commands: Command[] = [];
	scenes: Scene[] = []
	scenesNames: Scenes.WizardScene<IBotContext>[] = []

	constructor(
		private readonly configService: ConfigService,
		private readonly loggerService: LoggerService
	) {
		this.bot = new Telegraf<IBotContext>(this.configService.get('TG_API'));
		this.bot.use(
			new LocalSession({ database: 'sessions.json'})
			.middleware()
		);
	}

	init() {
		try {
			this.commands = [
				new StartCommand(this.bot),
				new MainMenuCommand(this.bot),
				new HelpCommand(this.bot),
				new CourseCommand(this.bot),
				new AboutCommand(this.bot)
			];
			for (const command of this.commands) {
				command.handle();
			}
			this.scenes = [
				new LearnScene(this.bot),
				new PracticeScene(this.bot),
				new WarmUpScene(this.bot),
			]
			for (const scene of this.scenes) {
				scene.handle();
				this.scenesNames.push(scene.scene)
			}
			const stage = new Scenes.Stage(this.scenesNames);
			this.bot.use(stage.middleware())
			this.bot.launch();
			this.loggerService.log('Бот успешно запущен')

			this.bot.action('practice', ctx => ctx.scene.enter('practice'))
			this.bot.action('learn', ctx => ctx.scene.enter('learn'))
			this.bot.action('phone_complete', ctx => ctx.scene.enter('warmup'))

			this.bot.command('practice', ctx => ctx.scene.enter('practice'))
			this.bot.command('learn', ctx => ctx.scene.enter('learn'))

		} catch (error) {
			this.loggerService.error(error)
		}
	}
}

const bot = new Bot(new ConfigService, new LoggerService);

bot.init()