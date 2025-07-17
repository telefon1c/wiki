---
icon: history
order: -1
---
# Интеграция 1С:Комплексная автоматизация с телефонией и чатами WhatsApp и Telegram

Интеграция 1С:Комплексная автоматизация с телефонией и чатами WhatsApp и Telegram позволяет превратить 1С:КА в единый коммуникационный центр для работы с клиентами. Решение обеспечивает автоматическую обработку входящих и исходящих звонков, а также обмен сообщениями напрямую из интерфейса 1С:Комплексная автоматизация, все взаимодействия фиксируются в базе.

## Звонки в 1С:КА. Интеграция 1С:КА с телефонией

### Обработка входящих звонков 

При поступлении звонка сотруднику система автоматически распознает клиента по номеру телефона, что дает возможность определить название клиента и выполнить дополнительные действия при приеме звонка. 

- **При входящем звонке от клиента, номер которого уже есть в базе**, название клиента отображается в баннере звонка. При ответе на звонок в 1С:Комплексная автоматизация автоматически откроется карточка клиента с полной историей взаимодействий (звонки, заказы, письма).
  
<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_1.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_1.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_1.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_1.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

- **При входящем звонке от неизвестного клиента**, в баннере звонка отображается только номер телефона звонящего. При ответе на звонок в 1С: Комплексная автоматизация откроется карточка создания нового клиента в базе. В 1С:КА можно выбрать альтернативный вариант сохранения нового клиента - помощник регистрации нового партнера.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_2.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_2.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_2.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_2.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

- **Если клиент уже есть в базе, но звонит с нового номера**, можно привязать этот номер к существующей карточке клиента — как номер компании, добавив в контактную информацию, или как номер сотрудника, присвоив контактному лицу.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_3.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_3.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_3.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_3.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

### Исходящие звонки в один клик

Исходящие звонки в 1С:Комплексная автоматизация совершаются всего в 1 клик из карточки Партнера (Клиента), карточки Контактного лица, Заказа клиента или документа Лента (доработанная Карточка клиента).

- **Исходящие звонки из карточки Партнера и Контактного лица** выполняются при нажатии на кнопку Позвонить в командной панели. Также можно совершить вызов во вкладке Адреса и телефоны кликнув на кнопку с выпадающим списком в строке номера телефона и выбрав действие Позвонить. При ответе клиента на звонок откроется карточка клиента со всей историей взаимодействий.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_4.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_4.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_4.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_4.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_5.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_5.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_5.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_5.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

- **Исходящие звонки из документа Лента** совершаются при нажатии на гиперссылку с номером компании в блоке Контактная информация или номером сотрудника клиента в блоке Контактные лица.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_6.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_6.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_6.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_6.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

- **Исходящие звонки из Заказа клиента** инициируются нажатием кнопки Позвонить в командной панели. При установлении соединения с клиентом система автоматически открывает карточку клиента с полной историей взаимодействий.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_7.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_7.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_7.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_7.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

Панель телефонии позволяет совершать и принимать звонки даже при закрытой 1С:Комплексная автоматизация. Если база 1С:КА открыта, то при ответе клиента на звонок откроется карточка клиента со всей историей взаимодействий.

- **Исходящий звонок может быть инициирован через строку умного поиска в Панели телефонии**. При вводе в строку поиска номера телефона, имени клиента или его контактного лица система отобразит подходящие варианты из базы 1С:Комплексная автоматизация. Для совершения звонка необходимо навести курсор на нужную строку и нажать на иконку телефонной трубки.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_8.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_8.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_8.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_8.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

- **Исходящий звонок из истории звонков в Панели телефонии** совершается путем нажатия на иконку телефонной трубки.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_9.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_9.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_9.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_9.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

- **Ручной ввод номера в Панели телефонии для совершения исходящего вызова** осуществляется через номеронабиратель, поддерживающий вставку скопированного номера, к примеру из электронного письма. Функция позволяет звонить на номера телефонов, которых нет еще в базе 1С:КА. 

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_10.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_10.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_10.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_10.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

