const categoriesData = [{"categoryId":1,"name":[{"lang":"en","value":"Interior"},{"lang":"he","value":"Interior"},{"lang":"ru","value":"Interior"},{"lang":"ua","value":"Interior"}]},{"categoryId":2,"name":[{"lang":"en","value":"Exterior"},{"lang":"he","value":"Exterior"},{"lang":"ru","value":"Exterior"},{"lang":"ua","value":"Exterior"}]},{"categoryId":3,"name":[{"lang":"en","value":"Amenities"},{"lang":"he","value":"Amenities"},{"lang":"ru","value":"Amenities"},{"lang":"ua","value":"Amenities"}]},{"categoryId":4,"name":[{"lang":"en","value":"Neighborhood"},{"lang":"he","value":"Neighborhood"},{"lang":"ru","value":"Neighborhood"},{"lang":"ua","value":"Neighborhood"}]}];
const imgData = [{"title":[{"lang":"en","value":"Image 7"},{"lang":"he","value":"fwf"},{"lang":"ru","value":"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 7"},{"lang":"ua","value":"dcv"}],"categoryId":1,"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/251West117thStreet\/gallery\/8E92AC86-77B9-41D0-A041-8B4601CE562A\/kakao_zefir_pled_kniga_osen_118517_1400x1050.jpg","order":1},{"title":[{"lang":"en","value":"Image 3"},{"lang":"he","value":"wefew"},{"lang":"ru","value":"wef"},{"lang":"ua","value":"rthtr"}],"categoryId":2,"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/251West117thStreet\/gallery\/9EF35D37-4E48-4E06-A4F2-DFD564337166\/mulan_2020_film-wallpaper-1600x900.jpg","order":2},{"title":[{"lang":"en","value":"Image 4"},{"lang":"he","value":"wef"},{"lang":"ru","value":"wef"},{"lang":"ua","value":"rtfhrg"}],"categoryId":3,"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/251West117thStreet\/gallery\/79BBA07B-DCC6-4D1E-B876-8B7D0C64A5C8\/bmw_k100_mototsikl_bajk_123991_540x960.jpg","order":3},{"title":[{"lang":"en","value":"Image 1"},{"lang":"he","value":"wef"},{"lang":"ru","value":"\u0424\u041e\u0442\u043e 1"},{"lang":"ua","value":"dfh"}],"categoryId":4,"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/251West117thStreet\/gallery\/43647750-AB74-4E99-B16F-4CF4BCEF4D59\/kakao_zefir_pled_kniga_osen_118517_1400x1050.jpg","order":4}];
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
    const menus = document.querySelectorAll('.menu__container');
    menus.forEach((menu,index) =>{
        menu.remove();
        // $('.images__container').slick('unslick');
        // slickInit(index);
    });
    insertMenu();
    $('.images__container').slick('unslick');
    slickInit();
}

function slickInit () {
    const orientation = getWindowOrientation();
    const imagesContainers = document.querySelectorAll('.images__container');
    imagesContainers.forEach(container =>{
        $(container).slick({
            // '.images__container[data-index="'+container.dataset.index+'"]'
            // $('.images__container').slick({
            slidesToShow   : orientation!=='portrait-primary'? 1 : imagesCount,
            slidesToScroll: 1,
            cssEase: 'cubic-bezier(0,.05,.18,.9)',
            infinite : false,
            dots     : window.innerWidth>=1024? true:false,
            arrows   : window.innerWidth>=1024? true:false,
            vertical: orientation==='portrait-primary'? true : false,
            verticalSwiping: orientation==='portrait-primary'? true : false,
            variableWidth: orientation==='portrait-primary'? false : true,
            rtl: dir==='ltr'? false:true,
            appendArrows: $(creatHtmlElement('','','div',['arrows__container'])).appendTo('.menu__container[data-index="'+container.dataset.index+'"]'),
            appendDots: $(creatHtmlElement('','','div',['dots__container'])).appendTo('.menu__container[data-index="'+container.dataset.index+'"]'),
            prevArrow: '<i class="prev-btn fas fa-chevron-left" data-menu-index-position="1"></i>',
            nextArrow: '<i class="next-btn fas fa-chevron-right" data-menu-index-position="2"></i>',
        });
        setMenuChildrenPosition(container.dataset.index);
        removeTextFromDefaultDots();
    });

}


