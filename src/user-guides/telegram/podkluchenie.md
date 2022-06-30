---
label: Подключение мессенджера Telegram к 1С
order: -1
icon: paper-airplane
---
## Создание бота
За образец взята <a href='https://helpdesk.bitrix24.ru/open/6352401/' target="_blank">инструкция битрикс24</a>, адаптированная под нашу задачу.
1. В программе **Telegram** (в веб-версии, в десктоп или мобильном приложении Telegram) в списке диалогов найти **BotFather** и нажать **Запустить**.

<img class="miko-shadow"  
    src="/assets/user-guides/telegram/sozd_bot_4.png"
    alt="МИКО: создание бота в телеграм"
/> 

2. Ввести команду создания нового бота `/newbot`.

<img class="miko-shadow"  
    src="/assets/user-guides/telegram/sozd_bot_0.png"
    alt="МИКО: создание бота в телеграм"
/> 

3. Укажите имя бота.<br>
В нашем примере это - **integr_1C**.

<img class="miko-shadow"  
    src="/assets/user-guides/telegram/sozd_bot_1.png"
    alt="МИКО: создание бота в телеграм"
/> 

4. Далее укажите уникальное имя вашего бота (@username), на основании которого будет сформирована ссылка на вашего бота. <br>
Имя должно оканчиваться на **bot**. <br>
В нашем случае уникальное имя бота - **integr_1C_bot**.

<img class="miko-shadow"  
    src="/assets/user-guides/telegram/sozd_bot_2.png"
    alt="МИКО: создание бота в телеграм"
/> 

5. Вам будет выдан токен доступа. Скопируйте его себе, он будет нужен в дальнейшем.

<img class="miko-shadow"  
    src="/assets/user-guides/telegram/sozd_bot_3.png"
    alt="МИКО: получение токена доступа к боту в телеграм"
/>

## Подключение в подсистеме телефонии 1С

1. Зайдите в **Звонки и сообщения** -> **Настройки мессенджера**.

<img class="miko-shadow play-on-hover"  
    src="/assets/user-guides/telegram/nastroyki_mess_0.gif"
    alt="МИКО: настройки мессенджера"
/>

2. Включите переключатель напротив **Telegram**, и нажмите кнопку **Настроить**.

<img class="miko-shadow play-on-hover"  
    src="/assets/user-guides/telegram/podkluch_teleg_0.gif"
    alt="МИКО: подключение телеграм в 1С"
/>

3. В поле **Токен** вставьте скопированный ранее токен доступа чат-бота. <br>
Нажмите кнопку **Проверить подключение**. <br>
Ответьте утвердительно на вопрос о создании нового вида контактной информации. <br>
Ниже кнопки **Проверить подключение** отобразится уникальное имя телеграм-бота, с которым установлено соединение. 

<img class="miko-shadow play-on-hover"  
    src="/assets/user-guides/telegram/podkluch_teleg_1.gif"
    alt="МИКО: подключение телеграм в 1С"
/>