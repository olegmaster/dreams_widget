let basePoiData;
let poiData = [];
basePoiData = [
    {
        "name": {
            "he": "סטלה בי'ץ דג על הים",
            "en": "Stella Beach"
        },
        "description": {
            "he": "דרך בן גוריון 83, בת ים, 5955602, ישראל",
            "en": "Derech Ben Gurion 83, Bat Yam, 5955602, Israel"
        },
        "address": {
            "he": "דרך בן גוריון 83, בת ים, 5955602, ישראל",
            "en": "Derech Ben Gurion 83, Bat Yam, 5955602, Israel"
        },
        "categoryId": 1,
        "url": "http://www.stellabeach.co.il/",
        "latitude": "32.0178821",
        "longitude": "34.7384688",
        "coords3d": {
            "x": "32.0178821",
            "y": "34.7384688",
            "z": 0
        },
        "distanceToPoint": {
            "walk": "1930",
            "bike": "2443",
            "drive": "1892"
        },
        "timeToPoint": {
            "walk": "1436",
            "bike": "450",
            "drive": "416"
        },
        "phone": "03-629-9878",
        "internationalPhone": "03-629-9878",
        "customPhone": "",
        "promotion": [
            {
                "name": {
                    "he": "",
                    "en": ""
                },
                "description": {
                    "he": "",
                    "en": ""
                },
                "url": "",
                "timeToLive": ""
            }
        ],
        "googleMapsID": {
            "value": "ChIJh7iUJhqzAhURRalE-z2KD3w"
        }
    },
    {
        "name": {
            "he": "שיפודי ציפורה",
            "en": "Shipudei Tzipora"
        },
        "description": {
            "he": "הלפר 26, בת ים, ישראל",
            "en": "Halper St 26, Bat Yam, Israel"
        },
        "address": {
            "he": "הלפר 26, בת ים, ישראל",
            "en": "Halper St 26, Bat Yam, Israel"
        },
        "categoryId": 1,
        "url": "http://tzipora-batyam.co.il/",
        "latitude": "32.0275444",
        "longitude": "34.7462099",
        "coords3d": {
            "x": "32.0275444",
            "y": "34.7462099",
            "z": 0
        },
        "distanceToPoint": {
            "walk": "2257",
            "bike": "2465",
            "drive": "4092"
        },
        "timeToPoint": {
            "walk": "1667",
            "bike": "566",
            "drive": "867"
        },
        "phone": "03-659-1432",
        "internationalPhone": "03-659-1432",
        "customPhone": "",
        "promotion": [
            {
                "name": {
                    "he": "",
                    "en": ""
                },
                "description": {
                    "he": "",
                    "en": ""
                },
                "url": "",
                "timeToLive": ""
            }
        ],
        "googleMapsID": {
            "value": "ChIJ0aNl4juzAhURtlCn8pMud0k"
        }
    },
    {
        "name": {
            "he": "גן משה דיין",
            "en": "Moshe Dayan Garden"
        },
        "description": {
            "he": "בת ים, ישראל",
            "en": "Bat Yam, Israel"
        },
        "address": {
            "he": "בת ים, ישראל",
            "en": "Bat Yam, Israel"
        },
        "categoryId": 8,
        "url": "",
        "latitude": "32.0196029",
        "longitude": "34.7569879",
        "coords3d": {
            "x": "32.0196029",
            "y": "34.7569879",
            "z": 0
        },
        "distanceToPoint": {
            "walk": "736",
            "bike": "735",
            "drive": "1283"
        },
        "timeToPoint": {
            "walk": "563",
            "bike": "145",
            "drive": "274"
        },
        "phone": "",
        "internationalPhone": "",
        "customPhone": "",
        "promotion": [
            {
                "name": {
                    "he": "",
                    "en": ""
                },
                "description": {
                    "he": "",
                    "en": ""
                },
                "url": "",
                "timeToLive": ""
            }
        ],
        "googleMapsID": {
            "value": "ChIJNawqB2qzAhURk_aGxjwQbfs"
        }
    },
    {
        "name": {
            "he": "גן יצחק רבין",
            "en": "Yitshak Rabin Garden"
        },
        "description": {
            "he": "בת ים, ישראל",
            "en": "Bat Yam, Israel"
        },
        "address": {
            "he": "בת ים, ישראל",
            "en": "Bat Yam, Israel"
        },
        "categoryId": 8,
        "url": "",
        "latitude": "32.023606",
        "longitude": "34.7521534",
        "coords3d": {
            "x": "32.023606",
            "y": "34.7521534",
            "z": 0
        },
        "distanceToPoint": {
            "walk": "1536",
            "bike": "1697",
            "drive": "1425"
        },
        "timeToPoint": {
            "walk": "1125",
            "bike": "279",
            "drive": "307"
        },
        "phone": "",
        "internationalPhone": "",
        "customPhone": "",
        "promotion": [
            {
                "name": {
                    "he": "",
                    "en": ""
                },
                "description": {
                    "he": "",
                    "en": ""
                },
                "url": "",
                "timeToLive": ""
            }
        ],
        "googleMapsID": {
            "value": "ChIJnWrrmUCzAhURk6S89lAoeuM"
        }
    },
    {
        "name": {
            "he": "קרית ספורט",
            "en": "Sports Campus"
        },
        "description": {
            "he": "קרית ספורט, חולון, ישראל",
            "en": "Sports Campus, Holon, Israel"
        },
        "address": {
            "he": "קרית ספורט, חולון, ישראל",
            "en": "Sports Campus, Holon, Israel"
        },
        "categoryId": 8,
        "url": "",
        "latitude": "32.002841",
        "longitude": "34.75756500000001",
        "coords3d": {
            "x": "32.002841",
            "y": "34.75756500000001",
            "z": 0
        },
        "distanceToPoint": {
            "walk": "1763",
            "bike": "1970",
            "drive": "2068"
        },
        "timeToPoint": {
            "walk": "1281",
            "bike": "379",
            "drive": "453"
        },
        "phone": "",
        "internationalPhone": "",
        "customPhone": "",
        "promotion": [
            {
                "name": {
                    "he": "",
                    "en": ""
                },
                "description": {
                    "he": "",
                    "en": ""
                },
                "url": "",
                "timeToLive": ""
            }
        ],
        "googleMapsID": {
            "value": "ChIJwZFup3azAhURHumYklf3sfs"
        }
    },
    {
        "name": {
            "he": "גן הי\"א",
            "en": "HaYod-Alef Garden"
        },
        "description": {
            "he": "בת ים, ישראל",
            "en": "Bat Yam, Israel"
        },
        "address": {
            "he": "בת ים, ישראל",
            "en": "Bat Yam, Israel"
        },
        "categoryId": 8,
        "url": "",
        "latitude": "32.012021",
        "longitude": "34.7562973",
        "coords3d": {
            "x": "32.012021",
            "y": "34.7562973",
            "z": 0
        },
        "distanceToPoint": {
            "walk": "537",
            "bike": "806",
            "drive": "1159"
        },
        "timeToPoint": {
            "walk": "412",
            "bike": "199",
            "drive": "339"
        },
        "phone": "",
        "internationalPhone": "",
        "customPhone": "",
        "promotion": [
            {
                "name": {
                    "he": "",
                    "en": ""
                },
                "description": {
                    "he": "",
                    "en": ""
                },
                "url": "",
                "timeToLive": ""
            }
        ],
        "googleMapsID": {
            "value": "ChIJwftHTGyzAhUR_ce1QhW8yFc"
        }
    },
    {
        "name": {
            "he": "גן אשכול",
            "en": "Eshkol Garden"
        },
        "description": {
            "he": "רח' בר אילן, בת ים, ישראל",
            "en": "רח' בר אילן, בת ים, Israel"
        },
        "address": {
            "he": "רח' בר אילן, בת ים, ישראל",
            "en": "רח' בר אילן, בת ים, Israel"
        },
        "categoryId": 8,
        "url": "http://www.bat-yam.muni.il/%D7%92%D7%A0%D7%99%D7%9D_%D7%95%D7%9E%D7%A8%D7%97%D7%91_%D7%A6%D7%99%D7%91%D7%95%D7%A8%D7%99",
        "latitude": "32.01235340000001",
        "longitude": "34.7447284",
        "coords3d": {
            "x": "32.01235340000001",
            "y": "34.7447284",
            "z": 0
        },
        "distanceToPoint": {
            "walk": "1380",
            "bike": "1480",
            "drive": "1352"
        },
        "timeToPoint": {
            "walk": "1015",
            "bike": "336",
            "drive": "300"
        },
        "phone": "",
        "internationalPhone": "",
        "customPhone": "",
        "promotion": [
            {
                "name": {
                    "he": "",
                    "en": ""
                },
                "description": {
                    "he": "",
                    "en": ""
                },
                "url": "",
                "timeToLive": ""
            }
        ],
        "googleMapsID": {
            "value": "ChIJL7VhIA6zAhURQMb2o8nRsk4"
        }
    },
    {
        "name": {
            "he": "גן דניאל",
            "en": "Daniel Garden"
        },
        "description": {
            "he": "בת ים, ישראל",
            "en": "Bat Yam, Israel"
        },
        "address": {
            "he": "בת ים, ישראל",
            "en": "Bat Yam, Israel"
        },
        "categoryId": 8,
        "url": "",
        "latitude": "32.0179067",
        "longitude": "34.7504267",
        "coords3d": {
            "x": "32.0179067",
            "y": "34.7504267",
            "z": 0
        },
        "distanceToPoint": {
            "walk": "770",
            "bike": "916",
            "drive": "1226"
        },
        "timeToPoint": {
            "walk": "582",
            "bike": "174",
            "drive": "261"
        },
        "phone": "",
        "internationalPhone": "",
        "customPhone": "",
        "promotion": [
            {
                "name": {
                    "he": "",
                    "en": ""
                },
                "description": {
                    "he": "",
                    "en": ""
                },
                "url": "",
                "timeToLive": ""
            }
        ],
        "googleMapsID": {
            "value": "ChIJ3WkX5xSzAhURvvsG6n0jWjQ"
        }
    },
    {
        "name": {
            "he": "גן העיר ע\"ש בגין",
            "en": "Begin City Garden"
        },
        "description": {
            "he": "בת ים, ישראל",
            "en": "Bat Yam, Israel"
        },
        "address": {
            "he": "בת ים, ישראל",
            "en": "Bat Yam, Israel"
        },
        "categoryId": 8,
        "url": "",
        "latitude": "32.0098653",
        "longitude": "34.74115159999999",
        "coords3d": {
            "x": "32.0098653",
            "y": "34.74115159999999",
            "z": 0
        },
        "distanceToPoint": {
            "walk": "1890",
            "bike": "1894",
            "drive": "1889"
        },
        "timeToPoint": {
            "walk": "1370",
            "bike": "377",
            "drive": "397"
        },
        "phone": "",
        "internationalPhone": "",
        "customPhone": "",
        "promotion": [
            {
                "name": {
                    "he": "",
                    "en": ""
                },
                "description": {
                    "he": "",
                    "en": ""
                },
                "url": "",
                "timeToLive": ""
            }
        ],
        "googleMapsID": {
            "value": "ChIJfTO4Zw-zAhURB3h8uKH7AZQ"
        }
    }
];
basePoiData.forEach(function(item){
    let newArrayElement = {
        "name": [
            { "lang": "en", "value": item.name.en },
            { "lang": "he", "value": item.name.he }
        ],
        "description": [
            { "lang": "en", "value": item.description.en },
            { "lang": "he", "value": item.description.he }
        ],
        "address": [
            { "lang": "en", "value": item.address.en },
            { "lang": "he", "value": item.address.he }
        ],
        "categoryId": item.categoryId,
        "url": item.url,
        "latitude": item.latitude,
        "longitude": item.longitude,
        "coords3d": item.coords3d,
        "distanceToPoint": item.distanceToPoint,
        "timeToPoint": item.timeToPoint,
        "phone": item.phone,
        "internationalPhone": item.internationalPhone,
        "customPhone": item.customPhone,
        "promotion": [
            {
                "name": [
                    { "lang": "en", "value": "" },
                    { "lang": "he", "value": "" }
                ],
                "description": [
                    { "lang": "en", "value": "" },
                    { "lang": "he", "value": "" }
                ],
                "url": "",
                "timeToLive": "1970-01-01 00:00"
            }
        ],
        "googleMapsID": item.googleMapsID
    };
    poiData.push(newArrayElement);
});


// this variable contains all poi categories
let poiCategoriesData  = [{"name":[{"lang":"en","value":"Restaurants"},{"lang":"he","value":"מסעדות"}],"description":[{"lang":"en","value":"Cafes Description"},{"lang":"he","value":"Cafes Description"}],"categoryId":"1","color":"#d69131","icon":"restaurants_f","iconMenu":"restaurants_i"},{"name":[{"lang":"en","value":"Culture"},{"lang":"he","value":"Culture"}],"description":[{"lang":"en","value":"Culture"},{"lang":"he","value":"Culture"}],"categoryId":"2","color":"#EB5757","icon":"culture_f","iconMenu":"culture_i"},{"name":[{"lang":"en","value":"Public Transport(min)"},{"lang":"he","value":"תחבורה"}],"description":[{"lang":"en","value":"Public Transport(min)"},{"lang":"he","value":"תחבורה"}],"categoryId":"3","color":"#F2994A","icon":"transport_f","iconMenu":"transport_i"},{"name":[{"lang":"en","value":"Healthcare"},{"lang":"he","value":"בריאות"}],"description":[{"lang":"en","value":"Healthcare"},{"lang":"he","value":"בריאות"}],"categoryId":"4","color":"#FDC536","icon":"healthcare_f","iconMenu":"healthcare_i"},{"name":[{"lang":"en","value":"General"},{"lang":"he","value":"כללי"}],"description":[{"lang":"en","value":"General"},{"lang":"he","value":"כללי"}],"categoryId":"5","color":"#6FCF97","icon":"general_f","iconMenu":"general_i"},{"name":[{"lang":"en","value":"Supermarkets"},{"lang":"he","value":"Supermarkets"}],"description":[{"lang":"en","value":"Supermarkets"},{"lang":"he","value":"Supermarkets"}],"categoryId":"6","color":"#219653","icon":"supermarkets_f","iconMenu":"supermarkets_i"},{"name":[{"lang":"en","value":"Shopping"},{"lang":"he","value":"Shopping"}],"description":[{"lang":"en","value":"Shopping"},{"lang":"he","value":"Shopping"}],"categoryId":"7","color":"#2F80ED","icon":"shopping_f","iconMenu":"shopping_i"},{"name":[{"lang":"en","value":"Parks"},{"lang":"he","value":"פארקים"}],"description":[{"lang":"en","value":"Parks"},{"lang":"he","value":"פארקים"}],"categoryId":"8","color":"#D95877","icon":"park_f","iconMenu":"park_i"},{"name":[{"lang":"en","value":"Business"},{"lang":"he","value":"עסק"}],"description":[{"lang":"en","value":"עסק"},{"lang":"he","value":"Business"}],"categoryId":"9","color":"#EB5757","icon":"business_f","iconMenu":"business_i"},{"name":[{"lang":"en","value":"Construction"},{"lang":"he","value":"בניה"}],"description":[{"lang":"en","value":"Construction"},{"lang":"he","value":"בניה"}],"categoryId":"10","color":"#F2994A","icon":"construction_f","iconMenu":"construction_i"},{"name":[{"lang":"en","value":"Beaches"},{"lang":"he","value":"Beaches"}],"description":[{"lang":"en","value":"Beaches"},{"lang":"he","value":"Beaches"}],"categoryId":"11","color":"#FDC536","icon":"beaches_f","iconMenu":"beaches_i"},{"name":[{"lang":"en","value":"Sports"},{"lang":"he","value":"ספורט"}],"description":[{"lang":"en","value":"Sports"},{"lang":"he","value":"ספורט"}],"categoryId":"12","color":"#6FCF97","icon":"sports_f","iconMenu":"sports_i"},{"name":[{"lang":"en","value":"Subway"},{"lang":"he","value":"רכבת תחתית"}],"description":[{"lang":"en","value":"Subway"},{"lang":"he","value":"רכבת תחתית"}],"categoryId":"13","color":"#219653","icon":"subway_f","iconMenu":"subway_i"},{"name":[{"lang":"en","value":"Street"},{"lang":"he","value":"רחוב"}],"description":[{"lang":"en","value":"Street"},{"lang":"he","value":"רחוב"}],"categoryId":"14","color":"#2F80ED","icon":"streets_f","iconMenu":"streets_i"},{"name":[{"lang":"en","value":"Kosher"},{"lang":"he","value":"Kosher"}],"description":[{"lang":"en","value":"Kosher"},{"lang":"he","value":"Kosher"}],"categoryId":"15","color":"#D95877","icon":"kosher_f","iconMenu":"kosher_i"},{"name":[{"lang":"en","value":"Synagogue"},{"lang":"he","value":"Synagogue"}],"description":[{"lang":"en","value":"Synagogue"},{"lang":"he","value":"Synagogue"}],"categoryId":"16","color":"#EB5757","icon":"synagogue_f","iconMenu":"synagogue_i"},{"name":[{"lang":"en","value":"For kids"},{"lang":"he","value":"For kids"}],"description":[{"lang":"en","value":"For kids"},{"lang":"he","value":"For kids"}],"categoryId":"17","color":"#F2994A","icon":"kids_f","iconMenu":"kids_i"},{"name":[{"lang":"en","value":"Office"},{"lang":"he","value":"משרד"}],"description":[{"lang":"en","value":"Office"},{"lang":"he","value":"משרד"}],"categoryId":"18","color":"#FDC536","icon":"office_f","iconMenu":"office_i"},{"name":[{"lang":"en","value":"Bus stations"},{"lang":"he","value":"Bus stations"}],"description":[{"lang":"en","value":"Bus stations"},{"lang":"he","value":"Bus stations"}],"categoryId":"19","color":"#6FCF97","icon":"busStation_f","iconMenu":"busStation_i"},{"name":[{"lang":"en","value":"Cafes"},{"lang":"he","value":"Cafes"}],"description":[{"lang":"en","value":"Cafes"},{"lang":"he","value":"Cafes"}],"categoryId":"20","color":"#219653","icon":"cafes_f","iconMenu":"cafes_i"},{"name":[{"lang":"en","value":"Education"},{"lang":"he","value":"חינוך"}],"description":[{"lang":"en","value":"Education"},{"lang":"he","value":"חינוך"}],"categoryId":"21","color":"#2F80ED","icon":"education_f","iconMenu":"education_i"}];

function get_url_param (name) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams != undefined) {
        let param = urlParams.get(name);
        if (param != null) {
            return param;
        } else {
            return false;
        }
    }
}
let lang = 'en';
if (get_url_param('lang')) {
    lang = get_url_param('lang');
}
const dir = 'ltr';
let canvasClass = 'bmby-poi-wrapp';
let mode = 'dev';
let detectMobile = detect_mobile();
let query = '?key=AIzaSyDuH95F2ljG3Z-AtGByCNYMkaUwwGc-SUc&libraries=places';

let marker_text_color = 'white';
window.markers_poi_array = [];
let gestureHandling = 'cooperative';
let map;
let mapGlobalOption;
let xDown = null;
let yDown = null;
let miniCardIsOpened = false;

try{
    nonExistentFunction();
} catch (e) {
    if(mode === 'dev'){
        console.log('unable to run callback');
    }
}


poiCategoriesData.forEach(category =>{
    category.data =[];
    poiData.forEach(poi =>{
       if (Number(category.categoryId) === poi.categoryId){
           category.data.push(poi);
       }
    });
});

document.addEventListener("DOMContentLoaded",()=>{
    let scriptInterval;
    addDeviceClass();
    addFont();
    loadDefaultIcons();
    addBasicStyle();
    createScript(hb1,'text/x-handlebars-template','marker-content-template');
    createScript(hb2,'text/x-handlebars-template','exp-map-template');

    scriptInterval = setInterval(()=>{
        addScripts();
        if (scriptsChecker()){
            clearInterval(scriptInterval);
            init_map();
        }
    },200);

});

function get_lang (word) {
    if (lang === 'en'){
        return dictionary[word]['en'];
    } else {
        return dictionary[word]['he'];
    }
}

function addDeviceClass () {
    if (!detectMobile) {
        document.querySelector('body').classList.add('desktop');
    }  else {
        document.querySelector('body').classList.add('mobile');
    }
}

function clearContent(targetContent) {
    if (targetContent.firstChild){
        targetContent.removeChild(targetContent.firstChild);
    }
    // while (targetContent.firstChild) {
    //     targetContent.removeChild(targetContent.firstChild);
    // }
}

function detect_mobile() {
    const a = navigator.userAgent || navigator.vendor || window.opera;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
    {
        return true;

    } else {
        return false;
    }
}

function addBasicStyle () {
    document.head.innerHTML +='<style>'+resetCss+'</style>';
    document.head.innerHTML +='<style>'+styleCss+'</style>';
    document.head.innerHTML +='<style>'+expMapStyle+'</style>';
    document.head.innerHTML +='<style id="newStyle">'+newStyle+'</style>';
    if (detectMobile){
        document.head.innerHTML +='<style>'+mobileStyle+'</style>';
    }
    if (dir === 'rtl'){
        document.head.innerHTML +='<style>'+rtlStyle+'</style>';
    }
}

function loadDefaultIcons () {
    Object.keys(projectIcons).forEach(key =>{
        const regExp = new RegExp(key,'g');
        expMapStyle = expMapStyle.replace(regExp, generateSvg(projectIcons,key));
        newStyle = newStyle.replace(regExp, generateSvg(projectIcons,key));
    });
}


function addFont() {
    document.head.innerHTML += '<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500&display=swap" rel="stylesheet">';
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
    const polyfill = isLoadedScript('https://polyfill.io/v3/polyfill.min.js?features=default');
    if (!polyfill){
        loadScript('https://polyfill.io/v3/polyfill.min.js?features=default');
    }
    const clipboard = isLoadedScript('https://cdn.statically.io/gh/zenorocha/clipboard.js/v2.0.4/dist/clipboard.min.js');
    if (!clipboard){
        loadScript('https://cdn.statically.io/gh/zenorocha/clipboard.js/v2.0.4/dist/clipboard.min.js');
    }
    const handlebars = isLoadedScript('https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js');
    if (!handlebars){
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js');
    }
    const markerCluster = isLoadedScript('https://unpkg.com/@google/markerclustererplus@4.0.1/dist/markerclustererplus.min.js');
    if (!markerCluster){
        loadScript('https://unpkg.com/@google/markerclustererplus@4.0.1/dist/markerclustererplus.min.js');
    }
    const mapApi = isLoadedScript('https://maps.googleapis.com/maps/api/js'+query+'&language='+lang);
    if (!mapApi){
        loadScript('https://maps.googleapis.com/maps/api/js'+query+'&language='+lang)
    }
    const snazzy = isLoadedScript('https://cdn.jsdelivr.net/npm/snazzy-info-window@1.1.1/dist/snazzy-info-window.min.js');
    if (!snazzy){
        loadScript('https://cdn.jsdelivr.net/npm/snazzy-info-window@1.1.1/dist/snazzy-info-window.min.js');
    }
}

function scriptsChecker () {
    return Boolean(window.$ && window.Handlebars && window.MarkerClusterer && window.ClipboardJS && window.google.maps && window.SnazzyInfoWindow);
}

function createScript(scriptText,scriptType, scriptId) {
    const script = document.createElement('script');
    if (scriptId){
        script.setAttribute('id',scriptId);
    }
    script.type = scriptType;
    script.text = scriptText;
    script.async =false;
    document.head.appendChild(script);
}

function generateSvgCluster (color) {
    const encoded = window.btoa('<svg width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M40.3094 26.3754C41.394 23.9921 42 21.332 42 18.5263C42' +
      ' 8.29451 33.9411 0 24 0C14.0589 0 6 8.29451 6 18.5263C6 21.332 6.60598 23.9921 7.69059 26.3754C11.0867' +
      ' 34.3491 18.852 40.762 24 44C29.148 40.762 36.9133 34.3491 40.3094 26.3754Z" fill="'+color+'"/>' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.0001 0.256205C29.5132 1.72623 36 9.3466 36 18.5264C36' +
      ' 21.3321 35.394 23.9921 34.3094 26.3754C31.5259 32.9109 25.807 38.398 21 41.9476C16.193 38.398 10.4741' +
      ' 32.9109 7.69058 26.3754C6.60598 23.9921 5.99999 21.3321 5.99999 18.5264C5.99999 9.34658 12.4869 1.72617' +
      ' 21.0001 0.256205ZM19.6326 42.9236C14.7788 39.2673 9.08068 33.7085 6.22617 27.0203C5.05342 24.4367 4.39999' +
      ' 21.5573 4.39999 18.5264C4.39999 10.3246 9.19186 3.22973 16.0941 0.102661C7.04894 1.0824 0 8.95712 0' +
      ' 18.5264C0 21.3321 0.605981 23.9921 1.69059 26.3754C5.08668 34.3491 12.852 40.7621 18 44C18.5199 43.673' +
      ' 19.0665 43.3137 19.6326 42.9236Z" fill="'+color+'"/>' +
      '</svg>');

    return ('data:image/svg+xml;base64,' + encoded);
}

function generateSvg (iconColection,icon,color,newColor) {
    let iconSvg;
    const getIcon = iconColection[icon];
    if (getIcon){
        if (color && newColor){
            const regExp = new RegExp(color,'g');
            iconSvg = getIcon.replace(regExp,newColor);
        } else {
            iconSvg = getIcon;
        }
        const encoded = window.btoa(iconSvg);

        return ('data:image/svg+xml;base64,' + encoded);
    } else {
        return generateSvgCluster(color|| '#C0C0C0');
    }
}


function init_map () {
    let map_json_data;
    if (detectMobile) {
        document.querySelector('.'+canvasClass).classList.add('for-app');
    }

    map_style = [
        {
            featureType: "poi",
            stylers: [
                { visibility: "off" }
            ]
        }
    ];

    marker_text_color = 'black';
    gestureHandling = 'greedy';

    let options = {};


    // let map_settings = map_json_data.map_settings;
    // let map_markers = map_json_data.markers_without_filter;
    options.container = document.querySelector('.'+canvasClass);
    options.filtered_markers={};
    let key =0;


    poiCategoriesData.forEach(category =>{
        if (category.data.length > 0){
            const categoryName = category.name.filter(elName=>elName.lang === lang)[0].value;
            category.data.forEach(catData =>{
                const dataName = catData.name.filter(dataElementName => dataElementName.lang === lang)[0].value;
                const description = catData.description.filter(dataDescription => dataDescription.lang === lang)[0].value;
                const obj = {
                    [key]:{
                        'category': categoryName,
                        'title': dataName,
                        'lat': catData.latitude,
                        'lng': catData.longitude,
                        'color': category.color,
                        'marker_icon': generateSvg(poiIcons,category.icon,'#C0C0C0', category.color),
                        'cluster_icon': generateSvgCluster('#6E767E'),
                        'category_title': categoryName,
                        'category_zoom': 16,
                        'category_img': generateSvg(poiIcons,category.iconMenu,'white',category.color),
                        'info_window_img': 'null',
                        'marker_description': description,
                        'web_site_url': catData.url,
                    }
                };
                key++;
                Object.assign(options.filtered_markers,obj);
            });
        }
    });

    // options.filtered_markers = map_json_data.map_markers_with_filter;
    let template_1 = window.Handlebars.compile($('#exp-map-template').html());
    options.popup_templates = [template_1];
    options.map_settings = {
        map_style : map_style,
        lng : 34.755352,
        lat : 32.016060,
        zoom: 20,
        static_markers : {
            '0':{
                'title': 'Ayalon Quarter',
                'lat': 32.016060,
                'lng': 34.755352,
                'marker_icon': generateSvg(poiIcons,'mainBuilding','#C0C0C0','#000000'),
                'marker_text': '',
                // 'title': 'Odessa 2020',
                // 'lat': 46.435974,
                // 'lng': 30.7610757,
                // 'marker_icon': generateSvg(poiIcons,'mainBuilding','#C0C0C0','#000000'),
                // 'marker_text': '',
            }
        },
    };

    let experimental_map_obj = add_experimental_map(options);

}

