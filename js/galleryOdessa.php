<?php
$lang = $_GET['lang'] ?? 'en';
$dir = (in_array($lang, ['he']))?'rtl':'ltr';
?>

const categoriesData = [
  {"categoryId":1,"name":[{"lang":"en","value":"Interior"},{"lang":"he","value":"פנים"},{"lang":"ru","value":"Интерьер"},{"lang":"ua","value":"Interior"}]},
    {"categoryId":2,"name":[{"lang":"en","value":"Exterior"},{"lang":"he","value":"חיצוני"},{"lang":"ru","value":"Внешний вид"},{"lang":"ua","value":"Exterior"}]},
    {"categoryId":3,"name":[{"lang":"en","value":"Amenities"},{"lang":"he","value":"תשתיות"},{"lang":"ru","value":"Удобства"},{"lang":"ua","value":"Amenities"}]},
    {"categoryId":4,"name":[{"lang":"en","value":"Neighborhood"},{"lang":"he","value":"שכונה"},{"lang":"ru","value":"Район"},{"lang":"ua","value":"Neighborhood"}]}
    ];
const imgData = [
  {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":1,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Interior\/int_1.jpg","order":0},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":1,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Interior\/int_2.jpg","order":1},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":1,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Interior\/int_3.jpg","order":2},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":1,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Interior\/int_4.jpg","order":3},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":1,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Interior\/int_5.jpg","order":4},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":1,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Interior\/int_6.jpg","order":5},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":1,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Interior\/int_7.jpg","order":6},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":1,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Interior\/int_8.jpg","order":7},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":2,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Exterior\/ext_1.jpg","order":8},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":2,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Exterior\/ext_2.jpg","order":9},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":2,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Exterior\/ext_3.png","order":10},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":2,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Exterior\/ext_4.png","order":11},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":2,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Exterior\/ext_5.png","order":12},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":2,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Exterior\/ext_6.jpg","order":13},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":2,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Exterior\/ext_7.jpg","order":14},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":2,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Exterior\/ext_8.jpg","order":15},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":2,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Exterior\/ext_9.jpg","order":16},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":2,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Exterior\/ext_10.jpg","order":17},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":2,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Exterior\/ext_11.jpg","order":18},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":2,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Exterior\/ext_12.jpg","order":19},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":2,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Exterior\/ext_13.jpg","order":20},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":2,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Exterior\/ext_14.jpg","order":21},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":2,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Exterior\/ext_15.jpg","order":22},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":2,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Exterior\/ext_16.jpg","order":23},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":2,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Exterior\/ext_17.jpg","order":24},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":3,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Infrastructure\/inf_1.png","order":25},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":3,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Infrastructure\/inf_2.png","order":26},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":3,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Infrastructure\/inf_3.jpg","order":27},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":3,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Infrastructure\/inf_4.jpg","order":28},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":3,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Infrastructure\/inf_5.jpg","order":29},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":4,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Neighborhood\/neig_1.jpg","order":30},

    {"title":[{"lang":"en","value":""},{"lang":"he","value":""},{"lang":"ru","value":""},{"lang":"ua","value":""}],"categoryId":4,"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/gallery\/Neighborhood\/neig_2.jpg","order":31},
    ];

const lang = '<?=$lang?>';
const dir = '<?=$dir?>';

const galleryData = categoriesData.map((el) => {
    el.images = imgData.filter(imgEl => imgEl.categoryId === el.categoryId);
    return el;
});

let canvasClass = 'bmby-gallery-wrapp';
let galleryContainer;
let timer = null;
let imagesCount=0;
let basicTransform;
let basicWidth;
let basicHeight;

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
    let isScriptsLoaded;
    galleryContainer = document.querySelectorAll('.'+canvasClass);
    addUbuntuFont();
    addBasicStyle();
    isScriptsLoaded = setInterval(()=>{
        addScripts();
        if (scriptsChecker()){
            clearInterval(isScriptsLoaded);
            insertMenu();
            const userAgent = checkUserAgent();
            if (userAgent && userAgent !== 'Windows'){
                reduceImage();
            }
            insertCaptionContainer();
            initGallery();
            setTimeout(()=>{
                changeImagesContainerHeight();
                showCaption();
                },100);
    }},250);
});

const fancyBoxTemplate =`
<div class="fancybox-container" role="dialog" tabindex="-1">
<div class="fancybox-bg"></div>
<div class="fancybox-inner">
<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>
<div class="fancybox-toolbar">{{buttons}}</div>
<div class="fancybox-navigation">{{arrows}}</div>
<div class="fancybox-stage"></div>
<div class="fancybox-caption langDirection "><div class="fancybox-caption__body"></div></div>
</div>
</div>`;


