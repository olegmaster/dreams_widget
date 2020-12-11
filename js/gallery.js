// each element contains data about the certain category and pictures belonging to it
// this data is obtained from API
// t
// let galleryData = [{"categoryId":1,"name":[{"lang":"en","value":"Interior"},{"lang":"he","value":"Interior"}],"order":0,"pictures":[]},{"categoryId":2,"name":[{"lang":"en","value":"Exterior"},{"lang":"he","value":"Exterior"}],"order":1,"pictures":[{"title":[{"lang":"en","value":"Image 1"},{"lang":"he","value":""}],"imageUrl":"https:\/\/dreamsimages.bmby.com\/251West117thStreet\/projectassets\/gallery\/B55C902A-AD1C-4505-A43D-E977AD1F9B23\/5d58fdf5-2356-4d33-9ecb-15c1daa27b07.png","order":0},{"title":[{"lang":"en","value":"Image 2"},{"lang":"he","value":""}],"imageUrl":"https:\/\/photojournal.jpl.nasa.gov\/jpeg\/PIA23689.jpg","order":1},{"title":[{"lang":"en","value":"Image 3"},{"lang":"he","value":""}],"imageUrl":"https:\/\/images.unsplash.com\/photo-1556103255-4443dbae8e5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","order":2}]},{"categoryId":3,"name":[{"lang":"en","value":"Amenities"},{"lang":"he","value":"Amenities"}],"order":2,"pictures":[]},{"categoryId":4,"name":[{"lang":"en","value":"Neighborhood"},{"lang":"he","value":"Neighborhood"}],"order":3,"pictures":[]}];

let galleryData = [{"categoryId":1,"name":[{"lang":"en","value":"Interior"},{"lang":"he","value":"Interior"}],"order":0,"pictures":[{"title":[{"lang":"en","value":"Image 2"},{"lang":"he","value":""}],"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/gallery-test\/8000x4500.jpg","order":1}]},{"categoryId":2,"name":[{"lang":"en","value":"Exterior"},{"lang":"he","value":"Exterior"}],"order":1,"pictures":[{"title":[{"lang":"en","value":"Image 2"},{"lang":"he","value":""}],"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/gallery-test\/8000x4500.jpg","order":1},{"title":[{"lang":"en","value":"Image 3"},{"lang":"he","value":""}],"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/gallery-test\/720x720.jpg","order":2},{"title":[{"lang":"en","value":"Image 4"},{"lang":"he","value":""}],"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/gallery-test\/4999x6000.jpg","order":2},{"title":[{"lang":"en","value":"Image 4"},{"lang":"he","value":""}],"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/gallery-test\/405x720.jpg","order":2},{"title":[{"lang":"en","value":"Image 4"},{"lang":"he","value":""}],"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/gallery-test\/2100x720.jpg","order":2},{"title":[{"lang":"en","value":"Image 4"},{"lang":"he","value":""}],"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/gallery-test\/1500x1500.jpg","order":2},{"title":[{"lang":"en","value":"Image 4"},{"lang":"he","value":""}],"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/gallery-test\/1200x720.jpg","order":2},{"title":[{"lang":"en","value":"Image 4"},{"lang":"he","value":""}],"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/gallery-test\/1080x1920.jpg","order":2}]},{"categoryId":3,"name":[{"lang":"en","value":"Amenities"},{"lang":"he","value":"Amenities"}],"order":2,"pictures":[]},{"categoryId":4,"name":[{"lang":"en","value":"Neighborhood"},{"lang":"he","value":"Neighborhood"}],"order":3,"pictures":[]}];

// this variable contains all images for all categories
// for building the general gallery
// and we should be able to switch images in the gallery by clicking on menu items or scroll tab
let imgData = [];

// we extract images from galleryData variable to imgData
galleryData.forEach(galleryElement => {
    if(galleryElement.hasOwnProperty('pictures') && galleryElement.pictures.length > 0){
        galleryElement.pictures.forEach(pictureEl => {
            pictureEl.categoryId = galleryElement.categoryId;
            imgData.push(pictureEl)
        });
    }
});

const lang = 'en';
const dir = 'ltr';
const activeCategory = null;

let canvasClass = 'bmby-gallery-wrapp';
let galleryContainer;
let timer = null;
let imagesCount=0;
const userAgent = checkUserAgent();

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
            if (userAgent && userAgent !== 'Windows'){
                reduceImage();
            }
            if (userAgent === 'Windows'){
                window.addEventListener('resize',orientationHandler);
            }
            insertCaptionContainer();
            initGallery();
            insertMobileCaptionOnTumbs();
            changeImagesTumbs();
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

