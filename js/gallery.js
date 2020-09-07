const categoriesData = [{"categoryId":1,"name":"Interior"},{"categoryId":2,"name":"Exterior"},{"categoryId":3,"name":"Amenities"},{"categoryId":4,"name":"Neighborhood"}];

const imgData = [{"title":{"en":"Image 1"},"categoryId":4,"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/251West117thStreet\/gallery\/460_1.jpg","order":0},{"title":{"en":"Image 27","ru":"Image 27"},"categoryId":3,"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/251West117thStreet\/gallery\/461_1.jpg","order":1},{"title":{"en":"Image 3"},"categoryId":2,"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/251West117thStreet\/gallery\/461_0.jpg","order":2},{"title":{"en":"Image 4"},"categoryId":3,"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/251West117thStreet\/gallery\/antiko-1l_0.png","order":3},{"title":{"en":"Title 355","ru":"Title 355"},"categoryId":1,"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/251West117thStreet\/gallery\/Model - dreams files.png","order":4},{"title":{"en":"Image 7","ru":"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 7"},"categoryId":1,"imageUrl":"https:\/\/dreamseu.z6.web.core.windows.net\/251West117thStreet\/gallery\/0_1.jpg","order":6}];

const lang = 'en';

const galleryData = categoriesData.map((el) => {
    el.images = imgData.filter(imgEl => imgEl.categoryId === el.categoryId);
    return el;
});

console.log(galleryData);


let canvasClass = 'bmby-gallery';

let hasUbuntuFont = false;

let galleries = [];

let mode = 'dev';

try{
    callbackFunction();
} catch (e) {
    if(mode === 'dev'){
        console.log('unable to run callback');
    }
}

// add galleries on document load
window.addEventListener("load", function (event) {
    let containers = document.getElementsByClassName(canvasClass);
    if(containers !== undefined && containers.length > 0) {
        for(let container of containers) {
            galleries.push(new GalleryBuilder(container, galleryData, canvasClass));
        }
    }
});

// on changing page orientation we reinit sliders to set 3 or 1 image showing depending on the page's size
window.addEventListener("orientationchange", function (event) {
    galleries.forEach((item) => {
        item.initSlider();
    });
});

// add function to be able search in HTMLCollection by class name
HTMLCollection.prototype.forEach = Array.prototype.forEach;

HTMLCollection.prototype.getElementsByClassName = function( name ){
    var all = [];
    this.forEach( function( el ){
        if( el )
            all.concat( el.getElementsByClassName( name ) );
    });
    return all;
};

// this class builds gallery on container and gallery data
class GalleryBuilder {
    constructor(container, galleryData, canvasClass) {

        this.glider = undefined;

        this.container = container;
        this.galleryData = galleryData;
        this.canvasClass = canvasClass;
        this.container.id = mode === 'prod' ? this.makeId(9) : 'page-insert-elem-27637';
        this.gliderClass =this.makeId(9);
        this.gliderDotsClass = this.makeId(4);
        this.initBaseDomSkeleton();

        this.initSlider();

        this.insertMenuData();

        if (!hasUbuntuFont) {
            this.addUbuntuFont();
            this.addStyles();
            hasUbuntuFont = true;
        }

        return this;
    }

    // insert menu items using galleryData data
    insertMenuData() {
        if (!Array.isArray(this.galleryData) || this.galleryData.length === 0) {
            return false;
        }

        // at the start we have 1 menu item
        // we will clone it
        // to make necessary menu items
        let menuItem = this.container.getElementsByClassName('elem-menu')[0];

        menuItem.textContent = galleryData[0]['name'];

        galleryData.forEach((el, index) => {
            // if first, use base menu item, else clone and create new
            let newMenuItem;
            if (index === 0) {
                newMenuItem = menuItem;
                this.updateMainData(el)
            } else {
                newMenuItem = menuItem.cloneNode(true);
                // set active false
                newMenuItem.classList.remove('active')
            }
            newMenuItem.dataset.index = index;
            // set text
            newMenuItem.textContent = el['name'];

            menuItem.after(newMenuItem);

            menuItem = newMenuItem;
        })
    }

    // creates glider slider or redefines sliderToShow count
    initSlider() {
        let slidesCount = 1;
        if (window.screen.width > 1199) {
            slidesCount = 1;

            if (!this.glider) {

                this.glider = new Glider(this.container.querySelector('.' + this.gliderClass), {
                    slidesToShow: slidesCount,
                    slidesToScroll: 1,
                    dots: "." + this.gliderDotsClass,
                    arrows: {
                        prev: '.glider-prev',
                        next: '.glider-next'
                    }
                });
            } else if(this.glider) {
                this.glider.setOption({slidesToShow: slidesCount})
            }
        }
    }

