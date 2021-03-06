// each element contains data about the certain category and pictures belonging to it
// this data is obtained from API
// t
// let galleryData = [{"categoryId":1,"name":[{"lang":"en","value":"Interior"},{"lang":"he","value":"Interior"}],"order":0,"pictures":[]},{"categoryId":2,"name":[{"lang":"en","value":"Exterior"},{"lang":"he","value":"Exterior"}],"order":1,"pictures":[{"title":[{"lang":"en","value":"Image 1"},{"lang":"he","value":""}],"imageUrl":"https:\/\/dreamsimages.bmby.com\/251West117thStreet\/projectassets\/gallery\/B55C902A-AD1C-4505-A43D-E977AD1F9B23\/5d58fdf5-2356-4d33-9ecb-15c1daa27b07.png","order":0},{"title":[{"lang":"en","value":"Image 2"},{"lang":"he","value":""}],"imageUrl":"https:\/\/photojournal.jpl.nasa.gov\/jpeg\/PIA23689.jpg","order":1},{"title":[{"lang":"en","value":"Image 3"},{"lang":"he","value":""}],"imageUrl":"https:\/\/images.unsplash.com\/photo-1556103255-4443dbae8e5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","order":2}]},{"categoryId":3,"name":[{"lang":"en","value":"Amenities"},{"lang":"he","value":"Amenities"}],"order":2,"pictures":[]},{"categoryId":4,"name":[{"lang":"en","value":"Neighborhood"},{"lang":"he","value":"Neighborhood"}],"order":3,"pictures":[]}];

// let galleryData = [{"categoryId":1,"name":[{"lang":"en","value":"Interior"},{"lang":"he","value":"Interior"}],"order":0,"pictures":[{"title":[{"lang":"en","value":"Image 2"},{"lang":"he","value":""}],"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/gallery-test\/8000x4500.jpg","order":1}]},{"categoryId":2,"name":[{"lang":"en","value":"Exterior"},{"lang":"he","value":"Exterior"}],"order":1,"pictures":[{"title":[{"lang":"en","value":"Image 2"},{"lang":"he","value":""}],"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/gallery-test\/8000x4500.jpg","order":1},{"title":[{"lang":"en","value":"Image 3"},{"lang":"he","value":""}],"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/gallery-test\/720x720.jpg","order":2},{"title":[{"lang":"en","value":"Image 4"},{"lang":"he","value":""}],"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/gallery-test\/4999x6000.jpg","order":2},{"title":[{"lang":"en","value":"Image 4"},{"lang":"he","value":""}],"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/gallery-test\/405x720.jpg","order":2},{"title":[{"lang":"en","value":"Image 4"},{"lang":"he","value":""}],"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/gallery-test\/2100x720.jpg","order":2},{"title":[{"lang":"en","value":"Image 4"},{"lang":"he","value":""}],"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/gallery-test\/1500x1500.jpg","order":2},{"title":[{"lang":"en","value":"Image 4"},{"lang":"he","value":""}],"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/gallery-test\/1200x720.jpg","order":2},{"title":[{"lang":"en","value":"Image 4"},{"lang":"he","value":""}],"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/gallery-test\/1080x1920.jpg","order":2}]},{"categoryId":3,"name":[{"lang":"en","value":"Amenities"},{"lang":"he","value":"Amenities"}],"order":2,"pictures":[]},{"categoryId":4,"name":[{"lang":"en","value":"Neighborhood"},{"lang":"he","value":"Neighborhood"}],"order":3,"pictures":[]}];

