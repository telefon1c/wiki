---
icon: history
order: -3
---
# Интеграция 1С:ERP Управление предприятием с телефонией и чатами WhatsApp и Telegram

Интеграция 1С:ERP Управление предприятием с телефонией и чатами WhatsApp и Telegram превращает базу 1С:ERP в полноценный центр коммуникаций с клиентами. Данное решение обеспечивает автоматическую обработку входящих и исходящих звонков, а также позволяет вести переписку в популярных мессенджерах напрямую из интерфейса 1С:ERP Управление предприятием. Все звонки и сообщения фиксируются в базе данных, что обеспечивает полную историю взаимодействий.

## Звонки в 1С:ERP. Интеграция 1С:ERP с телефонией

### Обработка входящих звонков 

При входящем звонке система определяет клиента по номеру телефона, отображает соответствующую информацию и позволяет выполнить дополнительные действия при приеме вызова.

- **Если звонит клиент, номер которого уже есть в базе**, в баннере звонка отображается название организации. После ответа на звонок в 1С:ERP Управление предприятием автоматически открывается карточка клиента с историей всех взаимодействий (звонки, заказы, письма).

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_1.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_1.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_1.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_1.png 2x"
alt="МИКО в 1С:ERP : Входящий звонок от клиента, номер которого уже есть в базе"
/>

- **При входящем звонке от неизвестного клиента**,  баннер показывает только номер телефона. При ответе на звонок в 1С открывается форма для создания нового клиента. В 1С:ERP также можно использовать помощник регистрации нового партнера.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_2.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_2.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_2.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_2.png 2x"
alt="МИКО в 1С:ERP : Входящий звонок от неизвестного клиента"
/>

- **Если клиент уже есть в базе, но звонит с нового номера**, оператор может привязать к существующему клиенту, добавив этот номер в карточке клиента в 1С:ERP как дополнительный номер компании либо как номер контактного лица.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_3.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_3.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_3.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_3.png 2x"
alt="МИКО в 1С:ERP : Входящий звонок от клиента, который уже есть в базе, но звонит с нового номера"
/>

### Исходящие звонки в один клик

Исходящие звонки в 1С:ERP совершаются в один клик из карточки Партнера (Клиента), Контактного лица, Заказа клиента или документа Лента (доработанная Карточка клиента).

- **Исходящие звонки из карточки Партнера и Контактного лица** можно инициировать кнопкой Позвонить в командной панели или из вкладки Адреса и телефоны, нажав на кнопку с выпадающим списком в строке номера телефона и выбрав действие Позвонить.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_4.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_4.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_4.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_4.png 2x"
alt="МИКО в 1С:ERP : Исходящие звонки из карточки Партнера"
/>

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_5.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_5.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_5.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_5.png 2x"
alt="МИКО в 1С:ERP : Исходящие звонки из карточки Контактного лица"
/>

- **Исходящие звонки из документа Лента** выполняются по гиперссылке с номером компании в блоке Контактная информация или номером сотрудника клиента в блоке Контактные лица.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_6.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_6.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_6.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_6.png 2x"
alt="МИКО в 1С:ERP : Исходящие звонки из документа Лента"
/>

- **Исходящие звонки из Заказа клиента** выполняются через кнопку Позвонить на командной панели. При установлении соединения с клиентом система автоматически открывает карточку клиента с полной историей взаимодействий.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_7.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_7.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_7.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_7.png 2x"
alt="МИКО в 1С:ERP : Исходящие звонки из Заказа клиента"
/>

Панель телефонии для 1С позволяет звонить и при закрытой 1С:ERP. Если база открыта, при ответе клиента система откроет карточку с историей взаимодействий.

- **Исходящий звонок может быть инициирован через строку умного поиска в Панели телефонии**. При вводе в строку поиска номера телефона, имени клиента или контактного лица система отобразит подходящие варианты из базы 1С:ERP Управление предприятием. Для совершения звонка необходимо навести курсор на нужную строку и нажать на иконку телефонной трубки.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_8.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_8.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_8.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_8.png 2x"
alt="МИКО в 1С:ERP : Исходящий звонок через строку умного поиска в Панели телефонии для 1С"
/>