function add_experimental_map (options) {
    mapGlobalOption = options;

    let container = options.container;

    let map_filtered_markers = options.filtered_markers;
    let popup_templates = options.popup_templates;
    let map_settings = options.map_settings;
    let experimental_map_obj = {};
    let map_filtered_markers_on_map = [];
    let global_cluster = [];
    let directionsService = new google.maps.DirectionsService;
    let directionsRenderer = new google.maps.DirectionsRenderer({
        suppressMarkers: true,
        preserveViewport: true,
        provideRouteAlternatives: true,
        /*        polylineOptions: {
                    strokeColor : '#ff0000'
                }*/
    });
    // if (get_url_param('lang') == 'en') {
    //     $('html').attr('dir', 'ltr');
    //     $('html').attr('lang', 'en');
    // }


    // Add map container
    $(container).addClass('map-parent');
    let map_container_html = '<div class="map-container"></div>';
    $(container).append(map_container_html);
    let btns_html = `
        <div class="zoom-control">
            <div class="plus zoom-control-btn"></div>
            <div class="sep"></div>
            <div class="minus zoom-control-btn"></div>
        </div>
        <div class="fullscreen-control"></div>
        <div class="map-type">
            <div class="map-type-toggler roadmap"><span class="const-text">Change map type to:</span><span class="var-text">לווין</span></div>
        </div>
        <div class="route-panel"></div> 
        <div class="filter">
            <div class="filter-btn">
                
            </div>
            <div class="filters-list-wrap">            
                <div class="filters-list"></div>
            </div>
        </div>
        <div class="map__go-home__btn">
            <img class="home-btn__img" src="#" alt="home button">
        </div>
        <div class="snazzy-card__window"></div>
    `;
    $(container).append(btns_html);

    let btnGoHome = document.querySelector('.map__go-home__btn');
    btnGoHome.addEventListener('click', mapHomeHandler);

    function mapHomeHandler(){
        smoothlyAnimatePanTo(map, center);
    }

    function changeBtnStyleWhenCardOpened (container, action) {
        let openInterval;
        if (detectMobile){
            mapCenterChangeHandler();
            const filterBtn = document.querySelector('.filter-btn');
            const mapType = document.querySelector('.map-type');
            const zoomContainer = document.querySelector('.zoom-control');
            if (action === 'open'){
                openInterval = setInterval(()=>{
                    if (miniCardIsOpened){
                        clearInterval(openInterval);
                        const containerHeight = container.getBoundingClientRect().height;
                        // filterBtn.style.bottom = 10 + containerHeight +'px';
                        mapType.style.bottom = 10 +containerHeight+'px';
                        zoomContainer.style.bottom = 10 + containerHeight+ 'px';
                    }
                },100);
            }else if (action === 'close'){
                filterBtn.style.bottom = '10px';
                mapType.style.bottom = '70px';
                zoomContainer.style.bottom = '10px';
                miniCardIsOpened = false;
            }
        }
    }


    function mapCenterChangeHandler(){
        var destPixel = getPixel(center, map.getZoom());
        var mapPixel = getPixel(map.getCenter(), map.getZoom());
        var diffX = (destPixel.x - mapPixel.x);
        var diffY = (destPixel.y - mapPixel.y);
        const max = 50;
        const min = 0;
        const scale = (1740 / window.innerWidth) * 3;
        let addY = window.innerWidth / window.innerHeight;
        let cardHeight = 0;
        const homeIcon = document.querySelector('.home-btn__img');
        const card = document.querySelector('.si-wrapper-top.custom-window.open.active');
        let mapHeight = window.innerHeight / 1.7;

        if (card){
            mapHeight = mapHeight - card.getBoundingClientRect().height;
        }

        if (Math.abs(diffX) > window.innerWidth / 1.7 || (diffY > window.innerHeight / 2.7 && Math.abs(diffY) > mapHeight) ||(diffY < (window.innerHeight / 2) * -1 && Math.abs(diffY) > mapHeight) || (!card && Math.abs(diffY) > mapHeight )){

            if (card){
                cardHeight = card.getBoundingClientRect().height;
            }

                diffX = diffX * scale;
                diffY = diffY * scale;

            if (diffY < 0){
                removeAllStyleProporty();
                const calcY = max - (Math.abs(diffY) / max) * addY;
                if (calcY <= max && calcY > min){
                    btnGoHome.style.top = calcY +'%';
                } else {
                    btnGoHome.style.top = 0;
                }
                if (diffX > 0){
                    const calcX = max - (diffX / max);
                    if (calcX <= max && calcX > min){
                        btnGoHome.style.right = calcX +'%';
                    } else {
                        btnGoHome.style.right = 0;
                    }
                }
                if (diffX < 0){
                    const calcX = max - (Math.abs(diffX) / max);
                    if (calcX <= max && calcX > min){
                        btnGoHome.style.left = calcX +'%';
                    }else {
                        btnGoHome.style.left = 0;
                    }
                }

                if (parseFloat(btnGoHome.style.top) > 0 && parseFloat(btnGoHome.style.left) > 0){
                    if (parseFloat(btnGoHome.style.top) > parseFloat(btnGoHome.style.left)){
                        btnGoHome.style.left = 0;
                    }else {
                        btnGoHome.style.top = 0;
                    }
                }

                if (parseFloat(btnGoHome.style.top) > 0 && parseFloat(btnGoHome.style.right) > 0){
                    if (parseFloat(btnGoHome.style.top) > parseFloat(btnGoHome.style.right)){
                        btnGoHome.style.right = 0;
                    }else {
                        btnGoHome.style.top = 0;
                    }
                }

                if (parseFloat(btnGoHome.style.top) === 0){
                    homeIcon.src = generateSvg(projectIcons,'HOME__TOP');
                }

                if (parseFloat(btnGoHome.style.right) === 0){
                    homeIcon.src = generateSvg(projectIcons, 'HOME__RIGHT');
                }

                if (parseFloat(btnGoHome.style.left) === 0){
                    homeIcon.src = generateSvg(projectIcons, 'HOME__LEFT');
                }

                if (parseFloat(btnGoHome.style.top) === 0 && parseFloat(btnGoHome.style.left) === 0){
                    homeIcon.src = generateSvg(projectIcons,'HOME__TOP__LEFT');
                }

                if (parseFloat(btnGoHome.style.top) === 0 && parseFloat(btnGoHome.style.right) === 0){
                    homeIcon.src = generateSvg(projectIcons, 'HOME__TOP__RIGHT');
                }

            } else {
                removeAllStyleProporty();
                const calcY = max - (Math.abs(diffY) / max) * addY;
                if (calcY <= max && calcY > min){
                    if (card){
                        if (calcY > ((cardHeight * 100) / window.innerHeight)){
                            btnGoHome.style.bottom = calcY+'%';
                        } else {
                            btnGoHome.style.bottom = cardHeight+'px';
                        }
                    } else {
                        btnGoHome.style.bottom = calcY+'%';
                    }
                } else {
                    if (card){
                        btnGoHome.style.bottom = cardHeight+'px';
                    }else {
                        btnGoHome.style.bottom = 0;
                    }
                }

                if(diffX > 0){
                    const calcX = max - (diffX / max);
                    if (calcX <= max && calcX > min){
                        btnGoHome.style.right = calcX +'%';
                    } else {
                        btnGoHome.style.right = 0;
                    }
                }
                if (diffX < 0){
                    const calcX = max - (Math.abs(diffX) / max);
                    if (calcX <= max && calcX > min){
                        btnGoHome.style.left = calcX +'%';
                    }else {
                        btnGoHome.style.left = 0;
                    }
                }

                if (!card){
                    if (parseFloat(btnGoHome.style.bottom) > 0 && parseFloat(btnGoHome.style.left) > 0){
                        if (parseFloat(btnGoHome.style.bottom) > parseFloat(btnGoHome.style.left)){
                            btnGoHome.style.left = 0;
                        }else {
                            btnGoHome.style.bottom = 0;
                        }
                    }

                    if (parseFloat(btnGoHome.style.bottom) > 0 && parseFloat(btnGoHome.style.right) > 0){
                        if (parseFloat(btnGoHome.style.bottom) > parseFloat(btnGoHome.style.right)){
                            btnGoHome.style.right = 0;
                        }else {
                            btnGoHome.style.bottom = 0;
                        }
                    }
                }


                if(!card){
                    if (parseFloat(btnGoHome.style.bottom) === 0){
                        homeIcon.src = generateSvg(projectIcons, 'HOME__BOTTOM');
                    }

                    if (parseFloat(btnGoHome.style.right) === 0){
                        homeIcon.src = generateSvg(projectIcons, 'HOME__RIGHT');
                    }

                    if (parseFloat(btnGoHome.style.left) === 0){
                        homeIcon.src = generateSvg(projectIcons,'HOME__LEFT');
                    }

                    if (parseFloat(btnGoHome.style.bottom) === 0 && parseFloat(btnGoHome.style.left) === 0){
                        homeIcon.src = generateSvg(projectIcons, 'HOME__BOTTOM__LEFT');
                    }

                    if (parseFloat(btnGoHome.style.bottom) === 0 && parseFloat(btnGoHome.style.right) === 0){
                        homeIcon.src = generateSvg(projectIcons, 'HOME__BOTTOM__RIGHT');
                    }
                } else {
                    if (Math.floor(parseFloat(btnGoHome.style.bottom)) === Math.floor(cardHeight)){
                        homeIcon.src = generateSvg(projectIcons, 'HOME__BOTTOM');
                    }

                    if (parseFloat(btnGoHome.style.right) === 0){
                        homeIcon.src = generateSvg(projectIcons, 'HOME__RIGHT');
                    }

                    if (parseFloat(btnGoHome.style.left) === 0){
                        homeIcon.src = generateSvg(projectIcons, 'HOME__LEFT');
                    }

                    if (Math.floor(parseFloat(btnGoHome.style.bottom)) === Math.floor(cardHeight) && parseFloat(btnGoHome.style.left) === 0){
                        homeIcon.src = generateSvg(projectIcons, 'HOME__BOTTOM__LEFT');
                    }

                    if (Math.floor(parseFloat(btnGoHome.style.bottom)) === Math.floor(cardHeight) && parseFloat(btnGoHome.style.right) === 0){
                        homeIcon.src = generateSvg(projectIcons, 'HOME__BOTTOM__RIGHT');
                    }

                }

            }
        } else {
            removeAllStyleProporty();
        }

    }

    function removeAllStyleProporty(){
        btnGoHome.style.removeProperty('top');
        btnGoHome.style.removeProperty('bottom');
        btnGoHome.style.removeProperty('left');
        btnGoHome.style.removeProperty('right');
    }

    // Add map container end
    let map_container = $(container).find('.map-container')[0];

    let center = new google.maps.LatLng(options.map_settings.lat, options.map_settings.lng);
    let mapOptions = {
        zoom: options.map_settings.zoom,
        center: center,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        rotateControl: false,
        styles: options.map_settings.map_style,
        scrollwheel: true,
        zoomControl: false,
        scaleControl: false,
        fullscreenControl: false,
        gestureHandling : gestureHandling,
    };
    map = new google.maps.Map(map_container, mapOptions);

    map.addListener('center_changed', mapCenterChangeHandler);
    map.addListener('click', mapClickHandler);

    function mapClickHandler(){
        const card = document.querySelector('.si-wrapper-top.custom-window.open');
        if (card){
            card.remove();
            directionsRenderer.setMap(null);
            changeBtnStyleWhenCardOpened(document.querySelector('.custom-window'),'close');
        }
    }

    experimental_map_obj.map = map;

    directionsRenderer.setMap(map);

    let filter = $(container).find('.filter');
    let filter_list = $(container).find('.filters-list');
    let filter_open = false;
    $(container).find('.filter-btn').click(function(){
        $(this).toggleClass('open');
        $(container).find('.map-container').toggleClass('open');
        filter_list_animate ();
    });
    $(window).resize(filters_list_on_resize);
    function filters_list_on_resize () {
        let container_height = $(container).outerHeight();
        if (filter_open == true) {
            filter_list.parent().css({
                'top' : container_height * -1
            });
        } else {
            filter_list.parent().css({
                'top' : 0
            });
        }
    }
    function filter_list_animate () {
        let container_height = $(container).outerHeight();
        if (filter_open == true) {
            filter_open = false;
            filter_list.parent().animate({
                'top' : 0
            }, 500);
        } else {
            filter_list.parent().animate({
                'top' : container_height * -1
            }, 500);
            filter_open = true;
        }
    }

    $(container).find('.zoom-control-btn.plus').click(function(){
        let target_zoom = map.getZoom() + 1;
        map.setZoom(target_zoom);
        // map.setMapTypeId('satellite' );
    });

    $(container).find('.zoom-control-btn.minus').click(function(){
        let target_zoom = map.getZoom() -1;
        map.setZoom(target_zoom);
        // map.setMapTypeId('roadmap' );
    });

    $(container).find('.fullscreen-control').click(function(){
        console.log(document.fullscreenElement);
        if (document.fullscreenElement) {
            document.exitFullscreen();
            mapOptions.gestureHandling = 'cooperative';
            map.setOptions(mapOptions);
        } else {
            mapOptions.gestureHandling = 'greedy';
            map.setOptions(mapOptions);
            container.requestFullscreen();
        }
        $('#map').toggleClass('fullscreen');
    });
    $(container).find('.map-type-toggler').click(function(){
        let this_el = $(this);
        if (this_el.hasClass('roadmap') == true) {
            changeMarkersLabelColor('#ffffff');
            changeDocumentStyleProperty('newStyle','.marker__label','filter','drop-shadow(0px 0px 1px black)' +
              ' drop-shadow(0px 0px 4px black)');
            map.setMapTypeId('satellite' );
            this_el.removeClass('roadmap');
            this_el.addClass('satellite');
            this_el.find('.var-text').html('מפת כבישים');
            map.setTilt(0);
        } else {
            map.setMapTypeId('roadmap' );
            changeMarkersLabelColor('#000000');
            changeDocumentStyleProperty('newStyle','.marker__label','filter','none');
            this_el.removeClass('satellite');
            this_el.addClass('roadmap');
            this_el.find('.var-text').html('לווין');
            map.setTilt(0);
        }
    });

    add_map_filter_n_clusters();


    function add_map_filter_n_clusters () {
        let static_markers = options.map_settings.static_markers;
        let markers_for_filter = options.filtered_markers;
        window.static_markers_on_map  = [];
        let template_1 = popup_templates[0];
        let filter_markers_categories = [];
        let snazzy_info_windows_arr = [];
        let static_markers_keys = Object.keys(static_markers)
        static_markers_keys.forEach(function(key){
            addMarker(static_markers[key]);
        });


        let markers_for_filter_keys = Object.keys(markers_for_filter)
        markers_for_filter_keys.forEach(function(key){
            add_filtered_Marker(markers_for_filter[key]);
        });
        /*        for (i = 0; i < static_markers.length; i++) {
                    addMarker(static_markers[i]);
                }*/

        /*        for (i = 0; i < markers_for_filter.length; i++) {
                    add_filtered_Marker(markers_for_filter[i]);
                }*/
        window.markers_clusters = {};
        let markers_list_html = '<div class="filter-list-btn active" data-category=""  data-category-zoom="' + options.map_settings.zoom + '"><span class="marker-ic all"  style="background-image: url(' + generateSvg(projectIcons,'ALL__CATEGORY__ICON') + ')" ></span><div class="move-part"><span class="text">' + get_lang('All points of interest') + '</span></div></div>';

        for (let category in filter_markers_categories) {
            let cluster_obj = {
                url: filter_markers_categories[category][0]['cluster_ic'],
                textColor : 'white',
                textSize : 20,
                width: 48,
                height: 44,
            };
            let  mcOptions = {
                ignoreHidden: true,
                styles: [
                    cluster_obj,
                    cluster_obj,
                    cluster_obj,
                    cluster_obj,
                    cluster_obj
                ]
            };

            let new_cluster =  new MarkerClusterer(map, filter_markers_categories[category], mcOptions);
            markers_clusters[category] = new_cluster;


            let marker_data = filter_markers_categories[category][0];
            markers_list_html += '<div class="filter-list-btn" data-category-zoom="' + marker_data.category_zoom +'" data-category="'+ category +'"><span class="marker-ic" style="background-image: url(' + marker_data.category_ic +')"></span><div class="move-part"><span class="text" style="color:'+marker_data.color+'">' + marker_data.category_title +'</span></div></div>'
            // markers_list_html += '<div class="filter-list-btn" data-category-zoom="' + marker_data.category_zoom +'" data-category="'+ category +'"><span class="marker-ic" style="background-image: url(' + marker_data.category_ic +')"></span><div class="move-part"><span class="text">' + marker_data.category_title +'</span></div></div>'

        }
        {
            // global cluster
            let cluster_obj = {
                url: generateSvgCluster('#6E767E'),
                textColor : 'white',
                textSize : 20,
                width: 48,
                height: 44,
            };
            let  mcOptions = {
                ignoreHidden: true,
                styles: [
                    cluster_obj,
                    cluster_obj,
                    cluster_obj,
                    cluster_obj,
                    cluster_obj
                ]
            };
            markers_clusters['all'] = new MarkerClusterer(map, [], mcOptions);
        }


        filter_list.html(markers_list_html);
        let filter_btns = filter_list.find('.filter-list-btn');
        filter_btns.click(function(){
            filter_btns.removeClass('active');
            $(this).addClass('active');
            $($(this).attr('data-category'));
            filterMarkers($(this).attr('data-category'));
            let target_zoom = mapGlobalOption.map_settings.zoom;
            // if ($(window).width() > 768) {
            //     target_zoom = target_zoom;
            // } else {
            //     target_zoom = target_zoom - 2;
            // }
            console.log('target_zoom: ' + target_zoom);
            map.setZoom(target_zoom);
            map.setCenter(mapOptions.center);
            snazzy_info_windows_arr.forEach(function(item){
                item.close();
            });
            filter_list_animate ()
            $(container).find('.filter-btn').toggleClass('open');
            $(container).find('.map-container').toggleClass('open');
            directionsRenderer.setMap(null);
            mapClickHandler();
        });


        function addMarker(marker) {
            var title = marker.title;
            var pos = new google.maps.LatLng(marker.lat, marker.lng);


            var content =  marker.marker_text;
            var icon_img = new google.maps.MarkerImage();
            icon_img.url = marker.marker_icon;
            {
                const queryString = window.location.search;
                const urlParams = new URLSearchParams(queryString);
                if (urlParams != undefined) {
                    let icon_version = urlParams.get('icon_v');
                    if (icon_version != null) {
                        icon_img.url = 'img/gindi_main_versions/' + icon_version;
                    }
                }
            }
            //icon_img.scaledSize = new google.maps.Size(100 ,100);
            //icon_img.size = new google.maps.Size(100,100);

            icon_img.labelOrigin = new google.maps.Point(18, 55);

            marker1 = new google.maps.Marker({
                title: title,
                position: pos,
                label : {
                    color : '#000000',
                    text : title,
                    fontWeight : '700',
                    textAlign : center,
                    className: 'marker__label',
                },
                map: map,
                icon: icon_img,
                animation: google.maps.Animation.DROP,
                zIndex : 99999999999999999999,
            });

            static_markers_on_map.push(marker1);

            // Marker click listener
            let snazzy_info_window;
            var closeDelayed = false;
            var closeDelayHandler = function() {
                $(snazzy_info_window.getWrapper()).removeClass('active');
                setTimeout(function() {
                    closeDelayed = true;
                    snazzy_info_window.close();
                }, 300);
            };
        }

        function add_filtered_Marker(marker) {
            var title = marker.title; // title
            var category = marker.category;
            var pos = new google.maps.LatLng(marker.lat, marker.lng);
            let go_to_website_text = '<div class="links-btns-wrap"></div>';
            let url_text = marker.web_site_url.replace('https://','').replace('http://','').substr(0, 35);
            if (marker.web_site_url.length > 35) {
                url_text += '...';
            }
            if (marker.web_site_url.length  > 0) {
                go_to_website_text = '<div class="links-btns-wrap"><a class="go-to-website" target="_blank" href="' + marker.web_site_url + '">'  + url_text +'</a></div>';
            }
            let body_text = '';
            if (marker.marker_description.length > 0) {
                body_text = '<div class="text">' + marker.marker_description + '</div>';
            }
            let marker_array = {
                'title' : title,
                'lat' : marker.lat,
                'lng' : marker.lng
            }
            window.markers_poi_array.push(marker_array);

            let route_wrap = '<div class="route-wrap"></div><div class="time-for-route"></div>';
            var content =  body_text + route_wrap + go_to_website_text;
            /*            var icon_img = {
                            url: marker.marker_icon,
                            labelOrigin : new google.maps.Point(30, 75),
                        };*/

            var icon_img = new google.maps.MarkerImage(  );
            icon_img.url = marker.marker_icon;
            // icon_img.url = generateSvg(poiIcons,marker.icon,marker.color);
            //icon_img.labelOrigin = new google.maps.Point(20, 0);
            //icon_img.scaledSize = new google.maps.Size(45,38 * 3);
            // icon_img.size = new google.maps.Size(45,38 * 3);

            const labelPosY = title.length > 15 ? 65 : 55;
            icon_img.labelOrigin = new google.maps.Point(18, labelPosY);

            marker1 = new google.maps.Marker({
                title: title,
                label : {
                    color : '#000000',
                    // color : marker.color,
                    text : title,
                    fontWeight : '700',
                    textAlign : center,
                    className: title.length > 15 ? 'long__label-text marker__label' : 'marker__label',
                },
                position: pos,
                category: category,
                cluster_ic: marker.cluster_icon,
                category_title :  marker.category_title,
                category_zoom :  marker.category_zoom,
                // category_ic: generateSvg(poiIcons,marker.iconMenu),
                category_ic: marker.category_img,
                map: map,
                icon: icon_img,
                animation: google.maps.Animation.DROP,
                zIndex : 1,
                color: marker.color,
            });

            if (filter_markers_categories[category] == undefined) {
                filter_markers_categories[category] = [];
            }
            filter_markers_categories[category].push(marker1);
            global_cluster.push(marker1);
            map_filtered_markers_on_map.push(marker1);
            // Marker click listener
            let snazzy_info_window;
            var closeDelayed = false;
            var closeDelayHandler = function() {
                // clearContent(document.querySelector('.snazzy-card__window'));
                removeStyleSheet('openedCardStyle');
                $(snazzy_info_window.getWrapper()).removeClass('active');
                setTimeout(function() {
                    closeDelayed = true;
                    snazzy_info_window.close();
                }, 300);
            };
            snazzy_info_window = new SnazzyInfoWindow({
                marker: marker1,
                wrapperClass: 'custom-window',
                offset: {
                    top: '-72px'
                },
                edgeOffset: {
                    top: 50,
                    right: 60,
                    bottom: 50
                },
                border: false,
                closeButtonMarkup: '<button type="button" class="custom-close"></button>',
                content: template_1({
                    title: title,
                    subtitle: '',
                    bgImg: '',
                    body: content,
                    category_title: marker1.category_title,
                    category_icon: marker1.category_ic,
                    category_color : marker1.category_color,
                    description: marker.marker_description,
                    route: route_wrap,
                    info: go_to_website_text,
                }),
                closeWhenOthersOpen: true,
                panOnOpen : false,
                callbacks: {
                    open: function(e) {

                        const newContainer = document.querySelector('.snazzy-card__window');
                        clearContent(newContainer);
                        directionsRenderer.setMap(null);
                        changeBtnStyleWhenCardOpened(document.querySelector('.custom-window'),'close');

                        var wrapper = $(this.getWrapper());

                        let content_container = wrapper.find('.custom-content .route-wrap');
                        let rout_btns_html = '<h4 class="get-route-title"><div class="top-text">Route for This Point:</div><div class="bottom-text"></div></h4>';
                        rout_btns_html += '<div class="route-type-btns">';
                        rout_btns_html += '<div class="change-to-walking route-type-btn" data-type="WALKING"></div>';
                        rout_btns_html += '<div class="change-to-bicycle  route-type-btn" data-type="BICYCLING"></div>';
                        rout_btns_html += '<div class="change-to-driving route-type-btn" data-type="DRIVING"></div></div>';

                        content_container.append(rout_btns_html);
                        let origin_point = new google.maps.LatLng(options.map_settings.lat, options.map_settings.lng);
                        let travel_mode = 'WALKING';
                        let request = {
                            origin: origin_point,
                            destination : this._marker.getPosition(),
                            travelMode : travel_mode
                        };
                        // directionsRenderer.setMap(null);
                        $(container).find('.route-panel').hide();

                        let custom_header_text = wrapper.find('.custom-header').html();

                        if (!detectMobile){
                            get_route(directionsService,directionsRenderer, request, custom_header_text);
                            content_container.find('.route-type-btn').eq(0).addClass('active');
                            content_container.find('.route-type-btn').click(function(){
                                content_container.find('.route-type-btn').removeClass('active');
                                $(this).addClass('active');
                                request.travelMode = $(this).data('type');
                                get_route(directionsService,directionsRenderer, request, custom_header_text);
                            });
                        } else if (detectMobile) {
                            get_route(directionsService,directionsRenderer, request, custom_header_text);
                            content_container.find('.route-type-btn').eq(0).addClass('active');
                            content_container.find('.route-type-btn').click(function(){
                                content_container.find('.route-type-btn').removeClass('active');
                                $(this).addClass('active');
                                request.travelMode = $(this).data('type');
                                get_route(directionsService,directionsRenderer, request, custom_header_text);
                            });
                            getRoutesDuration(directionsService,origin_point,this._marker.getPosition());
                        }

                        $(this.getWrapper()).addClass('open');
                        if (marker.marker_description.length == 0 && marker.web_site_url.length  == 0) {
                            $(this.getWrapper()).addClass('min');
                        }




                        let marker_position = this._marker.getPosition();
                        let marker_position_lat = marker_position.lat();
                        let marker_position_lng = marker_position.lng();
                        marker_position_lat = 'rip' + marker_position_lat;
                        marker_position_lat = Number(marker_position_lat.replace('rip',''));
                        marker_position_lng = 'rip' + marker_position_lng;
                        marker_position_lng = Number(marker_position_lng.replace('rip',''));
                        let map_app_url = '';



                        if (marker.info_window_img.length > 5) {
                            let json_array = JSON.parse(marker.info_window_img);
                            let img_html = '<img src="' + json_array.sizes.medium +  '" alt="">';
                            $(container).find('.custom-header-img').html(img_html);
                            $(container).find('.custom-header-wrap').addClass('with-img');
                            $(container).find('.custom-body').addClass('with-img');
                        }
                        var poi_request = {
                            query: custom_header_text,
                            fields: ['name', 'geometry', 'photos', 'formatted_address', 'place_id'],
                            locationBias: {radius: 100, center: {lat: marker_position_lat, lng: marker_position_lng}}
                        };
                        var service = new google.maps.places.PlacesService(map);
                        service.findPlaceFromQuery(poi_request, function(results, status) {
                            if (status === google.maps.places.PlacesServiceStatus.OK) {
                                for (var i = 0; i < results.length; i++) {
                                    if (results[i].photos) {
                                        if (results[i].photos.length > 0) {
                                            if (marker.info_window_img.length < 6) {
                                                const imgUrl = results[i].photos[0].getUrl();
                                                let img_html = '<img src="' + imgUrl + '" alt="">';
                                                $(container).find('.custom-header-img').html(img_html);
                                                $(container).find('.custom-header-wrap').addClass('with-img');
                                                $(container).find('.custom-body').addClass('with-img');
                                            }
                                        }
                                    } else {
                                        let img_html = '<img src="'+generateSvg(projectIcons,'POI__PLUG')+'" alt="">';
                                        $(container).find('.custom-header-img').html(img_html);
                                        $(container).find('.custom-header-wrap').addClass('with-img');
                                        $(container).find('.custom-body').addClass('with-img');
                                    }
                                    var id_request = {
                                        placeId: results[i].place_id,
                                        fields: ['name', 'rating', 'formatted_phone_number', 'geometry', 'url' , 'place_id' ]
                                    };
                                    service.getDetails(id_request, function(details, status){
                                        if (details.formatted_phone_number != undefined) {
                                            if (details.formatted_phone_number.length > 0) {
                                                $(container).find('.links-btns-wrap .phone-btn').remove();
                                                if (detect_mobile()) {
                                                    $(container).find('.links-btns-wrap').append(`<a class="phone-btn circle-btn" href="tel:${details.formatted_phone_number}">${details.formatted_phone_number}</a>`);
                                                } else {
                                                    $(container).find('.links-btns-wrap').append(`<div class="phone-btn circle-btn" >${details.formatted_phone_number}</div>`);
                                                }

                                            }
                                        }
                                        $(container).find('.links-btns-wrap .map-place').remove();
                                        if ((navigator.platform.indexOf("iPhone") != -1) ||
                                          (navigator.platform.indexOf("iPad") != -1) ||
                                          (navigator.platform.indexOf("iPod") != -1)) {
                                            //map_app_url = 'http://maps.apple.com/?ll=' + marker_position_lat +','+ marker_position_lng;
                                            map_app_url = `https://www.google.com/maps?f=d&daddr=${marker_position_lat +','+ marker_position_lng}`;
                                            $(container).find('.links-btns-wrap').append(`<a class="map-place circle-btn" target="_blank" href="${map_app_url}">${get_lang('Navigate to')}</a>`);

                                        } else {
                                            // https://www.google.com/maps?f=d&saddr=Thompson+St,+New+York,+NY,+USA&daddr=Wooster+St,+New+York,+NY,+USA&dirflg=d
                                            map_app_url = `https://www.google.com/maps?f=d&daddr=${marker_position_lat +','+ marker_position_lng}`;
                                            $(container).find('.links-btns-wrap').append(`<a class="map-place circle-btn" target="_blank" href="${map_app_url}">${get_lang('Navigate to')}</a>`);
                                        }
                                    })

                                }
                            }
                        });

                        /*                        if ($(window).width() < 992 ) {*/
                        let text = wrapper.find('.text');
                        let img =  wrapper.find('.custom-header-img img');
                        let coef = 3;
                        if (text.length > 0 || img.length > 0) {
                            coef = 3;
                        }  else {
                            coef = 5;
                        }
                        let map_bounds = map.getBounds();
                        let top = map_bounds.getNorthEast().lat();
                        let bottom = map_bounds.getSouthWest().lat();
                        let map_lat_bottom = bottom;
                        let map_lat_top = top;
                        let difference_quoter = (map_lat_top - map_lat_bottom) / coef;
                        let marker_position_lat_cor = marker_position_lat + difference_quoter;

                        if (detectMobile){
                            let start;
                            newContainer.appendChild(wrapper[0]);

                            function openMiniCard (timestamp) {
                                if (start === undefined)
                                    start = timestamp;
                                const elapsed = ((timestamp - start) / 4);
                                newContainer.style.bottom = (35 - elapsed) * -1 +'%';

                                if (elapsed < 35){
                                    window.requestAnimationFrame(openMiniCard);
                                } else {
                                    newContainer.style.bottom = '0';
                                        changeBtnStyleWhenCardOpened(document.querySelector('.custom-window'),'open');
                                }
                            }
                            window.requestAnimationFrame(openMiniCard);

                            const cont = document.querySelector('.custom-content');
                            cont.addEventListener('touchstart', handleTouchStart, false);
                            cont.addEventListener('touchmove', handleTouchMove, false);
                            map.panTo({lat  : marker_position_lat , lng:marker_position_lng });
                        } else {
                            map.panTo({lat  : marker_position_lat_cor , lng:marker_position_lng });
                        }

                        /*                        } else {
                                                    map.panTo({lat  : marker_position_lat , lng:marker_position_lng });
                                                }*/
                    const title = document.querySelector('.category-title');
                    title.style.color = marker.color;
                    },
                    afterOpen: function() {
                        var wrapper = $(this.getWrapper());
                        wrapper.addClass('active');
                        wrapper.find('.custom-close').on('click', ()=>{
                            closeDelayHandler();
                            clearContent(document.querySelector('.snazzy-card__window'));
                            changeBtnStyleWhenCardOpened(document.querySelector('.custom-window'),'close');
                            directionsRenderer.setMap(null);
                        });
                    },
                    beforeClose: function() {
                        // $(container).find('.route-panel').hide();
                        // directionsRenderer.setMap(null);
                        if (!closeDelayed) {

                            closeDelayHandler();

                            return false;
                        }

                        return true;
                    },
                    afterClose: function() {
                        var wrapper = $(this.getWrapper());
                        wrapper.find('.custom-close').off();
                        wrapper.removeClass('open');
                        wrapper.removeClass('min');
                        closeDelayed = false;

                    },
                }
            });

            function removeStyleSheet (id) {
                const style = document.getElementById(id);
                if (style){
                    style.remove();
                }
            }

            function getTouches(evt) {
                return evt.touches ||             // browser API
                  evt.originalEvent.touches; // jQuery
            }

            function handleTouchStart(evt) {
                const firstTouch = getTouches(evt)[0];
                xDown = firstTouch.clientX;
                yDown = firstTouch.clientY;
            }

            function handleTouchMove(evt) {
                if ( ! xDown || ! yDown ) {
                    return;
                }

                var xUp = evt.touches[0].clientX;
                var yUp = evt.touches[0].clientY;

                var xDiff = xDown - xUp;
                var yDiff = yDown - yUp;

                if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
                    if ( xDiff > 0 ) {
                        /* left swipe */
                    } else {
                        /* right swipe */
                    }
                } else {
                    if ( yDiff > 0 ) {
                        /* up swipe */
                        const isLoaded = document.getElementById('openedCardStyle');
                        if (!isLoaded){
                                document.head.innerHTML +='<style id="openedCardStyle">'+mobileOpenedCard+'</style>';

                            let start;
                            const card = document.querySelector('.map-parent .custom-window');

                            function openFullscreenCard (timestamp) {
                                if (start === undefined)
                                    start = timestamp;
                                const elapsed = (timestamp - start) / 2;
                                card.style.height = elapsed +'vh';

                                if (elapsed < 100){
                                    window.requestAnimationFrame(openFullscreenCard);
                                } else {
                                    card.style.height = '100vh';
                                }
                            }
                                window.requestAnimationFrame(openFullscreenCard);

                        }

                    } else {
                        /* down swipe */
                        const card = document.querySelector('.map-parent .custom-window');
                        const parent = card.parentElement;
                        const cardStyle = card.style.height;
                        if (cardStyle){
                            let start;

                            function closeFullscreenCard (timestamp) {
                                if (start === undefined)
                                    start = timestamp;
                                const elapsed = (timestamp - start) / 2;
                                card.style.height = 100 - elapsed +'vh';

                                if (elapsed < 100){
                                    window.requestAnimationFrame(closeFullscreenCard);
                                } else {
                                    closeDelayHandler();
                                    directionsRenderer.setMap(null);
                                    clearContent(document.querySelector('.snazzy-card__window'));
                                    card.style.height = '0';
                                    changeBtnStyleWhenCardOpened(document.querySelector('.custom-window'),'close');
                                }
                            }
                            window.requestAnimationFrame(closeFullscreenCard);
                        } else {
                            let start;

                            function closeMiniCard (timestamp) {
                                if (start === undefined)
                                    start = timestamp;
                                const elapsed = ((timestamp - start) / 2) * -1;
                                parent.style.bottom = elapsed +'%';

                                if (Math.abs(elapsed) < 35){
                                    window.requestAnimationFrame(closeMiniCard);
                                } else {
                                    closeDelayHandler();
                                    directionsRenderer.setMap(null);
                                    clearContent(document.querySelector('.snazzy-card__window'));
                                    parent.style.bottom = 0;
                                    changeBtnStyleWhenCardOpened(document.querySelector('.custom-window'),'close');
                                }
                            }
                            window.requestAnimationFrame(closeMiniCard);
                        }
                    }
                }
                /* reset values */
                xDown = null;
                yDown = null;
            }
            snazzy_info_windows_arr.push(snazzy_info_window);
            /*        google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
                        return function () {
                            console.log('Gmarker 1 gets pushed');
                            // infowindow.setContent(content);
                            //infowindow.open(map, marker1);
                            snazzy_info_window.open(map, marker1);
                            // map.panTo(this.getPosition());
                        }
                    })(marker1, content));*/
        }


        filterMarkers = function (category) {
            if (category.length === 0) {
                for (let category in filter_markers_categories) {
                    markers_clusters[category].clearMarkers();
                }
                markers_clusters['all'].addMarkers(global_cluster);
            } else {
                markers_clusters['all'].clearMarkers();
                for (let category in filter_markers_categories) {
                    markers_clusters[category].addMarkers( filter_markers_categories[category]);
                }
            }
            for (i = 0; i < map_filtered_markers_on_map.length; i++) {
                marker = map_filtered_markers_on_map[i];
                // If is same category or category not picked
                if (marker.category == category || category.length === 0) {
                    marker.setVisible(true);
                    marker.setAnimation(google.maps.Animation.DROP);
                }
                // Categories don't match
                else {
                    marker.setVisible(false);
                }
            }
            for (let cluster in markers_clusters) {
                markers_clusters[cluster].repaint();
            }
        };


        function getRoutesDuration (directionsService,originPoint,destination) {
            let routesInterval;
            const routesMethods =['DRIVING','BICYCLING','WALKING'];
            const htmlArr =[];
            htmlArr.length = 2;
            let routesHtml='';
            const timeForRouteContainer = document.querySelector('.time-for-route');
            routesMethods.forEach((routeMethod, index) =>{
                const request = {
                    origin: originPoint,
                    destination : destination,
                    travelMode : routeMethod
                };
                directionsService.route(request, (response, status)=>{
                   if (status === 'OK') {
                       const duration = response.routes[0].legs[0].duration.value;
                       if (duration > 60) {
                           routesHtml = ' <div class="route__'+routeMethod.toLowerCase()+'"><span class="number"> ' + Math.round(duration / 60)  + '</span><span class="word">' + get_lang('minutes') + '</span></div>';
                       } else {
                           routesHtml = ' <div class="route__'+routeMethod.toLowerCase()+'"><span' +
                             ' class="number">' + duration + ' </span><span class="word">' + get_lang('seconds') + ' </span></div>';
                       }
                       htmlArr[index] = routesHtml;

                   } else{
                       routesHtml = ' <div class="route__'+routeMethod.toLowerCase()+'"><span' +
                         ' class="number">0</span><span' +
                         ' class="word">' + get_lang('minutes') + '</span></div>';

                       htmlArr[index] = routesHtml;

                   }
                });
            });
            routesInterval = setInterval(()=>{
                if (htmlArr.length === 3){
                    clearInterval(routesInterval);
                    timeForRouteContainer.innerHTML = htmlArr.join('');
                    miniCardIsOpened = true;
                }
            },100);
        }
        
        function get_route (directionsService,directionsRenderer, request , title) {
            directionsRenderer.setMap(map);
            directionsService.route(request , function(response, status) {
                if (status === 'OK') {

                    directionsRenderer.setDirections(response);
                    window.map_route = response;
                    var leg = response.routes[0].legs[0];
                    var route = response.routes[0];
                    var summaryPanel = $(container).find('.route-panel')[0];
                    $(container).find('.route-panel').empty();
                    // $(container).find('.route-panel').show();

                    summaryPanel.innerHTML = '';

                    for (var i = 0; i < route.legs.length; i++) {
                        var routeSegment = i + 1;
                        let route_html = '';
                        route_html += '<b>Route to: ' + title +
                          '</b><br>';
                        route_html += '<b>Distance: ' + route.legs[i].distance.text + '</b><br>';
                        let distance_value = route.legs[i].distance.value;
                        let distance_html = '';
                        if (distance_value > 1000) {
                            distance_html = ' <div class="row"><span class="word">' + get_lang('km') +' </span><span class="number">' + Math.floor(distance_value / 100) / 10 + '</span></div>';
                        } else {
                            distance_html = ' <div class="row"><span class="word">' + get_lang('meter') +' </span><span class="number">' + distance_value + ' </span></div>';
                        }
                        let duration_value = route.legs[i].duration.value;
                        let duration_html = '';
                        if (duration_value > 60) {
                            duration_html = ' <div class="row"><span class="word">' + get_lang('minutes') + '</span><span class="number"> ' + Math.round(duration_value / 60)  + '</span></div>';
                        } else {
                            duration_html = ' <div class="row"><span class="word">' + get_lang('seconds') + ' </span><span class="number">' + duration_value + ' </span></div>';
                        }
                        $(container).find('.get-route-title .bottom-text').html( distance_html + '<div' +
                          ' class="middle"> . </div>' + duration_html);
                        if (request.travelMode == 'WALKING') {
                            route_html += '<b>Travel mode: walking</b><br>';
                            $(container).find('.get-route-title .top-text').html(get_lang ('Walking route to this place'));
                        } else if (request.travelMode == 'BICYCLING') {
                            route_html += '<b>Travel mode: bicycling</b><br>';
                            $(container).find('.get-route-title .top-text').html(get_lang ('Cycling route to this place'));
                        } else if (request.travelMode == 'DRIVING') {
                            route_html += '<b>Travel mode: driving</b><br>';
                            $(container).find('.get-route-title .top-text').html(get_lang ('Car route to this place'));
                        }
                        summaryPanel.innerHTML = route_html;
                    }

                } else {
                    // window.alert('Directions request failed due to ' + status);
                }
            });
        }

        filterMarkers('');

        function makeMarker(position, icon, title, map) {
            new google.maps.Marker({
                position: position,
                map: map,
                icon: icon,
                title: title
            });
        }
    };

    function setInitialZoom () {
        let needZoomOut = false;
        const currentZoom = map.getZoom();

        Object.values(mapGlobalOption.filtered_markers).forEach(marker =>{
           const markerCoords = new google.maps.LatLng(marker.lat, marker.lng);
           const destPixel = getPixel(markerCoords, map.getZoom());
           const mapPixel = getPixel(map.getCenter(), map.getZoom());
           const diffX = (destPixel.x - mapPixel.x);
           const diffY = (destPixel.y - mapPixel.y);
            if (Math.abs(diffX) > window.innerWidth / 2  || (diffY > window.innerHeight / 2)){
                needZoomOut = true;
            }
        });

        if (needZoomOut){
            map.setZoom(currentZoom - 1);
            mapGlobalOption.map_settings.zoom = map.getZoom();
            setInitialZoom();
        }
    }
    setInitialZoom();
    hideAllDefaultMapLinks();


    return experimental_map_obj;
}

function changeMarkersLabelColor (color) {
    static_markers_on_map[0].label.color = color;
    static_markers_on_map[0].setMap(null);
    static_markers_on_map[0].setMap(map);
    Object.values(markers_clusters).forEach(category =>{
        const allMarkers = category.getMarkers();
        if (allMarkers.length > 0){
            allMarkers.forEach(marker =>{
                marker.label.color = color;
                marker.setMap(null);
                marker.setMap(map);
            });
        }
        const clusters = category.getClusters();
        if (clusters.length > 0){
            clusters.forEach(cluster =>{
                cluster.markerClusterer_.repaint();
            });
        }
    });
}