let galleryData = [
      { "categoryId": "5f957cdded75ee04ed45f082", "name": [{ "lang": "en", "value": "Interior" }], "order": 0, "pictures": [] },
      {
          "categoryId": "5f957cdded75ee04ed45f083",
          "name": [{ "lang": "en", "value": "Exterior" }],
          "order": 1,
          "pictures": [
              { "title": [{ "lang": "en", "value": "" }], "imageUrl": "https://dreamsimages.bmby.com/hapdreams/projectassets/gallery/77CCD7F5-567F-42D7-BCB0-79BAEB3B7B8D/01 BuildingHero_Dusk 6K 01-29-2020 (1) (1) - Copy.jpg", "order": 0 },
              { "title": [{ "lang": "en", "value": "" }], "imageUrl": "https://dreamsimages.bmby.com/hapdreams/projectassets/gallery/2933CD12-6496-41D4-917F-88A41D13CC0C/02BuildingHero 6K 01-29-2020 (2) (1) - Copy - Copy.jpg", "order": 1 }
          ]
      },
      {
          "categoryId": "5f957cdded75ee04ed45f084",
          "name": [{ "lang": "en", "value": "Amenities" }],
          "order": 2,
          "pictures": [
              { "title": [{ "lang": "en", "value": "The pool" }], "imageUrl": "https://dreamsimages.bmby.com/hapdreams/projectassets/gallery/28A539BC-3F77-4367-B0AA-DC7C047D4EAE/06 Pool_High Res_02-12-2020 - Copy.jpg", "order": 0 },
              {
                  "title": [{ "lang": "en", "value": "Spa" }],
                  "imageUrl": "https://dreamsimages.bmby.com/hapdreams/projectassets/gallery/8B332A7A-47AB-4EE7-A736-5D516E30EEBC/07 Spa_Second Option_HIgh Res 01-15-2020 (1) - Copy.jpg",
                  "order": 1
              },
              { "title": [{ "lang": "en", "value": "Fitness" }], "imageUrl": "https://dreamsimages.bmby.com/hapdreams/projectassets/gallery/A2ECA5D0-7CA4-42F2-AD67-27E58A0B6AF4/08_Fitness_200120 - Copy.jpg", "order": 2 },
              { "title": [{ "lang": "en", "value": "Residents Lounge" }], "imageUrl": "https://dreamsimages.bmby.com/hapdreams/projectassets/gallery/CD02024A-F4A5-4D53-9EF8-5BC68F5CFE2E/09 Residents Lounge_6k_200212.jpg", "order": 3 },
              { "title": [{ "lang": "en", "value": "Roof Terrace" }], "imageUrl": "https://dreamsimages.bmby.com/hapdreams/projectassets/gallery/37B5CEC9-36BD-4923-94FE-08DD1D10AA52/10_RD_cam1_200213 (1) - Copy.jpg", "order": 4 },
              { "title": [{ "lang": "en", "value": "Roof Terrace" }], "imageUrl": "https://dreamsimages.bmby.com/hapdreams/projectassets/gallery/ADC9055F-9389-4091-8B9E-17A077196806/x_19 PH Roof Terrace (20A)_200121 - Copy.jpg", "order": 5 },
              { "title": [{ "lang": "en", "value": "Roof top Kitchen" }], "imageUrl": "https://dreamsimages.bmby.com/hapdreams/projectassets/gallery/93594436-5893-4D26-977B-930C550F081E/10-B_RooftopKitchen_200212 - Copy.jpg", "order": 6 }
          ]
      },
      { "categoryId": "5f957cdded75ee04ed45f085", "name": [{ "lang": "en", "value": "Neighborhood" }], "order": 3, "pictures": [] }
  ]
;

let isData = checkCRM();
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
// const bg = '#1D274A';
const bg = '#835A60';
// const btn_fg = '#603EF2';
const btn_fg = 'black';

let canvasClass = 'bmby-gallery-wrapp';
let galleryContainer;
let timer = null;
let imagesCount=0;
let scroll=0;
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
    if (!isData){
        showErrorPage();
        return;
    }
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
   if (!isData){
       return;
   }
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
        imagesContainer.addEventListener('touchend',()=>{
            const scrollInterval = setInterval(()=>{
                scroll = imagesContainer.getBoundingClientRect().y;
                if (scroll === imagesContainer.getBoundingClientRect().y){
                    clearInterval(scrollInterval);
                    onScrollGallery();
                }
            },400);
            onScrollGallery();
        });
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

