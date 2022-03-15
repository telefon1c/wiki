---
label: Настройка 1C
icon: tools
order: -2
---
# Встраивание расширения телефонии в информационную базу 1С:Предприятие

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

### Открытие обработки
1. Запустите информационную базу 1С в режиме "1С:Предприятие". Войдите пользователем, имеющим права администратора.
В главном меню выполните **Файл** - > **Открыть** (или нажмите комбинацию клавиш **Ctrl+O**).  Выберите скачанную обработку **Установщик.epf**

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
3. На странице **Проверка доступных версий** вставьте ваш лицензионный ключ в одноименное поле и выполните **Далее**.

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_24.png"
    data-original="/assets/mango/mango_24.png"
    srcset="/assets/mango/mango_24_prev.png 1x, /assets/mango/mango_24.png 2x" 
    alt="МИКО: вставить лицензионный ключ в обработке"
/> 

4. Выберите последнюю версию расширения, если их несколько и выполните **Установить**.

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_37.png"
    data-original="/assets/mango/mango_37.png"
    srcset="/assets/mango/mango_37_prev.png 1x, /assets/mango/mango_37.png 2x" 
    alt="МИКО: установка расширения 1С"
/> 

### Лицензионное соглашение
5. Ознакомьтесь с лицензионным соглашением и примите условия.

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_25.png"
    data-original="/assets/mango/mango_25.png"
    srcset="/assets/mango/mango_25_prev.png 1x, /assets/mango/mango_25.png 2x" 
    alt="МИКО: лицензионное соглашение"
/> 

6. Начнется установка расширения. После окончания установки перезагрузите информационную базу, нажав на кнопку **Перезагрузить**.

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_26.png"
    data-original="/assets/mango/mango_26.png"
    srcset="/assets/mango/mango_26_prev.png 1x, /assets/mango/mango_26.png 2x" 
    alt="МИКО: завершение установки расширения телефонии"
/> 
### Публикация веб-сервиса
Для работы чатов с коллегами и чатов с клиентами через whatsapp нужно, чтобы соединение 1С с АТС происходило через веб-сервсис. <br>
Для этого [настройте публикацию](/faq/base-publishing) информационной базы на сервере IIS или Apache.

### Открытие мастера первоначальной настройки 
7. После перезапуска базы в панели функций текущего раздела появится подсистема **Звонки и сообщения**. Также в открытых формах появится **Мастер первоначальной настройки**.

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_27.png"
    data-original="/assets/mango/mango_27.png"
    srcset="/assets/mango/mango_27_prev.png 1x, /assets/mango/mango_27.png 2x" 
    alt="МИКО: установлена подсистема звонки и сообщения"
/> 

8. Перейдите в форму **Мастер первоначальной настройки** и выполните на ней **Далее**.

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_28.png"
    data-original="/assets/mango/mango_28.png"
    srcset="/assets/mango/mango_28_prev.png 1x, /assets/mango/mango_28.png 2x" 
    alt="МИКО: открытие мастера первоначальной настройки"
/> 

### Выбор подходящей схемы подключения
9. На странице **Схема подключения** выберите подходящую вам [схему соединения](/root-guides/select-connection-mode) АТС с 1С. Выполните **Далее**.  
Для работы чатов с коллегами и чатов с клиентами через whatsapp подойдет или способ "**1С в облаке, сервер АТС в локальной сети**" или способ "**1С и АТС расположены в облаке**" (любой из них.)
 
<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_39.png"
    data-original="/assets/mango/mango_39.png"
    srcset="/assets/mango/mango_39_prev.png 1x, /assets/mango/mango_39.png 2x" 
    alt="МИКО: автонастройка соединения"
/> 

### Автонастройка соединения с АТС
10. На странице **Проверка связи** Переключатель **К какой АТС выполняется подключение** установите в соответствии с вашей АТС. <br>
Переключатель **Настройка подключения** - в положение **Автоматическая настройка**. <br>
Ниже в поле вставьте код автоматической настройки, скопированный ранее из АТС на этапе [настройка АТС](/get-started/nastroyka_ats). <br>
Выполните **Далее**.

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_38.png"
    data-original="/assets/mango/mango_38.png"
    srcset="/assets/mango/mango_38_prev.png 1x, /assets/mango/mango_38.png 2x" 
    alt="МИКО: автонастройка соединения"
/> 

11. В открывшейся форме в поле введите:
- в поле "**веб-сервер**" адрес сервера **Apache** или **IIS**
- в поле "**имя публикации**" - [имя публикации](/faq/base-publishing#опубпликуйте-веб-сервис)
Нажмите "**Обновить состояние**"

<img class="miko-shadow"  
    src="/assets/mango/mango_40.png"
    alt="МИКО: автонастройка соединения"
/> 

13. Дождитесь установления соединения с АТС (около 30 с). 

<img class="miko-shadow"  
    src="/assets/mango/mango_41.png"
    alt="МИКО: автонастройка соединения"
/> 

### Определение видов контактной информации

14. На странице **Виды номеров** в поле **Вид внутреннего телефона** выберите **Телефон**.  
В поле **Вид мобильного телефона** выберите создание нового элемента. 

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_31.png"
    data-original="/assets/mango/mango_31.png"
    srcset="/assets/mango/mango_31_prev.png 1x, /assets/mango/mango_31.png 2x" 
    alt="МИКО: виды контактной информации"
/> 

15. В появившейся форме создания вида контактной информации отметьте флажками поля **Запрещать ввод некорректных номеров** и **Вводить номер по маске**.
Ниже выберите маску **+7(999) 999-99-99**. Затем выполните **Записать и закрыть**.

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_32.png"
    data-original="/assets/mango/mango_32.png"
    srcset="/assets/mango/mango_32_prev.png 1x, /assets/mango/mango_32.png 2x" 
    alt="МИКО: добавление вида контактной информации"
/> 

16. После заполнения видов номеров перейдите на следующую страницу мастера, выполнив **Далее**.

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_33.png"
    data-original="/assets/mango/mango_33.png"
    srcset="/assets/mango/mango_33_prev.png 1x, /assets/mango/mango_33.png 2x" 
    alt="МИКО: добавление вида контактной информации"
/> 

### Присваивание телефонов сотрудникам
17. На странице **Пользователи телефонии** присвойте внутренние номера пользователям информационной базы, которые будут использовать телефонию (лучше сразу заполнить и мобильные телефоны).
!!! Важно
Присваиваемые номера должны существовать на АТС.
!!!

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_34.png"
    data-original="/assets/mango/mango_34.png"
    srcset="/assets/mango/mango_34_prev.png 1x, /assets/mango/mango_34.png 2x" 
    alt="МИКО: добавление вида контактной информации"
/> 

### Ссылка на скачивание внешней панели
18. Дождитесь окончания настройки. Откройте ссылку предложенную ссылку с установщиком внешней панели. <br>
Страницу с мастером первоначальной настройки можно закрыть, она больше не понадобится. 

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_35.png"
    data-original="/assets/mango/mango_35.png"
    srcset="/assets/mango/mango_35_prev.png 1x, /assets/mango/mango_35.png 2x" 
    alt="МИКО: скачивание внешней панели"
/> 
