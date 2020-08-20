let arrAbout = [

    {
        "title": "Title 1",
        "description": "Featuring expansive studio, 1- and 2-bedroom residences, 251 West 117th boasts high end finishes, state-of-the-art appliances, and panoramic views. Your luxury home will feature floor to ceiling windows, quartz kitchen countertops, stainless steel appliances, and closets outfitted for maximum storage. ",
        "chapter": "Chapter 1",
        "imageUrl": "https://dreamseu.z6.web.core.windows.net/251West117thStreet/about/greypfrut-vyalenyy_0.png",
        "order": 0,
        "advantages" : [
            {
                "iconSrc": "img/default-icon.svg",
                "advantageTitle": "Advantage 1",
                "explanation" : "Explanation Advantage 1 looooong"
            },
            {
                "iconSrc": "img/default-icon.svg",
                "advantageTitle": "Advantage 2",
                "explanation" : "Explanation Advantage 2 looooong"
            },
            {
                "iconSrc": "img/default-icon.svg",
                "advantageTitle": "Advantage 3",
                "explanation" : "Explanation Advantage 3 looooong"
            },
        ]
    },
    {
        "title": "Title 2",
        "description": "description 2 is very very very very very very very very very very long description will be here ...",
        "chapter": "Chapter 2",
        "imageUrl": "https://image.shutterstock.com/image-photo/blue-sky-cloud-clearing-day-260nw-763628821.jpg",
        "order": 0
    },
    {
        "title": "Title 3",
        "description": "forEach does not wait for promises. Kindly make sure you are aware of the implications while using promises(or async functions) as forEach callback. Example Code",
        "chapter": "Chapter 3",
        "imageUrl": "https://image.shutterstock.com/image-photo/blue-sky-cloud-clearing-day-260nw-763628821.jpg",
        "order": 0
    },
    {
        "title": "Title 4",
        "description": "description 4 is very very very very very very very very very very long description will be here ...",
        "chapter": "Chapter 4",
        "imageUrl": "https://image.shutterstock.com/image-photo/blue-sky-cloud-clearing-day-260nw-763628821.jpg",
        "order": 0
    }
];

// insert menu items using arrAbout data
function insertMenuData(arrAbout) {

    if (!Array.isArray(arrAbout) || arrAbout.length === 0) {
        return false;
    }

    // at the start we have 1 menu item
    // we will clone it
    // to make necessary menu items
    let menuItem = document.getElementsByClassName('elem-menu')[0];
    menuItem.textContent = arrAbout[0]['chapter'];

    arrAbout.forEach((el, index) => {
        // if first, use base menu item, else clone and create new
        let newMenuItem;
        if (index === 0) {
            newMenuItem = menuItem;
            updateMainData(el)
        } else {
            newMenuItem = menuItem.cloneNode(true);
            // set active false
            newMenuItem.classList.remove('active')
        }
        newMenuItem.dataset.index = index
        // set text
        newMenuItem.textContent = el['chapter'];

        menuItem.after(newMenuItem)
    })
}

function updateMainData(data) {
    let elemTitle = document.getElementById('elem-title');
    elemTitle.textContent = data['title'];
    let elemText = document.getElementById('elem-text');
    elemText.textContent = data['description']
    let elemImg = document.getElementById('elem-img')
    elemImg.setAttribute('src', data['imageUrl'])
}


function switchTab(newTab) {
    let activeTab = document.querySelector('.elem-menu.active')
    activeTab.classList.remove('active')
    updateMainData(arrAbout[newTab.dataset.index])
    newTab.classList.add('active')

}

window.addEventListener("load", function (event) {
    initAboutUs();
    insertMenuData(arrAbout)
});

