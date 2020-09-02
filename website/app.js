/**
 * Define Global Variables
 *
*/

/** @constant
    @type {array}
    @global
    @description Hold months' names.
*/
const months= ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];


/** @constant
    @type {array}
    @global
    @description Hold languages' names.
*/
const languages = [{value:'&lang=ar',text:'Arabic'}
                  ,{value:'&lang=de',text:'German'},
                   {value:'&lang=en',text:'English'},
                   {value:'&lang=fr',text:'French'},
                   {value:'&lang=it',text:'Italian'},
                   {value:'&lang=af',text:'Afrikaans'},
                   {value:'&lang=al',text:'Albanian'},
                   {value:'&lang=az',text:'Azerbaijani'},
                   {value:'&lang=bg',text:'Bulgarian'},
                   {value:'&lang=ca',text:'Catalan'},
                   {value:'&lang=cz',text:'Czech'},
                   {value:'&lang=da',text:'Danish'},
                   {value:'&lang=el',text:'Greek'},
                   {value:'&lang=eu',text:'Basque'},
                   {value:'&lang=fa',text:'Persian (Farsi)'},
                   {value:'&lang=fi',text:'Finnish'},
                   {value:'&lang=gl',text:'Galician'},
                   {value:'&lang=he',text:'Hebrew'},
                   {value:'&lang=hi',text:'Hindi'},
                   {value:'&lang=hr',text:'Croatian'},
                   {value:'&lang=hu',text:'Hungarian'},
                   {value:'&lang=id',text:'Indonesian'},
                   {value:'&lang=ja',text:'Japanese'},
                   {value:'&lang=kr',text:'Korean'},
                   {value:'&lang=la',text:'Latvian'},
                   {value:'&lang=it',text:'Lithuanian'},
                   {value:'&lang=mk',text:'Macedonian'},
                   {value:'&lang=no',text:'Norwegian'},
                   {value:'&lang=nl',text:'Dutch'},
                   {value:'&lang=pl',text:'Polish'},
                   {value:'&lang=pt',text:'Portuguese'},
                   {value:'&lang=pt_br',text:'Portuguese (Brazil)'},
                   {value:'&lang=ro',text:'Romanian'},
                   {value:'&lang=ru',text:'Russian'},
                   {value:'&lang=sv',text:'Swedish'},
                   {value:'&lang=sk',text:'Slovak'},
                   {value:'&lang=sl',text:'Slovenian'},
                   {value:'&lang=sp',text:'Spanish'},
                   {value:'&lang=sr',text:'Serbian'},
                   {value:'&lang=th',text:'Thai'},
                   {value:'&lang=tr',text:'Turkish'},
                   {value:'&lang=ua',text:'Ukrainian'},
                   {value:'&lang=vi',text:'Vietnamese'},
                   {value:'&lang=zh_cn',text:'Chinese Simplified'},
                   {value:'&lang=zh_tw',text:'Chinese Traditional'},
                   {value:'&lang=zu',text:'Zulu'}]



/** @constant
    @type {array}
    @global
    @description Hold days' limit on the time machine api call.
*/
const days = [ {value:1 , text:'1 Day'},
               {value:2 , text:'2 Days'},
               {value:3 , text:'3 Days'},
               {value:4 , text:'4 Days'},
               {value:5 , text:'5 Days'}]

/** @constant
    @type {array}
    @global
    @description Hold days' limit on the time machine api call.
*/
const requests = [ {value:1 , text:'Current'},
               {value:2 , text:'Daily'},
               {value:3 , text:'Hourly'},
               {value:4 , text:'Mintly'},
               {value:5 , text:'Time Machine'}]

/** @constant
    @type {array}
    @global
    @description Hold links' names.
*/
const links = [{href:"index.html",text:"Current"}] 


/** @constant
    @type {string}
    @global
    @description Hold reference to open weather map api url.
*/
const baseApiUrl = 'https://api.openweathermap.org/data/2.5/weather';


