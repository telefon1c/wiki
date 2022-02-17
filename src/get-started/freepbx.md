---
label: Интеграция с FreePBX
icon: zap
order: -2
---

# Интеграция с FreePBX

!!! info
Данное руководство предполагает наличие навыков настройки АТС и работы с конфигуратором 1С. 
Для выполнения некоторых инструкций могут потребоваться права администратора. 
На сегодняшний момент поддерживается только **FreePBX 15 (Asterisk 16)**.
!!!

Данная инструкция предназначена для подсистемы телефонии редакции 4.0. Для предыдущих версий используйте другую инструкцию.

### Установка модуля на АТС

Суть работы модуля заключается в подключении к AMI интерфейсу Asterisk, сбору информации о звонках, состоянии каналов, а также взаимодействие с 1С:Предприятием и Панелью телефонии для управления вызовами.

На текущий момент протестирована работа модуля на следующих версиях FreePBX/Asterisk

**FreePBX 15.0.17.12 / Asterisk 16.6.2**,  
**FreePBX 14.0.13.34 / Asterisk 16.15.1**

1. Перейдите в веб-интерфейс АТС, выберите раздел **FreePBX Administration**.
![](../assets/freepbx/freepbx_mod_0.png)

2. Установите модуль "**Панель телефонии 4.0 для 1С**" путем "**Загрузить из Веб**" использовав нижеприведенную ссылку для скачивания последней версии.  
```html
https://releases.mikopbx.com/releases/v1/freepbx/getModuleFile/pt1coutpanel/latest.tgz
```

<img class="miko-shadow img-zoomable"  
    src="/assets/freepbx/freepbx_mod_0.gif"
    data-original="/assets/freepbx/freepbx_mod_0.gif"
    srcset="/assets/freepbx/freepbx_mod_0_prev.gif 1x, /assets/freepbx/freepbx_mod_0.gif 2x" 
    alt="МИКО: FreePBX установка модуля панель телефонии"
/> 

5. Дождитесь загрузки модуля на АТС, затем включите его.

<img class="miko-shadow img-zoomable"  
    src="/assets/freepbx/freepbx_mod_1.gif"
    data-original="/assets/freepbx/freepbx_mod_1.gif"
    srcset="/assets/freepbx/freepbx_mod_1_prev.gif 1x, /assets/freepbx/freepbx_mod_1.gif 2x" 
    alt="МИКО: FreePBX установка модуля панель телефонии"
/> 

11. После этого в разделе **Приложения** появится команда **MIKO CTI Client 4.0 for 1C (Подсистема телефонии для 1С)**. Выполните ее.

<img class="miko-shadow img-zoomable"  
    src="/assets/freepbx/freepbx_mod_10.png"
    data-original="/assets/freepbx/freepbx_mod_10.png"
    srcset="/assets/freepbx/freepbx_mod_10_prev.png 1x, /assets/freepbx/freepbx_mod_10.png 2x" 
    alt="МИКО: FreePBX установка модуля панель телефонии"
/> 

12. В открывшемcя модуле перейдите на вкладку **Лицензирование**.
Если вы не имеете лицензионного ключа, заполните поля раздела **Регистрация нового клиента**.  

<img class="miko-shadow img-zoomable"  
    src="/assets/freepbx/freepbx_mod_11.png"
    data-original="/assets/freepbx/freepbx_mod_11.png"
    srcset="/assets/freepbx/freepbx_mod_11_prev.png 1x, /assets/freepbx/freepbx_mod_11.png 2x" 
    alt="МИКО: FreePBX регистрация клиента в модуле панели телефонии"
/> 

!!!info Лицензионный ключ
Ключ имеет формат **MIKO-XXXXX-XXXXX-XXXXX-XXXXX** и отправляется автоматически после регистрации
на ваш email с адреса lic@miko.ru. У ключа будет активирован триальный период на **30-дней** на продукты: "Панель телефонии для 1С", "Журнал звонков и аналитика".
!!!

Если у вас уже есть лицензионный ключ, вставьте его в поле **Лицензионный ключ**.

<img class="miko-shadow img-zoomable"  
    src="/assets/freepbx/freepbx_mod_12.png"
    data-original="/assets/freepbx/freepbx_mod_12.png"
    srcset="/assets/freepbx/freepbx_mod_12_prev.png 1x, /assets/freepbx/freepbx_mod_12.png 2x" 
    alt="МИКО: FreePBX лицензионный ключ клиента в модуле панели телефонии"
/> 


