/**
 * Define Global Variables
 *
*/

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
    @type {object}
    @global
    @description Hold reference to feelings textarea where use iput current feeling.
*/
const feelingInput=select('#feelings');

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
    @description Hold reference to content div.
*/
const content =select('#content');

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
changeDivInnerHTML = (ele,prefix,text)=>{ele.innerHTML=`${prefix}:${text}`;}


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
    console.log(coord);
    var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([coord.lon, coord.lat]),
          zoom: 10
        })
      });

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
    if(text(zipInput)===''||text(feelingInput)===''){
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
* @function  currentTime
* @description Return the text value of any input element specified in the parameter 
* @returns {string} Return current time in the following format hh:mm:ss
*/
currentTime = () => {const now = new Date();
    return `${now.getHours()}:${now.getMinutes()+1}:${now.getSeconds()}`
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

       intilizeMap(data.coord);
       changeFavIconById(data.weather[0].icon);
       changeDivInnerHTML(temp,'temp ',data.main.temp+" &#8451;");

       return {date:getDate(),temp:data.main.temp+'',content:text(feelingInput)};

    }catch(error){
        alert(error);
    }
}


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
      /*  .then(function (x){
            postDataToServer(localhostBaseUrl+'/addData',{date:x.date,temp:x.temp,content:x.content});})
        .then(function (){
        getDataFromNodeLocalServer(localhostBaseUrl+'/getData');});*/}
    else{
        alert('Make Sure All Required Field Is Not Empty');
}
})