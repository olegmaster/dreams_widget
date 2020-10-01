let aboutUsData = [
  {"title":[{"lang":"en","value":"The Developers"},{"lang":"he","value":"היזמים"},{"lang":"ru","value":"The Developers"},{"lang":"ua","value":"The Project"}],"description":[{"lang":"en","value":"“Odessa 2020 Arcadia” Project was established by   Green Park Entrepreneurship and Construction – an Israeli company with a decade of experience building a large number of projects in Israel and worldwide, while specializing in Eastern Europe region.\n" +
            " The project is supervised by an Israeli construction inspector, Mr. Shlomo Yaffe, and designed by an Israeli architect, Mr. Assaf Shaul – co-owner of CPSL architectural firm. The project also features an Israeli management company led by Mr. David Maor, and a trustee for investors’ funds – Fischer, Behar, Chen & Co. law firm, which releases the funds according to construction progress and subject to the approval of the inspection company."},{"lang":"he","value":"פרויקט אודסה 2020 ארקדיה הוקם על ידי  החברה הישראלית גרין פארק יזמות ובניה, היוזמת ובונה למעלה מ-10 שנים מספר רב של פרויקטים בישראל ובעולם, עם התמחות במזרח אירופה.\n" +
            "לפרויקט מפקח בניה ישראלי מר שלמה יפה, אדריכל ישראלי מר אסף שאול, מבעלי חברת האדריכלים CPSL, חברת ניהול" +
            " ישראלית בניהולו של מר דוד מאור ( מנהלים עשרות פרויקטים ברחבי אוקראינה), ונאמן לכספי המשקיעים משרד עורכי הדין פישר בכר חן, שמשחרר את הכספים לפי קצב התקדמות הבניה ורק בכפוף לאישור חברת הפיקוח.\n"},{"lang":"ru","value":""},{"lang":"ua","value":""}],"chapter":[{"lang":"en","value":"The Developers"},{"lang":"he","value":"היזמים"},{"lang":"ru","value":"The Developers"},{"lang":"ua","value":"The Developers"}],"imageUrl":"https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/projectassets\/Develop\/dev_2.png","order":0},
    ];


let canvasClass = 'bmby-about-wrapp';
let lang = 'en';
const dir = 'ltr';
let hasUbuntuFont = false;
let aboutUsSections = [];
let mode = 'dev';
let aboutUsMainContainer;
const imageDark = 'https:\/\/dreamsimages.bmby.com\/new\/dev\/odessa2020\/projectassets\/Develop\/dev_1.png';
let activeTabInd;

try{
    callbackFunction();
} catch (e) {
    if(mode === 'dev'){
        console.log('unable to run callback');
    }
}

// add about us on document load
window.addEventListener("DOMContentLoaded", function (event) {
    aboutUsMainContainer = document.querySelector('.'+canvasClass);
    aboutUsMainContainer.classList.add(dir);
    addFont();
    addBasicStyle();
    if (window.innerWidth >=1024){
        buildDesktopAbout();
    }else{
        insertMenu();
        orientationHandler();
    }
});

window.addEventListener('orientationchange',orientationHandler);
window.addEventListener('resize',orientationHandler);

function buildDesktopAbout () {
    const wrapper = creatHtmlElement(aboutUsMainContainer,'','div',['content__wrapper']);
    aboutUsData.forEach(el =>{
        const section = creatHtmlElement(wrapper,'','section',['about-us__section']);
        const imgContainer = creatHtmlElement(section,'','div',['about-us__img-container']);
        const img = creatHtmlElement(imgContainer,'','img',['about-us__image']);
        img.src = imageDark;
        const subWrapper = creatHtmlElement(section,'','div',['about-us__sub-wrapper']);
        const sectionTitle = creatHtmlElement(subWrapper,el.title.filter(el => el.lang === lang)[0].value,'h3',['about-us__section-title']);
        const sectionText = creatHtmlElement(subWrapper,el.description.filter(el => el.lang === lang)[0].value,'p',['about-us__section-text']);
    });
    cropImageToText();
}

function setWrapperContainerHeight () {
    if (window.innerWidth < 1024){
        const tabsContent = aboutUsMainContainer.querySelectorAll('.tab-content__container');
        const menuHeight = aboutUsMainContainer.querySelector('.menu__items').getBoundingClientRect().height;
        const isPortrait = isWindowInPortrait();
        tabsContent.forEach(tab=>{
            if (isPortrait){
                if (tab.scrollHeight < window.innerHeight && tab.scrollHeight > 0){
                    tab.style.height = window.innerHeight - menuHeight - 24 +'px';
                }
            } else {
                tab.style.height = '100%';
            }
        });
    }
}