13. Перейдите на вкладку **Настройки модуля**. В разделе **Общие настройки** установите переключатель в положение **Автоматическая настройка модуля**.  
В разделе **Прочие настройки** переключатель **Включить режим отладки модуля** установите в положение **Включить**. Выполните **Submit**.
![](../assets/freepbx/freepbx_mod_13.png)

14. Скачайте расширение для 1С, нажав на ссылку.
![](../assets/freepbx/freepbx_mod_14.png)

### Встраивание расширения телефонии в информационную базу 1С:Предприятие
1. Запустите информационную базу 1С в режиме "1С:Предприятие". Войдите пользователем, имеющим права администратора.
В главном меню выполните  Файл - > Открыть (или нажмите комбинацию клавиш **Ctrl+O**).  Выберите скачанную обработку **Установщик.epf**

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
![](../assets/freepbx/freepbx_1c_3.png)

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

10. В веб-интерфейсе АТС в модуле **МИКО:Панель телефонии 4.0** на вкладке **Настройка модуля** скопируйте код из раздела **Данные для автоматической настройки**.
![](../assets/freepbx/freepbx_1c_9.png)

11. На странице **Проверка связи** Переключатель **К какой АТС выполняется подключение** установите **FreePBX**.  
Переключатель **Настройка подключения** - в положение **Автоматическая настройка**. 
Ниже в поле вставьте скопированный ранее код автоматической настройки.
Выполните **Далее**.
![](../assets/freepbx/freepbx_1c_10.png)

12. Дождитесь установления соединения с АТС (около 30 с). 
!!! info Если автоматически не настраивается 
Тогда выполните пункты **13, 14**. Если автоматически настроилось, переходите к пункту **15**.
!!!

13. Если в автоматическом режиме настроить соединение не удалось, можно его настроить в ручном режиме.  
Для этого в веб-интерфейсе АТС в модуле **МИКО:Панель телефонии 4.0** на вкладке **Настройка модуля** в разделе **Общие настройки** установите переключатель в положение **Ввести параметры подключения к 1С вручную**.  
В разделе **Связь с 1С:Предприятие 8** установите переключатель в соответствие с вашей [схеме соединения](/root-guides/select-connection-mode)  
Скопируйте IP-адрес АТС и выполните **Submit**.
![](../assets/freepbx/freepbx_mod_15.png)

14. В мастере первоначальной настройки 1С переключатель **Настройка подключения** установите в положение **Ручная настройка**.  
В поле ниже вставьте адрес АТС и выполните **Далее**. Если соединение с АТС установится, мастер перейдет на следующую страницу.
![](../assets/freepbx/freepbx_1c_11.png)

15. На странице **Виды номеров** в поле **Вид внутреннего телефона** выберите **Телефон**.  
В поле **Вид мобильного телефона** выберите создание нового элемента. 

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_31.png"
    data-original="/assets/mango/mango_31.png"
    srcset="/assets/mango/mango_31_prev.png 1x, /assets/mango/mango_31.png 2x" 
    alt="МИКО: виды контактной информации"
/> 

16. В появившейся форме создания вида контактной информации отметьте флажками поля **Запрещать ввод некорректных номеров** и **Вводить номер по маске**.
Ниже выберите маску **+7(999) 999-99-99**. Затем выполните **Записать и закрыть**.

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_32.png"
    data-original="/assets/mango/mango_32.png"
    srcset="/assets/mango/mango_32_prev.png 1x, /assets/mango/mango_32.png 2x" 
    alt="МИКО: добавление вида контактной информации"
/> 

17. После заполнения видов номеров перейдите на следующую страницу мастера, выполнив **Далее**.

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_33.png"
    data-original="/assets/mango/mango_33.png"
    srcset="/assets/mango/mango_33_prev.png 1x, /assets/mango/mango_33.png 2x" 
    alt="МИКО: добавление вида контактной информации"
/> 

19. На странице **Пользователи телефонии** присвойте внутренние номера пользователям информационной базы, которые будут использовать телефонию (лучше сразу заполнить и мобильные телефоны).
!!! Важно
Присваиваемые номера должны существовать на АТС.
!!!

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_34.png"
    data-original="/assets/mango/mango_34.png"
    srcset="/assets/mango/mango_34_prev.png 1x, /assets/mango/mango_34.png 2x" 
    alt="МИКО: добавление вида контактной информации"
/> 

20. Дождитесь окончания настройки. Страницу с мастером первоначальной настройки можно закрыть, она больше не понадобится. 

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_35.png"
    data-original="/assets/mango/mango_35.png"
    srcset="/assets/mango/mango_35_prev.png 1x, /assets/mango/mango_35.png 2x" 
    alt="МИКО: добавление вида контактной информации"
/> 

21. Перейдите к [установке Внешней панели 4.0](/user-guides/panel/install)