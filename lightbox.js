(function () {
  const html = `
  <div class="lightbox">
  <span class="close-button">&times;</span>
  <div class="lightbox-content">
      <img src="" alt="" > 
      <button class="btnLeftlightbox">&lt;</button>
      <button class="btnRightlightbox">	&gt;</button>
      <label></label>   
  </div>
  <div class="previewContainer">
    <div class="previewList">         
    </div>
</div>
</div>`;
  let lightbox;
  let previewList;
  let imgList;
  let mainImg;
  let textImg;

  window.onload = () => {
    const htmlNode = document.createElement("div");
    htmlNode.innerHTML = html;
    document.body.appendChild(htmlNode)
    //Компоненты lightbox
    lightbox = document.querySelector(".lightbox");
    const closeButton = lightbox.querySelector(".close-button");
    const prevButton = lightbox.querySelector(".btnLeftlightbox");
    const nextButton = lightbox.querySelector(".btnRightlightbox");
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

    //кнопки
    closeButton.addEventListener("click", hideLightBox); // Cкрыть lightbox
    prevButton.addEventListener("click", prevPicture); //предыдущий кадр
    nextButton.addEventListener("click", nextPicture); //следующий кадр
  };

  function onClickLightbox(e) {
    if (e.target.classList.contains("lightbox")) hideLightBox();
  }

  //Показать lightbox
  function showLightBox() {
    lightbox.style.display = "flex";
  }
  function prevPicture() {
    if (activeImgIndex>0) setActivePreview(activeImgIndex-1);
    else setActivePreview(imgList.length-1);
  }
  function nextPicture() {
    if (activeImgIndex<imgList.length-1) setActivePreview(activeImgIndex+1);
    else setActivePreview(0);
  }
  // Cкрыть lightbox
  function hideLightBox() {
    activeImgIndex = -1;
    previewList.innerHTML = "";
    lightbox.style.display = "none";
  }
  //Устанавливаем класс active соответсвующей картинке и устанавливаем выбраную картинку как основную
  let activeImgIndex = -1;
  function setActivePreview(id) {
    let imgs = previewList.querySelectorAll("img");
    if (activeImgIndex > -1) imgs[activeImgIndex].classList.remove("active");
    activeImgIndex = id;
    imgs[activeImgIndex].classList.add("active");
    setMainImg(imgs[activeImgIndex].src, imgs[activeImgIndex].alt);
  }
  //задаем основной картинке ссылку
  function setMainImg(src, text) {
    mainImg.src = src;
    textImg.innerText = text;
  }

  //при нажатии на картинку галереи
  function onClickGallery(event) {
    imgList = [...event.currentTarget.querySelectorAll("img")];
    let index = imgList.indexOf(event.target);
    let ListHtmlImgs = imgList.map((img) => {
      var imgElement = document.createElement("img");
      imgElement.src = img.src;
      imgElement.alt = img.alt;
      return imgElement;
    });
    showLightBox();
    previewList.append(...ListHtmlImgs);
    setActivePreview(index);
  }

  //меняем главную картинку и активную при нажатии на превью картинку
  function onClickPreview(event) {
    console.log(event.target);
    let index = [...event.currentTarget.querySelectorAll("img")].indexOf(
      event.target
    );
    setActivePreview(index);
  }

  //при нажатии на одиночную картинку
  function onClickLightboxImage(e) {
    let img = e.currentTarget;
    showLightBox();
    setMainImg(img.src, img.alt);
  }
})();