function cropImageToText () {
    const sectionCollection = document.querySelectorAll('.about-us__section');
    sectionCollection.forEach(section =>{
        setTimeout(()=>{
            const img = section.querySelector('.about-us__img-container > .about-us__image');
            const sub = section.querySelector('.about-us__sub-wrapper');
            let subHeight=0;
            for (let child of sub.children){
                subHeight += child.getBoundingClientRect().height;
            }
            if (img.getBoundingClientRect().height > subHeight + 120){
                img.style.height = subHeight+120+'px';
            }
        },200);
    });
}

function orientationHandler () {
    const isPortrait = isWindowInPortrait();
    if (window.innerWidth < 1024){
        clearContent();
        insertMenu(activeTabInd);

        const contentWrapper = document.querySelector('.tabs-data-content__wrapper');
        if (!isPortrait && dir === 'ltr'){
            contentWrapper.style.marginLeft = 114+'px';
        } else if (!isPortrait && dir === 'rtl'){
            contentWrapper.style.marginRight = 114+'px';
        }else{
            contentWrapper.style.marginRight = 0+'px';
            contentWrapper.style.marginLeft = 0+'px';
        }
        setTimeout(()=>{setWrapperContainerHeight();},200);
    }else {
        clearContent();
        buildDesktopAbout();
    }
}

function clearContent () {
    const menus = document.querySelectorAll('.menu__items');
    const tabs = aboutUsMainContainer.querySelectorAll('.tab-content__container');
    const wrapper = aboutUsMainContainer.querySelector('.content__wrapper');
    if (tabs.length > 0){
        tabs.forEach(tab => tab.remove());
    }
    if (wrapper){
        wrapper.remove();
    }
    if (menus.length > 0){
        menus.forEach((menu,index) =>{
            menu.remove();
        });
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
    el.innerHTML = elementName;
    if (parent) {
        parent.appendChild(el);
    }
    return el;
}

function addFont() {
    // document.head.innerHTML += '<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500&display=swap" rel="stylesheet">';
    document.head.innerHTML += '<link href="https://fonts.googleapis.com/css2?family=Assistant:wght@600&family=Ubuntu:wght@300&display=swap" rel="stylesheet">';
}

function addBasicStyle () {
    const replacedStyle = basicStyle.replace(/main-container-about/g, canvasClass);
    document.head.innerHTML +='<style>'+replacedStyle+'</style>';
}

function insertMenu (activeTab = 0) {
    let tabsDataMainContainer;
    const menuContainer = creatHtmlElement('','','ul',['menu__items']);
    aboutUsMainContainer.insertAdjacentElement('afterbegin',menuContainer);
    const isTabWrapperExist = aboutUsMainContainer.querySelector('.tabs-data-content__wrapper');
    if (!isTabWrapperExist){
        tabsDataMainContainer = creatHtmlElement(aboutUsMainContainer,'','div',['tabs-data-content__wrapper']);
    } else{
        tabsDataMainContainer = isTabWrapperExist;
    }
    aboutUsData.forEach((menuElement,index) =>{
        let chapter = menuElement.chapter.filter(el => el.lang === lang);
        if(!chapter[0].hasOwnProperty('value')){
            throw 'menuElement has unsupported structure';
        }
        const li = creatHtmlElement(menuContainer,chapter[0].value,'li',['menu__item']);
        li.dataset.order = menuElement.order;
        buildTabsContent(tabsDataMainContainer, menuElement);
    });
    const menuElementOrder = document.querySelector('.menu__item[data-order="'+activeTab+'"]');
    switchTab(menuElementOrder);
    activeTabInd = activeTab;

    creatHtmlElement(menuContainer,'','div',['menu__plug']);
    setMenuStyle(menuContainer);
    menuContainer.addEventListener('click', (e) =>switchTab(e.target));
    tabsDataMainContainer.addEventListener('swiped', swipeTabsContent);
}

function swipeTabsContent (e) {
    const isPortrait = isWindowInPortrait();

    if (isPortrait){
        const activeMenu = getActiveTabMenu();
        const swipeDirection = e.detail.dir;

        switch (swipeDirection) {
            case dir === 'rtl' ? 'right' : 'left':
                const nexElement = activeMenu.parentElement.querySelector('.menu__item[data-order="'+(Number(activeMenu.dataset.order)+ 1)+'"]');
                if (nexElement){
                    switchTab(nexElement);
                }
                break;
            case dir === 'rtl' ? 'left' : 'right':
                const prevElement = activeMenu.parentElement.querySelector('.menu__item[data-order="'+(Number(activeMenu.dataset.order)-1)+'"]');
                if (prevElement){
                    switchTab(prevElement);
                }
                break;
        }
        // setWrapperContainerHeight();
    }
}

function getActiveTabMenu () {
    let activeMenu;
    const menuCollection = document.querySelectorAll('.menu__item');
    menuCollection.forEach(menu =>{
        if (menu.classList.contains('active')){
            activeMenu = menu;
        }
    });
    return activeMenu;
}

function  isWindowInPortrait() {
    return window.matchMedia("(orientation: portrait)").matches;
}

function setMenuStyle (menuItems) {
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
        }
    }
}