window.addEventListener('orientationchange',orientationHandler);
window.addEventListener('resize',orientationHandler);

function scriptsChecker () {
    return Boolean(window.$ && window.jQuery && window.$.fn.slick)
}

function checkUserAgent () {
    let userAgentData;
    const userAgentArr = ['iPhone','iPad','Android','Windows'];
    const userAgent = window.navigator.userAgent;
    userAgentArr.forEach(agent =>{
        const res = userAgent.match(agent);
        if (res){
            userAgentData = res[0];
        }
    });
    return userAgentData;
}

function reduceImage () {
    const reduceImgUrl = 'cdn-cgi/image/width=800';
    imgData.forEach(img =>{
        const parseUrl = img.imageUrl.replace('https://','').split('/');
        parseUrl.unshift('https:/');
        parseUrl.splice(2,0,reduceImgUrl);
        const buildUrl = parseUrl.join('/');
        img.imageUrl = buildUrl;
    });
}

function insertCaptionContainer () {
    galleryContainer.forEach((container,index) =>{
        const captionContainer = creatHtmlElement(container,'','div',['image-caption__text','caption__hide']);
        const p = creatHtmlElement(captionContainer,'','p',['caption__img__text']);
        captionContainer.dataset.index = index;
    })

}

function changeImagesContainerHeight () {
    const gallery = document.querySelectorAll('.'+canvasClass);
    gallery.forEach(container =>{
        const imagesContainer = container.querySelector('.images__container');
        if (window.innerWidth >=1024){
            const menuContainer = container.querySelector('.menu__container');
            const menuHeight = Math.ceil(menuContainer.getBoundingClientRect().height);
            imagesContainer.style.height = window.innerHeight - menuHeight + 1 +'px';
        }else{
            imagesContainer.style.height = '100%';
        }
    });
}

function clearContent(targetContent) {
    while (targetContent.firstChild) {
        targetContent.removeChild(targetContent.firstChild);
    }
}

function orientationHandler (e) {
    if (scriptsChecker()){
        let chInt;
        const imagesContainer = document.querySelector('.images__container');
        $('.images__container').slick('unslick');
        chInt = setInterval(()=>{
            if (imagesContainer.slick.unslicked === true){
                clearInterval(chInt);
                clearContent(document.querySelector('.'+canvasClass));
                insertMenu();
                insertCaptionContainer();
                initGallery();
                setTimeout(()=>{
                    changeImagesContainerHeight();
                    showCaption();
                },100);
            }
        },100);
    }
}

function showCaption (slide = document.querySelector('.image__href')) {
    if (slide && window.innerWidth >=1024){
        const gallery = document.querySelector('.'+canvasClass+'[data-index="'+Number(slide.dataset.fancybox.match(/[0-9]/)[0])+'"]');
        const menuContainer = gallery.querySelector('.menu__container');
        const caption = gallery.querySelector('.image-caption__text');
        caption.style.bottom = menuContainer.getBoundingClientRect().height + 'px';
        if (slide.dataset.caption){
            caption.firstElementChild.textContent = slide.dataset.caption;
            caption.classList.remove('caption__hide');
        }else {
            caption.classList.add('caption__hide');
        }
    }else{
        const allCaptionContainer = document.querySelectorAll('.image-caption__text');
        allCaptionContainer.forEach(caption =>{ caption.classList.add('caption__hide')});
    }
}

