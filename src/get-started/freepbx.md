---
visibility: hidden
label: Интеграция с FreePBX
icon: tools
order: -2
---

# Интеграция с FreePBX

!!! info
Данное руководство предполагает наличие навыков настройки АТС и работы с конфигуратором 1С. 
Для выполнения некоторых инструкций могут потребоваться права администратора. 
На сегодняшний момент поддерживается только **FreePBX 15 (Asterisk 16)**.
!!!

Данная инструкция предназначена для подсистемы телефонии редакции 4.0. Для предыдущих версий используйте другую инструкцию.

## Установка модуля на АТС

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

## Получение лицензионного ключа
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

## Получение ключа автонастройки
13. Перейдите на вкладку **Настройки модуля**. В разделе **Общие настройки** установите переключатель в положение **Автоматическая настройка модуля**.  
В разделе **Прочие настройки** переключатели **Включить режим отладки модуля** установите в положение **Включить**, <br>
"**Устанавливать CallerID из 1С**" - **Включить**, <br>
"**Выполнять транслитерацию CallerID полученного из 1С**" - в любое положение. <br> 
Выполните **Сохранить**. Скачайте обработку для 1С, нажав на ссылку.

<img class="miko-shadow img-zoomable"  
    src="/assets/freepbx/mod_f_3.gif"
    data-original="/assets/freepbx/mod_f_3.gif"
    srcset="/assets/freepbx/mod_f_3_prev.gif 1x, /assets/freepbx/mod_f_3.gif 2x" 
    alt="МИКО: FreePBX настройка модуля панель телефонии"
/> 

14. Скопируйте себе лицензионный ключ и код автоматической настройки. Они понадобятся вам при дальнейшей настройке в 1С.

[!ref Настройка 1С](/get-started/nastroyka_1c)