### Перевод звонка на другого сотрудника

Перевод звонка другому сотруднику можно осуществить из Панели телефонии для 1С или из 1С:Комплексная автоматизация. При инициации перевода система отображает актуальный список сотрудников с указанием их текущего статуса доступности (онлайн/занят/не в сети), что позволяет оператору предварительно убедиться в возможности принятия вызова выбранным сотрудником перед выполнением перевода.

- **Консультативный перевод звонка по кнопке Перевод в окне активного разговора в Панели телефонии**. При клике на кнопку Перевод открывается окно со списком сотрудников, при выборе сотрудника система автоматически переводит клиента в режим удержания, в этот момент устанавливается соединение с сотрудником. После завершения консультативного разговора с коллегой система автоматически соединяет клиента с ранее выбранным сотрудником, обеспечивая непрерывность коммуникации.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_11.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_11.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_11.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_11.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

- **Консультативный перевод звонка по кнопке Перевод в списке сотрудников в Панели телефонии**. При клике на кнопку Перевод клиент переводится в режим удержания, а инициатор перевода соединяется с коллегой. После завершения разговора с коллегой система автоматически соединяет клиента с целевым сотрудником без потери установленного соединения.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_12.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_12.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_12.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_12.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

- **Консультативный перевод в Ленте в 1С:КА в блоке активного звонка по кнопке Перевод**. При нажатии на кнопку Перевод система отобразит окно со списком доступных сотрудников в 1С, после выбора сотрудника клиент переводится в режим удержания, в это время инициируется соединение с коллегой. По завершении обсуждения с коллегой выполняет автоматическое соединение клиента с целевым оператором, сохраняя сеанса связи без необходимости повторного дозвона.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_13.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_13.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_13.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_13.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

- **Безконсультативный перевод в Панели телефонии по кнопке Перевод в списке сотрудников**. При поступлении входящего звонка сотрудник не снимая трубки, нажимает на кнопку Перевод в списке сотрудников. Система устанавливает соединение клиента с выбранным сотрудником, обеспечивая непрерывность коммуникации. Таким образом при поступлении второго звонка во время активного разговора пользователь может выполнить бесконсультативный перевод нового вызова без прерывания текущего соединения. 

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_14.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_14.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_14.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_14.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

### Функции супервизора в Панели телефонии для 1С

В Панели телефонии для 1С реализована функция супервизора, которая позволяет подключаться к активным звонкам в трех режимах: 

- **Подслушать**: пользователь подключается к активному разговору в режиме прослушивания, при этом ни оператор, ни клиент его не слышат.
- **Шепнуть**: данный режим позволяет пользователю подключиться к активному вызову сотрудника с абонентом. При этом его услышит только коллега, абонент его голос не услышит.
- **Присоединиться к разговору**: пользователь подключается к активному звонку с возможностью участвовать в беседе, и его слышат все участники разговора.
  
<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_16.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_16.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_16.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_16.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_15 .png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_15.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_15.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_15.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

Подключение к текущему вызову осуществляется автоматически. В процессе разговора возможна смена режима супервизора без прерывания соединения.

В конфигурации 1С:Комплексная автоматизация предусмотрен механизм ограничения доступа к функциям супервизора: право супервизора может быть назначено только определённым пользователям или группам пользователей.

### Журнал звонков с записями разговоров, транскрибацией звонков в текст и ai анализом

В Журнале звонков в 1С:Комплексная автоматизация фиксируются все входящие и исходящие вызовы компании. Каждый звонок отображается в виде строки таблицы, содержащей дату и время, имя клиента (или номер телефона, если клиент не зарегистрирован в базе), имена сотрудников-участников разговора, длительность разговора и статус вызова. Подробная информация по конкретному звонку доступна в разделе Сведения о звонке.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_17.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_17.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_17.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_17.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