- **Исходящий звонок из истории звонков в Панели телефонии** совершается при нажатии на иконку телефонной трубки.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_9.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_9.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_9.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_9.png 2x"
alt="МИКО в 1С:ERP : Исходящий звонок из истории звонков в Панели телефонии для 1С"
/>

- **Ручной ввод номера в Панели телефонии для совершения исходящего вызова** осуществляется через номеронабиратель, с возможностью вставки скопированного номера, что удобно для звонков на номера, отсутствующие в базе 1С:ERP.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_10.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_10.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_10.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_10.png 2x"
alt="МИКО в 1С:ERP : Ручной ввод номера в Панели телефонии для 1С"
/>

### Перевод звонка на другого сотрудника

Перевод звонка другому сотруднику возможен как из Панели телефонии, так и из 1С:ERP. Перед выполнением перевода отображается список сотрудников с их статусами (онлайн/занят/нет в сети), что помогает оператору выбрать доступного коллегу перед выполнением перевода.

- **Консультативный перевод звонка по кнопке Перевод в окне активного разговора в Панели телефонии**. При клике на кнопку Перевод открывается окно со списком сотрудников, при выборе сотрудника система автоматически переводит клиента в режим удержания, в этот момент устанавливается соединение с сотрудником. После завершения консультативного разговора с коллегой система автоматически соединяет клиента с ранее выбранным сотрудником, обеспечивая непрерывность коммуникации.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_11.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_11.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_11.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_11.png 2x"
alt="МИКО в 1С:ERP : Консультативный перевод звонка по кнопке Перевод в окне активного разговора в Панели телефонии для 1С"
/>

- **Консультативный перевод звонка по кнопке Перевод в списке сотрудников в Панели телефонии**. При клике на кнопку Перевод клиент переводится в режим удержания, а инициатор перевода соединяется с коллегой. После завершения разговора с коллегой система автоматически соединяет клиента с целевым сотрудником без потери установленного соединения.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_12.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_12.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_12.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_12.png 2x"
alt="МИКО в 1С:ERP : Консультативный перевод звонка по кнопке Перевод в списке сотрудников в Панели телефонии для 1С"
/>

- **Консультативный перевод в Ленте в 1С:ERP в блоке активного звонка по кнопке Перевод**. При нажатии на кнопку Перевод система отобразит окно со списком доступных сотрудников в 1С, после выбора сотрудника клиент переводится в режим удержания, в это время инициируется соединение с коллегой. По завершении обсуждения с коллегой выполняет автоматическое соединение клиента с целевым оператором, сохраняя сеанса связи без необходимости повторного дозвона.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_13.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_13.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_13.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_13.png 2x"
alt="МИКО в 1С:ERP : Консультативный перевод в Ленте в 1С в блоке активного звонка по кнопке Перевод"
/>

- **Безконсультативный перевод в Панели телефонии по кнопке Перевод в списке сотрудников**. При поступлении входящего звонка сотрудник не снимая трубки, нажимает на кнопку Перевод в списке сотрудников. Система устанавливает соединение клиента с выбранным сотрудником, обеспечивая непрерывность коммуникации. Таким образом при поступлении второго звонка во время активного разговора пользователь может выполнить бесконсультативный перевод нового вызова без прерывания текущего соединения.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_14.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_14.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_14.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_14.png 2x"
alt="МИКО в 1С:ERP : Безконсультативный перевод в Панели телефонии для 1С по кнопке Перевод в списке сотрудников"
/>

### Функции супервизора в Панели телефонии для 1С

В Панели телефонии для 1С реализованы и доступны три режима подключения к активным звонкам:

