---
icon: history
order: -1
---
# Интеграция 1С:Управление нашей фирмой с телефонией и чатами WhatsApp и Telegram

1С:Управление нашей фирмой — современное решение для автоматизации операционной работы, управленческого учета и налоговой отчётности. Расширить возможности 1С:УНФ для эффективной работы с клиентами помогает Интеграция с телефонией и чатами WhatsApp и Telegram от компании МИКО. Это решение значительно повышает удобство и скорость работы операторов и менеджеров по продажам: звонок клиенту в один клик, автоматическое открытие карточки при входящем вызове, история переписки, запись разговоров и многое другое.

Подробнее о возможностях интеграции 1С:УНФ с телефонией и мессенджерами WhatsApp и Telegram в этой статье.

## Звонки в 1С:УНФ. Интеграция 1С:УНФ с телефонией

В 1С:Управление нашей фирмой предусмотрена гибкая система работы с клиентами: вы можете использовать лиды, а можете вести продажи без них. Система поддерживает оба сценария.

Мы учли оба подхода и реализовали возможность автоматического открытия карточки лида или карточки клиента при входящем звонке, а также регистрации новых обращений путем создания нового лида или клиента. Доработали карточку лида, теперь из неё можно позвонить в один клик, а также написать клиенту в мессенджеры WhatsApp или Telegram.

### Обработка входящих звонков

При поступлении звонка система автоматически распознает клиента по номеру телефона, что позволяет сразу определить, какому клиенту или лиду принадлежит номер, и выполнить дополнительные действия при приеме вызова.

- **При входящем звонке от клиента, номер которого уже сохранен в базе**, название клиента отображается в баннере звонка. После принятия звонка в 1С:Управление нашей фирмой автоматически открывается карточка клиента с полной историей взаимодействий (звонками, заказами и письмами) либо карточка лида.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_1.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_1.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_1.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_1.png 2x"
alt="МИКО в 1С:УНФ : Входящий звонок от клиента, номер которого уже есть в базе"
/>

- **Если поступает звонок от неизвестного клиента**, в баннере звонка отображается только номер телефона. После принятия вызова в 1С:Управление нашей фирмой откроется карточка создания нового клиента в базе или новая карточка лида для сохранения обращения в базе.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_2.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_2.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_2.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_2.png 2x"
alt="МИКО в 1С:УНФ : Входящий звонок от неизвестного клиента"
/>

- **Если клиент уже есть в базе, но звонит с нового номера**, этот номер можно привязать к существующей карточке клиента — добавить номер как телефон компании или закрепить его за контактным лицом компании.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_3.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_3.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_3.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_3.png 2x"
alt="МИКО в 1С:УНФ : Входящий звонок от клиента, который уже есть в базе, но звонит с нового номера"
/>

### Исходящие звонки в один клик

Исходящие звонки в 1С:Управление нашей фирмой совершаются всего в 1 клик из карточки Партнера (Клиента), карточки Контактного лица, карточки Лида, Заказа клиента или документа Лента (доработанная Карточка клиента).

- **Исходящие звонки из карточки Партнера или Контактного лица** можно выполнить, нажав кнопку Позвонить в командной панели. Также вызов можно совершить во вкладке Адреса и телефоны, кликнув на кнопку с выпадающим списком рядом с номером телефона и выбрав действие Позвонить. При ответе клиента автоматически откроется его карточка с полной историей взаимодействий.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_4.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_4.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_4.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_4.png 2x"
alt="МИКО в 1С:УНФ : Исходящие звонки из карточки Партнера"
/>

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_5.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_5.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_5.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_5.png 2x"
alt="МИКО в 1С:УНФ : Исходящие звонки из карточки Контактного лица"
/>

- Чтобы совершить **исходящий звонок из карточки Лида**, нажмите на кнопку рядом с номером телефона и выберите Позвонить из выпадающего списка.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_41.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_41.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_41.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_41.png 2x"
alt="МИКО в 1С:УНФ : Исходящие звонки из карточки Лида в 1С УНФ"
/>

- **Позвонить из 1С из документа Лента** можно прямо по клику на номер телефона в блоке Контактная информация или номером сотрудника клиента в блоке Контактные лица.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_6.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_6.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_6.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_6.png 2x"
alt="МИКО в 1С:УНФ : Исходящие звонки из документа Лента"
/>

