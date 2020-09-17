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
    private $dir;
    private $rtlLangs = ['he'];

    public function __construct(string $galleryData, string $galleryCategoriesData, string $canvasClass = 'bmby-gallery', string $lang = 'en', string $callbackFunctionName = '')
    {
        $this->jsString = '';
        $this->galleryData = $galleryData;
        $this->galleryCategoriesData = $galleryCategoriesData;
        $this->canvasClass = $canvasClass;
        $this->lang = $lang;
        $this->callbackFunctionName = empty($callbackFunctionName) ? 'nonExistentFunction' : $callbackFunctionName ;
        $this->dir = (in_array($lang, $this->rtlLangs))?'rtl':'ltr';
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
const dir = '$this->dir';
let canvasClass = '$this->canvasClass';
let galleryContainer;
let checkInterval;
let timer = null;
let anchorIdent=0;

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
    galleryContainer = document.querySelectorAll('.'+canvasClass);
    addUbuntuFont();
    addBasicStyle();
    insertMenu();
    initGallery();
});



window.onscroll = ()=>onScrollGallery();
window.addEventListener('orientationchange',orientationHandler);


function orientationHandler (e) {
    document.querySelector('.menu__container').remove();
    insertMenu();
}

function anchorActivity () {
    galleryContainer.forEach(gallery=>{
        const galleryImages = gallery.querySelectorAll('.images__container > .image__href');
        galleryImages.forEach((image,index)=>{
            const isVisible = isScrolledIntoView(image.firstElementChild);
            if (isVisible){
                setActiveTab(image.dataset.categoryId);
            }
        });
    });

}


function isScrolledIntoView(el) {
    const orientation = getWindowOrientation();
    const imagesScrollHeight = document.querySelector('.images__container').scrollHeight;
    const imagesScrollTop = window.scrollY;
    const windowInnerHeight = window.innerHeight;
    if (orientation === 'portrait-primary'){
        if (Math.round(imagesScrollTop) + windowInnerHeight === imagesScrollHeight && el.getBoundingClientRect().bottom > windowInnerHeight / 2 ){
            return true;
        }
        return el.getBoundingClientRect().top < window.innerHeight / 2 && el.getBoundingClientRect().top > 0;
    } else {
        return el.getBoundingClientRect().right <= window.innerWidth && el.getBoundingClientRect().left > 1;
    }
}

function insertMenu () {
    galleryContainer.forEach((container,index) =>{
        container.classList.add(dir);
        const menuContainer = creatHtmlElement(container,'','div',['menu__container']);
        const ul = creatHtmlElement(menuContainer,'','ul',['menu__items']);
        ul.dataset.index = index;
        galleryData.forEach((element,index) => {
            const li = creatHtmlElement(ul,element.name[lang],'li',['menu__item']);
            li.dataset.categoryId = element.categoryId;
            if (index ===0){
                li.classList.add('active');
            }
        });
        creatHtmlElement(ul,'','div',['menu__plug']);
        setMenuStyle(ul);
        ul.addEventListener('click', (e) =>switchTab(e.target));
    });

}

function onScrollGallery (e) {
    if(timer !== null) {
        clearTimeout(timer);
    }
    timer = setTimeout(function() {
        anchorActivity(e);
    }, 100);
}

function setMenuStyle (menuItems) {
    const orientation = getWindowOrientation();
    const childrenItems = menuItems.children;
    const lengthItems = menuItems.children.length;
    const scrollWidth = menuItems.scrollWidth;
    const currentView = menuItems.offsetWidth;

    if (orientation === 'portrait-primary'){

        if (scrollWidth <= currentView && lengthItems > 1){
            menuItems.style.justifyContent = 'space-between';
            for (let child of childrenItems){
                child.style.flexBasis= 100 / lengthItems+'%';
                child.style.textAlign='center';
            }
        } else if ( scrollWidth <= currentView && lengthItems === 1){
            menuItems.style.justifyContent = 'center';
            for (let child of childrenItems){
                child.style.flexBasis= 100 / lengthItems+'%';
                child.style.textAlign='center';
            }
        }
    }
}

function initGallery () {
    galleryContainer.forEach((container,index)=>{
        container.dataset.index = index;
        const imagesContainer = creatHtmlElement(container,'','div',['images__container']);
        imagesContainer.dataset.index = index;
        imagesContainer.onscroll = ()=>onScrollGallery();
        imgData.sort((prev,next)=>prev.categoryId - next.categoryId);
        imgData.forEach(img =>{
            const a = creatHtmlElement(imagesContainer,'','a',['image__href']);
            a.href = img.imageUrl;
            a.dataset.categoryId = img.categoryId;
            a.dataset.fancybox='gallery-'+index;
            a.dataset.caption = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec, vel curabitur metus facilisi elementum morbi.';
            const hrefImg = creatHtmlElement(a,'','img',['img__tumbs']);
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
                    // 'close'
                ],
                arrows:false,
                infobar: false,
                animationEffect: 'fade',
                animationDuration: 150,
            })
        }
    },100);
}

