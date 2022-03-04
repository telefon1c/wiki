---
label: Интеграция с WhatsApp
order: -5
icon: tools
---
Подключите **WhatsApp** и принимайте сообщения от клиентов в панели
телефонии через единый корпоративный номер.

Следуйте инструкции для настройки подключения.

## Подключение WhatsApp

Для работы с мессенджером потребуется телефон, на котором установленно приложение **WhatsApp** или
**WhatsApp Business**.

1. Запустите сеанс 1С:Предприятие и в разделе "**Звонки и сообщения**" откройте <br> "**Настройки мессенджера**". На экране
   отобразится QR-код.
   
<img class="miko-shadow"  
    src="/assets/whatsapp/wp_0.gif"
    data-original="/assets/whatsapp/wp_0.gif"
    srcset="/assets/whatsapp/wp_0_prev.gif 1x, /assets/whatsapp/wp_0.gif 2x" 
    alt="МИКО: whatsapp отсканировать qr код"
/> 
   
2. Откройте приложение **WhatsApp** или **WhatsApp Business** на своём телефоне.
!!!warning Поддержание связи
Чтобы связь не прерывалась, рекомендуем использовать отдельный телефон подключенный к Wi-Fi и электрической сети.
!!!

### На Android   
- Перейдите в "**Настройки**" WhatsApp. <br>
- Нажмите на кнопку с qr-кодом. <br>
- Перейдите на закладку "**Сканировать код**". <br>
- С помощью телефона просканируйте QR-код на своём компьютере. Если время действия QR-кода истекло, нажмите
   "**Обновить код**".

<img class="miko-shadow"  
    src="/assets/whatsapp/wp_andr.gif"
    alt="МИКО: whatsapp подключение android"
/> 

### На IPhone 

- Перейдите в "**Настройки**" WhatsApp.
- Нажмите "**Связанные устройства**".
- Нажмите "**Привязка устройства**" > "**ОК**".
- С помощью телефона просканируйте QR-код на своём компьютере. Если время действия QR-кода истекло, нажмите
   "**Обновить код**".

<img class="miko-shadow"  
    src="/assets/whatsapp/wp_iph.gif"
    alt="МИКО: whatsapp подключение iphone"
/> 

## Настройка синхронизации

Для обмена сообщениями с WhatsApp применяется регламентное задание. Убедить, что у информационной базы отключена
блокировка регламентных заданий и включите опцию "**Синхронизировать сообщения**".

<img class="miko-shadow img-zoomable"  
    src="/assets/whatsapp/wp_1.png"
    data-original="/assets/whatsapp/wp_1.png"
    srcset="/assets/whatsapp/wp_1_prev.png 1x, /assets/whatsapp/wp_1.png 2x" 
    alt="МИКО: whatsapp синхронизироват сообщения"
/> 

Настройке расписание регламентного задания. Входящие сообщения поступают моментально, время отправки исходящих
сообщений будет зависеть от установленного расписания.

<img class="miko-shadow img-zoomable"  
    src="/assets/whatsapp/wp_2.gif"
    data-original="/assets/whatsapp/wp_2.gif"
    srcset="/assets/whatsapp/wp_2_prev.gif 1x, /assets/whatsapp/wp_2.gif 2x" 
    alt="МИКО: whatsapp расписание регламентного задания"
/> 

## Создание очереди участников

Заполните **Очередь сотрудников**, указав тех пользователей, которые будут получать уведомления при поступлении
новых сообщений.

<img class="miko-shadow img-zoomable"  
    src="/assets/whatsapp/wp_3.gif"
    data-original="/assets/whatsapp/wp_3.gif"
    srcset="/assets/whatsapp/wp_3_prev.gif 1x, /assets/whatsapp/wp_3.gif 2x" 
    alt="МИКО: whatsapp добавить сотрудников в очередь"
/> 
!!! info
Право читать и отправлять сообщения, получают все пользователи состоящие в группе доступа
**МИКО: Пользователи телефонии и мессенджера**.
!!!
## Прием входящего сообщения
Теперь сообщения, отправленные в WhatsApp на номер, к которому вы привязывали панель телефонии в пункте [Подключение WhatsApp](#этап-1-подключение-whatsapp) будут отображаться у сотрудников, которых вы сделали участниками очереди в предыдущем пункте. 

<img class="miko-shadow img-zoomable"  
    src="/assets/whatsapp/wp_vh.gif"
    data-original="/assets/whatsapp/wp_vh.gif"
    srcset="/assets/whatsapp/wp_vh_prev.gif 1x, /assets/whatsapp/wp_vh.gif 2x" 
    alt="МИКО: whatsapp прием входящего сообщения"
/> 
