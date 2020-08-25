/**
 * Define Global Variables
 *
*/

let func = ''

/** @constant
    @type {array}
    @global
    @description Hold months' names .
*/
const months= ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const languages = [{value:'&lang=ar',text:'Arabic'},{value:'&lang=de',text:'German'},
                   {value:'&lang=en',text:'English'},{value:'&lang=fr',text:'French'},
                   {value:'&lang=it',text:'Italian'}];

/** @constant
    @type {string}
    @global
    @description Hold reference to open weather map api url.
*/
const baseApiUrl = 'https://api.openweathermap.org/data/2.5/weather';

/** @type {object}
    @global
    @description Hold reference coordinate oject.
*/
let coord = '';

/** @constant
    @type {string}
    @global
    @description Hold reference to my open weather map api key.
*/
const  apiKey=select("#api");

/** @constant
    @type {object}
    @global
    @description Hold reference to language select element.
*/
const  languageSelect=select("#lang");


/** @constant
    @type {object}
    @global
    @description Hold refrence to flag image element.
*/
const  flag=select("#flag");


/** @constant
    @type {object}
    @global
    @description Hold refrence to weather image element.
*/
const  weather=select("#weather");

/** @constant
    @type {object}
    @global
    @description Hold refrence to rise element.
*/
const  rise=select("#rise");


/** @constant
    @type {object}
    @global
    @description Hold refrence to down element.
*/
const  down=select("#down");

/** @constant
    @type {object}
    @global
    @description Hold refrence current weather description.
*/
const  description=select("#des");


/** @constant
    @type {object}
    @global
    @description Hold reference to get button html element.
*/
const getButton = select('#get');



/** @constant
    @type {object}
    @global
    @description Hold reference to  button html element.
*/
const saveButton = select('#save');

/** @constant
    @type {object}
    @global
    @description Hold reference to  button html element.
*/
const retrieveButton = select('#ret');

/** @constant
    @type {object}
    @global
    @description Hold reference to  button html element.
*/
const deleteButton = select('#del');


/** @constant
    @type {object}
    @global
    @description Hold reference to fill button html element.
*/
const fillButton = select('#fill');

/** @constant
    @type {object}
    @global
    @description Hold reference to zip code input text.
*/
const zipInput =select('#zip');


/** @constant
    @type {object}
    @global
    @description Hold reference to City Name input text.
*/
const cityInput =select('#city');

/** @constant
    @type {object}
    @global
    @description Hold reference to longitude input text.
*/
const lonInput =select('#lon');

/** @constant
    @type {object}
    @global
    @description Hold reference to latitude input text.
*/
const latInput =select('#lat');

/** @constant
    @type {object}
    @global
    @description Hold reference to date div.
*/
const date = select('#date');


/** @constant
    @type {object}
    @global
    @description Hold reference to time div.
*/
const time = select('#time');

/** @constant
    @type {object}
    @global
    @description Hold reference to temp div.
*/
const temp = select('#temp');


/** @constant
    @type {object}
    @global
    @description Hold reference to city id text.
*/
const cityIdInput = select('#cityId');

/** @constant
    @type {object}
    @global
    @description Hold reference to units.
*/
const unitSelect = select('#unit');

/** @constant
    @type {object}
    @global
    @description Hold reference to visisablity.
*/
const visisablity = select('#vis');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

/**
* @function  changeDivInnerHTML
* @description Change innnerHTML of a specific div, adds prefix at the start  of text 
* @param {object} elem
* @param {string} prefix
* @param {string} test
*/
changeDivInnerHTML = (ele,text)=>{ele.innerHTML=`${text}`;}

/**
* @function  getFlatCountrFlageByCountryCode
* @description set the image element href to the approiate country href from country api
* @param {string} code
* @param {object} imageElement
* @param {string} style
*/
getCountryFlageByCountryCodeAndStyle =( imageElement,code,style )=> {
    imageElement.src = `https://www.countryflags.io/${code}/${style}/64.png`;
}


