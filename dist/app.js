"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
const telegraf_1 = require("telegraf");
const config_service_1 = require("./utils/config/config.service");
const logger_service_1 = require("./utils/logger/logger.service");
const start_command_1 = require("./controllers/commands/start/start.command");
const mainMenu_command_1 = require("./controllers/commands/mainMenu/mainMenu.command");
const help_command_1 = require("./controllers/commands/help/help.command");
const course_command_1 = require("./controllers/commands/course/course.command");
const about_command_1 = require("./controllers/commands/about/about.command");
const learn_scene_1 = require("./controllers/scenes/learn/learn.scene");
const practice_scene_1 = require("./controllers/scenes/practice/practice.scene");
const telegraf_session_local_1 = __importDefault(require("telegraf-session-local"));
class Bot {
    constructor(configService, loggerService) {
        this.configService = configService;
        this.loggerService = loggerService;
        this.commands = [];
        this.scenes = [];
        this.scenesNames = [];
        this.bot = new telegraf_1.Telegraf(this.configService.get('TG_API'));
        this.bot.use(new telegraf_session_local_1.default({ database: 'sessions.json' })
            .middleware());
    }
    init() {
        try {
            this.commands = [
                new start_command_1.StartCommand(this.bot),
                new mainMenu_command_1.MainMenuCommand(this.bot),
                new help_command_1.HelpCommand(this.bot),
                new course_command_1.CourseCommand(this.bot),
                new about_command_1.AboutCommand(this.bot)
            ];
            for (const command of this.commands) {
                command.handle();
            }
            this.scenes = [
                new learn_scene_1.LearnScene(this.bot),
                new practice_scene_1.PracticeScene(this.bot),
            ];
            for (const scene of this.scenes) {
                scene.handle();
                this.scenesNames.push(scene.scene);
            }
            const stage = new telegraf_1.Scenes.Stage(this.scenesNames);
            this.bot.use(stage.middleware());
            this.bot.launch();
            this.loggerService.log('Бот успешно запущен');
            this.bot.action('practice', ctx => ctx.scene.enter('practice'));
            this.bot.action('learn', ctx => ctx.scene.enter('learn'));
            this.bot.command('practice', ctx => ctx.scene.enter('practice'));
            this.bot.command('learn', ctx => ctx.scene.enter('learn'));
        }
        catch (error) {
            this.loggerService.error(error);
        }
    }
}
exports.Bot = Bot;
const bot = new Bot(new config_service_1.ConfigService, new logger_service_1.LoggerService);
bot.init();
//# sourceMappingURL=app.js.map