function closeImage () {
   const fb = document.querySelector('.fancybox-container');
   if (fb){
       fb.remove();
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
            close: '<button class="close-screen__btn" onclick="closeImage()">'+closeIcon+'</button>',
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
            activeTab && activeTab.classList.remove('active');
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

function checkCRM () {
    return galleryData.length > 0;
}

function showErrorPage () {
    const mainContainer = document.querySelector('.'+canvasClass);
    const wrapper = creatHtmlElement(mainContainer,'','div',['error-page__wrapper']);
    const icon = creatHtmlElement(wrapper,'','div',['error-page__icon']);
    icon.innerHTML = userAgent === 'Windows' ? desktopErrorIcon : mobileErrorIcon;
    const text = creatHtmlElement(wrapper,'Sorry, this page is unavailable','h1',['error-page__title']);
}

//#1A2F43
const desktopErrorIcon = `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.708 13.279C40.708 13.279 51 14 51 24C51 32 47 36 47 36H40L40.708 13.279Z" fill="#2E7D32"/>
<path d="M32 12H36C39.212 12 43.547 14.186 44.326 17.302C45.413 21.651 45.069 26.235 43.345 30.373L41 36H34L32 12Z" fill="#4CAF50"/>
<path d="M23.292 13.279C23.292 13.279 13 14 13 24C13 32 17 36 17 36H24L23.292 13.279Z" fill="#2E7D32"/>
<path d="M31.9999 12H27.9999C24.7879 12 20.4529 14.186 19.6739 17.302C18.5869 21.651 18.9309 26.235 20.6549 30.373L22.9999 36H29.9999L31.9999 12Z" fill="#4CAF50"/>
<path d="M19.849 60.182C19.936 60.656 20.35 61 20.832 61H43.168C43.65 61 44.063 60.656 44.151 60.182L49 43H15L19.849 60.182Z" fill="#FF5722"/>
<path d="M13 37V42C13 42.552 13.448 43 14 43H50C50.552 43 51 42.552 51 42V37C51 36.448 50.552 36 50 36H14C13.448 36 13 36.448 13 37Z" fill="#FF9801"/>
<path d="M51 13C53.209 15.209 56.791 15.209 59 13C56.791 10.791 53.209 10.791 51 13Z" fill="white"/>
<path d="M39 13C41.209 15.209 44.791 15.209 47 13C44.791 10.791 41.209 10.791 39 13Z" fill="white"/>
<path d="M48.9995 3C46.7905 5.209 46.7905 8.791 48.9995 11C51.2085 8.791 51.2085 5.209 48.9995 3Z" fill="white"/>
<path d="M48.9995 15C46.7905 17.209 46.7905 20.791 48.9995 23C51.2085 20.791 51.2085 17.209 48.9995 15Z" fill="white"/>
<path d="M50.4141 11.586C53.5381 11.586 56.0711 9.05299 56.0711 5.92899C52.9471 5.92899 50.4141 8.46199 50.4141 11.586Z" fill="white"/>
<path d="M47.5867 14.414C44.4627 14.414 41.9297 16.947 41.9297 20.071C45.0537 20.071 47.5867 17.538 47.5867 14.414Z" fill="white"/>
<path d="M47.5867 11.586C47.5867 8.46199 45.0537 5.92899 41.9297 5.92899C41.9297 9.05299 44.4627 11.586 47.5867 11.586Z" fill="white"/>
<path d="M56.0711 20.071C56.0711 16.947 53.5381 14.414 50.4141 14.414C50.4141 17.538 52.9471 20.071 56.0711 20.071Z" fill="white"/>
<path d="M49 15C50.1046 15 51 14.1046 51 13C51 11.8954 50.1046 11 49 11C47.8954 11 47 11.8954 47 13C47 14.1046 47.8954 15 49 15Z" fill="#F2C720"/>
<path d="M26.1297 19.486C26.4977 16.541 27.5707 13.092 30.4977 12.215C30.0497 12.081 29.5627 12 29.0217 12C24.9387 12 23.5777 16.083 23.1517 19.486C22.8857 21.614 22.9837 23.771 23.3357 25.886L25.0217 36H27.9997L26.3137 25.886C25.9617 23.771 25.8637 21.614 26.1297 19.486Z" fill="#2E7D32"/>
<path d="M40.8472 19.486C40.4222 16.083 39.0612 12 34.9772 12C33.7942 12 32.8452 12.35 32.0752 12.92L33.9992 36H38.9772L40.6632 25.886C41.0162 23.771 41.1132 21.614 40.8472 19.486Z" fill="#2E7D32"/>
<path d="M37.8692 19.486C37.4432 16.083 36.0822 12 31.9992 12C27.9162 12 26.5552 16.083 26.1292 19.486C25.8632 21.614 25.9612 23.771 26.3132 25.886L27.9992 36H35.9992L37.6852 25.886C38.0372 23.771 38.1352 21.614 37.8692 19.486Z" fill="#4CAF50"/>
<path d="M19.8486 60.182C19.9356 60.656 20.3496 61 20.8316 61H43.1676C43.6496 61 44.0626 60.656 44.1506 60.182L48.9996 43C43.9986 52.377 34.6606 58.654 24.0896 59.745L19.8486 60.182Z" fill="#D84315"/>
<path d="M31 20H33V19H34V17H33V16H31V17H30V19H31V20Z" fill="#1A2F43"/>
<path d="M31 28H33V27H34V25H33V24H31V25H30V27H31V28Z" fill="#1A2F43"/>
<path d="M10.5553 30.832L12.6403 29.442C13.2573 31.946 14.2073 33.791 14.9863 35H14.0003C12.8973 35 12.0003 35.897 12.0003 37V42C12.0003 43.103 12.8973 44 14.0003 44H14.2433L18.8653 60.364C19.0413 61.312 19.8683 62 20.8323 62H43.1683C44.1323 62 44.9593 61.312 45.1143 60.454L49.7573 44H50.0003C51.1033 44 52.0003 43.103 52.0003 42V37C52.0003 35.897 51.1033 35 50.0003 35H49.0143C49.7923 33.791 50.7383 31.939 51.3553 29.439L53.4453 30.832L54.5543 29.168L52.8033 28L54.5553 26.832L53.4463 25.168L51.8973 26.2C51.9013 26.161 51.9073 26.126 51.9103 26.087L49.9183 25.913C49.4713 31.045 47.2923 34.094 46.5473 35H42.5003L44.1733 30.984L45.4453 31.832L46.5543 30.168L44.8873 29.057C44.9033 29.007 44.9263 28.958 44.9423 28.907L46.5543 27.832L45.5623 26.343C45.7643 25.253 45.9033 24.149 45.9373 23.03L43.9383 22.968C43.8893 24.565 43.6313 26.132 43.2073 27.659L42.4453 28.167C42.1673 28.354 42.0003 28.666 42.0003 29C42.0003 29.334 42.1673 29.646 42.4453 29.832L42.4723 29.85C42.4533 29.896 42.4413 29.943 42.4223 29.988L40.3333 35H37.1803L38.6713 26.05C39.0603 23.716 39.1243 21.466 38.8613 19.362C38.5133 16.574 37.6893 14.439 36.4603 13.022C36.9713 13.057 37.5083 13.147 38.0573 13.294C38.1043 13.444 38.1743 13.588 38.2933 13.707C39.4983 14.912 41.0543 15.55 42.6353 15.636C41.5783 16.815 40.9293 18.367 40.9293 20.071C40.9293 20.623 41.3773 21.071 41.9293 21.071C43.6333 21.071 45.1853 20.422 46.3643 19.365C46.4503 20.946 47.0883 22.502 48.2933 23.707C48.4883 23.902 48.7443 24 49.0003 24C49.2563 24 49.5123 23.902 49.7073 23.707C50.9123 22.502 51.5503 20.946 51.6363 19.365C52.8153 20.422 54.3673 21.071 56.0713 21.071C56.6233 21.071 57.0713 20.623 57.0713 20.071C57.0713 18.367 56.4223 16.815 55.3653 15.636C56.9463 15.55 58.5023 14.912 59.7073 13.707C60.0983 13.316 60.0983 12.684 59.7073 12.293C58.5023 11.088 56.9463 10.45 55.3653 10.364C56.4223 9.18501 57.0713 7.63301 57.0713 5.92901C57.0713 5.37701 56.6233 4.92901 56.0713 4.92901C54.3673 4.92901 52.8153 5.57801 51.6363 6.63501C51.5503 5.05401 50.9123 3.49801 49.7073 2.29301C49.3163 1.90201 48.6843 1.90201 48.2933 2.29301C47.0883 3.49801 46.4503 5.05401 46.3643 6.63501C45.1853 5.57801 43.6333 4.92901 41.9293 4.92901C41.3773 4.92901 40.9293 5.37701 40.9293 5.92901C40.9293 7.63301 41.5783 9.18501 42.6353 10.364C41.4233 10.43 40.2283 10.824 39.1923 11.548C38.1023 11.192 37.0013 11 36.0003 11H32.0003H28.0003C27.4963 11 26.9723 11.051 26.4413 11.141L26.8323 10.555L25.1683 9.44601L23.7233 11.614L21.5553 10.169L20.4463 11.833L21.5483 12.568C19.2053 13.112 15.0163 14.647 13.0603 18.839L10.5553 17.169L9.44631 18.833L11.1973 20L9.44531 21.168L10.5543 22.832L12.1833 21.746C12.0693 22.447 12.0003 23.193 12.0003 24C12.0003 24.775 12.0463 25.502 12.1103 26.205L10.5543 25.168L9.44531 26.832L11.1973 28L9.44531 29.168L10.5553 30.832ZM43.1683 60L20.8113 59.911L16.3213 44H47.6793L43.1683 60ZM50.0003 42H14.0003V37H28.0003H36.0003H50.0003V42ZM21.5783 29.988C21.5593 29.943 21.5463 29.896 21.5273 29.85L21.5553 29.832C21.8333 29.646 22.0003 29.334 22.0003 29C22.0003 28.666 21.8333 28.354 21.5553 28.168L20.7933 27.66C20.3573 26.081 20.1173 24.453 20.0783 22.816L21.5543 21.832C21.8333 21.646 22.0003 21.334 22.0003 21C22.0003 20.666 21.8333 20.354 21.5553 20.168L20.2953 19.328C20.3873 18.729 20.4983 18.134 20.6453 17.545C21.0103 16.085 22.4183 14.813 24.0923 13.989C24.3133 13.968 24.5243 13.878 24.6893 13.719C25.6293 13.329 26.6213 13.082 27.5423 13.019C26.3113 14.436 25.4873 16.572 25.1383 19.362C24.8753 21.466 24.9393 23.716 25.3283 26.05L26.8203 35H23.6673L21.5783 29.988ZM49.4703 11.864C49.5663 12.188 49.8123 12.434 50.1353 12.529C49.9743 12.826 49.9743 13.173 50.1353 13.47C49.8113 13.566 49.5653 13.812 49.4703 14.135C49.1733 13.974 48.8263 13.974 48.5293 14.135C48.4333 13.811 48.1873 13.565 47.8643 13.47C48.0253 13.173 48.0253 12.826 47.8643 12.529C48.1883 12.433 48.4343 12.187 48.5293 11.864C48.6783 11.945 48.8363 12 49.0003 12C49.1643 12 49.3223 11.945 49.4703 11.864ZM43.0703 18.93C43.4883 17.278 44.7923 15.974 46.4443 15.556C46.0263 17.208 44.7233 18.512 43.0703 18.93ZM49.0003 21.386C48.1273 19.922 48.1273 18.078 49.0003 16.615C49.8733 18.078 49.8733 19.922 49.0003 21.386ZM51.5563 15.556C53.2083 15.974 54.5123 17.278 54.9303 18.93C53.2773 18.512 51.9743 17.208 51.5563 15.556ZM52.6143 13C54.0783 12.127 55.9223 12.127 57.3853 13C55.9223 13.873 54.0783 13.873 52.6143 13ZM54.9303 7.07001C54.5123 8.72201 53.2083 10.026 51.5563 10.444C51.9743 8.79201 53.2773 7.48801 54.9303 7.07001ZM49.0003 4.61401C49.8733 6.07801 49.8733 7.92201 49.0003 9.38501C48.1273 7.92201 48.1273 6.07801 49.0003 4.61401ZM46.4443 10.444C44.7923 10.026 43.4883 8.72201 43.0703 7.07001C44.7233 7.48801 46.0263 8.79201 46.4443 10.444ZM45.3863 13C43.9223 13.873 42.0783 13.873 40.6153 13C42.0783 12.127 43.9223 12.127 45.3863 13ZM36.8773 19.61C37.1163 21.522 37.0563 23.577 36.6993 25.721L35.1533 35H28.8473L27.3013 25.721C26.9443 23.577 26.8843 21.522 27.1233 19.61C27.6713 15.224 29.3123 13 32.0003 13C34.6883 13 36.3293 15.224 36.8773 19.61ZM19.4883 15.321C19.1323 15.865 18.8583 16.445 18.7043 17.059C18.5983 17.483 18.5183 17.912 18.4393 18.341L17.4463 19.831L18.1603 20.307C18.1163 20.785 18.0953 21.264 18.0823 21.743L17.4463 22.167L18.0913 23.135C18.1303 24.21 18.2463 25.28 18.4413 26.338L17.4463 27.831L19.0703 28.914C19.0853 28.961 19.0953 29.01 19.1103 29.057L17.4463 30.167L18.5553 31.831L19.8273 30.983L21.5003 35H17.4543C16.6233 33.989 14.0003 30.299 14.0003 24C14.0003 18.917 16.9103 16.483 19.4883 15.321Z" fill="#1A2F43"/>
</svg>
`;

const mobileErrorIcon = `
<svg width="131" height="140" viewBox="0 0 131 140" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<path d="M71.708 49.279C71.708 49.279 82 50 82 60C82 68 78 72 78 72H71L71.708 49.279Z" fill="#2E7D32"/>
<path d="M63 48H67C70.212 48 74.547 50.186 75.326 53.302C76.413 57.651 76.069 62.235 74.345 66.373L72 72H65L63 48Z" fill="#4CAF50"/>
<path d="M54.292 49.279C54.292 49.279 44 50 44 60C44 68 48 72 48 72H55L54.292 49.279Z" fill="#2E7D32"/>
<path d="M62.9999 48H58.9999C55.7879 48 51.4529 50.186 50.6739 53.302C49.5869 57.651 49.9309 62.235 51.6549 66.373L53.9999 72H60.9999L62.9999 48Z" fill="#4CAF50"/>
<path d="M50.849 96.182C50.936 96.656 51.35 97 51.832 97H74.168C74.65 97 75.063 96.656 75.151 96.182L80 79H46L50.849 96.182Z" fill="#FF5722"/>
<path d="M44 73V78C44 78.552 44.448 79 45 79H81C81.552 79 82 78.552 82 78V73C82 72.448 81.552 72 81 72H45C44.448 72 44 72.448 44 73Z" fill="#FF9801"/>
<path d="M82 49C84.209 51.209 87.791 51.209 90 49C87.791 46.791 84.209 46.791 82 49Z" fill="white"/>
<path d="M70 49C72.209 51.209 75.791 51.209 78 49C75.791 46.791 72.209 46.791 70 49Z" fill="white"/>
<path d="M79.9995 39C77.7905 41.209 77.7905 44.791 79.9995 47C82.2085 44.791 82.2085 41.209 79.9995 39Z" fill="white"/>
<path d="M79.9995 51C77.7905 53.209 77.7905 56.791 79.9995 59C82.2085 56.791 82.2085 53.209 79.9995 51Z" fill="white"/>
<path d="M81.4141 47.586C84.5381 47.586 87.0711 45.053 87.0711 41.929C83.9471 41.929 81.4141 44.462 81.4141 47.586Z" fill="white"/>
<path d="M78.5867 50.414C75.4627 50.414 72.9297 52.947 72.9297 56.071C76.0537 56.071 78.5867 53.538 78.5867 50.414Z" fill="white"/>
<path d="M78.5867 47.586C78.5867 44.462 76.0537 41.929 72.9297 41.929C72.9297 45.053 75.4627 47.586 78.5867 47.586Z" fill="white"/>
<path d="M87.0711 56.071C87.0711 52.947 84.5381 50.414 81.4141 50.414C81.4141 53.538 83.9471 56.071 87.0711 56.071Z" fill="white"/>
<path d="M80 51C81.1046 51 82 50.1046 82 49C82 47.8954 81.1046 47 80 47C78.8954 47 78 47.8954 78 49C78 50.1046 78.8954 51 80 51Z" fill="#F2C720"/>
<path d="M57.1297 55.486C57.4977 52.541 58.5707 49.092 61.4977 48.215C61.0497 48.081 60.5627 48 60.0217 48C55.9387 48 54.5777 52.083 54.1517 55.486C53.8857 57.614 53.9837 59.771 54.3357 61.886L56.0217 72H58.9997L57.3137 61.886C56.9617 59.771 56.8637 57.614 57.1297 55.486Z" fill="#2E7D32"/>
<path d="M71.8472 55.486C71.4222 52.083 70.0612 48 65.9772 48C64.7942 48 63.8452 48.35 63.0752 48.92L64.9992 72H69.9772L71.6632 61.886C72.0162 59.771 72.1132 57.614 71.8472 55.486Z" fill="#2E7D32"/>
<path d="M68.8692 55.486C68.4432 52.083 67.0822 48 62.9992 48C58.9162 48 57.5552 52.083 57.1292 55.486C56.8632 57.614 56.9612 59.771 57.3132 61.886L58.9992 72H66.9992L68.6852 61.886C69.0372 59.771 69.1352 57.614 68.8692 55.486Z" fill="#4CAF50"/>
<path d="M50.8486 96.182C50.9356 96.656 51.3496 97 51.8316 97H74.1676C74.6496 97 75.0626 96.656 75.1506 96.182L79.9996 79C74.9986 88.377 65.6606 94.654 55.0896 95.745L50.8486 96.182Z" fill="#D84315"/>
<path d="M62 56H64V55H65V53H64V52H62V53H61V55H62V56Z" fill="black"/>
<path d="M62 64H64V63H65V61H64V60H62V61H61V63H62V64Z" fill="black"/>
<path d="M41.5553 66.832L43.6403 65.442C44.2573 67.946 45.2073 69.791 45.9863 71H45.0003C43.8973 71 43.0003 71.897 43.0003 73V78C43.0003 79.103 43.8973 80 45.0003 80H45.2433L49.8653 96.364C50.0413 97.312 50.8683 98 51.8323 98H74.1683C75.1323 98 75.9593 97.312 76.1143 96.454L80.7573 80H81.0003C82.1033 80 83.0003 79.103 83.0003 78V73C83.0003 71.897 82.1033 71 81.0003 71H80.0143C80.7923 69.791 81.7383 67.939 82.3553 65.439L84.4453 66.832L85.5543 65.168L83.8033 64L85.5553 62.832L84.4463 61.168L82.8973 62.2C82.9013 62.161 82.9073 62.126 82.9103 62.087L80.9183 61.913C80.4713 67.045 78.2923 70.094 77.5473 71H73.5003L75.1733 66.984L76.4453 67.832L77.5543 66.168L75.8873 65.057C75.9033 65.007 75.9263 64.958 75.9423 64.907L77.5543 63.832L76.5623 62.343C76.7643 61.253 76.9033 60.149 76.9373 59.03L74.9383 58.968C74.8893 60.565 74.6313 62.132 74.2073 63.659L73.4453 64.167C73.1673 64.354 73.0003 64.666 73.0003 65C73.0003 65.334 73.1673 65.646 73.4453 65.832L73.4723 65.85C73.4533 65.896 73.4413 65.943 73.4223 65.988L71.3333 71H68.1803L69.6713 62.05C70.0603 59.716 70.1243 57.466 69.8613 55.362C69.5133 52.574 68.6893 50.439 67.4603 49.022C67.9713 49.057 68.5083 49.147 69.0573 49.294C69.1043 49.444 69.1743 49.588 69.2933 49.707C70.4983 50.912 72.0543 51.55 73.6353 51.636C72.5783 52.815 71.9293 54.367 71.9293 56.071C71.9293 56.623 72.3773 57.071 72.9293 57.071C74.6333 57.071 76.1853 56.422 77.3643 55.365C77.4503 56.946 78.0883 58.502 79.2933 59.707C79.4883 59.902 79.7443 60 80.0003 60C80.2563 60 80.5123 59.902 80.7073 59.707C81.9123 58.502 82.5503 56.946 82.6363 55.365C83.8153 56.422 85.3673 57.071 87.0713 57.071C87.6233 57.071 88.0713 56.623 88.0713 56.071C88.0713 54.367 87.4223 52.815 86.3653 51.636C87.9463 51.55 89.5023 50.912 90.7073 49.707C91.0983 49.316 91.0983 48.684 90.7073 48.293C89.5023 47.088 87.9463 46.45 86.3653 46.364C87.4223 45.185 88.0713 43.633 88.0713 41.929C88.0713 41.377 87.6233 40.929 87.0713 40.929C85.3673 40.929 83.8153 41.578 82.6363 42.635C82.5503 41.054 81.9123 39.498 80.7073 38.293C80.3163 37.902 79.6843 37.902 79.2933 38.293C78.0883 39.498 77.4503 41.054 77.3643 42.635C76.1853 41.578 74.6333 40.929 72.9293 40.929C72.3773 40.929 71.9293 41.377 71.9293 41.929C71.9293 43.633 72.5783 45.185 73.6353 46.364C72.4233 46.43 71.2283 46.824 70.1923 47.548C69.1023 47.192 68.0013 47 67.0003 47H63.0003H59.0003C58.4963 47 57.9723 47.051 57.4413 47.141L57.8323 46.555L56.1683 45.446L54.7233 47.614L52.5553 46.169L51.4463 47.833L52.5483 48.568C50.2053 49.112 46.0163 50.647 44.0603 54.839L41.5553 53.169L40.4463 54.833L42.1973 56L40.4453 57.168L41.5543 58.832L43.1833 57.746C43.0693 58.447 43.0003 59.193 43.0003 60C43.0003 60.775 43.0463 61.502 43.1103 62.205L41.5543 61.168L40.4453 62.832L42.1973 64L40.4453 65.168L41.5553 66.832ZM74.1683 96L51.8113 95.911L47.3213 80H78.6793L74.1683 96ZM81.0003 78H45.0003V73H59.0003H67.0003H81.0003V78ZM52.5783 65.988C52.5593 65.943 52.5463 65.896 52.5273 65.85L52.5553 65.832C52.8333 65.646 53.0003 65.334 53.0003 65C53.0003 64.666 52.8333 64.354 52.5553 64.168L51.7933 63.66C51.3573 62.081 51.1173 60.453 51.0783 58.816L52.5543 57.832C52.8333 57.646 53.0003 57.334 53.0003 57C53.0003 56.666 52.8333 56.354 52.5553 56.168L51.2953 55.328C51.3873 54.729 51.4983 54.134 51.6453 53.545C52.0103 52.085 53.4183 50.813 55.0923 49.989C55.3133 49.968 55.5243 49.878 55.6893 49.719C56.6293 49.329 57.6213 49.082 58.5423 49.019C57.3113 50.436 56.4873 52.572 56.1383 55.362C55.8753 57.466 55.9393 59.716 56.3283 62.05L57.8203 71H54.6673L52.5783 65.988ZM80.4703 47.864C80.5663 48.188 80.8123 48.434 81.1353 48.529C80.9743 48.826 80.9743 49.173 81.1353 49.47C80.8113 49.566 80.5653 49.812 80.4703 50.135C80.1733 49.974 79.8263 49.974 79.5293 50.135C79.4333 49.811 79.1873 49.565 78.8643 49.47C79.0253 49.173 79.0253 48.826 78.8643 48.529C79.1883 48.433 79.4343 48.187 79.5293 47.864C79.6783 47.945 79.8363 48 80.0003 48C80.1643 48 80.3223 47.945 80.4703 47.864ZM74.0703 54.93C74.4883 53.278 75.7923 51.974 77.4443 51.556C77.0263 53.208 75.7233 54.512 74.0703 54.93ZM80.0003 57.386C79.1273 55.922 79.1273 54.078 80.0003 52.615C80.8733 54.078 80.8733 55.922 80.0003 57.386ZM82.5563 51.556C84.2083 51.974 85.5123 53.278 85.9303 54.93C84.2773 54.512 82.9743 53.208 82.5563 51.556ZM83.6143 49C85.0783 48.127 86.9223 48.127 88.3853 49C86.9223 49.873 85.0783 49.873 83.6143 49ZM85.9303 43.07C85.5123 44.722 84.2083 46.026 82.5563 46.444C82.9743 44.792 84.2773 43.488 85.9303 43.07ZM80.0003 40.614C80.8733 42.078 80.8733 43.922 80.0003 45.385C79.1273 43.922 79.1273 42.078 80.0003 40.614ZM77.4443 46.444C75.7923 46.026 74.4883 44.722 74.0703 43.07C75.7233 43.488 77.0263 44.792 77.4443 46.444ZM76.3863 49C74.9223 49.873 73.0783 49.873 71.6153 49C73.0783 48.127 74.9223 48.127 76.3863 49ZM67.8773 55.61C68.1163 57.522 68.0563 59.577 67.6993 61.721L66.1533 71H59.8473L58.3013 61.721C57.9443 59.577 57.8843 57.522 58.1233 55.61C58.6713 51.224 60.3123 49 63.0003 49C65.6883 49 67.3293 51.224 67.8773 55.61ZM50.4883 51.321C50.1323 51.865 49.8583 52.445 49.7043 53.059C49.5983 53.483 49.5183 53.912 49.4393 54.341L48.4463 55.831L49.1603 56.307C49.1163 56.785 49.0953 57.264 49.0823 57.743L48.4463 58.167L49.0913 59.135C49.1303 60.21 49.2463 61.28 49.4413 62.338L48.4463 63.831L50.0703 64.914C50.0853 64.961 50.0953 65.01 50.1103 65.057L48.4463 66.167L49.5553 67.831L50.8273 66.983L52.5003 71H48.4543C47.6233 69.989 45.0003 66.299 45.0003 60C45.0003 54.917 47.9103 52.483 50.4883 51.321Z" fill="black"/>
</g>
<defs>
<filter id="filter0_d" x="-9" y="-2" width="144" height="144" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="20"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.184314 0 0 0 0 0.705882 0 0 0 0 0.929412 0 0 0 0.6 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>
`;

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

const closeIcon ='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4' +
  ' 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"></path></svg>';


const basicStyle =`
:root {
--bg-color: ${bg};
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
  border-bottom: 3px solid ${btn_fg};
  color: ${btn_fg};
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
  // background: rgba(17, 23, 45, 0.8);
  background: ${bg}CC;
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

.close-screen__btn{
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

.error-page__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.error-page__icon{
    width: 20%;
}

.error-page__icon > svg {
    height: 100%;
    width: 100%;
}

.error-page__title{
    font-family: 'Ubuntu',sans-serif;
    text-align: center;
    margin: 40px;
    transform: translateY(-50px);
}

@media screen and (max-width: 1024px){
.error-page__icon{
    width: 70%;
}

.error-page__title{
    margin: 0;
}

.fancybox-inner > .fancybox-toolbar >.fancybox-button{
    width: 42px;
    height: 42px;
    background: none;
    margin: 5px;
    color: #ffffff;
}

}

@media (orientation: landscape) {

.error-page__icon{
    width: 50%;
}

.error-page__title{
    transform: translateY(-70px);
}

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
    // background: rgba(17, 23, 45, 0.8);
    background: ${bg}CC;
    margin-top: 0;
    margin-bottom: 0;
  }
  
}

@media screen and (min-width: 1024px){

.error-page__icon{
    width: 20%;
}

.error-page__title{
    transform: translateY(-30px);
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
    background: ${bg}CC;
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
    background: ${bg};
  }
    li.slick-active > button{
    background: ${btn_fg};
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

.close-screen__btn {
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
