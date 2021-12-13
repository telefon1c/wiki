---
label: Начать с FreePBX
icon: zap
order: -2
---

# Интеграция с FreePBX

!!! info
Данное руководство предполагает наличие навыков настройки АТС и работы с конфигуратором 1С. 
Для выполнения некоторых инструкций могут потребоваться права администратора. 
На сегодняшний момент поддерживается только **FreePBX 15 (Asterisk 16)**.
!!!

Данная инструкция предназначена для редакции 2.2, для предыдущих версий используйте другую инструкцию.

### Подготовьте АТС

Суть работы модуля заключется в подключении к AMI интерфейсу Asterisk, сбору информации о звонках, состоянии каналов, а также взаимодействие с 1С:Предприятием и Панелью телефонии для управления вызовами.

На текущий момент протестирована работа модуля на следующих версиях FreePBX/Asterisk

FreePBX 15.0.17.12 - Asterisk 16.6.2
FreePBX 14.0.13.34 - Asterisk 16.15.1

Перейдите в веб-интерфейс АТС, выберите раздел **FreePBX Administration**.
![](~/assets/freepbx/freepbx_mod_0.png)

Выполните **Admin -> Module Admin**
![](~/assets/freepbx/freepbx_mod_1.png)

Выполните **Upload modules**
![](~/assets/freepbx/freepbx_mod_2.png)

Выберите **Type** выберите **Download (From Web)**. 
Скопируйте [ссылку на последнюю версию](https://releases.mikopbx.com/releases/v1/freepbx/getModuleFile/pt1coutpanel/latest.tgz)  модуля "Панель телефонии 2.0 для 1С".   
Вставьте ее в поле **Download Remote Module**.  
Выполните **Download (From Web)**
![](~/assets/freepbx/freepbx_mod_3.png)

Дождитесь загрузки модуля на АТС. Затем выполните **Manage Local Modules**
![](~/assets/freepbx/freepbx_mod_4.png)

В разделе **Appliations** найдите модуль **MIKO CTI Client 4.0**, нажмите **Install**.
![](~/assets/freepbx/freepbx_mod_5.png)

Прокрутите страницу с модулями в самый низ и выполните **Process**.
![](~/assets/freepbx/freepbx_mod_6.png)

После установки модуля выполните **Confirm**.
![](~/assets/freepbx/freepbx_mod_7.png)

В появившемся окне **Status** выполните **Return**.
![](~/assets/freepbx/freepbx_mod_8.png)

Приметите изменения. Для эого выполните **Apply Config**.
![](~/assets/freepbx/freepbx_mod_9.png)

После этого разделе **Applications** появится команда **MIKO CTI Client 4.0 for 1C (Подсистема телефонии для 1С)**. Выполните ее.
![](~/assets/freepbx/freepbx_mod_10.png)

В открывшемcя модуле перейдите на вкладку **Лицензирование**. Если вы не имеете лицензионного ключа заполните поля раздела ==Регистрация нового клиента==  
