/**
 * Define Global Variables
 *
*/


map = new OpenLayers.Map("mapdiv");
map.addLayer(new OpenLayers.Layer.OSM());

/** @constant
    @type {array}
    @global
    @description Hold months' names .
*/

const months= ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];


/** @constant
    @type {string}
    @global
    @description Hold reference to to base open weather map api Url.
*/
const baseUrl = 'api.openweathermap.org/data/2.5/weather?zip=';

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
    @description Hold refrence to flag image element.
*/
const  flag=select("#flag");


/** @constant
    @type {object}
    @global
    @description Hold refrence current weather description.
*/
const  description=select("#des");


/** @constant
    @type {object}
    @global
    @description Hold reference to generate button html element.
*/
const getButton = select('#get');

/** @constant
    @type {object}
    @global
    @description Hold reference to zip code input text.
*/
const zipInput =select('#zip');

/** @constant
    @type {string}
    @global
    @description Hold reference to local server Url.
*/
const localhostBaseUrl='http://localhost:8000';


/** @constant
    @type {object}
    @global
    @description Hold reference to date div.
*/
const date = select('#date');

/** @constant
    @type {object}
    @global
    @description Hold reference to temp div.
*/
const temp = select('#temp');


/** @constant
    @type {object}
    @global
    @description Hold basic info related to post header.
*/
let  headers = {
    method: 'POST',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    }
  }

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


intilizeMap = coord => {
let x =document.getElementById('mapdiv').children.length;

if(true){
    

    var lonLat = new OpenLayers.LonLat( coord.lon ,coord.lat)
          .transform(
            new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
            map.getProjectionObject() // to Spherical Mercator Projection
          );
          
    var zoom=14;

    var markers = new OpenLayers.Layer.Markers( "Markers" );
    map.addLayer(markers);
    
    markers.addMarker(new OpenLayers.Marker(lonLat));
    
    map.setCenter (lonLat, zoom);

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
* @function  fullUrl
* @description Return a complete url for open weather map api with temp in metric system
* @param {string} zip
* @returns {string} Complete url to the open weather map api with zip code and api key
*/
fullUrl = zip =>{return`https://${baseUrl}${zip},us&appid=${text(apiKey)}&units=metric`;}

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
    if(text(zipInput)===''){
        return true;
    }else{
        return false;
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
* @param {string}  id of the element we want to change it's innerHTMl contern
*/
changeInenerHTMLContentById = (content,id) => {
    document.getElementById(id).innerHTML=content;
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
getWeatherDataFromOpenWeartherApi = async url => {
    const response = await fetch(url);
    try{
       const data = await response.json();
       console.log(data);

       getCountryFlageByCountryCodeAndStyle(flag, data.sys.country,'flat');
       

       let current = data.main;
       intilizeMap(data.coord);
       changeFavIconById(data.weather[0].icon);
       changeDivInnerHTML(temp,current.temp+" &#8451;");
       changeDivInnerHTML(description,data.weather[0].description);
       changeDivInnerHTML(date,`${getCurrentMonthName()}, ${getCurrentDay()}`);
       changeInenerHTMLContentById(`${data.name},${data.sys.country}`,'loc');
       changeInenerHTMLContentById(data.wind.speed,'wind');
       changeInenerHTMLContentById(data.wind.deg,'dir');
       changeInenerHTMLContentById(current.humidity,'hum')
       changeInenerHTMLContentById(current.pressure,'pre')


       changeInenerHTMLContentById(current.feels_like+" &#8451;",'like')
       changeInenerHTMLContentById(current.temp_min+" &#8451;",'min')
       changeInenerHTMLContentById(current.temp_max+" &#8451;",'max')


    }catch(error){
        alert(error);
    }
}


update = () =>{
    let now = new Date();

    let time ='';
    let h = now.getHours();
    let m =now.getMinutes();
    let s =now.getSeconds();
    
    if(h>=12){
        time="PM";
    }else{
        time="AM";
    }



    document.getElementById('date').innerHTML=checkDigits(h)+' '+checkDigits(m)+' '+checkDigits(s)+' '+time;

}

checkDigits = (digit)=>{

    if(digit<10)
        return '0'+digit;
    else
        return digit;
}

//setInterval(update, 500);

/**
 * End Main Functions
 * Begin Events
 *
*/

/**
 * @description Handle on get button click event
 */
getButton.addEventListener('click',() => {
    if(! checkInputFields()){
        getWeatherDataFromOpenWeartherApi(fullUrl(text(zipInput)))
    }
    else{
        alert('Make Sure All Required Field Is Not Empty');
}
})