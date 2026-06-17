---
order: -1
---

# Настройка выноса сервисов удалённых мессенджеров на VPS

Перед развертыванием VPS и настройкой модуля **Панель телефонии 4.0 для 1С** на АТС MikoPBX необходимо подготовить SSH-ключ, с помощью которого АТС будет подключаться к удалённому серверу.

## Подготовка SSH-ключа

Создайте пару ключей: приватный и публичный SSH-ключ.

Для создания ключа можно использовать <a href='https://docs.mikopbx.ru/mikopbx/faq/troubleshooting/connecting-to-a-pbx-using-ssh/powershell' target="_blank">инструкцию по подключению к MikoPBX через SSH в PowerShell</a>

В дальнейшем:
* публичный ключ нужно будет добавить на VPS при создании сервера;
* приватный ключ нужно будет указать в настройках модуля **Панель телефонии 4.0 для 1С** в MikoPBX.

!!!
Важно: приватный ключ нельзя передавать третьим лицам или публиковать. Он используется для доступа к серверу.
!!!

## Создание VPS в Selectel

Перейдите в <a href='https://selectel.ru/?ref_code=b10bbb071b' target="_blank">Selectel</a>

В панели Selectel откройте раздел **Облачные серверы** и нажмите **Создать сервер**.

<img class="miko-shadow img-zoomable"  
src="/assets/root-guides/transferring_to_vps/transferring_to_vps_1.png"
data-original="/assets/root-guides/transferring_to_vps/transferring_to_vps_1.png"
srcset="/assets/root-guides/transferring_to_vps/transferring_to_vps_1.png 1x, /assets/root-guides/transferring_to_vps/transferring_to_vps_1.png 2x"
alt="МИКО: Создание VPS в Selectel"
/>

Укажите параметры сервера:

1. В поле **Имя** задайте имя сервера
2. В поле **Локация** выберите из выпадающего списка **kz-1a**
3. В разделе **Источник** выберите **Debian**

<img class="miko-shadow img-zoomable"  
src="/assets/root-guides/transferring_to_vps/transferring_to_vps_2.png"
data-original="/assets/root-guides/transferring_to_vps/transferring_to_vps_2.png"
srcset="/assets/root-guides/transferring_to_vps/transferring_to_vps_2.png 1x, /assets/root-guides/transferring_to_vps/transferring_to_vps_2.png 2x"
alt="МИКО: Настройка параметров Имя, Локация, Источник для сервера VPS в Selectel"
/>

4. В разделе **Конфигурация** выберите  тип — **Shared**, доля vCPU — **20%**, память — **1 ГБ RAM** (минимальное значение)

!!!
Рекомендуемый объём памяти зависит от количества подключённых учётных записей WhatsApp и Telegram, а также от интенсивности переписки и объёма медиафайлов.

Таблица с рекомендуемыми значениями:

{.compact}
Сценарий | Рекомендуемая RAM
--- | ---        
1 WhatsApp + 2 Telegram, лёгкая нагрузка | 1 ГБ
2 WhatsApp + 2–3 Telegram, активная переписка с медиа | 2 ГБ
3+ WhatsApp или 4+ Telegram, поток вложений | 2 ГБ + 1 ГБ swap
5+ аккаунтов суммарно, большие группы и активный обмен медиа | 4 ГБ

Эмпирическое правило для расчёта памяти: N × 150 МБ + 400 МБ

Где:
N — количество активных учётных записей WhatsApp и Telegram;
150 МБ — примерный расход памяти на один активный аккаунт под пиковой нагрузкой;
400 МБ — запас на систему и кеш.

Например, для конфигурации 1 WhatsApp + 2 Telegram расчёт будет следующим:
3 × 150 МБ + 400 МБ = 850 МБ
!!!

5. Перейдите к разделу **Диски**, укажите тип диска — **HDD Базовый**, размер — **15 ГБ**.

<img class="miko-shadow img-zoomable"  
src="/assets/root-guides/transferring_to_vps/transferring_to_vps_3.png"
data-original="/assets/root-guides/transferring_to_vps/transferring_to_vps_3.png"
srcset="/assets/root-guides/transferring_to_vps/transferring_to_vps_3.png 1x, /assets/root-guides/transferring_to_vps/transferring_to_vps_3.png 2x"
alt="МИКО: Настройка разделов Конфигурация и Диски для сервера VPS в Selectel"
/>

6. В разделе **Доступ** нажмите **Добавить SSH-ключ**
7. В открывшемся окне укажите имя ключа, вставьте ранее сгенерированный публичный SSH-ключ. Нажмите **Добавить**

<img class="miko-shadow img-zoomable"  
src="/assets/root-guides/transferring_to_vps/transferring_to_vps_4.png"
data-original="/assets/root-guides/transferring_to_vps/transferring_to_vps_4.png"
srcset="/assets/root-guides/transferring_to_vps/transferring_to_vps_4.png 1x, /assets/root-guides/transferring_to_vps/transferring_to_vps_4.png 2x"
alt="МИКО: Добавление SSH-ключа"
/>