function changeDocumentStyleProperty (idStyleSheet, selector, property, value) {
    const styleSheet = document.getElementById(idStyleSheet).sheet;
    Object.values(styleSheet.cssRules).forEach(rule =>{
        if (rule.selectorText === selector){
            rule.style[property] = value;
        }
    });
}

function hideAllDefaultMapLinks () {
    const interval = setInterval(()=>{
        const links = document.querySelectorAll('a[rel="noopener"]');
        if (links.length > 0){
            clearInterval(interval);
            links.forEach(link =>{
                link.style.display= 'none';
            });
        }
    },100);
}


function project(latLng) {
    let TILE_SIZE = 256;

    let siny = Math.sin(latLng.lat() * Math.PI / 180);

    // Truncating to 0.9999 effectively limits latitude to 89.189. This is
    // about a third of a tile past the edge of the world tile.
    siny = Math.min(Math.max(siny, -0.9999), 0.9999);

    return new google.maps.Point(
      TILE_SIZE * (0.5 + latLng.lng() / 360),
      TILE_SIZE * (0.5 - Math.log((1 + siny) / (1 - siny)) / (4 * Math.PI)))
}

function getPixel(latLng, zoom) {
    let scale = 1 << zoom;
    let worldCoordinate = project(latLng);
    return new google.maps.Point(
      Math.floor(worldCoordinate.x * scale),
      Math.floor(worldCoordinate.y * scale))
}

function getMapDimenInPixels(map) {
    let zoom = map.getZoom();
    let bounds = map.getBounds();
    let southWestPixel = getPixel(bounds.getSouthWest(), zoom);
    let northEastPixel = getPixel(bounds.getNorthEast(), zoom);
    return {
        width: Math.abs(southWestPixel.x - northEastPixel.x),
        height: Math.abs(southWestPixel.y - northEastPixel.y)
    }
}

function willAnimatePanTo(map, destLatLng, optionalZoomLevel) {
    let dimen = getMapDimenInPixels(map);

    let mapCenter = map.getCenter();
    optionalZoomLevel = !!optionalZoomLevel ? optionalZoomLevel : map.getZoom();

    let destPixel = getPixel(destLatLng, optionalZoomLevel);
    let mapPixel = getPixel(mapCenter, optionalZoomLevel);
    let diffX = Math.abs(destPixel.x - mapPixel.x);
    let diffY = Math.abs(destPixel.y - mapPixel.y);

    return diffX < dimen.width && diffY < dimen.height
}

function getOptimalZoomOut(latLng, currentZoom) {
    if(willAnimatePanTo(map, latLng, currentZoom - 1)) {
        return currentZoom - 1
    } else if(willAnimatePanTo(map, latLng, currentZoom - 2)) {
        return currentZoom - 2
    } else {
        return currentZoom - 3
    }
}

function smoothlyAnimatePanToWorkarround(map, destLatLng, optionalAnimationEndCallback) {
    let initialZoom = map.getZoom();
    let listener;

    function zoomIn() {
        map.setZoom(mapGlobalOption.map_settings.zoom);
        google.maps.event.removeListener(listener);
        //here you should (re?)enable only the ui controls that make sense to your app
        map.setOptions({draggable: true, zoomControl: true, scrollwheel: true, disableDoubleClickZoom: false});
    }

    function zoomOut() {
        if(willAnimatePanTo(map, destLatLng)) {
            google.maps.event.removeListener(listener);
            listener = google.maps.event.addListener(map, 'idle', zoomIn);
            map.panTo(destLatLng)
        } else {
            map.setZoom(getOptimalZoomOut(destLatLng, map.getZoom()));
        }
    }

    //here you should disable all the ui controls that your app uses
    map.setOptions({draggable: false, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true});
    map.setZoom(getOptimalZoomOut(destLatLng, initialZoom));
    listener = google.maps.event.addListener(map, 'idle', zoomOut);
}

function smoothlyAnimatePanTo(map, destLatLng) {
    if(willAnimatePanTo(map, destLatLng)) {
        map.panTo(destLatLng)
        map.setZoom(mapGlobalOption.map_settings.zoom);
    } else {
        smoothlyAnimatePanToWorkarround(map, destLatLng);
    }
}



const hb1 =`
<div class="custom-img" style="background-image: url({{{bgImg}}})"></div>
        <section class="custom-content">
            <h1 class="custom-header" style="background-color: {{{category_color}}};">
                {{title}}
            </h1>
            <div class="custom-body">{{{body}}}</div>
        </section>
`;

const hb2 = `
<section class="custom-content">
            <div class="custom-header-wrap">
                <div class="custom-header-img"></div>
            </div>
            <div class="custom-content__wrapper">
                <div class="custom-title">
                    <h1 class="custom-header">{{title}}</h1>
                </div>
                <div class="custom-category">
                    <div class="custom-category__img-container">
                        <img class="custom-category__img" src="{{{category_icon}}}" alt="category icon">
                    </div>
                    <h3 class="category-title">{{category_title}}</h3>
                </div>
                <div class="custom-description">
                    <p class="custom-description__text">{{description}}</p>
                </div>
                <div class="custom-route">{{{route}}}</div>
                <div class="custom-info">{{{info}}}</div>
          
            </div>
        </section>
`;

const dictionary = {
    'Walking route to this place' : {
        'en' : '',
        'he' : ''
    },
    'Cycling route to this place' : {
        'en' : '',
        'he' : ''
    },
    'Car route to this place' : {
        'en' : '',
        'he' : ''
    },
    'Navigate to' : {
        'en' : 'Navigate to',
        'he' : 'נווט אל'
    },
    'meter' : {
        'en' : 'm',
        'he' : 'מטר'
    },
    'km' : {
        'en' : 'km',
        'he' : 'ק"מ'
    },
    'seconds' : {
        'en' : 'sec',
        'he' : 'שניות'
    },
    'minutes' : {
        'en' : 'mins',
        'he' : 'דקות'
    },
    'All points of interest' : {
        'en' : 'All points of interest',
        'he' : 'כל נקודות עניין'
    },
};

const styleCss = `

/* variaables */
/*
:root {

--section-title-fs: 75px;
--section-title-lh: 98px;

--section-text-fs: 24px;
    --section-text-lh: 40px;
}
*/

/* variaables */


/* common selectors  */

@keyframes video_play {
0% {
transform: scale(0);
opacity: 0;
}
30% {
opacity: 1;
}
100% {
transform: scale(1.2);
opacity: 0;
}

}

ul{
padding: 0;
margin: 0;
}

a{
text-decoration: none;
}

body{
font-family: 'Ubuntu', sans-serif;
background: #111114;
margin: 0 auto;
max-width: 100%;
min-width: 300px;
overflow-x: hidden;
}

html {
position: relative;
}

section{
background: #000000;
margin-top: 30px;
}


h2{
font-style: normal;
font-weight: 500;
font-size: 60px;
line-height: 1.5;
color: #FFFFFF;
}

.section-subtitle{
font-size: 20px;
line-height: 27px;
text-transform: uppercase;
}



.section-text-big{
letter-spacing: 0.2px;
color: #CCCCCC;
font-size: 20px;
line-height: 30px;
}


.section-item-title{

font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 34px;
color: #FFFFFF;

}


.section-text-gray{
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;
color: #CCCCCC;
}

.section-text-white{
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 27px;
color: #FFFFFF;
}

.btn-text{
font-size: 16px;
line-height: 21px;
text-align: center;
color: #FFFFFF;
display: block;
margin: auto 0;
}

.btn-blue{
width: 103px;
height: 84px;
background: #3134FD;
text-align: center;
align-items: center;
cursor: pointer;
}

/* common selectors  */



/* .carousel.fading */


.carousel.fade {
opacity: 1;
}
.carousel.fade .item {
-moz-transition: opacity ease-in-out .7s;
-o-transition: opacity ease-in-out .7s;
-webkit-transition: opacity ease-in-out .7s;
transition: opacity ease-in-out .7s;
left: 0 !important;
opacity: 0;
top:0;
position:absolute;
width: 100%;
display:block !important;
z-index:1;
}
.carousel.fade .item:first-child {
top:auto;
position:relative;
}
.carousel.fade .item.active {
opacity: 1;
-moz-transition: opacity ease-in-out .7s;
-o-transition: opacity ease-in-out .7s;
-webkit-transition: opacity ease-in-out .7s;
transition: opacity ease-in-out .7s;
z-index:2;
}

/* .carousel.fading */





.bgvideo {width: 100%;height: 100%;}

.bgvideo source {
object-fit: cover;
}


#bgvideo-container{
background-repeat: no-repeat;
background-size: contain;
}

.bgvideo-no{
background: url(./images/video-bg-poster.jpg)!important;
background-repeat: no-repeat!important;
background-size: cover!important;
width: calc(100% + 30px);
left: -15px;
position: relative;
background-position: center;
height: 100vh;
}


.bgvideo-2 {
width: 100%;
}



.flex{
display: flex;
justify-content: center;
flex-wrap: wrap;
}

.my-container{
margin: 0 auto;
padding: 0 40px;
}

header{
height: auto;
background-repeat: no-repeat;
background-position: center;
position: fixed;
z-index: 9999;
background-color: black;
top: 0;
left: 0;
height: auto;
width: 100%;
}


#header-btns-block .default{
margin-right: 25px;
display: flex;
flex-direction: column;
justify-content: center;
}

#header-btns-block .default.model {
background-color: #603ef2;
}

.btn-new{
height: 35px;
padding: 0 24px;
border-radius: 25px;
border: none;
outline: none;
transition: 0.5s;
}

.btn-new:hover {
transform: scale(1.1);
}

.btn-new.fiolet{
color: #fff;
background-color: rgb(96, 62, 242);
}

.btn-new.get-app {
display: flex;
padding: 0 14px 0px 20px;
width: 143px;
justify-content: center;
font-size: 16px;
font-weight: 300;
}

div#header-btns-block {
display: flex;
}

.btn-new.get-app img {
margin: auto 7px;
width: 15px;
height: 18px;
}

.btn-new.get-app img.apple-ic {
margin-bottom: auto;
margin-left: 5px;
margin-right: 2px;
margin-top: auto;
width: 17px;
height: 15px;
}

.btn-new.default{
color: white;
background-color: #323743;
font-size: 16px;
}



#header-wrap{
align-items: center;
justify-content: space-between;
padding: 0;
top: 0;
height: 60px;
z-index: 999999;
/* background: rgba(0,0,0,0.7); */
max-width: 1440px;
margin: auto;
transition: all .7s;
}


#header-logo img{
/*margin-top: 15px;*/
}

.header-top-fixed{
/* background: rgba(0, 0, 0, 1)!important; */
}


#get-demo{
position: absolute;
right: 25px;
top: 0;
width: 90px;
height: 69px;
}


#get-demo-svg{
margin-bottom: 5px;
}

#get-demo-svg img{
width: 25px;
height: 25px;
}

#header-right{
/*padding-right: 150px;*/
width: 40%;
}

#header-right .header-right-desktop{
justify-content: space-between;
align-items: center;
}

.header-right-mobile{
display: none;
}

.header-right-mobile img{
cursor: pointer;
z-index: 999;
position: relative;
}


#header-menu li{
display: inline-block;
}

#header-menu li:not(:last-child){
margin-right: 50px;
}

#header-menu li a{
display: inline-block;
font-family: 'Ubuntu', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 20px;
letter-spacing: 0.16px;
color: #E6E6E6;
text-decoration: none;
border-bottom: 2px solid transparent;
transition: all 0.6s;
text-transform: uppercase;
position: relative;

}

#header-menu li a.get-app-ancor {}

#header-menu li a.get-app-ancor .text {
color: white;
}

#header-menu li a.get-app-ancor img {
width: 13px;
height: 13px;
object-fit: contain;
margin: auto 2px;
position: relative;
top: -1px;
}

#header-menu li a.get-app-ancor img.apple-ic {
width: 13px;
height: 16px;
padding-bottom: 3px;
position: relative;
top: -1px;
}

@-webkit-keyframes headerBorderBottom {

0% {
width: 0%;
}

100% {
width: 100%;
}
}

#header-menu{
padding-top: 7px;
width: 100%;
display: flex;
justify-content: space-between;
}

#header-menu li a:hover{
}
#header-menu li a.active::after,
#header-menu li a:hover::after{
position: absolute;
bottom: -7px;
left: 0;
width: 100%;
height: 2px;
background: #603ef2;
content: "";
animation: headerBorderBottom 0.7s;
}


.social{
position: absolute;
bottom: 25px;
right: 45px;
}


header .center{
display: none;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
min-width: 200px;
}

header .bottom {
display: flex;
align-items: center;
justify-content: center;
width: fit-content;
margin: 50px auto 0 auto;
cursor: pointer;
}





header .bottom .text{
transform: translateX(21px);
font-family: 'Ubuntu', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 27px;
letter-spacing: 0.8px;
text-transform: uppercase;
color: #FFFFFF;
}

.content-wrap{
position: relative;
z-index: 1005;
/* background: #101010; */
/* padding: 0 15px; */
overflow: initial;
max-width: 100vw;
overflow-x: hidden;
}

section#tour-360{
justify-content: space-between;
height: 700px;
background: transparent;

}


#tour-360 .right{
align-items: flex-end;
background-size: cover;
height: 100%;
width: 50%;
position: relative;
background: #000;
}

#tour-360 .right img.device{
width: 80%;
}


#tour-360 .right .take-tour-btn{
position: absolute;
outline: none;
border: none;
bottom: 50px;
left: -15px;
z-index: 999999;
}

#tour-360 .right .take-tour-btn span{
margin-top: 7px;
}

#tour-360 .left{
width: calc(50% - 30px);
background: #000;
align-items: center;
padding-left: 40px;
justify-content: end;
}


#tour-360 .left .content{

}


#tour-360 .left .content p{
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 27px;
text-transform: uppercase;
color: #FFFFFF;
margin: 0;
}


#tour-360 .left .content .text{
margin-top: 30px;
max-width: 450px;
}


#carousel-tour-360{
width: 100%;
}


#carousel-tour-360 .item-wrap{
height: 700px;
justify-content: space-between;
}

#carousel-tour-360 .panoramaFull{
width: 100%;
}

#carousel-tour-360 canvas{
cursor: grab;
}

.panorama-close-btn{
display: none;
position: absolute;
top: 30px;
right: 30px;
width: 45px;
height: 45px;
background: transparent;
border: 1px solid #fff;
transition: all 0.5s;
}

.panorama-close-btn:hover{
background: #3134FD;
border: 1px solid #3134FD;
}

section#our-features{
background: #000;
padding: 50px 0;
}

#our-features h2{
text-align: center;
margin-bottom: 15px;
}

#carousel{
margin-top: 50px;
}

#carousel .item img{
width: 700px;
}

.carousel-img{
text-align: center;
}

#carousel .item{
height: 700px;
}



#carousel .carousel-img-container img{
width: 750px;
margin-top: 50px;
}




#carousel .item h3{

text-align: center;
}


#carousel-control{
width: 100%;
position: relative;
}

.carousel-control-next-container{
width: 100%;
max-width: 500px;
margin: 0 auto;
position: absolute;
top: 55px;
left: 50%;
text-align: right;
transform: translateX(-50%);
}

.next-feature-btn{
display: none;
cursor: pointer;
width: 90px;
height: 60px;
background: #3134FD;
text-align: center;
align-items: center;
cursor: pointer;
outline: none;
border: none;
}

.next-feature-btn img{
width: 20px;
margin-bottom: 3px;
}

.next-feature-btn span{

}


#carousel-control .flex{
justify-content: space-between;
}

#carousel-control .carousel-control-item{
width: 20%;
cursor: pointer;
}

#carousel-control .control-item-border-top{
height: 2px;
width: 100%;
background: #3E3A3A;
margin-bottom: 25px;

}

#carousel-control .active .control-item-border-top {
/*background: #3134FD;*/
}


@-webkit-keyframes borderTop {

0% {
width: 0%;
}

100% {
width: 100%;
}
}


#carousel-control .carousel-control-active .control-item-border-top{
background: #3134FD;
animation: borderTop 20s;
}

#carousel-control .control-item-title{

margin: 15px 0;
}


#carousel-control .control-item-text{

}



section#testimonials{

padding: 50px 0 100px 0;
position: relative;

}

#carousel-testimonials-inner-mobile{
display: none;
}

#carousel-indicators-testimonials-mobile{
display: none;
}


#testimonials-video-block{
width: 100%;
margin: 50px auto;
position: relative;
}

#testimonials-video-block video{
width: 70%;
}


#testimonials-video-block .icon_btn_play{
position: absolute;
top: 50%;
transform: translateY(-50%);
cursor: pointer;
z-index: 99;
}


#testimonials h2{

text-align: center;

}


.testimonials-slide{
position: relative;
}


.testimonials-video video{
width: 70%;
max-height: 450px;
margin: 50px auto;
}



.play-bg-video-2{
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
cursor: pointer;
}


.play-bg-video-2 .text{
display: inline-block;
transform: translateX(21px);
font-family: 'Ubuntu', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 27px;
letter-spacing: 0.8px;
text-transform: uppercase;
color: #FFFFFF;

}


#carousel-control-testimonials {
margin: 25px auto;
}

#carousel-testimonials{
display: block!important;
}
#carousel-indicators-testimonials{
display: block!important;
}


#carousel-testimonials-mobile{
display: none!important;
}

#carousel-indicators-testimonials-mobile{
display: none!important;
}



#carousel-control-testimonials .my-container{
justify-content: space-between;
}


#carousel-testimonials{
margin: 75px auto 50px auto;
}


#carousel-testimonials .item .my-container{
justify-content: space-around;
}

.carousel-testimonials-item-block{
width: 25%;
}


.carousel-testimonials-item-block  .section-text-big{
margin-bottom: 25px;
}


.carousel-testimonials-item-block .section-item-title{
margin-bottom: 10px;

}

.carousel-control-testimonials-item .client-testimonials{
color: #FFFFFF;
margin-bottom: 25px;
}


.carousel-control-testimonials-item .client-name{

margin-bottom: 10px;
}



.carousel-control-testimonials-item .client-desc{

}


#carousel-indicators-testimonials, #carousel-indicators-testimonials-mobile{
position: relative;
display: block;
width: 100%;
margin: 0!important;
left: auto;
bottom: auto;
}

#carousel-indicators-tour-360{
height: 36.5px;
margin: 0px!important;
width: auto;
text-align: left;
bottom: 40px;
left: 60px;
position: absolute;
z-index: 99999;
border-bottom: 1.5px solid #666!important;
}

#carousel-indicators-tour-360 li{
width: auto;
height: auto;
margin: 0!important;
border: none!important;
display: inline;
color: #fff;
font-weight: 500;
font-size: 18px;
line-height: 27px;
padding: 0 0 10px 0!important;
}

#carousel-indicators-tour-360 li:not(:last-child){
margin-right: 30px!important;
}

#carousel-indicators-tour-360 li.active{
background: transparent!important;
border-bottom: 1.5px solid #FFFFFF!important;
border-radius: 0;
}


#carousel-indicators-testimonials, #carousel-indicators-tour-360{
margin-bottom: 25px;
}


#carousel-indicators-testimonials li.active, #carousel-indicators-testimonials-mobile li.active, #carousel-indicators-tour-360 li.active{
background-color: #3134FD;
border: 1px solid #3134FD;
margin: 0 5px;
}

#carousel-indicators-testimonials li, #carousel-indicators-testimonials-mobile li{
width: 12px;
height: 12px;
margin: 0 5px;
border: 1px solid #979797;

}


#glasses canvas{
background-image: url("./images/glasses-wrap.png");
background-size: cover;
background-repeat: no-repeat;
}

#slide-dreams{

justify-content: flex-end;
}


section#about-us {
padding: 50px 0;
color: #fff;
min-height: calc(100vh - 100px);
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: center;
}

#about-us .content{
margin: 50px 50px 50px 0;
align-items: center;
justify-content: space-between;
position: relative;
margin: 0;
margin: auto 0;
}


#about-us .content .left{
margin-bottom: 75px;
position: relative;
z-index: 2;
margin-bottom: auto;
margin-top: auto;
}
#about-us .content .left .mobile-img {
display: none;
}

#about-us .content .right{
margin-left: auto;
}

#about-us .content .left .powered {

}

#about-us .content .left .bmby{
text-transform: uppercase;
font-weight: bold;
font-size: 60px;
line-height: 70px;
margin-bottom: 25px;

}


#about-us .why-choose-us{

margin-top: 100px;

display: none;
}

#about-us .why-choose-us .content{
width: 100%;
display: flex;
justify-content: space-between;
}

#about-us .why-choose-us .content .item{
width: 30%;
position: relative;
}

#about-us .why-choose-us .content .item .back-numbers{
position: absolute;
top: -40px;
left: 0;
font-size: 190px;
line-height: 80%;
z-index: 0;
font-weight: bold;
letter-spacing: 15px;
color: #212121;
}

#about-us .why-choose-us .content .item .top{
margin-bottom: 30px;
position: relative;
z-index: 1;
}
#about-us .why-choose-us .content .item .number,
#about-us .why-choose-us .content .item .title{
display: inline-block;
font-size: 30px;
line-height: 28px;
}

#about-us .why-choose-us .content .item .number{
font-weight: bold;
margin-right: 15px;
}

#about-us .why-choose-us .content .item .text{
font-size: 20px;
line-height: 30px;
position: relative;
z-index: 4;
}



/* =============  #map ===============*/


#map{
width: 100%;
height: calc(100vh - 60px);
}

#map.fullscreen {
height: 100vh;
}

.google-map h3 {
margin: 0;
margin-bottom: 10px;
text-align: center;
}

.google-map .text {
line-height: 1.5;
font-size: 15px;
width: 300px;
text-align: center;
}




/* =============  #gallery ===============*/
#gallery {
padding: 75px 0;
}

#gallery h2{
text-align: center;
text-transform: uppercase;
}

#gallery .gallery-wrap{

overflow: hidden;

width: 100%;

margin: auto;
}

#gallery .gallery-content{
height: auto;
padding-bottom: 60px;
user-select: none;
display: flex;
flex-direction: column;
}

#gallery .gallery-wrap .gallery-cats{
width: 100%;
display: flex;
justify-content: center;
margin: 50px auto 50px auto;
flex-wrap: wrap;
}

#gallery .gallery-wrap .gallery-cats a{
font-size: 25px;
line-height: 28px;
color: #fff;
text-decoration: none;
padding-bottom: 10px;
border-bottom: 2px solid transparent;
transition: all .7s;
margin-left: 20px;
margin-right: 20px;
}


#gallery .gallery-wrap .gallery-cats a:hover,
#gallery .gallery-wrap .gallery-cats a.active{
border-bottom: 2px solid #fff;
}

#gallery .gallery-wrap .swiper-gallery.active{
visibility: visible;
order: 1;
}
#gallery .swiper-container {

height: calc(57vw / 16 * 9);

width: 57vw;

overflow: initial;
}

#gallery .gallery-wrap .swiper-gallery:not(.active){
visibility: hidden;
height: 0px;
order: 0;
transition-property: height;
}

#gallery .gallery-wrap .swiper-gallery img{
}

#gallery .gallery-wrap .swiper-gallery .swiper-slide{
text-align: center;
transform: scale(0.7);
transition: 0.5s;
position: relative;
}

#gallery .gallery-wrap .swiper-gallery .swiper-slide.with-360 {
cursor: pointer;
}
#gallery .gallery-wrap .swiper-gallery .swiper-slide .ic-360 {

width: 55px;

height: 55px;

position: absolute;

left: 50%;

top: 50%;

background-image: url(./img/ic_360.svg);

background-position: center;

background-repeat: no-repeat;

background-size: cover;

transform: translate(-50%, -50%);
}

#gallery .gallery-wrap .swiper-gallery .swiper-slide img {
width: 100%;
height: 100%;
object-fit: cover;
max-width: initial!important;
}

#gallery .gallery-wrap .swiper-gallery .swiper-slide.swiper-slide-active {
transform: scale(1);
}


#gallery .gallery-wrap .swiper-gallery .gallery-img-title{
position: absolute;
bottom: -70px;
left: 0;
width: 100%;
text-align: center;
color: #fff;
margin: 0;
background: rgba(0,0,0,0.5);
font-size: 20px;
padding: 6px;
}


#gallery .gallery-wrap .swiper-gallery .gallery-img-title span{
margin: 0 20px;
}


#gallery .gallery-wrap .swiper-gallery .gallery-img-title img{
cursor: pointer;
}


#gallery .gallery-wrap .swiper-gallery .gallery-img-title .swiper-button-next,
#gallery .gallery-wrap .swiper-gallery .gallery-img-title .swiper-button-prev{
width: auto;
height: auto;
position: relative;
display: inline-block;
top: auto;
left: auto;
right: auto;
margin-top: 0;
}



#gallery .gallery-wrap .swiper-gallery .swiper-slide.swiper-slide-prev{
text-align: right;
transform-origin: right;
padding-right: 60px;
}

#gallery .gallery-wrap .swiper-gallery .swiper-slide.swiper-slide-next{
text-align: left;
transform-origin: left;
padding-left: 60px;
}


#gallery .gallery-wrap .swiper-gallery .swiper-slide:not(.swiper-slide-active) img{
max-width: 80%;
opacity: 0.5;
-moz-opacity: 0.8;
filter: alpha(opacity=80) black;
-khtml-opacity: 0.8;
background-color: #000;
}


#gallery .gallery-wrap .swiper-gallery .swiper-pagination{
position: relative;
margin-top: 80px;
left: 0;
bottom: 0;
display: flex;
justify-content: center;
}


#gallery .gallery-wrap .swiper-gallery .swiper-pagination-bullet.swiper-pagination-bullet-active{
background: #603EF2;
border-radius: 0;
margin: 0;
}

#gallery .gallery-wrap .swiper-gallery .swiper-pagination-bullet{
background: #fff;
width: 50px;
border-radius: 0;
margin: 0;
transition: 0.5s;
height: 3px;
}


/*
#carousel-gallery {
height: 600px;
}


#carousel-gallery .item{
text-align: center;
}

#carousel-gallery .item.active{
width: 70%;
margin: 0 auto;
}

#carousel-gallery .carousel-inner{
height: 600px;
}

#carousel-gallery .item.active img{
height: 600px;
margin: 0 auto;
}
*/


/* =============  #get-demo-block ===============*/
#get-app{
padding: 50px 0;
color: #fff;
}

#get-app .my-container{
margin-top: 50px;
margin-bottom: 50px;
}


#get-app .top .left {
width: 100%;
text-align: center;
}

#get-app .top h2{
margin: 0;
}

#get-app .top .right{
padding-top: 0;
width: 100%;
}

#get-app .top .right .get-app {
margin: auto;
}

#get-app .top .right a.get-app .apple-ic {
margin-bottom: 12px;
}

#get-app .top .right div{
margin: 0 auto;
max-width: 100%;
text-align: center;
}

#get-app .top .right .text-content{
font-size: 20px;
line-height: 28px;
margin-bottom: 25px;
}



#get-app .bottom img {
margin: auto 0;
}


#get-app .bottom .swiper-container-get-app .swiper-slide{
text-align: center;
}

#get-app .bottom .swiper-container-get-app img{
width: 250px;
}

#get-app .bottom .swiper-container-get-app .swiper-pagination{

position: relative;
margin-top: 35px;
left: auto;
top: auto;
}

#get-app .bottom .swiper-container-get-app .swiper-pagination-bullet{

background: #fff;
}
#get-app .bottom .swiper-container-get-app .swiper-pagination-bullet.swiper-pagination-bullet-active{
background: #603EF2;
}

/* =============  #get-demo-block ===============*/






/* =============  #get-demo-block ===============*/


section#get-demo-block{
padding-top: 30px;
position: relative;
min-height: 500px;
padding-bottom: 30px;
}

.request-form-success{
display: none;
padding: 100px 25px;
background-color: #20EBAF;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
text-align: center;
}

section#get-demo-block h2{
text-align: center;
font-size: 55px;
font-weight: 500;
line-height: 66px;
padding-bottom: 40px;
text-transform: uppercase;
}


section#get-demo-block .content{
justify-content: space-between;
padding: 0 0 20px 0;
align-items: center;
}


section#get-demo-block .content .left{
width: 50%;
}



section#get-demo-block .content .left .get-demo-text{
font-size: 32px;
line-height: 50px;
letter-spacing: 0.416667px;
color: #FFFFFF;
width: 80%;
margin: 0;
}


section#get-demo-block .content .left .get-demo-text span{
font-weight: 800;
}


section#get-demo-block .content .right{
width: 50%;
justify-content: space-around;
}

section#get-demo-block .content .right .section-subtitle{
display: none;
}

section#get-demo-block .content .form-text{
font-size: 20px;
line-height: 27px;
text-transform: uppercase;
color: #FFFFFF;
}



section#get-demo-block #request-demo{
max-width: 800px;
width: 100%;
margin: 0px auto;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 100%;
}

section#get-demo-block #request-demo form {
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 100%;
margin: 0px auto;
}

section#get-demo-block #request-demo .left,
section#get-demo-block #request-demo .right{
width: 47%;
display: flex;
flex-direction: column;
justify-content: flex-start;
}

section#get-demo-block #request-demo .btn-block{
width: 100%;
text-align: center;
margin-top: 0px;
}

section#get-demo-block #request-demo .form-group{
min-height: 55px;
position: relative;
margin-bottom: 25px;
}

section#get-demo-block #request-demo .form-label{
position: absolute;
top: 25px;
left: 25px;
color: #D3D3D3;
font-family: Arial;
font-size: 17px;
transform: translate(0px, -50%);
transition: 0.5s;
}

section#get-demo-block #request-demo .form-group.focused .form-label {
top: 0px;
transform: scale(0.7);
transform-origin: left;
}

.wpcf7 .wpcf7-form-control-wrap:has(input:focus) {

}
section#get-demo-block #request-demo input:focus + .form-label{
display: block;
}

section#get-demo-block #request-demo textarea,
section#get-demo-block #request-demo input{
border: none;
border-radius: 27.5px;
font-size: 18px;
color: #ffffff;
padding-left: 24px;
background-color: transparent;
margin-top: auto;
}

section#get-demo-block #request-demo .form-control:focus {
border-color: #603EF2;
}
section#get-demo-block #request-demo textarea:focus {
border-color: #603EF2;
}

section#get-demo-block #request-demo .form-control.nice-select {
padding: 0;
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 25px;
background-color: transparent;
border: none;
color: white;
font-size: 16px;
height: auto;
}


section#get-demo-block #request-demo .form-control:not(select):focus{
box-shadow: none;
}


section#get-demo-block #request-demo textarea{
outline: none;
resize: none;
height: 210px;
padding-top: 20px;
}



section#get-demo-block #request-demo button{

border: none;

outline: none;

font-size: 16px;

font-weight: 500;

line-height: 19px;

background-color: #603ef2;

color: white;
transition: 0.5s;
}
section#get-demo-block #request-demo button:hover {
transform: scale(1.1);
}

section#get-demo-block #request-demo button span{

}



section#get-demo-block #request-demo input:focus::-webkit-input-placeholder{
color: transparent!important;
}

section#get-demo-block #request-demo input:focus::-moz-placeholder{
color: transparent!important;
}

section#get-demo-block #request-demo input:focus:-moz-placeholder{
color: transparent!important;
}

/* =============  #get-demo-block ===============*/




footer{
background: #000;
z-index: 999;
position: relative;
}


footer .content{
justify-content: space-between;
padding: 0 0;
align-items: center;
max-width: 1440px;
margin: auto;
}


footer .content .left{
width: 30%;
outline: none;
height: 230px;
}


footer .content .right{
width: 70%;
justify-content: space-around;
margin-top: 0;
margin-bottom: auto;
padding-top: 20px;
}

footer .content .right .block {
margin-top: 0;
}

footer .content .right .block.site-map {
display: none;
}

.footer-title {
opacity: 0.8;
color: #FFFFFF;
font-family: 'Ubuntu', sans-serif;
font-size: 18px;
line-height: 30px;
padding-bottom: 15px;
}


footer .content .right .title{
font-weight: 600;
font-size: 20px;
color: #fff;
}

footer .content .right .address{
/*margin: 25px 0;*/
}


footer .content .right .title{
font-size: 30px;
line-height: 40px;
margin-bottom: 25px;
font-weight: 400;
}

footer .content .right .text{
opacity: 0.8;
font-size: 18px;
line-height: 30px;
color: #fff;
}


footer .content .right .address .top{

font-size: 18px;
line-height: 24px;
color: #F2F2F2;
margin-bottom: 5px;

}

footer .content .right #footer-menu{
list-style: none;
}

footer .content .right #footer-menu li{
margin-bottom: 15px;
}

footer .content .right #footer-menu li a{
display: inline-block;
font-size: 18px;
line-height: 22px;
color: #fff;
text-decoration: underline;
}

footer .content .right .address .top span{
font-size: 18px;
line-height: 24px;
color: #F2F2F2;
}


footer .content .right .address .bottom{

color: #9899A1;
}


footer .content .right .contacts {

font-size: 18px;
color: #F2F2F2;

}

footer .content .right .contacts .item:first-child{

margin-bottom: 7px;

}

footer .content .right .contacts .item a {
color: white;
}





footer .content-bottom{
background: #101010;
padding: 15px 25px;
}


footer .content-bottom .copywrite{
justify-content: space-between;
font-size: 14px;
line-height: 18px;
color: #B5B5B5;
}
footer .content-bottom .copywrite a {

color: #B5B5B5;
}

footer .content-bottom .copywrite img{
height: 15px;
}


footer  #address-map-footer{
width: 100%;
height: 100%;
}


@media (max-width: 1025px) {

header .bottom{
display: none;
}
}


@media screen and (min-width: 992px)  and (max-width: 1200px) {

section{
background: #000000;
margin-top: 30px;
}


h2{
font-style: normal;
font-weight: bold;
font-size: 60px;
line-height: 70px;
text-transform: uppercase;
color: #FFFFFF;

}




.section-subtitle{
font-size: 20px;
line-height: 27px;
text-transform: uppercase;
}



.section-text-big{
font-size: 18px;
line-height: 28px;
letter-spacing: 0.2px;
color: #CCCCCC;
}


.section-item-title{

font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 30px;
color: #FFFFFF;

}


.section-text-gray{
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;
color: #CCCCCC;
}

.section-text-white{
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 27px;
color: #FFFFFF;
}

.btn-text{
font-size: 16px;
line-height: 21px;
text-align: center;
color: #FFFFFF;
display: block;
text-transform: uppercase;
}

.btn-blue{
width: 103px;
height: 84px;
background: #3134FD;
text-align: center;
align-items: center;
cursor: pointer;
}

#our-features h2{
margin-top: 0;
}

#carousel .item img {
width: 550px;
}

#carousel-tour-360 .item-wrap{
height: 600px;
}


section#tour-360{
height: 600px;
}


#carousel .item {
height: 500px;
}

#about-us .content .right .numbers {
width: 100%;
}
#about-us .content .right .number {
text-align: center;
font-weight: bold;
font-size: 60px;
line-height: 58px;
}

#about-us .content .right .numbers .title {
font-size: 18px;
}

section#testimonials {
padding: 50px 0 75px 0;
}

}



#mobile{
display: none;
width: 100%;
height: 100vh;
}

/*
#carousel-indicators-tour-360{
    padding: 25px 25px 3px 25px;
}

#carousel-indicators-tour-360 li {

    font-size: 14px;
    padding: 0 0 7px 0!important;
}*/

.swiper-button-prev {

left: -145px;
}

.swiper-button-next {
right: -145px;
}

.swiper-btn {
width: 67px;
height: 67px;
border-radius: 100%;
color: white;
border: 2px solid white;
outline: none;
}

.swiper-btn:after {
font-size: 20px;
}
.form-group .nice-select {
width: 100%;
padding: 0;
}
.first-block {
position: relative;
width: 100%;
padding-top: 60px;
margin-top: 0;
display: flex;
font-size: 0;
cursor: pointer;
height: calc(100vh);
padding-top: 60px;
}

.first-block .center {position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%) scale(0);user-select: none;transition: 0.5s;}

.first-block:hover .center {
transform: translate(-50%,-50%) scale(1);
}

.first-block .center img {
filter: drop-shadow(0px 0px 2px black);
cursor: pointer;
}

.first-block .center.play img.play {
display: block;
animation-name: video_play;
animation-duration: 1s;
animation-iteration-count: 1;
opacity: 0;
}

.first-block .center.pause img.play {
display: none;
}

.first-block .center.pause img.pause {
display: block;
animation-name: video_play;
animation-duration: 1s;
animation-iteration-count: 1;
opacity: 0;
}

.first-block .center img.pause {
display: none;
}
.google-map {
positioN: relative;
}

.google-map .map-parent .filter .filters-list-wrap {
height: calc(100vh - 60px);
}

.google-map .map-parent.fullscreen .filter .filters-list-wrap {
height: 100vh;
}

.google-map  .map-parent {height: calc(100vh - 60px);}
.map-filter {

position: absolute;

bottom: 0;

left: 0;

color: white;

padding-bottom: 30px;

padding-left: 64px;
}

.filter-btn {
color: #FFFFFF;
font-size: 25px;
line-height: 28px;
display: flex;
transition: 0.5s;
cursor: pointer;
margin-top: 20px;
}
.filter-btn:hover,
.filter-btn.active {
color: #603ef2;
}

.filter-btn .marker-ic {
width: 22px;
height: 22px;
background-repeat: no-repeat;
background-size: contain;
background-position: center;
margin-right: 20px;
margin-top: auto;
margin-bottom: auto;
}
.google-map h2 {
text-align: center;
padding-top: 30px;
padding-bottom: 30px;
display: none;
}
.popup-overlay {
background-color: rgba(0, 0, 0, 0.5);
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
z-index: 9999;
display: none;
}
.default-popup {
position: absolute;
width: 1px;
height: 1px;
background-color: white;
z-index: 9999;
opacity: 1;
border-radius: 100%;
display: none;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
border-radius: 8px;
display: flex;
display: none;
}
.open .popup-close-btn{
display: block;
top: 0px;
right: -40px;
background-image: url(./img/close-ic.svg);
background-size: 25px;
position: absolute;
}

.popup-close-btn {

position: absolute;

top: 0;

right: -40px;

width: 32px;

height: 32px;

background-image: url(./img/close-ic.svg);

background-position: center;

background-repeat: no-repeat;

background-size: contain;

cursor: pointer;

display: none;
}
.default-popup .popup-content {
background-color: white;
border-radius: 8px;
position: relative;
overflow: hidden;
}
.default-popup.open {
transform: scale(1);
opacity: 1;
border-radius: 8px !important;
display: flex !important;
}

.popup-content{
width: 100%;
height: 100%;
display: none;
}

.open .popup-content {
display: block;
}

.popup-content iframe {
width: 100%;
height: 100%;
border: none;
border-radius: 8px;
}
.default-popup .qr-code {
height: 300px;
width: 300px;
margin: auto;
margin-bottom: 0;
margin-top: 0;
}
.default-popup .qr-code img {
object-fit: contain;
width: 100%;
height: 100%;
}
.get-up-popup .logo {
filter: invert(1);
margin: auto;
display: block;
margin-bottom: 40px;
margin-top: 20px;
display: none;
}

.open.get-up-popup {
padding: 30px;


}

.open.get-up-popup .popup-close-btn {
top: 15px;
right: -49px;
}
.get-up-popup.open .popup-content {
display: flex;
}
.get-up-popup .popup-content {
display: none;
flex-direction: column;
}
.get-up-popup h2 {
color: #000000;
font-size: 50px;
font-weight: 500;
line-height: 61px;
text-align: center;
margin-top: 0px;
margin-bottom: 15px;
}
.get-up-popup .subtitle, .get-up-popup h3 {
width: 100%;
height: 30px;
color: #000000;
font-size: 20px;
line-height: 30px;
text-align: center;
}

.get-up-popup h3 {
line-height: 1;
margin-top: 10px;
margin-bottom: 0;
}
.get-up-popup .qr-code {
width: 212px;
height: 212px;
margin: 20px auto;
margin-bottom: 34px;
}
.get-up-popup .app-links {
width: 100%;
margin-top: 20px;
display: flex;
justify-content: center;
}
.get-up-popup .app-links .app-link {
margin: 0 10px;
}
.get-up-popup .copy-link-box {
font-size: 20px;
padding-top: 37px;
}

.get-up-popup .copy-link-box .text {
text-align: center;
display: flex;
justify-content: center;
}

.get-up-popup .copy-link-box .text a {
color: #603ef2;
text-decoration: dashed;
}

.get-up-popup .copy-link-box .text a:hover {
/* text-decoration: dashed; */
}
.get-up-popup .copy-link-box .text a {
margin-left: 10px;
}
.clipboard-btn {
width: 16px;
height: 16px;
background-image: url(./img/ic_copy.svg);
background-position: center;
background-repeat: no-repeat;
background-size: contain;
margin: auto 0;
margin-left: 10px;
position: relative;
cursor: pointer;
}
.clipboard-btn .tooltip {
transition: 0.5s;
left: calc(100% + 10px);
width: 100px;
text-align: center;
background-color: #603ef2;
border-radius: 3px;
color: white;
padding: 5px;
top: 50%;
transform: translateY(-50%) scale(0);
}
.clipboard-btn.active .tooltip {
opacity: 1;
transform: translateY(-50%) scale(1);
}
.get-up-popup .form-box {

margin: 0 auto;
}

.get-up-popup .form-box .form-line {display: flex;position: relative;margin-top: 18px;justify-content: center;width: 350px;margin: auto;margin-top: 17px;}

.get-up-popup .form-box .form-line .phone {
border: none;
margin-right: auto;
margin-top: auto;
height: auto;
}

.get-up-popup .form-box .form-line .phone input {
border-radius: 25px;
border-width: 1px;
border-style: solid;
border-color: #CECFD0;
outline: none;
height: 46px;
width: 290px;
color: black;
padding: 10px 20px;
background-color: #FAFAFA;
}

.get-up-popup .form-box .form-line .phone input:focus {
border-color: #603ef2;
}

.get-up-popup .form-box .wpcf7-submit {
font-size: 0;
width: 46px;
height: 46px;
margin: auto 0;
border-radius: 100%;
border: none;
background-color: #603ef2;
outline: none;
background-image: url(./img/submit-btn-arow.svg);
background-position: center;
background-repeat: no-repeat;
background-size: 21px;
}

.resize-window-message {
position: fixed;
z-index: 9999999;
background-color: black;
height: 100vh;
width: 100vw;
top: 0;
left: 0;
display: flex;
flex-direction: column;
justify-content: center;
padding: 50px;
display: none;
}
.resize-window-message h2 {

font-size: 50px;

text-align: center;

line-height: 1.5;
}


.folder-practice {
width: 100%;
height: 100vh;
}


.folder-box {
position: relative;
width: 261px;
height: 194px;
background-color: green;
}
.folder-box .border-top-left {

height: 39px;

width: 62px;

position: absolute;

bottom: calc(100% - 39px);

left: 0;

border-width: 1px 0 0px 1px;

border-style: solid;

border-color: white;

border-top-left-radius: 16px;

background-color: rgba(0, 0, 0, 0.3);
}
.folder-box .bottom-right {
margin-top: auto;
width: 100%;
height: calc(100% - 39px);
border-width: 0px 1px 1px 1px;
border-style: solid;
border-color: white;
position: absolute;
bottom: 0;
left: 0;
border-bottom-right-radius: 16px;
border-bottom-left-radius: 16px;
background-color: rgba(0, 0, 0, 0.3);
}
.folder-box .border-top-right {
height: 12px;
width: calc(100% - 96px);
position: absolute;
bottom: calc(100% - 39px);
right: 0;
border-width: 1px 1px 0px 0px;
border-style: solid;
border-color: white;
border-top-right-radius: 16px;
background-color: rgba(0, 0, 0, 0.3);
}

.folder-box .border-top-center {
width: 34px;
height: 39px;
position: absolute;
left: 62px;
border-width: 1px;
border-color: white;
overflow: hidden;
top: 0;
}
.folder-box > * {
position: relative;
z-index: 1;
}
.folder-box .border-top-center:after {content: '';width: 79px;height: 50px;border: 1px solid white;position: absolute;transform: rotate(39deg);top: 18px;left: -25px;background-color: rgba(0, 0, 0, 0.3);}


#wpadminbar {
z-index: 9999999;
}
.scrollmagic-pin-spacer {
position: relative;
z-index: 9999;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
/*    border: 0px solid black;
        -webkit-text-fill-color: white;
        -webkit-box-shadow: 0 0 0 0px black, 0 0 0 30px black inset !important ;
        border-radius: 0px;*/
}


.custom-progress-bar {
width: 364px;
z-index: 2;
margin-top: 70px;
}

.mobile .custom-progress-bar {
display: none;
}

.custom-progress-bar .bottom-text {
text-align: center;
color: white;
font-size: 25px;
padding-top: 2px;
text-shadow: 2px 2px black;
}

.custom-progress-bar .progress-line {
width: 100%;
height: 4px;
background-color: rgba(255, 255, 255, 0.4);
border-radius: 3px;
}

.custom-progress-bar .progress-line-active {
width: 0%;
height: 100%;
background-color: #603ef2;
border-radius: 3px;
position: relative;
}

.custom-progress-bar .progress-line-active .custom-tooltip {
position: absolute;
font-size: 20px;
bottom: 13px;
right: 0%;
width: 50px;
transform: translateX(50%);
display: flex;
justify-content: center;
text-align: center;
}

.custom-progress-bar .progress-line-active .custom-tooltip .corner {
width: 10px;
height: 10px;
background-color: #603ef2;
position: absolute;
bottom: -4px;
left: calc(50% + -4px);
transform: rotate(45deg);
}

.custom-progress-bar .progress-line-active .custom-tooltip .text {
width: 100%;
height: 26px;
line-height: 26px;
color: white;
background-color: #603ef2;
padding: 0 5px;
border-radius: 3px;
font-size: 18px;
position: relative;
z-index: 2;
}

.custom-progress-bar .progress-line-active .custom-tooltip .text span {
font-size: 14px;
padding-left: 2px;
}

.custom-progress-bar .progress-line-active .custom-tooltip .text .change {
font-size: 20px;
}
.si-float-wrapper {
position: absolute;
width: 100%; }
.si-float-wrapper,
.si-float-wrapper * {
box-sizing: border-box; }

[class*='si-wrapper'] {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
position: absolute;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
font-size: 1.4rem;
cursor: default; }

.si-wrapper-top {
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
margin-top: -40px;
margin-left: 0px;
-webkit-transform: translate(-50%, -100%);
transform: translate(-50%, -100%); }

.si-wrapper-bottom {
-webkit-box-orient: vertical;
-webkit-box-direction: reverse;
-ms-flex-direction: column-reverse;
flex-direction: column-reverse;
margin-top: 0px;
margin-left: 0px;
-webkit-transform: translate(-50%, 0);
transform: translate(-50%, 0); }

.si-wrapper-left {
margin-top: -20px;
margin-left: -11px;
-webkit-transform: translate(-100%, -50%);
transform: translate(-100%, -50%); }

.si-wrapper-right {
-webkit-box-orient: horizontal;
-webkit-box-direction: reverse;
-ms-flex-direction: row-reverse;
flex-direction: row-reverse;
margin-top: -20px;
margin-left: 11px;
-webkit-transform: translate(0, -50%);
transform: translate(0, -50%); }

[class*='si-shadow-wrapper'] {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
opacity: 0.4;
z-index: 1; }

.si-shadow-wrapper-top,
.si-shadow-wrapper-bottom {
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column; }

.si-shadow-pointer-bottom,
.si-shadow-pointer-right {
-webkit-box-ordinal-group: 0;
-ms-flex-order: -1;
order: -1; }

.si-shadow-frame {
box-shadow: 0 4px 6px 0 #000; }

[class*='si-shadow-pointer'] {
position: relative;
width: 15px;
height: 15px;
margin: auto; }

[class*='si-shadow-inner-pointer'] {
position: absolute;
width: 141%;
height: 141%;
box-shadow: -2.82843px 2.82843px 6px 0 #000; }

.si-shadow-inner-pointer-top {
left: 50%;
-webkit-transform: translate(-50%, -50%) rotate(-45deg);
transform: translate(-50%, -50%) rotate(-45deg); }

.si-shadow-inner-pointer-bottom {
bottom: 0;
left: 50%;
-webkit-transform: translate(-50%, 50%) rotate(-45deg);
transform: translate(-50%, 50%) rotate(-45deg); }

.si-shadow-inner-pointer-left {
top: 50%;
-webkit-transform: translate(-50%, -50%) rotate(-45deg);
transform: translate(-50%, -50%) rotate(-45deg); }

.si-shadow-inner-pointer-right {
top: 50%;
right: 0;
-webkit-transform: translate(50%, -50%) rotate(-45deg);
transform: translate(50%, -50%) rotate(-45deg); }

.si-frame {
position: relative;
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
border-radius: 0;
overflow: hidden;
z-index: 2; }

.si-content-wrapper {
width: 100%;
max-width: 100%;
max-height: 100%;
padding: 0;
background-color: #eee; }
.si-has-border .si-content-wrapper {
border: 1px solid #bbb; }

.si-content {
overflow: auto; }

.si-close-button {
position: absolute;
top: 0;
right: 0;
border: 0;
outline: none;
background-color: transparent;
color: inherit;
font-family: Arial, Baskerville, monospace;
font-size: 24px;
cursor: pointer;
opacity: 0.5;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none; }
.si-close-button:hover, .si-close-button:focus {
opacity: 0.7; }

[class*='si-pointer-border'] {
position: absolute;
border: 15px solid transparent;
z-index: 3; }

[class*='si-pointer-bg'] {
position: relative;
border: 15px solid transparent;
z-index: 4;
}
.si-has-border [class*='si-pointer-bg'] {
border-width: 15px; }

.si-pointer-border-top,
.si-pointer-border-bottom {
left: 50%;
-webkit-transform: translate(-50%, 0);
transform: translate(-50%, 0); }

.si-pointer-border-left,
.si-pointer-border-right {
top: 50%;
-webkit-transform: translate(0, -50%);
transform: translate(0, -50%); }

.si-pointer-top {
border-bottom: 0; }

.si-pointer-border-top {
bottom: 0;
border-top-color: #bbb; }

.si-pointer-bg-top {
border-top-color: #eee; }

.min .si-pointer-bg-top {border-top-color: #603ef2;display: none;}
.si-has-border .si-pointer-bg-top {
top: -1px;
margin-bottom: 0px; }

.si-pointer-bottom {
border-top: 0; }

.si-pointer-border-bottom {
top: 0;
border-bottom-color: #bbb; }

.si-pointer-bg-bottom {
border-bottom-color: #eee; }
.si-has-border .si-pointer-bg-bottom {
bottom: -1px;
margin-top: 0px; }

.si-pointer-left {
border-right: 0; }

.si-pointer-border-left {
right: 0;
border-left-color: #bbb; }

.si-pointer-bg-left {
border-left-color: #eee; }
.si-has-border .si-pointer-bg-left {
left: -1px;
margin-right: 0px; }

.si-pointer-right {
border-left: 0; }

.si-pointer-border-right {
left: 0;
border-right-color: #bbb; }

.si-pointer-bg-right {
border-right-color: #eee; }
.si-has-border .si-pointer-bg-right {
right: -1px;
margin-left: 0px; }



.map-canvas {
width: 100%;
height: 100%; }

.custom-window {
top: 30px;
max-width: 400px;
-webkit-transition: top 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.3s cubic-bezier(0.4, 0, 0.2, 1);
transition: top 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.3s cubic-bezier(0.4, 0, 0.2, 1);
opacity: 0;
visibility: hidden; }
.custom-window.open .si-frame {
overflow: visible; }
.custom-window.active {
top: 0;
opacity: 1;
visibility: visible;
width: 300px;
max-width: 90vw;
}
.custom-window .si-content-wrapper {
padding-bottom: 0;
}
.custom-window .si-content {
overflow: visible;
width: 100%;
max-width: 100%!important;
overflow: hidden;
position: relative;
// directioN: rtl;
}

.custom-content {
position: relative;
max-height: inherit;
padding-top: 120px;
overflow: auto;
z-index: 2;
background-color: #eeeeee;
margin-top: 0;
}

.custom-img {
position: absolute;
top: 0;
right: 0;
left: 0;
height: 120px;
background-repeat: no-repeat;
background-position: center;
background-size: cover;
z-index: 1;
display: none;
}

.custom-header {
position: relative;
margin: 0;
background-color: #603ef2;
color: #fff;
font-size: 20px;
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
width: 100%;
}
.custom-header small {
display: block;
font-size: 0.55em;
font-weight: 400;
opacity: 0.75; }

.custom-body {
padding: 0;
background-color: #eee;
display: flex;
flex-direction: column;
}

.custom-header, .custom-body .text {
}

.custom-body .text {
padding: 10px 20px;
line-height: 1.5;
max-height: 130px;
overflow-y: auto;
font-size: 14px;
text-align: justify;
}

.custom-header, .custom-body a {}
.custom-body p {
margin: 0; }
.custom-body * + p {
margin-top: 1em; }
.custom-body a.go-to-website {
color: white;
display: block;
width: 130px;
background-color: #603ef2;
padding: 5px 20px;
border-radius: 25px;
text-decoration: none;
margin-left: 18px;
margin-right: auto;
margin-top: 10px;
margin-bottom: 10px;
border: 2px solid #603ef2;
font-weight: 700;
transition: 0.5s;
font-size: 14px;
margin-right: auto;
width: auto;
}

.custom-body a {
font-size: 14px;
}
.custom-body a:hover, .custom-body a:focus, .custom-body a:active {
color: #603ef2;
background-color: white;
}

.custom-close {
position: absolute;
top: 0;
right: 0;
width: 50px;
height: 50px;
-webkit-transition: background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
transition: background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
border: 0;
background-color: rgba(0, 0, 0, 0.5);
color: #fff;
font-size: 1.5em;
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
cursor: pointer;
z-index: 3;
box-shadow: none;
}
.custom-close:hover, .custom-close:focus, .custom-close:active {
background-color: rgba(28, 28, 26, 0.8); }

.custom-window {
max-width: 300px;
}
.custom-content {
padding-top: 0;
}
.custom-img {
height: 160px; }
.custom-header {
line-height: 1.5;
}

::-webkit-scrollbar:horizontal,
::-webkit-scrollbar {
width: 5px;
height: 5px;
// background-color: rgba(175, 176, 178, 0.26);
}
::-webkit-scrollbar-track:horizontal,
::-webkit-scrollbar-track {
// box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-thumb:horizontal,
::-webkit-scrollbar-thumb {
// background-color: #603ef2;
// outline: 1px solid slategrey;
}


.map-n-filter-container .zoom-control {
width: 44px;
height: 89px;
background-color: #603ef2;
position: absolute;
bottom: 30px;
right: 44px;
border-radius: 25px;
font-size: 0;
}

.map-n-filter-container .zoom-control .sep {width: 70%;margin-left: auto;margin-right: auto;height: 1px;background-color: #e6e6e6;opacity: 0.07;}

.map-n-filter-container .zoom-control-btn {
color: white;
font-size: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 44px;
width: 44px;
cursor: pointer;
font-size: 0;
transition: 0.5s;
}

.map-n-filter-container .zoom-control-btn:hover {
background-color: hsl(222, 15%, 23%);
}

.map-n-filter-container .zoom-control-btn.plus {
background-image: url(./img/map-ic-plus.svg);
background-position: center;
border-top-left-radius: 25px;
border-top-right-radius: 25px;
}

.map-n-filter-container .zoom-control-btn.minus {
background-image: url(./img/map-ic-minus.svg);
background-position: center;
border-bottom-left-radius: 25px;
border-bottom-right-radius: 25px;
}


.map-n-filter-container .fullscreen-control {
width: 44px;
height: 44px;
background-color: #323743;
position: absolute;
top: 44px;
right: 44px;
background-image: url(./img/map-fullscreen-ic.svg);
background-position: center;
background-repeat: no-repeat;
border-radius: 100%;
cursor: pointer;
background-size: 20px;
transition: 0.5s;
}

.map-n-filter-container .fullscreen-control:hover {
background-color: #603ef2;
}
#bitnami-banner {
display: none!important;
}

#header-logo {
padding-top: 5px;
padding-bottom: 5px;
height: 50px;
}

#header-logo a {
display: block;
height: 100%;
}

#header-logo a img {
width: 100%;
height: 100%;
object-fit: contain;
display: block;
}




@media screen and (max-width: 768px) {
.custom-window,
.custom-window.active {
max-width: 90%;
width: 90%;
}
.custom-window .custom-close {
right: 0;
z-index: 3;
height: 50px;
top: 0;
box-shadow: none;
width: 50px;
background-color: black;
}
.map-n-filter-container .fullscreen-control {
top: 10px;
right: 10px;
}

body .map-parent .map-type {
top: 10px;
right: 10px;
}

.map-n-filter-container .zoom-control {
right: 10px;
bottom: 10px;
}
}

.page-template-gallery-full {

}
.separate-page header,
.separate-page footer {
display: none;
}
.separate-page section#about-us {
min-height: 100vh;
}
.separate-page section {
margin-top: 0;
}

.separate-page .first-block {
padding-top: 0;
}

.separate-page section#get-demo-block {
min-height: 100vh;
padding: 0;
}

.separate-page section#get-demo-block .my-container {
display: flex;
flex-direction: column;
justify-content: center;
min-height: 100vh;
}
.safari-run .three_js .search-filter .search-filter-btn {
transition: none;
animation: none!important;
}
.safari-run .about-us-slider .about-us-slider-track .big-title {
transition: none;
}
.safari-run .map-n-filter-container .fullscreen-control {
display: none;
}
.safari-run .three_js .floors-selector-n-back {
transition: none;
}

.safari-run .three_js .bomb-btn {
transition: none;
}

.safari-run .three_js .left-corner-block {
transition: none;
}

.page-template-contacts-page.separate-page footer {
height: 100vh;
display: flex;
}
.page-template-contacts-page.separate-page footer .content-bottom {
display: none;
}
.page-template-get-app-page .get-up-popup {
left: 50%;
top: 50%;
display: flex;
width: 501px;
height: auto;
transform: translate(-50%,-50%);
border-radius: 8px;
}

.page-template-get-app-page .get-up-popup  .popup-content {
display: flex;
padding: 30px;
}


.page-template-get-app-page .popup-close-btn {
display: block;
top: 0px;
right: -40px;
background-image: url(./img/close-ic.svg);
background-size: 25px;
position: absolute;
}

.page-template-get-app-page {
height: 100vh;
}

body {
font-size: 14px;
line-height: 1.42857143;
color: #333;
}
.simple-marker-content {
text-align: right;
padding-left: 15px;
padding-right: 15px;
}
`;


