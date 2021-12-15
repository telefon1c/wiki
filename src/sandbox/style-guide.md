---
visibility: hidden
icon: file-badge
---
# Рекомендации по единому стилю

Чтобы документация смотрелась цельно, нужно придерживаться общих правил при написании документации, 
именованию файлов, картинок, использованию единого набора стилей.

## Про картинки
Все файлы изображений располагаем в одноименных названию раздела документации папках внутри директории `assets`.

### Подписываем для SEO
Для картинок желательно, а для красивых картинок обязательно заполняем тег `alt` в формате "МИКО: Название картинки",
чтобы поисковые роботы их индексировали и отображали в поисковой выдаче, гнали лидов на сайт.

```html
<img src="/assets/journal/data-details-preview.png" 
     alt="МИКО: Журнал звонков"
/>
```

Результат:

<img src="/assets/journal/data-details-preview.png"
alt="МИКО: Журнал звонков"
/>

### Оформляем тенью

Для отображения тени под картинкой и округления краев, добавляем к картинке класс `miko-shadow`

```html
<img src="/assets/journal/data-details-preview.png" 
    class="miko-shadow" 
    alt="МИКО: Журнал звонков"
/>
```

Результат:

<img src="/assets/journal/data-details-preview.png"
class="miko-shadow"
alt="МИКО: Журнал звонков"
/>



### Адаптируем под устройства
Для корректного отображения больших картинок, рекомендую использовать картинки двух разрешений.
Чтобы браузер не масштарибовал картинку с размытием при отображении страницы, необоходимо
- создать копию оригинальной картнинки
- уменьшить ее в графическом редакторе пропорционально до ширины 748px
- добавить в наименование окончание `-preview`, как в примере ниже
- положить ее рядом с оригинальной в папку assets

```html
<img class="miko-shadow"
    srcset="/assets/journal/data-details-preview.png 1x, /assets/journal/data-details.png 2x"
    src="/assets/journal/data-details-preview.png" 
    alt="МИКО: Журнал звонков"/>
```

В итоге получится такая картника, которая хорошо смотрится и на монитрах с стандартным разрешением, и на мониторах с 
высокой плотностью пикселей, браузер сам выберет какую картинку надо загрузить.


Результат:

<img class="miko-shadow"
            src="/assets/journal/data-details-preview.png"
            srcset="/assets/journal/data-details-preview.png 1x, /assets/journal/data-details.png 2x"
            alt="МИКО: Журнал звонков"
/>



### Добавляем зуммирование

Если нам нужно сделать картинку с возможностью зума, необходимо добавить параметр `data-original` и указать адрес 
оригинальной(большой) картинки, а к самому тегу `img` добавить класс `img-zoomable`

Вот так выглядит код:

```html
<img class="miko-shadow img-zoomable" 
     src="/assets/journal/data-details-preview.png"
     data-original="/assets/journal/data-details.png"
     srcset="/assets/journal/data-details-preview.png 1x, /assets/journal/data-details.png 2x" 
     alt="МИКО: Журнал звонков"
/>
```

Вот что получится в итоге, попробуй кликнуть на нее:

<img class="miko-shadow img-zoomable"
src="/assets/journal/data-details-preview.png"
data-original="/assets/journal/data-details.png"
srcset="/assets/journal/data-details-preview.png 1x, /assets/journal/data-details.png 2x"
alt="МИКО: Журнал звонков"
/>
