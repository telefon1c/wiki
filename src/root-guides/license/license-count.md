---
label: Подсчет необходимого количества лицензий
order: -3
---
## Лицензия на сеанс 1С
Сеансы 1С:Предприятие используют лицензию [!badge variant="info" text="Интеграция 1С и телефонии ПРОФ (сеанс в 1С) (48)"].  
Подсчет пользователей ведется по пользователям компьютера (домена). При задействовании всех имеющихся лицензий, у пользователя, которому не хватило лицензии, при попытке открытия журнала звонков будет выдано следующее сообщение

<figure class="content-center">
    <img class="miko-shadow"  
    src="/assets/root-guides/license-count/nehvat_lic.png"
    alt="МИКО: нехватка лицензии на сеанс 1С"
    /> 
</figure>

Сам журнал звонков не откроется. Также появится форма.

<figure class="content-center">
    <img class="miko-shadow"  
    src="/assets/root-guides/license-count/nehvat_lic_trial.png"
    alt="МИКО: нехватка лицензии на сеанс 1С"
    /> 
</figure>
Возможно получение пин-кода для авторизации внешней панели. Сама авторизация внешней панели также возможна.
Звонки из 1С работают.

## Лицензия на внешнюю панель
Внешняя панель использует лицензию [!badge variant="info" text="Интеграция 1С и телефонии ПРОФ (сеанс в внешней панели) (49)"]. 
Подсчет пользователей ведется также по пользователям компьютера (домена). <br>
При нехватке лицензий на внешнюю панель возможна ее авторизация и использование (звонки, открытие карточки контрагента из внешней панели). Также возможны звонки из 1С. Наименования контрагентов, контактных лиц загружаются из 1С.  
Сверху раздела **Клиенты** будет уведомление о том, что нет лицензии на внешнюю панель.

<img class="miko-shadow play-on-hover"  
    src="/assets/root-guides/license-count/nehv_vp.gif"
    alt="МИКО: нехватка лицензии на внешнюю панель"
/>

## Лицензия на чаты
Используется лицензия [!badge variant="info" text="Интеграция 1С с чатами (WhatsApp) (42)"].

## Лицензия на журнал звонков
Используется лицензия [!badge variant="info" text="Модуль журнал звонков (31)"].
Лицензия захватывается с сервера 1С. То есть на одну информационную базу нужна 1 лицензия, независимо от количества пользователей, работающих с базой.

## Особенности захвата лицензий 1С при использовании внешней панели
При авторизации в чатах создается веб-сеанс с базой 1С. Это требует дополнительную пользовательскую лицензию на 1С:Предприятие. <br>
Авторизация длится несколько секунд, дальше сеанс завершается, и лицензия освобождается. <br> То есть для корректной авторизации в чатах нужно иметь одну свободную в данный момент времени лицензию на 1С.