- **Подслушать**: пользователь подключается к активному разговору в режиме прослушивания, при этом ни оператор, ни клиент его не слышат.
- **Шепнуть**: данный режим позволяет пользователю подключиться к активному вызову сотрудника с абонентом. При этом его услышит только коллега, абонент его голос не услышит.
- **Присоединиться к разговору**: пользователь подключается к активному звонку с возможностью участвовать в беседе, и его слышат все участники разговора.
  
<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_16.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_16.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_16.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_16.png 2x"
alt="МИКО в 1С:ERP : Функции супервизора в списке сотрудников Панели телефонии для 1С"
/>

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_15.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_15.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_15.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_15.png 2x"
alt="МИКО в 1С:ERP : Функции супервизора в Панели телефонии для 1С"
/>

Подключение к разговору выполняется автоматически, а смена режима в процессе разговора происходит без прерывания вызова.

В 1С:ERP Управление предприятием предусмотрено ограничение доступа к функциям супервизора, права назначаются только определённым пользователям или группам.

### Журнал звонков с записями разговоров, транскрибацией звонков в текст и ai анализом

В Журнале звонков 1С:ERP фиксируются все вызовы и отображаются в виде таблицы, содержащей в каждой строке следующую информацию: дата, время, клиент или номер телефона, если клиент не зарегистрирован в базе, сотрудники-участники разговора, длительность звонка и статус. Подробная информация по конкретному звонку доступна в разделе Сведения о звонке.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_17.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_17.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_17.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_17.png 2x"
alt="МИКО в 1С:ERP : Журнал звонков со всеми вызовами компании"
/>

Для прослушивания и скачивания записей звонков в 1С:ERP, к которым у сотрудника есть доступ, используется встроенный плеер. Отображается он в боковой панели в блоке Записи разговора.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_18.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_18.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_18.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_18.png 2x"
alt="МИКО в 1С:ERP : Прослушивание и скачивание разговоров в Журнале звонков"
/>

AI анализ позволяет быстро ознакомиться с содержанием диалога без прослушивания записи. В блоке AI анализ в 1С:ERP доступен результат аи анализа разговоров, который содержит ключевые моменты диалога.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_19.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_19.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_19.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_19.png 2x"
alt="МИКО в 1С:ERP : AI анализ звонков в Журнале звонков"
/>

Для получения полной информации о звонке в 1С:ERP Управление предприятием предусмотрена форма Детализация звонка, доступная по гиперссылке Подробнее в блоке Сведения о звонке.

В разделе Детализация звонка представлена следующая информация:

- Абсолютно все параметры звонка.
- Полная хронология вызова. Если звонок включал внутренние переводы, в детализации отображается полный маршрут вызова.
- Транскрибация записи разговора с разбивкой по спикерам.
- AI суммаризация по звонку с выделением ключевых моментов диалога.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_20.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_20.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_20.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_20.png 2x"
alt="МИКО в 1С:ERP : Детализация звонка"
/>

Если звонок поступил от нового номера, можно сразу создать карточку клиента прямо из Журнала звонков в 1С:ERP. Для этого надо нажать на кнопку Создать клиента в блоке Сведения о звонке. Все предыдущие звонки с этим номером будут привязаны автоматически к этому клиенту.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_21.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_21.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_21.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_21.png 2x"
alt="МИКО в 1С:ERP : Регистрация новых клиентов в Журнале звонков"
/>

Поиск и фильтры в Журнале звонков в 1С:ERP позволяют быстро находить нужные вызовы по разным параметрам.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_22.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_22.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_22.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_22.png 2x"
alt="МИКО в 1С:ERP : Фильтры и поиск в Журнале звонков"
/>

## Чаты в 1С:ERP. Интеграция 1С:ERP с WhatsApp и Telegram

### Написать первым клиенту в мессенджер

В 1С:ERP Управление предприятием можно инициировать чат в WhatsApp или Telegram, отправив первое сообщение клиенту прямо из 1С. Перед отправкой система проверяет наличие зарегистрированного аккаунта, привязанного к номеру, в выбранном мессенджере, и уведомляет пользователя, если клиент не использует данный мессенджер.