let expMapStyle =`
.map-parent {
  width: 100vw;
  // height: 100vh;
  position: relative;
  top: 0;
  overflow: hidden; }
  .map-parent .green-line {
    color: #00a04a;
    font-size: 16px;
    font-weight: 700;
    width: 100%;
    text-align: center;
    padding-left: 30px; }
  .map-parent .red-line {
    color: #ef1c23;
    font-size: 16px;
    font-weight: 700;
    width: 100%;
    text-align: center;
    padding-left: 30px; }
  .map-parent .line-title {
    font-size: 16px;
    font-weight: 700;
    width: 100%;
    text-align: center;
    padding-left: 30px; }
  .map-parent .filter {
    position: absolute;
    bottom: 0;
    right: 0;
    direction: rtl;
    width: 100%; }
    .map-parent .filter .filters-list-wrap {
      position: absolute;
      width: 100vw;
      height: 100vh;
      top: 0;
      background-color: rgba(40, 49, 75, 0.4);
      padding-bottom: 80px;
      padding-top: 0px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-end; }
    .map-parent .filter .filters-list {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding-right: 22px;
      height: auto;
      overflow: auto; }
      .map-parent .filter .filters-list .filter-list-btn {
        color: white;
        width: max-content;
        cursor: pointer;
        display: flex;
        font-size: 20px;
        line-height: 2; }
        .map-parent .filter .filters-list .filter-list-btn.active .move-part .text {
          text-shadow: -2px 2px 2px black; }
        .map-parent .filter .filters-list .filter-list-btn.active .move-part:after {
          content: '';
          position: absolute;
          bottom: 8px;
          left: 5px;
          width: 100%;
          height: 10px;
          background-color: #603ef2;
          z-index: 0; }
        .map-parent .filter .filters-list .filter-list-btn .marker-ic {
          width: 30px;
          height: 30px;
          display: block;
          margin: auto 0;
          background-position: center;
          background-repeat: no-repeat; }
        .map-parent .filter .filters-list .filter-list-btn .move-part {
          margin: auto 0;
          margin-left: 10px;
          position: relative;
          z-index: 2; }
          .map-parent .filter .filters-list .filter-list-btn .move-part .text {
            position: relative;
            z-index: 1; }
    .map-parent .filter .filter-btn {
      position: absolute;
      bottom: 10px;
      right: 10px;
      width: 55px;
      height: 55px;
      background-color: #603ef2;
      border-radius: 100%;
      // background-image: url(./img/filter.svg);
      background-image: url(FILTER__ICON);
      background-position: center;
      background-repeat: no-repeat;
      background-size: 24px;
      transition: none;
      z-index: 1;
      box-shadow: 1px 1px 10px rgba(46, 13, 191, 0.5); }
      .map-parent .filter .filter-btn.open {
        z-index: 5;
        background-size: 18px;
        background-color: #603ef2;
        background-image: url(CLOSE__BTN);
        box-shadow: 0px 0px 0px #2e0dbf; }
  .map-parent.for-app .fullscreen-control {
    display: none; }
  .map-parent.for-app .zoom-control {
    display: none; }
  .map-parent.for-app .map-type {
    box-shadow: 1px 1px 10px rgba(26, 47, 67, 0.5);
    left: 10px;
    right: initial;
    top: initial;
    bottom: 10px; }
  .map-parent.for-app .custom-window .si-content-wrapper {
    border-radius: 10px;
    background-color: white; }
  .map-parent .custom-header {
    background-color: white;
    box-shadow: none;
    font-size: 30px;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
     }
  .map-parent .custom-body {
    background-color: white;
    padding-bottom: 20px; }
    .map-parent .custom-body.with-img .text {
      margin-top: 20px; }
    .map-parent .custom-body .links-btns-wrap .circle-btn {
      position: relative;
      margin-left: 10px;
      margin-top: 13px;
      margin-bottom: auto;
      display: block;
      width: 44px;
      border-radius: 100%;
      background-color: white;
      border: 1px solid #603ef2; }
      .map-parent .custom-body .links-btns-wrap .circle-btn.phone-btn {
        border: none;
        width: auto;
        padding-right: 42px;
        margin-right: 13px;
        color: black;
        font-size: 14px; }
        .map-parent .custom-body .links-btns-wrap .circle-btn.phone-btn:after {
          background-image: url(PHONE__ICON);
          background-size: 18px;
          background-position: right 8px center; }
      .map-parent .custom-body .links-btns-wrap .circle-btn.map-place {
        width: auto;
        border: none;
        width: auto;
        padding-right: 42px;
        margin-right: 13px;
        color: black;
        margin-top: 12px; }
        .map-parent .custom-body .links-btns-wrap .circle-btn.map-place:after {
          background-image: url(COMPASS__ICON);
          background-size: 18px;
          background-position: right 8px center; }
      .map-parent .custom-body .links-btns-wrap .circle-btn:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 20px;
        transition: 0.5s; }
    .map-parent .custom-body .route-wrap {
      display: flex;
      border-bottom: 1px solid rgba(151, 151, 151, 0.35);
      border-top: 1px solid rgba(151, 151, 151, 0.35);
      justify-content: space-between;
      padding-left: 10px; }
    .map-parent .custom-body .text {
      width: calc(100% - 40px);
      padding: 0;
      padding-right: 10px;
      margin: auto;
      margin-bottom: 20px; }
    .map-parent .custom-body .get-route-title {
      margin-top: auto;
      margin-bottom: auto;
      padding-right: 19px;
      letter-spacing: 0.4px;
      padding-top: 10px;
      padding-bottom: 10px; }
      .map-parent .custom-body .get-route-title .top-text {
        display: block;
        font-size: 16px;
        margin-bottom: 5px; }
      .map-parent .custom-body .get-route-title .bottom-text {
        display: block;
        font-size: 14px;
        font-weight: 400;
        display: flex; }
        .map-parent .custom-body .get-route-title .bottom-text .middle {
          margin: 0 5px; }
        .map-parent .custom-body .get-route-title .bottom-text .row {
          display: flex; }
          .map-parent .custom-body .get-route-title .bottom-text .row span {
            margin: 0 2px; }
    .map-parent .custom-body .route-type-btns {
      padding: 0;
      padding-right: 10px; }
      .map-parent .custom-body .route-type-btns .route-type-btn {
        height: 34px;
        width: 34px;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 4px;
        margin-right: 4px; }
        .map-parent .custom-body .route-type-btns .route-type-btn:after {
          background-size: 20px; }
    .map-parent .custom-body .go-to-website {
      padding: 0;
      margin-bottom: -3px;
      height: 42px;
      margin-left: 2px;
      display: flex;
      line-height: 44px;
      margin-right: 6px;
      background-color: white;
      color: #272727;
      font-weight: 400;
      margin-top: 13px;
      margin-left: initial;
      padding-right: 14px;
      border: none; }
      .map-parent .custom-body .go-to-website:before {
        content: '';
        width: 20px;
        height: 20px;
        background-image: url(GLOBE__ICON);
        background-repeat: no-repeat;
        background-position: left 0px center;
        margin: auto 0;
        margin-left: 14px;
        background-size: 20px; }
  .map-parent .map-container {
    width: 100%;
    // height: calc(100vh + 25px);
    height: 100vh;
    transition: 0.5s; }
    .map-parent .map-container.open {
      filter: blur(4px) grayscale(1) brightness(0.4); }
  .map-parent .custom-window {
    width: 409px; }
    .map-parent .custom-window .si-shadow-frame {
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
      border-radius: 10px;
      overflow: hidden; }
    .map-parent .custom-window .si-shadow-inner-pointer-top {
      box-shadow: 0px 10px 7px rgba(0, 0, 0, 0.4); }
    .map-parent .custom-window .si-content-wrapper {
      border-radius: 10px;
      overflow: hidden;
      position: relative; }
    .map-parent .custom-window .custom-content {
      background-color: white; }
      .map-parent .custom-window .custom-content .custom-header-wrap.with-img {
        position: relative;
        display: flex;
        height: 160px; }
        .map-parent .custom-window .custom-content .custom-header-wrap.with-img .custom-header {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          margin-top: auto;
          margin-bottom: auto;
          position: relative;
          z-index: 2;
          height: auto;
          top: 0;
          left: 0;
          background-color: transparent;
          background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 40%, transparent);
          color: white;
          text-shadow: 1px 1px 2px black; }
        .map-parent .custom-window .custom-content .custom-header-wrap.with-img .custom-header-img {
          height: auto;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1; }
          .map-parent .custom-window .custom-content .custom-header-wrap.with-img .custom-header-img img {
            width: 100%;
            height: 100%;
            object-fit: cover; }
    .map-parent .custom-window .si-pointer-bg-top {
      border-top-color: white;
      display: block;
      box-shadow: none; }
    .map-parent .custom-window .custom-close {
      color: black;
      background-image: url(SNAZZY__CLOSE__ICON);
      font-size: 0;
      background-position: center;
      background-repeat: no-repeat;
      width: 38px;
      height: 38px;
      border-radius: 100%;
      background-color: transparent;
      top: 10px;
      right: 10px;
      // box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); 
      }
    @media (orientation: landscape) {
      .map-parent .custom-window .custom-close {
        top: 19px; } }
  .map-parent .zoom-control {
    width: 44px;
    height: 89px;
    background-color: #603ef2;
    position: absolute;
    bottom: 10px;
    right: initial;
    left: 10px;
    border-radius: 25px;
    font-size: 0;
    box-shadow: 1px 1px 10px rgba(46, 13, 191, 0.5); }
  .map-parent .zoom-control .sep {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    height: 1px;
    background-color: #e6e6e6;
    opacity: 0.07; }
  .map-parent .zoom-control-btn {
    color: white;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 44px;
    width: 44px;
    cursor: pointer;
    font-size: 0;
    transition: 0.5s;
    background-position: 2px center; }
  .map-parent .zoom-control-btn:hover {
    background-color: #323743; }
  .map-parent .zoom-control-btn.plus {
    background-image: url(CONTROLS__PLUS);
    border-top-left-radius: 25px;
    border-top-right-radius: 25px; }
  .map-parent .zoom-control-btn.minus {
    background-image: url(CONTROLS__MINUS);
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px; }
  .map-parent .fullscreen-control {
    width: 44px;
    height: 44px;
    background-color: #323743;
    position: absolute;
    top: 44px;
    right: 44px;
    background-image: url(./img/map-fullscreen-ic.svg);
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 100%;
    cursor: pointer;
    background-size: 20px;
    transition: 0.5s;
    display: none; }
  .map-parent .fullscreen-control:hover {
    background-color: #603ef2; }
  .map-parent .route-panel {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px;
    background-color: white;
    display: none; }
  .map-parent .route-type-btns {
    display: flex;
     }
    .map-parent .route-type-btns .route-type-btn {
      border-radius: 100%;
      width: 44px;
      height: 44px;
      position: relative;
      margin: 5px;
      transition: 0.5s; }
      .map-parent .route-type-btns .route-type-btn:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        cursor: pointer;
        transition: 0.5s;
        background-size: 25px; }
        .map-parent .route-type-btns .route-type-btn:hover:after, .map-parent .route-type-btns .route-type-btn.active:after {
          filter: grayscale(0) invert(0); }
    .map-parent .route-type-btns .change-to-walking:after {
      filter: grayscale(1) invert(1);
      background-image: url(WALKING__ICON); }
    .map-parent .route-type-btns .change-to-bicycle:after {
      filter: grayscale(1) invert(1);
      background-image: url(BICYCLE__ICON); }
    .map-parent .route-type-btns .change-to-driving:after {
      filter: grayscale(1) invert(1);
      background-image: url(CAR__ICON); }
  .map-parent .get-route-title {
    font-size: 18px;
    }
  .map-parent .map-type {
    color: white;
    box-shadow: 1px 1px 10px rgba(26, 47, 67, 0.5);
    position: absolute;
    top: 10px;
    right: 10px;
    // border-radius: 33px;
    border-radius: 100%;
    // height: 55px;
    display: flex;
    overflow: hidden; }
    .map-parent .map-type .map-type-toggler {
      display: flex;
      box-shadow: 1px 1px 10px rgba(46, 13, 191, 0.5);
      width: 55px;
      height: 55px;
      background-image: url(SATELLITE__ICON);
      background-color: #1A2F43;
      background-position: center;
      background-size: 24px;
      background-repeat: no-repeat;
      }
      .map-parent .map-type .map-type-toggler.satellite {
        background-image: url(MAP__ICON); }
      .map-parent .map-type .map-type-toggler span {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center; }
      .map-parent .map-type .map-type-toggler .const-text {
        padding-left: 25px;
        background-color: #603ef2;
        padding-right: 10px;
        display: none;
        font-size: 0px;
        opacity: 0; }
      .map-parent .map-type .map-type-toggler .var-text {
        padding-left: 25px;
        background-color: rgba(15, 17, 35, 0.9);
        padding-right: 25px;
        cursor: pointer;
        font-size: 0px;
        opacity: 0; }

html[dir="ltr"] .custom-window .si-content {
  direction: ltr; }

html[dir="ltr"] .map-parent .custom-window .custom-close {
  left: initial;
  right: 10px; }

html[dir="ltr"] .map-parent .custom-body .get-route-title {
  padding-left: 0; }

html[dir="ltr"] .map-parent .custom-body .links-btns-wrap .circle-btn.phone-btn {
  padding-right: 0;
  padding-left: 42px; }

html[dir="ltr"] .map-parent .custom-body .links-btns-wrap .circle-btn.map-place {
  padding-right: 0;
  padding-left: 42px; }

html[dir="ltr"] .map-parent .custom-body .links-btns-wrap .circle-btn.phone-btn:after {
  background-position: left 8px center; }

html[dir="ltr"] .map-parent .custom-body .links-btns-wrap .circle-btn.map-place:after {
  background-position: left 8px center; }

html[dir="ltr"] .map-parent .custom-body .get-route-title .bottom-text .row {
  flex-direction: row-reverse; }

body.desktop .map-parent .filter .filter-btn {
  background-color: #1A2F43;
  box-shadow: 1px 1px 10px rgba(26, 47, 67, 0.5); }

body.desktop .map-parent .zoom-control {
  background-color: #1A2F43;
  box-shadow: 1px 1px 10px rgba(26, 47, 67, 0.5); }

body.desktop .map-parent .filter .filters-list .filter-list-btn.active .move-part:after {
  background-color: #1A2F43; }

.map__go-home__btn {
  width: 52px;
  height: 52px;
  position: absolute;
  z-index: 3;
  cursor: pointer; }

.home-btn__img {
  width: 100%;
  height: 100%;
  object-fit: contain; }

.filters-list-wrap {
  z-index: 4; }

/*# sourceMappingURL=exp-map.css.map */

`;


