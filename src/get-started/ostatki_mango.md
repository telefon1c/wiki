---
visibility: hidden
---

## Встраивание расширения телефонии в информационную базу 1С:Предприятие
1. Запустите информационную базу 1С в режиме "1С:Предприятие". Войдите пользователем, имеющим права администратора.
В главном меню выполните Файл - > Открыть (или нажмите комбинацию клавиш **Ctrl+O**).  

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_23.png"
    data-original="/assets/mango/mango_23.png"
    srcset="/assets/mango/mango_23_prev.png 1x, /assets/mango/mango_23.png 2x" 
    alt=""
/> 

Выберите обработку **Установщик.epf** из скачанного архива по пути `Подсистема телефонии для 1С\Редакция 2.2\Установщик.epf`  

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_12.png"
    data-original="/assets/mango/mango_12.png"
    srcset="/assets/mango/mango_12_prev.png 1x, /assets/mango/mango_12.png 2x" 
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
В данном примере использовалась файловая информационная база, и выбран способ подключения - через веб-сервис.

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_29.png"
    data-original="/assets/mango/mango_29.png"
    srcset="/assets/mango/mango_29_prev.png 1x, /assets/mango/mango_29.png 2x" 
    alt="МИКО: способ подключения к серверу интеграции"
/> 

10. Если вы не подключены к сервису 1С:Диалог, вам будет предложено это сделать. Введите адрес вашей электронной почты и в поле переключателя выберите "**1С:Диалог (рекомендуемый вариант)**". Нажмите "**Зарегистрироваться**".
!!!
Для работы телефонии это не является обязательным, чаты с коллегами без подключенных обсуждений работать не будут.
!!!

<img class="miko-shadow"  
    src="/assets/mango/mango_16.png"
    alt="Подключение к сервису 1С:Диалог"
/> 

11. Вам на почту придет письмо с кодом. Скопируйте код.

<img class="miko-shadow"  
    src="/assets/mango/mango_17.png"
    alt="Подключение к сервису 1С:Диалог"
/> 

12. Вставьте его в поле и нажмите "**Зарегистрироваться**".

<img class="miko-shadow"  
    src="/assets/mango/mango_18.png"
    alt="Подключение к сервису 1С:Диалог"
/> 

13. После подключения обсуждений нажмите "**Готово**".

<img class="miko-shadow"  
    src="/assets/mango/mango_19.png"
    alt="Подключение к сервису 1С:Диалог"
/> 

14. На странице "Проверка связи" выберите тип АТС "**Mango office**" IP-адрес сервера интеграции. Нажмите "**Далее**".

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_30.png"
    data-original="/assets/mango/mango_30.png"
    srcset="/assets/mango/mango_30_prev.png 1x, /assets/mango/mango_30.png 2x" 
    alt="МИКО: подключения 1С к серверу интеграции"
/> 

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

18. На странице **Пользователи телефонии** присвойте внутренние номера пользователям информационной базы, которые будут использовать телефонию (лучше сразу заполнить и мобильные телефоны).
!!! Важно
На ВАТС Манго должны существовать сотрудники с присваиваемыми номерами.
!!!

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_34.png"
    data-original="/assets/mango/mango_34.png"
    srcset="/assets/mango/mango_34_prev.png 1x, /assets/mango/mango_34.png 2x" 
    alt="МИКО: добавление вида контактной информации"
/> 

19. Дождитесь окончания настройки. Страницу с мастером первоначальной настройки можно закрыть, она больше не понадобится. 

<img class="miko-shadow img-zoomable"  
    src="/assets/mango/mango_35.png"
    data-original="/assets/mango/mango_35.png"
    srcset="/assets/mango/mango_35_prev.png 1x, /assets/mango/mango_35.png 2x" 
    alt="МИКО: добавление вида контактной информации"
/> 

20. Перейдите к [установке Внешней панели 4.0](/user-guides/panel/install)

Для способа соединения «**веб-сервис**», заполните параметры подключения к веб-сервису.

<img class="miko-shadow"  
    src="/assets/mango/mango_22.png"
    alt=""
/> 

Выберите [подходящий способ соединения с 1С.](/root-guides/select-connection-mode)

!!! Коротко о способах подключения
Если у вас **Сервер 1С** и пользователи подключаются посредством тонкого клиента - подойдет способ **Long-pooling**. Канал передачи контактных данных нужно установить в **Long-pooling соединение**, канал передачи событий в **Long-pooling соединение** или **Внешняя компонента**.  
Если у вас **файловая информационная база** - подойдет способ **веб-сервис**. Нужно [настроить публикацию](/faq/base-publishing) информационной базы на сервере IIS или Apache, а каналы передачи событий и контактных данных установить в значение **веб-сервис**.  
!!!

## Остатки freepbx

13. Если в автоматическом режиме настроить соединение не удалось, можно его настроить в ручном режиме.  
Для этого в веб-интерфейсе АТС в модуле **МИКО:Панель телефонии 4.0** на вкладке **Настройка модуля** в разделе **Общие настройки** установите переключатель в положение **Ввести параметры подключения к 1С вручную**.  
В разделе **Связь с 1С:Предприятие 8** установите переключатель в соответствие с вашей [схеме соединения](/root-guides/select-connection-mode)  
Скопируйте IP-адрес АТС и выполните **Submit**.
![](../assets/freepbx/freepbx_mod_15.png)

14. В мастере первоначальной настройки 1С переключатель **Настройка подключения** установите в положение **Ручная настройка**.  
В поле ниже вставьте адрес АТС и выполните **Далее**. Если соединение с АТС установится, мастер перейдет на следующую страницу.
![](../assets/freepbx/freepbx_1c_11.png)