(function () {
  let lightbox;
  let previewList;
  let mainImg;
  let textImg;

  window.onload = () => {
    //Компоненты lightbox
    lightbox = document.querySelector(".lightbox");
    const closeButton = lightbox.querySelector(".close-button");
    const prevButton = lightbox.querySelector(".prev-button");
    const nextButton = lightbox.querySelector(".next-button");
    previewList = lightbox.querySelector(".previewList");
    mainImg = lightbox.querySelector(".lightbox-content img");
    textImg = lightbox.querySelector(".lightbox-content label");

    //картинки для открытия
    const lightboxGallery = document.querySelectorAll(".lightbox-gallery");
    const lightboxImages = document.querySelectorAll(".lightbox-image");

    //подписываемся на события
    for (const gallery of lightboxGallery) {
      gallery.addEventListener("click", onClickGallery);
    }
    for (const lightboxImage of lightboxImages) {
      lightboxImage.addEventListener("click", onClickLightboxImage);
    }
    lightbox.addEventListener("click", onClickLightbox);
    previewList.addEventListener("click", onClickPreview);
    // Cкрыть lightbox
    closeButton.addEventListener("click", hideLightBox);
  };

  function onClickLightbox(e) {
    if (e.target.classList.contains("lightbox")) hideLightBox();
  }

  //Показать lightbox
  function showLightBox() {
    lightbox.style.display = "flex";
  }
  // Cкрыть lightbox
  function hideLightBox() {
    activeImgIndex = -1;
    previewList.innerHTML = "";
    lightbox.style.display = "none";
  }
  //Устанавливаем класс active соответсвующей картинке
  function setActivePreview(id) {
    let imgs = previewList.querySelectorAll("img");
    if (activeImgIndex > -1) imgs[activeImgIndex].classList.remove("active");
    activeImgIndex = id;
    imgs[activeImgIndex].classList.add("active");
  }
  //задаем основной картинке ссылку
  function setMainImg(src, text) {
    mainImg.src = src;
    textImg.innerText = text;
  }
  //при нажатии на картинку галереи
  let activeImgIndex = -1;
  function onClickGallery(event) {
    let imgs = [...event.currentTarget.querySelectorAll("img")];

    let index = imgs.indexOf(event.target);

    let ListHtmlImgs = imgs.map((img) => {
      var imgElement = document.createElement("img");
      imgElement.src = img.src;
      imgElement.alt = img.alt;
      return imgElement;
    });

    showLightBox();
    previewList.append(...ListHtmlImgs);
    setMainImg(imgs[index].src, imgs[index].alt);
    setActivePreview(index);
    console.log(previewList, ListHtmlImgs);
  }
  //меняем главную картинку и активную при нажатии на превью картинку
  function onClickPreview(event) {
    console.log(event.target);
    let index = [...event.currentTarget.querySelectorAll("img")].indexOf(
      event.target
    );
    setActivePreview(index);
    setMainImg(event.target.src, event.target.alt);
  }

  //при нажатии на одиночную картинку
  function onClickLightboxImage(e) {
    let img = e.currentTarget;
    showLightBox();
    setMainImg(img.src, img.alt);
  }
})();