/**
* @function  drawOpenLayersMapOnPage
* @description Draw the map from open layer map using coord  
* @param {object} coord
*/
drawOpenLayersMapOnPage = coord =>{
    map = new OpenLayers.Map("mapdiv");
    map.addLayer(new OpenLayers.Layer.OSM());
    var lonLat = new OpenLayers.LonLat( coord.lon ,coord.lat)
          .transform(
            new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
            map.getProjectionObject() // to Spherical Mercator Projection
          );
    var zoom=16;
    var markers = new OpenLayers.Layer.Markers( "Markers" );
    map.addLayer(markers);
    markers.addMarker(new OpenLayers.Marker(lonLat));
    map.setCenter (lonLat, zoom);

}


/**
* @function  intilizeMap
* @description Removes existing map and redraw it again otherwide draw it 
* @param {object} coord
*/
intilizeMap = coord => {

let x =document.getElementById('mapdiv').children.length;

   if(x===0){
        drawOpenLayersMapOnPage(coord);
    }else{
        let  temp  = document.getElementById('mapdiv');
        temp.removeChild(temp.children[0]);
        drawOpenLayersMapOnPage(coord);
    }
}



/**
* @function  select
* @description Return object selected by querySelector specified by the query 
* @param {string} query
* @returns {object} Selected html element
*/
function select(query){
    return document.querySelector(query);
}


/**
* @function  getDate
* @description Return object selected by querySelector specified by the query 
* @returns {string} Current date concatenated with current time 
*/
getDate = ()=> { return `${currentDate()} ${currentTime()}`}


/**
* @function  fullZipUrl
* @description Return a complete url for open weather map api with temp in metric system
* @param {string} zip
* @returns {string} Complete url to the open weather map api with zip code and api key
*/
fullZipUrl = zip =>{return`${baseApiUrl}?zip=${zip},us&appid=${text(apiKey)}`;}


/**
* @function  fullCityUrl
* @description Return a complete url for open weather map api with temp in metric system city search
* @param {string} zip
* @returns {string} Complete url to the open weather map api with city name and api key 
*/
fullCityUrl = city =>{return`${baseApiUrl}?q=${city}&appid=${text(apiKey)}`;}

/**
* @function  fullLatLonUrl
* @description Return a complete url for open weather map api with temp in metric system city search
* @param {string} lat
* @param {string} lon
* @returns {string} Complete url to the open weather map api with latitude and longitude 
*/
fullLatLonUrl = (lat, lon) =>{return`${baseApiUrl}?lat=${lat}&lon=${lon}&appid=${text(apiKey)}`;}



/**
* @function  fullCityIdUrl
* @description Return a complete url for open weather map api with temp in metric system city search
* @param {string} id
* @returns {string} Complete url to the open weather map api with city ip 
*/
fullCityIdUrl = (id) =>{return`${baseApiUrl}?id=${id}&appid=${text(apiKey)}`;}

/**
* @function  getIconById
* @description Return image related to current weather specified by id
* @param {string} id
* @returns {string} Url of the image on the open weather map
*/
getIconById = id =>{return `http://openweathermap.org/img/wn/${id}.png`;}


/**
* @function  changeTitle
* @description Change innnerHTML of the title of the page 
* @param {string} text
*/
changeTitle = text => {
    const title =select('title');
    title.innerHTML=text;
}

/**
* @function  log
* @description Log the message and prefix to the console 
* @param {string} prefix
* @param {string} title
*/
log = (title,msg) => {console.log(title,msg);}

/**
* @function  checkInputFields
* @description Check input fields for missing input 
* @returns {bool}  Resluts of check true some filed is empty otherwise false
*/
checkInputFields = () => {
    if(text(zipInput)!==''){
        return true;
    }else{
        false;
    }
}

/**
* @function  text
* @description Return the text value of any input element specified in the parameter 
* @param {object} ele
* @returns {string} Text content of element  
*/
text = ele => {return ele.value;}

/**
* @function  innerHTML
* @description Return the text value of any input element specified in the parameter 
* @param {object} prefix
* @returns {string} InnerHTML content 
*/
innerHTML = ele => { return ele.innerHTML }


/**
* @function  changeFavIconById
* @description Return the text value of any input element specified in the parameter 
* @param {string}  id of the image on the open weather website
*/
changeFavIconById = id => { select('link').setAttribute('href',getIconById(id));}

