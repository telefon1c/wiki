---
order: -4
---

# Входящий звонок
При поступлении входящего звонка появляется звуковое уведомление и баннер с основными данными вызова.

## Поступление входящего вызова
Cистема автоматически определяет клиента по номеру телефона и показывает связанную информацию:
- компанию,
- контактное лицо,
- номер звонящего.

При поступлении звонка отображается название звонящего клиента, если он найден в информационной базе, или номер абонента, если такого клиента в базе нет.

Если внешняя панель работает в режиме софтфона, в баннере доступны две кнопки: **Принять** и **Отклонить**. Если используется режим настольного телефона, доступна только кнопка **Отклонить**.

<div style="display: flex; justify-content: center; gap: 20px;">

<img class="miko-shadow" 
src="/assets/panel/incoming-call/cti_incoming-call_banner_1.png" loading="lazy"
alt="Панель телефонии МИКО: Баннер входящего звонка в режиме софтфона"
/>

<img class="miko-shadow" 
src="/assets/panel/incoming-call/cti_incoming-call_banner_2.png" loading="lazy"
alt="Панель телефонии МИКО: Баннер входящего звонка в режиме настольного телефона"
/>

</div>

Во время входящего звонка в левой части окна программы появляется оранжевая кнопка. При нажатии на нее выполняется переход к окну активного звонка. В окне входящего звонка отображаются доступные действия: в режиме софтфона — **Принять** и **Отклонить**, в режиме настольного телефона — **Отклонить**.

<img class="miko-shadow img-zoomable"  
src="/assets/panel/incoming-call/cti_incoming-call_softphone.png" loading="lazy"
data-original="/assets/panel/incoming-call/cti_incoming-call_softphone.png"
srcset="/assets/panel/incoming-call/cti_incoming-call_softphone.png 1x, /assets/panel/incoming-call/cti_incoming-call_softphone.png 2x"
alt="Панель телефонии МИКО: Входящий звонок в режиме софтфона"
/>

<img class="miko-shadow img-zoomable"  
src="/assets/panel/incoming-call/cti_incoming-call_desk_phone.png" loading="lazy"
data-original="/assets/panel/incoming-call/cti_incoming-call_desk_phone.png"
srcset="/assets/panel/incoming-call/cti_incoming-call_desk_phone.png 1x, /assets/panel/incoming-call/cti_incoming-call_desk_phone.png 2x"
alt="Панель телефонии МИКО: Входящий звонок в режиме настольного телефона"
/>

## Прием входящего звонка
После принятия вызова в режиме софтфона в блоке активного звонка отображается индикатор качества соединения и индикатор защищенного SRTP-звонка.

Пользователю доступны следующие действия:
- управление громкостью,
- включение и отключение микрофона,
- открытие DTMF-клавиатуры для тонального набора,
- постановка вызова на удержание и возврат с удержания,
- перевод вызова,
- завершение разговора.

<img class="miko-shadow img-zoomable"  
src="/assets/panel/incoming-call/cti_incoming-call_softphone_answering.png" loading="lazy"
data-original="/assets/panel/incoming-call/cti_incoming-call_softphone_answering.png"
srcset="/assets/panel/incoming-call/cti_incoming-call_softphone_answering.png 1x, /assets/panel/incoming-call/cti_incoming-call_softphone_answering.png 2x"
alt="Панель телефонии МИКО: После принятия вызова в режиме софтфона"
/>

После принятия вызова в режиме настольного телефона доступны:
- перевод вызова.

<img class="miko-shadow img-zoomable"  
src="/assets/panel/incoming-call/cti_incoming-call_desk_phone_answering.png" loading="lazy"
data-original="/assets/panel/incoming-call/cti_incoming-call_desk_phone_answering.png"
srcset="/assets/panel/incoming-call/cti_incoming-call_desk_phone_answering.png 1x, /assets/panel/incoming-call/cti_incoming-call_desk_phone_answering.png 2x"
alt="Панель телефонии МИКО: После принятия вызова в режиме настольного телефона"
/>

Пользователь также может скопировать номер телефона звонящего.

## Поступление второго звонка
Если во время активного разговора поступает второй входящий звонок, в окне активного звонка появится информация о новом вызове.

Пользователь может выбрать одно из доступных действий: поставить текущий разговор на удержание и ответить на новый звонок, завершить текущий разговор и принять новый вызов либо отклонить второй входящий звонок. После завершения нового разговора можно вернуться к удержанному вызову и продолжить общение.

<img class="miko-shadow img-zoomable"  
src="/assets/panel/incoming-call/cti_incoming-call_second_call.png" loading="lazy"
data-original="/assets/panel/incoming-call/cti_incoming-call_second_call.png"
srcset="/assets/panel/incoming-call/cti_incoming-call_second_call.png 1x, /assets/panel/incoming-call/cti_incoming-call_second_call.png 2x"
alt="Панель телефонии МИКО: Поступление второго входящего звонка"
/>
