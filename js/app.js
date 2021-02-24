'use strict';

//trial//
let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
let hoursNumber = hours.length;
let heading = 'Sales';
let totalsArray = [];
let totalOfTotals =[];
let hourlyArray =[];
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

function CitySales (city){
  this.city = city;
  this.customerPerHour = [];
  this.cookiePerHour = [];
  this.totalCookiesSales = 0 ;
}


CitySales.prototype.cookieNumberPerHour = function (min,max,avg) {
  for (let t = 0;t< hoursNumber;t++){
    this.customerPerHour.push (Math.ceil((Math.random() * (max - min + 1) + min)));
    this.cookiePerHour.push (Math.ceil((this.customerPerHour[t]*avg)));
    hourlyArray[t]+= this.cookiePerHour[t];
  }
};
CitySales.prototype.totals = function () {
  for (let i =0;i<hoursNumber;i++){
    this.totalCookiesSales =this.totalCookiesSales +this.cookiePerHour [i];
    totalsArray.push (this.totalCookiesSales);
  }
  totalOfTotals.push (this.totalCookiesSales);
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
    rawContent.textContent = this.cookiePerHour [l];
    rawContent.setAttribute ('id',l);
  }
  const rawTotal = document.createElement ('td');
  rawElement.appendChild (rawTotal);
  rawTotal.textContent = this.totalCookiesSales;

};
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
    footerData.textContent = Seattle.cookiePerHour[u]+Tokyo.cookiePerHour[u]+Lima.cookiePerHour[u]+Dubai.cookiePerHour[u]+Paris.cookiePerHour[u];

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
