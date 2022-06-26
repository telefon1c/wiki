---
label: Подключение мессенджера Telegram к 1С
order: -1
icon: paper-airplane
---
## Создание бота
За образец взята <a href='https://helpdesk.bitrix24.ru/open/6352401/' target="_blank">инструкция битрикс24</a>, адаптированная под нашу задачу.
1. В программе **Telegram** (в веб-версии, в десктоп или мобильном приложении Telegram) в списке диалогов найти BotFather и нажать **Начать**.
2. Ввести команду создания нового бота `/newbot`.

<img class="miko-shadow"  
    src="/assets/user-guides/telegram/sozd_bot_0.png"
    alt="МИКО: создание бота в телеграм"
/> 

3. Укажите имя бота. По нему клиенты смогут обратиться к вашей компании через Telegram. <br>
В нашем примере это - **integrfciya_1C**.

<img class="miko-shadow"  
    src="/assets/user-guides/telegram/sozd_bot_1.png"
    alt="МИКО: создание бота в телеграм"
/> 

4. Далее укажите уникальное имя вашего бота (@username), на основании которого будет сформирована ссылка на вашего бота. <br>
Имя должно оканчиваться на **bot**. <br>
В нашем случае уникальное имя бота - **integrfciya_1C_bot**.

<img class="miko-shadow"  
    src="/assets/user-guides/telegram/sozd_bot_2.png"
    alt="МИКО: создание бота в телеграм"
/> 

5. Вам будет выдан токен доступа.

<img class="miko-shadow"  
    src="/assets/user-guides/telegram/sozd_bot_3.png"
    alt="МИКО: получение токена доступа к боту в телеграм"
/>