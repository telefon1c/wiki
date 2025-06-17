---
label: Полная настройка
icon: tools
order: -2
---
# Полная настройка

## Подготовка: публикация информационной базы
Перед запуском Мастера первоначальной настройки **обязательно** [настройте публикацию](/faq/base-publishing/) информационной базы на сервере IIS или Apache.

После настройки публикации базы, запустите Мастер первоначальной настройки в 1С. Откройте Звонки и сообщения -> Настройки -> Мастер первоначальной настройки. Установите флажок **Полная настройка** и нажмите **Далее**.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_1.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_1.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_1.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_1.png 2x"
alt="МИКО: Открытие Мастера первоначальной настройки"
/>

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_2.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_2.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_2.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_2.png 2x"
alt="МИКО: Полная настройка подсистемы телефонии в 1С с чатами WhatsApp и Telegram"
/>

## Ввод параметров опубликованной базы
На странице **Публикация информационной базы** заполните следующие поля:

**Сервер публикации** — укажите адрес сервера IIS или Apache, на котором опубликована база.

**Имя публикации** — укажите имя, под которым опубликована база. См. в конфигураторе: Администрирование -> Публикация на веб-сервере, поле Имя.

Нажмите **Далее**.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_3.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_3.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_3.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_3.png 2x"
alt="МИКО: Публикация информационной базы"
/>

## Регистрация информационной базы в системе взаимодействия
На странице **Регистрация информационной базы** нажмите **Открыть форму регистрации информационной базы**.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_4.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_4.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_4.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_4.png 2x"
alt="МИКО: Регистрация информационной базы в системе взаимодействия"
/>

Введите ваш адрес электронной почты. Оставьте по-умолчанию Сервер **1С:Диалог**. Нажмите **Зарегистрироваться**.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_5.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_5.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_5.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_5.png 2x"
alt="МИКО: Заполнение формы регистрации информационной базы"
/>

В открывшемся окне введите код из письма, пришедшего на указанную электронную почту, в поле **Код регистрации**. Нажмите **Зарегистрироваться** и **Готово**.

## Настройка соединения 1С с АТС
На странице **Проверка связи** выберите тип вашей АТС. Установите переключатель **Настройка подключения** в положение **Автоматическая настройка**. Нажмите **Далее**.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_6.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_6.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_6.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_6.png 2x"
alt="МИКО: Выбор АТС для интеграции с 1С"
/>

В открывшейся форме **Настройка модуля** в поле **Данные для автоматической настройки** вставьте ранее скопированный из АТС код.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_7.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_7.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_7.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_7.png 2x"
alt="МИКО: Ввод кода для автоматической настройки соединения с АТС MikoPBX"
/>

В поле **Схема подключения** выберите один из двух вариантов: **1С в облаке, сервер АТС в локальной сети** или **1С и АТС расположены в облаке** в зависимости от того, где у вас расположена АТС.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_8.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_8.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_8.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_8.png 2x"
alt="МИКО: Выбор схемы подключения АТС и 1С"
/>

Заполните поля **Веб-сервер 1С** и **Имя публикации**.

Нажмите **Настроить** и дождитесь завершения настройки.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_9.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_9.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_9.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_9.png 2x"
alt="МИКО: Установление соединения 1С с АТС"
/>

## Присвоение номеров телефонов сотрудникам
На странице **Пользователи телефонии** в поле **Вид внутреннего телефона** укажите один из двух вариантов: **Телефон** или **Внутренний телефон** (вариант Внутренний телефон может отсутствовать в вашей конфигурации).

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_10.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_10.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_10.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_10.png 2x"
alt="МИКО: Выбор вида внутреннего телефона"
/>

В поле **Вид мобильного телефона** (не обязателен для заполнения) выберите **Мобильный** или создайте новый элемент, если его нет. При создании нового вида контактной информации установите флажки Запрещать ввод некорректных номеров и Вводить номер по маске, в качестве маски выберите +7(999) 999-99-99 и нажмите Записать и закрыть.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_11.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_11.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_11.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_11.png 2x"
alt="МИКО: Создание нового вида контактной информации для мобильного телефона"
/>

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_12.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_12.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_12.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_12.png 2x"
alt="МИКО: Выбор вида мобильного телефона"
/>

В правой части окна отобразится таблица со списком сотрудников. Присвойте внутренние и, при необходимости, мобильные номера сотрудникам, которые будут использовать интеграцию телефонии и 1С.

!!!
Обязательно присвойте внутренний номер текущему пользователю.

Присваиваемые номера должны существовать на вашей АТС.
!!!

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_13.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_13.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_13.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_13.png 2x"
alt="МИКО: Присвойте внутренних и мобильных номеров сотрудникам"
/>

