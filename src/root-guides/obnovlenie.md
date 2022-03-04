---
order: -4
icon: download
---
# Обновление
## Обновление модуля на АТС
### MikoPBX

1. Перейдите в раздел "**Управление модулями**".
2. Выберите модуль "**Панель телефонии 4.0 для 1С**".
3. Нажмите кнопку обновления.
4. Включите модуль.

<img class="miko-shadow img-zoomable"  
    src="/assets/root-guides/obnovlenie/obn_m.gif"
    data-original="/assets/root-guides/obnovlenie/obn_m.gif"
    srcset="/assets/root-guides/obnovlenie/obn_m_prev.gif 1x, /assets/root-guides/obnovlenie/obn_m.gif 2x" 
    alt="МИКО: обновление модуля на mikopbx"
/> 

Аналогичным образом обновляется **модуль умной маршрутизации (Smart IVR)**. 

### FreePBX

1. Перейдите в раздел "**Администратор**" -> "**Управление модулями**".
2. Нажмите "Проверить онлайн". 
3. Если есть новая версия модуля "**MIKO CTI Client**", раскройте его и нажмите "**Скачать и обновить**". 
4. Внизу страницы нажмите кнопку "**Запустить процесс**". Затем нажмите "**Подтвердить**".
5. Начнется загрузкам модуля. После ее окончания нажмите "**Вернуться**".
6. Нажмите "**Применить изменения**".

<img class="miko-shadow img-zoomable"  
    src="/assets/root-guides/obnovlenie/obn_f.gif"
    data-original="/assets/root-guides/obnovlenie/obn_f.gif"
    srcset="/assets/root-guides/obnovlenie/obn_f_prev.gif 1x, /assets/root-guides/obnovlenie/obn_f.gif 2x" 
    alt="МИКО: обновление модуля на freepbx"
/> 

Аналогичным образом обновляется **модуль умной маршрутизации (Smart IVR)**.

## Обновление внешней панели.
1. Перейдите на закладку с обновлениями и нажмите "**Установить**".
2. После скачивания установочного файла, он запустится автоматически. Выполните установку внешней панели [аналогично тому, как это уже делали](/get-started/install/).

<img class="miko-shadow img-zoomable"  
    src="/assets/root-guides/obnovlenie/obn_vp.gif"
    data-original="/assets/root-guides/obnovlenie/obn_vp.gif"
    srcset="/assets/root-guides/obnovlenie/obn_vp_prev.gif 1x, /assets/root-guides/obnovlenie/obn_vp.gif 2x" 
    alt="МИКО: обновление внешней панели"
/> 
## Обновление подсистемы телефонии в 1С.
Ее лучше производить во внерабочее время сотрудников.

### Обновление из подсистемы телефонии "на лету"

[!badge variant="danger" text="Вставить гифку"] 

### Обновление из раздела "Дополнительные отчеты и обработки"
Если командой "**Установить обновление**" не удалось обновить подсистему, можно воспользоваться стандартным механизмом обновления расширений, который есть в конфигурациях, написанных на БСП. <br>
1. Скачайте новое расширение по команде "**Скачать расширение**".

<img class="miko-shadow img-zoomable"  
    src="/assets/root-guides/obnovlenie/obn_1c_skach.gif"
    data-original="/assets/root-guides/obnovlenie/obn_1c_skach.gif"
    srcset="/assets/root-guides/obnovlenie/obn_1c_skach_prev.gif 1x, /assets/root-guides/obnovlenie/obn_1c_skach.gif 2x" 
    alt="МИКО: скачивание новой подсистемы телефонии"
/> 

2. В разделе "**Настройки**" -> "**Печатные формы отчеты и обработки**" -> "**Расширения**" выберите установленное расширение "Подсистемы телефонии" и нажмите "**Обновить из файла**" и выберите скачанное расширение.
!!!
Для установки расширения потребуется блокировка регламентных заданий на сервере 1С.
!!!

<img class="miko-shadow img-zoomable"  
    src="/assets/root-guides/obnovlenie/obn_1c_ust.gif"
    data-original="/assets/root-guides/obnovlenie/obn_1c_ust.gif"
    srcset="/assets/root-guides/obnovlenie/obn_1c_ust_prev.gif 1x, /assets/root-guides/obnovlenie/obn_1c_ust.gif 2x" 
    alt="МИКО: обновление подсистемы телефонии"
/> 