function buildTabsContent (container,objectContent) {
    const tab = creatHtmlElement(container,'','div',['tab-content__container']);
    tab.dataset.order = objectContent.order;
    const title = creatHtmlElement(tab,objectContent.title.filter(el => el.lang === lang)[0].value,'h3',['tab-content__title']);
    const text = creatHtmlElement(tab,objectContent.description.filter(el => el.lang === lang)[0].value,'p',['tab-content__text']);
    const imgContainer = creatHtmlElement(tab,'','div',['about-us__img-container']);
    const img = creatHtmlElement(imgContainer,'','img',['tab-content__image']);
    img.src = objectContent.imageUrl;
    if (objectContent.order !== 0){
        tab.classList.add('hide-tab');
    }
}

function toggleTabContent (tabOrder) {
    const tabsContentCollection = document.querySelectorAll('.tab-content__container');
    tabsContentCollection.forEach(tab =>{
        if (tab.dataset.order === tabOrder){
            tab.classList.remove('hide-tab');
        }else {
            tab.classList.add('hide-tab');
        }
    });

}

function switchTab(e) {
    const parent = e.parentElement;
    if (e.classList.contains('menu__item')){
        setActiveTab(parent,e);
        activeTabInd = e.dataset.order;
        toggleTabContent(e.dataset.order);
        setWrapperContainerHeight();
    }
}

function setActiveTab (parent, e) {
    const menuItemsCollection = parent.querySelectorAll('.menu__item');
    menuItemsCollection.forEach(menu =>{
        if (e === menu){
            menu.classList.add('active');
            scrollContainer(menu);
        } else{
            menu.classList.remove('active');
        }
    });
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
  padding: 0;
  box-sizing: border-box;
}

.main-container-about p, h3{
    margin: 0;
}

