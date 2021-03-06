---
label: Маршрутизация по ключевым словам
order: -4
icon: paper-airplane
---

В конструкторе ссылок в поле **Текст сообщения** можно вставить одно из ключевых слов, по которому будет маршрутизироваться входящее сообщение. <br>
В приведенном примере создания ссылки <a href='/user-guides/messenger/setup-whatsapp#ссылки-типа-написать-в-whatsapp-' target="_blank">написать в whatsapp</a> ключевое слово в начале приглашения - **email524**. <br>
В примере создания <a href='/user-guides/messenger/setup-whatsapp/#создание-кнопки-на-сайт' target="_blank">кнопки на сайте</a> ключевое слово в начале приглашения - **www**. 

Сами правила маршрутизации устанавливаются в **Звонки и сообщения** -> **Настройки мессенджера** -> **Правила маршрутизации сообщений**.

<img class="miko-shadow play-on-hover"  
    src="/assets/whatsapp/marshrut/wp_marshrut_0.gif"
    alt="МИКО: маршрутизация входящих сообщений"
/>

<img class="miko-shadow"  
    src="/assets/whatsapp/marshrut/wp_marshrut_0.png"
    alt="МИКО: маршрутизация входящих сообщений"
/>

В зависимости от ключевого слова, которое присутствовало в тексте приглашения, при переходе клиентом по ссылке, сообщение, которое клиент отправит на ваш корпоративный номер, будет направлено тому, кто установлен в поле **Группа / пользователь**. <br>
В данном примере, сообщения клиентов написавших с сайта, то есть с использованием ключевого слова **www** направятся пользователям состоящим в группе **Отдел продаж**. <br>
Сообщения клиентов, написавших с использованием ключевого слова **sam**, направятся пользователю **Самойлова Ирина**. <br>
Сообщения, отмаршрутизированные таким образом пользователю, имеют статус **в очереди**. То есть дальше такое сообщение нужно приять **в работу**.
