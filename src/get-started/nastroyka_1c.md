---
label: Настройка 1C
icon: tools
order: -2
---
# Встраивание расширения телефонии в информационную базу 1С:Предприятие

Встраивание расширения телефонии в УНФ, АТС MikoPBX в Яндекс Облаке
[!embed](https://www.youtube.com/watch?v=TyMqBHfwM5M)

Встраивание расширения телефонии в УНФ, АТС FreePBX на виртуальной машине vSphere 
[!embed](https://www.youtube.com/watch?v=GFYMEBzW6WI)

### Поддерживаемые конфигурации
В настоящее время поддерживаются следующие конфигурации:

* 1С:Управление нашей фирмой, редакция 1.6
* 1С:Управление торговлей 11
* 1С:Управление торговлей и взаимоотношениями с клиентами (CRM 3)
* 1С:Комплексная автоматизация 2
* 1С:Комплексная автоматизация 2 + CRM
* 1С:ERP 2
* 1С:ERP 2 + CRM
* 1С:CRM, редакция 3
* ЭСТИ:Управление фирмой франчайзи + Управление торговлей и взаимоотношениями с клиентами
* ЭСТИ:Управление фирмой франчайзи + Управление нашей фирмой
* Альфа-Авто 6

### Серверная информационная база 
Для выполнения действий данной инструкции потребуется информационная база, размещенная на сервере 1С:Предприятие. На файловой информационной базе установить соединение описанным здесь способ (long-pooling) не удастся.
### Открытие обработки
Запустите информационную базу 1С в режиме "1С:Предприятие". Войдите пользователем, имеющим права администратора.
В главном меню выполните **Файл** - > **Открыть** (или нажмите комбинацию клавиш **Ctrl+O**). <br>
Выберите скачанную обработку **Установщик.epf**

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_23.png"
    data-original="/assets/mango/mango_23.png"
    srcset="/assets/mango/mango_23_prev.png 1x, /assets/mango/mango_23.png 2x" 
    alt=""
/> 

!!!info Установщик расширений
"**Установщик.epf**" - это внешняя обработка для 1С. Для ее использования потребуются роли: "**Полные права**" и 
"**Интерактивное открытие внешних отчетов и обработок**".
!!!

### Поиск подходящих вашей конфигурации расширений
На странице **Проверка доступных версий** вставьте ваш лицензионный ключ в одноименное поле и выполните **Далее**.

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_24.png"
    data-original="/assets/mango/mango_24.png"
    srcset="/assets/mango/mango_24_prev.png 1x, /assets/mango/mango_24.png 2x" 
    alt="МИКО: вставить лицензионный ключ в обработке"
/> 

Выберите последнюю версию расширения, если их несколько и выполните **Установить**.

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_37.png"
    data-original="/assets/mango/mango_37.png"
    srcset="/assets/mango/mango_37_prev.png 1x, /assets/mango/mango_37.png 2x" 
    alt="МИКО: установка расширения 1С"
/> 

### Лицензионное соглашение
Ознакомьтесь с лицензионным соглашением и примите условия.

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_25.png"
    data-original="/assets/mango/mango_25.png"
    srcset="/assets/mango/mango_25_prev.png 1x, /assets/mango/mango_25.png 2x" 
    alt="МИКО: лицензионное соглашение"
/> 

Начнется установка расширения. После окончания установки перезагрузите информационную базу, нажав на кнопку **Перезагрузить**.

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_26.png"
    data-original="/assets/mango/mango_26.png"
    srcset="/assets/mango/mango_26_prev.png 1x, /assets/mango/mango_26.png 2x" 
    alt="МИКО: завершение установки расширения телефонии"
/> 

### Открытие мастера первоначальной настройки 
После перезапуска базы в панели функций текущего раздела появится подсистема **Звонки и сообщения**. Также в открытых формах появится **Мастер первоначальной настройки**.

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_27.png"
    data-original="/assets/mango/mango_27.png"
    srcset="/assets/mango/mango_27_prev.png 1x, /assets/mango/mango_27.png 2x" 
    alt="МИКО: установлена подсистема звонки и сообщения"
/> 

Перейдите в форму **Мастер первоначальной настройки** и выполните на ней **Далее**.

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_28.png"
    data-original="/assets/mango/mango_28.png"
    srcset="/assets/mango/mango_28_prev.png 1x, /assets/mango/mango_28.png 2x" 
    alt="МИКО: открытие мастера первоначальной настройки"
/> 

### Выбор подходящей схемы подключения
На странице **Схема подключения** выберите схему соединения либо **сервер 1С и сервер АТС в одной сети** либо **сервер 1С в локальной сети, АТС в облаке**. Выполните **Далее**.  
 
<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_42.png"
    data-original="/assets/mango/mango_42.png"
    srcset="/assets/mango/mango_42_prev.png 1x, /assets/mango/mango_42.png 2x" 
    alt="МИКО: схема соединения"
/> 

### Зарегистрируйтесь в системе взаимодействия
!!!
Для работы телефонии это не является обязательным, чаты с коллегами, интеграция с whatsapp без подключенных обсуждений работать не будут.
!!!
Если вы не подключены к сервису 1С:Диалог, вам будет предложено это сделать. Введите адрес вашей электронной почты и в поле переключателя выберите **1С:Диалог (рекомендуемый вариант)**. Нажмите **Зарегистрироваться**. <br>
Вам на почту придет письмо с кодом. Скопируйте код. <br>
Вставьте его в поле и нажмите **Зарегистрироваться**. <br>
После подключения обсуждений нажмите **Готово**. <br>

<img class="miko-shadow play-on-hover"  
    src="/assets/mango/reg_sist_vzaim.gif"
    alt="МИКО: whatsapp прием входящего сообщения"
/> 

### Автонастройка соединения с АТС
На странице **Проверка связи** Переключатель **К какой АТС выполняется подключение** установите в соответствии с вашей АТС. <br>
Переключатель **Настройка подключения** - в положение **Автоматическая настройка**. <br>
Ниже в поле вставьте код автоматической настройки, скопированный ранее из АТС на этапе <a href='/get-started/nastroyka_ats' target="_blank">настройка АТС</a> <br>
Выполните **Далее**.

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_43.png"
    data-original="/assets/mango/mango_43.png"
    srcset="/assets/mango/mango_43_prev.png 1x, /assets/mango/mango_43.png 2x" 
    alt="МИКО: автонастройка соединения"
/> 

Откроется форма соединения:

<img class="miko-shadow"  
    src="/assets/mango/mango_44.png"
    alt="МИКО: автонастройка соединения"
/> 

Дождитесь установления соединения с АТС (около 30 с). 

<img class="miko-shadow"  
    src="/assets/mango/mango_45.png"
    alt="МИКО: автонастройка соединения"
/> 

<a href='/faq/avtonast_soed_ne_srab' target="_blank">Если автонастройка не сработала</a>

### Определение видов контактной информации

На странице **Виды номеров** в поле **Вид внутреннего телефона** выберите **Телефон**.  
В поле **Вид мобильного телефона** выберите создание нового элемента. 

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_31.png"
    data-original="/assets/mango/mango_31.png"
    srcset="/assets/mango/mango_31_prev.png 1x, /assets/mango/mango_31.png 2x" 
    alt="МИКО: виды контактной информации"
/> 

В появившейся форме создания вида контактной информации отметьте флажками поля **Запрещать ввод некорректных номеров** и **Вводить номер по маске**.
Ниже выберите маску **+7(999) 999-99-99**. Затем выполните **Записать и закрыть**.

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_32.png"
    data-original="/assets/mango/mango_32.png"
    srcset="/assets/mango/mango_32_prev.png 1x, /assets/mango/mango_32.png 2x" 
    alt="МИКО: добавление вида контактной информации"
/> 

После заполнения видов номеров перейдите на следующую страницу мастера, выполнив **Далее**.

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_33.png"
    data-original="/assets/mango/mango_33.png"
    srcset="/assets/mango/mango_33_prev.png 1x, /assets/mango/mango_33.png 2x" 
    alt="МИКО: добавление вида контактной информации"
/> 

### Присваивание телефонов сотрудникам
На странице **Пользователи телефонии** присвойте внутренние номера пользователям информационной базы, которые будут использовать телефонию (лучше сразу заполнить и мобильные телефоны).
!!! Важно
Присваиваемые номера должны существовать на АТС.
!!!

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_34.png"
    data-original="/assets/mango/mango_34.png"
    srcset="/assets/mango/mango_34_prev.png 1x, /assets/mango/mango_34.png 2x" 
    alt="МИКО: добавление вида контактной информации"
/> 

### Активация триала
!!!warning Напомним
АТС должна иметь доступ в Интернет.
!!!
В появившейся форме нажать кнопку **Активировать триал**.

<img class="miko-shadow"  
    src="/assets/mango/mango_46.png"
    alt="МИКО: активировать триал"
/> 

Название кнопки сменится на **Активировано**, а в вашем лицензионном ключе появится продукт **Триальная лицензия на интеграцию 1С и телефонии (ПРОФ)** сроком на 30 дней.

<img class="miko-shadow"  
    src="/assets/mango/mango_47.png"
    alt="МИКО: активирован триал"
/>

### Ссылка на скачивание внешней панели
Дождитесь окончания настройки. Откройте ссылку предложенную ссылку с установщиком внешней панели. <br>
Страницу с мастером первоначальной настройки можно закрыть, она больше не понадобится. 

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_35.png"
    data-original="/assets/mango/mango_35.png"
    srcset="/assets/mango/mango_35_prev.png 1x, /assets/mango/mango_35.png 2x" 
    alt="МИКО: скачивание внешней панели"
/> 