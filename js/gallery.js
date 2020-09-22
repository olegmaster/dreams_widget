const categoriesData = [{"categoryId":1,"name":{"en":"Interior","he":"Interior","ru":"Interior","ua":"Interior"}},{"categoryId":2,"name":{"en":"Exterior","he":"Exterior","ru":"Exterior","ua":"Exterior"}},{"categoryId":3,"name":{"en":"Amenities","he":"Amenities","ru":"Amenities","ua":"Amenities"}},{"categoryId":4,"name":{"en":"Neighborhood","he":"Neighborhood","ru":"Neighborhood","ua":"Neighborhood"}}];

const imgData = [{"title":{"en":"kukusiki","he":"kukusiki)))","ru":"Image 27","cz":"dsfdsf"},"categoryId":3,"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/251West117thStreet\/gallery\/doroga_razmetka_pasmurno_124093_720x1280.jpg","order":0},{"title":{"en":"Image 7","he":"fwf","ru":"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 7","cz":"wefew"},"categoryId":1,"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/251West117thStreet\/gallery\/daenerys_game_of_thrones_painting_art-wallpaper-1600x900.jpg","order":1},{"title":{"en":"Image 3","he":"wefew","ru":"wef","cz":"wefew"},"categoryId":2,"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/251West117thStreet\/gallery\/mulan_2020_film-wallpaper-1600x900.jpg","order":2},{"title":{"en":"Image 4","he":"wef","ru":"wef","cz":"wef"},"categoryId":3,"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/251West117thStreet\/gallery\/inzhir_vinograd_chernika_101724_1400x1050.jpg","order":3},{"title":{"en":"Image 1","he":"wef","ru":"\u0424\u041e\u0442\u043e 1","cz":"wef"},"categoryId":4,"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/251West117thStreet\/gallery\/kitajskaya_grusha_frukty_razdelochnaya_doska_108809_1024x768.jpg","order":4},{"title":{"en":"Title 355","he":"wef","ru":"Title 355","cz":"wef"},"categoryId":1,"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/251West117thStreet\/gallery\/the_lion_king_2021-wallpaper-1600x900.jpg","order":5}];
const lang = 'en';
const dir = 'ltr';

const galleryData = categoriesData.map((el) => {
    el.images = imgData.filter(imgEl => imgEl.categoryId === el.categoryId);
    return el;
});

let canvasClass = 'bmby-gallery-wrapp';
let galleryContainer;
let checkInterval;
let timer = null;
let imagesCount=0;

let galleries = [];

let mode = 'dev';

try{
    callbackFunction();
} catch (e) {
    if (mode === 'dev') {
        console.log('unable to run callback');
    }
}

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

const fancyBoxTemplate =`
<div class="fancybox-container" role="dialog" tabindex="-1">
<div class="fancybox-bg"></div>
<div class="fancybox-inner">
<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>
<div class="fancybox-toolbar">{{buttons}}</div>
<div class="fancybox-navigation">{{arrows}}</div>
<div class="fancybox-stage"></div>
<div class="fancybox-caption langDirection "><div class=""fancybox-caption__body"></div></div>
</div>
</div>`;

window.onscroll = ()=>onScrollGallery();
window.addEventListener('orientationchange',orientationHandler);


function orientationHandler (e) {
    const orientation = getWindowOrientation();
    const menus = document.querySelectorAll('.menu__container');
    menus.forEach((menu,index) =>{
       menu.remove();
       insertMenu(index);
    });
    $('.images__container').slick('unslick');
    slickInit();
}

function slickInit () {
    const orientation = getWindowOrientation();
    $('.images__container').slick({
        slidesToShow   : orientation!=='portrait-primary'? 1 : imagesCount,
        slidesToScroll: 1,
        infinite : false,
        dots     : window.innerWidth>=1024? true:false,
        arrows   : window.innerWidth>=1024? true:false,
        vertical: orientation==='portrait-primary'? true : false,
        // focusOnSelect: true,
        variableWidth: orientation==='portrait-primary'? false : true,
        rtl: dir==='ltr'? false:true,
        appendArrows: $('.menu__container'),
        appendDots: $('.menu__container'),
        prevArrow: '<i class="prev-btn fas fa-chevron-left" data-menu-index-position="1"></i>',
        nextArrow: '<i class="next-btn fas fa-chevron-right" data-menu-index-position="2"></i>',
        // verticalSwiping: true,
    });
    setMenuChildrenPosition();
    removeTextFromDefaultDots();
}


