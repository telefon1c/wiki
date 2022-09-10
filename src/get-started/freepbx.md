---
visibility: hidden
label: Интеграция с FreePBX
icon: tools
order: -2
---

# Интеграция с FreePBX

!!!warning
Данное руководство предполагает наличие навыков настройки АТС и работы с конфигуратором 1С. <br>
Для выполнения некоторых инструкций могут потребоваться права администратора. <br>
На сегодняшний момент поддерживаются **FreePBX 15 (Asterisk 16), FreePBX 16 (Asterisk 18)**. <br>
АТС должна иметь доступ в Интернет.
!!!

## Установка модуля на АТС

Суть работы модуля заключается в подключении к AMI интерфейсу Asterisk, сбору информации о звонках, состоянии каналов, а также взаимодействие с 1С:Предприятием и Панелью телефонии для управления вызовами.

На текущий момент протестирована работа модуля на следующих версиях FreePBX/Asterisk:  
**FreePBX 16.0.21.9 / Asterisk 18.6.0**,  
**FreePBX 15.0.17.12 / Asterisk 16.6.2**,  
**FreePBX 14.0.13.34 / Asterisk 16.15.1**

1. Перейдите в веб-интерфейс АТС, выберите раздел **FreePBX Administration**.
![](../assets/freepbx/freepbx_mod_0.png)

2. Установите модуль "**Панель телефонии 4.0 для 1С**" путем "**Загрузить из Веб**" использовав нижеприведенную ссылку для скачивания последней версии.  
```html
https://releases.mikopbx.com/releases/v1/freepbx/getModuleFile/pt1coutpanel/latest.tgz
```

<img class="miko-shadow play-on-hover"  
    src="/assets/freepbx/freepbx_mod_0.gif"
    alt="МИКО: FreePBX установка модуля панель телефонии"
/> 

!!! info Если вы хотите откатиться или установить конкретную версию модуля
Для этого укажите эту версию вместо слова **latest** в названии файла, например: <br> 
`https://releases.mikopbx.com/releases/v1/freepbx/getModuleFile/pt1coutpanel/14.0.0.71.tgz`
!!!

5. Дождитесь загрузки модуля на АТС, затем включите его.

<img class="miko-shadow play-on-hover"  
    src="/assets/freepbx/freepbx_mod_1.gif"
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

## Получение кода автонастройки
13. Перейдите на вкладку **Настройки модуля**. В разделе **Общие настройки** установите переключатель в положение **Автоматическая настройка модуля**.  
В разделе **Прочие настройки** переключатели **Включить режим отладки модуля** установите в положение **Включить**, <br>
"**Устанавливать CallerID из 1С**" - **Включить**, <br>
"**Выполнять транслитерацию CallerID полученного из 1С**" - в любое положение. <br> 
Выполните **Сохранить**.

<img class="miko-shadow play-on-hover"  
    src="/assets/freepbx/mod_f_6.gif"
    alt="МИКО: FreePBX настройка модуля панель телефонии"
/> 

14.Нажмите на ссылку, <img src="~/assets/cloud-storage-download.png" alt="cloud-storage-download"/>
чтобы скачать обработку для 1С (файл **Установщик.epf**). <br>
Скопируйте себе лицензионный ключ и код автоматической настройки. Они понадобятся вам при дальнейшей настройке в 1С.

<img class="miko-shadow play-on-hover"  
    src="/assets/freepbx/mod_f_7.gif"
    alt="МИКО: FreePBX скачивание обработки и копирование кода автонастройки и ключа"
/> 

Перейдите к настройке в 1С:Предприятие.

[!ref Настройка 1С](/get-started/nastroyka_1c)