---
label: Настройка 1C
icon: zap
order: -2
---
# Встраивание расширения телефонии в информационную базу 1С:Предприятие
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

1. Запустите информационную базу 1С в режиме "1С:Предприятие". Войдите пользователем, имеющим права администратора.
В главном меню выполните **Файл** - > **Открыть** (или нажмите комбинацию клавиш **Ctrl+O**).  Выберите скачанную обработку **Установщик.epf**

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_23.png"
    data-original="/assets/mango/mango_23.png"
    srcset="/assets/mango/mango_23_prev.png 1x, /assets/mango/mango_23.png 2x" 
    alt=""
/> 

3. На странице **Проверка доступных лицензий** вставьте ваш лицензионный ключ в одноименное поле и выполните **Далее**.

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
    alt="МИКО: установлена подсистема звонки и сообщения"
/> 

9. На странице **Схема подключения** выберите подходящую вам [схему соединения](/root-guides/select-connection-mode) АТС с 1С. Выбор принципиального значения не имеет - это, своего рода, подсказка. От него будет зависеть первоначальное заполнение каналов передачи событий и контактных данных.  
Откройте **Расширенные настройки** и установите их исходя из выбранной схемы подключения. Выполните **Далее**.  
В данном примере использовалась серверная информационная база, и выбран способ подключения Long-pooling.
!!! Коротко о способах подключения
Если у вас **Сервер 1С** и пользователи подключаются посредством тонкого клиента - подойдет способ **Long-pooling**. Канал передачи контактных данных нужно установить в **Long-pooling соединение**, канал передачи событий в **Long-pooling соединение** или **Внешняя компонента**.  
Если у вас **файловая информационная база** - подойдет способ **веб-сервис**. Нужно [настроить публикацию](/faq/base-publishing) информационной базы на сервере IIS или Apache, а каналы передачи событий и контактных данных установить в значение **веб-сервис**.  
!!!

<img class="miko-shadow img-zoomable"  
    src="/assets/freepbx/freepbx_1c_8.png"
    data-original="/assets/freepbx/freepbx_1c_8.png"
    srcset="/assets/freepbx/freepbx_1c_8_prev.png 1x, /assets/freepbx/freepbx_1c_8.png 2x" 
    alt="МИКО: выбор способа соединения"
/> 

10. Вставьте код для автоматической настройки, скопированный ранее из АТС на этапе [настройка АТС](/get-started/nastroyka_ats).

11. На странице **Проверка связи** Переключатель **К какой АТС выполняется подключение** установите в соответствии с вашей АТС.  
Переключатель **Настройка подключения** - в положение **Автоматическая настройка**. 
Ниже в поле вставьте скопированный ранее код автоматической настройки.
Выполните **Далее**.

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_38.png"
    data-original="/assets/mango/mango_38.png"
    srcset="/assets/mango/mango_38_prev.png 1x, /assets/mango/mango_38.png 2x" 
    alt="МИКО: автонастройка соединения"
/> 

12. Дождитесь установления соединения с АТС (около 30 с). 

13. На странице **Виды номеров** в поле **Вид внутреннего телефона** выберите **Телефон**.  
В поле **Вид мобильного телефона** выберите создание нового элемента. 

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_31.png"
    data-original="/assets/mango/mango_31.png"
    srcset="/assets/mango/mango_31_prev.png 1x, /assets/mango/mango_31.png 2x" 
    alt="МИКО: виды контактной информации"
/> 

14. В появившейся форме создания вида контактной информации отметьте флажками поля **Запрещать ввод некорректных номеров** и **Вводить номер по маске**.
Ниже выберите маску **+7(999) 999-99-99**. Затем выполните **Записать и закрыть**.

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_32.png"
    data-original="/assets/mango/mango_32.png"
    srcset="/assets/mango/mango_32_prev.png 1x, /assets/mango/mango_32.png 2x" 
    alt="МИКО: добавление вида контактной информации"
/> 

15. После заполнения видов номеров перейдите на следующую страницу мастера, выполнив **Далее**.

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_33.png"
    data-original="/assets/mango/mango_33.png"
    srcset="/assets/mango/mango_33_prev.png 1x, /assets/mango/mango_33.png 2x" 
    alt="МИКО: добавление вида контактной информации"
/> 

16. На странице **Пользователи телефонии** присвойте внутренние номера пользователям информационной базы, которые будут использовать телефонию (лучше сразу заполнить и мобильные телефоны).
!!! Важно
Присваиваемые номера должны существовать на АТС.
!!!

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_34.png"
    data-original="/assets/mango/mango_34.png"
    srcset="/assets/mango/mango_34_prev.png 1x, /assets/mango/mango_34.png 2x" 
    alt="МИКО: добавление вида контактной информации"
/> 

17. Дождитесь окончания настройки. Страницу с мастером первоначальной настройки можно закрыть, она больше не понадобится. 

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_35.png"
    data-original="/assets/mango/mango_35.png"
    srcset="/assets/mango/mango_35_prev.png 1x, /assets/mango/mango_35.png 2x" 
    alt="МИКО: добавление вида контактной информации"
/> 

18. Перейдите к [установке Внешней панели 4.0](/user-guides/panel/install)