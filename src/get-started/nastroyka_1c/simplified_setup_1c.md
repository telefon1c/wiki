---
label: Упрощенная настройка
icon: tools
order: -1
---
# Упрощенная настройка
Установите флажок Упрощенная настройка и нажмите Далее.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_1.png"
data-original="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_1.png"
srcset="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_1.png 1x, /assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_1.png 2x"
alt="МИКО: Упрощенная настройка подсистемы телефонии в 1С"
/>

## Настройка соединения 1С с АТС
На странице **Проверка связи** выберите тип вашей АТС. Установите переключатель **Настройка подключения** в положение **Автоматическая настройка**. Нажмите **Далее**.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_2.png"
data-original="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_2.png"
srcset="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_2.png 1x, /assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_2.png 2x"
alt="МИКО: Выбор АТС для интеграции с 1С"
/>

В открывшейся форме **Настройка модуля** в поле **Данные для автоматической настройки** вставьте ранее скопированный из АТС код.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_3.png"
data-original="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_3.png"
srcset="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_3.png 1x, /assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_3.png 2x"
alt="МИКО: Ввод кода для автоматической настройки соединения с АТС MikoPBX"
/>

В поле **Схема подключения** выберите один из двух вариантов: **Сервер 1С и сервер АТС в одной сети** или **Сервер 1С в локальной сети, АТС в облаке** в зависимости от того, где у вас расположена АТС.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_4.png"
data-original="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_4.png"
srcset="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_4.png 1x, /assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_4.png 2x"
alt="МИКО: Выбор схемы подключения АТС и 1С"
/>

Нажмите **Настроить** — откроется форма соединения. Ожидайте установления соединения (обычно занимает около 1 минуты). После успешного соединения мастер автоматически перейдет на следующий шаг.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_5.png"
data-original="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_5.png"
srcset="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_5.png 1x, /assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_5.png 2x"
alt="МИКО: Установление соединения 1С с АТС"
/>

!!!
Если соединение долго не устанавливается, проверьте, что на сервере 1С не заблокированы регламентные задания для данной информационной базы.  

Если автонастройка не сработала — выполните настройку вручную по инструкции.
!!!

## Присвоение номеров телефонов сотрудникам
На странице **Пользователи телефонии** в поле **Вид внутреннего телефона** укажите один из двух вариантов: **Телефон** или **Внутренний телефон** (вариант Внутренний телефон может отсутствовать в вашей конфигурации).

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_6.png"
data-original="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_6.png"
srcset="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_6.png 1x, /assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_6.png 2x"
alt="МИКО: Выбор вида внутреннего телефона"
/>

В поле **Вид мобильного телефона** (не обязателен для заполнения) выберите **Мобильный** или создайте новый элемент, если его нет. При создании нового вида контактной информации установите флажки Запрещать ввод некорректных номеров и Вводить номер по маске, в качестве маски выберите +7(999) 999-99-99 и нажмите Записать и закрыть.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_7.png"
data-original="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_7.png"
srcset="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_7.png 1x, /assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_7.png 2x"
alt="МИКО: Создание нового вида контактной информации для мобильного телефона"
/>

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_8.png"
data-original="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_8.png"
srcset="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_8.png 1x, /assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_8.png 2x"
alt="МИКО: Выбор вида мобильного телефона"
/>

В правой части окна отобразится таблица со списком сотрудников. Присвойте внутренние и, при необходимости, мобильные номера сотрудникам, которые будут использовать интеграцию телефонии и 1С.

!!!
Обязательно присвойте внутренний номер текущему пользователю.

Присваиваемые номера должны существовать на вашей АТС.
!!!

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_9.png"
data-original="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_9.png"
srcset="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_9.png 1x, /assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_9.png 2x"
alt="МИКО: Присвойте внутренних и мобильных номеров сотрудникам"
/>

## Завершение мастера первоначальной настройки
Дождитесь окончания настройки. Откройте предложенную ссылку для загрузки установщика внешней панели. Скачайте последнюю версию программы по этой ссылке.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_10.png"
data-original="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_10.png"
srcset="/assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_10.png 1x, /assets/nastr_1c/simplified_setup_1c/simplified_setup_1c_10.png 2x"
alt="МИКО: Окончание настройки"
/>

На этом первоначальная настройка завершена.