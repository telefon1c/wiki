---
label: Если автонастройка соединения с АТС не сработала
visibility: hidden
order: -6
---
## Проверить открытие портов
Нужно проверить, что и с хоста, на котором запускается тонкий клиент 1С и с хоста, на котором установлен сервер 1С есть доступ к АТС по **TCP** портам **4222** и **8222**. <br>
Сделать это можно командой **telnet**. <br>
`telnet [Адрес АТС] [номер порта]` <br> 
Пример `telnet 172.16.32.82 4222` <br>

по 4222 порту ответ должен быть наподобие такого

<img class="miko-shadow"
    src="/assets/faq/faq_telnet_0.png"
/> 

по 8222 порту правильным результатом является просто пустой экран.

На MikoPBX для открытия вышеуказанных портов достаточно в настройках сетевого экрана для сети (или сетей) в которой находятся сервер 1С, тонкий клиент включить переключатель **CTI CLIENT**.

<img class="miko-shadow img-zoomable"  
    src="/assets/faq/faq_ruch_nastr_5.png"
    data-original="/assets/faq/faq_ruch_nastr_5.png"
    srcset="/assets/faq/faq_ruch_nastr_5_prev.png 1x, /assets/faq/faq_ruch_nastr_5.png 2x" 
    alt="Настройка соединения с АТС в ручном режиме"
/> 

В FreePBX, если включен firewall, нужно подключиться к АТС по SSH и разрешить входящие подключения для TCP портов 4222, 8222. 

Схематично выглядит следующим образом

<img class="miko-shadow"
    src="/assets/faq/faq_ruch_nastr_2.png"
/> 

## Также можно настроить соединение с АТС в ручном режиме  
1. Для этого в веб-интерфейсе АТС в модуле **МИКО:Панель телефонии 4.0** выключить переключатель **Автоматическая настройка параметров связи модуля и 1С** <br>
2. Переключатель **Режим соединения** установите положение **Через LongPool соединение (1С подключается к MikoPBX)**. <br>
3. Сохраните настройки. <br>
4. Скопируйте из адресной строки адрес АТС.  

<img class="miko-shadow img-zoomable"  
    src="/assets/faq/faq_ruch_nastr_3.png"
    data-original="/assets/faq/faq_ruch_nastr_3.png"
    srcset="/assets/faq/faq_ruch_nastr_3_prev.png 1x, /assets/faq/faq_ruch_nastr_3.png 2x" 
    alt="Настройка соединения с АТС в ручном режиме"
/> 

5. В мастере первоначальной настройки 1С переключатель типа АТС установите в соответствии с вашей АТС.
6. **Настройка подключения** установите в положение **Ручная настройка**.  
7. В поле ниже вставьте адрес АТС и выполните **Далее**. Если соединение с АТС установится, мастер перейдет на следующую страницу.

<img class="miko-shadow img-zoomable"  
    src="/assets/faq/faq_ruch_nastr_4.png"
    data-original="/assets/faq/faq_ruch_nastr_4.png"
    srcset="/assets/faq/faq_ruch_nastr_4_prev.png 1x, /assets/faq/faq_ruch_nastr_4.png 2x" 
    alt="Настройка соединения с АТС в ручном режиме"
/> 