function initAboutUs() {
  let rootElem = document.getElementById('about-us-insert-2020');
  rootElem.innerHTML = "<div class=\"content\">\n" +
      "    <style>\n" +
      "        #about-us-insert-2020 .content.rtl {\n" +
      "            text-align: right;\n" +
      "        }\n" +
      "        #about-us-insert-2020 .content.rtl .content .main-content {\n" +
      "            flex-direction: row-reverse;\n" +
      "        }\n" +
      "        #about-us-insert-2020 .content.rtl .content .main-content .content-el {\n" +
      "            padding-right: 16px;\n" +
      "            padding-left: 0;\n" +
      "        }\n" +
      "        #about-us-insert-2020 .content.rtl .header {\n" +
      "            flex-direction: row-reverse;\n" +
      "        }\n" +
      "        #about-us-insert-2020 .header {\n" +
      "            height: 44px;\n" +
      "            text-align: center;\n" +
      "            display: flex;\n" +
      "        }\n" +
      "        #about-us-insert-2020 .header .title {\n" +
      "            font-size: 17px;\n" +
      "            font-weight: 500;\n" +
      "            line-height: 1.29;\n" +
      "            letter-spacing: -0.41px;\n" +
      "            color: #1a2f43;\n" +
      "        }\n" +
      "        #about-us-insert-2020 .content {\n" +
      "            height: 90%;\n" +
      "        }\n" +
      "        #about-us-insert-2020 .content-el {\n" +
      "            padding: 0 16px;\n" +
      "        }\n" +
      "        #about-us-insert-2020 .content,\n" +
      "        #about-us-insert-2020 .header {\n" +
      "            margin: 0 auto;\n" +
      "        }\n" +
      "        #about-us-insert-2020 .main-content .subheader {\n" +
      "            font-size: 14px;\n" +
      "            font-weight: 300;\n" +
      "            color: #1a2f43;\n" +
      "        }\n" +
      "        #about-us-insert-2020 .menu {\n" +
      "            box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.05);\n" +
      "        }\n" +
      "        #about-us-insert-2020 .menu .elem-menu {\n" +
      "            width: 114px;\n" +
      "            text-align: center;\n" +
      "            vertical-align: middle;\n" +
      "            justify-content: center;\n" +
      "            padding: 14px 0;\n" +
      "            background-color: white;\n" +
      "            cursor: pointer;\n" +
      "            margin-bottom: 16px;\n" +
      "            font-size: 16px;\n" +
      "            font-weight: 500;\n" +
      "            color: #6e767e;\n" +
      "        }\n" +
      "        #about-us-insert-2020 .menu .active {\n" +
      "            border-bottom: 2px solid #1a2f43;\n" +
      "            color: #1a2f43;\n" +
      "            transition: 0.5s;\n" +
      "        }\n" +
      "        #about-us-insert-2020 .main-content .text {\n" +
      "            width: 300px;\n" +
      "            font-family: Ubuntu;\n" +
      "            font-size: 18px;\n" +
      "            font-weight: 500;\n" +
      "            color: #1a2f43;\n" +
      "        }\n" +
      "        #about-us-insert-2020 .main-content .subheader {\n" +
      "            font-size: 14px;\n" +
      "            font-weight: 300;\n" +
      "            color: #1a2f43;\n" +
      "            margin-bottom: 24px;\n" +
      "        }\n" +
      "        #about-us-insert-2020 .content-el.active {\n" +
      "            display: block;\n" +
      "        }\n" +
      "        @media only screen and (max-width: 460px) {\n" +
      "            #about-us-insert-2020 .menu {\n" +
      "                display: flex;\n" +
      "                flex-wrap: wrap;\n" +
      "                width: 90%;\n" +
      "            }\n" +
      "            #about-us-insert-2020 .menu .elem-menu {\n" +
      "                display: inline-block;\n" +
      "                width: 114px;\n" +
      "                margin: 0 auto;\n" +
      "            }\n" +
      "            #about-us-insert-2020 .content,\n" +
      "            #about-us-insert-2020 .header {\n" +
      "                width: 100%;\n" +
      "            }\n" +
      "            #about-us-insert-2020 .header .title {\n" +
      "                width: 100%;\n" +
      "                height: 22px;\n" +
      "            }\n" +
      "            #about-us-insert-2020 .main-content {\n" +
      "                width: 90%;\n" +
      "            }\n" +
      "            #about-us-insert-2020 .main-content img {\n" +
      "                width: 90%;\n" +
      "            }\n" +
      "            #about-us-insert-2020 .main-content .text {\n" +
      "                width: 100%;\n" +
      "            }\n" +
      "            #about-us-insert-2020 .main-content .subheader {\n" +
      "                width: 100%;\n" +
      "            }\n" +
      "        }\n" +
      "        @media only screen and (min-width: 461px) {\n" +
      "            #about-us-insert-2020 .main-content {\n" +
      "                width: 100%;\n" +
      "                padding: 0 17px;\n" +
      "                display: flex;\n" +
      "                max-width: 868px;\n" +
      "                margin: 0 auto;\n" +
      "            }\n" +
      "            #about-us-insert-2020 .content,\n" +
      "            #about-us-insert-2020 .header {\n" +
      "                width: 90%;\n" +
      "            }\n" +
      "            #about-us-insert-2020 .content-el {\n" +
      "                width: 100%;\n" +
      "            }\n" +
      "            #about-us-insert-2020 .header .title {\n" +
      "                width: 100%;\n" +
      "                height: 22px;\n" +
      "            }\n" +
      "            #about-us-insert-2020 .main-content img {\n" +
      "                width: 90%;\n" +
      "            }\n" +
      "            #about-us-insert-2020 .main-content .text {\n" +
      "                width: 100%;\n" +
      "                height: 21px;\n" +
      "            }\n" +
      "            #about-us-insert-2020 .main-content .subheader {\n" +
      "                width: 100%;\n" +
      "                display: flex;\n" +
      "                margin-bottom: 24px;\n" +
      "            }\n" +
      "        }\n" +
      "\n" +
      "    </style>\n" +
      "    <div class=\"main-content\">\n" +
      "        <div class=\"menu\">\n" +
      "            <div class=\"elem-menu active\" onclick=\"switchTab(this)\">1</div>\n" +
      "        </div>\n" +
      "        <div class=\"content-el\" id=\"cel-1\">\n" +
      "            <p class=\"text\" id=\"elem-title\"></p>\n" +
      "            <p class=\"subheader\" id=\"elem-text\"></p>\n" +
      "            <img id=\"elem-img\"\n" +
      "                 src=\"\"\n" +
      "                 alt=\"\">\n" +
      "        </div>\n" +
      "    </div>\n" +
      "</div>"
}

