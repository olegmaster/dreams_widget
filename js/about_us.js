let aboutUsData = [
    {
        "title": "Title 1",
        "description": "Featuring expansive studio, 1- and 2-bedroom residences, 251 West 117th boasts high end finishes, state-of-the-art appliances, and panoramic views. Your luxury home will feature floor to ceiling windows, quartz kitchen countertops, stainless steel appliances, and closets outfitted for maximum storage. ",
        "chapter": "Chapter 1",
        "imageUrl": "https://barnes-newyork.com/wp-content/uploads/2018/09/barnes-new-york-all-buroughs-luxury-real-estate-property-1600x1068-1024x684.jpg",
        "order": 0,
        "advantages": [
            {
                "iconSrc": "img/default-icon.svg",
                "advantageTitle": "Advantage 1",
                "explanation": "Explanation Advantage 1 looooong"
            },
            {
                "iconSrc": "img/default-icon.svg",
                "advantageTitle": "Advantage 2",
                "explanation": "Explanation Advantage 2 looooong"
            },
            {
                "iconSrc": "img/default-icon.svg",
                "advantageTitle": "Advantage 3",
                "explanation": "Explanation Advantage 3 looooong"
            },
        ]
    },
    {
        "title": "Title 2",
        "description": "description 2 is very very very very very very very very very very long description will be here ...",
        "chapter": "Chapter 2",
        "imageUrl": "https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_737,h_414/q_80/4208-72/340-fremont-apartments-exterior.jpg",
        "order": 0
    },
    {
        "title": "Title 3",
        "description": "forEach does not wait for promises. Kindly make sure you are aware of the implications while using promises(or async functions) as forEach callback. Example Code",
        "chapter": "Chapter 3",
        "imageUrl": "https://img.staticmb.com/mbphoto/property/cropped_images/2020/Mar/03/Photo_h300_w450/48463433_1_lub_and_infra_300_450.jpg",
        "order": 0
    },
    {
        "title": "Title 4",
        "description": "forEach does not wait for promises. Kindly make sure you are aware of the implications while using promises(or async functions) as forEach callback. Example Code",
        "chapter": "Chapter 4",
        "imageUrl": "https://strana.ua/img/article/1245/8_main.jpeg",
        "order": 0
    },
];

let canvasClass = 'bmby-about-us';
let hasUbuntuFont = false;
let aboutUsSections = [];