Отправка первого сообщения клиенту в 1С:ERP возможна из Карточки клиента. Для этого можно использовать кнопку Сообщение, выбрав нужный мессенджер из выпадающего списка,

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_23.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_23.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_23.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_23.png 2x"
alt="МИКО в 1С:ERP : Отправка первого сообщения клиенту из Карточки клиента 1С"
/>

либо кликнуть по номеру телефона в блоках Контактная информация или Контактные лица и в выпадающем списке меню выбрать пункт Написать в WhatsApp или Написать в Telegram.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_24.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_24.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_24.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_24.png 2x"
alt="МИКО в 1С:ERP : Отправка первого сообщения клиенту по номеру телефона в блоках Контактная информация или Контактные лица"
/>

Есть возможность инициировать диалог с клиентом из Заказа клиента в 1С:ERP, нажав на кнопку Написать в командной панели.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_25.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_25.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_25.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_25.png 2x"
alt="МИКО в 1С:ERP : Отправка первого сообщения клиенту из Заказа клиента в 1С"
/>

К сообщениям можно прикреплять файлы и другие вложения  (изображения, pdf документ, файл docx) через форму отправки сообщений в системе 1С:ERP. Также доступна функция использования шаблонов сообщений, для этого необходимо воспользоваться гиперссылкой Шаблон и выбрать нужный вариант из предложенного списка.

### Общение с клиентом в WhatsApp и Telegram

Функционал системы обеспечивает обработку входящих и исходящих сообщений WhatsApp и Telegram прямо в 1С:ERP Управление предприятием, через Панель телефонии для 1С и с мобильного телефона. Доступ к чатам реализован через несколько интерфейсов:

- В журнале Чатов в 1С:ERP чаты с клиентом распределяются по статусам обработки. Новые обращения размещаются в группе В очереди, а текущие активные диалоги - в группе В работе. Для ответа на новое обращение или продолжения коммуникации с клиентом пользователю необходимо выбрать конкретный чат из соответствующей группы и открыть его для просмотра и отправки сообщений.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_26.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_26.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_26.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_26.png 2x"
alt="МИКО в 1С:ERP : Чаты WhatsApp и Telegram в журнале Чатов в 1С"
/>

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_27.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_27.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_27.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_27.png 2x"
alt="МИКО в 1С:ERP : Чаты WhatsApp и Telegram в журнале Чатов в 1С. Открытый чат с клиентом"
/>

- В 1С:ERP в Ленте активные диалоги отображаются с кнопкой Открыть для мгновенного перехода к чату и продолжения взаимодействия с клиентом.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_28.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_28.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_28.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_28.png 2x"
alt="МИКО в 1С:ERP : Чаты WhatsApp и Telegram в Ленте"
/>

- В 1С:ERP Управление предприятием при работе с документом Заказ клиента нажатие кнопки Написать открывает форму отправки сообщения, позволяющую начать новый диалог с клиентом или продолжить общение в существующем активном чате WhatsApp или Telegram.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_29.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_29.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_29.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_29.png 2x"
alt="МИКО в 1С:ERP : Чаты WhatsApp и Telegram по кнопке из Заказа клиента"
/>

- В Панели телефонии для 1С во вкладке Чаты. В группе Мои чаты содержатся чаты, где текущий пользователь назначен ответственным. Группа Наблюдаемые включает чаты, в которых текущий пользователь является наблюдателем с возможностью отправки сообщений. Все новые входящие сообщения автоматически распределяются в раздел Очередь.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_30.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_30.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_30.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_30.png 2x"
alt="МИКО в 1С:ERP : Чаты WhatsApp и Telegram в Панели телефонии для 1С во вкладке Чаты"
/>

