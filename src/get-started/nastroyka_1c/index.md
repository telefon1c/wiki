---
label: Настройка 1C
icon: tools
order: -2
---
# Встраивание расширения в информационную базу 1С:Предприятие

<div style="width: 100%; max-width: 100%; margin-bottom: 1.5em;">
  <div style="position: relative; width: 100%; max-width: 100%; aspect-ratio: 16 / 9;">
    <iframe
      src="https://vkvideo.ru/video_ext.php?oid=-100268702&id=456239062&hash=a438b44c7c3097e6&hd=3"
      style="position: absolute; inset: 0; width: 100%; height: 100%;"
      allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>

  <div style="margin-top: 8px; font-size: 14px; line-height: 1.4; color: #666; text-align: center;">
    Встраивание расширения телефонии в УНФ, АТС MikoPBX в Яндекс Облаке
  </div>
</div>


<div style="width: 100%; max-width: 100%; margin-bottom: 1.5em;">
  <div style="position: relative; width: 100%; max-width: 100%; aspect-ratio: 16 / 9;">
    <iframe
      src="https://vkvideo.ru/video_ext.php?oid=-100268702&id=456239059&hash=6eb1ef588f057239&hd=3"
      style="position: absolute; inset: 0; width: 100%; height: 100%;"
      allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>

  <div style="margin-top: 8px; font-size: 14px; line-height: 1.4; color: #666; text-align: center;">
    Встраивание расширения телефонии в УНФ, АТС FreePBX на виртуальной машине vSphere
  </div>
</div>

!!!
Для выполнения действий, описанных в данной инструкции, необходима информационная база, размещенная на сервере 1С:Предприятие.
!!!

Для настройки подсистемы в 1С надо открыть внешнюю обработку и выполнить настройку.


!!!
Настройка подсистемы в 1С выполняется сотрудником с правами администратора.

Для открытия внешней обработки "Установщик.epf" в базе у сотрудника должны быть настроены роли: "Полные права" и "Интерактивное открытие внешних отчетов и обработок".
!!!

1. Запустите информационную базу 1С в режиме "1С:Предприятие". Войдите под учетной записью с правами администратора.
2. В главном меню выполните **Файл** -> **Открыть**. Укажите заранее загруженную обработку “Установщик.epf”. При появлении предупреждения безопасности ответьте утвердительно и подтвердите запуск обработки.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/nastroyka_1c/nastroyka_1c_1.png"
data-original="/assets/nastr_1c/nastroyka_1c/nastroyka_1c_1.png"
srcset="/assets/nastr_1c/nastroyka_1c/nastroyka_1c_1.png 1x, /assets/nastr_1c/nastroyka_1c/nastroyka_1c_1.png 2x"
alt="МИКО: Открытие внешней обработки"
/>

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/nastroyka_1c/nastroyka_1c_2.png"
data-original="/assets/nastr_1c/nastroyka_1c/nastroyka_1c_2.png"
srcset="/assets/nastr_1c/nastroyka_1c/nastroyka_1c_2.png 1x, /assets/nastr_1c/nastroyka_1c/nastroyka_1c_2.png 2x"
alt="МИКО: Предупреждение безопасности"
/>

3. На странице **Проверка доступных версий** введите ваш лицензионный ключ в соответствующее поле и нажмите Далее.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/nastroyka_1c/nastroyka_1c_3.png"
data-original="/assets/nastr_1c/nastroyka_1c/nastroyka_1c_3.png"
srcset="/assets/nastr_1c/nastroyka_1c/nastroyka_1c_3.png 1x, /assets/nastr_1c/nastroyka_1c/nastroyka_1c_3.png 2x"
alt="МИКО: Ввод лицензионного ключа"
/>

4. Выберите последнюю доступную версию расширения и нажмите **Установить**.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/nastroyka_1c/nastroyka_1c_4.png"
data-original="/assets/nastr_1c/nastroyka_1c/nastroyka_1c_4.png"
srcset="/assets/nastr_1c/nastroyka_1c/nastroyka_1c_4.png 1x, /assets/nastr_1c/nastroyka_1c/nastroyka_1c_4.png 2x"
alt="МИКО: Выбор версии расширения для установки"
/>

5. Ознакомьтесь с лицензионным соглашением и примите его условия. Начнется установка расширения. Дождитесь окончания установки расширения, затем перезагрузите информационную базу.

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/nastroyka_1c/nastroyka_1c_5.png"
data-original="/assets/nastr_1c/nastroyka_1c/nastroyka_1c_5.png"
srcset="/assets/nastr_1c/nastroyka_1c/nastroyka_1c_5.png 1x, /assets/nastr_1c/nastroyka_1c/nastroyka_1c_5.png 2x"
alt="МИКО: Лицензионное соглашение"
/>

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/nastroyka_1c/nastroyka_1c_6.png"
data-original="/assets/nastr_1c/nastroyka_1c/nastroyka_1c_6.png"
srcset="/assets/nastr_1c/nastroyka_1c/nastroyka_1c_6.png 1x, /assets/nastr_1c/nastroyka_1c/nastroyka_1c_6.png 2x"
alt="МИКО: Установка расширения"
/>

После перезапуска появится новый раздел “**Звонки и сообщения**”.
Автоматически откроется **Мастер первоначальной настройки**. В Мастере первоначальной настройки выберите необходимый вариант настройки:

<img class="miko-shadow img-zoomable"  
src="/assets/nastr_1c/nastroyka_1c/nastroyka_1c_7.png"
data-original="/assets/nastr_1c/nastroyka_1c/nastroyka_1c_7.png"
srcset="/assets/nastr_1c/nastroyka_1c/nastroyka_1c_7.png 1x, /assets/nastr_1c/nastroyka_1c/nastroyka_1c_7.png 2x"
alt="МИКО: Мастер первоначальной настройки подсистемы телефонии в 1С"
/>

**Упрощенная настройка** – выберите, если требуется только звонки в 1С.
[!ref Упрощенная настройка](/get-started/nastroyka_1c/simplified_setup_1c)

**Полная настройка** – выберите, если требуется интеграция телефонии и чатов WhatsApp и Telegram.
[!ref Полная настройка](/get-started/nastroyka_1c/full_setup_1c)