function scriptsChecker () {
    return Boolean(window.$ && window.jQuery && window.$.fn.slick);
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

function insertMobileCaptionOnTumbs () {
    if (userAgent === 'iPhone' || userAgent === 'Android' || userAgent === 'iPad' && window.innerWidth < 1024){
        const allImagesHref = document.querySelectorAll('.image__href');
        allImagesHref.forEach(img =>{
            if (img.dataset.caption.length>0){
                const captionContainer = creatHtmlElement(img,'','div',['caption-tumbs__container']);
                const p = creatHtmlElement(captionContainer,img.dataset.caption,'p',['caption-tumbs__mobile']);
            }
        });
    }
}

function changeImagesContainerHeight () {
    const gallery = document.querySelectorAll('.'+canvasClass);
    gallery.forEach(container =>{
        const imagesContainer = container.querySelector('.images__container');
        if (window.innerWidth >=1024){
            const menuContainer = container.querySelector('.menu__container');
            const menuHeight = menuContainer.getBoundingClientRect().height;
            imagesContainer.style.height = window.innerHeight - menuHeight+ 1 +'px';
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
                    changeImagesTumbs();
                    insertMobileCaptionOnTumbs();
                    showCaption();
                },100);
            }
        },100);
    }
}

function changeImagesTumbs () {
    const gallery = document.querySelectorAll('.'+canvasClass);
    gallery.forEach(container =>{
       const menuItems = container.querySelector('.menu__items');
       if (menuItems.style.display === 'none'){
           const imgTumbs = container.querySelectorAll('.img__tumbs');
           const isPortrait = isWindowInPortrait();
           imgTumbs.forEach(img =>{
              if (isPortrait){
                  img.style.width = '100vw';
                  img.style.height = '100vw';
              } else if (window.innerWidth < 1024) {
                  img.style.width = '100vh';
                  img.style.height = '100vh';
              }
           });
       }
    });
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
            if (element.pictures.length > 0){
                const li = creatHtmlElement(ul,menuItemName[0].value,'li',['menu__item']);
                li.dataset.categoryId = element.categoryId;
                const sessionTabId = sessionStorage.getItem('galleryActiveTabId');
                if (sessionTabId){
                    if (index === Number(sessionTabId) -1){
                        li.classList.add('active');
                    }
                } else {
                    ul.firstChild.classList.add('active');
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
        menuItems.parentElement.style.justifyContent = 'end';
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

    const sessionTabId = activeCategory || sessionStorage.getItem('galleryActiveTabId');
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

function userCoverState (naturalWidth, naturalHeight ) {
    const aspect = naturalWidth > naturalHeight ? naturalWidth / naturalHeight : naturalHeight / naturalWidth;
    let newWidth = naturalWidth;
    let newHeight = naturalHeight;
    
        if (naturalWidth < window.innerWidth){
            while ( newWidth < window.innerWidth){
                newWidth += aspect;
                newHeight += aspect;
            }
        } else {
            while ( newHeight < window.innerHeight){
                newHeight += aspect;
            }
        }
    return {
        width: newWidth,
        height: newHeight,
    }
}

function resizeImage () {
    const current = getCurrentInstance();
    const container = current.$content[0];
    const { naturalWidth, naturalHeight } = getNaturalImageSize(current);
    const btn = document.querySelector('.full-screen__zoom');

    switch (btn.dataset.icon) {
        case 'fullScreen':
            const { width, height } = userCoverState(naturalWidth, naturalHeight);
            current.width = width;
            current.height = height;
            current.$image[0].style.objectFit = 'cover';
            $.fancybox.getInstance().scaleToActual();
            btn.innerHTML = zoomInIcon;
            btn.dataset.icon = 'zoomInIcon';
        break;
        case 'zoomInIcon':
            if (naturalWidth > window.innerWidth && naturalHeight > window.innerHeight){
                current.width = naturalWidth;
                current.height = naturalHeight;
                $.fancybox.getInstance().scaleToActual();
                container.classList.add('is-zoomed');
                btn.innerHTML = zoomOutIcon;
                btn.dataset.icon = 'zoomOutIcon';
            } else {
                current.width = naturalWidth;
                current.height = naturalHeight;
                $.fancybox.getInstance().scaleToActual();
                container.classList.add('is-zoomed');
                btn.innerHTML = fullScreen;
                btn.dataset.icon = 'fullScreen';
            }
        break;
        case 'zoomOutIcon':
                monoImageView(current);
        break;
    }
}

function manualScrollSlide (event) {

    if (event.changedTouches !== undefined){
        const touchPoint = event.changedTouches[0].clientX;
        if (touchPoint < window.innerWidth / 2){
            $.fancybox.getInstance().previous(1);
        } else {
            $.fancybox.getInstance().next(1);
        }
    } else {
        if (event.clientX < window.innerWidth / 2){
            $.fancybox.getInstance().previous(1);
        } else {
            $.fancybox.getInstance().next(1);
        }
    }
}

function fancyboxInit () {
    $('[data-fancybox]').fancybox({
        buttons: window.innerWidth >= 1024 && userAgent === 'iPad' ? ['close']: window.innerWidth >= 1024 ? ['full','close'] : [],
        touch : {
            vertical : false,
        },
        arrows: false,
        autoSize: false,
        wheel: false,
        btnTpl:{
            full: '<button class="full-screen__zoom" onclick="resizeImage()">'+zoomInIcon+'</button>',
        //     arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
        //       '<div><i class="gallery-slide__arrow fas fa-chevron-left"></i></div>' +
        //       "</button>",
        //     arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
        //       '<div><i class="gallery-slide__arrow fas fa-chevron-right"></i></div>' +
        //       "</button>"
        },
        infobar: false,
        idleTime: false,
        clickSlide: function(current, event) {
           manualScrollSlide(event);
        },
        dblclickContent: function(current, event) {
            resizeImage();
        },
        mobile: {
            clickSlide: function(current, event){
                if (window.innerWidth >=1024 && userAgent !== 'iPad'){
                    manualScrollSlide(event);
                } else {
                    return 'toggleControls';
                }

            },
            dblclickContent: function(current, event) {
                if (window.innerWidth >=1024 && userAgent !== 'iPad'){
                   resizeImage();
                } else {
                    return 'zoom';
                }
            },
        },
        afterShow: function(instance,current) {
            if (window.innerWidth >=1024 && userAgent !== 'iPad'){
                if (!instance.firstRun){
                    monoImageView(current);
                }
            }
            },
        beforeShow: function(instance,current){
            if (window.innerWidth >=1024 && userAgent !== 'iPad'){
                let interval;
                interval = setInterval(()=>{
                    if (current){
                        clearInterval(interval);
                        monoImageView(current);
                    }
                },10);
            }

        },
        afterLoad : function(instance, current) {
            if (window.innerWidth >=1024 && userAgent !== 'iPad'){
                monoImageView(current);
            }
        },
        animationEffect: 'fade',
        backFocus: false,
        animationDuration: 150,
        baseTpl: fancyBoxTemplate.replace('langDirection', dir),
    });

    $().fancybox({
        selector : '.images__container .slick-slide:not(.slick-cloned)',
        backFocus : false,
    });
}

function monoImageView (slide) {
    const { naturalWidth, naturalHeight } = getNaturalImageSize(slide);
    const slideContainer = slide.$slide[0];
    const resizeBtn = document.querySelector('.full-screen__zoom');

    if (naturalWidth > window.innerWidth && naturalHeight > window.innerHeight){
        resizeBtn.innerHTML = zoomInIcon;
        resizeBtn.dataset.icon = 'zoomInIcon';
        slide.width = window.innerWidth;
        slide.height = window.innerHeight;
        slide.$image[0].style.objectFit = 'cover';
        $.fancybox.getInstance().scaleToActual();
        slideContainer.style.paddingBottom = '0px';
    } else if (naturalWidth > window.innerWidth && naturalHeight < window.innerHeight) {
        resizeBtn.innerHTML = fullScreen;
        resizeBtn.dataset.icon = 'fullScreen';
        slide.width = naturalWidth;
        slide.height = naturalHeight;
        $.fancybox.getInstance().scaleToActual();
        slide.$image[0].style.removeProperty('object-fit');
        slideContainer.style.paddingBottom = '0px';
    } else if (naturalWidth < window.innerWidth && naturalHeight < window.innerHeight){
        resizeBtn.innerHTML = fullScreen;
        resizeBtn.dataset.icon = 'fullScreen';
        slide.width = naturalWidth;
        slide.height = naturalHeight;
        $.fancybox.getInstance().scaleToActual();
        slide.$image[0].style.removeProperty('object-fit');
        slideContainer.style.paddingBottom = '0px';
    } else if (naturalWidth < window.innerWidth && naturalHeight > window.innerHeight) {
        resizeBtn.innerHTML = fullScreen;
        resizeBtn.dataset.icon = 'fullScreen';
        slide.width = naturalWidth;
        slide.height = naturalHeight;
        $.fancybox.getInstance().scaleToActual();
        slide.$image[0].style.removeProperty('object-fit');
        slideContainer.style.paddingBottom = '0px';
    }
}

function getCurrentInstance () {
    return $.fancybox.getInstance().current;
}

function getNaturalImageSize (slide) {
    return {
        naturalWidth: slide.$image[0].naturalWidth,
        naturalHeight: slide.$image[0].naturalHeight,
    }
}

function addUbuntuFont() {
    // document.head.innerHTML += '<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap" rel="stylesheet">';
    document.head.innerHTML += '<link href="https://fonts.googleapis.com/css2?family=Assistant:wght@600&family=Ubuntu:wght@300&display=swap" rel="stylesheet">';
}

function addBasicStyle () {
    const replacedStyle = basicStyle.replace(/main-container-gallery/g, canvasClass);
    document.head.innerHTML +='<style>'+replacedStyle+'</style>';
    if (dir === 'rtl'){
        document.head.innerHTML +='<style>'+rtlStyle+'</style>';
    }
    if (userAgent === 'Windows'){
        const replaceDesktopStyle = desktopStyle.replace(/main-container-gallery/g, canvasClass);
        document.head.innerHTML +='<style>'+replaceDesktopStyle+'</style>';
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
//#1A2F43
const fullScreen = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5 9.5V4.5H14.5" stroke="#1A2F43" stroke-width="1.6" stroke-linecap="round"/>
<path d="M19.5 4.5L14.5 9.5" stroke="#1A2F43" stroke-width="1.6" stroke-linecap="round"/>
<path d="M4.5 14.5V19.5H9.5" stroke="#1A2F43" stroke-width="1.6" stroke-linecap="round"/>
<path d="M4.5 19.5L9.5 14.5" stroke="#1A2F43" stroke-width="1.6" stroke-linecap="round"/>
</svg>
`;

const zoomOutIcon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
  '<path d="M9.5 4.5V9.5H4.5" stroke="#1A2F43" stroke-width="1.6" stroke-linecap="round"/>' +
  '<path d="M9.5 9.5L4.5 4.5" stroke="#1A2F43" stroke-width="1.6" stroke-linecap="round"/>' +
  '<path d="M14.5 19.5V14.5H19.5" stroke="#1A2F43" stroke-width="1.6" stroke-linecap="round"/>' +
  '<path d="M14.5 14.5L19.5 19.5" stroke="#1A2F43" stroke-width="1.6" stroke-linecap="round"/>' +
  '</svg>';

const zoomInIcon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
  '<path d="M14.5 14.5L18.5 18.5" stroke="#1A2F43" stroke-width="1.6" stroke-linecap="round"/>' +
  '<path d="M1.93312 8.45639C2.08049 8.39541 2.23295 8.3268 2.39048 8.25057C2.5531 8.16927 2.71064 8.08288 2.86309 7.9914C3.01554 7.89485 3.16038 7.79575 3.29758 7.69412C3.43987 7.5874 3.56692 7.4756 3.67872 7.35872H4.47148V12.6412H3.3357V8.83752C3.18324 8.93916 3.013 9.03317 2.82498 9.11956C2.63695 9.20087 2.45401 9.27202 2.27614 9.333L1.93312 8.45639Z" fill="#1A2F43"/>' +
  '<path d="M9.12281 9.98855C9.12281 10.8779 8.95257 11.5614 8.61209 12.0391C8.27669 12.5117 7.81171 12.748 7.21714 12.748C6.62257 12.748 6.15504 12.5117 5.81456 12.0391C5.47916 11.5614 5.31146 10.8779 5.31146 9.98855C5.31146 9.54643 5.35466 9.15513 5.44105 8.81465C5.53252 8.47417 5.66211 8.18705 5.82981 7.95329C5.99751 7.71953 6.19824 7.54166 6.432 7.4197C6.66576 7.29774 6.92748 7.23676 7.21714 7.23676C7.81171 7.23676 8.27669 7.4756 8.61209 7.95329C8.95257 8.4259 9.12281 9.10432 9.12281 9.98855ZM7.96416 9.98855C7.96416 9.7243 7.95146 9.48545 7.92605 9.27202C7.90064 9.0535 7.85999 8.86547 7.80409 8.70794C7.74819 8.5504 7.67196 8.42844 7.57541 8.34205C7.47885 8.25566 7.35943 8.21246 7.21714 8.21246C7.07485 8.21246 6.95543 8.25566 6.85887 8.34205C6.7674 8.42844 6.69117 8.5504 6.63019 8.70794C6.57429 8.86547 6.53364 9.0535 6.50823 9.27202C6.48282 9.48545 6.47011 9.7243 6.47011 9.98855C6.47011 10.2528 6.48282 10.4942 6.50823 10.7127C6.53364 10.9312 6.57429 11.1192 6.63019 11.2768C6.69117 11.4343 6.7674 11.5563 6.85887 11.6427C6.95543 11.7291 7.07485 11.7723 7.21714 11.7723C7.35943 11.7723 7.47885 11.7291 7.57541 11.6427C7.67196 11.5563 7.74819 11.4343 7.80409 11.2768C7.85999 11.1192 7.90064 10.9312 7.92605 10.7127C7.95146 10.4942 7.96416 10.2528 7.96416 9.98855Z" fill="#1A2F43"/>' +
  '<path d="M13.2647 9.98855C13.2647 10.8779 13.0944 11.5614 12.754 12.0391C12.4186 12.5117 11.9536 12.748 11.359 12.748C10.7644 12.748 10.2969 12.5117 9.95643 12.0391C9.62103 11.5614 9.45333 10.8779 9.45333 9.98855C9.45333 9.54643 9.49652 9.15513 9.58291 8.81465C9.67439 8.47417 9.80397 8.18705 9.97167 7.95329C10.1394 7.71953 10.3401 7.54166 10.5739 7.4197C10.8076 7.29774 11.0693 7.23676 11.359 7.23676C11.9536 7.23676 12.4186 7.4756 12.754 7.95329C13.0944 8.4259 13.2647 9.10432 13.2647 9.98855ZM12.106 9.98855C12.106 9.7243 12.0933 9.48545 12.0679 9.27202C12.0425 9.0535 12.0019 8.86547 11.946 8.70794C11.8901 8.5504 11.8138 8.42844 11.7173 8.34205C11.6207 8.25566 11.5013 8.21246 11.359 8.21246C11.2167 8.21246 11.0973 8.25566 11.0007 8.34205C10.9093 8.42844 10.833 8.5504 10.7721 8.70794C10.7162 8.86547 10.6755 9.0535 10.6501 9.27202C10.6247 9.48545 10.612 9.7243 10.612 9.98855C10.612 10.2528 10.6247 10.4942 10.6501 10.7127C10.6755 10.9312 10.7162 11.1192 10.7721 11.2768C10.833 11.4343 10.9093 11.5563 11.0007 11.6427C11.0973 11.7291 11.2167 11.7723 11.359 11.7723C11.5013 11.7723 11.6207 11.7291 11.7173 11.6427C11.8138 11.5563 11.8901 11.4343 11.946 11.2768C12.0019 11.1192 12.0425 10.9312 12.0679 10.7127C12.0933 10.4942 12.106 10.2528 12.106 9.98855Z" fill="#1A2F43"/>' +
  '<path d="M16.3013 8.71556C16.3013 9.19325 16.1793 9.55914 15.9354 9.81323C15.6914 10.0673 15.3637 10.1944 14.952 10.1944C14.5404 10.1944 14.2126 10.0673 13.9687 9.81323C13.7248 9.55914 13.6028 9.19325 13.6028 8.71556C13.6028 8.23787 13.7248 7.87198 13.9687 7.61789C14.2126 7.3638 14.5404 7.23676 14.952 7.23676C15.3637 7.23676 15.6914 7.3638 15.9354 7.61789C16.1793 7.87198 16.3013 8.23787 16.3013 8.71556ZM15.4399 8.71556C15.4399 8.45639 15.3942 8.26836 15.3027 8.15148C15.2112 8.0346 15.0943 7.97616 14.952 7.97616C14.8047 7.97616 14.6852 8.0346 14.5938 8.15148C14.5074 8.26836 14.4642 8.45639 14.4642 8.71556C14.4642 8.97473 14.5074 9.1653 14.5938 9.28726C14.6852 9.40414 14.8047 9.46258 14.952 9.46258C15.0943 9.46258 15.2112 9.40414 15.3027 9.28726C15.3942 9.1653 15.4399 8.97473 15.4399 8.71556ZM17.7877 7.35872H18.8472L15.8668 12.6412H14.8072L17.7877 7.35872ZM20.0669 11.2844C20.0669 11.7621 19.9449 12.128 19.701 12.3821C19.4571 12.6362 19.1293 12.7632 18.7176 12.7632C18.306 12.7632 17.9782 12.6362 17.7343 12.3821C17.4904 12.128 17.3684 11.7621 17.3684 11.2844C17.3684 10.8067 17.4904 10.4408 17.7343 10.1867C17.9782 9.93265 18.306 9.8056 18.7176 9.8056C19.1293 9.8056 19.4571 9.93265 19.701 10.1867C19.9449 10.4408 20.0669 10.8067 20.0669 11.2844ZM19.2055 11.2844C19.2055 11.0252 19.1598 10.8372 19.0683 10.7203C18.9768 10.6034 18.8599 10.545 18.7176 10.545C18.5703 10.545 18.4509 10.6034 18.3594 10.7203C18.273 10.8372 18.2298 11.0252 18.2298 11.2844C18.2298 11.5436 18.273 11.7341 18.3594 11.8561C18.4509 11.973 18.5703 12.0314 18.7176 12.0314C18.8599 12.0314 18.9768 11.973 19.0683 11.8561C19.1598 11.7341 19.2055 11.5436 19.2055 11.2844Z" fill="#1A2F43"/>' +
  '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.25758 6.35634H6.29006C7.23357 5.39578 8.54721 4.80001 10 4.80001C11.4528 4.80001 12.7664 5.39578 13.7099 6.35634H15.7424C14.536 4.45895 12.415 3.20001 10 3.20001C7.585 3.20001 5.46403 4.45895 4.25758 6.35634ZM15.7424 13.6437H13.71C12.7665 14.6042 11.4528 15.2 10 15.2C8.5472 15.2 7.23354 14.6042 6.29004 13.6437H4.25757C5.46401 15.5411 7.58499 16.8 10 16.8C12.415 16.8 14.536 15.5411 15.7424 13.6437Z" fill="#1A2F43"/>' +
  '</svg>';


const basicStyle =`
:root {
--bg-color: #1D274A;
}

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
  background: var(--bg-color);
}

.image__href{
    position: relative;
    text-decoration: none;
}

.caption-tumbs__container{
    width: 100%;
}

.caption-tumbs__mobile{
    padding: 0 16px;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    color: #ffff;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
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
  background: var(--bg-color);
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
  background: var(--bg-color) !important;
  opacity: 1 !important;
}

 .fancybox-inner >.fancybox-caption{
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

.fancybox-inner > .fancybox-stage > .fancybox-slide, .fancybox-inner > .fancybox-stage > .fancybox-slide--image{
    padding: 0;
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
  .caption-tumbs__container{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(17, 23, 45, 0.8);
    margin-top: 0;
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
    background: rgba(17, 23, 45, 0.8);
    color: #fff;
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
    background: #1A2F43;
  }
    li.slick-active > button{
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

const desktopStyle =`
@media screen and (min-width: 1024px){
.main-container-gallery {
  color: #6E767E;
  background: #F7F7F7;
}

.slick-active{
  background: #F7F7F7;
}

.image-caption__text{
 background: rgba(247, 247, 247, 0.8);
 // background: linear-gradient(180deg, rgba(247, 247, 247, 0.5) 50%, rgba(247, 247, 247, 0.9) 100%);
  color: #1A2F43;
}
.menu__container{
  background: #F7F7F7;
}
.next-btn, .prev-btn{
  color: #1A2F43;
}
li.slick-active > button{
   background: #1A2F43; 
}
.dots__btn-style{
   background: #6E767E;
}
.fancybox-stage > .fancybox-slide > .fancybox-content{
  background: #F7F7F7;
}
.fancybox-bg{
   background: #F7F7F7 !important;
}

.fancybox-inner > .fancybox-stage > .fancybox-slide, .fancybox-inner > .fancybox-stage > .fancybox-slide--image{
    padding: 0;
}
.active {
    border-bottom: 3px solid #1A2F43;
    color: #1A2F43;
}
.full-screen__zoom{
    width: 42px;
    height: 42px;
    background: #F7F7F7;
    border-radius: 30px;
    margin-right: 32px;
    margin-bottom: 22px;
}

.fancybox-inner > .fancybox-toolbar >.fancybox-button{
    width: 42px;
    height: 42px;
    background: #F7F7F7;
    border-radius: 30px;
    margin-right: 32px;
    margin-bottom: 22px;
    color: #1A2F43;
}

}
`;