function addUbuntuFont() {
    // document.head.innerHTML += '<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap" rel="stylesheet">';
    document.head.innerHTML += '<link href="https://fonts.googleapis.com/css2?family=Assistant:wght@600&family=Ubuntu:wght@300&display=swap" rel="stylesheet">';
}

function addBasicStyle () {
    const replacedStyle = basicStyle.replace('main-container-gallery', canvasClass);
    document.head.innerHTML +='<style>'+replacedStyle+'</style>';

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

function getWindowOrientation() {
    return window.screen.orientation.type;
}

function scrollToImages (activeElement) {
    const orientation = getWindowOrientation();
    let i=0;
    const parentIndex = activeElement.parentElement.dataset.index;
    const imageCollection = document.querySelectorAll('.images__container[data-index="'+parentIndex+'"] >.image__href');
    imageCollection.forEach((img) =>{
        if (activeElement.dataset.categoryId === img.dataset.categoryId){
            if (i===0){
                if (orientation !== 'portrait-primary'){
                    const imagesContainer = img.parentElement;
                    const imageStartPos = img.getBoundingClientRect().left;
                    imagesContainer.scrollTo(Math.ceil(imagesContainer.scrollLeft + imageStartPos - img.getBoundingClientRect().width),0);
                    setActiveTab(img.dataset.categoryId);
                }else {
                    const imageStartPos = img.firstElementChild.getBoundingClientRect().top;
                    window.scrollTo(0,window.scrollY + imageStartPos - 47);
                    setActiveTab(img.dataset.categoryId);
                }
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

function setActiveTab (id) {
    const activeTab = getActiveTab();
    const tabCollection = document.querySelectorAll('.menu__item');
    tabCollection.forEach(tab => {
        if (tab.dataset.categoryId === id){
            scrollContainer(tab);
            activeTab.classList.remove('active');
            tab.classList.add('active');
        }
    });
}

function switchTab(e) {
    const parent = e.parentElement;
    if (e.classList.contains('menu__item')){
        const menuCollection = parent.querySelectorAll('.menu__item');
        menuCollection.forEach(menu =>{
            if (e === menu){
                scrollContainer(e);
                scrollToImages(menu);
            }
        });
    }

}

function scrollContainer (container) {
    const main = container.parentElement;
    const menuItem = container.getBoundingClientRect();

    if (menuItem.right > main.offsetWidth){
        container.parentElement.scrollTo(menuItem.right - main.offsetWidth+ menuItem.width,0);
    } else if (menuItem.left < 0){
        container.parentElement.scrollTo(menuItem.left,0);
    }

}

const basicStyle =`
html{
  scroll-behavior: smooth;
}

body{
  margin: 0;
  box-sizing: border-box;
}

.main-container-gallery {
  font-family: 'Assistant', sans-serif;
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  position: relative;
  background: linear-gradient(180deg, #2A3549 0%, #131A2D 100%);
}
.img__tumbs {
  object-fit: cover;
  width: 100vw;
  height: 100vw;
  margin-bottom: 8px;
}
.menu__container {
  position: fixed;
  top:0;
  background: linear-gradient(180deg, #2A3549 0%, #131A2D 100%);
  width: 100%;
}
.menu__items {
  list-style: none;
  display: flex;
  padding: 0;
  overflow-x: scroll;
  margin: 0;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.menu__items::-webkit-scrollbar {
  display: none;
}
.images__container {
  overflow-x: hidden;
  padding-top: 47px;
  scroll-behavior: smooth;
}
.menu__item {
  text-align: center;
  padding: 11px 0;
  margin: 0 12px;
}
.menu__plug {
  content: '';
  min-width: 1px;
  max-width: 1px;
}
.active {
  border-bottom: 3px solid #603EF2;
  color: #603EF2;
}
.hide-image-id {
  display: none;
}
.fancybox-container {
  font-family: 'Ubuntu', sans-serif;
}
.fancybox-bg {
  background: linear-gradient(180deg, #2A3549 0%, #131A2D 100%) !important;
  opacity: 1 !important;
}

.fancybox-caption{
  background: rgba(17, 23, 45, 0.8);
  padding: 12px 16px 37px 16px;
  color: #fff;
  font-weight: 300;
  text-align: start;
  line-height: 16px;
}

.rtl {
  text-align: right;
  direction: rtl;
}

.ltr{
  text-align: left;
  direction: ltr;
}

@media (orientation: landscape) {
  .images__container {
    overflow-x: scroll;
    display: flex;
  }
  .img__tumbs {
    object-fit: cover;
    width: calc(100vh - 46px);
    height: calc(100vh - 46px);
    margin-right: 8px;
    margin-bottom: 0;
  }
}
`;
EOD;

    }
}