/** @constant
    @type {string}
    @global
    @description Hold reference to open weather one call url.
*/
const baseOneCallUrl = 'https://api.openweathermap.org/data/2.5/onecall';


/** @constant
    @type {string}
    @global
    @description Hold reference to open weather one call url time machine .
*/
const baseOneCallTimeMachineUrl = 'https://api.openweathermap.org/data/2.5/onecall/timemachine';


/** @type {object}
    @global
    @description Hold reference coordinate oject.
*/
let coord = '';

/** @constant
    @type {object}
    @global
    @description Hold reference input whose content is apis open weather map api key.
*/
const  apiKey=select("#api");

/** @constant
    @type {string}
    @global
    @description Hold reference to user open weather map api key.
*/
const  apiKeyString='';

/** @constant
    @type {object}
    @global
    @description Hold reference to navigation bar.
*/
const  navigation=document.querySelector('#collapsibleNavbar');


/** @constant
    @type {object}
    @global
    @description Hold reference to language select element.
*/
const  languageSelect=select("#lang");



/** @constant
    @type {object}
    @global
    @description Hold reference to request select element.
*/
const  requestSelect=select("#request");

/** @constant
    @type {object}
    @global
    @description Hold reference to number of days ago select element.
*/
const  agoSelect=select("#ago");

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
    @description Hold reference to  daily select.
*/
const dailyList = select('#daily');



/** @constant
    @type {object}
    @global
    @description Hold reference to hourly select.
*/
const hourlyList = select('#hourly');

/** @constant
    @type {object}
    @global
    @description Hold reference to miutly select.
*/
const miutlyList = select('#miutly');


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
* @function  setTheme
* @description change the current theme with provided theme name .
* @param {string}  theme to be set for the entire document.
*/
setTheme = (theme)=>{
    let x= document.getElementById('bulb');
    if(theme==='light'){
        x.classList.remove('fas');
        x.classList.add('far');
        x.title="light on";
    }else{
        x.classList.remove('far');
        x.classList.add('fas');
        x.title="light off";
    }
    localStorage.setItem('theme',theme);
    document.documentElement.className=theme;
}


/**
* @function  allTemperatures
* @description convert object data into string to be printed  .
* @param {object}  obj we want to convert into string to be printed.
* @param {string}  unit to be be added at the end of the object.
*/
allTemperatures =(obj,unit)=>{ 
    return `Day:${obj.day+unit}\n 
    Evening:${obj.eve+unit} Morning:${obj.morn+unit} Night:${obj.night+unit} Max:${obj.max+unit} Min:${obj.min+unit}`
     }


/**
* @function  extractObjectDataFromResponseData
* @description extract data from the api response and represent it in a clearer manner.
* @param {object}  item object from the api reponse.
* @returns {object} object to represent the clear version of the resposne 
*/
extractObjectDataFromResponseData = (item) =>{
    
   return {dateTime:item.dt, 
          sunRise:item.sunrise,
          sunSet:item.sunset,
          temperature:item.temp,
        
          allData: function (unit) { return [`${getDateFromSeconds(this.dateTime)}` , `${allTemperatures(this.temperature,unit.value)}`]; } 
}}


/**
* @function  extractObjectFromMinuteData
* @description extract data from the api response and represent it in a clearer manner.
* @param {object}  item object from the api reponse.
* @returns {object} object to represent the clear version of the resposne 
*/
extractObjectFromMinuteData =(item)=>{
    return { min:item.dt,
            rain:item.precipitation,
            allData: function (){return [`${getTimeFromSeconds( this.min)}`,`${this.rain}`]}}

}


