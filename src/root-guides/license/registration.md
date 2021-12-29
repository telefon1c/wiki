---
order: -1
---

# Регистрация и получение триала

Модули "Панель телефонии", "Умная маршрутизация вызовов" являются платными и на их использование требуется программная лицензия.  
При установке на АТС модуля «Панель телефонии 4.0 для 1С» выдается автоматически триальная лицензия на Панель телефонии и Журнал звонков сроком на 30 дней.  
При установке на АТС модуля «Умная маршрутизация вызовов» на нее автоматически выдается триальная лицензия сроком на 30 дней.  
В данных триальных лицензиях считаются только дни, в которые было использование продукта.
После истечения триального периода для использования модуля необходимо купить лицензию на продукт. Прежде всего нужно зарегистрироваться, то есть получить лицензионный ключ.  
Ключ присваивается клиенту единожды и сохраняется за ним. У клиента не может быть два и более лицензионных ключей.  
Если у вас АТС **MikoPBX** пройдите регистрацию по [!badge этой инструкции](#регистрация-клиента-на-mikopbx)  
Если у вас АТС **FreePBX или VoxPBX** регистрация выполняется [!badge в модуле Панель телефонии 2.0 для 1С](~/get-started/freepbx/#установка-модуля-на-атс)  
Если у вас АТС **Mango** пройдите регистрацию по [!badge этой инструкции](../registration)  

## Регистрация клиента на MikoPBX
1. Перейдите в веб-интерфейс управления АТС.
2. Перейдите раздел «**Лицензирование**» → «Закладка «**Регистрация и управление лицензией**».

<img class="miko-shadow img-zoomable"
src="/assets/registration/registr_mikopbx_2.png"
data-original="/assets/registration/registr_mikopbx_2.png"
srcset="/assets/registration/registr_mikopbx_2_preview.png 1x, /assets/registration/registr_mikopbx_2.png 2x"
alt="МИКО: Регистрация MIkoPBX"
/>

3. Заполните представленные поля. Мы рекомендуем заполнить все поля, а не только поля со «*» - так вашу организацию можно будет быстрее найти в списке (по ИНН), а также связаться по телефону.
4. Выполните «**Сохранить**».

<img src="/assets/registration/registr_mikopbx_3.png" 
    class="miko-shadow" 
/>  

5. Сгенерированный для вас лицензионный ключ, автоматически запишется в веб-интерфейсе АТС в поле «**Лицензионный ключ**». Также вам на почту придет письмо с этим лицензионным ключом.

<img src="/assets/registration/registr_mikopbx_5.png" 
    class="miko-shadow" 
/>  

Примечание:  
Если по каким то причинам в веб-интерфейсе АТС ключ автоматически не записался, скопируйте его из письма, вставьте в поле «**Лицензионный ключ**» в текущем разделе АТС и нажмите «**Сохранить**»

<img src="/assets/registration/registr_mikopbx_4.png" 
    class="miko-shadow" 
/>  

## Регистрация клиента на при работе с АТС Mango
### Если у вас нет лицензионного ключа.
1. Перейдите на страницу регистрации по ссылке
```html
http://127.0.0.1:8222/license/registration
```
<img class="miko-shadow img-zoomable"  
    src="/assets/registration/registraciya_mango_1.png"
    data-original="/assets/registration/registraciya_mango_1.png"
    srcset="/assets/registration/registraciya_mango_1_preview.png 1x, /assets/registration/registraciya_mango_1.png 2x" 
    alt="МИКО: Регистрация MikoPBX при использовании ВАТС Манго"
/>

2. Заполните поля формы регистрации и нажмите кнопку «**Зарегистрироваться**».
3. Для вас будет сгенерирован лицензионный ключ, который автоматически присваивается настраиваемому вами решению.
Перейдя на страницу лицензирования по ссылке
```html
http://127.0.0.1:8222/license
``` 
можно посмотреть присвоенный лицензионный ключ и сведения об имеющихся в нем лицензиях на продукты.

<img class="miko-shadow img-zoomable"  
    src="/assets/registration/registraciya_mango_2.png"
    data-original="/assets/registration/registraciya_mango_2.png"
    srcset="/assets/registration/registraciya_mango_2_preview.png 1x, /assets/registration/registraciya_mango_2.png 2x" 
    alt="МИКО: Регистрация MikoPBX при использовании ВАТС Манго"
/>  

4. Регистрация выполнена.
### Если у вас есть лицензионный ключ
В этом случае его нужно присвоить настраиваемому вами решению. Для этого:
1. Перейдите на страницу лицензирования по ссылке  
```html
http://127.0.0.1:8222/license
```
Пока ключ не присвоен, она будет иметь вид.

<img class="miko-shadow img-zoomable"  
    src="/assets/registration/registraciya_mango_3.png"
    data-original="/assets/registration/registraciya_mango_3.png"
    srcset="/assets/registration/registraciya_mango_3_preview.png 1x, /assets/registration/registraciya_mango_3.png 2x" 
    alt="МИКО: Присваивание лицензионного ключа MikoPBX при использовании ВАТС Манго"
/> 

2. Нажмите в ней на гиперссылку «**не указан**».

<img class="miko-shadow img-zoomable"  
    src="/assets/registration/registraciya_mango_4.png"
    data-original="/assets/registration/registraciya_mango_4.png"
    srcset="/assets/registration/registraciya_mango_4_preview.png 1x, /assets/registration/registraciya_mango_4.png 2x" 
    alt="МИКО: Присваивание лицензионного ключа MikoPBX при использовании ВАТС Манго"
/> 

3. После этого на [странице лицензирования](http://127.0.0.1:8222/license) отобразятся присвоенный лицензионный ключ и сведения об имеющихся в нем лицензиях на продукты.

<img class="miko-shadow img-zoomable"  
    src="/assets/registration/registraciya_mango_2.png"
    data-original="/assets/registration/registraciya_mango_2.png"
    srcset="/assets/registration/registraciya_mango_2_preview.png 1x, /assets/registration/registraciya_mango_2.png 2x" 
    alt="МИКО: Регистрация MikoPBX при использовании ВАТС Манго"
/>  