const baseUrl = 'api.openweathermap.org/data/2.5/weather?zip=';

const zipCode ='';

const apiKey='8a859a3628cb56d91dc6e5df75ee32d6';


const generateButton = select('#','generate');

const zipInput =select('#','zip');

const feelingInput=select('#','feelings');

const localhostBaseUrl='http://localhost:8000';

let  headers = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }
  }


let request = {}


const date = select('#','date');
const temp = select('#','temp');
const content =select('#','content');

changeDivInnerHTML = (ele,prefix,text)=>{ele.innerHTML=`${prefix}:${text}`;}

function select(prefix,id){
    return document.querySelector(`${prefix}${id}`);
}

fullUrl = zip =>{return`https://${baseUrl}${zip},us&appid=${apiKey}&units=metric`;}

getIconById = id =>{return `http://openweathermap.org/img/wn/${id}@2x.png`;}

changeTitle = text => {
    const title =select('','title');
    title.innerHTML=text;
}

log = (tit,msg) => {console.log(tit,msg);}
text = ele => {return ele.value;}

innerHTML = ele => { return ele.innerHTML }

changeFavIconById = id => { select('','link').setAttribute('href',getIconById(id));}

currentDate = () => {
    const now = new Date();
    return `${now.getDate()}\\${(now.getMonth()+1)}\\${now.getFullYear()}`
 }
currentTime = () => {const now = new Date();
    return `${now.getHours()}:${now.getMinutes()+1}:${now.getSeconds()}`
}


getWeatherDataFromOpenWeartherApi = async url => {
    const res = await fetch(url);
    try{
       const data = await res.json();
       changeFavIconById(data.weather[0].icon);
       changeTitle(data.weather[0].main);
       changeDivInnerHTML(temp,'temp',data.main.temp);
       request = {date:getDate(),temp:data.main.temp+'',content:text(feelingInput)};
       return request;

    }catch(error){
        log('error',error);
    }


}

postDataToServer = async (url , data) => {

    headers.body=JSON.stringify(data);
    const response = await fetch(url,headers);
    try{
       const data = response.json();
    }catch(error){
       log('post failure',error);
    }

}

getDataFromNodeLocalServer =async  url =>{
  
    const res = await fetch(url);
    try{
       const data = await res.json();
       log('data',data);
       changeDivInnerHTML(date,'Date',data.date);
       changeDivInnerHTML(content,'Feeling',data.content);
       changeDivInnerHTML(temp,'Temp',data.temp);

    }catch(error){
        log('error',error);
    }


}

getDate = ()=> { return `${currentDate()} ${currentTime()}`}

generateButton.addEventListener('click',() => {
log('Get Api','Success')
getWeatherDataFromOpenWeartherApi(fullUrl(text(zipInput))).
 then(function (x){
    log('Post Server','Success')
    postDataToServer(localhostBaseUrl+'/addData',{date:x.date,temp:x.temp,content:x.content});
}).then(function (){
    log('Get Server','Success')
    getDataFromNodeLocalServer(localhostBaseUrl+'/getData');
});
//getData(fullUrl(text(zipInput)));
})