- **Исходящий звонок из Заказа клиента** выполняется нажатием кнопки Позвонить на командной панели. После установления соединения система автоматически открывает карточку клиента с полной историей взаимодействий.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_7.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_7.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_7.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_7.png 2x"
alt="МИКО в 1С:УНФ : Исходящие звонки из Заказа клиента"
/>

Панель телефонии позволяет совершать и принимать звонки даже при закрытой 1С:Управление нашей фирмой. Если база 1С:УНФ открыта, то при ответе клиента система автоматически откроет карточку клиента с полной историей взаимодействий либо карточка лида.

- **Исходящий звонок можно инициировать через строку умного поиска в Панели телефонии**. При вводе номера телефона, имени клиента или контактного лица система отобразит соответствующие записи из базы 1С:Управление нашей фирмой. Чтобы совершить звонок, наведите курсор на нужную строку и нажмите на иконку телефонной трубки.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_8.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_8.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_8.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_8.png 2x"
alt="МИКО в 1С:УНФ : Исходящий звонок через строку умного поиска в Панели телефонии для 1С"
/>

- **Исходящий звонок из истории звонков в Панели телефонии** совершается одним нажатием на иконку телефонной трубки в строке записи звонка.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_9.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_9.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_9.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_9.png 2x"
alt="МИКО в 1С:УНФ : Исходящий звонок из истории звонков в Панели телефонии для 1С"
/>

- **Ручной набор номера в Панели телефонии для совершения исходящего вызова** осуществляется через номеронабиратель, он поддерживает вставку скопированных номеров, например из письма или документа. Эта функция позволяет совершать звонки на номера, которых еще нет в базе 1С:УНФ.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_10.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_10.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_10.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_10.png 2x"
alt="МИКО в 1С:УНФ : Ручной ввод номера в Панели телефонии для 1С"
/>

### Перевод звонка на другого сотрудника

Перевод звонка на другого сотрудника можно выполнить как из Панели телефонии для 1С, так и напрямую из 1С:Управление нашей фирмой. При начале перевода система отображает актуальный список сотрудников с их текущим статусом доступности (онлайн/занят/не в сети), что позволяет оператору убедиться, что выбранный сотрудник сможет принять вызов.

- **Консультативный перевод звонка через окно активного разговора в Панели телефонии**. При нажатии на кнопку Перевод открывается окно со списком сотрудников. После выбора нужного сотрудника клиент переводится в режим удержания, и система устанавливает соединение с коллегой. По завершении консультативного разговора система автоматически соединяет клиента с выбранным сотрудником, обеспечивая непрерывность общения.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_11.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_11.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_11.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_11.png 2x"
alt="МИКО в 1С:УНФ : Консультативный перевод звонка по кнопке Перевод в окне активного разговора в Панели телефонии для 1С"
/>

- **Консультативный перевод звонка через список сотрудников в Панели телефонии**. Нажмите кнопку Перевод рядом с нужным сотрудником, клиент переводится в режим удержания, а инициатор перевода соединяется с коллегой. После завершения разговора система автоматически соединяет клиента с целевым сотрудником без разрыва соединения.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_12.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_12.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_12.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_12.png 2x"
alt="МИКО в 1С:УНФ : Консультативный перевод звонка по кнопке Перевод в списке сотрудников в Панели телефонии для 1С"
/>

- **Консультативный перевод из Ленты в 1С:УНФ в блоке активного звонка**. При нажатии на кнопку Перевод откроется окно в 1С со списком доступных сотрудников. После выбора сотрудника клиент переходит в режим удержания, а инициатор перевода устанавливает соединение с коллегой. По окончании обсуждения система автоматически соединяет клиента с целевым оператором, сохраняя активный сеанс без необходимости повторного дозвона.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_13.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_13.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_13.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_13.png 2x"
alt="МИКО в 1С:УНФ : Консультативный перевод в Ленте в 1С:УНФ в блоке активного звонка по кнопке Перевод"
/>

- **Безконсультативный перевод через Панели телефонии по кнопке Перевод в списке сотрудников**. При поступлении входящего вызова сотрудник может не снимая трубки нажать кнопку Перевод напротив нужного коллеги. В этом случае система напрямую соединяет клиента с выбранным сотрудником, обеспечивая непрерывность разговора. Такой способ удобен при поступлении второго звонка во время активного разговора — оператор может мгновенно выполнить перевод нового вызова без прерывания текущего соединения.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_14.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_14.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_14.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_14.png 2x"
alt="МИКО в 1С:УНФ : Безконсультативный перевод в Панели телефонии для 1С по кнопке Перевод в списке сотрудников"
/>