.main-container-about {
  font-family: 'Assistant', sans-serif;
  font-size: 18px;
  color: #FFFFFF;
  font-weight: 600;
  position: relative;
  background: linear-gradient(180deg, #2A3549 0%, #131A2D 100%);
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

.menu__item {
  text-align: center;
  padding: 11px 0;
  margin: 0 12px;
  white-space: nowrap;
  font-size: 16px;
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

.hide-tab{
 display: none;  
}

.tab-content__image-container{
    display: flex;
    justify-content: center;
    padding: 0 16px;
}

.about-us__img-container{
 padding: 0 16px;
}

.tab-content__image{
  width: 100%;
}

.tab-content__title{
  font-size: 18px;
  color: #fff;
  // margin: 24px 16px 12px 16px;
  padding: 24px 16px 12px 16px;
}

.tab-content__text{
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;
  color: #fff;
  padding: 0 16px 24px 16px;
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

.menu__items {
    display: block;
    flex-basis: 40%;
    position: fixed;
    width: 114px;
    top: 0;
}

.menu__item{
    margin-bottom: 19px;
    text-overflow: ellipsis;
    overflow: hidden;
}

.tab-content__title{
    // margin: 0 16px 12px 16px;
    padding: 0px 16px 12px 16px;
    padding-top: 12px;
}
}

.content__wrapper{
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}

.about-us__section {
  display: flex;
  justify-content: space-between;
  padding: 80px 10px 0 10px;
}

.about-us__section:nth-of-type(even){
  flex-direction: row-reverse;
}

.about-us__image{
  width: 100%;
  object-fit: cover;
}

.about-us__sub-wrapper, .about-us__img-container{
  flex-basis: 47%;
}

.about-us__section-title{
  font-size: 30px;
  margin-bottom: 48px;
}

@media screen and (min-width: 1024px){
    .main-container-about {
     background: #F7F7F7;
     color: #1A2F43;
}
}

`;

/*!
 * swiped-events.js - v@version@
 * Pure JavaScript swipe events
 * https://github.com/john-doherty/swiped-events
 * @inspiration https://stackoverflow.com/questions/16348031/disable-scrolling-when-touch-moving-certain-element
 * @author John Doherty <www.johndoherty.info>
 * @license MIT
 */
(function (window, document) {

    'use strict';

    // patch CustomEvent to allow constructor creation (IE/Chrome)
    if (typeof window.CustomEvent !== 'function') {

        window.CustomEvent = function (event, params) {

            params = params || { bubbles: false, cancelable: false, detail: undefined };

            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        };

        window.CustomEvent.prototype = window.Event.prototype;
    }

    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
    document.addEventListener('touchend', handleTouchEnd, false);

    var xDown = null;
    var yDown = null;
    var xDiff = null;
    var yDiff = null;
    var timeDown = null;
    var startEl = null;

    /**
     * Fires swiped event if swipe detected on touchend
     * @param {object} e - browser event object
     * @returns {void}
     */
    function handleTouchEnd(e) {

        // if the user released on a different target, cancel!
        if (startEl !== e.target) return;

        var swipeThreshold = parseInt(getNearestAttribute(startEl, 'data-swipe-threshold', '20'), 10); // default 20px
        var swipeTimeout = parseInt(getNearestAttribute(startEl, 'data-swipe-timeout', '500'), 10);    // default 500ms
        var timeDiff = Date.now() - timeDown;
        var eventType = '';
        var changedTouches = e.changedTouches || e.touches || [];

        if (Math.abs(xDiff) > Math.abs(yDiff)) { // most significant
            if (Math.abs(xDiff) > swipeThreshold && timeDiff < swipeTimeout) {
                if (xDiff > 0) {
                    eventType = 'swiped-left';
                }
                else {
                    eventType = 'swiped-right';
                }
            }
        }
        else if (Math.abs(yDiff) > swipeThreshold && timeDiff < swipeTimeout) {
            if (yDiff > 0) {
                eventType = 'swiped-up';
            }
            else {
                eventType = 'swiped-down';
            }
        }

        if (eventType !== '') {

            var eventData = {
                dir: eventType.replace(/swiped-/, ''),
                xStart: parseInt(xDown, 10),
                xEnd: parseInt((changedTouches[0] || {}).clientX || -1, 10),
                yStart: parseInt(yDown, 10),
                yEnd: parseInt((changedTouches[0] || {}).clientY || -1, 10)
            };

            // fire `swiped` event event on the element that started the swipe
            startEl.dispatchEvent(new CustomEvent('swiped', { bubbles: true, cancelable: true, detail: eventData }));

            // fire `swiped-dir` event on the element that started the swipe
            startEl.dispatchEvent(new CustomEvent(eventType, { bubbles: true, cancelable: true, detail: eventData }));
        }

        // reset values
        xDown = null;
        yDown = null;
        timeDown = null;
    }

    /**
     * Records current location on touchstart event
     * @param {object} e - browser event object
     * @returns {void}
     */
    function handleTouchStart(e) {

        // if the element has data-swipe-ignore="true" we stop listening for swipe events
        if (e.target.getAttribute('data-swipe-ignore') === 'true') return;

        startEl = e.target;

        timeDown = Date.now();
        xDown = e.touches[0].clientX;
        yDown = e.touches[0].clientY;
        xDiff = 0;
        yDiff = 0;
    }

    /**
     * Records location diff in px on touchmove event
     * @param {object} e - browser event object
     * @returns {void}
     */
    function handleTouchMove(e) {

        if (!xDown || !yDown) return;

        var xUp = e.touches[0].clientX;
        var yUp = e.touches[0].clientY;

        xDiff = xDown - xUp;
        yDiff = yDown - yUp;
    }

    /**
     * Gets attribute off HTML element or nearest parent
     * @param {object} el - HTML element to retrieve attribute from
     * @param {string} attributeName - name of the attribute
     * @param {any} defaultValue - default value to return if no match found
     * @returns {any} attribute value or defaultValue
     */
    function getNearestAttribute(el, attributeName, defaultValue) {

        // walk up the dom tree looking for data-action and data-trigger
        while (el && el !== document.documentElement) {

            var attributeValue = el.getAttribute(attributeName);

            if (attributeValue) {
                return attributeValue;
            }

            el = el.parentNode;
        }

        return defaultValue;
    }

}(window, document));
