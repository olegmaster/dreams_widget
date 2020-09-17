const categoriesData = [{"categoryId":1,"name":{"en":"Interior","he":"Interior","ru":"Interior"}},{"categoryId":2,"name":{"en":"Exterior","he":"Exterior","ru":"Exterior"}},{"categoryId":3,"name":{"en":"Amenities","he":"Amenities","ru":"Amenities"}},{"categoryId":4,"name":{"en":"Neighborhood","he":"Neighborhood","ru":"Neighborhood"}}];

const imgData = [{"title":{"en":"Image 27","he":"fdwdf","ru":"Image 27","cz":"dsfdsf"},"categoryId":3,"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/251West117thStreet\/gallery\/avatar_2_movie_2021-wallpaper-1600x900.jpg","order":0},{"title":{"en":"Image 7","he":"fwf","ru":"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 7","cz":"wefew"},"categoryId":1,"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/251West117thStreet\/gallery\/daenerys_game_of_thrones_painting_art-wallpaper-1600x900.jpg","order":1},{"title":{"en":"Image 3","he":"wefew","ru":"wef","cz":"wefew"},"categoryId":2,"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/251West117thStreet\/gallery\/mulan_2020_film-wallpaper-1600x900.jpg","order":2},{"title":{"en":"Image 4","he":"wef","ru":"wef","cz":"wef"},"categoryId":3,"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/251West117thStreet\/gallery\/inzhir_vinograd_chernika_101724_1400x1050.jpg","order":3},{"title":{"en":"Image 1","he":"wef","ru":"\u0424\u041e\u0442\u043e 1","cz":"wef"},"categoryId":4,"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/251West117thStreet\/gallery\/kitajskaya_grusha_frukty_razdelochnaya_doska_108809_1024x768.jpg","order":4},{"title":{"en":"Title 355","he":"wef","ru":"Title 355","cz":"wef"},"categoryId":1,"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/251West117thStreet\/gallery\/the_lion_king_2021-wallpaper-1600x900.jpg","order":5}];

const lang = 'en';

const galleryData = categoriesData.map((el) => {
    el.images = imgData.filter(imgEl => imgEl.categoryId === el.categoryId);
    return el;
});

let canvasClass = 'bmby-gallery-wrapp';
let galleryContainer;
let checkInterval;

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

window.addEventListener('scroll',anchorActivity);


function anchorActivity (e) {
    galleryContainer.forEach(gallery=>{
        const galleryImages = gallery.querySelectorAll('.images__container > .image__href');
        galleryImages.forEach((image,index)=>{
            const isVisible = isScrolledIntoView(image);
            if (isVisible){
                setActiveTab(image.dataset.categoryId);
            }
        });
    });

}

function isScrolledIntoView(el) {
    const orientation = getWindowOrientation();
    if (orientation === 'portrait-primary'){
        return el.getBoundingClientRect().top <= window.innerHeight;
    } else {
        return el.getBoundingClientRect().left + el.getBoundingClientRect().width -20 <= window.innerWidth;
    }
}

function insertMenu () {
    galleryContainer.forEach((container,index) =>{
        const menuContainer = creatHtmlElement(container,'','div',['menu__container']);
        const ul = creatHtmlElement(menuContainer,'','ul',['menu__items']);
        ul.dataset.index = index;
        galleryData.forEach((element,index) => {
            const li = creatHtmlElement(ul,element['name'][lang],'li',['menu__item']);
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
    const menuHeight = document.querySelector('.menu__container').scrollHeight;
    galleryContainer.forEach((container,index)=>{
        container.dataset.index = index;
        const imagesContainer = creatHtmlElement(container,'','div',['images__container']);
        imagesContainer.style.paddingTop = menuHeight+'px';
        imagesContainer.addEventListener('touchmove',touchGallery);
        imagesContainer.dataset.index = index;
        imgData.sort((prev,next)=>prev.categoryId - next.categoryId);
        imgData.forEach(img =>{
            const a = creatHtmlElement(imagesContainer,'','a',['image__href']);
            a.href = img.imageUrl;
            a.dataset.categoryId = img.categoryId;
            a.dataset.fancybox='gallery-'+index;
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
                    'close'
                ],
                arrows:false,
                infobar: false,
                animationEffect: 'fade',
                animationDuration: 150,
            })
        }
    },100);
}

function checkFromImagesContainerLandscape () {
    let interval;
    const orientation = getWindowOrientation();
    if (orientation !== 'portrait-primary'){
        const imgContainer = document.querySelector('.images__container');
        interval = setInterval(()=>{
            if (imgContainer.scrollLeft > 0 &&  Math.round(imgContainer.scrollLeft) !== imgContainer.scrollWidth - window.innerWidth){
                anchorActivity();
            } else {
                clearInterval(interval);
            }
        },100);
    }else{
        clearInterval(interval);
    }
}

function touchGallery (e) {
    checkFromImagesContainerLandscape();
}

function addUbuntuFont() {
    document.head.innerHTML += '<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap" rel="stylesheet">';
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
    let i=0;
    const parentIndex = activeElement.parentElement.dataset.index;
    const imageCollection = document.querySelectorAll('.images__container[data-index="'+parentIndex+'"] >.image__href');
    imageCollection.forEach((img) =>{
        if (activeElement.dataset.categoryId === img.dataset.categoryId){
            if (i===0){
                scrollContainer(activeElement);
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

function setActiveTab (id) {
    const activeTab = getActiveTab();
    const tabCollection = document.querySelectorAll('.menu__item');
    tabCollection.forEach(tab => {
        if (tab.dataset.categoryId === id){
            activeTab.classList.remove('active');
            tab.classList.add('active');
        }
    });
}

function switchTab(e) {
    const orientation = getWindowOrientation();
    const parent = e.parentElement;
    if (e.classList.contains('menu__item')){
        const menuCollection = parent.querySelectorAll('.menu__item');
        menuCollection.forEach(menu =>{
            if (e === menu){
                scrollContainer(e);
                scrollToImages(menu);
                if (orientation !=='portrait-primary'){
                    checkFromImagesContainerLandscape();
                }
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
body{
  margin: 0;
}

.main-container-gallery {
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
  color: #C0C0C0;
  font-weight: 500;
  position: relative;
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
  background: #fff;
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
}
.menu__item {
  text-align: center;
  padding: 12px 0;
  margin: 0 12px;
}
.menu__plug {
  content: '';
  min-width: 1px;
  max-width: 1px;
}
.active {
  border-bottom: 2px solid #1a2f43;
  color: #1a2f43;
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