### Функции супервизора в Панели телефонии для 1С

В Панели телефонии для 1С реализована функция супервизора, позволяющая подключаться к активным звонкам в одном из трех режимов:

- **Подслушать**: пользователь подключается к активному разговору в режиме прослушивания, при этом ни оператор, ни клиент его не слышат.
- **Шепнуть**: данный режим позволяет пользователю подключиться к активному вызову сотрудника с абонентом. При этом его услышит только коллега, абонент его голос не услышит.
- **Присоединиться к разговору**: пользователь подключается к активному звонку с возможностью участвовать в беседе, и его слышат все участники разговора.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_16.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_16.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_16.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_16.png 2x"
alt="МИКО в 1С:УНФ : Функции супервизора в списке сотрудников Панели телефонии для 1С"
/>

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_15.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_15.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_15.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_15.png 2x"
alt="МИКО в 1С:УНФ : Функции супервизора в Панели телефонии для 1С"
/>

Подключение к текущему вызову выполняется автоматически, а смена режима супервизора возможна в процессе разговора без прерывания соединения.

В конфигурации 1С:Управление нашей фирмой предусмотрена система разграничения прав доступа: функции супервизора могут быть доступны только определённым пользователям или группам пользователей.

### Журнал звонков с записями разговоров, транскрибацией звонков в текст и ai анализом

В Журнале звонков в 1С:Управление нашей фирмой фиксируются все входящие и исходящие вызовы компании. Каждый звонок представлен отдельной строкой таблицы, содержащей дату и время, имя клиента (или номер телефона, если клиент не зарегистрирован в базе), имена сотрудников-участников разговора, длительность разговора и статус вызова. Подробные сведения по каждому звонку доступны в разделе Сведения о звонке.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_17.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_17.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_17.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_17.png 2x"
alt="МИКО в 1С:УНФ : Журнал звонков со всеми вызовами компании"
/>

Для прослушивания и скачивания записей разговоров, к которым у сотрудника есть доступ, в 1С:УНФ используется встроенный аудиоплеер, расположенный в боковой панели в блоке Записи разговора.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_18.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_18.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_18.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_18.png 2x"
alt="МИКО в 1С:УНФ : Прослушивание и скачивание разговоров в Журнале звонков"
/>

В блоке AI анализ в 1С:УНФ отображаются результаты ии анализа разговоров, который содержит ключевые моменты диалога и основные темы общения. Этот функционал позволяет быстро ознакомиться с содержанием звонка без необходимости прослушивания аудиозаписи.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_19.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_19.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_19.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_19.png 2x"
alt="МИКО в 1С:УНФ : AI анализ звонков в Журнале звонков"
/>

Для получения полной информации о звонке в 1С:Управление нашей фирмой предусмотрена форма Детализация звонка, доступная по гиперссылке Подробнее в блоке Сведения о звонке.

В разделе Детализация звонка представлена следующая информация:

- Абсолютно все параметры звонка. 
- Полная хронология вызова. Если звонок включал внутренние переводы, в детализации отображается полный маршрут вызова. 
- Транскрибация записи разговора с разбивкой по спикерам. 
- AI суммаризация по звонку с выделением ключевых моментов диалога.


<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_20.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_20.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_20.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_20.png 2x"
alt="МИКО в 1С:УНФ : Детализация звонка"
/>

Журнал звонков в 1С:УНФ также предоставляет возможность регистрировать новых клиентов. При наличии входящего вызова с незарегистрированного номера сотрудник может создать карточку нового клиента при нажатии на кнопку Создать клиента в блоке Сведения о звонке. После этого все предыдущие звонки с этим номером будут автоматически связаны с вновь созданным клиентом.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_21.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_21.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_21.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_21.png 2x"
alt="МИКО в 1С:УНФ : Регистрация новых клиентов в Журнале звонков"
/>

В Журнале звонков в 1С:УНФ содержатся удобные инструменты фильтрации и поиска, позволяющие быстро находить нужные звонки по разным параметрам.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_22.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_22.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_22.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_22.png 2x"
alt="МИКО в 1С:УНФ : Фильтры и поиск в Журнале звонков"
/>

## Чаты в 1С:УНФ. Интеграция 1С:УНФ с WhatsApp и Telegram

### Написать первым клиенту в мессенджер

