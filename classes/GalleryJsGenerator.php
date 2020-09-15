<?php

require_once 'JsGenerator.php';

class GalleryJsGenerator implements JsGenerator
{

    private $jsString;
    private $galleryData;
    private $galleryCategoriesData;
    private $lang;
    private $canvasClass;
    private $callbackFunctionName;

    public function __construct(string $galleryData, string $galleryCategoriesData, string $canvasClass = 'bmby-gallery', string $lang = 'en', string $callbackFunctionName = '')
    {
        $this->jsString = '';
        $this->galleryData = $galleryData;
        $this->galleryCategoriesData = $galleryCategoriesData;
        $this->canvasClass = $canvasClass;
        $this->lang = $lang;
        $this->callbackFunctionName = empty($callbackFunctionName) ? 'nonExistentFunction' : $callbackFunctionName ;
        $this->setJs();

    }

    public function showJs()
    {
        header('Content-Type: application/javascript');
        echo $this->jsString;
    }

    private function setJs()
    {
        $this->jsString = <<<EOD
const categoriesData = $this->galleryCategoriesData;
const imgData = $this->galleryData;
const lang = '$this->lang';
let canvasClass = '$this->canvasClass';
let galleryContainer;
let checkInterval;

const galleryData = categoriesData.map((el) => {
    el.images = imgData.filter(imgEl => imgEl.categoryId === el.categoryId);
    return el;
});


let galleries = [];

let mode = 'prod';

try{
    $this->callbackFunctionName();
} catch (e) {
    if(mode === 'dev'){
        console.log('unable to run callback');
    }
}

// add galleries on document load
function creatHtmlElement(parent, elementName, elementTag, elementClass) {
    const el = document.createElement(elementTag);
    if (Array.isArray(elementClass)){
        elementClass.forEach(classElement => {
            el.classList.add(classElement);
        });
    }else{
        el.style.cssText=elementClass;
    }
    el.textContent = elementName;
    if (parent) {
        parent.appendChild(el);
    }
    return el;
}

// add galleries on document load
document.addEventListener("DOMContentLoaded", function (event) {
    addScripts();
    galleryContainer = document.querySelectorAll(`.${canvasClass}`);
    addUbuntuFont();
    addBasicStyle();
    insertMenu();
    initGallery();
});

// window.addEventListener('scroll',anhorActivity);


function anhorActivity () {
    galleryContainer.forEach(gallery=>{
        // const a = isScrolledIntoView(gallery);
        console.log(gallery, gallery.getBoundingClientRect());
        console.log(window.innerHeight);
        const imagesCollection = gallery.querySelectorAll('.images__container > .image__href');
        // console.log(imagesCollection);
       // console.log(gallery.dataset.index,gallery.getBoundingClientRect());
    });

}

function isScrolledIntoView(el) {
    const { top, bottom } = el.getBoundingClientRect();
    return top >= 0 && bottom <= window.innerHeight;
}

function insertMenu () {
    galleryContainer.forEach((container,index) =>{
        const menuContainer = creatHtmlElement(container,'','div',['menu__container']);
        const ul = creatHtmlElement(menuContainer,'','ul',['menu__items']);
        ul.dataset.index = index;
        galleryData.forEach((element,index) => {
            const li = creatHtmlElement(ul,element.name,'li',['menu__item']);
            li.dataset.categoryId = element.categoryId;
            if (index ===0){
                li.classList.add('active');
            }
        });
        ul.addEventListener('click', (e) =>switchTab(e.target));
    });

}

function initGallery () {
    const activeTab = getActiveTab();
    galleryContainer.forEach((container,index)=>{
        container.dataset.index = index;
        const imagesContainer = creatHtmlElement(container,'','div',['images__container']);
        imagesContainer.dataset.index = index;
        imgData.sort((prev,next)=>prev.categoryId - next.categoryId);
        imgData.forEach(img =>{
            const a = creatHtmlElement(imagesContainer,'','a',['image__href']);
            a.href = img.imageUrl;
            a.dataset.categoryId = img.categoryId;
            // if (activeTab.dataset.categoryId !== a.dataset.categoryId ){
            //     a.classList.add('hide-image-id');
            // }
            a.dataset.fancybox=`gallery-${index}`;
            const hrefImg = creatHtmlElement(a,'','img',['img__tumbs']);
            // const hrefImg = creatHtmlElement(a,'','img',`width: 100%; height:100%`);
            hrefImg.src= img.imageUrl;
        });
    });


    checkInterval = setInterval(()=>{
        if (window.$ && window.$.fancybox){
            clearInterval(checkInterval);
            window.jQuery = window.$ = jQuery;
            $('[data-fancybox]').fancybox({
                buttons:[
                  // 'zoom',
                  'close'
                ],
                arrows:false,
                infobar: false,
            })
        }
    },100);
}

function addUbuntuFont() {
    document.head.innerHTML += '<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap" rel="stylesheet">';
}

function addBasicStyle () {
    document.head.innerHTML +=`<style>${basicStyle}</style>`;

}

function addScripts () {
    if (!window.jQuery){
        const jquery = document.createElement('script');
        jquery.type ='text/javascript';
        jquery.async = true;
        jquery.src = 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js';
        document.head.appendChild(jquery);
    }

    const fancybox = document.createElement('script');
    fancybox.type = 'text/javascript';
    fancybox.async=true;
    fancybox.src ='https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js';
    document.head.appendChild(fancybox);

    const fancyboxStyle = document.createElement('link');
    fancyboxStyle.rel='stylesheet';
    fancyboxStyle.type ='text/css';
    fancyboxStyle.href = 'https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css';
    document.head.appendChild(fancyboxStyle);

}

function scrollToImages (activeElement) {
    let i=0;
    const parentIndex = activeElement.parentElement.dataset.index;
    const imageCollection = document.querySelectorAll(`.images__container[data-index="${parentIndex}"] >.image__href`);
    imageCollection.forEach((img) =>{
        if (activeElement.dataset.categoryId === img.dataset.categoryId){
            if (i===0){
                img.scrollIntoView({
                    behavior:'smooth',
                    block:'start',
                });
            }
            i++;
        }
    });
    i=0;
}

function getActiveTab () {
    let activeTab;
    const tabCollection = document.querySelectorAll('.menu__item');
    tabCollection.forEach(tab => {
       if (tab.classList.contains('active')){
           activeTab = tab;
       }
    });
    return activeTab;
}

function switchTab(e) {
    const parent = e.parentElement;
    if (e.classList.contains('menu__item')){
        const menuCollection = parent.querySelectorAll('.menu__item');
        menuCollection.forEach(menu =>{
            if (e === menu){
                menu.classList.add('active');
                scrollToImages(menu);
            }else{
                menu.classList.remove('active');
            }
        });
    }

}

const basicStyle =`
.bmby-gallery {
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
  color: #C0C0C0;
  font-weight: 500;
}
.img__tumbs {
  width: 100%;
  height: 100%;
}
.menu__items {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  overflow-x: scroll;
  margin: 0;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.menu__items::-webkit-scrollbar {
  display: none;
}
.menu__item {
  margin-left: 24px;
  padding: 12px 0;
}
.menu__item:first-child {
  margin-left: 10px;
}
.active {
  border-bottom: 2px solid #1a2f43;
  color: #1a2f43;
  transition: 0.5s;
}
.hide-image-id {
  display: none;
}
.fancybox-container {
  font-family: 'Ubuntu', sans-serif;
}
.fancybox-bg {
  background: #fff !important;
  opacity: 1 !important;
}
.rtl {
  text-align: right;
  direction: rtl;
}
`;
EOD;

    }
}