---
label: Ссылки для клиентов и кнопки на сайте
order: -2
icon: paper-airplane
---

## Ссылки типа "написать в whatsapp" .
Для создания ссылок в письмах и на сайте, по которым клиенты смогут перейти в чат в whatsapp с вашим корпоративным номером: <br>
1. Перейдите в **Звонки и сообщения** -> **Конструктор ссылок**.

<img class="miko-shadow play-on-hover"  
    src="/assets/whatsapp/wp_konstr.gif"
    alt="МИКО: смена схемы соединения"
/> 

2. В поле **Номер телефона** введите ваш корпоративный номер, который вы использовали для <a href='/get-started/whatsapp#подключение-whatsapp' target="_blank">интеграции.</a>
3. В поле **Текст сообщения** введите текст приглашения, который будет на странице, открытую клиентом по ссылке.

<img class="miko-shadow"  
    src="/assets/whatsapp/konstr_ssil_0.png"
    alt="МИКО: формирование ссылок для whatsapp и html-кода кнопок"
/> 

4. В поле **Ваша ссылка** будет сформирована ссылка, которую вы можете вставить в письмо или на сайт.

<img class="miko-shadow"  
    src="/assets/whatsapp/konstr_ssil_1.png"
    alt="МИКО: ссылка для whatsapp"
/> 

5. При ее нажатии клиентом откроется страница с установленными вами текстом приветствия, и номером.

<img class="miko-shadow img-zoomable"  
    src="/assets/whatsapp/konstr_ssil_2.png"
    data-original="/assets/whatsapp/konstr_ssil_2.png"
    srcset="/assets/whatsapp/konstr_ssil_2_prev.png 1x, /assets/whatsapp/konstr_ssil_2.png 2x"
    alt="МИКО: страница написать в whatsapp"
/> 

## Создание кнопки на сайт
1. Заполните в конструкторе ссылок текст приветствия, подходящий для письма по кнопке с сайта.

<img class="miko-shadow"  
    src="/assets/whatsapp/wp_konstr_0.png"
    alt="МИКО: создание кнопки для whatsapp"
/>

2. В поле **HTML код для вставки на сайт** будет сформирован код, который добавляет на сайт кнопку.
3. Откройте файл **index.html** и вставьте первую часть кода в конце блока **head**.

<img class="miko-shadow play-on-hover"  
    src="/assets/whatsapp/wp_konstr_knop.gif"
    alt="МИКО: добавление кода кнопки в html файл"
/> 

4. Вторую часть кода вставьте в конец блока **body**. Добавится кнопка внизу страницы, по нажатию которой откроется станица с приглашением написать в whatsapp.

<img class="miko-shadow play-on-hover"  
    src="/assets/whatsapp/wp_konstr_knop_0.gif"
    alt="МИКО: кнопка для whatsapp на сайте"
/>

##  Переход в чат по QR-коду
### 1 Вариант. Создание QR-кода на специализированном интернет-ресурсе
1. Создайте подходящую ссылку в конструкторе. 

<img class="miko-shadow"  
    src="/assets/whatsapp/konstr_ssil_qr.png"
    alt="МИКО: начало чата по QR-коду"
/>

2. Из полученной ссылки сгенерируйте QR-код, используя генератор  <a href='https://www.qrcode-monkey.com/' target="_blank">наподобие такого.</a>
3. Вставьте QR-код в баннер или распечатайте на визитке.
4. Клиент отсканирует данный код и направится в чат.
### 2 Вариант. Создание QR-кода в приложении "WhatsApp Business" 
1. Перейдите. **Настройки -> Инструменты для бизнеса -> Короткая ссылка**. 
2. Включите переключатель **Сообщение**. Вставьте текст приветствия в поле под переключателем.
3. Нажмите **Показать QR-код**.

<img class="miko-shadow play-on-hover"  
    src="/assets/whatsapp/wp_bus.gif"
    alt="МИКО: маршрутизация входящих сообщений"
/>

4. Данный QR-код можно отсканировать приложением WhatsApp (или WhatsApp Business) и перейти в чат с вашим корпоративным номером.