/**
* @function  extractObjectFromHourData
* @description extract data from the api response and represent it in a clearer manner.
* @param {object}  item object from the api reponse.
* @returns {object} object to represent the clear version of the resposne 
*/
extractObjectFromHourData = (item) => {
        return {
            hour:item.dt,
            cloud:item.clouds,
            feels:item.feels_like,
            humidity:item.humidity,
            pressure:item.pressure,
            temperature:item.temp,
            visibility:item.visibility,
            windSpeed: item.wind_speed,
            windDegree: item.wind_deg,
            main:item.weather[0].main,
            sub:item.weather[0].description,   
            icon:item.weather[0].icon,
            allData: function (unit){return [ `${getTimeFromSeconds(this.hour)}`,
             `${this.temperature} ${unit}`, 
             `${this.feels} ${unit}`, 
             `${this.humidity}`,
             `${this.pressure}`,
             `${this.visibility}`,
             `${this.windSpeed}`,
             `${this.windDegree}`,
             `${this.main}`,
             `${this.sub}`,
             `${this.icon}` ]}
        }
}


/**
* @function  
* @description extract data from the api response and represent it in a clearer manner.
* @param {object}  item object from the api reponse.
* @returns {object} object to represent the clear version of the resposne 
*/
createListItemFromObject = (object) =>{
    let listItem =document.createElement("li");

    let dateTimeDiv =document.createElement("div");
    dateTimeDiv.textContent=object.dateTime;
 }



/**
* @function  toggleTheme
* @description toggle between two themes .
*/
toggleTheme = () =>{

    if(localStorage.getItem('theme')==='light')
        setTheme('dark');
    else 
        setTheme('light');
}


/**
* @function  RetrieveTheme
* @description retrieves the theme from the local storage .
*/
RetrieveTheme = () =>{
    const theme = localStorage.getItem('theme')
    setTheme(theme);
}


/**
* @function  checkApiKeyIsSuppliedInCode
* @description check for apikey in the code if exist show success message otherwise it make api key section visiable .
*/
checkApiKeyIsSuppliedInCode = ()=>{

    if(apiKeyString===''){
        const x =document.querySelector('.form-inline');
        x.style.display='block';
    }else{
        showToastWithTitleAndMessageWithDelay('Success','Api Key have been successfully added',3000);
        apiKey.value=apiKeyString;
    }
}


/**
* @function  setActiveClassForNavBarFromUrl
* @description Set active class from the current url.
*/
setActiveClassForNavBarFromUrl = ()=> {
    const link = getlastUrlFromCompleteUrl(window.location.pathname);
    const items = document.querySelectorAll('.nav-item');
    for(item of items){
      
        if( getlastUrlFromCompleteUrl(item.children[0].href)===link){
            item.children[0].classList.add('active');
        }
    }
}

/**
* @function  getlastUrlFromCompleteUrl
* @description Trim the last part of the url .
* @param {string}  url to be trimmed at the end.
* @returns Return last part of the url 
*/
getlastUrlFromCompleteUrl = (url)=>{
    return  url.split('/')[url.split('/').length-1]
}


/**
* @function  createNavBar
* @description Create nav bar dynmically .
*/
/*
createNavBar = () =>{
    const unorderedList = document.createElement('ul');
    unorderedList.classList.add('navbar-nav');
    for(link of links){
        const listItem = document.createElement('li');
        listItem.classList.add('nav-item');
        const anchor = document.createElement('a');
        anchor.href=link.href;
        anchor.text=link.text;
        anchor.classList.add('nav-link');
        listItem.appendChild(anchor);
        unorderedList.appendChild(listItem);
    }
    navigation.appendChild(unorderedList);
}*/


/**
* @function  generateDynamicNavbar
* @description Generate dynamic navbar from json list of objects .
*//*
generateDynamicNavbar = ()=> {

    if(navigation.children.length===0){
        createNavBar();
    }else{
        navigation.removeChild(navigation.children[0]);
        createNavBar();
    }
}
*/