function slickInit () {
    const isPortrait = isWindowInPortrait();
    const imagesContainers = document.querySelectorAll('.images__container');
    imagesContainers.forEach(container =>{
        $(container).slick({
            // '.images__container[data-index="'+container.dataset.index+'"]'
            // $('.images__container').slick({
            slidesToShow   : (!isPortrait && window.innerWidth < 1024 && window.innerHeight > 414)? 1 : (!isPortrait && window.innerWidth < 1024)? 2 : window.innerWidth >= 1024? 1 : imagesCount,
            slidesToScroll: (window.innerWidth < 1024 && window.innerHeight > 414) ? 1 : window.innerWidth < 1024? 2 : 1,
            speed: 500,
            draggable: false,
            edgeFriction: 0,
            cssEase: 'cubic-bezier(0,.05,.18,.9)',
            infinite : false,
            dots     : window.innerWidth>=1024? true:false,
            arrows   : window.innerWidth>=1024? true:false,
            vertical: isPortrait? true : false,
            verticalSwiping: isPortrait? true : false,
            variableWidth: isPortrait? false : true,
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
    const isPortrait = isWindowInPortrait();
    galleryContainer.forEach(gallery=>{
        const galleryImages = gallery.querySelectorAll('.images__container > .slick-list > .slick-track> .image__href');
        galleryImages.forEach((image,index)=>{
            if (isPortrait){
                const isVisible = isScrolledIntoView(image.firstElementChild);
                if (isVisible){
                    setActiveTab(image.dataset.categoryId,gallery.dataset.index);
                    sessionStorage.setItem('galleryActiveTabId',image.dataset.categoryId);
                }
            } else {
                if (image.getAttribute('aria-hidden') === 'false') {
                    setActiveTab(image.dataset.categoryId, gallery.dataset.index);
                    sessionStorage.setItem('galleryActiveTabId',image.dataset.categoryId);
                }
            }
        });
    });

}

function isScrolledIntoView(el) {
    const isPortrait = isWindowInPortrait();
    const imagesScrollHeight = document.querySelector('.images__container').scrollHeight;
    const imagesScrollTop = window.scrollY;
    const windowInnerHeight = window.innerHeight;
    if (isPortrait){
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
            if (element.images.length > 0){
                const li = creatHtmlElement(ul,menuItemName[0].value,'li',['menu__item']);
                li.dataset.categoryId = element.categoryId;
                const sessionTabId = sessionStorage.getItem('galleryActiveTabId');
                if (sessionTabId){
                    if (index === Number(sessionTabId) -1){
                        li.classList.add('active');
                    }
                } else {
                    if (index ===0){
                        li.classList.add('active');
                    }
                }
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
    const isPortrait = isWindowInPortrait();
    const childrenItems = menuItems.children;
    const lengthItems = menuItems.children.length;
    const scrollWidth = menuItems.scrollWidth;
    const currentView = menuItems.offsetWidth;

    if (isPortrait){
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
        imagesContainer.setAttribute('dir',dir);
        imagesContainer.dataset.index = index;
        imagesContainer.addEventListener('wheel',onScrollGallery);
        imagesContainer.addEventListener('touchstart',onScrollGallery);
        imagesContainer.addEventListener('touchend',onScrollGallery);
        imagesContainer.addEventListener('touchmove',onScrollGallery);
        imgData.sort((prev,next)=>prev.categoryId - next.categoryId);
        imgData.forEach((img,ind) =>{
            let titleImg = img.title.filter(el => el.lang === lang);
            const a = creatHtmlElement(imagesContainer,'','a',['image__href']);
            a.href = img.imageUrl;
            a.dataset.categoryId = img.categoryId;
            a.dataset.fancybox='gallery-'+index;
            a.dataset.caption = titleImg[0].value;
            const hrefImg = creatHtmlElement(a,'','img',['img__tumbs']);
            hrefImg.src= img.imageUrl;
            if (ind === 0){
                showCaption(a);
            }
            imagesCount++;
        });
    });

            fancyboxInit();

            slickInit();

            const sessionTabId = sessionStorage.getItem('galleryActiveTabId');
            if (sessionTabId){
                const menuElement = document.querySelector('.menu__item[data-category-id="'+sessionTabId+'"]');
                scrollToImages(menuElement);
            }

            $('.images__container').on('swipe', function(event, slick, direction){
                onScrollGallery();
            });

           $('.images__container').on('afterChange', function(event, slick, currentSlide){
                onScrollGallery();
                const slide = this.querySelector('.image__href[data-slick-index="'+currentSlide+'"]');
                slide && showCaption(slide);
            });
}

function fullScreenZoom () {
    const contentContainer = document.querySelector('.fancybox-slide--current > .fancybox-content');
    const image = contentContainer.firstElementChild;
    const fullScreenBtn = document.querySelector('.full-screen__zoom');

    contentContainer.addEventListener('click', ()=>{
        if (contentContainer.classList.contains('analog-full-screen-zoom')) {
            contentContainer.classList.remove('analog-full-screen-zoom');
            image.style.removeProperty('objectFit');
            contentContainer.style.transform = basicTransform;
            contentContainer.style.width = basicWidth;
            contentContainer.style.height = basicHeight;
            fullScreenBtn.innerHTML = zoomInIcon;
        }
    });

    if (!contentContainer.classList.contains('analog-full-screen-zoom')){
        basicTransform = contentContainer.style.transform;
        basicWidth = contentContainer.style.width;
        basicHeight = contentContainer.style.height;

        contentContainer.style.transition = 'all 0.3s';
        contentContainer.style.transform = 'none';
        contentContainer.style.width = '100%';
        contentContainer.style.height = '100%';
        image.style.objectFit = 'cover';
        contentContainer.classList.add('analog-full-screen-zoom');
        fullScreenBtn.innerHTML = zoomOutIcon;

    } else {
        contentContainer.style.transform = basicTransform;
        contentContainer.style.width = basicWidth;
        contentContainer.style.height = basicHeight;
        image.style.removeProperty('objectFit');
        contentContainer.classList.remove('analog-full-screen-zoom');
        fullScreenBtn.innerHTML = zoomInIcon;
    }
}

function fullScreenBtnEnable () {
    const contentContainer = document.querySelector('.fancybox-slide--current > .fancybox-content');
    const fullScreenBtn = document.querySelector('.full-screen__zoom');
    if (fullScreenBtn){
        const image = contentContainer.firstElementChild;
        const imgHeight = image.getBoundingClientRect().height;
        const imgWidth = image.getBoundingClientRect().width;
        if (imgWidth > imgHeight) {
            fullScreenBtn.style.display = 'inline-block';
        }else {
            fullScreenBtn.style.display = 'none';
        }
    }
}

function fancyboxInit () {
    $('[data-fancybox]').fancybox({
        buttons: window.innerWidth >= 1024? ['full','close']: [],
               touch : {
                   vertical : false
               },
        arrows: false,
        btnTpl:{
            full: '<button class="full-screen__zoom" onclick="fullScreenZoom()">'+zoomInIcon+'</button>',
        //     arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
        //       '<div><i class="gallery-slide__arrow fas fa-chevron-left"></i></div>' +
        //       "</button>",
        //     arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
        //       '<div><i class="gallery-slide__arrow fas fa-chevron-right"></i></div>' +
        //       "</button>"
         },
        infobar: false,
        idleTime: false,
                afterShow: function() {
                    fullScreenBtnEnable();
                },
        animationEffect: 'fade',
        backFocus: false,
        animationDuration: 150,
        baseTpl: fancyBoxTemplate.replace('langDirection', dir),
    });

    $().fancybox({
        selector : '.images__container .slick-slide:not(.slick-cloned)',
        backFocus : false
    });
}

function addUbuntuFont() {
    // document.head.innerHTML += '<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap" rel="stylesheet">';
    document.head.innerHTML += '<link href="https://fonts.googleapis.com/css2?family=Assistant:wght@600&family=Ubuntu:wght@300&display=swap" rel="stylesheet">';
}

function addBasicStyle () {
    const replacedStyle = basicStyle.replace(/main-container-gallery/g, canvasClass);
    document.head.innerHTML +='<style>'+replacedStyle+'</style>';
    const userAgent = checkUserAgent();
    if (userAgent !== 'iPad' && window.innerWidth >= 1024){
        const desktopReplaced = desktopStyle.replace(/main-container-gallery/g, canvasClass);
        document.head.innerHTML +='<style>'+desktopReplaced+'</style>';
    }
    if (dir === 'rtl'){
        document.head.innerHTML +='<style>'+rtlStyle+'</style>';
    }

}

function isLoadedScript(path) {
    return document.head.querySelectorAll('[src="' + path + '"]').length > 0;
}

function isLoadedStyle (path) {
    return document.head.querySelectorAll('[href="' + path + '"]').length > 0
}

async function loadScript(path) {
    const script = document.createElement('script');
    script.type ='text/javascript';
    script.src = path;
    script.async =false;
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
        const slick = isLoadedScript('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js');
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

function  isWindowInPortrait() {
    return window.matchMedia("(orientation: portrait)").matches;
}

function scrollToImages (activeElement) {
    const menuHeight =activeElement.parentElement.offsetHeight;
    const isPortrait = isWindowInPortrait();
    let i=0;
    const parentIndex = activeElement.parentElement.dataset.index;
    const imageCollection = document.querySelectorAll('.images__container[data-index="'+parentIndex+'"]' +
      ' > .slick-list > .slick-track >.image__href');
    imageCollection.forEach((img) =>{
        if (activeElement.dataset.categoryId === img.dataset.categoryId){
            if (i===0){
                if (!isPortrait){
                    $('.images__container[data-index="'+parentIndex+'"]').slick('slickGoTo',img.dataset.slickIndex);
                    // const imagesContainer = img.parentElement;
                    // const imageStartPos = img.getBoundingClientRect().left;
                    // imagesContainer.scrollTo(Math.ceil(imagesContainer.scrollLeft + imageStartPos - img.getBoundingClientRect().width),0);
                    setActiveTab(img.dataset.categoryId,parentIndex);
                }else {
                    smoothScroll(img.firstElementChild);
                    setActiveTab(img.dataset.categoryId,parentIndex);
                }
            }
            i++;
        }
    });
    i=0;
}

function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}


function elmYPosition(element) {
    let y = element.offsetTop;
    let node = element;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}


function smoothScroll(element) {
    let startY = currentYPosition();
    let stopY = elmYPosition(element) - 47;
    let distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    let speed = Math.round(distance / 50);
    if (speed >= 20) speed = 20;
    let step = Math.round(distance / 25);
    let leapY = stopY > startY ? startY + step : startY - step;
    let timer = 0;
    if (stopY > startY) {
        for ( let i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( let i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
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
                sessionStorage.setItem('galleryActiveTabId',e.dataset.categoryId);
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

const zoomOutIcon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
  '<path d="M9.5 4.5V9.5H4.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
  '<path d="M9.5 9.5L4.5 4.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
  '<path d="M17.5 11.5V6.5H12.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
  '<path d="M6.5 12.5V17.5H11.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
  '<path d="M14.5 19.5V14.5H19.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
  '<path d="M14.5 14.5L19.5 19.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
  '</svg>';

const zoomInIcon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
  '<path d="M4.5 9.5V4.5H9.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
  '<path d="M4.5 4.5L9.5 9.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
  '<path d="M19.5 9.5V4.5H14.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
  '<path d="M19.5 4.5L14.5 9.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
  '<path d="M4.5 14.5V19.5H9.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
  '<path d="M4.5 19.5L9.5 14.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
  '<path d="M19.5 14.5V19.5H14.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
  '<path d="M19.5 19.5L14.5 14.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
  '</svg>';

const basicStyle =`
html{
  // scroll-behavior: smooth;
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
  position: -webkit-sticky;
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
  // scroll-behavior: smooth;
}
.menu__item {
  text-align: center;
  padding: 11px 0;
  margin: 0 12px;
  cursor: pointer;
}
.menu__plug {
  content: '';
  min-width: 1px;
  max-width: 1px;
}
.caption__hide{
  display: none;
}
.active {
  border-bottom: 3px solid #603EF2;
  color: #603EF2;
}

.disabled{
  cursor: default;
  color: #C0C0C0;
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

.full-screen__zoom{
    border: 0;
    border-radius: 0;
    box-shadow: none;
    cursor: pointer;
    display: inline-block;
    height: 44px;
    margin: 0;
    outline: none;
    padding: 10px;
    position: relative;
    transition: color .2s;
    vertical-align: top;
    visibility: inherit;
    width: 44px;
    background: transparent;
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
.main-container-gallery {
  color: #fff;
  background: linear-gradient(180deg, #2A3549 0%, #131A2D 100%);
}

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
    background: linear-gradient(180deg, #2A3549 0%, #131A2D 100%);
  }
  .images__container{
    padding-top: 0px;
    overflow-x: hidden;
    margin-top: -2px;
  }
    .image-caption__text{
    width: 100%;
    height: 30px;
    position: absolute;
    // bottom: 47px;
    z-index: 2;
    align-items: center;
    display: flex;
    transition: all 0.5s;
    justify-content: center;
    // background: rgba(17, 23, 45, 0.8);
    background: rgba(255, 255, 255, 0.72);
    color: #1A2F43;
    font-weight: 300;
    line-height: 16px;
  }
   .img__tumbs{
    object-fit: contain;
  }
  .caption__hide{
  display: none;
}
  .caption__img__text{
    margin: 0;
    margin-right: 15px;
  }
  .menu__items{
    justify-content: flex-end;
    margin-right: 18px;
    flex-basis: 33.3%;
    min-width: fit-content;
  }

  .active {
  border-bottom: 3px solid #603EF2;
  color: #603EF2;
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
    color: #fff;
  }
   .next-btn[aria-disabled="true"],.prev-btn[aria-disabled="true"]{
    color: #C0C0C0;
    cursor: default;
  }

  .prev-btn{
    margin-right: 18px;
  }
  .dots__btn-style{
    height: 10px;
    width: 10px;
    padding: 0;
    background: #fff;
    border-radius: 50%;
    border-style: none;
    cursor:pointer;
    outline: none;
    // margin-right: 30px;
  }
  .dots__parent-element{
    margin-right: 22px;
    border-radius: 50%;
  }
   .slick-active{
    // background: #1A2F43;
  }
    li.slick-active > button{
    // background: #603EF2;
    background: #603EF2;
  }

  .arrows__container{
    display: flex;
    justify-content: center;
    flex-basis: 33.3%;
  }
  .dots__container{
  flex-basis: 33.3%;
  }
  .main-container-gallery {
    display: flex;
    flex-direction: column-reverse;
  }
   .fancybox-inner > .fancybox-toolbar >.fancybox-button{
    background: transparent;
    color: #fff;
}

   .fancybox-inner > .fancybox-navigation > .fancybox-button{
    background: transparent;
    color: #fff;
}
   .fancybox-inner > .fancybox-navigation > .fancybox-button:disabled{
    background: transparent;
    color: #C0C0C0;
}
   .gallery-slide__arrow{
    font-size: 18px;
}

.fancybox-inner > .fancybox-toolbar{
  top: unset;
  bottom: 0;
}

.fancybox-caption{
   display: none;
}


}

`;

const desktopStyle =`
@media screen and (min-width: 1024px){
.main-container-gallery {
  color: #6E767E;
  background: #F7F7F7;
}

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
    background: #F7F7F7;
  }
  .images__container{
    padding-top: 0px;
    overflow-x: hidden;
    margin-top: -2px;
  }
    .image-caption__text{
    width: 100%;
    height: 30px;
    position: absolute;
    // bottom: 47px;
    z-index: 2;
    align-items: center;
    display: flex;
    transition: all 0.5s;
    justify-content: center;
    // background: rgba(17, 23, 45, 0.8);
    background: rgba(255, 255, 255, 0.72);
    color: #1A2F43;
    font-weight: 300;
    line-height: 16px;
  }
   .img__tumbs{
    object-fit: contain;
  }
  .caption__hide{
  display: none;
}
  .caption__img__text{
    margin: 0;
    margin-right: 15px;
  }
  .menu__items{
    justify-content: flex-end;
    margin-right: 18px;
    flex-basis: 33.3%;
    min-width: fit-content;
  }

  .active {
  border-bottom: 3px solid #1A2F43;
  color: #1A2F43;
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
    color: #1A2F43;
  }
   .next-btn[aria-disabled="true"],.prev-btn[aria-disabled="true"]{
    color: #C0C0C0;
    cursor: default;
  }

  .prev-btn{
    margin-right: 18px;
  }
  .dots__btn-style{
    height: 10px;
    width: 10px;
    padding: 0;
    background: #6E767E;
    border-radius: 50%;
    border-style: none;
    cursor:pointer;
    outline: none;
    // margin-right: 30px;
  }
  .dots__parent-element{
    margin-right: 22px;
    border-radius: 50%;
  }
   .slick-active{
    // background: #1A2F43;
  }
    li.slick-active > button{
    // background: #603EF2;
    background: #1A2F43;
  }

  .arrows__container{
    display: flex;
    justify-content: center;
    flex-basis: 33.3%;
  }
  .dots__container{
  flex-basis: 33.3%;
  }
  .main-container-gallery {
    display: flex;
    flex-direction: column-reverse;
  }
   .fancybox-inner > .fancybox-toolbar >.fancybox-button{
    background: transparent;
    color: #1A2F43;
}

   .fancybox-inner > .fancybox-navigation > .fancybox-button{
    background: transparent;
    color: #fff;
}
   .fancybox-inner > .fancybox-navigation > .fancybox-button:disabled{
    background: transparent;
    color: #C0C0C0;
}
   .gallery-slide__arrow{
    font-size: 18px;
}

.fancybox-inner > .fancybox-toolbar{
  top: unset;
  bottom: 0;
}

.fancybox-caption{
   display: none;
}

.fancybox-bg {
  background: #F7F7F7 !important;
  opacity: 1 !important;
}

}

`;

const rtlStyle =`
@media screen and (min-width: 1024px){
.menu__container{
    flex-direction: row-reverse;
}
.menu__items{
    direction: rtl;
    justify-content: initial;
}
.next-btn, .prev-btn{
    transform: rotate(180deg);
}
.arrows__container{
    direction: rtl;
}
.slick-dots{
    direction: rtl;
    justify-content: flex-end;
}
.prev-btn{
    margin-right: 0;
    margin-left: 18px;
}

}

`;