/**
* @function  currentDate
* @description Create and return current date dynmically 
* @returns {string} Date in the following format dd\mm\yyyy 
*/
currentDate = () => {
    const now = new Date();
    return `${now.getDate()}\\${(now.getMonth()+1)}\\${now.getFullYear()}`
 }

/**
* @function  getCurrentMonthName
* @description returns the name of the current month 
* @returns {string} Name of the current month shortend into 3 letters 
*/
getCurrentMonthName= () => {
    const now = new Date();
    return `${months[now.getMonth()]}`
 }


 /**
* @function  getCurrentDay
* @description Returns current day of the month
* @returns {string} Current day of the month  
*/
getCurrentDay = () => {
    const now = new Date();
    return `${now.getDate()}`
 }


/**
* @function  showHiddenContentDivById
* @description Show hidden div content using id 
* @param {string}  id of the div to be shown
*/
showHiddenContentDivById = (id) => {
   select('#'+id).style.display="block";
}

 /**
* @function  currentTime
* @description Return the text value of any input element specified in the parameter 
* @returns {string} Return current time in the following format hh:mm:ss
*/
currentTime = () => {const now = new Date();
    return `${now.getHours()}:${now.getMinutes()+1}:${now.getSeconds()}`
}

/**
* @function  changeInenerHTMLContentById
* @description Change the innner HTML content of an element 
* @param {string}  content for changing the current inner contnet of the element
* @param {string}  id of the element we want to change it's innerHTMl content
*/
changeInenerHTMLContentById = (content,id) => {
    document.getElementById(id).innerHTML=content;
}


 /**
* @function  getDegreeUnitFromUnit
* @description Return the units  part of the url to be added to rest of the Url
* @returns {string} the selected unit to be presented to the user 
*/
getDegreeUnitFromUnit = ()=>{
    switch(unitSelect.value){
        case '&units=metric': return ' &#8451' ;break;
        case '&units=imperial': return ' &#8457;' ;break;
        default: return ' &#8490;' ;break;
    }
}


 /**
* @function  setTimeInDivById
* @param {number}  time number of second from the target location as current date time 
* @description Update current time from the target location 
*/
setTimeInDivById = (target,t)=>{
    let x = new Date(t);
    let period = getAmOrPm(x.getHours());
    changeDivInnerHTML(target,`${checkDigits(x.getHours())}:${checkDigits(x.getMinutes())}:${checkDigits(x.getSeconds())} ${period}`);
}

/**
* @function  getAmOrPm
* @description get time of the day AM or PM
* @param {number} hour of the day 
* @returns {string} current time of the day 
*/
getAmOrPm = (hour) =>{
    if(hour>=12)
        return"PM";
    else
        return"AM";
}




 /**
* @function  checkDigits
* @param {number}  digit number to add 0 before single digit 
* @description add zero to start of any single digital number 
*/
checkDigits = (digit)=>{

    if(digit<10)
        return '0'+digit;
    else
        return digit;
}

/**
* @function  saveDataToLocalStorage
* @param {object}  data to be stored 
* @param {string}  key string key to access the data
* @description Stores data to the local stroage after converting to string.
*/
saveDataToLocalStorage = (key,data)=>{
    if(checkType(data)==='String')
        localStorage.setItem(key,data);
    else
        localStorage.setItem(key,JSON.stringify(data));
}


/**
* @function  getDataFromLocalStorage
* @param {string}  key string key to access the data
* @description retrieve the data from the local storage.
* @returns  data from the local storage 
*/
getDataFromLocalStorage = (key)=>{
 return JSON.parse(localStorage.getItem(key));
}


/**
* @function  removeDataFromLocalStorage
* @param {string}  key string key to access the data
* @description retrieve the data from the local storage.
*/
removeDataFromLocalStorage = (key)=>{ localStorage.removeItem(key);}


/**
* @function  checkType
* @param {object}  data to be stored 
* @description check the type of the object.
* @returns return the type of the object
*/
checkType = (data)=>{
    return typeof data;
}


/**
* @function  filLanguageSelect
* @param {object}  data to be stored 
* @description check the type of the object.
* @returns return the type of the object
*/
filLanguageSelect= (target) =>{

    for(lang of languages){
        let x = document.createElement('option');
        x.setAttribute('value',lang.value);
        x.innerHTML=lang.text;
        console.log(x);
        target.appendChild(x);
    }

}
  