В 1С:Управление нашей фирмой реализована возможность начинать переписку с клиентом в мессенджерах WhatsApp и Telegram, включая отправку первого сообщения без предварительного обращения со стороны клиента. Перед отправкой система автоматически проверяет наличие регистрации номера в выбранном мессенджере и уведомляет пользователя, если клиент им не пользуется.

Отправить первое сообщение клиенту из 1С:УНФ можно прямо из Карточки клиента. Для этого нажмите кнопку Сообщение и выберите нужный мессенджер из выпадающего списка,

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_23.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_23.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_23.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_23.png 2x"
alt="МИКО в 1С:УНФ : Отправка первого сообщения клиенту из Карточки клиента 1С"
/>

или кликните по номеру телефона в блоке Контактная информация или Контактные лица, затем выберите пункт Написать в WhatsApp или Написать в Telegram.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_24.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_24.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_24.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_24.png 2x"
alt="МИКО в 1С:УНФ : Отправка первого сообщения клиенту по номеру телефона в блоках Контактная информация или Контактные лица"
/>

Начать переписку из карточки Лида можно аналогично, нажав кнопку рядом с номером телефона и выбрав нужное действие: Написать в WhatsApp или Написать в Telegram.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_42.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_42.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_42.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_42.png 2x"
alt="МИКО в 1С:УНФ : Отправка первого сообщения клиенту из карточки Лида в 1С УНФ"
/>

Также диалог с клиентом можно инициировать из документа Заказ клиента в 1С:УНФ, нажав кнопку Написать на командной панели.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_25.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_25.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_25.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_25.png 2x"
alt="МИКО в 1С:УНФ : Отправка первого сообщения клиенту из Заказа клиента в 1С"
/>

В форме отправки сообщений в системе 1С:УНФ предусмотрена возможность прикреплять вложения: изображения, pdf документы и файлы формата docx. Также доступна функция использования шаблонов сообщений: для этого необходимо перейти по гиперссылке Шаблон и выбрать нужный вариант из списка.

### Общение с клиентом в WhatsApp и Telegram

Функционал системы позволяет обрабатывать входящие и исходящие сообщения WhatsApp и Telegram напрямую в 1С:Управление нашей фирмой, а также через Панель телефонии для 1С и с мобильного телефона. Доступ к чатам реализован через несколько интерфейсов:

- В журнале Чатов в 1С:УНФ переписки с клиентами распределяются по статусам обработки. Новые обращения попадают в группу В очереди, а активные диалоги находятся в группе В работе. Чтобы ответить на новое сообщение или продолжить переписку, достаточно выбрать нужный чат из списка и открыть его для просмотра и отправки сообщений.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_26.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_26.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_26.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_26.png 2x"
alt="МИКО в 1С:УНФ : Чаты WhatsApp и Telegram в журнале Чатов в 1С"
/>

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_27.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_27.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_27.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_27.png 2x"
alt="МИКО в 1С:УНФ : Чаты WhatsApp и Telegram в журнале Чатов в 1С. Открытый чат с клиентом"
/>

- В Ленте в 1С:УНФ активные диалоги отображаются с кнопкой Открыть, которая обеспечивает мгновенный переход к чату для продолжения общения с клиентом.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_28.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_28.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_28.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_28.png 2x"
alt="МИКО в 1С:УНФ : Чаты WhatsApp и Telegram в Ленте"
/>

- В документе Заказ клиента в 1С:Управление нашей фирмой при нажатии кнопки Написать открывается форма отправки сообщений — можно начать новый диалог или продолжить общение в существующем чате WhatsApp или Telegram.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_29.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_29.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_29.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_29.png 2x"
alt="МИКО в 1С:УНФ : Чаты WhatsApp и Telegram по кнопке из Заказа клиента"
/>

- В карточке Лида в 1С:УНФ при нажатии на кнопку рядом с номером телефона и выборе пункта Написать из выпадающего меню открывается форма отправки сообщения. Из нее можно начать новый диалог или продолжить переписку в существующем чате WhatsApp или Telegram.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_43.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_43.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_43.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_43.png 2x"
alt="МИКО в 1С:УНФ : Чаты WhatsApp и Telegram по кнопке из карточки Лида в 1С УНФ"
/>

- В Панели телефонии для 1С чаты расположены во вкладке Чаты. Группа Мои чаты содержит переписки, где текущий пользователь назначен ответственным. Группа Наблюдаемые включает чаты, в которых пользователь является наблюдателем и может отправлять сообщения. Новые входящие сообщения автоматически попадают в раздел Очередь.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_30.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_30.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_30.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_30.png 2x"
alt="МИКО в 1С:УНФ : Чаты WhatsApp и Telegram в Панели телефонии для 1С во вкладке Чаты"
/>