function setMenuChildrenPosition (menu) {
    const sortedPosition =[];
    const currentPosition = ['slick-dots','prev-btn','next-btn','menu__items'];
    const menuContainer = document.querySelector('.menu__container');
    sortedPosition.length = menuContainer.children.length;
    currentPosition.forEach((el,index)=>{
        for (let child of menuContainer.children){
            if (child.classList.contains(el)){
                sortedPosition[index] = child;
                child.remove();
            }
        }
    });
    sortedPosition.forEach(el=>menuContainer.appendChild(el));
}

function removeTextFromDefaultDots () {
    const dots = document.querySelectorAll('.slick-dots > li > button');
    dots.forEach(dot => {
        dot.textContent='';
        dot.parentElement.classList.add('dots__parent-element');
        dot.classList.add('dots__btn-style');
    });
}


function anchorActivity () {
    galleryContainer.forEach(gallery=>{
        const galleryImages = gallery.querySelectorAll('.images__container > .slick-list > .slick-track> .image__href');
        galleryImages.forEach((image,index)=>{
            if (window.innerWidth >=1024 && image.ariaHidden === 'false'){
                setActiveTab(image.dataset.categoryId,gallery.dataset.index);
            }else{
                const isVisible = isScrolledIntoView(image.firstElementChild);
                if (isVisible){
                    setActiveTab(image.dataset.categoryId,gallery.dataset.index);
                }
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
        return el.getBoundingClientRect().top < window.innerHeight / 2  && el.getBoundingClientRect().top > 0;
    } else {
        if (window.innerWidth>=1024){
           return !(!!el.parentElement.ariaHidden);
        }
        return el.getBoundingClientRect().right <= window.innerWidth && el.getBoundingClientRect().left > 1;
    }
}

function insertMenu (indexMenu) {
    galleryContainer.forEach((container,index) =>{
        container.classList.add(dir);
        const menuContainer = creatHtmlElement(container,'','div',['menu__container']);
        menuContainer.dataset.index = indexMenu || index;
        const ul = creatHtmlElement(menuContainer,'','ul',['menu__items']);
        ul.dataset.index = indexMenu || index;
        galleryData.forEach((element,index) => {
            let menuItemName = element.name.filter(el => el.lang === lang);
            const li = creatHtmlElement(ul,menuItemName[0].value,'li',['menu__item']);
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
    let imagesContainerInterval;
    const orientation = getWindowOrientation();
    const childrenItems = menuItems.children;
    const lengthItems = menuItems.children.length;
    const scrollWidth = menuItems.scrollWidth;
    const currentView = menuItems.offsetWidth;

    if (orientation === 'portrait-primary'){
        if (scrollWidth <= currentView && lengthItems > 2){
            menuItems.style.justifyContent = 'space-between';
            for (let child of childrenItems){
                child.style.flexBasis= 100 / lengthItems+'%';
                child.style.textAlign='center';
            }
        } else if (lengthItems <= 2){
            menuItems.style.display = 'none';
            imagesContainerInterval = setInterval(()=>{
                const imagesContainer = document.querySelector('.images__container[data-index="'+menuItems.dataset.index+'"]');
                if (imagesContainer){
                    clearInterval(imagesContainerInterval);
                    imagesContainer.style.paddingTop = 0+'px';
                }
            },100);

        }
    } else if (lengthItems <= 2){
        menuItems.style.display = 'none';
        imagesContainerInterval = setInterval(()=>{
            const imagesContainer = document.querySelector('.images__container[data-index="'+menuItems.dataset.index+'"]');
            if (imagesContainer){
                clearInterval(imagesContainerInterval);
                imagesContainer.style.paddingTop = 0+'px';
            }
        },100);
    }
}

function initGallery () {
    galleryContainer.forEach((container,index)=>{
        container.dataset.index = index;
        const imagesContainer = creatHtmlElement(container,'','div',['images__container']);
        imagesContainer.dataset.index = index;
        // imagesContainer.onscroll = ()=>onScrollGallery();
        imgData.sort((prev,next)=>prev.categoryId - next.categoryId);
        imgData.forEach(img =>{
            const a = creatHtmlElement(imagesContainer,'','a',['image__href']);
            a.href = img.imageUrl;
            a.dataset.categoryId = img.categoryId;
            a.dataset.fancybox='gallery-'+index;
            a.dataset.caption = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec, vel curabitur metus facilisi elementum morbi.';
            const hrefImg = creatHtmlElement(a,'','img',['img__tumbs']);
            hrefImg.src= img.imageUrl;
            imagesCount++;
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
                baseTpl: fancyBoxTemplate.replace('langDirection', dir),
            });

            $().fancybox({
                selector : '.images__container .slick-slide:not(.slick-cloned)',
                backFocus : false
            });

            slickInit();

            $('.images__container').on('swipe', function(event, slick, direction){
                onScrollGallery();
            });

            $('.images__container').on('afterChange', function(event, slick, currentSlide, nextSlide){
                onScrollGallery();
            });

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

    const slick =document.createElement('script');
    slick.type = 'text/javascript';
    slick.async = true;
    slick.src = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
    document.head.appendChild(slick);

    const slickStyle = document.createElement('link');
    slickStyle.rel='stylesheet';
    slickStyle.type ='text/css';
    slickStyle.href = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css';
    document.head.appendChild(slickStyle);

    const fontAwesome = document.createElement('link');
    fontAwesome.rel='stylesheet';
    fontAwesome.type ='text/css';
    fontAwesome.href = 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css';
    document.head.appendChild(fontAwesome);

}

function getWindowOrientation() {
    return window.screen.orientation.type;
}

function scrollToImages (activeElement) {
    const menuHeight =activeElement.parentElement.offsetHeight;
    const orientation = getWindowOrientation();
    let i=0;
    const parentIndex = activeElement.parentElement.dataset.index;
    const imageCollection = document.querySelectorAll('.images__container[data-index="'+parentIndex+'"]' +
      ' > .slick-list > .slick-track >.image__href');
    imageCollection.forEach((img) =>{
        if (activeElement.dataset.categoryId === img.dataset.categoryId){
            if (i===0){
                if (orientation !== 'portrait-primary'){
                    $('.images__container').slick('slickGoTo',img.dataset.slickIndex);
                    // const imagesContainer = img.parentElement;
                    // const imageStartPos = img.getBoundingClientRect().left;
                    // imagesContainer.scrollTo(Math.ceil(imagesContainer.scrollLeft + imageStartPos - img.getBoundingClientRect().width),0);
                    setActiveTab(img.dataset.categoryId,parentIndex);
                }else {
                    // $('.images__container').slick('slickGoTo',img.dataset.slickIndex);
                    const imageStartPos = img.firstElementChild.getBoundingClientRect().top;
                    window.scrollTo(0,window.scrollY + imageStartPos - menuHeight);
                    setActiveTab(img.dataset.categoryId,parentIndex);
                }
            }
            i++;
        }
    });
    i=0;
}

function getActiveTab (parentIndex) {
    let activeTab;
    const menu = document.querySelector('.menu__items[data-index="'+parentIndex+'"]');
    const tabCollection = menu.querySelectorAll('.menu__item');
    tabCollection.forEach(tab => {
        if (tab.classList.contains('active')){
            activeTab = tab;
        }
    });
    return activeTab;
}

function setActiveTab (id,parentIndex) {
    const activeTab = getActiveTab(parentIndex);
    const tabCollection = document.querySelectorAll('.menu__items[data-index="'+parentIndex+'"] > .menu__item');
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
        const menuCollection = parent.querySelectorAll('.menu__items[data-index="'+parent.dataset.index+'"]' +
          ' > .menu__item');
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
  z-index: 5;
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

@media screen and (min-width: 1024px){
  .img__tumbs{
    width: 100vw;
    height: calc(100vh - 46px);
  }
  .menu__container {
    bottom: 0;
    top: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .images__container{
    padding-top: 16px;
  }
  .menu__items{
    justify-content: flex-end;
    flex-grow: 1;
    margin-right: 18px;
  }
  .slick-dots{
    display: flex;
    list-style: none;
    flex-grow: 1;
    padding-left: 30px;
    margin: 0;
  }
  .next-btn,.prev-btn{
    padding: 15px;
    cursor: pointer;
  }
  .prev-btn{
    margin-right: 18px;
  }
  .dots__btn-style{
    height: 6px;
    width: 6px;
    padding: 0;
    background: #fff;
    border-radius: 50%;
    border-style: none;
    cursor:pointer;
    outline: none;
    // margin-right: 30px;
  }
  .dots__parent-element{
    margin-right: 30px;
    border-radius: 50%;
  }
   .slick-active{
    background: #1A2F43;
  }
    li.slick-active > button{
    background: #603EF2;
  }
   .menu__item{
    cursor: pointer;
  }
  
}

`;