    // on tab click, changes the content
    updateMainData(data) {
        this.cleanPreviousImages();

        data.images.forEach((el, index) => {
            let elem = document.createElement('div');
            elem.innerHTML = '<div class="slider-img" style="background: url(' +  encodeURI(el['imageUrl']) + ') 50% 50% no-repeat;background-size: cover" onclick="makeFullScrean(this)" ></div>';
            if(this.glider){
                this.glider.addItem(elem);
            } else {
                let imgContainer = document.getElementsByClassName(this.gliderClass)[0];
                imgContainer.appendChild(elem)
                //imgContainer.insertAdjacentHTML('afterbegin', elem.toString());

            }

        });

        setTimeout(() => {
            if (!this.glider) {
                this.initSlider();
            } else {
                this.glider.refresh(true);
            }
        }, 10)

    }

    initBaseDomSkeleton(){
        this.container.insertAdjacentHTML('afterbegin',this.getElementBaseDom(this.container.id));
    }

    getId(){
        return this.container.id;
    }

    // this is the HTML skeleton that has to be inserted in the container
    // menu items will be cloned to change them depending on the galleryData array
    // containerId it is generated id of a container where we insert the gallery
    // this id is generated to have difference between containers
    // when we insert the gallery by the container class
    // we can insert the gallery in more than one container
    getElementBaseDom(containerId) {

        return "<div class=\"section-outer main-content\">\n" +
            "    <div class=\"section-inner\">\n" +
            "        <div class=\"menu\">\n" +
            "            <div class=\"elem-menu active\" onclick=\"switchTab(this, '"+ containerId +"')\"></div>\n" +
            "        </div>\n" +
            "        <div class=\"slider-container\">\n" +
            "            <div class=\"glider-contain\">\n" +
            "                <div class=\"img-container "+ this.gliderClass+"\">\n" +
            "                </div>\n" +
            "                <button aria-label=\"Previous\" class=\"glider-prev\">\<</button>"+
            "                <button aria-label=\"Next\" class=\"glider-next\">\></button>"+
            "                <div role=\"tablist\" class=\""+this.gliderDotsClass+"\"></div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</div>";
    }

    addUbuntuFont() {
        document.head.innerHTML += '<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500&display=swap" rel="stylesheet">';
    }

    cleanPreviousImages() {
        if(this.glider !== undefined){
            let slides = this.glider.slides.length;
            for (let i = 0; i < slides; i++) {
                this.glider.removeItem(0);
            }
        } else {
            let imgContainer = document.getElementsByClassName(this.gliderClass)[0];
            imgContainer.innerHTML = '';
        }
    }

    makeId(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return "id" + result;
    }