## Подключение мессенджеров WhatsApp и Telegram в 1С
Этот шаг можно пропустить, при необходимости вы сможете подключить аккаунты WhatsApp и Telegram позже по инструкции.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_14.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_14.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_14.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_14.png 2x"
alt="МИКО: Подключение мессенджеров WhatsApp и Telegram в 1С"
/>

Для настройки интеграции с мессенджерами потребуется телефон, на котором установлены приложения Telegram, WhatsApp или WhatsApp Business.

!!!
Для стабильной работы рекомендуется использовать отдельный телефон, подключенный к Wi‑Fi и электропитанию.
!!!

### Интеграция 1С с чатами WhatsApp
На странице **Мессенджеры** жмите ссылку **WhatsApp**. Откроется форма Настройки подключения WhatsApp.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_15.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_15.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_15.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_15.png 2x"
alt="МИКО: Настройки подключения WhatsApp в 1С"
/>

Откройте приложение WhatsApp или WhatsApp Business на телефоне. Перейдите в Настройки -> Связанные устройства -> Привязка устройства -> ОК.

Отсканируйте QR-код, отображенный в 1С. Если QR-код устарел — обновите его.

**Разрешите отправлять сообщения первыми**. По умолчанию этот переключатель выключен, то есть диалог с компанией может инициировать только клиент.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_16.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_16.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_16.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_16.png 2x"
alt="МИКО: Включение возможности отправки сообщения первыми в WhatsApp из 1С"
/>

Выберите и укажите **Дежурного сотрудника** в соответствующем поле.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_17.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_17.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_17.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_17.png 2x"
alt="МИКО: Выбор дежурного сотрудника для аккаунта WhatsApp в 1С"
/>

Рекомендуем установить **Автоответ на звонок**. Это поможет не потерять клиента, так как звонки через WhatsApp не поддерживаются. Если клиент позвонит через WhatsApp, он получит автоответ с текстом, который вы укажете в данном поле. А сотрудникам в 1С придет уведомление о пропущенном звонке в WhatsApp.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_18.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_18.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_18.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_18.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта WhatsApp"
/>

Закройте форму авторизации.

### Интеграция 1С с чатами Telegram
На странице **Мессенджеры** жмите ссылку **Telegram**. Откроется форма Настройки подключения Telegram.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_19.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_19.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_19.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_19.png 2x"
alt="МИКО: Настройки подключения Telegram в 1С"
/>

В поле **Номер телефона** введите номер телефона компании, на который зарегистрирован добавляемый аккаунт Телеграм. Нажмите **Далее**. На этот номер придет код авторизации — введите его в соответствующее поле. Нажмите **Отправить**.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_20.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_20.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_20.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_20.png 2x"
alt="МИКО: Подключение аккаунта Telegram в 1С"
/>

Подтвердите создание видов контактной информации для хранения ников пользователей в Telegram.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_21.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_21.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_21.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_21.png 2x"
alt="МИКО: Создание видов контактной информации для хранения ников пользователей в Telegram в 1С"
/>

**Разрешите отправлять сообщения первыми**. По умолчанию этот переключатель выключен, то есть диалог с компанией может инициировать только клиент.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_22.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_22.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_22.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_22.png 2x"
alt="МИКО: Включение возможности отправки сообщения первыми в Telegram из 1С"
/>

Выберите и укажите **Дежурного сотрудника** в соответствующем поле.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_23.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_23.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_23.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_23.png 2x"
alt="МИКО: Выбор дежурного сотрудника для аккаунта Telegram в 1С"
/>

Рекомендуем установить **Автоответ на звонок**. Это поможет не потерять клиента, так как звонки через Telegram не поддерживаются. Если клиент позвонит через Telegram, он получит автоответ с текстом, который вы укажете в данном поле. А сотрудникам в 1С придет уведомление о пропущенном звонке в Telegram.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_24.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_24.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_24.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_24.png 2x"
alt="МИКО: Автоответ на звонок для аккаунта Telegram"
/>

Закройте форму авторизации.

## Завершение мастера первоначальной настройки
Дождитесь окончания настройки. Откройте предложенную ссылку для загрузки установщика внешней панели. Скачайте последнюю версию программы по этой ссылке.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_25.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_25.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_25.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_25.png 2x"
alt="МИКО: Окончание настройки"
/>

На этом первоначальная настройка завершена.

!!!
**Обязательно проверьте**, что включено регламентное задание Прием и отправка сообщений для обмена сообщениями с WhatsApp и Telegram.

Если переключатель Синхронизировать сообщения выключен, включите его. Настройте расписание регламентного задания.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/full_setup_1c/full_setup_1c_26.png"
data-original="/assets/nastr_1c/full_setup_1c/full_setup_1c_26.png"
srcset="/assets/nastr_1c/full_setup_1c/full_setup_1c_26.png 1x, /assets/nastr_1c/full_setup_1c/full_setup_1c_26.png 2x"
alt="МИКО: Включение синхронизации сообщений 1С с WhatsApp и Telegram"
/>
!!!