filLanguageSelect(languageSelect);

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

 /**
* @async
* @function  getWeatherDataFromOpenWeartherApi
* @description Return the text value of any input element specified in the parameter 
* @param {string} url For get action usually the open weather map api call to get temprature 
* @returns {object} Consisted of three value date, temperature and finally feeling of the user
*/
getWeatherDataFromOpenWeartherApi = async url => {
   
    let completeUrl = url+unitSelect.value+languageSelect.value;
    console.log(completeUrl);
    const response = await fetch(completeUrl);
    try{
    
      
       const data = await response.json();
        if(data.cod===200){
       showHiddenContentDivById('content');
       let unit = getDegreeUnitFromUnit();
       console.log(data);
       getCountryFlageByCountryCodeAndStyle(flag, data.sys.country,'flat');
       
       let current = data.main;
       intilizeMap(data.coord);
        weather.src=getIconById(data.weather[0].icon);
      

       changeDivInnerHTML(temp,current.temp+unit);
       changeDivInnerHTML(description,data.weather[0].description);
       changeDivInnerHTML(date,`${getCurrentMonthName()}, ${getCurrentDay()}`);

       changeInenerHTMLContentById(`${data.name},${data.sys.country}`,'loc');
       changeInenerHTMLContentById(data.wind.speed,'wind');
       changeInenerHTMLContentById(data.wind.deg,'dir');
       changeInenerHTMLContentById(current.humidity,'hum');
       changeInenerHTMLContentById(current.pressure,'pre');
       changeInenerHTMLContentById(data.visibility+" &#13214;",'vis')
       

       

       changeInenerHTMLContentById(current.feels_like+unit,'like');
       changeInenerHTMLContentById(current.temp_min+unit,'min');
       changeInenerHTMLContentById(current.temp_max+unit,'max');
    }
    }catch(error){
        console.log(error);
        alert(error);
    }
}



/**
 * End Main Functions
 * Begin Events
 *
*/

/**
* @function  error
* @description when the geolocation failed     
* @callback getCurrentPosition
*/
 error = () => {
    alert('Unable to retrieve your location');
  }



/**
* @function  success
* @description when the geolocation success 
* @param {object} position of the current user 
* @callback getCurrentPosition
*/
success = (position) => {
latInput.value = position.coords.latitude;
lonInput.value= position.coords.longitude;
 getWeatherDataFromOpenWeartherApi(fullLatLonUrl(text(latInput),text(lonInput)));
  }


/**
 * @description Handle on get button click event
 */
getButton.addEventListener('click',() => {

    if(apiKey.value!==''){
      let x = document.querySelectorAll('input[type="text"]');
   
        for(i of x){
                if(i.id==='zip' && i.value!==''){
                    getWeatherDataFromOpenWeartherApi(fullZipUrl(text(zipInput)))
                    break;
                }else if(i.id==="city" && i.value!==''){
                    getWeatherDataFromOpenWeartherApi(fullCityUrl(text(cityInput)))
                    break;
                }else if(i.id==="cityId" && i.value!==''){  
                     getWeatherDataFromOpenWeartherApi(fullCityIdUrl(text(cityIdInput)))
                     break;       
                } if(i.id==="lon" && i.value!==''){  
                    getWeatherDataFromOpenWeartherApi(fullLatLonUrl(text(latInput),text(lonInput)))
                    break;       
               }
        }
    }else{

        alert('Make Sure the api Key is provided');
    }
})

fillButton.addEventListener('click', (e)=>{
    e.preventDefault();
    if(apiKey.value!==''){
    navigator.geolocation.getCurrentPosition(success, error);
    }else{
        alert("Make Sure you have your Api key");
    }
});


saveButton.addEventListener('click' , (e)=>{
    e.preventDefault();
    saveDataToLocalStorage('api',apiKey.value);

});

deleteButton.addEventListener('click' , (e)=>{
    e.preventDefault();
    apiKey.value='';
    removeDataFromLocalStorage('api');
});

retrieveButton.addEventListener('click' , (e)=>{
    e.preventDefault();
    apiKey.value= getDataFromLocalStorage('api')
    
});