8. Нажмите **Создать сервер**

<img class="miko-shadow img-zoomable"  
src="/assets/root-guides/transferring_to_vps/transferring_to_vps_5.png"
data-original="/assets/root-guides/transferring_to_vps/transferring_to_vps_5.png"
srcset="/assets/root-guides/transferring_to_vps/transferring_to_vps_5.png 1x, /assets/root-guides/transferring_to_vps/transferring_to_vps_5.png 2x"
alt="МИКО: Настройка раздела Доступ для сервера VPS в Selectel"
/>

После создания сервера дождитесь, пока он перейдёт в рабочее состояние.

<img class="miko-shadow img-zoomable"  
src="/assets/root-guides/transferring_to_vps/transferring_to_vps_6.png"
data-original="/assets/root-guides/transferring_to_vps/transferring_to_vps_6.png"
srcset="/assets/root-guides/transferring_to_vps/transferring_to_vps_6.png 1x, /assets/root-guides/transferring_to_vps/transferring_to_vps_6.png 2x"
alt="МИКО: Созданный сервер VPS в Selectel"
/>

### Проверка подключения к VPS по SSH

Перед настройкой MikoPBX убедитесь, что к созданному серверу можно подключиться по SSH без пароля, используя ключ.

Пример команды для Windows PowerShell:

```
ssh -i Users\<Username>\.ssh\ed25519 root@vpsipadress
```

Где:
* `Users\<Username>\.ssh\ed25519` — путь к приватному SSH-ключу;
* `vpsipadress` — IP-адрес созданного VPS.

Если подключение прошло успешно и пароль не запрашивается, можно переходить к настройке модуля в MikoPBX.

## Настройка подключения к VPS в MikoPBX

На АТС MikoPBX откройте модуль **Панель телефонии 4.0 для 1С** (минимальная версия 1.571), на АТС FreePBX - модуль **МИКО: Панель телефонии для 1С** (минимальная версия 14.0.0.250).

Перейдите на вкладку **Удалённые мессенджеры** и заполните параметры подключения к VPS.

В блоке Подключение к удаленному VPS заполните поля:
* **Адрес VPS** — IP-адрес сервера VPS в Selectel;
* **SSH-порт** — `22`;
* **SSH-логин** — `root`;
* **Базовый каталог на VPS** — `/home/cti/mikopbx-cti`;
* **Приватный SSH-ключ (PEM)** — приватный SSH-ключ, сгенерированный ранее.

После заполнения параметров нажмите **Сохранить**, затем **Проверить SSH-подключение**.

Если всё настроено верно, отобразится сообщение Подключение успешно

<img class="miko-shadow img-zoomable"  
src="/assets/root-guides/transferring_to_vps/transferring_to_vps_7.png"
data-original="/assets/root-guides/transferring_to_vps/transferring_to_vps_7.png"
srcset="/assets/root-guides/transferring_to_vps/transferring_to_vps_7.png 1x, /assets/root-guides/transferring_to_vps/transferring_to_vps_7.png 2x"
alt="МИКО: Настройка параметров подключения к VPS в модуле Панель телефонии 4.0 для 1С на АТС MikoPBX"
/>

### Выбор сервисов для выноса на VPS

После успешной проверки SSH-подключения перейдите к разделу **Сервисы для выноса** на вкладке **Удалённые мессенджеры**.

Включите переключатели для тех мессенджеров, сервисы которых нужно перенести на удалённый VPS.

После включения необходимых сервисов MikoPBX подготовит удалённую среду и запустит сервисы на VPS.

<img class="miko-shadow img-zoomable"  
src="/assets/root-guides/transferring_to_vps/transferring_to_vps_8.png"
data-original="/assets/root-guides/transferring_to_vps/transferring_to_vps_8.png"
srcset="/assets/root-guides/transferring_to_vps/transferring_to_vps_8.png 1x, /assets/root-guides/transferring_to_vps/transferring_to_vps_8.png 2x"
alt="МИКО: Выбор сервисов мессенджеров для выноса на удалённый VPS"
/>

### Проверка статуса сервисов

Если настройка выполнена корректно, на вкладке **Статус сервисов** появится информация о каналах мессенджеров и состоянии запущенных сервисов.

!!! 
После переноса сервисов на VPS проверьте статусы учётных записей мессенджеров в 1С.

В некоторых случаях может понадобиться повторная авторизация. Это возможно, например, из-за резкой смены региона.
!!!

<img class="miko-shadow img-zoomable"  
src="/assets/root-guides/transferring_to_vps/transferring_to_vps_9.png"
data-original="/assets/root-guides/transferring_to_vps/transferring_to_vps_9.png"
srcset="/assets/root-guides/transferring_to_vps/transferring_to_vps_9.png 1x, /assets/root-guides/transferring_to_vps/transferring_to_vps_9.png 2x"
alt="МИКО: Проверка статуса сервисов мессенджеров после переноса на VPS"
/>