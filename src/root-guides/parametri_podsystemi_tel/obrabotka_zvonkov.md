---
label: Обработка вызовов
order: -1
---
Располагается в **Настройки подсистемы -> Обработка вызовов**

<img class="miko-shadow"  
    src="/assets/root-guides/parametri_podsystemi_tel/obrabotka_zvonkov/obr_zv_7.png"
    alt="МИКО: обработка вызовов"
/> 

Имеет следующий вид

<img src="/assets/root-guides/parametri_podsystemi_tel/obrabotka_zvonkov/obr_zv_0.png" 
    class="miko-shadow" 
/>
## Группа "Форматирование номеров телефонов"

Позволяет отформатировать номера клиентов для более удобного их восприятия.  Ниже пример.

<img src="/assets/root-guides/parametri_podsystemi_tel/obrabotka_zvonkov/obr_zv_6.png" 
    class="miko-shadow" 
/>

## Группа "Действие при звонке"

- Когда переключатель **Способ обработки звонка** установлен в положение **Стандартные действия** при поднятии трубки вызываемым абонентом произойдет действие, указанное в **Звонки и сообщения -> Персональные настройки**.

<img src="/assets/root-guides/parametri_podsystemi_tel/obrabotka_zvonkov/obr_zv_4.png" 
    class="miko-shadow" 
/> 

- Когда переключатель **Способ обработки звонка** установлен в положение **Свой алгоритм** при поднятии трубки вызываемым абонентом выполнен алгоритм, написанный на встроенном языке 1С. <br>
Это действие устанавливается для всех пользователей, и пользователь сам не может изменить это действие в персональных настройках.  

<img src="/assets/root-guides/parametri_podsystemi_tel/obrabotka_zvonkov/obr_zv_5.png" 
    class="miko-shadow" 
/> 

## Группа "Перехват звонка"
!!! info
Данный функционал не предусмотрен для АТС Манго Офис.
!!!
- Когда переключатель **Определение ответственного** в положении **Откл** перехват на ответственного в этом случае отключен.
Внешний входящий звонок идет только по правилу входящей маршрутизации. 

<img src="/assets/root-guides/parametri_podsystemi_tel/obrabotka_zvonkov/obr_zv_1.png" 
    class="miko-shadow" 
/> 

- Когда переключатель **Определение ответственного** в положении **По значению реквизита** функция перехвата на ответственного включена. <br>
В данном случае внешний входящий звонок одновременно с правилом входящей маршрутизации поступает ответственному по данному клиенту.

<img src="/assets/root-guides/parametri_podsystemi_tel/obrabotka_zvonkov/obr_zv_2.png" 
    class="miko-shadow" 
/> 

В данном случае ответственный определяется в соответствующем реквизите данного контрагента.

<img class="miko-shadow img-zoomable"
    src="/assets/root-guides/parametri_podsystemi_tel/obrabotka_zvonkov/kart_kontr.png"
    data-original="/assets/root-guides/parametri_podsystemi_tel/obrabotka_zvonkov/kart_kontr.png"
    srcset="/assets/root-guides/parametri_podsystemi_tel/obrabotka_zvonkov/kart_kontr_prev.png 1x, /assets/root-guides/parametri_podsystemi_tel/obrabotka_zvonkov/kart_kontr.png 2x"
    alt="МИКО: реквизит Ответственный в карточке контрагента"
/>

- Когда переключатель **Определение ответственного** в положении **Автоматически** функция перехвата на ответственного включена. <br>
В данном случае внешний входящий звонок одновременно с правилом входящей маршрутизации поступает ответственному по данному клиенту. <br>
Ответственный определяется на основании <a href='/user-guides/routing#определение-взаимодействий-на-основании-которых-будет-строиться-таблица-маршрутизации' target="_blank">отслеживаемых взаимодействий</a>. 
Их можно настроить по ссылке в этой же форме.

<img src="/assets/root-guides/parametri_podsystemi_tel/obrabotka_zvonkov/obr_zv_3.png" 
    class="miko-shadow" 
/> 

