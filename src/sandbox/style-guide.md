---
visibility: hidden
icon: file-badge
---
# Рекомендации по единому стилю

Чтобы документация смотрелась цельно, нужно придерживаться общих правил при написании документации, 
именованию файлов, картинок, использованию единого набора стилей.

## Картинки
Все картинки располагаем в одноименных названию раздела документации папках в директории assets.

### Правила вставки картинок
Для картинок желательно, а для красивых картинок обязательно заполняем тег `alt` в формате "МИКО: Название картинки",
чтобы поисковые роботы их индексировали и отображали в поисковой выдаче, гнали лидов на сайт.

```
<img src="/assets/journal/data-details-preview.png" 
     alt="МИКО: Журнал звонков"
/>
```

Результат:

<img src="/assets/journal/data-details-preview.png"
alt="МИКО: Журнал звонков"
/>


Для отображения тени под картинкой и округления краев, добавляем к картинке класс `miko-shadow`

```
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


### Картинки для разных мониторов
Для корректного отображения больших картинок, рекомендую использовать картинки двух разрешений.
Чтобы браузер не масштарибовал картинку с размытием, основная картинка должна иметь фиксированную ширину 748px.

Оригинал картинки помещаем рядом с основной и добавляем `-preview` в конец имени файла, как в примере ниже.

```
<figure class="content-center">
    <img class="miko-shadow"
    srcset="/assets/journal/data-details-preview.png 1x, /assets/journal/data-details.png 2x"
    src="/assets/journal/data-details-preview.png" alt="МИКО: Журнал звонков"/>
    <figcaption class="caption">
        МИКО: Журнал звонков
    </figcaption>
</figure>
```

В итоге получится такая картника, которая хорошо смотрится и на монитрах с стандартным разрешением, и на мониторах с 
высокой плотностью пикселей, браузер сам выберет какую картинку надо загрузить.

Результат:

<figure class="content-center">
    <img class="miko-shadow"
            src="/assets/journal/data-details-preview.png"
            srcset="/assets/journal/data-details-preview.png 1x, /assets/journal/data-details.png 2x"
            alt="МИКО: Журнал звонков"
    />
    <figcaption class="caption">
        МИКО: Журнал звонков
    </figcaption>
</figure>


### Кликабельная картинка

Если нам нужно сделать картинку с возможностью зума, необходимо добавить параметр `data-original` и указать адрес 
большой картинки, а к самому тегу `img` добавить класс `img-zoomable`

Вот так выглядит код

```
<img class="miko-shadow img-zoomable" 
     src="/assets/journal/data-details-preview.png"
     data-original="/assets/journal/data-details.png"
     srcset="/assets/journal/data-details-preview.png 1x, /assets/journal/data-details.png 2x" 
     alt="МИКО: Журнал звонков"
/>
```

Вот что получится в итоге:

<img class="miko-shadow img-zoomable"
src="/assets/journal/data-details-preview.png"
data-original="/assets/journal/data-details.png"
srcset="/assets/journal/data-details-preview.png 1x, /assets/journal/data-details.png 2x"
alt="МИКО: Журнал звонков"
/>