// add galleries on document load
window.addEventListener("load", function (event) {
    let containers = document.getElementsByClassName(canvasClass);
    if (containers !== undefined && containers.length > 0) {
        for (let container of containers) {
            aboutUsSections.push(new AboutUsBuilder(container, aboutUsData, canvasClass));
        }
    }
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

class AboutUsBuilder {
    constructor(container, aboutUsData, canvasClass) {

        this.glider = undefined;

        this.container = container;
        this.aboutUsData = aboutUsData;
        this.canvasClass = canvasClass;
        this.container.id = this.makeId(9);
        this.initBaseDomSkeleton();
        this.insertMenuData(aboutUsData);

        if (!hasUbuntuFont) {
            this.addUbuntuFont();
            this.addStyles();
            hasUbuntuFont = true;
        }

        return this;
    }

    // insert menu items using aboutUsData data
    insertMenuData(aboutUsData) {
        if (!Array.isArray(this.aboutUsData) || this.aboutUsData.length === 0) {
            return false;
        }

        // at the start we have 1 menu item
        // we will clone it
        // to make necessary menu items
        let menuItem = document.getElementsByClassName('elem-menu')[0];
        menuItem.textContent = aboutUsData[0]['chapter'];

        aboutUsData.forEach((el, index) => {
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
            newMenuItem.dataset.index = index
            // set text
            newMenuItem.textContent = el['chapter'];

            menuItem.after(newMenuItem);

            menuItem = newMenuItem;
        })
    }

    updateMainData(data) {
        let elemTitle = document.getElementById(this.getId() + '__elem-title');
        elemTitle.textContent = data['title'];
        let elemText = document.getElementById(this.getId() + '__elem-text');
        elemText.textContent = data['description']
        let elemImg = document.getElementById(this.getId() + '__elem-img');
        elemImg.setAttribute('src', data['imageUrl'])
    }

    // copy past in baseStyle variable the style that contains css/main.css
    addStyles() {
        const baseStyle = ".font-ubuntu{font-family:Ubuntu,sans-serif}#page-insert-elem-27636.rtl{text-align:right;direction:rtl}#page-insert-elem-27636.rtl .content .main-content .section-inner .menu{flex-direction:column-reverse}#page-insert-elem-27636.rtl .content .main-content .content-el{padding-right:16px;padding-left:0}#page-insert-elem-27636.rtl .glider-dots{direction:ltr}#page-insert-elem-27636.rtl .header{flex-direction:row-reverse}#page-insert-elem-27637.rtl{text-align:right;direction:rtl}#page-insert-elem-27637.rtl .content .main-content .section-inner .menu{flex-direction:column-reverse}#page-insert-elem-27637.rtl .content .main-content .content-el{padding-right:16px;padding-left:0}#page-insert-elem-27637.rtl .glider-dots{direction:ltr}#page-insert-elem-27637.rtl .header{flex-direction:row-reverse}#page-insert-elem-27636{/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */font-family:Ubuntu,sans-serif}#page-insert-elem-27636 html{line-height:1.15;-webkit-text-size-adjust:100%}#page-insert-elem-27636 body{margin:0}#page-insert-elem-27636 main{display:block}#page-insert-elem-27636 h1{font-size:2em;margin:.67em 0}#page-insert-elem-27636 hr{box-sizing:content-box;height:0;overflow:visible}#page-insert-elem-27636 pre{font-family:monospace,monospace;font-size:1em}#page-insert-elem-27636 a{background-color:transparent}#page-insert-elem-27636 abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}#page-insert-elem-27636 b,#page-insert-elem-27636 strong{font-weight:bolder}#page-insert-elem-27636 code,#page-insert-elem-27636 kbd,#page-insert-elem-27636 samp{font-family:monospace,monospace;font-size:1em}#page-insert-elem-27636 small{font-size:80%}#page-insert-elem-27636 sub,#page-insert-elem-27636 sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}#page-insert-elem-27636 sub{bottom:-.25em}#page-insert-elem-27636 sup{top:-.5em}#page-insert-elem-27636 img{border-style:none}#page-insert-elem-27636 button,#page-insert-elem-27636 input,#page-insert-elem-27636 optgroup,#page-insert-elem-27636 select,#page-insert-elem-27636 textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}#page-insert-elem-27636 button,#page-insert-elem-27636 input{overflow:visible}#page-insert-elem-27636 button,#page-insert-elem-27636 select{text-transform:none}#page-insert-elem-27636 [type=button],#page-insert-elem-27636 [type=reset],#page-insert-elem-27636 [type=submit],#page-insert-elem-27636 button{-webkit-appearance:button}#page-insert-elem-27636 [type=button]::-moz-focus-inner,#page-insert-elem-27636 [type=reset]::-moz-focus-inner,#page-insert-elem-27636 [type=submit]::-moz-focus-inner,#page-insert-elem-27636 button::-moz-focus-inner{border-style:none;padding:0}#page-insert-elem-27636 [type=button]:-moz-focusring,#page-insert-elem-27636 [type=reset]:-moz-focusring,#page-insert-elem-27636 [type=submit]:-moz-focusring,#page-insert-elem-27636 button:-moz-focusring{outline:1px dotted ButtonText}#page-insert-elem-27636 fieldset{padding:.35em .75em .625em}#page-insert-elem-27636 legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}#page-insert-elem-27636 progress{vertical-align:baseline}#page-insert-elem-27636 textarea{overflow:auto}#page-insert-elem-27636 [type=checkbox],#page-insert-elem-27636 [type=radio]{box-sizing:border-box;padding:0}#page-insert-elem-27636 [type=number]::-webkit-inner-spin-button,#page-insert-elem-27636 [type=number]::-webkit-outer-spin-button{height:auto}#page-insert-elem-27636 [type=search]{-webkit-appearance:textfield;outline-offset:-2px}#page-insert-elem-27636 [type=search]::-webkit-search-decoration{-webkit-appearance:none}#page-insert-elem-27636 ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}#page-insert-elem-27636 details{display:block}#page-insert-elem-27636 summary{display:list-item}#page-insert-elem-27636 template{display:none}#page-insert-elem-27636 [hidden]{display:none}#page-insert-elem-27636 .section-outer{padding-left:38px;padding-right:30px}#page-insert-elem-27636 .section-outer .section-inner{display:flex;width:100%;margin:0 auto}#page-insert-elem-27636 .section-outer .section-inner .menu{box-shadow:0 0 2px 0 rgba(0,0,0,.05);margin-top:36px;overflow-y:hidden;margin-bottom:21px}#page-insert-elem-27636 .section-outer .section-inner .menu .content-el{padding:0 16px}#page-insert-elem-27636 .section-outer .section-inner .menu .elem-menu{text-align:center;vertical-align:middle;justify-content:center;padding:14px 0;background-color:#fff;cursor:pointer;height:20px;margin-bottom:16px;font-size:16px;line-height:18px;font-weight:500;color:silver}#page-insert-elem-27636 .section-outer .section-inner .menu .active{border-bottom:2px solid #1a2f43;color:#1a2f43;transition:.5s}#page-insert-elem-27636 .section-outer .section-inner .content-el{padding:0 16px;margin-top:29px}#page-insert-elem-27636 .section-outer .section-inner .content-el .text{width:300px;font-size:18px;line-height:21px;font-weight:500;color:#1a2f43}#page-insert-elem-27636 .section-outer .section-inner .content-el .subheader{font-size:14px;font-weight:300;color:#1a2f43;margin-bottom:24px;line-height:20px}#page-insert-elem-27636 .section-outer .section-inner .content-el.active{display:block}@media only screen and (max-width:575px){#page-insert-elem-27636 .section-outer{padding:0 16px}#page-insert-elem-27636 .section-outer .section-inner{flex-direction:column}#page-insert-elem-27636 .section-outer .section-inner .menu{display:flex;align-items:center;margin-top:10px;margin-bottom:0}#page-insert-elem-27636 .section-outer .section-inner .menu .elem-menu{display:inline-block;width:114px;margin:0 auto}#page-insert-elem-27636 .section-outer .section-inner .content-el{margin-top:12px}#page-insert-elem-27636 .header .title{width:100%;height:22px}#page-insert-elem-27636 .main-content img{width:100%}#page-insert-elem-27636 .main-content .text{width:100%}#page-insert-elem-27636 .main-content .subheader{width:100%}}@media only screen and (min-width:576px){#page-insert-elem-27636 .main-content{display:flex;margin:0 auto}#page-insert-elem-27636 .main-content .section-inner .menu .elem-menu{width:114px}#page-insert-elem-27636 .main-content .section-inner .content-el{width:100%}#page-insert-elem-27636 .main-content .section-inner .content-el img{width:100%}#page-insert-elem-27636 .main-content .section-inner .content-el .subheader{width:100%;display:flex;margin-bottom:24px}#page-insert-elem-27636 .main-content .section-inner .content-el .text{width:100%;height:21px}}#page-insert-elem-27637{font-family:Ubuntu,sans-serif}#page-insert-elem-27637 .glider-contain{width:100%;margin:0 auto;position:relative}#page-insert-elem-27637 .glider{margin:0 auto;position:relative;overflow-y:hidden;-webkit-overflow-scrolling:touch;-ms-overflow-style:none;transform:translateZ(0)}#page-insert-elem-27637 .glider-track{transform:translateZ(0);width:100%;margin:0;padding:0;display:flex;z-index:1}#page-insert-elem-27637 .glider.draggable{user-select:none;cursor:-webkit-grab;cursor:grab}#page-insert-elem-27637 .glider.draggable .glider-slide img{user-select:none;pointer-events:none}#page-insert-elem-27637 .glider.drag{cursor:-webkit-grabbing;cursor:grabbing}#page-insert-elem-27637 .glider-slide{user-select:none;justify-content:center;align-content:center;width:100%}#page-insert-elem-27637 .glider-slide img{max-width:100%}#page-insert-elem-27637 .glider::-webkit-scrollbar{opacity:0;height:0}#page-insert-elem-27637 .glider-next,#page-insert-elem-27637 .glider-prev{user-select:none;position:absolute;outline:0;background:0 0;padding:0;z-index:2;font-size:40px;text-decoration:none;left:-23px;border:0;top:30%;cursor:pointer;color:#666;opacity:1;line-height:1;transition:opacity .5s cubic-bezier(.17,.67,.83,.67),color .5s cubic-bezier(.17,.67,.83,.67)}#page-insert-elem-27637 .glider-next:focus,#page-insert-elem-27637 .glider-next:hover,#page-insert-elem-27637 .glider-prev:focus,#page-insert-elem-27637 .glider-prev:hover{color:#a89cc8}#page-insert-elem-27637 .glider-next{right:-23px;left:auto}#page-insert-elem-27637 .glider-next.disabled,#page-insert-elem-27637 .glider-prev.disabled{opacity:.25;color:#666;cursor:default}#page-insert-elem-27637 .glider-slide{min-width:150px}#page-insert-elem-27637 .glider-hide{opacity:0}#page-insert-elem-27637 .glider-dots{user-select:none;display:flex;flex-wrap:wrap;justify-content:center;margin:0 auto;padding:0}#page-insert-elem-27637 .glider-dot{border:0;padding:0;user-select:none;outline:0;display:block;cursor:pointer;color:#ccc;border-radius:999px;background:#ccc;width:12px;height:12px;margin:7px}#page-insert-elem-27637 .glider-dot.active,#page-insert-elem-27637 .glider-dot:focus,#page-insert-elem-27637 .glider-dot:hover{background:#a89cc8}@media (max-width:36em){#page-insert-elem-27637 .glider::-webkit-scrollbar{opacity:1;-webkit-appearance:none;width:7px;height:3px}#page-insert-elem-27637 .glider::-webkit-scrollbar-thumb{opacity:1;border-radius:99px;background-color:rgba(156,156,156,.25);box-shadow:0 0 1px rgba(255,255,255,.25)}}#page-insert-elem-27637 .section-outer{padding-right:4%;padding-left:4%}#page-insert-elem-27637 .section-outer .section-inner{display:flex;width:100%;margin:0 auto}#page-insert-elem-27637 .section-outer .section-inner .menu{box-shadow:0 0 2px 0 rgba(0,0,0,.05);margin-top:36px;overflow-y:hidden;margin-bottom:21px}#page-insert-elem-27637 .section-outer .section-inner .menu .content-el{padding:0 16px}#page-insert-elem-27637 .section-outer .section-inner .menu .elem-menu{text-align:center;vertical-align:middle;justify-content:center;padding:14px 0;background-color:#fff;cursor:pointer;height:20px;margin-bottom:16px;font-size:16px;line-height:18px;font-weight:500;color:silver}#page-insert-elem-27637 .section-outer .section-inner .menu .active{border-bottom:2px solid #1a2f43;color:#1a2f43;transition:.5s}#page-insert-elem-27637 .section-outer .section-inner .content-el{padding:0 16px;margin-top:29px}#page-insert-elem-27637 .section-outer .section-inner .content-el .text{width:300px;font-size:18px;line-height:21px;font-weight:500;color:#1a2f43}#page-insert-elem-27637 .section-outer .section-inner .content-el .subheader{font-size:14px;font-weight:300;color:#1a2f43;margin-bottom:24px;line-height:20px}#page-insert-elem-27637 .section-outer .section-inner .content-el.active{display:block}#page-insert-elem-27637 .section-outer .section-inner{flex-direction:column}#page-insert-elem-27637 .section-outer .section-inner .menu{display:flex;align-items:start;margin-top:10px;margin-bottom:0}#page-insert-elem-27637 .section-outer .section-inner .menu .elem-menu{display:inline-block;padding:12px}#page-insert-elem-27637 .section-outer .section-inner .content-el{margin-top:12px}#page-insert-elem-27637 .header .title{width:100%;height:22px}#page-insert-elem-27637 .main-content img{width:100%}#page-insert-elem-27637 .main-content .text{width:100%}#page-insert-elem-27637 .main-content .subheader{width:100%}#page-insert-elem-27637 .slider-container{padding-top:40px;width:75%;position:relative;margin:0 auto;vertical-align:baseline}#page-insert-elem-27637 .slider-img{background-repeat:no-repeat;background-position:50% 50%;width:100%;background-size:cover;cursor:pointer}#page-insert-elem-27637 .slider-img:after{content:\"\";display:block;padding-bottom:100%}#page-insert-elem-27637 .slider-container{width:100%}@media only screen and (min-width:767px){#page-insert-elem-27637 .slider-img{width:97%}}";
        const preparedStyle = baseStyle.replace(/#page-insert-elem-27636/g, "." + this.canvasClass);
        document.head.innerHTML += '<style>' +
            preparedStyle +
            '</style>';
    }

    addUbuntuFont() {
        document.head.innerHTML += '<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500&display=swap" rel="stylesheet">';
    }

    initBaseDomSkeleton(){
        this.container.insertAdjacentHTML('afterbegin',this.getElementBaseDom(this.container.id));
    }

    getId(){
        return this.container.id;
    }

    // this is the HTML skeleton that has to be inserted in the container
    // menu items will be cloned to change them depending on the aboutUsData array
    // containerId it is generated id of a container where we insert the gallery
    // this id is generated to have difference between containers
    getElementBaseDom(containerId) {
        return "<div class=\"section-outer main-content\">\n" +
            "    <div class=\"section-inner\">\n" +
            "        <div class=\"menu\">\n" +
            "            <div class=\"elem-menu active\" onclick=\"switchTab(this, '"+ containerId +"')\">1</div>\n" +
            "        </div>\n" +
            "        <div class=\"content-el\" id=\"cel-1\">\n" +
            "            <p class=\"text\" id=\"" + this.getId() + "__elem-title\"></p>\n" +
            "            <p class=\"subheader\" id=\"" + this.getId() + "__elem-text\"></p>\n" +
            "            <img id=\"" + this.getId() + "__elem-img\"\n" +
            "                 src=\"\"\n" +
            "                 alt=\"\">\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</div>";
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
}


function switchTab(newTab, containerId) {
    let container = document.getElementById(containerId);
    let allTabs = container.querySelectorAll('.elem-menu');
    for(let tab of allTabs) {
        tab.classList.remove('active');
    }
    aboutUsSections.forEach((item) => {
        if(item.getId() === containerId) {
            item.updateMainData(aboutUsData[newTab.dataset.index])
        }
    });
    newTab.classList.add('active');
}
