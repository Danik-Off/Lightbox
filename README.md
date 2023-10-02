# Lightbox

Простая реализация Lightbox для изображений на основе JavaScript и CSS.

## Описание

Этот проект представляет собой легковесную реализацию Lightbox для отображения изображений в модальном окне на вашем веб-сайте. С её помощью вы можете легко представить ваши изображения в более интерактивной и привлекательной форме.

## Особенности

- Отображение изображений в модальном окне с возможностью увеличения.
- Простое внедрение в ваши веб-страницы.
- Поддержка пролистывания изображений внутри Lightbox.

## Установка

Чтобы начать использовать Lightbox, выполните следующие шаги:

1. Скопируйте файлы проекта (lightbox.css и lightbox.js) на ваш сервер или в директорию с веб-страницей.

2. Включите библиотеку Lightbox в ваш HTML-файл:

```html
<link rel="stylesheet" href="lightbox.css">
<script src="lightbox.js"></script>
```

## Использование

В вашем HTML-коде создайте контейнер изображений с классом `lightbox-gallery`:

```html
<div class="lightbox-gallery">
    <img src="/imgs/1694776172_21.jpg" alt="Image 1">
    <img src="/imgs/1694776172_21.jpg" alt="Image 2">
    <img src="/imgs/1694776172_21.jpg" alt="Image 3">
    <img src="/imgs/1694776172_21.jpg" alt="Image 4">
</div>
```

Или для отдельных изображений используйте класс `lightbox-image`:

```html
<div class="lightbox-gallery">
    <img src="/imgs/1694776172_21.jpg" alt="Image" class="lightbox-image">
</div>
```

Теперь ваши изображения будут готовы для отображения в Lightbox при клике на них.

Пожалуйста, убедитесь, что пути к файлам стилей и скриптам указаны корректно и соответствуют вашей файловой структуре.
