# Lightbox
My small implementation of a lightbox for images.

# Простая реализация Lightbox для изображений js+css

Этот проект представляет собой простую реализацию Lightbox для отображения изображений в модальном окне.

## Описание



## Особенности

- Отображение изображений в модальном окне.
- Возможность пролистывать изображения внутри Lightbox.
- Простое внедрение в ваши веб-страницы.

## Установка

Просто скопируйте файлы проекта на ваш сервер или в вашу директорию с веб-страницей.

## Использование

1. Включите библиотеку Lightbox в ваш HTML-файл:

```html
<link rel="stylesheet" href="lightbox.css">
<script src="lightbox.js"></script>
```
2. В своем коде обьявите контейнер картинок с калссом lightbox-gallery
```html
<div class="lightbox-gallery">
        <img src="/imgs/1694776172_21.jpg" alt="Image 1" >
        <img src="/imgs/1694776172_21.jpg" alt="Image 2" >
        <img src="/imgs/1694776172_21.jpg" alt="Image 3" >
        <img src="/imgs/1694776172_21.jpg" alt="Image 4">
</div>
```
или img c классом lightbox-image
```html
<div class="lightbox-gallery">
       <img src="/imgs/1694776172_21.jpg" alt="lightbox-image" class="lightbox-image">
</div>
```
