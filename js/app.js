'use strict';

//variables and arrays //
let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
let hoursNumber = hours.length;
let heading = 'Sales';
let totalsArray = [];
let totalOfTotals =[];
let totalCookiesPerDay =[];
let neyCityArray =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let allOldCites=[];
const parentElement = document.getElementById('sales');
const h1Element = document.createElement('h1');
parentElement.appendChild(h1Element);
h1Element.textContent = (heading);
let lastColumnLastData = 0;
let lastColumnLData = function () {
  for (let r=0; r<totalOfTotals.length;r++){
    lastColumnLastData=lastColumnLastData+totalOfTotals[r];

  }
};
///// constructor /////
function CitySales (city){
  this.city = city;
  this.customerPerHour = [];
  this.cookieNumberPerHourArr = [];
  this.totalCookiesSoledForTheDay = 0 ;
  allOldCites.push (this);

}


CitySales.prototype.cookieNumberPerHour = function (min,max,avg) {
  for (let t = 0;t< hoursNumber;t++){
    this.customerPerHour.push (Math.ceil((Math.random() * (max - min + 1) + min)));
    this.cookieNumberPerHourArr.push (Math.ceil((this.customerPerHour[t]*avg)));
    totalCookiesPerDay[t]+= this.cookieNumberPerHourArr[t];
  }
};
CitySales.prototype.totals = function () {
  for (let i =0;i<hoursNumber;i++){
    this.totalCookiesSoledForTheDay =this.totalCookiesSoledForTheDay +this.cookieNumberPerHourArr [i];
    totalsArray.push (this.totalCookiesSoledForTheDay);
  }
  totalOfTotals.push (this.totalCookiesSoledForTheDay);
};

CitySales.prototype.headRender =function () {
  const tableElement = document.createElement ('table');
  parentElement.appendChild (tableElement);
  tableElement.setAttribute ('id','table');

  const thTitle = document.createElement ('th');
  tableElement.appendChild (thTitle);
  thTitle.textContent = 'Locations'+'/'+'Hours';
  for (let e=0;e<hoursNumber;e++){
    const tdElement = document.createElement ('th');
    tableElement.appendChild (tdElement);
    tdElement.textContent = hours [e];
  }
  const thTotal = document.createElement ('th');
  tableElement.appendChild (thTotal);
  thTotal.textContent = ' Daily Location Total';
};



CitySales.prototype.render =function () {
  const container= document.getElementById('table');
  const rawElement =document.createElement ('tr');
  container.appendChild (rawElement);
  const rawTitle =document.createElement ('td');
  rawElement.appendChild (rawTitle);
  rawTitle.textContent = this.city;
  for (let l = 0; l < hoursNumber; l++) {
    const rawContent = document.createElement ('td');
    rawElement.appendChild (rawContent);
    rawContent.textContent = this.cookieNumberPerHourArr [l];
    // rawContent.setAttribute ('id',l);
  }
  const rawTotal = document.createElement ('td');
  rawElement.appendChild (rawTotal);
  rawTotal.textContent = this.totalCookiesSoledForTheDay;

};

const formElement = document.getElementById('userInput');

formElement.addEventListener('submit', function(event) {
  event.preventDefault();

  const cityName = event.target.city_name.value;
  const minimumCustomer = event.target.minimumCustomer.value;
  const maximumCustomer = event.target.maximumCustomer.value;
  const averageCookies = event.target.averageCookies.value;



  const addCitySale = new CitySales(cityName);
  addCitySale.cookieNumberPerHour(minimumCustomer,maximumCustomer,averageCookies);
  addCitySale.totals();
  addCitySale.render();
  for (let k = 0; k < hoursNumber; k++) {
    neyCityArray.push= (addCitySale.cookieNumberPerHour(minimumCustomer,maximumCustomer,averageCookies));

  }
  const container = document.getElementById ('table');
  const footerElement = document.createElement ('th');
  container.appendChild (footerElement);
  const footerTitle = document.createElement ('td');
  footerElement.appendChild (footerTitle);
  footerTitle.textContent = 'New Totals';
  for (let u = 0; u < hoursNumber; u++) {
    const footerData =  document.createElement ('th');
    container.appendChild (footerData);
    footerData.textContent = Seattle.cookieNumberPerHourArr[u]+Tokyo.cookieNumberPerHourArr[u]+Lima.cookieNumberPerHourArr[u]+Dubai.cookieNumberPerHourArr[u]+Paris.cookieNumberPerHourArr[u];

  }

  formElement.reset();
});



CitySales.prototype.footerRender = function (){
  const container = document.getElementById ('table');
  const footerElement = document.createElement ('th');
  container.appendChild (footerElement);
  const footerTitle = document.createElement ('td');
  footerElement.appendChild (footerTitle);
  footerTitle.textContent = 'Totals';
  for (let u = 0; u < hoursNumber; u++) {
    const footerData =  document.createElement ('th');
    container.appendChild (footerData);
    footerData.textContent = Seattle.cookieNumberPerHourArr[u]+Tokyo.cookieNumberPerHourArr[u]+Lima.cookieNumberPerHourArr[u]+Dubai.cookieNumberPerHourArr[u]+Paris.cookieNumberPerHourArr[u];

  }


  const footerData =  document.createElement ('th');
  container.appendChild (footerData);
  footerData.textContent = lastColumnLastData;
};


lastColumnLData();




//for seattle cookie stand //
const Seattle = new CitySales('Seattle');
Seattle.cookieNumberPerHour(23,65,6.3);
Seattle.totals ();



Seattle.headRender();
Seattle.render ();

// for Tokyo cookie stand //
const Tokyo = new CitySales ('Tokyo');
Tokyo.cookieNumberPerHour (3,24,1.2);
Tokyo.totals();

Tokyo.render();


// for Dubai cookie stand //
const Dubai = new CitySales ('Dubai');
Dubai.cookieNumberPerHour (11,38,3.7);
Dubai.totals();

Dubai.render();

// for Paris cookie stand //
const Paris = new CitySales ('Paris');
Paris.cookieNumberPerHour (11,38,3.7);
Paris.totals();

Paris.render();








// for Lima cookie stand //
const Lima = new CitySales ('Lima');
Lima.cookieNumberPerHour (11,38,3.7);
Lima.totals();
Lima.render();







lastColumnLData();
Lima.footerRender();
console.log (allOldCites);