В 1С:КА для прослушивания и скачивания разговоров, к которым у сотрудника есть доступ, используется встроенный плеер, отображаемый в боковой панели в блоке Записи разговора. 

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_18.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_18.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_18.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_18.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

В блоке AI анализ в 1С:КА доступен результат аи анализа разговоров, который содержит ключевые моменты диалога. Функционал предназначен для оперативного ознакомления с содержанием звонков без необходимости прослушивания аудиозаписей.


<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_19.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_19.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_19.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_19.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

Для получения полной информации о звонке в 1С:Комплексная автоматизация предусмотрена форма Детализация звонка, доступная по гиперссылке Подробнее в блоке Сведения о звонке.

В разделе Детализация звонка представлена следующая информация:

- Абсолютно все параметры звонка.
- Полная хронология вызова. Если звонок включал внутренние переводы, в детализации отображается полный маршрут вызова.
- Транскрибация записи разговора с разбивкой по спикерам.
- AI суммаризация по звонку с выделением ключевых моментов диалога.


<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_20.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_20.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_20.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_20.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

Журнал звонков в 1С:КА также предоставляет функции по регистрации новых клиентов. При наличии входящего вызова с незарегистрированного номера сотрудник может создать карточку нового клиента при нажатии на кнопку Создать клиента в блоке Сведения о звонке. Все предыдущие звонки с этим номером будут автоматически связаны с этим клиентом.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_21.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_21.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_21.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_21.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

В Журнале звонков в 1С:КА доступен механизм фильтрации и поиска, позволяющий быстро находить нужные звонки по разным параметрам. 

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_22.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_22.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_22.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_22.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

## Чаты в 1С:КА. Интеграция 1С:КА с WhatsApp и Telegram

### Написать первым клиенту в мессенджер

В системе 1С:Комплексная автоматизация реализована возможность инициировать диалог с клиентом в мессенджерах WhatsApp и Telegram, включая отправку первого сообщения без предварительного обращения со стороны клиента. Перед отправкой система автоматически проверяет, зарегистрирован ли указанный номер телефона в выбранном мессенджере, и уведомляет пользователя, если клиент не использует данный мессенджер.

Отправка первого сообщения клиенту в 1С:КА возможна из Карточки клиента. Для этого можно использовать кнопку Сообщение, выбрав нужный мессенджер из выпадающего списка, 

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_23.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_23.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_23.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_23.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

либо кликнуть по номеру телефона в блоках Контактная информация или Контактные лица и в выпадающем списке меню выбрать пункт Написать в WhatsApp или Написать в Telegram. 

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_24.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_24.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_24.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_24.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

Есть возможность инициировать диалог с клиентом из Заказа клиента в 1С:КА, нажав на кнопку Написать в командной панели.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_25.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_25.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_25.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_25.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

В форме отправки сообщений в системе 1С:КА предусмотрена возможность прикрепления вложений (изображения, pdf документ, файл docx). Также доступна функция использования шаблонов сообщений, для этого необходимо воспользоваться гиперссылкой Шаблон и выбрать нужный вариант из предложенного списка.

### Общение с клиентом в WhatsApp и Telegram

Функционал системы обеспечивает обработку входящих и исходящих сообщений WhatsApp и Telegram прямо в 1С:Комплексная автоматизация, через Панель телефонии для 1С и с мобильного телефона. Доступ к чатам реализован через несколько интерфейсов: 

- В журнале Чатов в 1С:КА чаты с клиентом распределяются по статусам обработки. Новые обращения размещаются в группе В очереди, а текущие активные диалоги - в группе В работе. Для ответа на новое обращение или продолжения коммуникации с клиентом пользователю необходимо выбрать конкретный чат из соответствующей группы и открыть его для просмотра и отправки сообщений.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_26.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_26.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_26.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_26.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_27.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_27.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_27.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_27.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

