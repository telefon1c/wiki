---
icon: paste
order: -5
---
# Лента
Данная разработка МИКО, является разновидностью карточки партнера. Ее открытие можно установить, как действие, происходящее при звонке.
Она содержит в себе элементы CRM: историю взаимодействий с клиентом, команды создания заметок, задач, отправки SMS, писем.

## Поведение при звонках
### Звонок с неизвестного номера
В случае внешнего входящего звонка неизвестного клиента (или известного клиента с нового номера) открывается карточка клиента с незаполненным названием клиента. <br> При этом запоминается вся история взаимодействия с данным контактом. Она отображается в правой половине карточки.

<img class="miko-shadow play-on-hover"  
    src="/assets/user-guides/lenta/lan_otkr_vh_0.gif"
    alt="МИКО: открытие ленты при входящем звонке"
/> 


Если клиент звонит с нового номера в карточке клиента можно добавить этот номер в контактную информацию контрагента или присвоить его контактному лицу.  

Для этого нужно в поле **Представление в программе** нажать значок ![](/assets/user-guides/lenta/lupa.png), ввести в строке поиска название контрагента и, после выбора нужного контрагента, выбрать одно из действий: **добавить в контактную информацию** или **присвоить контактному лицу**.

<img class="miko-shadow play-on-hover"  
    src="/assets/user-guides/lenta/lan_prisv_0.gif"
    alt="МИКО: лента присвоение нового номера контактному лицу"
/> 

Аналогичным образом в карточке клиента создается новый клиент. Нужно в поле **Представление в программе** ввести его наименование, заполнить телефон и записать.

<img class="miko-shadow play-on-hover"  
    src="/assets/user-guides/lenta/lenta_sozd.gif"
    alt="МИКО: лента создание контрагента"
/> 

В правой части карточки находится лента. В ней хранится история взаимодействий с клиентом: звонки, заметки, чаты, письма.

<img class="miko-shadow img-zoomable"  
    src="/assets/user-guides/lenta/len_ist_0.png"
    data-original="/assets/user-guides/lenta/len_ist_0.png"
    srcset="/assets/user-guides/lenta/len_ist_0_prev.png 1x, /assets/user-guides/lenta/len_ist_0.png 2x" 
    alt="МИКО: лента история взаимодействий с клиентом"
/> 

### Звонок известного клиента
В случае внешнего входящего звонка с номера который принадлежит клиенту или его контактному лицу при поднятии трубки откроется карточка данного клиента.

<img class="miko-shadow play-on-hover"  
    src="/assets/user-guides/lenta/len_vh_zv_izv.gif"
    alt="МИКО: лента звонок известного клиента"
/> 

### Действия при активном звонке
Во время звонка клиенту (входящего или исходящего) в ленте можно оставить комментарий, а также завершить звонок кнопкой ![](/assets/user-guides/lenta/len_zaversh.png). <br>
После окончания разговора можно перезвонить клиенту по кнопке ![](/assets/user-guides/lenta/len_perezv.png).

<img class="miko-shadow play-on-hover"  
    src="/assets/user-guides/lenta/len_deystv_akt_zv.gif"
    alt="МИКО: лента звонок известного клиента"
/> 

## Элементы CRM в ленте
### Комментарий
Есть возможность оставлять заметки по взаимодействию с клиентом. Для этого нужно нажать **Комментарий**, ввести текст и нажать **Сохранить**

<img class="miko-shadow play-on-hover"  
    src="/assets/user-guides/lenta/len_komm.gif"
    alt="МИКО: лента заметка"
/> 

### Задача
Можно создать задачу. Для этого нудно нажать **Задача**, ввести текст, выбрать исполнителя и крайний срок и нажать **Сохранить**.

<img class="miko-shadow play-on-hover"  
    src="/assets/user-guides/lenta/len_zad.gif"
    alt="МИКО: лента задача"
/> 

### SMS
Можно отправить смс-сообщение на мобильный телефон клиента. Для этого должен быть подключен сервис <a href='https://www.sms4b.ru/' target="_blank">sms4b</a>
Для отправки смс нужно нажать **SMS**, ввести текст и нажать **Отправить**.

<img class="miko-shadow play-on-hover"  
    src="/assets/user-guides/lenta/len_sms.gif"
    alt="МИКО: лента sms"
/>

Клиенту поступит СМС-сообщение.

<img class="miko-shadow"  
    src="/assets/user-guides/lenta/len_sms_poluch.png"
    alt="МИКО: лента отправка СМС"
/> 

### Письмо
Можно писать письма клиентам. Для этого в базе должна быть настроена электронная почта.

<img class="miko-shadow play-on-hover"  
    src="/assets/user-guides/lenta/len_pismo.gif"
    alt="МИКО: лента отправка писем"
/>

### Напоминание
Есть возможность оставлять напоминания. Для этого нужно нажать **Напоминание**, выбрать время и нажать **Создать напоминание**.

<img class="miko-shadow play-on-hover"  
    src="/assets/user-guides/lenta/len_napom.gif"
    alt="МИКО: лента создание напоминаний"
/>

### Прочие элементы
В зависимости от конфигурации по кнопке **Еще** могут быть доступны другие элементы: интерес, заказ и другие.

<img class="miko-shadow img-zoomable"  
    src="/assets/user-guides/lenta/len_eshe.png"
    data-original="/assets/user-guides/lenta/len_eshe.png"
    srcset="/assets/user-guides/lenta/len_eshe_prev.png 1x, /assets/user-guides/lenta/len_eshe.png 2x" 
    alt="МИКО: прочие элементы CRM"
/> 

## Отбор и поиск
### Отбор
Для удобства отображения элементов взаимодействия есть кнопки отбора: **задачи**, **документы**, **коммуникации**, **заметки**.

<img class="miko-shadow play-on-hover"  
    src="/assets/user-guides/lenta/len_otbor.gif"
    alt="МИКО: лента отбор"
/>

### Поиск
Воспользовавшись поиском можно найти определенные объекты взаимодействия. 

<img class="miko-shadow play-on-hover"  
    src="/assets/user-guides/lenta/len_poisk.gif"
    alt="МИКО: лента поиск"
/>