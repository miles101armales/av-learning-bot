export const phoneRequire = 'Для начала введите ваш номер телефона для связи';

export const mainmenu_txt = 'Добро пожаловать в чат-бота Школы Азата Валеева! Выбери кнопку ниже для действия!'
export const mainmenu_btn = {
	reply_markup: {
		inline_keyboard: [
			[{ text: 'Начать обучение', callback_data: 'learn' }],
			[{ text: 'Практика и задания', callback_data: 'practice' }],
			[{ text: 'Попасть в школу', callback_data: 'course' }],
			[{ text: 'О нас', callback_data: 'about' }, { text: 'Помощь', callback_data: 'help' }]
		]
	}
}

export const about_txt = `Наш канал с новостями и обзорами:\n\nhttps://t.me/+DO3tiCLpp-RiMjli`

export const help_txt = 
'Этот чат-бот предназчен для ознакомительного обучения. Здесь вы получите доступ к первым урокам наших курсов.' +
'\n\nКоманды, которые поддерживает этот бот:' +
'\n\n/learn - Начать обучение' +
'\n/practice - Проверить знания' +
'\n/course - Попасть в школу' +
'\n/about - Наш телеграм канал'

export const backtomenu_btn = {
	reply_markup: {
		inline_keyboard: [
			[{ text: 'Вернуться в меню', callback_data: 'mainmenu'}]
		]
	}
}

export const course_txt = 'Выберите курс обучения:'
export const course_btn = {
	reply_markup: {
		inline_keyboard: [
			[{ text: 'Деньги под ключ', callback_data: 'keymoney' }],
			[{ text: 'Мастер инвестиций', callback_data: 'inv-master' }],
			[{ text: 'Миллион на дропах', callback_data: 'airdrop' }]
		]
	}
}

export const course_keymoney_txt = 'Курс "Деньги под ключ"\n\nСтоимость: 350 000 рублей'
export const course_invmaster_txt = 'Курс "Мастер инвестиций"\n\nСтоимость: 500 000 рублей'
export const course_airdrop_txt = 'Курс "Миллион на дропах"\n\nСтоимость: 120 000 рублей'

export const course_tobuy_btn = {
	inline_keyboard: [
		[{ text: 'Оставить заявку', callback_data: 'purchase' }],
		[{ text: 'Связаться с менеджером', callback_data: 'manager' }],
		[{ text: 'Вернуться в меню', callback_data: 'mainmenu' }]
	]
}

export const learn_step1 = 'Вам доступные следующие уроки:\n\n1. Как заработать миллион на дропах: Начало\nДлительность: 3:13'
export const learn_step1_btn = {
	reply_markup: {
		inline_keyboard: [
			[{ text: 'Смотреть', callback_data: 'learn_watch' }],
			[{ text: 'Вернуться в меню', callback_data: 'mainmenu' }]
		]
	}
}

export const learn_step2 = 'Как заработать миллион на дропах\n\nВ этом курсе вы узнаете:' +
'\n\nЧто такое дропы?' +
'\n\nКак их искать?' +
'\n\nС чем их есть?' +
'После просмотра нажми на кнопку "Просмотрено"'
export const learn_step2_btn = {
	inline_keyboard: [
		[{ text: 'Просмотрено', callback_data: 'learn_complete' }]
	]
}

export const learn_step3 = 'Поздравляем с просмотром!\n\nПройдите тест в отделе “Практика и задания” для получения чек листа'

export const practice_step1 = 'Тест содержит 5 вопросов. После успешного завершения, вы получите чек-лист'
export const practice_step1_btn = {
	reply_markup: {
		inline_keyboard: [
			[{ text: 'Начать', callback_data: 'continue' }],
			[{ text: 'Вернуться в меню', callback_data: 'mainmenu' }]
		]
	}
}

export const practice_step2 = 'Что такое дропы?\n\nВыбери ответ снизу ⬇'
export const practice_step2_btn = {
	reply_markup: {
		inline_keyboard: [
			[{ text: 'Раздача токенов', callback_data: 'correct_1' }],
			[{ text: 'Падение', callback_data: 'incorrect_1' }]
		]
	}
}

export const practice_step3 = 'В какой момент дропы могут вырасти в 1000х?\n\nВыбери ответ снизу ⬇'
export const practice_step3_btn = {
	reply_markup: {
		inline_keyboard: [
			[{ text: 'При раздаче', callback_data: 'incorrect_2' }],
			[{ text: 'При листинге', callback_data: 'correct_2' }]
		]
	}
}

export const practice_step4 = 'Вам понравился урок?\n\nВыбери ответ снизу ⬇'
export const practice_step4_btn = {
	reply_markup: {
		inline_keyboard: [
			[{ text: 'Нет!', callback_data: 'incorrect_3' }],
			[{ text: 'Очень!', callback_data: 'correct_3' }]
		]
	}
}

export const practice_success = 'Все верно! Вы большой молодец. Так держать'

export const practice_fail = 'Кажется вы допустили ошибку. Попробуйте еще раз!'
export const practice_fail_btn = {
	reply_markup: {
		inline_keyboard: [
			[{ text: 'Повторить', callback_data: 'restart' }],
			[{ text: 'Вернуться в меню', callback_data: 'mainmenu' }]
		]
	}
}

export const warmup_watch_complete = {
		inline_keyboard: [
			[{ text: 'Просмотрено', callback_data: 'watch1_complete' }]
		]
}

export const warmup_step1 = 'Приветствуем! Смотри видео ниже ⬇'

export const warmup_step2 = 'Оцените свое желание двигаться дальше:\n\nНапишите сообщение ниже с цифрой от 1 до 10'

export const warmup_step3 = 'Спасибо за ваш ответ. Вот следующее видео'

export const warmup_step4 = 'Благодарим за просмотр урока!\n\nhttps://forms.gle/sKr2itz2od4fEPSE8\n\nЗаполните небольшую форму и после нажмите кнопку "Заполнил!"'
export const warmup_step4_btn = {
	reply_markup: {
		inline_keyboard: [
			[{ text: 'Заполнил', callback_data: 'form_complete' }]
		]
	}
}
