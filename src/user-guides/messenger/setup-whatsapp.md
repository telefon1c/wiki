---
label: Ссылки для клиентов и кнопки на сайте
order: -1
icon: paper-airplane
---

Для создания ссылки в письмах и на сайте, а также кнопки, по которым клиенты смогут перейти в чат в whatsapp с вашим корпоративным номером: <br>
1. Перейдите в **Звонки и сообщения** -> **Конструктор ссылок**.

<img class="miko-shadow play-on-hover"  
    src="/assets/whatsapp/wp_konstr.gif"
    alt="МИКО: смена схемы соединения"
/> 

2. В поле **Номер телефона** введите ваш корпоративный номер, который вы использовали для <a href='/get-started/whatsapp#подключение-whatsapp' target="_blank">интеграции.</a>
3. В поле **Текст сообщения** введите текст приглашения, который будет на странице, которую клиент откроет по ссылке.

<img class="miko-shadow"  
    src="/assets/whatsapp/konstr_ssil_0.png"
    alt="МИКО: формирование ссылок для whatsapp и html-кода кнопок"
/> 

4. В поле **Ваша ссылка** будет сформирована ссылка, которую вы можете вставить в письмо или на сайт.

<img class="miko-shadow"  
    src="/assets/whatsapp/konstr_ssil_1.png"
    alt="МИКО: ссылка для whatsapp"
/> 

При ее нажатии клиентом откроется страница с установленными вами текстом приветствия, и номером.

<img class="miko-shadow img-zoomable"  
    src="/assets/whatsapp/konstr_ssil_2.png"
    data-original="/assets/whatsapp/konstr_ssil_2.png"
    srcset="/assets/whatsapp/konstr_ssil_2_prev.png 1x, /assets/whatsapp/konstr_ssil_2.png 2x"
    alt="МИКО: страница написать в whatsapp"
/> 

## Создание кнопки на сайт.
1. 
<img class="miko-shadow"  
    src="/assets/whatsapp/wp_konstr_0.png"
    alt="МИКО: создание кнопки для whatsapp"
/>

2. В поле **HTML код для вставки на сайт** будет сформирован код, который добавляет на сайт кнопку.
3. Откройте файл **index.html** и вставьте первую часть кода в конце блока **head**.

<img class="miko-shadow play-on-hover"  
    src="/assets/whatsapp/wp_konstr_knop_0.gif"
    alt="МИКО: добавление кода кнопки в html файл"
/> 

4. Вторую часть кода вставьте в конец блока **body**.

<img class="miko-shadow"  
    src="/assets/whatsapp/konstr_ssil_kn.png"
    alt="МИКО: кнопка для whatsapp на сайте"
/>

При ее нажатии откроется та же страница, что и по ссылке.

<img class="miko-shadow play-on-hover"  
    src="/assets/whatsapp/wp_knop.gif"
    alt="МИКО: смена схемы соединения"
/> 

В конструкторе ссылок в поле **Текст сообщения** можно вставить одно из ключевых слов **www**, по которому будет маршрутизироваться входящее сообщение на установленную нами группу пользователей.