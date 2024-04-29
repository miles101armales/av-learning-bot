import { IBotContext } from '../../../models/context.interface';
import { Telegraf } from 'telegraf';
import { WizardScene } from 'telegraf/typings/scenes';

export abstract class Scene {
	public scene: WizardScene<IBotContext>
	constructor(public bot: Telegraf<IBotContext>) {}

	abstract handle(): void;
}