const resetCss = `
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, input, textarea {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  outline: none;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
  color: #020020;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
img {
  max-width: 100%;
  object-fit: scale-down;
  margin: auto;
}

`;

let newStyle =`
.custom-content{
    font-family: 'Ubuntu', sans-serif;
    font-weight: 300;
    color: #03233A;
}
.custom-content__wrapper{
    padding: 16px;
}
.custom-content .custom-header{
    font-weight: 500;
    font-size: 30px;
}
.custom-category{
    display: flex;
}
.custom-route{
    border-top: 1px solid #C0C0C0;
    border-bottom: 1px solid #C0C0C0;
}
.category-title{
    margin-left: 8px;
    font-weight: 300;
    font-size: 16px;
}
.custom-description{
    margin: 12px 0;
}
.custom-description__text{
    font-size: 14px;
    color: #6E767E;
}
.custom-category__img-container{
    width: 16px;
    height: 16px;
}
.custom-category__img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-bottom: 4px;
}
.route-wrap{
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
}
.route-type-btns{
    flex-direction: row-reverse;
}
.get-route-title{
    width: 50%;
}
.get-route-title .bottom-text{
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
}
.get-route-title .bottom-text .row {
    display: flex;
    flex-direction: row-reverse;
}
.get-route-title .bottom-text .middle{
    padding-bottom: 7px;
}
.get-route-title .bottom-text .row .number{
    padding-right: 5px;
}
.custom-info{
    font-size: 16px;
    color: #1A2F43;
}
.custom-info .links-btns-wrap .map-place{
    display: none;
    align-items: flex-end;
    color: inherit;
}
.custom-info .links-btns-wrap{
    display: flex;
    flex-direction: column;
}
.custom-info .links-btns-wrap .map-place:before {
    content:'';
    width: 16px;
    height: 16px;
    display: inline-block;
    background-image: url(COMPASS__ICON);
    background-position: center;
    background-size: 18px;
    margin-right: 9px;
}
.custom-info .links-btns-wrap .phone-btn:before {
    content:'';
    width: 16px;
    height: 16px;
    display: inline-block;
    background-image: url(PHONE__ICON);
    margin-right: 9px;
}
.custom-info .links-btns-wrap .go-to-website:before{
    content:'';
    width: 16px;
    height: 16px;
    display: inline-block;
    background-image: url(GLOBE__ICON);
  background-position: top;
    background-size: 18px;
    margin-right: 9px;
}
.custom-info .links-btns-wrap .go-to-website{
    margin-top: 16px;
    display: flex;
    align-items: center;
    color: #1A2F43;
}
.custom-info .links-btns-wrap .phone-btn{
    margin: 16px 0;
    display: flex;
    align-items: flex-end;
}
.gmnoprint{
    display: none;
}

body.mobile .map-parent .map-type{
    box-shadow: 1px 1px 10px rgba(46, 13, 191, 0.5);
    background-color: #603ef2;
}

body.mobile .map-parent .map-type .map-type-toggler{
    background-color: #603ef2;
}

body.desktop .map-parent .filter .filter-btn{
    left: unset;
}

body.desktop .map-parent .map-type .map-type-toggler{
    background-color: #1A2F43;
    box-shadow: 1px 1px 10px rgba(26, 47, 67, 0.5);
}

.long__label-text{
 width: 120px;
 white-space: break-spaces;
}

.marker__label{
    filter: none;
}

`;

const mobileStyle =`
.map-parent .custom-window{
   width: 100%;
   max-width: 100%;
  -webkit-transition: none;
   transition: none;
}

.map-parent .custom-window .si-pointer-bg-top{
    display: none;
}
.map-parent.for-app .map-type{
    top: unset;
    bottom: 70px;
    height: 42px;
    width: 42px;
    box-shadow: 1px 1px 10px rgba(46, 13, 191, 0.5);
}
.map-parent .map-type .map-type-toggler{
    width: 42px;
    height: 42px;
    box-shadow: none;
    border-radius: 50%;
    background-color: #603ef2;
}
.map-parent .filter .filter-btn{
    bottom: 10px;
    top: unset;
    width: 42px;
    height: 42px;
    right: unset;
    left: 10px;
}
.custom-info, .custom-description{
    display: none;
}
.map-parent .custom-window .custom-content .custom-header-wrap.with-img{
    display: none;
}
.custom-close{
    filter: brightness(0);
}
.custom-route{
    border-bottom: none;   
}
.map-parent .custom-window .custom-close{
    top: 0;
    right: 0;
    display: none;
}
.custom-category{
    margin-bottom: 12px;
}
.get-route-title{
    display: none;
}
.map-parent .route-type-btns{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    width: 100%;
}
.time-for-route{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-size: 14px;
    justify-items: center;
}
.time-for-route .number{
    margin-right: 4px;
}
.map-parent .route-type-btns .route-type-btn{
    height: 22px;
}
.route-wrap{
    margin-top: 13px;
}
.custom-title:before{
    content: '';
    width: 36px;
    height: 4px;
    background: #C0C0C0;
    display: block;
    border-radius: 8px;
    top: 5px;
    right: 45%;
    position: absolute;
}
.snazzy-card__window{
    position: absolute;
    z-index: 2;
    bottom: -35%;
    width: 100%;
}
.map-parent.for-app .custom-window .si-content-wrapper{
    border-radius: 0;
}
.si-wrapper-top{
   -webkit-transform: none;
    transform: none;
}
[class*='si-wrapper']{
    position: initial;
}

@media screen and (min-width: 768px){
    .map-parent .filter .filter-btn{
        right: 10px;
    }
    .map-parent.for-app .map-type{
        top: initial;
    }
}


`;

const mobileOpenedCard = `
.snazzy-card__window{
    z-index: 3;
}
.custom-title:before{
    display: none;
}
.map-parent .custom-window .custom-close{
    top: 10px;
    right: 10px;
    filter: unset;
    display: block;
    position: absolute;
}
.map-parent .custom-window .custom-content .custom-header-wrap.with-img{
    display: block;
    height: 235px;
}
.custom-info, .custom-description{
    display: block;
}
.custom-route{
    border-bottom: 1px solid #C0C0C0;
}
.custom-info .links-btns-wrap .map-place{
    background: #1A2F43;
    color: #fff;
    width: fit-content;
    padding: 13px 16px 13px 0;
    border-radius: 6px;
    align-self: flex-end;
    display: none;
}
.custom-info .links-btns-wrap .map-place:before{
    width: 24px;
    height: 24px;
    margin-left: 9px;
    filter: brightness(15);
    background-size: unset;
}
.route-wrap{
    margin-top: 5px;
}
.time-for-route{
    margin-bottom: 5px;
}
.custom-info .links-btns-wrap .go-to-website, .custom-info .links-btns-wrap .phone-btn{
    color: #1A2F43;
}

`;

const rtlStyle = `
.map-parent .custom-window{
    direction: rtl;
}
.category-title{
    margin-left: 0;
    margin-right: 8px;
}
.custom-info .links-btns-wrap .go-to-website:before, .custom-info .links-btns-wrap .phone-btn:before{
    margin-right: 0px;
    margin-left: 9px;
}
.custom-info .links-btns-wrap .map-place:before{
    margin-right: 0px;
}
.custom-content__wrapper .custom-info .links-btns-wrap .map-place{
    padding: 13px 16px 13px 13px;
}
.get-route-title .bottom-text .row .number{
    padding-right: 0px;
    padding-left: 5px;
}
.time-for-route .number{
    margin-right: 0px;
    margin-left: 4px;
}

`;


const poiIcons = {
    transport_i: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M12 3C16.5714 3 20 4 20 6C20 7.3475 20 13.0453 20 17.0003C20 18.1049 19.1046 19 18 19H12" stroke="white" stroke-width="1.6"/>' +
      '<path d="M12 3C7.42857 3 4 4 4 6C4 7.3475 4 13.0453 4 17.0003C4 18.1049 4.89543 19 6 19H12" stroke="white" stroke-width="1.6"/>' +
      '<path d="M20 12H4" stroke="white" stroke-width="1.6"/>' +
      '<path d="M20 7C20 7 17.5 6 12 6C6.5 6 4 7 4 7" stroke="white" stroke-width="1.6"/>' +
      '<path d="M18 19V21H16.5V19" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M7.5 19V21H6V19" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<circle cx="8" cy="16" r="1" stroke="white" stroke-width="1.4"/>' +
      '<circle cx="16" cy="16" r="1" stroke="white" stroke-width="1.4"/>' +
      '</svg>',
    transport_f: '<svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3094 26.3754C35.394 23.9921 36 21.332 36 18.5263C36 8.29451 27.9411 0 18 0C8.05887 0 0 8.29451 0 18.5263C0 21.332 0.605981 23.9921 1.69059 26.3754C5.08668 34.3491 12.852 40.762 18 44C23.148 40.762 30.9133 34.3491 34.3094 26.3754Z" fill="#C0C0C0"/>' +
      '<path d="M18 10C22.5714 10 26 11 26 13C26 14.3475 26 20.0453 26 24.0003C26 25.1049 25.1046 26 24 26H18" stroke="white" stroke-width="1.6"/>' +
      '<path d="M18 10C13.4286 10 10 11 10 13C10 14.3475 10 20.0453 10 24.0003C10 25.1049 10.8954 26 12 26H18" stroke="white" stroke-width="1.6"/>' +
      '<path d="M26 19H10" stroke="white" stroke-width="1.6"/>' +
      '<path d="M26 14C26 14 23.5 13 18 13C12.5 13 10 14 10 14" stroke="white" stroke-width="1.6"/>' +
      '<path d="M24 26V28H22.5V26" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M13.5 26V28H12V26" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<circle cx="14" cy="23" r="1" stroke="white" stroke-width="1.4"/>' +
      '<circle cx="22" cy="23" r="1" stroke="white" stroke-width="1.4"/>' +
      '</svg>',
    synagogue_i: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M12 2L20.6603 17H3.33975L12 2Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M12 22L20.6603 7H3.33975L12 22Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '</svg>',
    synagogue_f: '<svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3094 26.3754C35.394 23.9921 36 21.332 36 18.5263C36 8.29451 27.9411 0 18 0C8.05887 0 0 8.29451 0 18.5263C0 21.332 0.605981 23.9921 1.69059 26.3754C5.08668 34.3491 12.852 40.762 18 44C23.148 40.762 30.9133 34.3491 34.3094 26.3754Z" fill="#C0C0C0"/>' +
      '<path d="M18 9L26.6603 24H9.33975L18 9Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M18 29L26.6603 14H9.33975L18 29Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '</svg>',
    supermarkets_i: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M6 7H20.5L18 15H7L6 7Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M6 7L5 4.5L3 4.5" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<circle cx="16" cy="19" r="1.2" stroke="white" stroke-width="1.6"/>' +
      '<circle cx="9" cy="19" r="1.2" stroke="white" stroke-width="1.6"/>' +
      '</svg>',
    supermarkets_f: '<svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3094 26.3754C35.394 23.9921 36 21.332 36 18.5263C36 8.29451 27.9411 0 18 0C8.05887 0 0 8.29451 0 18.5263C0 21.332 0.605981 23.9921 1.69059 26.3754C5.08668 34.3491 12.852 40.762 18 44C23.148 40.762 30.9133 34.3491 34.3094 26.3754Z" fill="#C0C0C0"/>' +
      '<path d="M12 14H26.5L24 22H13L12 14Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M12 14L11 11.5L9 11.5" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<circle cx="22" cy="26" r="1.2" stroke="white" stroke-width="1.6"/>' +
      '<circle cx="15" cy="26" r="1.2" stroke="white" stroke-width="1.6"/>' +
      '</svg>',
    subway_i: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M16.35 8.27538C16.7113 8.36715 16.9937 8.45776 17.2 8.53214V13.2H6.80001V8.53213C7.00633 8.45776 7.28871 8.36715 7.65006 8.27538C8.56908 8.04198 10.0029 7.8 12 7.8C13.9971 7.8 15.4309 8.04198 16.35 8.27538ZM12 18.8H14.5719L16.3344 21.4438C16.5795 21.8114 17.0761 21.9107 17.4438 21.6656C17.8114 21.4206 17.9107 20.9239 17.6657 20.5562L16.4688 18.761C17.7916 18.5381 18.8 17.3882 18.8 16.0011V8.25C18.8 6.94473 17.6754 6.2013 16.55 5.80741C15.3581 5.39023 13.7567 5.2 12 5.2C10.2433 5.2 8.64197 5.39023 7.45002 5.80741C6.32461 6.2013 5.20001 6.94473 5.20001 8.25V16.0011C5.20001 17.3882 6.20839 18.5381 7.53123 18.761L6.33437 20.5562C6.08929 20.9239 6.18863 21.4206 6.55625 21.6656C6.92388 21.9107 7.42057 21.8114 7.66565 21.4438L9.42816 18.8H12ZM9 16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16ZM17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16Z" fill="white"/>' +
      '<path d="M2 12C2 6.47715 6.47715 2 12 2V2C17.5228 2 22 6.47715 22 12V22H2V12Z" stroke="white" stroke-width="1.4" stroke-linejoin="round"/>' +
      '</svg>',
    subway_f: '<svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3094 26.3754C35.394 23.9921 36 21.332 36 18.5263C36 8.29451 27.9411 0 18 0C8.05887 0 0 8.29451 0 18.5263C0 21.332 0.605981 23.9921 1.69059 26.3754C5.08668 34.3491 12.852 40.762 18 44C23.148 40.762 30.9133 34.3491 34.3094 26.3754Z" fill="#C0C0C0"/>' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M22.35 15.2754C22.7113 15.3672 22.9937 15.4578 23.2 15.5321V20.2H12.8V15.5321C13.0063 15.4578 13.2887 15.3672 13.6501 15.2754C14.5691 15.042 16.0029 14.8 18 14.8C19.9971 14.8 21.4309 15.042 22.35 15.2754ZM18 25.8H20.5719L22.3344 28.4438C22.5795 28.8114 23.0761 28.9107 23.4438 28.6656C23.8114 28.4206 23.9107 27.9239 23.6657 27.5562L22.4688 25.761C23.7916 25.5381 24.8 24.3882 24.8 23.0011V15.25C24.8 13.9447 23.6754 13.2013 22.55 12.8074C21.3581 12.3902 19.7567 12.2 18 12.2C16.2433 12.2 14.642 12.3902 13.45 12.8074C12.3246 13.2013 11.2 13.9447 11.2 15.25V23.0011C11.2 24.3882 12.2084 25.5381 13.5312 25.761L12.3344 27.5562C12.0893 27.9239 12.1886 28.4206 12.5563 28.6656C12.9239 28.9107 13.4206 28.8114 13.6657 28.4438L15.4282 25.8H18ZM15 23C15 23.5523 14.5523 24 14 24C13.4477 24 13 23.5523 13 23C13 22.4477 13.4477 22 14 22C14.5523 22 15 22.4477 15 23ZM23 23C23 23.5523 22.5523 24 22 24C21.4477 24 21 23.5523 21 23C21 22.4477 21.4477 22 22 22C22.5523 22 23 22.4477 23 23Z" fill="white"/>' +
      '<path d="M8 19C8 13.4772 12.4772 9 18 9V9C23.5228 9 28 13.4772 28 19V29H8V19Z" stroke="white" stroke-width="1.4" stroke-linejoin="round"/>' +
      '</svg>',
    streets_i: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M3 20L7 3" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M21 20L17 3" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M12 19V16" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M12 13V10" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M12 7V4" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '</svg>',
    streets_f: '<svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3094 26.3754C35.394 23.9921 36 21.332 36 18.5263C36 8.29451 27.9411 0 18 0C8.05887 0 0 8.29451 0 18.5263C0 21.332 0.605981 23.9921 1.69059 26.3754C5.08668 34.3491 12.852 40.762 18 44C23.148 40.762 30.9133 34.3491 34.3094 26.3754Z" fill="#C0C0C0"/>' +
      '<path d="M9 27L13 10" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M27 27L23 10" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M18 26V23" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M18 20V17" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M18 14V11" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '</svg>',
    sports_i: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M4.92782 19.07C4.34204 18.4842 4.34204 17.5344 4.92782 16.9486L5.98848 15.888L8.10981 18.0093L7.04915 19.07C6.46336 19.6558 5.51361 19.6558 4.92782 19.07V19.07Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M19.07 4.92782C18.4842 4.34203 17.5344 4.34203 16.9486 4.92782L15.888 5.98848L18.0093 8.1098L19.07 7.04914C19.6557 6.46335 19.6557 5.5136 19.07 4.92782V4.92782Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<rect x="2.80762" y="12.7071" width="3" height="12" rx="1.5" transform="rotate(-45 2.80762 12.7071)" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<rect width="3" height="12" rx="1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 12.7071 2.80762)" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<rect x="8.11201" y="13.7689" width="8" height="2.99687" transform="rotate(-45 8.11201 13.7689)" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '</svg>',
    sports_f: '<svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3094 26.3754C35.394 23.9921 36 21.332 36 18.5263C36 8.29451 27.9411 0 18 0C8.05887 0 0 8.29451 0 18.5263C0 21.332 0.605981 23.9921 1.69059 26.3754C5.08668 34.3491 12.852 40.762 18 44C23.148 40.762 30.9133 34.3491 34.3094 26.3754Z" fill="#C0C0C0"/>' +
      '<path d="M10.9278 26.07C10.342 25.4842 10.342 24.5344 10.9278 23.9486L11.9885 22.888L14.1098 25.0093L13.0491 26.07C12.4634 26.6558 11.5136 26.6558 10.9278 26.07V26.07Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M25.07 11.9278C24.4842 11.342 23.5344 11.342 22.9486 11.9278L21.888 12.9885L24.0093 15.1098L25.07 14.0491C25.6557 13.4634 25.6557 12.5136 25.07 11.9278V11.9278Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<rect x="8.80761" y="19.7071" width="3" height="12" rx="1.5" transform="rotate(-45 8.80761 19.7071)" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<rect width="3" height="12" rx="1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 18.7071 9.80762)" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<rect x="14.112" y="20.7689" width="8" height="2.99687" transform="rotate(-45 14.112 20.7689)" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '</svg>',
    shopping_i: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M6 7H20.5L18 15H7L6 7Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M6 7L5 4.5L3 4.5" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<circle cx="16" cy="19" r="1.2" stroke="white" stroke-width="1.6"/>' +
      '<circle cx="9" cy="19" r="1.2" stroke="white" stroke-width="1.6"/>' +
      '</svg>',
    shopping_f: '<svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3094 26.3754C35.394 23.9921 36 21.332 36 18.5263C36 8.29451 27.9411 0 18 0C8.05887 0 0 8.29451 0 18.5263C0 21.332 0.605981 23.9921 1.69059 26.3754C5.08668 34.3491 12.852 40.762 18 44C23.148 40.762 30.9133 34.3491 34.3094 26.3754Z" fill="#C0C0C0"/>' +
      '<path d="M12 14H26.5L24 22H13L12 14Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M12 14L11 11.5L9 11.5" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<circle cx="22" cy="26" r="1.2" stroke="white" stroke-width="1.6"/>' +
      '<circle cx="15" cy="26" r="1.2" stroke="white" stroke-width="1.6"/>' +
      '</svg>',
    restaurants_i: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M5 3V6C5 7.65685 6.34315 9 8 9V9C9.65685 9 11 7.65685 11 6V3M8 3V12" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<rect x="7" y="12" width="2" height="9" rx="1" stroke="white" stroke-width="1.6"/>' +
      '<rect x="16" y="15" width="2" height="6" rx="1" stroke="white" stroke-width="1.6"/>' +
      '<path d="M18 16C18 11.5 18 5 18 3C17.5 3 14 3 14 14H16.5V15" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '</svg>',
    restaurants_f: '<svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3094 26.3754C35.394 23.9921 36 21.332 36 18.5263C36 8.29451 27.9411 0 18 0C8.05887 0 0 8.29451 0 18.5263C0 21.332 0.605981 23.9921 1.69059 26.3754C5.08668 34.3491 12.852 40.762 18 44C23.148 40.762 30.9133 34.3491 34.3094 26.3754Z" fill="#C0C0C0"/>' +
      '<path d="M11 10V13C11 14.6569 12.3431 16 14 16V16C15.6569 16 17 14.6569 17 13V10M14 10V19" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<rect x="13" y="19" width="2" height="9" rx="1" stroke="white" stroke-width="1.6"/>' +
      '<rect x="22" y="22" width="2" height="6" rx="1" stroke="white" stroke-width="1.6"/>' +
      '<path d="M24 23C24 18.5 24 12 24 10C23.5 10 20 10 20 21H22.5V22" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '</svg>',
    beaches_i: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M15.3294 2.30667L15.0706 3.2726" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M12.4824 12.9319L10.6707 19.6933" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M9.71402 11.6724L9.29365 12.3531L9.39355 12.4148L9.50696 12.4452L9.71402 11.6724ZM5.27262 8.92943L4.49988 8.72238L4.34582 9.29732L4.85225 9.61009L5.27262 8.92943ZM15.5096 13.2253L15.3025 13.9981L15.4159 14.0285L15.5333 14.025L15.5096 13.2253ZM20.7274 13.0705L20.7512 13.8702L21.3461 13.8525L21.5002 13.2776L20.7274 13.0705ZM10.1344 10.9918L5.69299 8.24878L4.85225 9.61009L9.29365 12.3531L10.1344 10.9918ZM15.7166 12.4526L9.92107 10.8997L9.50696 12.4452L15.3025 13.9981L15.7166 12.4526ZM20.7037 12.2709L15.4859 12.4257L15.5333 14.025L20.7512 13.8702L20.7037 12.2709ZM14.8635 4.04532C18.7045 5.0745 20.9839 9.02253 19.9547 12.8635L21.5002 13.2776C22.7581 8.58309 19.9721 3.75773 15.2776 2.49984L14.8635 4.04532ZM6.04536 9.13649C7.07454 5.29553 11.0226 3.01614 14.8635 4.04532L15.2776 2.49984C10.5831 1.24195 5.75777 4.02788 4.49988 8.72238L6.04536 9.13649Z" fill="white"/>' +
      '<path d="M4 20.5C11.5 17 15 24 21 20.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '</svg>',
    beaches_f: '<svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3094 26.3754C35.394 23.9921 36 21.332 36 18.5263C36 8.29451 27.9411 0 18 0C8.05887 0 0 8.29451 0 18.5263C0 21.332 0.605981 23.9921 1.69059 26.3754C5.08668 34.3491 12.852 40.762 18 44C23.148 40.762 30.9133 34.3491 34.3094 26.3754Z" fill="#C0C0C0"/>' +
      '<path d="M21.3294 9.30667L21.0706 10.2726" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M18.4824 19.9319L16.6707 26.6933" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M15.714 18.6724L15.2936 19.3531L15.3935 19.4148L15.507 19.4452L15.714 18.6724ZM11.2726 15.9294L10.4999 15.7224L10.3458 16.2973L10.8522 16.6101L11.2726 15.9294ZM21.5096 20.2253L21.3025 20.9981L21.4159 21.0285L21.5333 21.025L21.5096 20.2253ZM26.7274 20.0705L26.7512 20.8702L27.3461 20.8525L27.5002 20.2776L26.7274 20.0705ZM16.1344 17.9918L11.693 15.2488L10.8522 16.6101L15.2936 19.3531L16.1344 17.9918ZM21.7166 19.4526L15.9211 17.8997L15.507 19.4452L21.3025 20.9981L21.7166 19.4526ZM26.7037 19.2709L21.4859 19.4257L21.5333 21.025L26.7512 20.8702L26.7037 19.2709ZM20.8635 11.0453C24.7045 12.0745 26.9839 16.0225 25.9547 19.8635L27.5002 20.2776C28.7581 15.5831 25.9721 10.7577 21.2776 9.49984L20.8635 11.0453ZM12.0454 16.1365C13.0745 12.2955 17.0226 10.0161 20.8635 11.0453L21.2776 9.49984C16.5831 8.24195 11.7578 11.0279 10.4999 15.7224L12.0454 16.1365Z" fill="white"/>' +
      '<path d="M10 27.5C17.5 24 21 31 27 27.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '</svg>',
    busStation_i: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M12 3C16.5714 3 20 4 20 6C20 7.3475 20 13.0453 20 17.0003C20 18.1049 19.1046 19 18 19H12" stroke="white" stroke-width="1.6"/>' +
      '<path d="M12 3C7.42857 3 4 4 4 6C4 7.3475 4 13.0453 4 17.0003C4 18.1049 4.89543 19 6 19H12" stroke="white" stroke-width="1.6"/>' +
      '<path d="M20 12H4" stroke="white" stroke-width="1.6"/>' +
      '<path d="M20 7C20 7 17.5 6 12 6C6.5 6 4 7 4 7" stroke="white" stroke-width="1.6"/>' +
      '<path d="M18 19V21H16.5V19" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M7.5 19V21H6V19" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<circle cx="8" cy="16" r="1" stroke="white" stroke-width="1.4"/>' +
      '<circle cx="16" cy="16" r="1" stroke="white" stroke-width="1.4"/>' +
      '</svg>',
    busStation_f: '<svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3094 26.3754C35.394 23.9921 36 21.332 36 18.5263C36 8.29451 27.9411 0 18 0C8.05887 0 0 8.29451 0 18.5263C0 21.332 0.605981 23.9921 1.69059 26.3754C5.08668 34.3491 12.852 40.762 18 44C23.148 40.762 30.9133 34.3491 34.3094 26.3754Z" fill="#C0C0C0"/>' +
      '<path d="M18 10C22.5714 10 26 11 26 13C26 14.3475 26 20.0453 26 24.0003C26 25.1049 25.1046 26 24 26H18" stroke="white" stroke-width="1.6"/>' +
      '<path d="M18 10C13.4286 10 10 11 10 13C10 14.3475 10 20.0453 10 24.0003C10 25.1049 10.8954 26 12 26H18" stroke="white" stroke-width="1.6"/>' +
      '<path d="M26 19H10" stroke="white" stroke-width="1.6"/>' +
      '<path d="M26 14C26 14 23.5 13 18 13C12.5 13 10 14 10 14" stroke="white" stroke-width="1.6"/>' +
      '<path d="M24 26V28H22.5V26" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M13.5 26V28H12V26" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<circle cx="14" cy="23" r="1" stroke="white" stroke-width="1.4"/>' +
      '<circle cx="22" cy="23" r="1" stroke="white" stroke-width="1.4"/>' +
      '</svg>',
    business_i: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<rect x="3" y="7" width="18" height="12" rx="1" stroke="white" stroke-width="1.6"/>' +
      '<path d="M9 7V5C9 4.44772 9.44772 4 10 4H14C14.5523 4 15 4.44772 15 5V7" stroke="white" stroke-width="1.6"/>' +
      '<rect x="10" y="11" width="4" height="2" rx="1" stroke="white" stroke-width="1.6"/>' +
      '<path d="M3 12H10" stroke="white" stroke-width="1.6"/>' +
      '<path d="M14 12H21" stroke="white" stroke-width="1.6"/>' +
      '</svg>',
    business_f: '<svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3094 26.3754C35.394 23.9921 36 21.332 36 18.5263C36 8.29451 27.9411 0 18 0C8.05887 0 0 8.29451 0 18.5263C0 21.332 0.605981 23.9921 1.69059 26.3754C5.08668 34.3491 12.852 40.762 18 44C23.148 40.762 30.9133 34.3491 34.3094 26.3754Z" fill="#C0C0C0"/>' +
      '<rect x="9" y="14" width="18" height="12" rx="1" stroke="white" stroke-width="1.6"/>' +
      '<path d="M15 14V12C15 11.4477 15.4477 11 16 11H20C20.5523 11 21 11.4477 21 12V14" stroke="white" stroke-width="1.6"/>' +
      '<rect x="16" y="18" width="4" height="2" rx="1" stroke="white" stroke-width="1.6"/>' +
      '<path d="M9 19H16" stroke="white" stroke-width="1.6"/>' +
      '<path d="M20 19H27" stroke="white" stroke-width="1.6"/>' +
      '</svg>',
    cafes_i: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<g clip-path="url(#clip0)">' +
      '<path d="M4 21H18" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M11 21C5.4 21 5.00001 17 5 12H11H17C17 17 16.6 21 11 21Z" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M17 13.5C22.5 11 22 17.5 16 19" stroke="white" stroke-width="1.6"/>' +
      '<path d="M8.05622 9.66564C8.42384 9.91072 8.92053 9.81138 9.16562 9.44376C9.4107 9.07614 9.31136 8.57944 8.94374 8.33436L8.05622 9.66564ZM8.56566 2.43431C8.25324 2.12189 7.74671 2.1219 7.43429 2.43431C7.12187 2.74673 7.12187 3.25327 7.43429 3.56569L8.56566 2.43431ZM8.94374 8.33436C8.26759 7.8836 8.12595 7.55798 8.1063 7.40077C8.08852 7.25854 8.13991 6.99144 8.56566 6.56569L7.43429 5.43431C6.86005 6.00856 6.41144 6.74146 6.51866 7.59923C6.624 8.44202 7.23236 9.1164 8.05622 9.66564L8.94374 8.33436ZM8.56566 6.56569C9.15286 5.97849 9.54998 5.28701 9.54998 4.5C9.54998 3.71299 9.15286 3.02151 8.56566 2.43431L7.43429 3.56569C7.8471 3.97849 7.94998 4.28701 7.94998 4.5C7.94998 4.71299 7.8471 5.02151 7.43429 5.43431L8.56566 6.56569Z" fill="white"/>' +
      '<path d="M11.7532 10.6656C12.1208 10.9107 12.6175 10.8114 12.8626 10.4438C13.1077 10.0761 13.0083 9.57944 12.6407 9.33436L11.7532 10.6656ZM12.2626 3.43431C11.9502 3.12189 11.4437 3.1219 11.1313 3.43431C10.8188 3.74673 10.8188 4.25327 11.1313 4.56569L12.2626 3.43431ZM12.6407 9.33436C11.9646 8.8836 11.8229 8.55798 11.8033 8.40077C11.7855 8.25854 11.8369 7.99144 12.2626 7.56569L11.1313 6.43431C10.557 7.00856 10.1084 7.74146 10.2156 8.59923C10.321 9.44202 10.9293 10.1164 11.7532 10.6656L12.6407 9.33436ZM12.2626 7.56569C12.8498 6.97849 13.2469 6.28701 13.2469 5.5C13.2469 4.71299 12.8498 4.02151 12.2626 3.43431L11.1313 4.56569C11.5441 4.97849 11.6469 5.28701 11.6469 5.5C11.6469 5.71299 11.5441 6.02151 11.1313 6.43431L12.2626 7.56569Z" fill="white"/>' +
      '</g>' +
      '<defs>' +
      '<clipPath id="clip0">' +
      '<rect width="24" height="24" fill="white"/>' +
      '</clipPath>' +
      '</defs>' +
      '</svg>',
    cafes_f: '<svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3094 26.3754C35.394 23.9921 36 21.332 36 18.5263C36 8.29451 27.9411 0 18 0C8.05887 0 0 8.29451 0 18.5263C0 21.332 0.605981 23.9921 1.69059 26.3754C5.08668 34.3491 12.852 40.762 18 44C23.148 40.762 30.9133 34.3491 34.3094 26.3754Z" fill="#C0C0C0"/>' +
      '<g clip-path="url(#clip0)">' +
      '<path d="M10 28H24" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M17 28C11.4 28 11 24 11 19H17H23C23 24 22.6 28 17 28Z" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M23 20.5C28.5 18 28 24.5 22 26" stroke="white" stroke-width="1.6"/>' +
      '<path d="M14.0562 16.6656C14.4238 16.9107 14.9205 16.8114 15.1656 16.4438C15.4107 16.0761 15.3114 15.5794 14.9437 15.3344L14.0562 16.6656ZM14.5657 9.43431C14.2532 9.12189 13.7467 9.1219 13.4343 9.43431C13.1219 9.74673 13.1219 10.2533 13.4343 10.5657L14.5657 9.43431ZM14.9437 15.3344C14.2676 14.8836 14.126 14.558 14.1063 14.4008C14.0885 14.2585 14.1399 13.9914 14.5657 13.5657L13.4343 12.4343C12.86 13.0086 12.4114 13.7415 12.5187 14.5992C12.624 15.442 13.2324 16.1164 14.0562 16.6656L14.9437 15.3344ZM14.5657 13.5657C15.1529 12.9785 15.55 12.287 15.55 11.5C15.55 10.713 15.1529 10.0215 14.5657 9.43431L13.4343 10.5657C13.8471 10.9785 13.95 11.287 13.95 11.5C13.95 11.713 13.8471 12.0215 13.4343 12.4343L14.5657 13.5657Z" fill="white"/>' +
      '<path d="M17.7532 17.6656C18.1208 17.9107 18.6175 17.8114 18.8626 17.4438C19.1077 17.0761 19.0083 16.5794 18.6407 16.3344L17.7532 17.6656ZM18.2626 10.4343C17.9502 10.1219 17.4437 10.1219 17.1313 10.4343C16.8188 10.7467 16.8188 11.2533 17.1313 11.5657L18.2626 10.4343ZM18.6407 16.3344C17.9646 15.8836 17.8229 15.558 17.8033 15.4008C17.7855 15.2585 17.8369 14.9914 18.2626 14.5657L17.1313 13.4343C16.557 14.0086 16.1084 14.7415 16.2156 15.5992C16.321 16.442 16.9293 17.1164 17.7532 17.6656L18.6407 16.3344ZM18.2626 14.5657C18.8498 13.9785 19.2469 13.287 19.2469 12.5C19.2469 11.713 18.8498 11.0215 18.2626 10.4343L17.1313 11.5657C17.5441 11.9785 17.6469 12.287 17.6469 12.5C17.6469 12.713 17.5441 13.0215 17.1313 13.4343L18.2626 14.5657Z" fill="white"/>' +
      '</g>' +
      '<defs>' +
      '<clipPath id="clip0">' +
      '<rect width="24" height="24" fill="white" transform="translate(6 7)"/>' +
      '</clipPath>' +
      '</defs>' +
      '</svg>',
    construction_i: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"' +
      ' xmlns="http://www.w3.org/2000/svg">' +
      '<rect x="4" y="3.5" width="9" height="17" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<rect x="13" y="6.5" width="6" height="14" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M7 6.5V7.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M10 6.5V7.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M7 10.5V11.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M10 10.5V11.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M7 14.5V15.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M10 14.5V15.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '</svg>',
    construction_f: '<svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3094 26.3754C35.394 23.9921 36 21.332 36 18.5263C36 8.29451 27.9411 0 18 0C8.05887 0 0 8.29451 0 18.5263C0 21.332 0.605981 23.9921 1.69059 26.3754C5.08668 34.3491 12.852 40.762 18 44C23.148 40.762 30.9133 34.3491 34.3094 26.3754Z" fill="#C0C0C0"/>' +
      '<rect x="10" y="10.5" width="9" height="17" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<rect x="19" y="13.5" width="6" height="14" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M13 13.5V14.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M16 13.5V14.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M13 17.5V18.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M16 17.5V18.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M13 21.5V22.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M16 21.5V22.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '</svg>',
    culture_i: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M3 9L12 3L21 9H3Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M10 11V16" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M14 11V16" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M18 11V16" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M6 11V16" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<rect x="4" y="18" width="16" height="3" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '</svg>',
    culture_f: '<svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3094 26.3754C35.394 23.9921 36 21.332 36 18.5263C36 8.29451 27.9411 0 18 0C8.05887 0 0 8.29451 0 18.5263C0 21.332 0.605981 23.9921 1.69059 26.3754C5.08668 34.3491 12.852 40.762 18 44C23.148 40.762 30.9133 34.3491 34.3094 26.3754Z" fill="#C0C0C0"/>' +
      '<path d="M9 16L18 10L27 16H9Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M16 18V23" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M20 18V23" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M24 18V23" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M12 18V23" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<rect x="10" y="25" width="16" height="3" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '</svg>',
    education_i: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M2 9L12 4L22 9L12 14L2 9Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M6 11C6 11.8333 6 13.9 6 15.5C6 17.5 8.5 19 12 19" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M18 11C18 11.8333 18 13.9 18 15.5C18 17.5 15.5 19 12 19" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M20.5 10V14" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg>',
    education_f: '<svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3094 26.3754C35.394 23.9921 36 21.332 36 18.5263C36 8.29451 27.9411 0 18 0C8.05887 0 0 8.29451 0 18.5263C0 21.332 0.605981 23.9921 1.69059 26.3754C5.08668 34.3491 12.852 40.762 18 44C23.148 40.762 30.9133 34.3491 34.3094 26.3754Z" fill="#C0C0C0"/>' +
      '<path d="M8 16L18 11L28 16L18 21L8 16Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M12 18C12 18.8333 12 20.9 12 22.5C12 24.5 14.5 26 18 26" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M24 18C24 18.8333 24 20.9 24 22.5C24 24.5 21.5 26 18 26" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M26.5 17V21" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg>',
    kids_i: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M16.7973 1.95727L16.7973 1.95727L13.0482 3.16535C12.4025 2.81879 11.6147 2.80942 10.9518 3.16535L7.20271 1.95727L7.2027 1.95727C6.775 1.8195 6.33905 2.13949 6.33905 2.58635V7.02695C5.78198 7.66134 5.33023 8.39259 5.01332 9.17275C3.2892 9.34176 1.92499 10.5337 1.92499 12.0004C1.92499 13.467 3.28903 14.6589 5.01299 14.828C5.57466 16.2187 6.52334 17.3781 7.70908 18.1984C6.73233 18.9914 6.00448 20.0317 5.61879 21.2086L5.69006 21.232L5.61879 21.2086C5.47832 21.6373 5.79939 22.0755 6.24698 22.0755C6.52484 22.0755 6.78364 21.8989 6.87493 21.6203C7.23495 20.5215 7.97522 19.5683 8.97702 18.9056C10.9255 19.7574 13.1705 19.7527 15.1293 18.8549C16.1711 19.5186 16.939 20.49 17.3094 21.6203C17.4006 21.8989 17.6594 22.0756 17.9373 22.0756C18.3855 22.0756 18.7058 21.6367 18.5655 21.2087C18.1669 19.9923 17.4072 18.9261 16.3847 18.1256C17.5353 17.2996 18.4448 16.158 18.9851 14.8282C20.7099 14.6597 22.075 13.4675 22.075 12.0004C22.075 10.5341 20.7113 9.3423 18.9878 9.17289C18.6728 8.39457 18.2263 7.66942 17.6609 7.02687V2.58635C17.6609 2.138 17.2235 1.81997 16.7973 1.95727ZM14.1405 5.72683C14.2757 5.2464 14.2487 4.71737 14.0374 4.2354L16.3391 3.49373V6.4139L14.1405 5.72683ZM12.6939 5.70031L12.6937 5.70056C12.332 6.13579 11.6679 6.13565 11.3064 5.70064L11.3062 5.70034C11.1786 5.54831 11.0985 5.3453 11.0985 5.12541C11.0985 4.62835 11.503 4.22385 12 4.22385C12.4971 4.22385 12.9016 4.62835 12.9016 5.12541C12.9016 5.34116 12.8244 5.54466 12.6939 5.70031ZM20.7531 12.0004C20.7531 12.606 20.203 13.1636 19.4048 13.4041C19.574 12.5093 19.5853 11.5541 19.4048 10.5967C20.203 10.8372 20.7531 11.3948 20.7531 12.0004ZM7.66096 6.41394V3.49373L9.96266 4.23541C9.75864 4.70103 9.71936 5.22913 9.8595 5.72687L7.66096 6.41394ZM3.2469 12.0004C3.2469 11.3949 3.79683 10.8374 4.59488 10.5968C4.42063 11.5207 4.42029 12.4783 4.59488 13.404C3.79683 13.1634 3.2469 12.6059 3.2469 12.0004ZM12 18.2144C11.0176 18.2144 10.0767 17.9846 9.2372 17.5685C9.22969 17.5646 9.22148 17.5604 9.21285 17.5564C5.5874 15.7399 4.64302 10.9642 7.32947 7.9024L10.6261 6.8722C11.4326 7.508 12.5675 7.508 13.3739 6.8722L16.6707 7.90245C17.6674 9.03676 18.2141 10.4829 18.2141 12.0004C18.2141 15.4268 15.4264 18.2144 12 18.2144Z" fill="white" stroke="white" stroke-width="0.15"/>' +
      '<path d="M10.6146 11.3629L10.5616 11.3099H8.35182L8.40485 11.3629C8.40486 11.3629 8.40486 11.3629 8.40486 11.3629C8.75725 11.0106 9.32746 11.0105 9.67985 11.3629L9.67986 11.3629C9.93796 11.6209 10.3564 11.621 10.6146 11.3629Z" fill="white" stroke="white" stroke-width="0.15"/>' +
      '<path d="M16.4991 10.4812L16.5521 10.4282C15.6832 9.55929 14.2767 9.55916 13.4077 10.4282C13.1496 10.6863 13.1496 11.1048 13.4077 11.3629M16.4991 10.4812L14.3424 11.3629M16.4991 10.4812C16.7279 10.71 16.7279 11.0811 16.499 11.3098M16.4991 10.4812C15.6595 9.64161 14.3004 9.64149 13.4607 10.4812C13.2319 10.71 13.2319 11.081 13.4607 11.3098C13.6895 11.5387 14.0605 11.5387 14.2893 11.3098C14.671 10.9282 15.2887 10.9282 15.6704 11.3098C15.8992 11.5386 16.2702 11.5387 16.499 11.3098M16.4991 10.4812L16.5521 10.4282C16.8102 10.6863 16.8102 11.1048 16.5521 11.3629M16.4991 10.4812L16.5521 11.3629M13.4077 11.3629C13.6658 11.621 14.0843 11.621 14.3424 11.3629M13.4077 11.3629L13.4607 11.3099L13.4077 11.3629ZM14.3424 11.3629C14.3424 11.3629 14.3424 11.3629 14.3424 11.3629L14.2899 11.3104L14.3424 11.3629ZM16.499 11.3098L16.5521 11.3629L16.5521 11.3629M16.499 11.3098L16.5521 11.3629" fill="white" stroke="white" stroke-width="0.15"/>' +
      '<path d="M9.9859 14.3455L9.98589 14.3455C9.72782 14.6036 9.72782 15.0221 9.98589 15.2802L9.9859 15.2802C11.0966 16.3908 12.9035 16.3908 14.0142 15.2802C14.2723 15.0221 14.2723 14.6036 14.0142 14.3455L14.0142 14.3455C13.7561 14.0874 13.3376 14.0874 13.0795 14.3455C12.4843 14.9407 11.5158 14.9407 10.9206 14.3455C10.6625 14.0874 10.244 14.0874 9.9859 14.3455Z" fill="white" stroke="white" stroke-width="0.15"/>' +
      '</svg>',
    kids_f: '<svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3094 26.3754C35.394 23.9921 36 21.332 36 18.5263C36 8.29451 27.9411 0 18 0C8.05887 0 0 8.29451 0 18.5263C0 21.332 0.605981 23.9921 1.69059 26.3754C5.08668 34.3491 12.852 40.762 18 44C23.148 40.762 30.9133 34.3491 34.3094 26.3754Z" fill="#C0C0C0"/>' +
      '<path d="M22.7973 8.95727L22.7973 8.95727L19.0482 10.1654C18.4025 9.81879 17.6147 9.80942 16.9518 10.1654L13.2027 8.95727L13.2027 8.95727C12.775 8.8195 12.339 9.13949 12.339 9.58635V14.0269C11.782 14.6613 11.3302 15.3926 11.0133 16.1728C9.2892 16.3418 7.92499 17.5337 7.92499 19.0004C7.92499 20.467 9.28903 21.6589 11.013 21.828C11.5747 23.2187 12.5233 24.3781 13.7091 25.1984C12.7323 25.9914 12.0045 27.0317 11.6188 28.2086L11.6901 28.232L11.6188 28.2086C11.4783 28.6373 11.7994 29.0755 12.247 29.0755C12.5248 29.0755 12.7836 28.8989 12.8749 28.6203C13.235 27.5215 13.9752 26.5683 14.977 25.9056C16.9255 26.7574 19.1705 26.7527 21.1293 25.8549C22.1711 26.5186 22.939 27.49 23.3094 28.6203C23.4006 28.8989 23.6594 29.0756 23.9373 29.0756C24.3855 29.0756 24.7058 28.6367 24.5655 28.2087C24.1669 26.9923 23.4072 25.9261 22.3847 25.1256C23.5353 24.2996 24.4448 23.158 24.9851 21.8282C26.7099 21.6597 28.075 20.4675 28.075 19.0004C28.075 17.5341 26.7113 16.3423 24.9878 16.1729C24.6728 15.3946 24.2263 14.6694 23.6609 14.0269V9.58635C23.6609 9.138 23.2235 8.81997 22.7973 8.95727ZM20.1405 12.7268C20.2757 12.2464 20.2487 11.7174 20.0374 11.2354L22.3391 10.4937V13.4139L20.1405 12.7268ZM18.6939 12.7003L18.6937 12.7006C18.332 13.1358 17.6679 13.1356 17.3064 12.7006L17.3062 12.7003C17.1786 12.5483 17.0985 12.3453 17.0985 12.1254C17.0985 11.6284 17.503 11.2238 18 11.2238C18.4971 11.2238 18.9016 11.6284 18.9016 12.1254C18.9016 12.3412 18.8244 12.5447 18.6939 12.7003ZM26.7531 19.0004C26.7531 19.606 26.203 20.1636 25.4048 20.4041C25.574 19.5093 25.5853 18.5541 25.4048 17.5967C26.203 17.8372 26.7531 18.3948 26.7531 19.0004ZM13.661 13.4139V10.4937L15.9627 11.2354C15.7586 11.701 15.7194 12.2291 15.8595 12.7269L13.661 13.4139ZM9.2469 19.0004C9.2469 18.3949 9.79683 17.8374 10.5949 17.5968C10.4206 18.5207 10.4203 19.4783 10.5949 20.404C9.79683 20.1634 9.2469 19.6059 9.2469 19.0004ZM18 25.2144C17.0176 25.2144 16.0767 24.9846 15.2372 24.5685C15.2297 24.5646 15.2215 24.5604 15.2129 24.5564C11.5874 22.7399 10.643 17.9642 13.3295 14.9024L16.6261 13.8722C17.4326 14.508 18.5675 14.508 19.3739 13.8722L22.6707 14.9025C23.6674 16.0368 24.2141 17.4829 24.2141 19.0004C24.2141 22.4268 21.4264 25.2144 18 25.2144Z" fill="white" stroke="white" stroke-width="0.15"/>' +
      '<path d="M16.6146 18.3629L16.5616 18.3099H14.3518L14.4049 18.3629C14.4049 18.3629 14.4049 18.3629 14.4049 18.3629C14.7573 18.0106 15.3275 18.0105 15.6798 18.3629L15.6799 18.3629C15.938 18.6209 16.3564 18.621 16.6146 18.3629Z" fill="white" stroke="white" stroke-width="0.15"/>' +
      '<path d="M22.4991 17.4812L22.5521 17.4282C21.6832 16.5593 20.2767 16.5592 19.4077 17.4282C19.1496 17.6863 19.1496 18.1048 19.4077 18.3629M22.4991 17.4812L20.3424 18.3629M22.4991 17.4812C22.7279 17.71 22.7279 18.0811 22.499 18.3098M22.4991 17.4812C21.6595 16.6416 20.3004 16.6415 19.4607 17.4812C19.2319 17.71 19.2319 18.081 19.4607 18.3098C19.6895 18.5387 20.0605 18.5387 20.2893 18.3098C20.671 17.9282 21.2887 17.9282 21.6704 18.3098C21.8992 18.5386 22.2702 18.5387 22.499 18.3098M22.4991 17.4812L22.5521 17.4282C22.8102 17.6863 22.8102 18.1048 22.5521 18.3629M22.4991 17.4812L22.5521 18.3629M19.4077 18.3629C19.6658 18.621 20.0843 18.621 20.3424 18.3629M19.4077 18.3629L19.4607 18.3099L19.4077 18.3629ZM20.3424 18.3629C20.3424 18.3629 20.3424 18.3629 20.3424 18.3629L20.2899 18.3104L20.3424 18.3629ZM22.499 18.3098L22.5521 18.3629L22.5521 18.3629M22.499 18.3098L22.5521 18.3629" fill="white" stroke="white" stroke-width="0.15"/>' +
      '<path d="M15.9859 21.3455L15.9859 21.3455C15.7278 21.6036 15.7278 22.0221 15.9859 22.2802L15.9859 22.2802C17.0966 23.3908 18.9035 23.3908 20.0142 22.2802C20.2723 22.0221 20.2723 21.6036 20.0142 21.3455L20.0142 21.3455C19.7561 21.0874 19.3376 21.0874 19.0795 21.3455C18.4843 21.9407 17.5158 21.9407 16.9206 21.3455C16.6625 21.0874 16.244 21.0874 15.9859 21.3455Z" fill="white" stroke="white" stroke-width="0.15"/>' +
      '</svg>',
    kosher_i: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M12 2L20.6603 17H3.33975L12 2Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M12 22L20.6603 7H3.33975L12 22Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '</svg>',
    kosher_f: '<svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3094 26.3754C35.394 23.9921 36 21.332 36 18.5263C36 8.29451 27.9411 0 18 0C8.05887 0 0 8.29451 0 18.5263C0 21.332 0.605981 23.9921 1.69059 26.3754C5.08668 34.3491 12.852 40.762 18 44C23.148 40.762 30.9133 34.3491 34.3094 26.3754Z" fill="#C0C0C0"/>' +
      '<path d="M18 9L26.6603 24H9.33975L18 9Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M18 29L26.6603 14H9.33975L18 29Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '</svg>',
    office_i: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<rect x="4" y="3.5" width="9" height="17" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<rect x="13" y="6.5" width="6" height="14" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M7 6.5V7.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M10 6.5V7.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M7 10.5V11.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M10 10.5V11.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M7 14.5V15.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M10 14.5V15.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '</svg>',
    office_f: '<svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3094 26.3754C35.394 23.9921 36 21.332 36 18.5263C36 8.29451 27.9411 0 18 0C8.05887 0 0 8.29451 0 18.5263C0 21.332 0.605981 23.9921 1.69059 26.3754C5.08668 34.3491 12.852 40.762 18 44C23.148 40.762 30.9133 34.3491 34.3094 26.3754Z" fill="#C0C0C0"/>' +
      '<rect x="10" y="10.5" width="9" height="17" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<rect x="19" y="13.5" width="6" height="14" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M13 13.5V14.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M16 13.5V14.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M13 17.5V18.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M16 17.5V18.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M13 21.5V22.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M16 21.5V22.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '</svg>',
    park_i: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M9 21L9 8" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M17 21L17 12" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<ellipse cx="9" cy="9.5" rx="6" ry="7.5" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M6.5 11.5L9 14" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M11.5 9L9 11.5" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M13.5105 14.446L12.8558 13.9862C12.6936 14.2172 12.6651 14.5166 12.7809 14.774L13.5105 14.446ZM14.8431 7.78849L14.3426 7.16438C14.1124 7.34897 14.0025 7.64529 14.0567 7.93534L14.8431 7.78849ZM14.2 9.5C14.2 11.2395 13.6835 12.8079 12.8558 13.9862L14.1652 14.9058C15.1921 13.4436 15.8 11.5504 15.8 9.5H14.2ZM14.0567 7.93534C14.1502 8.43653 14.2 8.96033 14.2 9.5H15.8C15.8 8.86204 15.7412 8.23991 15.6295 7.64164L14.0567 7.93534ZM15.3435 8.41261C15.8404 8.01414 16.4077 7.8 17 7.8V6.2C16.0036 6.2 15.0904 6.56469 14.3426 7.16438L15.3435 8.41261ZM17 7.8C18.61 7.8 20.2 9.50459 20.2 12H21.8C21.8 8.97256 19.8083 6.2 17 6.2V7.8ZM20.2 12C20.2 14.4954 18.61 16.2 17 16.2V17.8C19.8083 17.8 21.8 15.0274 21.8 12H20.2ZM17 16.2C15.898 16.2 14.8333 15.4374 14.2402 14.118L12.7809 14.774C13.5582 16.5031 15.1054 17.8 17 17.8V16.2Z" fill="white"/>' +
      '</svg>',
    park_f: '<svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3094 26.3754C35.394 23.9921 36 21.332 36 18.5263C36 8.29451 27.9411 0 18 0C8.05887 0 0 8.29451 0 18.5263C0 21.332 0.605981 23.9921 1.69059 26.3754C5.08668 34.3491 12.852 40.762 18 44C23.148 40.762 30.9133 34.3491 34.3094 26.3754Z" fill="#C0C0C0"/>' +
      '<path d="M15 28L15 15" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M23 28L23 19" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<ellipse cx="15" cy="16.5" rx="6" ry="7.5" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M12.5 18.5L15 21" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M17.5 16L15 18.5" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M19.5105 21.446L18.8558 20.9862C18.6936 21.2172 18.6651 21.5166 18.7809 21.774L19.5105 21.446ZM20.8431 14.7885L20.3426 14.1644C20.1124 14.349 20.0025 14.6453 20.0567 14.9353L20.8431 14.7885ZM20.2 16.5C20.2 18.2395 19.6835 19.8079 18.8558 20.9862L20.1652 21.9058C21.1921 20.4436 21.8 18.5504 21.8 16.5H20.2ZM20.0567 14.9353C20.1502 15.4365 20.2 15.9603 20.2 16.5H21.8C21.8 15.862 21.7412 15.2399 21.6295 14.6416L20.0567 14.9353ZM21.3435 15.4126C21.8404 15.0141 22.4077 14.8 23 14.8V13.2C22.0036 13.2 21.0904 13.5647 20.3426 14.1644L21.3435 15.4126ZM23 14.8C24.61 14.8 26.2 16.5046 26.2 19H27.8C27.8 15.9726 25.8083 13.2 23 13.2V14.8ZM26.2 19C26.2 21.4954 24.61 23.2 23 23.2V24.8C25.8083 24.8 27.8 22.0274 27.8 19H26.2ZM23 23.2C21.898 23.2 20.8333 22.4374 20.2402 21.118L18.7809 21.774C19.5582 23.5031 21.1054 24.8 23 24.8V23.2Z" fill="white"/>' +
      '</svg>',
    healthcare_i: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M5 3.5C5 5.16667 5 8.4 5 10C5 12.5 7.5 13.5 9 14" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M13 3.5C13 5.16667 13 8.4 13 10C13 12.5 10.5 13.5 9 14" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M9 14V16.5C9 18.9853 11.0147 21 13.5 21V21C15.9853 21 18 18.9853 18 16.5V14" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<circle cx="18" cy="12" r="2" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M5 3.5C7 3.5 7 5.5 5 5.5" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M13 3.5C11 3.5 11 5.5 13 5.5" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg>',
    healthcare_f: '<svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3094 26.3754C35.394 23.9921 36 21.332 36 18.5263C36 8.29451 27.9411 0 18 0C8.05887 0 0 8.29451 0 18.5263C0 21.332 0.605981 23.9921 1.69059 26.3754C5.08668 34.3491 12.852 40.762 18 44C23.148 40.762 30.9133 34.3491 34.3094 26.3754Z" fill="#C0C0C0"/>' +
      '<path d="M11 10.5C11 12.1667 11 15.4 11 17C11 19.5 13.5 20.5 15 21" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M19 10.5C19 12.1667 19 15.4 19 17C19 19.5 16.5 20.5 15 21" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M15 21V23.5C15 25.9853 17.0147 28 19.5 28V28C21.9853 28 24 25.9853 24 23.5V21" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<circle cx="24" cy="19" r="2" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M11 10.5C13 10.5 13 12.5 11 12.5" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M19 10.5C17 10.5 17 12.5 19 12.5" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg>',
    mainBuilding: '<svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3094 26.3754C35.394 23.9921 36 21.332 36 18.5263C36 8.29451 27.9411 0 18 0C8.05887 0 0 8.29451 0 18.5263C0 21.332 0.605981 23.9921 1.69059 26.3754C5.08668 34.3491 12.852 40.762 18 44C23.148 40.762 30.9133 34.3491 34.3094 26.3754Z" fill="#C0C0C0"/>' +
      '<path d="M16 21.4C15.9448 21.4 15.9 21.4448 15.9 21.5V25.9H11.1V16.046L18 10.1317L24.9 16.046V25.9H20.1V21.5C20.1 21.4448 20.0552 21.4 20 21.4H16Z" fill="white" stroke="white" stroke-width="0.2" stroke-linejoin="round"/>' +
      '</svg>'
};