- В 1С:КА в Ленте активные диалоги отображаются с кнопкой Открыть для мгновенного перехода к чату и продолжения взаимодействия с клиентом.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_28.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_28.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_28.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_28.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

- В 1С:Комплексная автоматизация при работе с документом Заказ клиента нажатие кнопки Написать открывает форму отправки сообщения, позволяющую начать новый диалог с клиентом или продолжить общение в существующем активном чате WhatsApp или Telegram.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_29.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_29.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_29.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_29.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

- В Панели телефонии для 1С во вкладке Чаты. В группе Мои чаты содержатся чаты, где текущий пользователь назначен ответственным. Группа Наблюдаемые включает чаты, в которых текущий пользователь является наблюдателем с возможностью отправки сообщений. Все новые входящие сообщения автоматически распределяются в раздел Очередь.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_30.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_30.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_30.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_30.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

- При подключении своего Telegram-аккаунта через Telegram-центр 1С:КА сотрудник может отвечать клиентам прямо со своего телефона, что позволяет оперативно отвечать на сообщения, даже если нет доступа к рабочему компьютеру. Все сообщения будут синхронизироваться в 1С: КА.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_31.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_31.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_31.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_31.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

### Передача чатов и добавление наблюдателей в чат

Первый сотрудник, отправивший сообщение в ответ в чат с клиентом, автоматически назначается ответственным, после чего чат переходит в статус В работе и становится доступным исключительно владельцу через интерфейс панели телефонии.

Для добавления участников в чат предусмотрена возможность добавления наблюдателей. Добавленные наблюдатели получают доступ к чату в Панели телефонии для 1С с возможностью отправки сообщений. Добавить наблюдателей можно:

- Открыв в 1С:КА чат и указав в поле Наблюдатели в карточке чата сотрудников, которые будут наблюдателями в этом чате.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_32.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_32.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_32.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_32.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

- В Панели телефонии путем упоминания сотрудника в тексте сообщения. 

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_33.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_33.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_33.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_33.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

Помимо этого есть возможность сменить ответственного в чате. При передаче чата новый ответственный получает полные права владельца, а предыдущий - теряет доступ, если не был добавлен как наблюдатель. Сделать это можно:

- Открыв в 1С:КА чат и выбрав нового ответственного сотрудника в соответствующем поле в карточке чата.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_34.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_34.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_34.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_34.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

- Через кнопку Передать чат в Панели телефонии. 

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_35.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_35.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_35.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_35.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

### Отправка вложений и счетов на оплату из 1С в чаты WhatsApp и Telegram 

Из 1С: Комплексная автоматизация и Панели телефонии для 1С возможна отправка и получение вложений через WhatsApp и Telegram. Пользователи могут прикреплять к сообщениям файлы различных форматов (изображения, pdf, docx и другие), а также получать файлы от клиентов.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_36.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_36.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_36.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_36.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_37.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_37.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_37.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_37.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

Также в 1С:Комплексная автоматизация реализована возможность прямой отправки счетов клиенту в WhatsApp и Telegram непосредственно из формы Счета на оплату. Данный функционал позволяет отправлять счета без необходимости дополнительного скачивания или сохранения файлов, документ автоматически формируется и прикрепляется к сообщению клиенту в виде вложения. 

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_38.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_38.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_38.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_38.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

### AI анализ чатов с клиентами

AI анализ переписки с клиентом доступен по кнопке "Получить анализ диалога" прямо в карточке чата. 

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_39.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_39.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_39.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_39.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

Результат автоматически сохраняется и отображается как в карточке чата, так и в журнале чатов в 1С: КА. Если чат закрыли без предварительного анализа, система сама сформирует его автоматически. Это помогает быстро понять суть общения, не перечитывая всю переписку.  

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_40.png"
data-original="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_40.png"
srcset="/assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_40.png 1x, /assets/integration_into_configurations/integration_into_1cKA/integration_into_1cKA_40.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>