/**
* @function  fillSelect
* @param {object}  target select element to append options to 
* @param {array}  list options to be added to the select element
* @description  populate the target select element with option from list.
*/
fillSelect= (target, list) =>{

    for(item of list){
        let x = document.createElement('option');
        x.setAttribute('value',item.value);
        x.innerHTML=item.text;
        target.appendChild(x);
    }

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
* @function  start
* @description call methods at the start run of the page 
*/
start = () =>{
    RetrieveTheme();
    //generateDynamicNavbar();
    setActiveClassForNavBarFromUrl();
    fillSelect(languageSelect,languages);
    fillSelect(requestSelect,requests);
    checkApiKeyIsSuppliedInCode();
    fillSelect(agoSelect,days);
    apiKey.value=getDataFromLocalStorage('api');
    getButton.disabled =true;
}


start();


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
    try{
    map = new OpenLayers.Map("mapdiv");
    map.addLayer(new OpenLayers.Layer.OSM());
    var lonLat = new OpenLayers.LonLat( coord.lon ,coord.lat)
          .transform(
            new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
            map.getProjectionObject(), // to Spherical Mercator Projection
          );
        
    var zoom=16;
    var markers = new OpenLayers.Layer.Markers( "Markers" );
    map.addLayer(markers);
    markers.addMarker(new OpenLayers.Marker(lonLat));
    map.setCenter (lonLat, zoom);}
    catch(error){
        console.log('catch');
        console.log(error);
        showToastWithTitleAndMessageWithDelay("Error",error,3000);
    }
 
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
    }else if(x===1){
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
* @function  getDateFromSeconds
* @description convert date from seconds in to string 
* @param {number} seconds represent the number  of second in the current date
* @returns {string} complete date in string
*/
getDateFromSeconds = (seconds)=> { 
    let x = new Date(seconds* 1000);
    let t = x.toUTCString().slice(0,16);

    return `${t}`}


/**
* @function  getTimeFromSeconds
* @description convert Time from seconds in to string 
* @param {number} seconds represent the number  of second in the current date
* @returns {string} complete time  in string
*/
getTimeFromSeconds = (seconds)=> { 
    let x = new Date(seconds* 1000);
    let t = x.toUTCString().slice(15,25);

    return `${t}`}


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
* @function  fullOneCallApiUrl
* @description Return a complete url for open weather map api with temp in metric system city search
* @param {string} lat
* @param {string} lon
* @returns {string} Complete url to the open weather map api with latitude and longitude 
*/
fullOneCallApiUrl = (lat, lon) =>{return`${baseOneCallUrl}?lat=${lat}&lon=${lon}&appid=${text(apiKey)}`;}



/**
* @function  getTimeOfPreviousDays
* @description Return the date of previous days specicied by day
* @param {number} day is the number of days we want to go back to 
* @returns {number} the number of 
*/
getTimeOfPreviousDays = (day)=> {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",day);
    let x = new Date();
    console.log(x.getTime());
    x.setDate(x.getDate()- parseInt(day));
    console.log(x.getTime());
    return( Math.round( x.getTime()/1000));
}


/**
* @function  fullOneCallApiTimeMachineUrl
* @description Return a complete url for open weather map api for time machine api endpoint
* @param {string} lat latitude 
* @param {string} lon longitude 
* @param {string} ago number of day to go back to in the pask 
* @returns {string} Complete url to the open weather map api with latitude and longitude and time in the past (5 days max)
*/
fullOneCallApiTimeMachineUrl = (lat, lon, ago) =>{return`${baseOneCallTimeMachineUrl}?lat=${lat}&lon=${lon}&dt=${getTimeOfPreviousDays(ago)}&appid=${text(apiKey)}`;}


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
        case '&units=metric': return ' &#176;&#8451' ;break;
        case '&units=imperial': return ' &#176;&#8457;' ;break;
        default: return ' &#176;&#8490;' ;break;
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
* @function  checkType
* @param {object}  data to be stored 
* @description check the type of the object.
* @returns return the type of the object
*/
checkType = (data)=>{
    return typeof data;
}


/**
* @function  showToastWithTitleAndMessageWithDelay
* @param {string}  title  to be shown  
* @param {string}  message to be shown  
* @param {string}  delay to be after tha the message will removed 
* @description shows the toast with set of paramters.
*/
showToastWithTitleAndMessageWithDelay = (title, message, delay)=>{

    document.getElementsByTagName('strong')[0].textContent = title;
    document.getElementsByClassName('toast-body')[0].textContent =message;
    document.getElementsByClassName('toast')[0].setAttribute('data-delay',delay);
    $(document).ready(function(){
        $('.toast').toast({animation: true});
        $('.toast').toast('show');
      });

}
  

/**
* @function  setUnitOfInnerHTML
* @param {string}  unit  to be shown  
* @description add temperature measurement unit to the end of the holder class element.
*/
setUnitOfInnerHTML = (unit)=>{

    const x = document.querySelectorAll('.holder');
     for(item of x){
        
        item.innerHTML= " "+unit;
     }
}


/**
* @function  amOrPmFromString
* @param {date}  time  date to add period and return as string
* @description shows the toast with set of paramters.
* @returns time with period 
*/
amOrPmFromString = (time) =>{

    let period ='';
    const hour = time.split(':')[0];
    if(parseInt(hour)>=12)
        period='PM'
    else
        period="AM"
    return `${time} ${period}`
}


/**
* @function  createNewSpanFromStyleContent
* @param {string}  style  of the span
* @param {string}  content  content of the span
* @description create new span from style and content.
* @returns {object} new  span 
*/
createNewSpanFromStyleContent = (style,content) => {
    let span =  document.createElement('span');
    span.classList.add('badge');
    span.classList.add(style);
    span.classList.add('badge-pill');
    span.innerHTML= content;
    return span;
}


/**
* @function  createNewSpanFromStyleContentWithIcon
* @param {string}  style  of the span
* @param {string}  content  content of the span
* @param {array}  clases  font awesome icons as string in array 
* @description create new span from style, content and array.
* @returns {object} new  span 
*/
createNewSpanFromStyleContentWithIcon = (style,content,clases) => {

    let span =  document.createElement('span');
    span.classList.add('badge');
    span.classList.add(style);
    span.classList.add('badge-pill');
    span.innerHTML= content;

    let i = document.createElement('i');
    i.classList.add(clases[0]);
    i.classList.add(clases[1]);
    span.appendChild(i);
    return span;

}


/**
* @function  createWeatherImageFromIconId
* @param {string}  id  from the api that is used for weather icon 
* @description get it and return complete url of the image.
* @returns {string} image url 
*/
createWeatherImageFromIconId = (id) =>{
 let x =  document.createElement('img');
 x.classList.add('rounded');
 x.src= getIconById(id);
 
return x;
}


/**
* @function  createListItem 
* @description return new list item element.
* @returns {obect} new list item 
*/
createListItem = () =>{
    return document.createElement('li');
}


/**
* @function  createListItem 
* @description return new list item element.
* @param {object} li list item to append ele to 
* @param {object} ele the element to be appened to the li 
*/
appendChildToListItem = (li,ele)=>{

    li.appendChild(ele);
} 



/**
* @function  appendMintlyDataTo
* @description return new list item element.
* @param {object} ele to append data to 
* @param {array} data the element to be appened to ele 
*/
appendMintlyDataTo = (ele, data)=>{
    for(minute of data){
        let res = extractObjectFromMinuteData(minute);
        let li = createListItem();
        li.classList.add('list-group-item');
        li.classList.add('list-group-item-dark');
        let min = createNewSpanFromStyleContent('badge-dark',amOrPmFromString(res.allData()[0].slice(2,)));
        let rain = createNewSpanFromStyleContentWithIcon('badge-dark',res.allData()[1]+" &#13212; ",['fas','fa-cloud-rain']);
        li.appendChild(min);
        li.appendChild(rain);
        ele.appendChild(li);
    }
    
} 


/**
* @function  appendHourlyDataTo
* @description return new list item element.
* @param {object} ele to append data to 
* @param {array} data the element to be appened to ele 
*/
appendHourlyDataTo = (ele, data)=>{

    for(hour of data){
        const res = extractObjectFromHourData(hour);
        let li = document.createElement('li');
        let time =createNewSpanFromStyleContent('badge-dark',amOrPmFromString(res.allData(unit)[0].slice(2,)));  
        let temp =createNewSpanFromStyleContent('badge-secondary',"Temperature :"+res.temperature+" "+unit);
        let feels = createNewSpanFromStyleContent('badge-secondary',"Feels Like :"+res.feels+" "+unit);
        let pressure = createNewSpanFromStyleContentWithIcon('badge-secondary',"Pressure :"+res.pressure,['fas','fa-thermometer-full']);
        let humidity = createNewSpanFromStyleContentWithIcon('badge-secondary',"Humidity :"+res.humidity,['fas','fa-tint']);
        let windSpeed = createNewSpanFromStyleContent('badge-secondary',"Wind Speed :" +res.windSpeed+" &#13223;");
        let windDegree = createNewSpanFromStyleContentWithIcon('badge-secondary',"Wind Directon :"+res.windDegree+"&deg;",['far','fa-compass']);
        let img = createWeatherImageFromIconId(res.icon);
        li.appendChild(time);
        li.appendChild(temp);
        li.appendChild(feels);
        li.appendChild(pressure);
        li.appendChild(humidity);
        li.appendChild(windSpeed);
        li.appendChild(windDegree);
        li.appendChild(img);
        li.appendChild(createNewSpanFromStyleContent('badge-dark',res.main+", "+res.sub ));
        //li.appendChild(text);
        li.classList.add('list-group-item');
        li.classList.add('list-group-item-dark');
        ele.appendChild(li);

     }
} 


/**
* @function  appendDailyDataTo
* @description return new list item element.
* @param {object} ele to append data to 
* @param {array} data the element to be appened to ele 
*/
appendDailyDataTo = (ele, data)=>{
    for(day of data){
        let res = extractObjectDataFromResponseData(day);
            let li = document.createElement('li');
            let span =  document.createElement('span');
            span.classList.add('badge');
            span.classList.add('badge-dark');
            span.classList.add('badge-pill');
            span.innerHTML=res.allData(unit.value)[0];
            li.appendChild(span);
            let text = document.createElement('span');
            text.innerHTML=res.allData(unit)[1];
            li.appendChild(text);
            li.classList.add('list-group-item');
            li.classList.add('list-group-item-dark');
            dailyList.appendChild(li);
    }
} 


/**
* @function  appendCurretData
* @description show current weather condition on the page.
* @param {array} data to be shown on the page 
*/
appendCurretData= (data)=>{
    let unit = getDegreeUnitFromUnit();
    weather.src=getIconById(data.current.weather[0].icon);
    document.querySelector('#temp').innerHTML=data.current.temp+" "+unit;
    document.querySelector('#like').innerHTML=data.current.feels_like+" "+unit;
    document.querySelector('#wind').innerHTML=data.current.wind_speed+" &#13223;";
    document.querySelector('#dir').innerHTML=data.current.wind_deg+"&deg;";
    document.querySelector('#hum').innerHTML=data.current.humidity;
    document.querySelector('#pre').innerHTML=data.current.pressure;
    document.querySelector('#min').innerHTML=data.current.dew_point+" "+unit;
    document.querySelector('#max').innerHTML=data.current.clouds+" &percnt;" ;
    changeInenerHTMLContentById(data.current.visibility+" &#13214;",'vis');
    changeInenerHTMLContentById(data.current.uvi,'uvi');
    changeDivInnerHTML(description,data.current.weather[0].description);
    appendUnitandIntilizeMap(unit , coord);
} 

appendUnitandIntilizeMap = (unit , coord) =>{
    setUnitOfInnerHTML(unit);
    setTimeout(intilizeMap,1000,coord);
}

/*
showById = (id)=>{
  let x = document.getElementById(id);
  x.style.display='block';
}

hideById = (id)=>{
    let x = document.getElementById(id);
    x.style.display='none';
  }


clearSelectById =()=>{
    
    for(let i =0;i<dailyList.children.length ;i++){
        console.log(i);
        dailyList.removeChild(dailyList.children[i]);
        }

}*/





openCollapseWithIndex =(index)=>{
    let x =document.getElementsByClassName('collapse');
    for(item of  x){
        item.classList.remove('show');
    }
    x[index].classList.add('show');
}

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
getWeatherDataFromOpenWeartherApiOneCall = async url => {
  
    let completeUrl = url+unitSelect.value+languageSelect.value;
  
    const response = await fetch(completeUrl);
    try{

        console.log("one call api");
        const data = await response.json();
        document.getElementById('dateTime').innerText=getDateFromSeconds(data.current.dt);
        let value = requestSelect.value;
      
       let index = parseInt(value)-1;
    
        console.log(requestSelect.value);
        if(value==='1'){
            openCollapseWithIndex(index);
            appendCurretData(data);

        }else if (value==='2'){
            openCollapseWithIndex(index);     
            appendDailyDataTo(dailyList,data.daily);

        }else if (value==='3'){
            openCollapseWithIndex(index);
            appendHourlyDataTo(hourlyList,data.hourly);

        }else if (value==='4'){
            openCollapseWithIndex(index);
            appendMintlyDataTo(miutlyList,data.minutely);

        }
        
    }catch(error){
        console.log(error);
        showToastWithTitleAndMessageWithDelay('Error',error,3000);
    }
}



 /**
* @async
* @function  getWeatherDataFromOpenWeartherApi
* @description Return the text value of any input element specified in the parameter 
* @param {string} url For get action usually the open weather map api call to get temprature 
* @returns {object} Consisted of three value date, temperature and finally feeling of the user
*/
getWeatherDataFromOpenWeartherApi = async url => {
   
    let completeUrl = url+unitSelect.value+languageSelect.value;
    
    const response = await fetch(completeUrl);
    try{
      
       const data = await response.json();

        if(data.cod===200){
      
       let unit = getDegreeUnitFromUnit();
       console.log(data);
       getCountryFlageByCountryCodeAndStyle(flag, data.sys.country,'flat');
       
       let current = data.main;
       coord=data.coord;

       getWeatherDataFromOpenWeartherApiOneCall(fullOneCallApiUrl(coord.lat,coord.lon))
       //getWeatherDataFromOpenWeartherApiOneCall(fullOneCallApiTimeMachineUrl(coord.lat,coord.lon,agoSelect.value));
    
    }
    }catch(error){
        showToastWithTitleAndMessageWithDelay('Error',error,3000);
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
     showToastWithTitleAndMessageWithDelay('Error','Unable to retrieve your location',3000);
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
        showToastWithTitleAndMessageWithDelay('Error','Make Sure the api Key is provided',3000);
    }
})

fillButton.addEventListener('click', (e)=>{
    e.preventDefault();
    if(apiKey.value!==''){
    navigator.geolocation.getCurrentPosition(success, error);
    }else{
        showToastWithTitleAndMessageWithDelay('Error',"Make Sure you have your Api key",3000);
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
    apiKey.value= getDataFromLocalStorage('api');
    
});


document.getElementById('light').addEventListener('click', (e)=>{
    e.preventDefault();
    toggleTheme();
})

document.getElementById('setting').addEventListener('click', (e)=>{
    e.preventDefault();
    
})




requestSelect.addEventListener('change',(e)=>{

if(e.target.value!==''){
    getButton.disabled =false;
}

} )
