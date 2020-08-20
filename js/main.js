let arrAbout = [

    {
        "title": "Title 1",
        "description": "Featuring expansive studio, 1- and 2-bedroom residences, 251 West 117th boasts high end finishes, state-of-the-art appliances, and panoramic views. Your luxury home will feature floor to ceiling windows, quartz kitchen countertops, stainless steel appliances, and closets outfitted for maximum storage. ",
        "chapter": "Chapter 1",
        "imageUrl": "https://dreamseu.z6.web.core.windows.net/251West117thStreet/about/greypfrut-vyalenyy_0.png",
        "order": 0
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
    insertMenuData(arrAbout)
});