    addStyles() {

        if(mode === 'prod'){
            let baseStyle = ".font-ubuntu{font-family:Ubuntu,sans-serif}#page-insert-elem-27636.rtl{text-align:right;direction:rtl}#page-insert-elem-27636.rtl .content .main-content .section-inner .menu{flex-direction:column-reverse}#page-insert-elem-27636.rtl .content .main-content .content-el{padding-right:16px;padding-left:0}#page-insert-elem-27636.rtl .glider-dots{direction:ltr}#page-insert-elem-27636.rtl .header{flex-direction:row-reverse}#page-insert-elem-27637.rtl{text-align:right;direction:rtl}#page-insert-elem-27637.rtl .content .main-content .section-inner .menu{flex-direction:column-reverse}#page-insert-elem-27637.rtl .content .main-content .content-el{padding-right:16px;padding-left:0}#page-insert-elem-27637.rtl .glider-dots{direction:ltr}#page-insert-elem-27637.rtl .header{flex-direction:row-reverse}#page-insert-elem-27636{/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */font-family:Ubuntu,sans-serif}#page-insert-elem-27636 html{line-height:1.15;-webkit-text-size-adjust:100%}#page-insert-elem-27636 body{margin:0}#page-insert-elem-27636 main{display:block}#page-insert-elem-27636 h1{font-size:2em;margin:.67em 0}#page-insert-elem-27636 hr{box-sizing:content-box;height:0;overflow:visible}#page-insert-elem-27636 pre{font-family:monospace,monospace;font-size:1em}#page-insert-elem-27636 a{background-color:transparent}#page-insert-elem-27636 abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}#page-insert-elem-27636 b,#page-insert-elem-27636 strong{font-weight:bolder}#page-insert-elem-27636 code,#page-insert-elem-27636 kbd,#page-insert-elem-27636 samp{font-family:monospace,monospace;font-size:1em}#page-insert-elem-27636 small{font-size:80%}#page-insert-elem-27636 sub,#page-insert-elem-27636 sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}#page-insert-elem-27636 sub{bottom:-.25em}#page-insert-elem-27636 sup{top:-.5em}#page-insert-elem-27636 img{border-style:none}#page-insert-elem-27636 button,#page-insert-elem-27636 input,#page-insert-elem-27636 optgroup,#page-insert-elem-27636 select,#page-insert-elem-27636 textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}#page-insert-elem-27636 button,#page-insert-elem-27636 input{overflow:visible}#page-insert-elem-27636 button,#page-insert-elem-27636 select{text-transform:none}#page-insert-elem-27636 [type=button],#page-insert-elem-27636 [type=reset],#page-insert-elem-27636 [type=submit],#page-insert-elem-27636 button{-webkit-appearance:button}#page-insert-elem-27636 [type=button]::-moz-focus-inner,#page-insert-elem-27636 [type=reset]::-moz-focus-inner,#page-insert-elem-27636 [type=submit]::-moz-focus-inner,#page-insert-elem-27636 button::-moz-focus-inner{border-style:none;padding:0}#page-insert-elem-27636 [type=button]:-moz-focusring,#page-insert-elem-27636 [type=reset]:-moz-focusring,#page-insert-elem-27636 [type=submit]:-moz-focusring,#page-insert-elem-27636 button:-moz-focusring{outline:1px dotted ButtonText}#page-insert-elem-27636 fieldset{padding:.35em .75em .625em}#page-insert-elem-27636 legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}#page-insert-elem-27636 progress{vertical-align:baseline}#page-insert-elem-27636 textarea{overflow:auto}#page-insert-elem-27636 [type=checkbox],#page-insert-elem-27636 [type=radio]{box-sizing:border-box;padding:0}#page-insert-elem-27636 [type=number]::-webkit-inner-spin-button,#page-insert-elem-27636 [type=number]::-webkit-outer-spin-button{height:auto}#page-insert-elem-27636 [type=search]{-webkit-appearance:textfield;outline-offset:-2px}#page-insert-elem-27636 [type=search]::-webkit-search-decoration{-webkit-appearance:none}#page-insert-elem-27636 ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}#page-insert-elem-27636 details{display:block}#page-insert-elem-27636 summary{display:list-item}#page-insert-elem-27636 template{display:none}#page-insert-elem-27636 [hidden]{display:none}#page-insert-elem-27636 .section-outer{padding-left:38px;padding-right:30px}#page-insert-elem-27636 .section-outer .section-inner{display:flex;width:100%;margin:0 auto}#page-insert-elem-27636 .section-outer .section-inner .menu{box-shadow:0 0 2px 0 rgba(0,0,0,.05);margin-top:36px;overflow-y:hidden;margin-bottom:21px}#page-insert-elem-27636 .section-outer .section-inner .menu .content-el{padding:0 16px}#page-insert-elem-27636 .section-outer .section-inner .menu .elem-menu{text-align:center;vertical-align:middle;justify-content:center;padding:14px 0;background-color:#fff;cursor:pointer;height:20px;margin-bottom:16px;font-size:16px;line-height:18px;font-weight:500;color:silver}#page-insert-elem-27636 .section-outer .section-inner .menu .active{border-bottom:2px solid #1a2f43;color:#1a2f43;transition:.5s}#page-insert-elem-27636 .section-outer .section-inner .content-el{padding:0 16px;margin-top:29px}#page-insert-elem-27636 .section-outer .section-inner .content-el .text{width:300px;font-size:18px;line-height:21px;font-weight:500;color:#1a2f43}#page-insert-elem-27636 .section-outer .section-inner .content-el .subheader{font-size:14px;font-weight:300;color:#1a2f43;margin-bottom:24px;line-height:20px}#page-insert-elem-27636 .section-outer .section-inner .content-el.active{display:block}@media only screen and (max-width:575px){#page-insert-elem-27636 .section-outer{padding:0 16px}#page-insert-elem-27636 .section-outer .section-inner{flex-direction:column}#page-insert-elem-27636 .section-outer .section-inner .menu{display:flex;align-items:center;margin-top:10px;margin-bottom:0}#page-insert-elem-27636 .section-outer .section-inner .menu .elem-menu{display:inline-block;width:114px;margin:0 auto}#page-insert-elem-27636 .section-outer .section-inner .content-el{margin-top:12px}#page-insert-elem-27636 .header .title{width:100%;height:22px}#page-insert-elem-27636 .main-content img{width:100%}#page-insert-elem-27636 .main-content .text{width:100%}#page-insert-elem-27636 .main-content .subheader{width:100%}}@media only screen and (min-width:576px){#page-insert-elem-27636 .main-content{display:flex;margin:0 auto}#page-insert-elem-27636 .main-content .section-inner .menu .elem-menu{width:114px}#page-insert-elem-27636 .main-content .section-inner .content-el{width:100%}#page-insert-elem-27636 .main-content .section-inner .content-el img{width:100%}#page-insert-elem-27636 .main-content .section-inner .content-el .subheader{width:100%;display:flex;margin-bottom:24px}#page-insert-elem-27636 .main-content .section-inner .content-el .text{width:100%;height:21px}}#page-insert-elem-27637{font-family:Ubuntu,sans-serif}#page-insert-elem-27637 .glider-contain{width:100%;margin:0 auto;position:relative}#page-insert-elem-27637 .glider{margin:0 auto;position:relative;overflow-y:hidden;-webkit-overflow-scrolling:touch;-ms-overflow-style:none;transform:translateZ(0)}#page-insert-elem-27637 .glider-track{transform:translateZ(0);width:100%;margin:0;padding:0;display:flex;z-index:1}#page-insert-elem-27637 .glider.draggable{user-select:none;cursor:-webkit-grab;cursor:grab}#page-insert-elem-27637 .glider.draggable .glider-slide img{user-select:none;pointer-events:none}#page-insert-elem-27637 .glider.drag{cursor:-webkit-grabbing;cursor:grabbing}#page-insert-elem-27637 .glider-slide{user-select:none;justify-content:center;align-content:center;width:100%}#page-insert-elem-27637 .glider-slide img{max-width:100%}#page-insert-elem-27637 .glider::-webkit-scrollbar{opacity:0;height:0}#page-insert-elem-27637 .glider-next,#page-insert-elem-27637 .glider-prev{user-select:none;position:absolute;outline:0;background:0 0;padding:0;z-index:2;font-size:40px;text-decoration:none;left:-23px;border:0;top:30%;cursor:pointer;color:#666;opacity:1;line-height:1;transition:opacity .5s cubic-bezier(.17,.67,.83,.67),color .5s cubic-bezier(.17,.67,.83,.67)}#page-insert-elem-27637 .glider-next:focus,#page-insert-elem-27637 .glider-next:hover,#page-insert-elem-27637 .glider-prev:focus,#page-insert-elem-27637 .glider-prev:hover{color:#000}#page-insert-elem-27637 .glider-next{right:-23px;left:auto}#page-insert-elem-27637 .glider-next.disabled,#page-insert-elem-27637 .glider-prev.disabled{opacity:.25;color:#666;cursor:default}#page-insert-elem-27637 .glider-slide{min-width:150px}#page-insert-elem-27637 .glider-hide{opacity:0}#page-insert-elem-27637 .glider-dots{user-select:none;display:flex;flex-wrap:wrap;justify-content:left;margin:60px auto 10px;padding:0}#page-insert-elem-27637 .glider-dot{border:0;padding:0;user-select:none;outline:0;display:block;cursor:pointer;color:#ccc;border-radius:999px;background:#ccc;width:6px;height:6px;margin:7px}#page-insert-elem-27637 .glider-dot.active,#page-insert-elem-27637 .glider-dot:focus,#page-insert-elem-27637 .glider-dot:hover{background:#000}@media (max-width:36em){#page-insert-elem-27637 .glider::-webkit-scrollbar{opacity:1;-webkit-appearance:none;width:7px;height:3px}#page-insert-elem-27637 .glider::-webkit-scrollbar-thumb{opacity:1;border-radius:99px;background-color:rgba(156,156,156,.25);box-shadow:0 0 1px rgba(255,255,255,.25)}}#page-insert-elem-27637 .glider-prev{top:98%;left:60%;font-size:20px;color:#000}#page-insert-elem-27637 .glider-next{top:98%;left:63%;font-size:20px;color:#000}#page-insert-elem-27637 .section-outer{padding-right:4%;padding-left:4%}#page-insert-elem-27637 .section-outer .section-inner{display:flex;width:100%;margin:0 auto}#page-insert-elem-27637 .section-outer .section-inner .menu{box-shadow:0 0 2px 0 rgba(0,0,0,.05);margin-top:36px;overflow-y:hidden;margin-bottom:21px}#page-insert-elem-27637 .section-outer .section-inner .menu .content-el{padding:0 16px}#page-insert-elem-27637 .section-outer .section-inner .menu .elem-menu{text-align:center;vertical-align:middle;justify-content:center;padding:14px 0;background-color:#fff;cursor:pointer;height:20px;margin-bottom:16px;font-size:16px;line-height:18px;font-weight:500;color:silver}#page-insert-elem-27637 .section-outer .section-inner .menu .active{border-bottom:2px solid #1a2f43;color:#1a2f43;transition:.5s}#page-insert-elem-27637 .section-outer .section-inner .content-el{padding:0 16px;margin-top:29px}#page-insert-elem-27637 .section-outer .section-inner .content-el .text{width:300px;font-size:18px;line-height:21px;font-weight:500;color:#1a2f43}#page-insert-elem-27637 .section-outer .section-inner .content-el .subheader{font-size:14px;font-weight:300;color:#1a2f43;margin-bottom:24px;line-height:20px}#page-insert-elem-27637 .section-outer .section-inner .content-el.active{display:block}#page-insert-elem-27637 .section-outer .section-inner{flex-direction:column}#page-insert-elem-27637 .section-outer .section-inner .menu{display:flex;align-items:start;margin-top:10px;margin-bottom:0}#page-insert-elem-27637 .section-outer .section-inner .menu .elem-menu{display:inline-block;padding:12px}#page-insert-elem-27637 .section-outer .section-inner .content-el{margin-top:12px}#page-insert-elem-27637 .header .title{width:100%;height:22px}#page-insert-elem-27637 .main-content img{width:100%}#page-insert-elem-27637 .main-content .text{width:100%}#page-insert-elem-27637 .main-content .subheader{width:100%}#page-insert-elem-27637 .slider-container{padding-top:40px;width:75%;position:relative;margin:0 auto;vertical-align:baseline}#page-insert-elem-27637 .slider-img{background-repeat:no-repeat;background-position:50% 50%;width:100%;background-size:cover;cursor:pointer}#page-insert-elem-27637 .slider-img:after{content:\"\";display:block;padding-bottom:100%}#page-insert-elem-27637 .slider-container{width:100%}@media only screen and (max-width:767px){#page-insert-elem-27637 .section-outer{padding:0}#page-insert-elem-27637 .section-outer .section-inner .menu .elem-menu{margin-bottom:0}#page-insert-elem-27637 .section-outer .slider-container{padding-top:0;height:93vh;overflow-y:scroll}#page-insert-elem-27637 .section-outer .slider-container .glider-contain .slider-img{margin-bottom:8px}}@media only screen and (max-width:767px) and (orientation:portrait){#page-insert-elem-27637 .glider-next,#page-insert-elem-27637 .glider-prev{display:none}#page-insert-elem-27637 .section-outer .slider-container{height:93vh;overflow-y:scroll}#page-insert-elem-27637 .section-outer .slider-container .glider-contain .slider-img{margin-bottom:8px}}@media only screen and (max-height:767px) and (orientation:landscape){#page-insert-elem-27637 .glider-next,#page-insert-elem-27637 .glider-prev{display:none}#page-insert-elem-27637 .section-outer{padding-left:40px;padding-right:0}#page-insert-elem-27637 .section-outer .section-inner .menu .elem-menu{margin-bottom:0}#page-insert-elem-27637 .section-outer .slider-container{padding-top:0}#page-insert-elem-27637 .section-outer .slider-container .glider-contain .img-container{display:flex;overflow-x:scroll}#page-insert-elem-27637 .section-outer .slider-container .glider-contain .img-container .slider-img{height:69vh;width:69vh;margin-right:8px}}";
            let preparedStyle = baseStyle.replace(/#page-insert-elem-27637/g, "." + this.canvasClass);
            // here we add generated glider dots class to the styles, because we need to have an unique class for each
            // glider dots, and we need also apply styles for rtl or ltr orientation for the dots
            preparedStyle = preparedStyle.replace(/.glider-dots/g, ".glider-dots, ." + this.gliderDotsClass);
            document.head.innerHTML += '<style>' +
                preparedStyle +
                '</style>';
        } else {
            document.head.innerHTML += '<link rel="stylesheet" href="css/main.css">'
        }

    }
}

function switchTab(newTab, containerId) {
    let container = document.getElementById(containerId);
    let allTabs = container.querySelectorAll('.elem-menu');
    for(let tab of allTabs) {
            tab.classList.remove('active');
    }
    galleries.forEach((item) => {
        if(item.getId() === containerId) {
            item.updateMainData(galleryData[newTab.dataset.index])
        }
    });
    newTab.classList.add('active');
}

function makeFullScrean(divObj) {
    //Use the specification method before using prefixed versions
    if (divObj.requestFullscreen) {
        divObj.requestFullscreen();
    } else if (divObj.msRequestFullscreen) {
        divObj.msRequestFullscreen();
    } else if (divObj.mozRequestFullScreen) {
        divObj.mozRequestFullScreen();
    } else if (divObj.webkitRequestFullscreen) {
        divObj.webkitRequestFullscreen();
    } else {
        console.log("Fullscreen API is not supported");
    }
}

// on changing page orientation we re define glider items count



/* @preserve
    _____ __ _     __                _
   / ___// /(_)___/ /___  ____      (_)___
  / (_ // // // _  // -_)/ __/_    / /(_-<
  \___//_//_/ \_,_/ \__//_/  (_)__/ //___/
                              |___/

  Version: 1.7.4
  Author: Nick Piscitelli (pickykneee)
  Website: https://nickpiscitelli.com
  Documentation: http://nickpiscitelli.github.io/Glider.js
  License: MIT License
  Release Date: October 25th, 2018

*/

/* global define */

(function (factory) {
    typeof define === 'function' && define.amd
        ? define(factory)
        : typeof exports === 'object'
        ? (module.exports = factory())
        : factory()
})(function () {
    ('use strict') // eslint-disable-line no-unused-expressions

    /* globals window:true */
    var _window = typeof window !== 'undefined' ? window : this

    var Glider = (_window.Glider = function (element, settings) {
        var _ = this

        if (element._glider) return element._glider

        _.ele = element
        _.ele.classList.add('glider')

        // expose glider object to its DOM element
        _.ele._glider = _

        // merge user setting with defaults
        _.opt = Object.assign(
            {},
            {
                slidesToScroll: 1,
                slidesToShow: 1,
                resizeLock: true,
                duration: 0.5,
                // easeInQuad
                easing: function (x, t, b, c, d) {
                    return c * (t /= d) * t + b
                }
            },
            settings
        )

        // set defaults
        _.animate_id = _.page = _.slide = 0
        _.arrows = {}

        // preserve original options to
        // extend breakpoint settings
        _._opt = _.opt

        if (_.opt.skipTrack) {
            // first and only child is the track
            _.track = _.ele.children[0]
        } else {
            // create track and wrap slides
            _.track = document.createElement('div')
            _.ele.appendChild(_.track)
            while (_.ele.children.length !== 1) {
                _.track.appendChild(_.ele.children[0])
            }
        }

        _.track.classList.add('glider-track')

        // start glider
        _.init()

        // set events
        _.resize = _.init.bind(_, true)
        _.event(_.ele, 'add', {
            scroll: _.updateControls.bind(_)
        })
        _.event(_window, 'add', {
            resize: _.resize
        })
    })

    var gliderPrototype = Glider.prototype
    gliderPrototype.init = function (refresh, paging) {
        var _ = this

        var width = 0

        var height = 0

        _.slides = _.track.children;

        [].forEach.call(_.slides, function (_) {
            _.classList.add('glider-slide')
        })

        _.containerWidth = _.ele.clientWidth

        var breakpointChanged = _.settingsBreakpoint()
        if (!paging) paging = breakpointChanged

        if (
            _.opt.slidesToShow === 'auto' ||
            typeof _.opt._autoSlide !== 'undefined'
        ) {
            var slideCount = _.containerWidth / _.opt.itemWidth

            _.opt._autoSlide = _.opt.slidesToShow = _.opt.exactWidth
                ? slideCount
                : Math.floor(slideCount)
        }
        if (_.opt.slidesToScroll === 'auto') {
            _.opt.slidesToScroll = Math.floor(_.opt.slidesToShow)
        }

        _.itemWidth = _.opt.exactWidth
            ? _.opt.itemWidth
            : _.containerWidth / _.opt.slidesToShow;

        // set slide dimensions
        [].forEach.call(_.slides, function (__) {
            __.style.height = 'auto'
            __.style.width = _.itemWidth + 'px'
            width += _.itemWidth
            height = Math.max(__.offsetHeight, height)
        })

        _.track.style.width = width + 'px'
        _.trackWidth = width
        _.isDrag = false
        _.preventClick = false

        _.opt.resizeLock && _.scrollTo(_.slide * _.itemWidth, 0)

        if (breakpointChanged || paging) {
            _.bindArrows()
            _.buildDots()
            _.bindDrag()
        }

        _.updateControls()

        _.emit(refresh ? 'refresh' : 'loaded')
    }

    gliderPrototype.bindDrag = function () {
        var _ = this
        _.mouse = _.mouse || _.handleMouse.bind(_)

        var mouseup = function () {
            _.mouseDown = undefined
            _.ele.classList.remove('drag')
            if (_.isDrag) {
                _.preventClick = true
            }
            _.isDrag = false
        }

        var events = {
            mouseup: mouseup,
            mouseleave: mouseup,
            mousedown: function (e) {
                e.preventDefault()
                e.stopPropagation()
                _.mouseDown = e.clientX
                _.ele.classList.add('drag')
            },
            mousemove: _.mouse,
            click: function (e) {
                if (_.preventClick) {
                    e.preventDefault()
                    e.stopPropagation()
                }
                _.preventClick = false
            }
        }

        _.ele.classList.toggle('draggable', _.opt.draggable === true)
        _.event(_.ele, 'remove', events)
        if (_.opt.draggable) _.event(_.ele, 'add', events)
    }

    gliderPrototype.buildDots = function () {
        var _ = this

        if (!_.opt.dots) {
            if (_.dots) _.dots.innerHTML = ''
            return
        }

        if (typeof _.opt.dots === 'string') {
            _.dots = document.querySelector(_.opt.dots)
        } else _.dots = _.opt.dots
        if (!_.dots) return

        _.dots.innerHTML = ''
        _.dots.classList.add('glider-dots')

        for (var i = 0; i < Math.ceil(_.slides.length / _.opt.slidesToShow); ++i) {
            var dot = document.createElement('button')
            dot.dataset.index = i
            dot.setAttribute('aria-label', 'Page ' + (i + 1))
            dot.className = 'glider-dot ' + (i ? '' : 'active')
            _.event(dot, 'add', {
                click: _.scrollItem.bind(_, i, true)
            })
            _.dots.appendChild(dot)
        }
    }

    gliderPrototype.bindArrows = function () {
        var _ = this
        if (!_.opt.arrows) {
            Object.keys(_.arrows).forEach(function (direction) {
                var element = _.arrows[direction]
                _.event(element, 'remove', {click: element._func})
            })
            return
        }
        ['prev', 'next'].forEach(function (direction) {
            var arrow = _.opt.arrows[direction]
            if (arrow) {
                if (typeof arrow === 'string') arrow = document.querySelector(arrow)
                arrow._func = arrow._func || _.scrollItem.bind(_, direction)
                _.event(arrow, 'remove', {
                    click: arrow._func
                })
                _.event(arrow, 'add', {
                    click: arrow._func
                })
                _.arrows[direction] = arrow
            }
        })
    }

    gliderPrototype.updateControls = function (event) {
        var _ = this

        if (event && !_.opt.scrollPropagate) {
            event.stopPropagation()
        }

        var disableArrows = _.containerWidth >= _.trackWidth

        if (!_.opt.rewind) {
            if (_.arrows.prev) {
                _.arrows.prev.classList.toggle(
                    'disabled',
                    _.ele.scrollLeft <= 0 || disableArrows
                )
            }
            if (_.arrows.next) {
                _.arrows.next.classList.toggle(
                    'disabled',
                    Math.ceil(_.ele.scrollLeft + _.containerWidth) >=
                    Math.floor(_.trackWidth) || disableArrows
                )
            }
        }

        _.slide = Math.round(_.ele.scrollLeft / _.itemWidth)
        _.page = Math.round(_.ele.scrollLeft / _.containerWidth)

        var middle = _.slide + Math.floor(Math.floor(_.opt.slidesToShow) / 2)

        var extraMiddle = Math.floor(_.opt.slidesToShow) % 2 ? 0 : middle + 1
        if (Math.floor(_.opt.slidesToShow) === 1) {
            extraMiddle = 0
        }

        // the last page may be less than one half of a normal page width so
        // the page is rounded down. when at the end, force the page to turn
        if (_.ele.scrollLeft + _.containerWidth >= Math.floor(_.trackWidth)) {
            _.page = _.dots ? _.dots.children.length - 1 : 0
        }

        [].forEach.call(_.slides, function (slide, index) {
            var slideClasses = slide.classList

            var wasVisible = slideClasses.contains('visible')

            var start = _.ele.scrollLeft

            var end = _.ele.scrollLeft + _.containerWidth

            var itemStart = _.itemWidth * index

            var itemEnd = itemStart + _.itemWidth;

            [].forEach.call(slideClasses, function (className) {
                /^left|right/.test(className) && slideClasses.remove(className)
            })
            slideClasses.toggle('active', _.slide === index)
            if (middle === index || (extraMiddle && extraMiddle === index)) {
                slideClasses.add('center')
            } else {
                slideClasses.remove('center')
                slideClasses.add(
                    [
                        index < middle ? 'left' : 'right',
                        Math.abs(index - (index < middle ? middle : extraMiddle || middle))
                    ].join('-')
                )
            }

            var isVisible =
                Math.ceil(itemStart) >= start && Math.floor(itemEnd) <= end
            slideClasses.toggle('visible', isVisible)
            if (isVisible !== wasVisible) {
                _.emit('slide-' + (isVisible ? 'visible' : 'hidden'), {
                    slide: index
                })
            }
        })
        if (_.dots) {
            [].forEach.call(_.dots.children, function (dot, index) {
                dot.classList.toggle('active', _.page === index)
            })
        }

        if (event && _.opt.scrollLock) {
            clearTimeout(_.scrollLock)
            _.scrollLock = setTimeout(function () {
                clearTimeout(_.scrollLock)
                // dont attempt to scroll less than a pixel fraction - causes looping
                if (Math.abs(_.ele.scrollLeft / _.itemWidth - _.slide) > 0.02) {
                    if (!_.mouseDown) {
                        // Only scroll if not at the end (#94)
                        if (_.trackWidth > _.containerWidth + _.ele.scrollLeft) {
                            _.scrollItem(_.getCurrentSlide())
                        }
                    }
                }
            }, _.opt.scrollLockDelay || 250)
        }
    }

    gliderPrototype.getCurrentSlide = function () {
        var _ = this
        return _.round(_.ele.scrollLeft / _.itemWidth)
    }

    gliderPrototype.scrollItem = function (slide, dot, e) {
        if (e) e.preventDefault()

        var _ = this

        var originalSlide = slide
        ++_.animate_id

        if (dot === true) {
            slide = slide * _.containerWidth
            slide = Math.round(slide / _.itemWidth) * _.itemWidth
        } else {
            if (typeof slide === 'string') {
                var backwards = slide === 'prev'

                // use precise location if fractional slides are on
                if (_.opt.slidesToScroll % 1 || _.opt.slidesToShow % 1) {
                    slide = _.getCurrentSlide()
                } else {
                    slide = _.slide
                }

                if (backwards) slide -= _.opt.slidesToScroll
                else slide += _.opt.slidesToScroll

                if (_.opt.rewind) {
                    var scrollLeft = _.ele.scrollLeft
                    slide =
                        backwards && !scrollLeft
                            ? _.slides.length
                            : !backwards &&
                            scrollLeft + _.containerWidth >= Math.floor(_.trackWidth)
                            ? 0
                            : slide
                }
            }

            slide = Math.max(Math.min(slide, _.slides.length), 0)

            _.slide = slide
            slide = _.itemWidth * slide
        }

        _.scrollTo(
            slide,
            _.opt.duration * Math.abs(_.ele.scrollLeft - slide),
            function () {
                _.updateControls()
                _.emit('animated', {
                    value: originalSlide,
                    type:
                        typeof originalSlide === 'string' ? 'arrow' : dot ? 'dot' : 'slide'
                })
            }
        )

        return false
    }

    gliderPrototype.settingsBreakpoint = function () {
        var _ = this

        var resp = _._opt.responsive

        if (resp) {
            // Sort the breakpoints in mobile first order
            resp.sort(function (a, b) {
                return b.breakpoint - a.breakpoint
            })

            for (var i = 0; i < resp.length; ++i) {
                var size = resp[i]
                if (_window.innerWidth >= size.breakpoint) {
                    if (_.breakpoint !== size.breakpoint) {
                        _.opt = Object.assign({}, _._opt, size.settings)
                        _.breakpoint = size.breakpoint
                        return true
                    }
                    return false
                }
            }
        }
        // set back to defaults in case they were overriden
        var breakpointChanged = _.breakpoint !== 0
        _.opt = Object.assign({}, _._opt)
        _.breakpoint = 0
        return breakpointChanged
    }

    gliderPrototype.scrollTo = function (scrollTarget, scrollDuration, callback) {
        var _ = this

        var start = new Date().getTime()

        var animateIndex = _.animate_id

        var animate = function () {
            var now = new Date().getTime() - start
            _.ele.scrollLeft =
                _.ele.scrollLeft +
                (scrollTarget - _.ele.scrollLeft) *
                _.opt.easing(0, now, 0, 1, scrollDuration)
            if (now < scrollDuration && animateIndex === _.animate_id) {
                _window.requestAnimationFrame(animate)
            } else {
                _.ele.scrollLeft = scrollTarget
                callback && callback.call(_)
            }
        }

        _window.requestAnimationFrame(animate)
    }

    gliderPrototype.removeItem = function (index) {
        var _ = this

        if (_.slides.length) {
            _.track.removeChild(_.slides[index])
            _.refresh(true)
            _.emit('remove')
        }
    }

    gliderPrototype.addItem = function (ele) {
        var _ = this

        _.track.appendChild(ele)
        _.refresh(true)
        _.emit('add')
    }

    gliderPrototype.handleMouse = function (e) {
        var _ = this
        if (_.mouseDown) {
            _.isDrag = true
            _.ele.scrollLeft +=
                (_.mouseDown - e.clientX) * (_.opt.dragVelocity || 3.3)
            _.mouseDown = e.clientX
        }
    }

    // used to round to the nearest 0.XX fraction
    gliderPrototype.round = function (double) {
        var _ = this
        var step = _.opt.slidesToScroll % 1 || 1
        var inv = 1.0 / step
        return Math.round(double * inv) / inv
    }

    gliderPrototype.refresh = function (paging) {
        var _ = this
        _.init(true, paging)
    }

    gliderPrototype.setOption = function (opt, global) {
        var _ = this

        if (_.breakpoint && !global) {
            _._opt.responsive.forEach(function (v) {
                if (v.breakpoint === _.breakpoint) {
                    v.settings = Object.assign({}, v.settings, opt)
                }
            })
        } else {
            _._opt = Object.assign({}, _._opt, opt)
        }

        _.breakpoint = 0
        _.settingsBreakpoint()
    }

    gliderPrototype.destroy = function () {
        var _ = this

        var replace = _.ele.cloneNode(true)

        var clear = function (ele) {
            ele.removeAttribute('style');
            [].forEach.call(ele.classList, function (className) {
                /^glider/.test(className) && ele.classList.remove(className)
            })
        }
        // remove track
        replace.children[0].outerHTML = replace.children[0].innerHTML
        clear(replace);
        [].forEach.call(replace.getElementsByTagName('*'), clear)
        _.ele.parentNode.replaceChild(replace, _.ele)
        _.event(_window, 'remove', {
            resize: _.resize
        })
        _.emit('destroy')
    }

    gliderPrototype.emit = function (name, arg) {
        var _ = this

        var e = new _window.CustomEvent('glider-' + name, {
            bubbles: !_.opt.eventPropagate,
            detail: arg
        })
        _.ele.dispatchEvent(e)
    }

    gliderPrototype.event = function (ele, type, args) {
        var eventHandler = ele[type + 'EventListener'].bind(ele)
        Object.keys(args).forEach(function (k) {
            eventHandler(k, args[k])
        })
    }

    return Glider
})