const projectIcons = {
    'FILTER__ICON': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M20 4H4V7L10 14V20H14V14L20 6V4Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '</svg>',
    'CONTROLS__PLUS': '<svg width="39px" height="39px" viewBox="0 0 39 39" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
      '    <!-- Generator: sketchtool 53.2 (72643) - https://sketchapp.com -->' +
      '    <title>7433DEED-1601-4CF9-B68C-471F725EEB04</title>' +
      '    <desc>Created with sketchtool.</desc>' +
      '    <g id="Asset-Artboard-Page" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">' +
      '        <g id="Atoms-/-Icons-/-View-Mode-/-Controls-/--ic_plus">' +
      '            <rect id="body" fill="#FFFFFF" opacity="0" x="0" y="0" width="39" height="39"></rect>' +
      '            <g id="ic_plus" transform="translate(14.733333, 14.733333)" stroke="#ffffff" stroke-linecap="round" stroke-width="1.8">' +
      '                <path d="M10.4,5.2 L-1.84741111e-15,5.2" id="Line-Copy" transform="translate(5.200000, 5.200000) rotate(90.000000) translate(-5.200000, -5.200000) "></path>' +
      '                <path d="M10.4,5.2 L-2.89064168e-14,5.2" id="Line-Copy-2" transform="translate(5.200000, 5.200000) rotate(0.000000) translate(-5.200000, -5.200000) "></path>' +
      '            </g>' +
      '        </g>' +
      '    </g>' +
      '</svg>',
    'CONTROLS__MINUS': '<svg width="39px" height="39px" viewBox="0 0 39 39" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
      '    <!-- Generator: sketchtool 53.2 (72643) - https://sketchapp.com -->' +
      '    <title>53237C0B-0DD6-41A2-81E7-16DF6DDEF453</title>' +
      '    <desc>Created with sketchtool.</desc>' +
      '    <g id="Asset-Artboard-Page" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">' +
      '        <g id="Atoms-/-Icons-/-View-Mode-/-Controls-/--ic_minus">' +
      '            <rect id="body" fill="#FFFFFF" opacity="0" x="0" y="0" width="39" height="39"></rect>' +
      '            <path d="M25.1333333,19.5 L14.7333333,19.5" id="ic_minus" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" transform="translate(19.933333, 19.500000) rotate(0.000000) translate(-19.933333, -19.500000) "></path>' +
      '        </g>' +
      '    </g>' +
      '</svg>',
    'CLOSE__BTN': '<svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: white;overflow:' +
      ' hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M584.319739 510.60714l424.530581-422.236674c20.063427-20.013878 20.149677-52.409348 0.178007-72.423226-20.021219-20.201061-52.321262-20.201061-72.386523-0.266093L512.069015 438.090323 91.115094 15.897692C71.229858-4.031771 38.749423-4.202437 18.735911 15.811441-1.287056 35.739068-1.32935 68.176746 18.649844 88.190624L439.423739 510.341047 15.15738 932.392189C-4.905698 952.327524-4.992426 984.714001 14.935165 1004.820737 24.964511 1014.943362 38.046937 1019.933325 51.21543 1019.933325c13.075269 0 26.158429-4.989963 36.143346-14.932563L511.760714 582.850523 936.469302 1008.886017c10.028961 10.122589 23.11157 15.111833 36.28043 15.111833 13.075269 0 26.157878-4.989244 36.100588-14.931898 20.013878-20.021421 20.063427-52.409366 0.086251-72.430768l-424.616832-426.028043 0 0z" /></svg>',
    'WALKING__ICON': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"' +
      ' xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M9.79688 8.90625L6.98438 23.0156H9.09375L10.9219 15L12.9844 17.0156V23.0156H15V15.5156L12.8906 13.5L13.5 10.5C14.9375 12.1562 16.7656 12.9844 18.9844 12.9844V11.0156C17.0469 11.0156 15.625 10.2031 14.7188 8.57812L13.6875 6.98438C13.2188 6.32812 12.6562 6 12 6C11.9062 6 11.7656 6.01562 11.5781 6.04688C11.4219 6.07812 11.2969 6.09375 11.2031 6.09375L6 8.29688V12.9844H8.01562V9.60938L9.79688 8.90625ZM14.9062 4.92188C14.5 5.29688 14.0312 5.48438 13.5 5.48438C12.9688 5.48438 12.5 5.29688 12.0938 4.92188C11.6875 4.51562 11.4844 4.04688 11.4844 3.51562C11.4844 2.98438 11.6875 2.51562 12.0938 2.10938C12.5 1.70312 12.9688 1.5 13.5 1.5C14.0312 1.5 14.5 1.70312 14.9062 2.10938C15.3125 2.51562 15.5156 2.98438 15.5156 3.51562C15.5156 4.04688 15.3125 4.51562 14.9062 4.92188Z" fill="#1A2F43"/>' +
      '</svg>',
    'BICYCLE__ICON': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M16.5 19.5C17.1875 20.1562 18.0156 20.4844 18.9844 20.4844C19.9531 20.4844 20.7812 20.1562 21.4688 19.5C22.1562 18.8125 22.5 17.9844 22.5 17.0156C22.5 16.0469 22.1562 15.2188 21.4688 14.5312C20.7812 13.8438 19.9531 13.5 18.9844 13.5C18.0156 13.5 17.1875 13.8438 16.5 14.5312C15.8438 15.2188 15.5156 16.0469 15.5156 17.0156C15.5156 17.9844 15.8438 18.8125 16.5 19.5ZM15.4219 13.4531C16.3906 12.4844 17.5781 12 18.9844 12C20.3906 12 21.5781 12.4844 22.5469 13.4531C23.5156 14.4219 24 15.6094 24 17.0156C24 18.4219 23.5156 19.6094 22.5469 20.5781C21.5781 21.5156 20.3906 21.9844 18.9844 21.9844C17.5781 21.9844 16.3906 21.5156 15.4219 20.5781C14.4844 19.6094 14.0156 18.4219 14.0156 17.0156C14.0156 15.6094 14.4844 14.4219 15.4219 13.4531ZM10.7812 10.5L12.9844 12.7969V18.9844H11.0156V14.0156L7.78125 11.2031C7.40625 10.9531 7.21875 10.4844 7.21875 9.79688C7.21875 9.23438 7.40625 8.76562 7.78125 8.39062L10.5938 5.57812C10.8438 5.20312 11.3125 5.01562 12 5.01562C12.5938 5.01562 13.125 5.20312 13.5938 5.57812L15.5156 7.5C16.5156 8.5 17.7031 9 19.0781 9V11.0156C17.1094 11.0156 15.4219 10.3125 14.0156 8.90625L13.2188 8.10938L10.7812 10.5ZM2.53125 19.5C3.21875 20.1562 4.04688 20.4844 5.01562 20.4844C5.98438 20.4844 6.79688 20.1562 7.45312 19.5C8.14062 18.8125 8.48438 17.9844 8.48438 17.0156C8.48438 16.0469 8.14062 15.2188 7.45312 14.5312C6.79688 13.8438 5.98438 13.5 5.01562 13.5C4.04688 13.5 3.21875 13.8438 2.53125 14.5312C1.84375 15.2188 1.5 16.0469 1.5 17.0156C1.5 17.9844 1.84375 18.8125 2.53125 19.5ZM1.45312 13.4531C2.42188 12.4844 3.60938 12 5.01562 12C6.42188 12 7.59375 12.4844 8.53125 13.4531C9.5 14.4219 9.98438 15.6094 9.98438 17.0156C9.98438 18.4219 9.5 19.6094 8.53125 20.5781C7.59375 21.5156 6.42188 21.9844 5.01562 21.9844C3.60938 21.9844 2.42188 21.5156 1.45312 20.5781C0.484375 19.6094 0 18.4219 0 17.0156C0 15.6094 0.484375 14.4219 1.45312 13.4531ZM16.875 4.92188C16.5 5.29688 16.0469 5.48438 15.5156 5.48438C14.9844 5.48438 14.5156 5.29688 14.1094 4.92188C13.7031 4.51562 13.5 4.04688 13.5 3.51562C13.5 2.98438 13.7031 2.51562 14.1094 2.10938C14.5156 1.70312 14.9844 1.5 15.5156 1.5C16.0469 1.5 16.5 1.70312 16.875 2.10938C17.2812 2.51562 17.4844 2.98438 17.4844 3.51562C17.4844 4.04688 17.2812 4.51562 16.875 4.92188Z" fill="#1A2F43"/>' +
      '</svg>',
    'CAR__ICON': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M5.01562 11.0156H18.9844L17.4844 6.51562H6.51562L5.01562 11.0156ZM16.4062 15.5625C16.7188 15.8438 17.0781 15.9844 17.4844 15.9844C17.8906 15.9844 18.2344 15.8438 18.5156 15.5625C18.8281 15.25 18.9844 14.8906 18.9844 14.4844C18.9844 14.0781 18.8281 13.7344 18.5156 13.4531C18.2344 13.1406 17.8906 12.9844 17.4844 12.9844C17.0781 12.9844 16.7188 13.1406 16.4062 13.4531C16.125 13.7344 15.9844 14.0781 15.9844 14.4844C15.9844 14.8906 16.125 15.25 16.4062 15.5625ZM5.4375 15.5625C5.75 15.8438 6.10938 15.9844 6.51562 15.9844C6.92188 15.9844 7.26562 15.8438 7.54688 15.5625C7.85938 15.25 8.01562 14.8906 8.01562 14.4844C8.01562 14.0781 7.85938 13.7344 7.54688 13.4531C7.26562 13.1406 6.92188 12.9844 6.51562 12.9844C6.10938 12.9844 5.75 13.1406 5.4375 13.4531C5.15625 13.7344 5.01562 14.0781 5.01562 14.4844C5.01562 14.8906 5.15625 15.25 5.4375 15.5625ZM18.9375 6L21 12V20.0156C21 20.2969 20.9062 20.5312 20.7188 20.7188C20.5312 20.9062 20.2969 21 20.0156 21H18.9844C18.7031 21 18.4688 20.9062 18.2812 20.7188C18.0938 20.5312 18 20.2969 18 20.0156V18.9844H6V20.0156C6 20.2969 5.90625 20.5312 5.71875 20.7188C5.53125 20.9062 5.29688 21 5.01562 21H3.98438C3.70312 21 3.46875 20.9062 3.28125 20.7188C3.09375 20.5312 3 20.2969 3 20.0156V12L5.0625 6C5.25 5.34375 5.73438 5.01562 6.51562 5.01562H17.4844C18.2656 5.01562 18.75 5.34375 18.9375 6Z" fill="#1A2F43"/>' +
      '</svg>',
    'PHONE__ICON': '<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M14.8307 11.9457L12.5142 9.62368C12.0528 9.16308 11.2887 9.17708 10.8112 9.65581L9.64415 10.8253C9.57041 10.7845 9.49409 10.742 9.41385 10.6969C8.67686 10.2876 7.66816 9.7266 6.60671 8.66197C5.54212 7.5951 4.9819 6.58256 4.57229 5.84342C4.52906 5.76511 4.48765 5.68961 4.44675 5.61792L5.23003 4.83403L5.61512 4.4476C6.09333 3.96817 6.10652 3.20255 5.64619 2.74062L3.32967 0.418337C2.86934 -0.0429495 2.12831 -0.0406385 1.62201 0.418335C1.11571 0.877308 1.18439 0.794791 0.973812 1.10858C0.763236 1.42237 0.59237 1.72263 0.453668 2.07741C0.328179 2.40887 0.250049 2.72516 0.214324 3.0421C-0.0915566 5.58366 1.06724 7.90647 4.21207 11.0585C8.55917 15.4151 12.0624 15.086 12.2135 15.0699C12.5426 15.0305 12.8581 14.9517 13.1787 14.8269C13.5231 14.692 13.845 14.509 14.1242 14.29C14.4034 14.0711 14.7999 13.6536 14.7999 13.6536C15.2771 13.1742 15.2908 12.4084 14.8307 11.9457Z" fill="#1A2F43"/>' +
      '</svg>',
    'GLOBE__ICON': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<circle cx="12" cy="12" r="9" stroke="#1A2F43" stroke-width="1.6"/>' +
      '<path d="M11.5015 20.9294C9.72029 18.2809 8.77185 15.1603 8.77811 11.9686C8.78437 8.77691 9.74506 5.66003 11.5367 3.01861" stroke="#1A2F43" stroke-width="1.6"/>' +
      '<path d="M12.4985 20.9294C14.2798 18.2809 15.2282 15.1603 15.222 11.9686C15.2157 8.77691 14.255 5.66003 12.4634 3.01861" stroke="#1A2F43" stroke-width="1.6"/>' +
      '<path d="M3.49561 9H20.3935" stroke="#1A2F43" stroke-width="1.6"/>' +
      '<path d="M3.49561 15H20.3935" stroke="#1A2F43" stroke-width="1.6"/>' +
      '</svg>',
    'COMPASS__ICON': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M14.0156 14.4844L17.4844 11.0156L14.0156 7.5V9.98438H9C8.71875 9.98438 8.48438 10.0938 8.29688 10.3125C8.10938 10.5 8.01562 10.7344 8.01562 11.0156V15H9.98438V12H14.0156V14.4844ZM21.7031 11.2969C22.1406 11.7969 22.1406 12.2656 21.7031 12.7031L12.7031 21.7031C12.5156 21.8906 12.2812 21.9844 12 21.9844C11.7188 21.9844 11.4844 21.8906 11.2969 21.7031L2.29688 12.7031C2.10938 12.5156 2.01562 12.2812 2.01562 12C2.01562 11.7188 2.10938 11.4844 2.29688 11.2969L11.2969 2.29688C11.4844 2.10938 11.7188 2.01562 12 2.01562C12.2812 2.01562 12.5156 2.10938 12.7031 2.29688L21.7031 11.2969Z" fill="#1A2F43"/>' +
      '</svg>',
    'SNAZZY__CLOSE__ICON': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M5.5 5.5L18.5 18.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M18.5 5.5L5.5 18.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/>' +
      '</svg>',
    'POI__PLUG': '<svg width="2370" height="1225" viewBox="0 0 2370 1225" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<g clip-path="url(#clip0)">' +
      '<rect width="2370" height="1225" fill="#1A2F43"/>' +
      '<path d="M750.78 638.18H645.81V1056.01H750.78V638.18Z" fill="#284867"/>' +
      '<path d="M733.64 608.22H662.97V783.8H733.64V608.22Z" fill="#284867"/>' +
      '<path d="M717.9 589.22H678.7V686.61H717.9V589.22Z" fill="#284867"/>' +
      '<path d="M711.65 639.27H684.94V572.89H694.58H704.13H711.65V639.27Z" fill="#284867"/>' +
      '<path d="M696.54 610.37H693.64V543.99H694.69H695.72H696.54V610.37Z" fill="#284867"/>' +
      '<path d="M702.96 587.42H700.06V521.05H701.1H702.14H702.96V587.42Z" fill="#284867"/>' +
      '<path d="M753.58 637.11H643.01V641.56H753.58V637.11Z" fill="#284867"/>' +
      '<path d="M736.21 606.08H660.39V610.36H736.21V606.08Z" fill="#284867"/>' +
      '<path d="M719.54 587.42H675.84V590.71H719.54V587.42Z" fill="#284867"/>' +
      '<path opacity="0.29" d="M672.75 615.35H669.46V633.75H672.75V615.35Z" fill="#284867"/>' +
      '<path opacity="0.29" d="M681.84 615.35H678.55V633.75H681.84V615.35Z" fill="#284867"/>' +
      '<path opacity="0.29" d="M690.93 615.35H687.64V633.75H690.93V615.35Z" fill="#284867"/>' +
      '<path opacity="0.29" d="M700.02 615.35H696.73V633.75H700.02V615.35Z" fill="#284867"/>' +
      '<path opacity="0.29" d="M709.11 615.35H705.82V633.75H709.11V615.35Z" fill="#284867"/>' +
      '<path opacity="0.29" d="M718.2 615.35H714.91V633.75H718.2V615.35Z" fill="#284867"/>' +
      '<path opacity="0.29" d="M727.29 615.35H724V633.75H727.29V615.35Z" fill="#284867"/>' +
      '<path d="M662.97 654.84H655.03V676.67H662.97V654.84Z" fill="#284867"/>' +
      '<path opacity="0.29" d="M678.69 654.84H670.75V676.67H678.69V654.84Z" fill="#284867"/>' +
      '<path d="M694.41 654.84H686.47V676.67H694.41V654.84Z" fill="#284867"/>' +
      '<path d="M710.13 654.84H702.19V676.67H710.13V654.84Z" fill="#284867"/>' +
      '<path d="M725.85 654.84H717.91V676.67H725.85V654.84Z" fill="#284867"/>' +
      '<path d="M741.57 654.84H733.63V676.67H741.57V654.84Z" fill="#284867"/>' +
      '<path d="M662.97 688.86H655.03V710.69H662.97V688.86Z" fill="#284867"/>' +
      '<path d="M678.69 688.86H670.75V710.69H678.69V688.86Z" fill="#284867"/>' +
      '<path d="M694.41 688.86H686.47V710.69H694.41V688.86Z" fill="#284867"/>' +
      '<path opacity="0.29" d="M710.13 688.86H702.19V710.69H710.13V688.86Z" fill="#284867"/>' +
      '<path d="M725.85 688.86H717.91V710.69H725.85V688.86Z" fill="#284867"/>' +
      '<path d="M741.57 688.86H733.63V710.69H741.57V688.86Z" fill="#284867"/>' +
      '<path d="M662.97 722.89H655.03V744.72H662.97V722.89Z" fill="#284867"/>' +
      '<path d="M678.69 722.89H670.75V744.72H678.69V722.89Z" fill="#284867"/>' +
      '<path d="M694.41 722.89H686.47V744.72H694.41V722.89Z" fill="#284867"/>' +
      '<path d="M710.13 722.89H702.19V744.72H710.13V722.89Z" fill="#284867"/>' +
      '<path opacity="0.29" d="M725.85 722.89H717.91V744.72H725.85V722.89Z" fill="#284867"/>' +
      '<path opacity="0.29" d="M741.57 722.89H733.63V744.72H741.57V722.89Z" fill="#284867"/>' +
      '<path opacity="0.29" d="M662.97 756.91H655.03V778.74H662.97V756.91Z" fill="#284867"/>' +
      '<path d="M678.69 756.91H670.75V778.74H678.69V756.91Z" fill="#284867"/>' +
      '<path d="M694.41 756.91H686.47V778.74H694.41V756.91Z" fill="#284867"/>' +
      '<path d="M710.13 756.91H702.19V778.74H710.13V756.91Z" fill="#284867"/>' +
      '<path d="M725.85 756.91H717.91V778.74H725.85V756.91Z" fill="#284867"/>' +
      '<path d="M741.57 756.91H733.63V778.74H741.57V756.91Z" fill="#284867"/>' +
      '<path d="M662.97 790.94H655.03V812.77H662.97V790.94Z" fill="#284867"/>' +
      '<path opacity="0.29" d="M678.69 790.94H670.75V812.77H678.69V790.94Z" fill="#284867"/>' +
      '<path d="M694.41 790.94H686.47V812.77H694.41V790.94Z" fill="#284867"/>' +
      '<path opacity="0.29" d="M710.13 790.94H702.19V812.77H710.13V790.94Z" fill="#284867"/>' +
      '<path d="M725.85 790.94H717.91V812.77H725.85V790.94Z" fill="#284867"/>' +
      '<path d="M741.57 790.94H733.63V812.77H741.57V790.94Z" fill="#284867"/>' +
      '<path d="M662.97 824.96H655.03V846.79H662.97V824.96Z" fill="#284867"/>' +
      '<path d="M678.69 824.96H670.75V846.79H678.69V824.96Z" fill="#284867"/>' +
      '<path d="M694.41 824.96H686.47V846.79H694.41V824.96Z" fill="#284867"/>' +
      '<path d="M710.13 824.96H702.19V846.79H710.13V824.96Z" fill="#284867"/>' +
      '<path d="M725.85 824.96H717.91V846.79H725.85V824.96Z" fill="#284867"/>' +
      '<path opacity="0.29" d="M741.57 824.96H733.63V846.79H741.57V824.96Z" fill="#284867"/>' +
      '<path d="M662.97 858.98H655.03V880.81H662.97V858.98Z" fill="#284867"/>' +
      '<path opacity="0.29" d="M678.69 858.98H670.75V880.81H678.69V858.98Z" fill="#284867"/>' +
      '<path opacity="0.29" d="M694.41 858.98H686.47V880.81H694.41V858.98Z" fill="#284867"/>' +
      '<path d="M710.13 858.98H702.19V880.81H710.13V858.98Z" fill="#284867"/>' +
      '<path d="M725.85 858.98H717.91V880.81H725.85V858.98Z" fill="#284867"/>' +
      '<path d="M741.57 858.98H733.63V880.81H741.57V858.98Z" fill="#284867"/>' +
      '<path d="M662.97 893.01H655.03V914.84H662.97V893.01Z" fill="#284867"/>' +
      '<path d="M678.69 893.01H670.75V914.84H678.69V893.01Z" fill="#284867"/>' +
      '<path d="M694.41 893.01H686.47V914.84H694.41V893.01Z" fill="#284867"/>' +
      '<path d="M710.13 893.01H702.19V914.84H710.13V893.01Z" fill="#284867"/>' +
      '<path opacity="0.29" d="M725.85 893.01H717.91V914.84H725.85V893.01Z" fill="#284867"/>' +
      '<path d="M741.57 893.01H733.63V914.84H741.57V893.01Z" fill="#284867"/>' +
      '<path d="M662.97 927.03H655.03V948.86H662.97V927.03Z" fill="#284867"/>' +
      '<path opacity="0.29" d="M678.69 927.03H670.75V948.86H678.69V927.03Z" fill="#284867"/>' +
      '<path d="M694.41 927.03H686.47V948.86H694.41V927.03Z" fill="#284867"/>' +
      '<path d="M710.13 927.03H702.19V948.86H710.13V927.03Z" fill="#284867"/>' +
      '<path d="M725.85 927.03H717.91V948.86H725.85V927.03Z" fill="#284867"/>' +
      '<path d="M741.57 927.03H733.63V948.86H741.57V927.03Z" fill="#284867"/>' +
      '<path d="M662.97 961.06H655.03V982.89H662.97V961.06Z" fill="#284867"/>' +
      '<path d="M678.69 961.06H670.75V982.89H678.69V961.06Z" fill="#284867"/>' +
      '<path d="M694.41 961.06H686.47V982.89H694.41V961.06Z" fill="#284867"/>' +
      '<path opacity="0.29" d="M710.13 961.06H702.19V982.89H710.13V961.06Z" fill="#284867"/>' +
      '<path d="M725.85 961.06H717.91V982.89H725.85V961.06Z" fill="#284867"/>' +
      '<path opacity="0.29" d="M741.57 961.06H733.63V982.89H741.57V961.06Z" fill="#284867"/>' +
      '<path opacity="0.29" d="M662.97 995.08H655.03V1016.91H662.97V995.08Z" fill="#284867"/>' +
      '<path d="M678.69 995.08H670.75V1016.91H678.69V995.08Z" fill="#284867"/>' +
      '<path opacity="0.29" d="M694.41 995.08H686.47V1016.91H694.41V995.08Z" fill="#284867"/>' +
      '<path d="M710.13 995.08H702.19V1016.91H710.13V995.08Z" fill="#284867"/>' +
      '<path d="M725.85 995.08H717.91V1016.91H725.85V995.08Z" fill="#284867"/>' +
      '<path d="M741.57 995.08H733.63V1016.91H741.57V995.08Z" fill="#284867"/>' +
      '<path d="M509.69 654.07H340.95V1006.05H509.69V654.07Z" fill="#284867"/>' +
      '<path d="M514.48 648.02H336.15V657.97H514.48V648.02Z" fill="#284867"/>' +
      '<path d="M504.02 635.28H346.62V682.57H504.02V635.28Z" fill="#284867"/>' +
      '<path d="M421 615.94H358.67V667.61H421V615.94Z" fill="#284867"/>' +
      '<path d="M394.74 630.5H358.67V603.3H384.54L394.74 630.5Z" fill="#284867"/>' +
      '<path d="M376.71 580.73H373.21V641.31H376.71V580.73Z" fill="#284867"/>' +
      '<path d="M374.96 580.72C376.694 580.72 378.1 579.314 378.1 577.58C378.1 575.846 376.694 574.44 374.96 574.44C373.226 574.44 371.82 575.846 371.82 577.58C371.82 579.314 373.226 580.72 374.96 580.72Z" fill="#284867"/>' +
      '<path d="M1907.06 1032.85H1722.35L1699.3 515.34L1907.06 558.47V1032.85Z" fill="#284867"/>' +
      '<path d="M1101.19 737.3V564.29H1072.22V517.94H1061.87V449.97H1004.85V400.02H999.78V449.97H988.61V387.44H983.53V449.97H947.49V564.29H928.87V737.3H912.91V1052.44H1112.41V737.3H1101.19Z" fill="#284867"/>' +
      '<path d="M2312.09 1026.43H105.12V1078.92H2312.09V1026.43Z" fill="#284867"/>' +
      '<path d="M1404.21 1066.06H1306.48L1344.56 870.37H1404.21V1066.06Z" fill="#36628C"/>' +
      '<path d="M2343.15 1073.69H25.9302V1225.42H2343.15V1073.69Z" fill="#36628C"/>' +
      '<path d="M1324.12 703.93V617.21H1292.74V584.2H1275.95V556.46H1270.06V508.92H1268.54V556.46H1262.65V584.2H1245.86V617.21H1214.72V703.93H1208.25V861.37H1159.97V1040.84H1208.25H1256.53H1330.35V703.93H1324.12Z" fill="#36628C"/>' +
      '<path d="M1504.46 803.54H1352.57V806.31H1359.45V1063.13H1497.59V806.31H1504.46V803.54Z" fill="#36628C"/>' +
      '<path d="M811.86 867.51H677.2V1081.45H811.86V867.51Z" fill="#36628C"/>' +
      '<path d="M656.92 977.12H425.32V1081.45H656.92V977.12Z" fill="#36628C"/>' +
      '<path d="M600.3 744.04H549.46V1000.24H600.3V744.04Z" fill="#36628C"/>' +
      '<path d="M563.32 675.7H560.68V815.02H563.32V675.7Z" fill="#36628C"/>' +
      '<path d="M571.91 686.26H569.27V825.58H571.91V686.26Z" fill="#36628C"/>' +
      '<path d="M584.46 728.19H553.38V762.53H584.46V728.19Z" fill="#36628C"/>' +
      '<path d="M736.32 905.81H647.84V1081.45H736.32V905.81Z" fill="#36628C"/>' +
      '<path d="M999.78 719.94H833.69V1081.45H999.78V719.94Z" fill="#36628C"/>' +
      '<path d="M983.46 707.52H850.01V767.73H983.46V707.52Z" fill="#36628C"/>' +
      '<path d="M1012.66 727.5H820.82V731.73H1012.66V727.5Z" fill="#36628C"/>' +
      '<path d="M881.86 898.88H803.6V1081.45H881.86V898.88Z" fill="#36628C"/>' +
      '<path d="M332.88 891.95H243.08V1081.46H332.88V891.95Z" fill="#36628C"/>' +
      '<path d="M451.07 840.44H272.13V1081.45H451.07V840.44Z" fill="#36628C"/>' +
      '<path d="M455.69 831.2H261.69V840.44H455.69V831.2Z" fill="#36628C"/>' +
      '<path d="M358.69 806.11H280.05V854.97H358.69V806.11Z" fill="#36628C"/>' +
      '<path d="M397.59 806.11H384.38V835.82H397.59V806.11Z" fill="#36628C"/>' +
      '<path d="M425.32 806.11H410.79V835.82H425.32V806.11Z" fill="#36628C"/>' +
      '<path d="M287.98 1008.16H194.22V1081.45H287.98V1008.16Z" fill="#36628C"/>' +
      '<path d="M203.2 977.12H158.8V1081.45H203.2V977.12Z" fill="#36628C"/>' +
      '<path d="M181 1044.81H105.12V1081.46H181V1044.81Z" fill="#36628C"/>' +
      '<path d="M1918.49 1000.24H983.47V1081.46H1918.49V1000.24Z" fill="#36628C"/>' +
      '<path d="M1843.82 775.41C1841 775.413 1838.29 776.473 1836.22 778.38C1834.15 780.288 1832.87 782.904 1832.63 785.71L1819.47 785.28C1819.47 783.99 1819.53 782.7 1819.53 781.4C1819.55 765.283 1816.76 749.287 1811.28 734.13L1822.28 730.13C1823.44 732.812 1825.6 734.937 1828.3 736.052C1831 737.167 1834.03 737.184 1836.74 736.1C1839.45 735.017 1841.64 732.917 1842.83 730.249C1844.02 727.58 1844.12 724.553 1843.11 721.81C1842.1 719.068 1840.07 716.827 1837.43 715.563C1834.8 714.3 1831.77 714.115 1829 715.046C1826.23 715.977 1823.94 717.952 1822.6 720.55C1821.27 723.149 1821 726.166 1821.85 728.96L1810.85 733.01C1804.51 716.04 1794.89 700.486 1782.53 687.24L1791.13 679.18C1793.25 681.217 1796.09 682.344 1799.03 682.323C1801.98 682.302 1804.79 681.133 1806.89 679.066C1808.98 676.998 1810.19 674.195 1810.25 671.253C1810.31 668.31 1809.22 665.461 1807.21 663.31C1805.2 661.159 1802.43 659.877 1799.49 659.736C1796.55 659.596 1793.67 660.607 1791.47 662.556C1789.26 664.505 1787.9 667.237 1787.68 670.172C1787.46 673.107 1788.39 676.012 1790.28 678.27L1781.67 686.33C1780.79 685.39 1779.89 684.47 1778.97 683.55C1766.18 670.719 1750.99 660.526 1734.27 653.55L1739 642C1741.81 642.917 1744.87 642.7 1747.52 641.397C1750.18 640.094 1752.22 637.807 1753.21 635.023C1754.2 632.238 1754.07 629.176 1752.84 626.488C1751.61 623.799 1749.38 621.697 1746.62 620.628C1743.87 619.558 1740.8 619.607 1738.08 620.762C1735.36 621.918 1733.2 624.09 1732.05 626.816C1730.91 629.542 1730.87 632.606 1731.95 635.358C1733.03 638.11 1735.15 640.331 1737.84 641.55L1733.12 653.05C1718.18 647.002 1702.3 643.617 1686.19 643.05L1686.71 627.3H1687.06C1689.96 627.291 1692.75 626.157 1694.83 624.137C1696.91 622.116 1698.13 619.367 1698.22 616.468C1698.32 613.568 1697.28 610.745 1695.34 608.592C1693.39 606.44 1690.69 605.126 1687.79 604.927C1684.9 604.728 1682.04 605.659 1679.82 607.526C1677.6 609.392 1676.19 612.047 1675.89 614.932C1675.58 617.817 1676.41 620.707 1678.2 622.994C1679.98 625.28 1682.59 626.784 1685.46 627.19L1685 643C1683.71 643 1682.42 643 1681.12 643C1665.65 642.979 1650.28 645.548 1635.66 650.6L1631.13 637.75C1633.82 636.643 1635.97 634.531 1637.13 631.863C1638.28 629.194 1638.36 626.18 1637.32 623.461C1636.29 620.741 1634.24 618.531 1631.61 617.3C1628.97 616.069 1625.96 615.915 1623.21 616.869C1620.47 617.824 1618.2 619.812 1616.9 622.412C1615.59 625.011 1615.35 628.017 1616.23 630.79C1617.11 633.563 1619.03 635.884 1621.59 637.26C1624.16 638.637 1627.15 638.96 1629.95 638.16L1634.49 651.01C1616.82 657.336 1600.63 667.204 1586.91 680.01L1578.7 671.24C1580.71 669.07 1581.8 666.2 1581.72 663.243C1581.65 660.285 1580.43 657.472 1578.31 655.402C1576.2 653.332 1573.36 652.169 1570.4 652.16C1567.44 652.15 1564.6 653.296 1562.47 655.352C1560.34 657.408 1559.1 660.213 1559.01 663.171C1558.92 666.128 1559.99 669.004 1561.98 671.187C1563.98 673.37 1566.75 674.688 1569.7 674.861C1572.66 675.033 1575.56 674.046 1577.8 672.11L1586 680.86C1585.06 681.75 1584.13 682.65 1583.22 683.56C1571.8 694.949 1562.46 708.241 1555.61 722.84L1545.13 718C1546.05 715.233 1545.86 712.216 1544.59 709.59C1543.32 706.963 1541.08 704.935 1538.34 703.936C1535.6 702.937 1532.58 703.046 1529.92 704.24C1527.26 705.434 1525.17 707.618 1524.09 710.329C1523.02 713.04 1523.04 716.064 1524.16 718.757C1525.28 721.45 1527.41 723.6 1530.09 724.75C1532.77 725.9 1535.79 725.96 1538.51 724.916C1541.24 723.872 1543.45 721.807 1544.67 719.16L1555.04 723.95C1547.52 740.426 1543.33 758.222 1542.71 776.32L1529.32 775.89C1529.16 772.954 1527.86 770.198 1525.69 768.207C1523.53 766.216 1520.67 765.148 1517.73 765.229C1514.8 765.311 1512 766.536 1509.95 768.643C1507.9 770.751 1506.76 773.575 1506.76 776.515C1506.76 779.455 1507.9 782.279 1509.95 784.387C1512 786.495 1514.8 787.719 1517.73 787.801C1520.67 787.882 1523.53 786.814 1525.69 784.823C1527.86 782.832 1529.16 780.076 1529.32 777.14L1542.71 777.57C1542.71 778.86 1542.66 780.15 1542.66 781.44C1542.63 797.56 1545.42 813.56 1550.9 828.72L1539.9 832.77C1538.74 830.088 1536.58 827.964 1533.88 826.849C1531.18 825.734 1528.15 825.716 1525.44 826.8C1522.73 827.884 1520.54 829.983 1519.35 832.652C1518.16 835.32 1518.06 838.348 1519.07 841.09C1520.08 843.832 1522.11 846.074 1524.75 847.337C1527.38 848.6 1530.41 848.786 1533.18 847.854C1535.95 846.923 1538.24 844.948 1539.58 842.35C1540.91 839.751 1541.18 836.734 1540.33 833.94L1551.33 829.94C1557.67 846.91 1567.29 862.464 1579.65 875.71L1571.05 883.77C1568.95 881.781 1566.15 880.691 1563.26 880.732C1560.36 880.772 1557.6 881.94 1555.55 883.987C1553.5 886.034 1552.33 888.799 1552.29 891.693C1552.25 894.588 1553.34 897.385 1555.33 899.489C1557.32 901.593 1560.05 902.838 1562.94 902.961C1565.83 903.083 1568.66 902.073 1570.82 900.145C1572.98 898.216 1574.3 895.522 1574.5 892.634C1574.71 889.746 1573.78 886.893 1571.91 884.68L1580.51 876.62C1581.4 877.55 1582.29 878.48 1583.21 879.4C1591.86 888.058 1601.61 895.539 1612.21 901.65L1544.46 1026.52H1532.3V1030H1526.3V1037.1H1835.86V1030H1829.91V1026.43H1817.75L1750 901.56C1759.11 896.304 1767.6 890.03 1775.3 882.86L1786.3 894.58C1784.11 896.477 1782.74 899.154 1782.49 902.043C1782.24 904.932 1783.12 907.805 1784.96 910.051C1786.79 912.298 1789.43 913.741 1792.31 914.074C1795.19 914.407 1798.08 913.603 1800.38 911.834C1802.68 910.065 1804.2 907.469 1804.61 904.599C1805.03 901.729 1804.3 898.811 1802.6 896.464C1800.9 894.117 1798.35 892.527 1795.49 892.031C1792.63 891.536 1789.69 892.174 1787.3 893.81L1776.3 882.01C1777.23 881.12 1778.16 880.22 1779.07 879.31C1790.46 867.907 1799.77 854.604 1806.58 840L1818.81 845.64C1818.59 846.543 1818.47 847.47 1818.47 848.4C1818.49 851.197 1819.55 853.885 1821.45 855.938C1823.35 857.991 1825.95 859.261 1828.73 859.497C1831.52 859.733 1834.29 858.919 1836.51 857.215C1838.73 855.511 1840.23 853.039 1840.72 850.286C1841.21 847.532 1840.65 844.696 1839.15 842.333C1837.66 839.969 1835.33 838.251 1832.64 837.513C1829.94 836.776 1827.06 837.074 1824.57 838.348C1822.08 839.622 1820.16 841.781 1819.18 844.4L1807.1 838.83C1814.61 822.354 1818.8 804.558 1819.43 786.46L1832.6 786.88C1832.66 789.087 1833.37 791.228 1834.64 793.033C1835.91 794.839 1837.69 796.23 1839.75 797.033C1841.8 797.835 1844.05 798.013 1846.21 797.544C1848.37 797.076 1850.34 795.982 1851.88 794.398C1853.42 792.815 1854.46 790.813 1854.86 788.643C1855.27 786.473 1855.03 784.231 1854.17 782.197C1853.31 780.163 1851.87 778.428 1850.03 777.208C1848.19 775.989 1846.03 775.339 1843.82 775.34V775.41ZM1815.82 781.41C1815.82 782.67 1815.82 783.92 1815.82 785.17L1777 783.9C1777 783.07 1777 782.24 1777 781.4C1777.01 770.301 1775.08 759.286 1771.3 748.85L1807.76 735.42C1813.09 750.164 1815.8 765.724 1815.78 781.4L1815.82 781.41ZM1775.13 783.85L1688.62 781C1688.59 780.445 1688.5 779.895 1688.35 779.36L1769.55 749.47C1773.24 759.7 1775.13 770.494 1775.12 781.37C1775.12 782.22 1775.11 783 1775.09 783.84L1775.13 783.85ZM1587.13 778.98L1673.61 781.79C1673.63 782.345 1673.72 782.895 1673.87 783.43L1592.68 813.32C1588.94 803.092 1587.02 792.29 1587 781.4C1587 780.593 1587.02 779.793 1587.05 779L1587.13 778.98ZM1687.07 776.72L1750.17 717.6C1758.43 726.521 1764.88 736.956 1769.17 748.33L1687.98 778.23C1687.72 777.685 1687.39 777.174 1687 776.71L1687.07 776.72ZM1686.22 775.81C1685.73 775.367 1685.18 774.991 1684.59 774.69L1717.46 694.69C1729.49 699.744 1740.33 707.235 1749.32 716.69L1686.22 775.81ZM1683.43 774.21C1682.97 774.068 1682.5 773.967 1682.02 773.91L1684.83 687.44C1695.63 687.854 1706.28 690.134 1716.3 694.18L1683.43 774.21ZM1680.77 773.87C1680.25 773.898 1679.74 773.978 1679.24 774.11L1650.48 692.5C1660.35 689.093 1670.71 687.356 1681.15 687.36C1681.96 687.36 1682.78 687.36 1683.58 687.36L1680.77 773.87ZM1678.06 774.52C1677.49 774.787 1676.95 775.123 1676.46 775.52L1617.33 712.42C1626.58 703.85 1637.47 697.226 1649.33 692.94L1678.06 774.52ZM1675.55 776.35C1675.17 776.758 1674.83 777.208 1674.55 777.69L1596 741.42C1600.99 730.846 1607.91 721.291 1616.39 713.24L1675.55 776.35ZM1674.05 778.82C1673.85 779.379 1673.72 779.96 1673.65 780.55L1587.18 777.74C1587.64 765.583 1590.47 753.632 1595.51 742.56L1674.05 778.82ZM1674.3 784.6C1674.5 785.034 1674.74 785.447 1675.03 785.83L1674.51 786.78L1612.13 845.23C1603.87 836.304 1597.42 825.866 1593.13 814.49L1674.3 784.6ZM1672.62 790.26L1633.46 862.45C1625.91 857.99 1619.02 852.504 1612.98 846.15L1672.62 790.26ZM1676.88 787.65C1677.15 787.83 1677.43 787.99 1677.71 788.14L1644.85 868.14C1641.7 866.815 1638.62 865.319 1635.63 863.66L1676.88 787.65ZM1678.88 788.65C1679.34 788.791 1679.81 788.892 1680.29 788.95L1677.48 875.42C1666.68 875.005 1656.03 872.725 1646.01 868.68L1678.88 788.65ZM1681.16 875.5C1680.35 875.5 1679.54 875.5 1678.73 875.5L1681.54 789.03C1682.06 789.001 1682.58 788.921 1683.08 788.79L1711.84 870.39C1701.94 873.788 1691.54 875.502 1681.07 875.46L1681.16 875.5ZM1684.25 788.34C1684.66 788.154 1685.06 787.933 1685.43 787.68L1726.69 863.68C1722.3 866.118 1717.73 868.198 1713.01 869.9L1684.25 788.34ZM1691.19 793.06L1744.98 850.46C1740.04 855.022 1734.64 859.044 1728.85 862.46L1691.19 793.06ZM1688.84 788.73L1687.29 785.86C1687.45 785.64 1687.6 785.41 1687.73 785.17L1766.28 821.42C1761.29 831.999 1754.37 841.558 1745.89 849.61L1688.84 788.73ZM1688.26 784.03C1688.47 783.476 1688.6 782.898 1688.66 782.31L1775.13 785.12C1774.67 797.273 1771.85 809.22 1766.81 820.29L1688.26 784.03ZM1644.15 869.94L1629.38 905.88C1624.88 904.007 1620.48 901.887 1616.21 899.53L1634.74 865.36C1637.76 867.04 1640.87 868.555 1644.06 869.9L1644.15 869.94ZM1645.3 870.41C1655.53 874.543 1666.4 876.871 1677.42 877.29L1676.07 916C1660.41 915.457 1644.97 912.174 1630.45 906.3L1645.3 870.41ZM1678.67 877.34C1679.5 877.34 1680.33 877.34 1681.16 877.34C1691.81 877.35 1702.39 875.575 1712.46 872.09L1725.37 908.73C1711.15 913.643 1696.21 916.141 1681.16 916.12C1679.91 916.12 1678.66 916.12 1677.41 916.07L1678.67 877.34ZM1713.67 871.71C1718.48 869.969 1723.14 867.845 1727.61 865.36L1746 899.49C1739.72 902.952 1733.18 905.902 1726.43 908.31L1713.67 871.71ZM1807.45 734.29L1770.99 747.72C1766.61 736.108 1760.01 725.456 1751.58 716.35L1779.92 689.79C1791.88 702.67 1801.2 717.777 1807.33 734.25L1807.45 734.29ZM1776.45 686.19C1777.33 687.08 1778.2 687.97 1779.06 688.88L1750.73 715.43C1741.56 705.772 1730.49 698.118 1718.21 692.95L1732.85 657C1749.11 663.774 1763.89 673.679 1776.33 686.15L1776.45 686.19ZM1731.81 656.53L1717.05 692.53C1706.82 688.397 1695.95 686.069 1684.93 685.65L1686.19 646.88C1701.8 647.409 1717.2 650.661 1731.69 656.49L1731.81 656.53ZM1681.19 646.74C1682.45 646.74 1683.7 646.74 1684.94 646.74L1683.68 685.5C1682.86 685.5 1682.03 685.5 1681.19 685.5C1670.54 685.492 1659.96 687.266 1649.89 690.75L1636.98 654.11C1651.16 649.205 1666.06 646.7 1681.07 646.7L1681.19 646.74ZM1635.8 654.54L1648.72 691.18C1636.6 695.53 1625.47 702.27 1616 711L1589.45 682.66C1602.78 670.223 1618.51 660.641 1635.68 654.5L1635.8 654.54ZM1585.94 686.19C1586.82 685.3 1587.72 684.43 1588.63 683.57L1615.18 711.91C1606.52 720.131 1599.47 729.886 1594.37 740.68L1559 724.35C1565.65 710.153 1574.73 697.226 1585.82 686.15L1585.94 686.19ZM1558.56 725.52L1593.85 741.81C1588.7 753.105 1585.82 765.297 1585.35 777.7L1546.57 776.44C1547.14 758.839 1551.17 741.522 1558.44 725.48L1558.56 725.52ZM1546.48 781.44C1546.48 780.193 1546.5 778.943 1546.54 777.69L1585.3 778.95C1585.3 779.783 1585.3 780.613 1585.3 781.44C1585.29 792.542 1587.22 803.56 1590.99 814L1554.53 827.42C1549.15 812.673 1546.38 797.099 1546.36 781.4L1546.48 781.44ZM1554.93 828.6L1591.39 815.17C1595.77 826.784 1602.37 837.437 1610.81 846.54L1582.47 873.1C1570.41 860.217 1561.01 845.082 1554.81 828.56L1554.93 828.6ZM1585.93 876.7C1585.04 875.81 1584.17 874.91 1583.31 874.01L1611.65 847.46C1617.84 853.968 1624.91 859.576 1632.65 864.12L1614.1 898.3C1603.76 892.36 1594.26 885.084 1585.82 876.66L1585.93 876.7ZM1815.01 1026.47H1547.25L1614.33 902.82C1618.72 905.245 1623.24 907.425 1627.87 909.35L1623.14 920.87C1620.34 919.969 1617.3 920.194 1614.67 921.499C1612.03 922.804 1610.01 925.085 1609.03 927.858C1608.05 930.63 1608.19 933.675 1609.43 936.344C1610.66 939.014 1612.88 941.098 1615.63 942.154C1618.37 943.209 1621.42 943.153 1624.12 941.996C1626.82 940.839 1628.97 938.674 1630.1 935.96C1631.23 933.247 1631.26 930.199 1630.18 927.465C1629.1 924.731 1626.99 922.526 1624.31 921.32L1629.03 909.82C1643.97 915.869 1659.85 919.253 1675.95 919.82L1675.57 931.6C1672.65 931.762 1669.91 933.056 1667.93 935.208C1665.95 937.36 1664.88 940.2 1664.96 943.123C1665.04 946.047 1666.26 948.823 1668.36 950.863C1670.46 952.902 1673.27 954.043 1676.19 954.043C1679.11 954.043 1681.92 952.902 1684.02 950.863C1686.12 948.823 1687.34 946.047 1687.42 943.123C1687.5 940.2 1686.43 937.36 1684.45 935.208C1682.47 933.056 1679.73 931.762 1676.81 931.6L1677.2 919.81C1678.49 919.85 1679.78 919.87 1681.07 919.87C1696.54 919.892 1711.91 917.323 1726.53 912.27L1730.53 923.72C1728.02 924.894 1726.04 926.952 1724.95 929.499C1723.87 932.047 1723.76 934.905 1724.66 937.526C1725.55 940.147 1727.38 942.345 1729.79 943.701C1732.21 945.056 1735.04 945.473 1737.74 944.871C1740.44 944.27 1742.83 942.691 1744.44 940.44C1746.05 938.188 1746.77 935.421 1746.47 932.669C1746.16 929.917 1744.86 927.373 1742.79 925.526C1740.73 923.68 1738.06 922.659 1735.29 922.66C1734.07 922.658 1732.85 922.861 1731.69 923.26L1727.69 911.85C1734.62 909.378 1741.35 906.348 1747.79 902.79L1815.01 1026.47ZM1748.31 898.3L1729.77 864.12C1735.7 860.624 1741.23 856.504 1746.28 851.83L1772.84 880.17C1765.34 887.112 1757.07 893.18 1748.2 898.26L1748.31 898.3ZM1776.44 876.7C1775.55 877.58 1774.65 878.46 1773.74 879.31L1747.19 850.98C1755.85 842.759 1762.9 833.004 1768 822.21L1803.29 838.5C1796.59 852.691 1787.47 865.605 1776.33 876.66L1776.44 876.7ZM1803.81 837.37L1768.42 821C1773.56 809.7 1776.45 797.506 1776.92 785.1L1815.69 786.36C1815.08 803.973 1811.01 821.293 1803.7 837.33L1803.81 837.37Z" fill="#36628C"/>' +
      '<path d="M2015.33 869.9H1870.94V1081.45H2015.33V869.9Z" fill="#36628C"/>' +
      '<path d="M2138.59 952.15H1994.2V1080.26H2138.59V952.15Z" fill="#36628C"/>' +
      '<path d="M1515.26 933.34H1434.26V1040.85H1515.26V933.34Z" fill="#36628C"/>' +
      '<path d="M2045.27 668.71H1943.14V1081.45H2045.27V668.71Z" fill="#36628C"/>' +
      '<path d="M2213.42 1081.45H2078.72V840.44H2180.85L2213.42 1081.45Z" fill="#36628C"/>' +
      '<path d="M2272.4 1026.43H2154.43V1081.45H2272.4V1026.43Z" fill="#36628C"/>' +
      '<path d="M2022.37 582.48H2018.85V694.64H2022.37V582.48Z" fill="#36628C"/>' +
      '<path d="M2034.26 606.55H2030.74V718.71H2034.26V606.55Z" fill="#36628C"/>' +
      '<path d="M2011.59 622.04H2008.07V734.2H2011.59V622.04Z" fill="#36628C"/>' +
      '<path d="M2132.2 820.96H2084V858.93H2132.2V820.96Z" fill="#36628C"/>' +
      '<path d="M2126.92 807.43H2089.28V828.77H2126.92V807.43Z" fill="#36628C"/>' +
      '<path d="M2160.59 832.08H2151.35V847.41H2160.59V832.08Z" fill="#36628C"/>' +
      '<path d="M2177.08 818.1H2163.87V847.42H2177.08V818.1Z" fill="#36628C"/>' +
      '<path d="M2008.81 728C2008.72 727.497 2008.49 727.029 2008.15 726.652C2007.8 726.275 2007.36 726.004 2006.86 725.872C2006.37 725.739 2005.85 725.751 2005.36 725.904C2004.88 726.058 2004.44 726.348 2004.12 726.739C2003.79 727.131 2003.58 727.608 2003.51 728.115C2003.45 728.621 2003.53 729.136 2003.74 729.598C2003.96 730.061 2004.31 730.452 2004.74 730.725C2005.17 730.998 2005.67 731.142 2006.18 731.14C2006.94 731.066 2007.65 730.696 2008.14 730.108C2008.63 729.521 2008.87 728.764 2008.81 728V728Z" fill="#447CB1"/>' +
      '<path d="M2296.13 1109.65L2279.77 1000.24H2246.31V909.44H2250.45V901.22H2234.21V865.86H2232.22V901.22H2221V872.25H2219.02V901.22H2151.35V909.44H2155.97V1093.66H2078.72V1011.14H2034.72V808.37H2038.75V798.41H2029.96V785.68H2019.85V780.89V766.33V753.7H2007.64V731.12H2006.17H2004.71V753.7H1998.13L1994.15 766.33H1967.53V785.68H1897.84V798.41H1889.05V808.37H1893.08V940.3H1834.77V1069.93L1770.07 1041.27V915.44H1780.51V906.2H1762.14V881.11H1683.5V906.2H1657.81V881.11H1644.61V906.2H1631.4V881.11H1616.88V906.2H1586.5V915.44H1591.12V1089.84H1561.63V1088.01H1556.29V1038.31H1561.63V1034.33H1556.29V984.63H1561.63V980.64H1556.29V930.94H1561.63V926.96H1556.29V877.26H1561.63V873.27H1556.29V823.57H1561.63V819.59H1556.29V768.15H1565.44V764.15H1570.09V753.25H1483.22V741.13H1486.05V737.62H1438.76V741.13H1441.58V753.25H1420.06V764.15H1424.71V768.15H1433.86V819.59H1428.52V823.57H1433.86V873.27H1428.52V877.26H1433.86V926.96H1428.52V930.94H1433.86V980.64H1428.52V984.63H1433.86V1034.33H1428.52V1038.31H1433.86V1088.01H1428.52V1092H1433.86V1132.61H1404.21V975.68H1284.91V1089.84H1265.54V734.2H1251.21V743.35L1224.77 749.82V743.87H1210.44V753.33L1184 759.79V752.98H1169.67V763.3L1143.22 769.77V764.14H1128.89V773.27L1102.45 779.74V774.89H1088.12V1124.14H1067.96V937.95H993.29V1052.44H916.74V954.81H907.31V922.74H912.91V919.52H888.13V909.44H885.49V919.52H877.57V867.77H875.59V919.52H865.27V922.74H871.34V954.81H820.82V1029.29H771.63L745.95 1124.14H694.41V814.44H626.17V803.35H630.04V799.46H578.36V803.35H582.42V814.44V832.29V1044.39H550.25V964.25H561.68V957H480.72V908.58H465.27V898.63H430.8V908.58H402.75V1081.45H310.72V953.24H233.23V1054.51H165.98V1119.3H117.5V1037.85H53.73V1107.3H-4V1225.42H53.73H73.24H105.12H117.5H165.98H233.23H255.83H267.93H310.72H402.75H430.8H465.27H480.72H541.12H550.25H582.42H636.38H662.97H694.41H820.82H850.01H899.29H916.74H994.6H1015.52H1088.12H1095.29H1102.45H1128.89H1143.22H1169.67H1181.64H1184H1210.44H1224.77H1247.5H1251.21H1258.38H1265.54H1284.91H1383.52H1397.6H1404.21H1433.86H1486.05H1533.83H1556.29H1591.12H1677.63H1769.11H1770.07H1834.77H1870.94H1893.08H1907.06H2015.33H2034.72H2057.91H2078.72H2155.97H2213.42H2225.18H2246.31H2374.85V1109.65H2296.13Z" fill="#447CB1"/>' +
      '<g opacity="0.52">' +
      '<path opacity="0.52" d="M416.69 921.13H410.79V927.03H416.69V921.13Z" fill="#1A2F43"/>' +
      '<path opacity="0.52" d="M428.55 921.13H422.65V927.03H428.55V921.13Z" fill="#1A2F43"/>' +
      '<path opacity="0.52" d="M416.69 935H410.79V940.9H416.69V935Z" fill="#1A2F43"/>' +
      '<path opacity="0.52" d="M428.55 935H422.65V940.9H428.55V935Z" fill="#1A2F43"/>' +
      '<path opacity="0.52" d="M416.69 948.4H410.79V954.3H416.69V948.4Z" fill="#1A2F43"/>' +
      '<path opacity="0.52" d="M441.73 921.13H435.83V927.03H441.73V921.13Z" fill="#1A2F43"/>' +
      '</g>' +
      '<path opacity="0.5" d="M846.76 743.87H842.73V766.15H846.76V743.87Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M860.63 743.87H856.6V766.15H860.63V743.87Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M874.51 743.87H870.48V766.15H874.51V743.87Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M888.38 743.87H884.35V766.15H888.38V743.87Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M902.25 743.87H898.22V766.15H902.25V743.87Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M916.12 743.87H912.09V766.15H916.12V743.87Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M930 743.87H925.97V766.15H930V743.87Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M943.87 743.87H939.84V766.15H943.87V743.87Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M957.74 743.87H953.71V766.15H957.74V743.87Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M971.61 743.87H967.58V766.15H971.61V743.87Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M985.48 743.87H981.45V766.15H985.48V743.87Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M846.76 774.89H842.73V797.17H846.76V774.89Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M860.63 774.89H856.6V797.17H860.63V774.89Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M874.51 774.89H870.48V797.17H874.51V774.89Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M888.38 774.89H884.35V797.17H888.38V774.89Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M902.25 774.89H898.22V797.17H902.25V774.89Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M916.12 774.89H912.09V797.17H916.12V774.89Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M930 774.89H925.97V797.17H930V774.89Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M943.87 774.89H939.84V797.17H943.87V774.89Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M957.74 774.89H953.71V797.17H957.74V774.89Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M971.61 774.89H967.58V797.17H971.61V774.89Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M985.48 774.89H981.45V797.17H985.48V774.89Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M846.76 805.91H842.73V828.19H846.76V805.91Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M860.63 805.91H856.6V828.19H860.63V805.91Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M874.51 805.91H870.48V828.19H874.51V805.91Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M888.38 805.91H884.35V828.19H888.38V805.91Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M902.25 805.91H898.22V828.19H902.25V805.91Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M916.12 805.91H912.09V828.19H916.12V805.91Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M930 805.91H925.97V828.19H930V805.91Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M943.87 805.91H939.84V828.19H943.87V805.91Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M957.74 805.91H953.71V828.19H957.74V805.91Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M971.61 805.91H967.58V828.19H971.61V805.91Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M985.48 805.91H981.45V828.19H985.48V805.91Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M888.38 836.93H884.35V859.21H888.38V836.93Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M902.25 836.93H898.22V859.21H902.25V836.93Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M916.12 836.93H912.09V859.21H916.12V836.93Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M930 836.93H925.97V859.21H930V836.93Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M943.87 836.93H939.84V859.21H943.87V836.93Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M957.74 836.93H953.71V859.21H957.74V836.93Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M971.61 836.93H967.58V859.21H971.61V836.93Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M985.48 836.93H981.45V859.21H985.48V836.93Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M902.25 869.67H898.22V891.95H902.25V869.67Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M916.12 869.67H912.09V891.95H916.12V869.67Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M930 869.67H925.97V891.95H930V869.67Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M943.87 869.67H939.84V891.95H943.87V869.67Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M957.74 869.67H953.71V891.95H957.74V869.67Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M971.61 869.67H967.58V891.95H971.61V869.67Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M985.48 869.67H981.45V891.95H985.48V869.67Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1120.43 799.18H1110.92V823.3H1120.43V799.18Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1120.43 845.31H1110.92V869.43H1120.43V845.31Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1120.43 891.45H1110.92V915.57H1120.43V891.45Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1120.43 937.58H1110.92V961.7H1120.43V937.58Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1120.43 981.08H1110.92V1005.2H1120.43V981.08Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1120.43 1027.21H1110.92V1051.33H1120.43V1027.21Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1161.2 799.18H1151.69V823.3H1161.2V799.18Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1161.2 845.31H1151.69V869.43H1161.2V845.31Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1161.2 891.45H1151.69V915.57H1161.2V891.45Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1161.2 937.58H1151.69V961.7H1161.2V937.58Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1161.2 981.08H1151.69V1005.2H1161.2V981.08Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1161.2 1027.21H1151.69V1051.33H1161.2V1027.21Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1201.97 799.18H1192.46V823.3H1201.97V799.18Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1201.97 845.31H1192.46V869.43H1201.97V845.31Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1201.97 891.45H1192.46V915.57H1201.97V891.45Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1201.97 937.58H1192.46V961.7H1201.97V937.58Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1201.97 981.08H1192.46V1005.2H1201.97V981.08Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1201.97 1027.21H1192.46V1051.33H1201.97V1027.21Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1242.75 799.18H1233.24V823.3H1242.75V799.18Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1242.75 845.31H1233.24V869.43H1242.75V845.31Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1242.75 891.45H1233.24V915.57H1242.75V891.45Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1242.75 937.58H1233.24V961.7H1242.75V937.58Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1242.75 981.08H1233.24V1005.2H1242.75V981.08Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1242.75 1027.21H1233.24V1051.33H1242.75V1027.21Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M965.65 462.82H957.74V483.93H965.65V462.82Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M985.17 462.82H977.26V483.93H985.17V462.82Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M1004.69 462.82H996.78V483.93H1004.69V462.82Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M1024.22 462.82H1016.31V483.93H1024.22V462.82Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M965.65 497.97H957.74V519.08H965.65V497.97Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M985.17 497.97H977.26V519.08H985.17V497.97Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M1004.69 497.97H996.78V519.08H1004.69V497.97Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M1024.22 497.97H1016.31V519.08H1024.22V497.97Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M965.65 533.13H957.74V554.24H965.65V533.13Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M985.17 533.13H977.26V554.24H985.17V533.13Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M1046.36 462.82H1038.45V483.93H1046.36V462.82Z" fill="#1A2F43"/>' +
      '<path opacity="0.4" d="M435.83 676.67H430.8V696.02H435.83V676.67Z" fill="#1A2F43"/>' +
      '<path opacity="0.4" d="M453.59 676.67H448.56V696.02H453.59V676.67Z" fill="#1A2F43"/>' +
      '<path opacity="0.4" d="M474.36 676.67H469.33V696.02H474.36V676.67Z" fill="#1A2F43"/>' +
      '<path opacity="0.4" d="M492.11 676.67H487.08V696.02H492.11V676.67Z" fill="#1A2F43"/>' +
      '<path opacity="0.4" d="M396.38 676.67H391.35V696.02H396.38V676.67Z" fill="#1A2F43"/>' +
      '<path opacity="0.4" d="M414.14 676.67H409.11V696.02H414.14V676.67Z" fill="#1A2F43"/>' +
      '<path opacity="0.4" d="M435.83 710.27H430.8V729.62H435.83V710.27Z" fill="#1A2F43"/>' +
      '<path opacity="0.4" d="M453.59 710.27H448.56V729.62H453.59V710.27Z" fill="#1A2F43"/>' +
      '<path opacity="0.4" d="M474.36 710.27H469.33V729.62H474.36V710.27Z" fill="#1A2F43"/>' +
      '<path opacity="0.4" d="M492.11 710.27H487.08V729.62H492.11V710.27Z" fill="#1A2F43"/>' +
      '<path opacity="0.4" d="M396.38 710.27H391.35V729.62H396.38V710.27Z" fill="#1A2F43"/>' +
      '<path opacity="0.4" d="M414.14 710.27H409.11V729.62H414.14V710.27Z" fill="#1A2F43"/>' +
      '<path opacity="0.4" d="M435.83 743.87H430.8V763.22H435.83V743.87Z" fill="#1A2F43"/>' +
      '<path opacity="0.4" d="M453.59 743.87H448.56V763.22H453.59V743.87Z" fill="#1A2F43"/>' +
      '<path opacity="0.4" d="M474.36 743.87H469.33V763.22H474.36V743.87Z" fill="#1A2F43"/>' +
      '<path opacity="0.4" d="M492.11 743.87H487.08V763.22H492.11V743.87Z" fill="#1A2F43"/>' +
      '<path opacity="0.4" d="M396.38 743.87H391.35V763.22H396.38V743.87Z" fill="#1A2F43"/>' +
      '<path opacity="0.4" d="M414.14 743.87H409.11V763.22H414.14V743.87Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M1377.65 824.96H1369.85V854.97H1377.65V824.96Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M1401.5 824.96H1393.7V854.97H1401.5V824.96Z" fill="#1A2F43"/>' +
      '<path opacity="0.5" d="M1423.96 824.96H1416.16V854.97H1423.96V824.96Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1912.98 831.2H1907.06V848.08H1912.98V831.2Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1931.53 831.2H1925.61V848.08H1931.53V831.2Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1912.98 831.2H1907.06V848.08H1912.98V831.2Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1931.53 831.2H1925.61V848.08H1931.53V831.2Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1949.06 831.2H1943.14V848.08H1949.06V831.2Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1967.61 831.2H1961.69V848.08H1967.61V831.2Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1912.98 861.46H1907.06V878.34H1912.98V861.46Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1931.53 861.46H1925.61V878.34H1931.53V861.46Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1912.98 861.46H1907.06V878.34H1912.98V861.46Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1931.53 861.46H1925.61V878.34H1931.53V861.46Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1949.06 861.46H1943.14V878.34H1949.06V861.46Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1967.61 861.46H1961.69V878.34H1967.61V861.46Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1912.98 893.67H1907.06V910.55H1912.98V893.67Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1931.53 893.67H1925.61V910.55H1931.53V893.67Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1912.98 893.67H1907.06V910.55H1912.98V893.67Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1931.53 893.67H1925.61V910.55H1931.53V893.67Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1949.06 893.67H1943.14V910.55H1949.06V893.67Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1967.61 893.67H1961.69V910.55H1967.61V893.67Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1987.89 831.2H1981.97V848.08H1987.89V831.2Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1987.89 861.46H1981.97V878.34H1987.89V861.46Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M2006.44 831.2H2000.52V848.08H2006.44V831.2Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1451.24 781.12H1444.88V807.43H1451.24V781.12Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1482.87 781.12H1476.51V807.43H1482.87V781.12Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1514.5 781.12H1508.14V807.43H1514.5V781.12Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1546.14 781.12H1539.78V807.43H1546.14V781.12Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1451.24 835.27H1444.88V861.58H1451.24V835.27Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1482.87 835.27H1476.51V861.58H1482.87V835.27Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1514.5 835.27H1508.14V861.58H1514.5V835.27Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1546.14 835.27H1539.78V861.58H1546.14V835.27Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1451.24 890.77H1444.88V917.08H1451.24V890.77Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1482.87 890.77H1476.51V917.08H1482.87V890.77Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1514.5 890.77H1508.14V917.08H1514.5V890.77Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1546.14 890.77H1539.78V917.08H1546.14V890.77Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1451.24 946.27H1444.88V972.58H1451.24V946.27Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1482.87 946.27H1476.51V972.58H1482.87V946.27Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1514.5 946.27H1508.14V972.58H1514.5V946.27Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1546.14 946.27H1539.78V972.58H1546.14V946.27Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1451.24 996.68H1444.88V1022.99H1451.24V996.68Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1482.87 996.68H1476.51V1022.99H1482.87V996.68Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1514.5 996.68H1508.14V1022.99H1514.5V996.68Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1451.24 1052.91H1444.88V1079.22H1451.24V1052.91Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1482.87 1052.91H1476.51V1079.22H1482.87V1052.91Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1514.5 1052.91H1508.14V1079.22H1514.5V1052.91Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M1546.14 996.68H1539.78V1022.99H1546.14V996.68Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M2170.47 920.22H2163.97V935.32H2170.47V920.22Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M2170.47 944.6H2163.97V959.7H2170.47V944.6Z" fill="#1A2F43"/>' +
      '<path opacity="0.33" d="M2187.14 920.22H2180.64V935.32H2187.14V920.22Z" fill="#1A2F43"/>' +
      '</g>' +
      '<defs>' +
      '<clipPath id="clip0">' +
      '<rect width="2370" height="1225" fill="white"/>' +
      '</clipPath>' +
      '</defs>' +
      '</svg>',
    'HOME__TOP__RIGHT': '<svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<g filter="url(#filter0_d)">' +
      '<path d="M51 33C51 21.402 41.598 12 30 12C18.402 12 9 21.402 9 33C9 44.598 18.402 54 30 54C41.598 54 51 44.598 51 33Z" fill="#1A2F43"/>' +
      '<path d="M37 30L30 24L23 30L23 40L28 40L28 35.5L32 35.5L32 40L37 40L37 30Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '</g>' +
      '<g filter="url(#filter1_d)">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M40.8018 9.13684C45.1043 9.27243 49.0859 9.878 52.1377 10.5731L52.1377 10.573C52.8328 13.6248 53.4384 17.6065 53.5739 21.9089L40.8018 9.13684Z" fill="#1A2F43"/>' +
      '</g>' +
      '<defs>' +
      '<filter id="filter0_d" x="0" y="8" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">' +
      '<feFlood flood-opacity="0" result="BackgroundImageFix"/>' +
      '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>' +
      '<feOffset dy="5"/>' +
      '<feGaussianBlur stdDeviation="4.5"/>' +
      '<feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.27451 0 0 0 0 0.317647 0 0 0 0.15 0"/>' +
      '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>' +
      '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>' +
      '</filter>' +
      '<filter id="filter1_d" x="31.8018" y="0.187012" width="35.7219" height="35.7219" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">' +
      '<feFlood flood-opacity="0" result="BackgroundImageFix"/>' +
      '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>' +
      '<feOffset dy="5"/>' +
      '<feGaussianBlur stdDeviation="4.5"/>' +
      '<feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.27451 0 0 0 0 0.317647 0 0 0 0.15 0"/>' +
      '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>' +
      '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>' +
      '</filter>' +
      '</defs>' +
      '</svg>',
    'HOME__TOP__LEFT': '<svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<g filter="url(#filter0_d)">' +
      '<path d="M17 33C17 21.402 26.402 12 38 12C49.598 12 59 21.402 59 33C59 44.598 49.598 54 38 54C26.402 54 17 44.598 17 33Z" fill="#1A2F43"/>' +
      '<path d="M31 30L38 24L45 30L45 40L40 40L40 35.5L36 35.5L36 40L31 40L31 30Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '</g>' +
      '<g filter="url(#filter1_d)">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M27.1982 9.13684C22.8957 9.27243 18.9141 9.878 15.8623 10.5731L15.8623 10.573C15.1672 13.6248 14.5616 17.6065 14.4261 21.9089L27.1982 9.13684Z" fill="#1A2F43"/>' +
      '</g>' +
      '<defs>' +
      '<filter id="filter0_d" x="8" y="8" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">' +
      '<feFlood flood-opacity="0" result="BackgroundImageFix"/>' +
      '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>' +
      '<feOffset dy="5"/>' +
      '<feGaussianBlur stdDeviation="4.5"/>' +
      '<feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.27451 0 0 0 0 0.317647 0 0 0 0.15 0"/>' +
      '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>' +
      '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>' +
      '</filter>' +
      '<filter id="filter1_d" x="0.476196" y="0.187012" width="35.7219" height="35.7219" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">' +
      '<feFlood flood-opacity="0" result="BackgroundImageFix"/>' +
      '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>' +
      '<feOffset dy="5"/>' +
      '<feGaussianBlur stdDeviation="4.5"/>' +
      '<feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.27451 0 0 0 0 0.317647 0 0 0 0.15 0"/>' +
      '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>' +
      '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>' +
      '</filter>' +
      '</defs>' +
      '</svg>',
    'HOME__TOP': '<svg width="61" height="70" viewBox="0 0 61 70" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<g filter="url(#filter0_d)">' +
      '<path d="M9.66661 35C9.66661 23.402 19.0686 14 30.6666 14C42.2646 14 51.6666 23.402 51.6666 35C51.6666 46.598 42.2646 56 30.6666 56C19.0686 56 9.66661 46.598 9.66661 35Z" fill="#1A2F43"/>' +
      '<path d="M23.6666 32L30.6666 26L37.6666 32V42H32.6666V37.5H28.6666V42H23.6666V32Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '</g>' +
      '<g filter="url(#filter1_d)">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.6666 11.6666C24.8048 8.72023 28.0484 6.33299 30.6978 4.66656V4.66648C33.3472 6.33292 36.5909 8.72019 39.7291 11.6666H21.6666Z" fill="#1A2F43"/>' +
      '</g>' +
      '<defs>' +
      '<filter id="filter0_d" x="0.666611" y="10" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">' +
      '<feFlood flood-opacity="0" result="BackgroundImageFix"/>' +
      '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>' +
      '<feOffset dy="5"/>' +
      '<feGaussianBlur stdDeviation="4.5"/>' +
      '<feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.27451 0 0 0 0 0.317647 0 0 0 0.15 0"/>' +
      '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>' +
      '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>' +
      '</filter>' +
      '<filter id="filter1_d" x="12.6666" y="0.666504" width="36.0625" height="25.0001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">' +
      '<feFlood flood-opacity="0" result="BackgroundImageFix"/>' +
      '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>' +
      '<feOffset dy="5"/>' +
      '<feGaussianBlur stdDeviation="4.5"/>' +
      '<feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.27451 0 0 0 0 0.317647 0 0 0 0.15 0"/>' +
      '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>' +
      '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>' +
      '</filter>' +
      '</defs>' +
      '</svg>',
    'HOME__RIGHT': '<svg width="70" height="60" viewBox="0 0 70 60" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<g filter="url(#filter0_d)">' +
      '<path d="M51 25C51 13.402 41.598 4 30 4C18.402 4 9 13.402 9 25C9 36.598 18.402 46 30 46C41.598 46 51 36.598 51 25Z" fill="#1A2F43"/>' +
      '<path d="M37 22L30 16L23 22V32H28V27.5H32V32H37V22Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '</g>' +
      '<g filter="url(#filter1_d)">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M53.3333 16C56.2797 19.1382 58.667 22.3818 60.3334 25.0312L60.3335 25.0312C58.667 27.6806 56.2798 30.9243 53.3333 34.0625L53.3333 16Z" fill="#1A2F43"/>' +
      '</g>' +
      '<defs>' +
      '<filter id="filter0_d" x="0" y="0" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">' +
      '<feFlood flood-opacity="0" result="BackgroundImageFix"/>' +
      '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>' +
      '<feOffset dy="5"/>' +
      '<feGaussianBlur stdDeviation="4.5"/>' +
      '<feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.27451 0 0 0 0 0.317647 0 0 0 0.15 0"/>' +
      '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>' +
      '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>' +
      '</filter>' +
      '<filter id="filter1_d" x="44.3333" y="12" width="25.0001" height="36.0625" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">' +
      '<feFlood flood-opacity="0" result="BackgroundImageFix"/>' +
      '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>' +
      '<feOffset dy="5"/>' +
      '<feGaussianBlur stdDeviation="4.5"/>' +
      '<feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.27451 0 0 0 0 0.317647 0 0 0 0.15 0"/>' +
      '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>' +
      '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>' +
      '</filter>' +
      '</defs>' +
      '</svg>',
    'HOME__LEFT': '<svg width="70" height="61" viewBox="0 0 70 61" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<g filter="url(#filter0_d)">' +
      '<path d="M19 25.6667C19 14.0688 28.402 4.66675 40 4.66675C51.598 4.66675 61 14.0688 61 25.6667C61 37.2647 51.598 46.6667 40 46.6667C28.402 46.6667 19 37.2647 19 25.6667Z" fill="#1A2F43"/>' +
      '<path d="M33 22.6667L40 16.6667L47 22.6667V32.6667H42V28.1667H38V32.6667H33V22.6667Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '</g>' +
      '<g filter="url(#filter1_d)">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6667 16.6667C13.7203 19.8049 11.333 23.0485 9.6666 25.6979L9.66651 25.6979C11.333 28.3474 13.7202 31.591 16.6667 34.7292L16.6667 16.6667Z" fill="#1A2F43"/>' +
      '</g>' +
      '<defs>' +
      '<filter id="filter0_d" x="10" y="0.666748" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">' +
      '<feFlood flood-opacity="0" result="BackgroundImageFix"/>' +
      '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>' +
      '<feOffset dy="5"/>' +
      '<feGaussianBlur stdDeviation="4.5"/>' +
      '<feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.27451 0 0 0 0 0.317647 0 0 0 0.15 0"/>' +
      '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>' +
      '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>' +
      '</filter>' +
      '<filter id="filter1_d" x="0.666504" y="12.6667" width="25.0001" height="36.0625" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">' +
      '<feFlood flood-opacity="0" result="BackgroundImageFix"/>' +
      '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>' +
      '<feOffset dy="5"/>' +
      '<feGaussianBlur stdDeviation="4.5"/>' +
      '<feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.27451 0 0 0 0 0.317647 0 0 0 0.15 0"/>' +
      '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>' +
      '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>' +
      '</filter>' +
      '</defs>' +
      '</svg>',
    'HOME__BOTTOM__RIGHT': '<svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<g filter="url(#filter0_d)">' +
      '<path d="M9 25C9 13.402 18.402 4 30 4C41.598 4 51 13.402 51 25C51 36.598 41.598 46 30 46C18.402 46 9 36.598 9 25Z" fill="#1A2F43"/>' +
      '<path d="M23 22L30 16L37 22V32H32V27.5H28V32H23V22Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '</g>' +
      '<g filter="url(#filter1_d)">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M40.8018 48.8632C45.1043 48.7276 49.0859 48.122 52.1377 47.4269L52.1377 47.427C52.8328 44.3752 53.4384 40.3935 53.5739 36.0911L40.8018 48.8632Z" fill="#1A2F43"/>' +
      '</g>' +
      '<defs>' +
      '<filter id="filter0_d" x="0" y="0" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">' +
      '<feFlood flood-opacity="0" result="BackgroundImageFix"/>' +
      '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>' +
      '<feOffset dy="5"/>' +
      '<feGaussianBlur stdDeviation="4.5"/>' +
      '<feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.27451 0 0 0 0 0.317647 0 0 0 0.15 0"/>' +
      '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>' +
      '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>' +
      '</filter>' +
      '<filter id="filter1_d" x="31.8018" y="32.0911" width="35.7219" height="35.7219" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">' +
      '<feFlood flood-opacity="0" result="BackgroundImageFix"/>' +
      '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>' +
      '<feOffset dy="5"/>' +
      '<feGaussianBlur stdDeviation="4.5"/>' +
      '<feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.27451 0 0 0 0 0.317647 0 0 0 0.15 0"/>' +
      '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>' +
      '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>' +
      '</filter>' +
      '</defs>' +
      '</svg>',
    'HOME__BOTTOM__LEFT': '<svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<g filter="url(#filter0_d)">' +
      '<path d="M59 25C59 13.402 49.598 4 38 4C26.402 4 17 13.402 17 25C17 36.598 26.402 46 38 46C49.598 46 59 36.598 59 25Z" fill="#1A2F43"/>' +
      '<path d="M45 22L38 16L31 22V32H36V27.5H40V32H45V22Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '</g>' +
      '<g filter="url(#filter1_d)">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M27.1982 48.8632C22.8957 48.7276 18.9141 48.122 15.8623 47.4269L15.8623 47.427C15.1672 44.3752 14.5616 40.3935 14.4261 36.0911L27.1982 48.8632Z" fill="#1A2F43"/>' +
      '</g>' +
      '<defs>' +
      '<filter id="filter0_d" x="8.00002" y="0" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">' +
      '<feFlood flood-opacity="0" result="BackgroundImageFix"/>' +
      '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>' +
      '<feOffset dy="5"/>' +
      '<feGaussianBlur stdDeviation="4.5"/>' +
      '<feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.27451 0 0 0 0 0.317647 0 0 0 0.15 0"/>' +
      '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>' +
      '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>' +
      '</filter>' +
      '<filter id="filter1_d" x="0.476196" y="32.0911" width="35.7219" height="35.7219" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">' +
      '<feFlood flood-opacity="0" result="BackgroundImageFix"/>' +
      '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>' +
      '<feOffset dy="5"/>' +
      '<feGaussianBlur stdDeviation="4.5"/>' +
      '<feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.27451 0 0 0 0 0.317647 0 0 0 0.15 0"/>' +
      '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>' +
      '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>' +
      '</filter>' +
      '</defs>' +
      '</svg>',
    'HOME__BOTTOM': '<svg width="61" height="70" viewBox="0 0 61 70" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<g filter="url(#filter0_d)">' +
      '<path d="M9.66661 25C9.66661 13.402 19.0686 4 30.6666 4C42.2646 4 51.6666 13.402 51.6666 25C51.6666 36.598 42.2646 46 30.6666 46C19.0686 46 9.66661 36.598 9.66661 25Z" fill="#1A2F43"/>' +
      '<path d="M23.6666 22L30.6666 16L37.6666 22V32H32.6666V27.5H28.6666V32H23.6666V22Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '</g>' +
      '<g filter="url(#filter1_d)">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.6666 48.3333C24.8048 51.2797 28.0484 53.667 30.6978 55.3334V55.3335C33.3472 53.667 36.5909 51.2798 39.7291 48.3333H21.6666Z" fill="#1A2F43"/>' +
      '</g>' +
      '<defs>' +
      '<filter id="filter0_d" x="0.666611" y="0" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">' +
      '<feFlood flood-opacity="0" result="BackgroundImageFix"/>' +
      '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>' +
      '<feOffset dy="5"/>' +
      '<feGaussianBlur stdDeviation="4.5"/>' +
      '<feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.27451 0 0 0 0 0.317647 0 0 0 0.15 0"/>' +
      '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>' +
      '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>' +
      '</filter>' +
      '<filter id="filter1_d" x="12.6666" y="44.3334" width="36.0625" height="25.0001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">' +
      '<feFlood flood-opacity="0" result="BackgroundImageFix"/>' +
      '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>' +
      '<feOffset dy="5"/>' +
      '<feGaussianBlur stdDeviation="4.5"/>' +
      '<feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.27451 0 0 0 0 0.317647 0 0 0 0.15 0"/>' +
      '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>' +
      '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>' +
      '</filter>' +
      '</defs>' +
      '</svg>',
    'ALL__CATEGORY__ICON': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"' +
      ' width="19px" height="25px" viewBox="0 0 19 25"><!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --><title>ic_all</title><desc>Created with Sketch.</desc><g id="One-Page" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="0.00-Home-02" transform="translate(-64.000000, -4213.000000)" fill="#FFFFFF" fill-rule="nonzero" stroke="#FFFFFF" stroke-width="0.1"><g id="MAP-&gt;" transform="translate(0.000000, 3571.000000)"><g id="Categories" transform="translate(65.000000, 640.000000)"><g id="All-points"><g id="ic_all" transform="translate(0.000000, 3.000000)"><path d="M8.5,0 C3.8131,0 0,3.75352031 0,8.3671875 C0,9.92599453 0.438647222,11.4472422 1.26881389,12.7670266 L8.01616111,23.4703793 C8.14540833,23.6754219 8.37311389,23.8 8.61800833,23.8 C8.61989722,23.8 8.62173889,23.8 8.62362778,23.8 C8.87064722,23.7980941 9.098825,23.6696578 9.22571111,23.4610359 L15.801075,12.6539766 C16.5854361,11.3620828 17,9.87974258 17,8.3671875 C17,3.75352031 13.1869,0 8.5,0 Z M14.5853389,11.9380242 L8.60728889,21.7633336 L2.47288611,12.0322945 C1.78188333,10.9337758 1.40722222,9.66642578 1.40722222,8.3671875 C1.40722222,4.52246484 4.59425,1.38523438 8.5,1.38523438 C12.40575,1.38523438 15.5880556,4.52246484 15.5880556,8.3671875 C15.5880556,9.62789023 15.2380917,10.8628406 14.5853389,11.9380242 Z" id="Shape"></path><path d="M8.5,4.08 C6.062812,4.08 4.08,5.910288 4.08,8.16 C4.08,10.3953413 6.030546,12.24 8.5,12.24 C10.9999029,12.24 12.92,10.3707707 12.92,8.16 C12.92,5.910288 10.937188,4.08 8.5,4.08 Z M8.5,10.8890667 C6.86671178,10.8890667 5.54351111,9.66357067 5.54351111,8.16 C5.54351111,6.660192 6.875208,5.43093333 8.5,5.43093333 C10.124792,5.43093333 11.4515778,6.660192 11.4515778,8.16 C11.4515778,9.64162933 10.1591698,10.8890667 8.5,10.8890667 Z" id="Shape"></path></g></g></g></g></g></g></svg>',
    'SATELLITE__ICON': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M14.0156 6L23.0156 18H0.984375L6.98438 9.98438L11.4844 15.9844L13.0781 14.8125L10.2656 11.0156L14.0156 6Z" fill="white"/>' +
      '</svg>',
    'MAP__ICON': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M9.54734 7.09475L4.64209 3.82458V16.9053L9.54734 20.1754V7.09475Z" fill="white" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M19.3579 7.09475L14.4526 3.82458V16.9053L19.3579 20.1754V7.09475Z" fill="white" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M4.64209 16.9053L9.54734 20.1754L14.4526 16.9053L19.3579 20.1754V7.09475L14.4526 3.82458L9.54734 7.09475L4.64209 3.82458V16.9053Z" stroke="white" stroke-width="1.6" stroke-linejoin="round"/>' +
      '</svg>'
};