- При подключении своего Telegram-аккаунта через Telegram-центр 1С:ERP сотрудник может отвечать клиентам прямо со своего телефона, что позволяет оперативно отвечать на сообщения, даже если нет доступа к рабочему компьютеру. Все сообщения будут синхронизироваться в 1С:ERP.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_31.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_31.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_31.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_31.png 2x"
alt="МИКО в 1С:ERP : Чаты WhatsApp и Telegram в мобильном менеджера"
/>

### Передача чатов и добавление наблюдателей в чат

Первый ответивший клиенту сотрудник автоматически назначается ответственным, после чего чат переходит в статус В работе и становится доступным исключительно владельцу через интерфейс панели телефонии.

Для добавления участников в чат предусмотрена возможность добавления наблюдателей. Добавленные наблюдатели получают доступ к чату в Панели телефонии для 1С с возможностью отправки сообщений. Добавить наблюдателей можно:

- Открыв в 1С:ERP чат и указав в поле Наблюдатели в карточке чата сотрудников, которые будут наблюдателями в этом чате.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_32.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_32.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_32.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_32.png 2x"
alt="МИКО в 1С:ERP : Добавление наблюдателей в чат в 1С"
/>

- В Панели телефонии путем упоминания сотрудника в тексте сообщения.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_33.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_33.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_33.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_33.png 2x"
alt="МИКО в 1С:ERP : Добавление наблюдателей в чат в Панели телефонии для 1С"
/>

Помимо этого есть возможность сменить ответственного в чате. При передаче чата новый ответственный получает полные права владельца, а предыдущий - теряет доступ, если не был добавлен как наблюдатель. Сделать это можно:

- Открыв в 1С:ERP чат и выбрав нового ответственного сотрудника в соответствующем поле в карточке чата.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_34.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_34.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_34.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_34.png 2x"
alt="МИКО в 1С:ERP : Смена ответственного в 1С"
/>

- Через кнопку Передать чат в Панели телефонии. 

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_35.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_35.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_35.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_35.png 2x"
alt="МИКО в 1С:ERP : Смена ответственного в Панели телефонии для 1С"
/>

### Отправка вложений и счетов на оплату из 1С в чаты WhatsApp и Telegram 

Из 1С:ERP Управление предприятием и Панели телефонии для 1С можно отправлять и получать файлы любых форматов (изображения, pdf, docx и другие) через WhatsApp и Telegram.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_36.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_36.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_36.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_36.png 2x"
alt="МИКО в 1С:ERP : Отправка и получение вложений через WhatsApp и Telegram в Панели телефонии"
/>

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_37.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_37.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_37.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_37.png 2x"
alt="МИКО в 1С:ERP : Отправка и получение вложений через WhatsApp и Telegram в 1С"
/>

Также в 1С:ERP Управление предприятием реализована возможность отправлять счета клиенту в WhatsApp и Telegram напрямую из формы Счета на оплату. Данный функционал позволяет отправлять счета без необходимости дополнительного скачивания или сохранения файлов, документ формируется автоматически и прикрепляется к сообщению.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_38.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_38.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_38.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_38.png 2x"
alt="МИКО в 1С:ERP : Отправки счетов клиенту в WhatsApp и Telegram из 1С"
/>

### AI анализ чатов с клиентами

AI анализ диалога с клиентом доступен прямо в карточке чата по кнопке Получить анализ диалога.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_39.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_39.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_39.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_39.png 2x"
alt="МИКО в 1С:ERP : AI анализ чата по кнопке Получить анализ диалога в карточке чата"
/>

Результат автоматически сохраняется и отображается как в карточке чата, так и в журнале чатов в 1С:ERP. Если чат закрыли без предварительного анализа, система создает его автоматически. Это помогает быстро понять суть общения, не перечитывая всю переписку.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_40.png"
data-original="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_40.png"
srcset="/assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_40.png 1x, /assets/integration_into_configurations/integration_into_1cerp/integration_into_1cerp_40.png 2x"
alt="МИКО в 1С:ERP : AI анализ в журнале чатов в 1С"
/>