- При подключении личного Telegram-аккаунта через Telegram-центр 1С:УНФ, сотрудник может отвечать клиентам прямо со своего телефона. Все сообщения при этом синхронизируются с 1С:УНФ, что позволяет поддерживать коммуникацию, даже без доступа к рабочему компьютеру.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_31.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_31.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_31.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_31.png 2x"
alt="МИКО в 1С:УНФ : Чаты WhatsApp и Telegram в мобильном менеджера"
/>

### Передача чатов и добавление наблюдателей в чат

Первый сотрудник, который отправляет сообщение в ответ на обращение клиента, автоматически назначается ответственным за чат. После этого чат переходит в статус В работе и становится доступен только ответственному сотруднику через интерфейс Панели телефонии.

Для совместной работы предусмотрена возможность добавления наблюдателей — сотрудников, которые могут просматривать чат и отправлять сообщения. Добавить наблюдателей можно двумя способами:

- В 1С:УНФ, открыв нужный чат и указав сотрудников в поле «Наблюдатели» в карточке чата.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_32.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_32.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_32.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_32.png 2x"
alt="МИКО в 1С:УНФ : Добавление наблюдателей в чат в 1С"
/>

- В Панели телефонии, упомянув сотрудника в тексте сообщения.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_33.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_33.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_33.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_33.png 2x"
alt="МИКО в 1С:УНФ : Добавление наблюдателей в чат в Панели телефонии для 1С"
/>

Также предусмотрена возможность смены ответственного сотрудника. При передаче чата новый ответственный получает полные права владельца, а предыдущий теряет доступ, если не добавлен как наблюдатель. Изменить ответственного можно:

- Открыв в 1С:УНФ чат и выбрав нового ответственного сотрудника в поле Ответственный в карточке чата.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_34.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_34.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_34.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_34.png 2x"
alt="МИКО в 1С:УНФ : Смена ответственного в 1С"
/>

- Через кнопку Передать чат в Панели телефонии.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_35.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_35.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_35.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_35.png 2x"
alt="МИКО в 1С:УНФ : Смена ответственного в Панели телефонии для 1С"
/>

### Отправка вложений и счетов на оплату из 1С в чаты WhatsApp и Telegram

В 1С:Управление нашей фирмой и Панели телефонии для 1С реализована возможность отправки и получения вложений через WhatsApp и Telegram. Пользователи могут прикреплять к сообщениям файлы различных форматов (изображения, pdf, docx и другие), а также принимать вложения от клиентов.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_36.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_36.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_36.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_36.png 2x"
alt="МИКО в 1С:УНФ : Отправка и получение вложений через WhatsApp и Telegram в Панели телефонии"
/>

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_37.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_37.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_37.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_37.png 2x"
alt="МИКО в 1С:УНФ : Отправка и получение вложений через WhatsApp и Telegram в 1С"
/>

Кроме того, в 1С:Управление нашей фирмой предусмотрена функция прямой отправки счетов клиенту в WhatsApp и Telegram прямо из формы Счет на оплату. Документ автоматически формируется и прикрепляется к сообщению как вложение, что позволяет отправлять счета без предварительного сохранения или скачивания файлов.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_38.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_38.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_38.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_38.png 2x"
alt="МИКО в 1С:УНФ : Отправки счетов клиенту в WhatsApp и Telegram из 1С"
/>

### AI анализ чатов с клиентами

AI анализ переписки с клиентом доступен по кнопке Получить анализ диалога прямо в карточке чата.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_39.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_39.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_39.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_39.png 2x"
alt="МИКО в 1С:УНФ : AI анализ чата по кнопке Получить анализ диалога в карточке чата"
/>

Результаты анализа автоматически сохраняются и отображаются как в карточке чата, так и в журнале чатов в 1С:УНФ. Если чат был закрыт без предварительного анализа, система сформирует его автоматически. Это позволяет быстро понять суть общения, не просматривая всю переписку вручную.

<img class="miko-shadow img-zoomable"  
src="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_40.png"
data-original="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_40.png"
srcset="/assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_40.png 1x, /assets/integration_into_configurations/integration_into_1cunf/integration_into_1cunf_40.png 2x"
alt="МИКО в 1С:УНФ : AI анализ в журнале чатов в 1С"
/>