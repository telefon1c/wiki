---
visibility: hidden
label: Интеграция с MikoPBX
icon: tools
order: -1
---

# Интеграция с MikoPBX

В этом руководстве показано, как настроить АТС MikoPBX для работы подсистемы телефонии 4.0.

---

[!embed](https://rutube.ru/play/embed/ecb68917a1cc4edc1c0a5393f3061012/)

### Регистрация в Marketplace

!!!warning Важно
АТС должна иметь доступ в Интернет.
!!!

Для установки дополнительных модулей требуется регистрация в Marketplace. Откройте веб-интерфейс MikoPBX и перейдите
в раздел "**Лицензирование**", закладка "**Регистрация и управление лицензией**".
Заполните форму регистрации и нажмите "**Сохранить**". Вам будет автоматически присвоен лицензионный ключ, с активированным триальным периодом на **14-дней** на продукт "**Триальная лицензия на интеграцию 1С и телефонии (ПРОФ)**".<br>
!!!info Лицензионный ключ имеет формат **MIKO-XXXXX-XXXXX-XXXXX-XXXXX**
Также лицензионный ключ будет выслан на указанный вами email с адреса lic@miko.ru. 
!!!

<img class="miko-shadow img-zoomable"  
    src="/assets/mikopbx/mikopbx_0.png"
    data-original="/assets/mikopbx/mikopbx_0.png"
    srcset="/assets/mikopbx/mikopbx_0_prev.png 1x, /assets/mikopbx/mikopbx_0.png 2x" 
    alt="МИКО: получение Лицензионного ключа"
/> 

Если у вас уже есть лицензионный ключ, то достаточно указать его в поле "**Лицензионный ключ**" и нажать кнопку "**Сохранить**".

<img class="miko-shadow img-zoomable"  
    src="/assets/mikopbx/mikopbx_1.png"
    data-original="/assets/mikopbx/mikopbx_1.png"
    srcset="/assets/mikopbx/mikopbx_1_prev.png 1x, /assets/mikopbx/mikopbx_1.png 2x" 
    alt="МИКО: присваивание лицензионного ключа MikoPBX"
/> 

### Установка модуля на АТС
Перейдите в раздел "**Управление модулями**", установите и включите модуль "**Панель телефонии 4.0 для 1С**" 

<img class="miko-shadow play-on-hover"  
   src="/assets/mikopbx/mikopbx_0.gif"
   alt="МИКО: установка модуля на MikoPBX"
/> 

### Получение кода автонастройки

1. Перейдите к настройкам модуля, нажав кнопку "**Изменить**". <br>
Установите "**Автоматическая настройка параметров связи модуля и 1С**" в положение "**Включить**". <br>
"**Режим отладки модуля и логирование всех событий**" - в положение "**Включить**". <br>
"**Устанавливать CallerID из 1С**" - в положение "**Включить**". <br>
Нажмите "**Сохранить**".

<img class="miko-shadow play-on-hover"  
   src="/assets/mikopbx/mikopbx_2.gif"
   alt="МИКО: настройка модуля панели телефонии на MikoPBX"
/> 

2. Нажмите на ссылку, <img src="~/assets/cloud-storage-download.png" alt="cloud-storage-download"/>
чтобы скачать обработку для 1С (файл **Установщик.epf**). <br>
Скопируйте код автоматической настройки из модуля панели телефонии и лицензионный ключ.

<img class="miko-shadow play-on-hover"  
   src="/assets/mikopbx/mikopbx_4.gif"
   alt="МИКО: скачивание обработки и копирование кода автонастройки и лицензионного ключа"
/> 

Перейдите к настройке в 1С:Предприятие.

[!ref Настройка 1С](/get-started/nastroyka_1c)