function setMenuChildrenPosition (menuIndex) {
    const sortedPosition =[];
    const currentPosition = ['dots__container','arrows__container','menu__items',];
    const menuContainer = document.querySelector('.menu__container[data-index="'+menuIndex+'"]');
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
    const orientation = getWindowOrientation();
    galleryContainer.forEach(gallery=>{
        const galleryImages = gallery.querySelectorAll('.images__container > .slick-list > .slick-track> .image__href');
        galleryImages.forEach((image,index)=>{
            if (orientation === 'portrait-primary'){
                const isVisible = isScrolledIntoView(image.firstElementChild);
                if (isVisible){
                    setActiveTab(image.dataset.categoryId,gallery.dataset.index);
                }
            } else {
                if (image.ariaHidden === 'false') {
                    setActiveTab(image.dataset.categoryId, gallery.dataset.index);
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
        if (imagesScrollHeight - imagesScrollTop === windowInnerHeight && el.getBoundingClientRect().bottom > windowInnerHeight / 2 ){
            return true;
        }
        return el.getBoundingClientRect().top < window.innerHeight / 2  && el.getBoundingClientRect().top > 0;
    } else {
        return el.getBoundingClientRect().right <= window.innerWidth && el.getBoundingClientRect().left > 1;
    }
}

function insertMenu () {
    galleryContainer.forEach((container,index) =>{
        container.classList.add(dir);
        const menuContainer = creatHtmlElement('','','div',['menu__container']);
        menuContainer.dataset.index =index;
        const ul = creatHtmlElement(menuContainer,'','ul',['menu__items']);
        ul.dataset.index = index;
        galleryData.forEach((element,index) => {
            let menuItemName = element.name.filter(el => el.lang === lang);
            const li = creatHtmlElement(ul,menuItemName[0].value,'li',['menu__item']);
            li.dataset.categoryId = element.categoryId;
            if (index ===0){
                li.classList.add('active');
            }
        });
        creatHtmlElement(ul,'','div',['menu__plug']);
        if (container.children.length>0){
            container.insertAdjacentElement('afterbegin',menuContainer);
        }else{
            container.appendChild(menuContainer);
        }
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
    const menuIndexArr =[];
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
            imagesCount++;
        });
        menuIndexArr.push(index);
    });


    checkInterval = setInterval(()=>{
        addScripts();
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

            // menuIndexArr.forEach(menuIndex=>slickInit(menuIndex));

            slickInit();

            $('.images__container').on('swipe', function(event, slick, direction){
                onScrollGallery();
            });

            $('.images__container').on('afterChange', function(event, slick, currentSlide){
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
    const replacedStyle = basicStyle.replaceAll('main-container-gallery', canvasClass);
    document.head.innerHTML +='<style>'+replacedStyle+'</style>';

}

function isLoadedScript(path) {
    return document.head.querySelectorAll('[src="' + path + '"]').length > 0
}

function isLoadedStyle (path) {
    return document.head.querySelectorAll('[href="' + path + '"]').length > 0
}

function loadScript(path) {
    const script = document.createElement('script');
    script.type ='text/javascript';
    script.async = true;
    script.src = path;
    document.head.appendChild(script);
}

function loadStyle (path) {
    const style = document.createElement('link');
    style.rel='stylesheet';
    style.type ='text/css';
    style.href = path;
    document.head.appendChild(style);

}

function addScripts () {
    const jquery = isLoadedScript('https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js');
    if (!jquery){
        loadScript('https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js');
    }
    const fancybox = isLoadedScript('https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js');
    if (!fancybox){
        loadScript('https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js');
    }
    const fancyboxStyle = isLoadedStyle('https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css');
    if (!fancyboxStyle){
        loadStyle('https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css');
    }
    const slick = isLoadedStyle('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js');
    if (!slick){
        loadScript('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js');
    }
    const slickStyle = isLoadedStyle('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css');
    if (!slickStyle){
        loadStyle('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css');
    }
    const fontAwesome = isLoadedStyle('https://pro.fontawesome.com/releases/v5.10.0/css/all.css');
    if (!fontAwesome){
        loadStyle('https://pro.fontawesome.com/releases/v5.10.0/css/all.css');
    }
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
                    $('.images__container[data-index="'+parentIndex+'"]').slick('slickGoTo',img.dataset.slickIndex);
                    // const imagesContainer = img.parentElement;
                    // const imageStartPos = img.getBoundingClientRect().left;
                    // imagesContainer.scrollTo(Math.ceil(imagesContainer.scrollLeft + imageStartPos - img.getBoundingClientRect().width),0);
                    setActiveTab(img.dataset.categoryId,parentIndex);
                }else {
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
  position: sticky;
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
  // padding-top: 47px;
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

.slick-list{
    height: 100% !important;
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
    position: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .images__container{
    padding-top: 0px;
    overflow-x: hidden;
    margin-top: -2px;
  }
  .menu__items{
    justify-content: flex-end;
    margin-right: 18px;
  }
  .slick-dots{
    display: flex;
    list-style: none;
    flex-grow: 1;
    padding-left: 30px;
    margin: 0;
    flex-wrap: wrap;
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
  .arrows__container{
  margin-right: 15px;
  }
  .dots__container{
  width: 17%;
  }
  .main-container-gallery {
    display: flex;
    flex-direction: column-reverse;
  }
  
}

`;


