'use strick';

//for seattle cookie stand //
const Seattle = {
  heading : 'sales',
  city : 'Seattle',
  hours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  minCookieNumber : 23,
  maxCookieNumber : 65,
  average : 6.3,
  customerPerHourSeattle : [],
  cookiePerHourSeattle :[] ,
  totalCookiesSales : 0 ,
  randomCookieNumberForEachHour : function (min,max,avg) {
    return Math.ceil((Math.random() * (max - min + 1) + min)*avg);
  },


  render : function (){
    for (let t = 0;t< this.hours.length;t++){
      this.cookiePerHourSeattle[t] = this.randomCookieNumberForEachHour (this.minCookieNumber,this.maxCookieNumber,this.average);
      this.customerPerHourSeattle[t]= (Math.ceil(this.cookiePerHourSeattle[t]/this.average));
      this.totalCookiesSales =this.totalCookiesSales+ this.cookiePerHourSeattle[t];
    }
    console.log (this.customerPerHourSeattle);
    console.log (this.cookiePerHourSeattle);
    const parentElement = document.getElementById('sales');
    const h1Element = document.createElement('h1');
    parentElement.appendChild(h1Element);
    h1Element.textContent = this.heading;

    const h2Element = document.createElement('h2');
    parentElement.appendChild(h2Element);
    h2Element.textContent= this.city;

    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);

    for (let i=0 ;i< this.hours.length;i++){
      const liElement = document.createElement ('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${this.hours[i]} : ${this.cookiePerHourSeattle[i]} cookies `;
    }
    const liTotalElement = document.createElement ('li');
    ulElement.appendChild(liTotalElement);
    liTotalElement.textContent = `total : ${this.totalCookiesSales} cookies`;
  }
};
Seattle.render();

// for Tokyo cookie stand //
const tokyo = {
  city : 'Tokyo',
  hours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  minCookieNumber : 3,
  maxCookieNumber : 24,
  average : 1.2,
  customerPerHourTokyo : [],
  cookiePerHourTokyo :[] ,
  totalCookiesSales : 0 ,
  randomCookieNumberForEachHour : function (min,max,avg) {
    return Math.ceil((Math.random() * (max - min + 1) + min)*avg);
  },


  render : function (){
    for (let t = 0;t< this.hours.length;t++){
      this.cookiePerHourTokyo[t] = this.randomCookieNumberForEachHour (this.minCookieNumber,this.maxCookieNumber,this.average);
      this.customerPerHourTokyo[t]= (Math.ceil(this.cookiePerHourTokyo[t]/this.average));
      this.totalCookiesSales =this.totalCookiesSales+ this.cookiePerHourTokyo[t];
    }
    console.log (this.customerPerHourTokyo);
    console.log (this.cookiePerHourTokyo);
    const parentElement = document.getElementById('sales');
    const h2Element = document.createElement('h2');
    parentElement.appendChild(h2Element);
    h2Element.textContent= this.city;

    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);

    for (let i=0 ;i< this.hours.length;i++){
      const liElement = document.createElement ('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${this.hours[i]} : ${this.cookiePerHourTokyo[i]} cookies `;
    }
    const liTotalElement = document.createElement ('li');
    ulElement.appendChild(liTotalElement);
    liTotalElement.textContent = `total : ${this.totalCookiesSales} cookies`;
  }
};
tokyo.render();

// for Dubai cookie stand //
const dubai = {
  city : 'Dubai',
  hours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  minCookieNumber : 11,
  maxCookieNumber : 38,
  average : 3.7,
  customerPerHourDubai : [],
  cookiePerHourDubai :[] ,
  totalCookiesSales : 0 ,
  randomCookieNumberForEachHour : function (min,max,avg) {
    return Math.ceil((Math.random() * (max - min + 1) + min)*avg);
  },


  render : function (){
    for (let t = 0;t< this.hours.length;t++){
      this.cookiePerHourDubai[t] = this.randomCookieNumberForEachHour (this.minCookieNumber,this.maxCookieNumber,this.average);
      this.customerPerHourDubai[t]= (Math.ceil(this.cookiePerHourDubai[t]/this.average));
      this.totalCookiesSales =this.totalCookiesSales+ this.cookiePerHourDubai[t];
    }
    console.log (this.customerPerHourDubai);
    console.log (this.cookiePerHourDubai);
    const parentElement = document.getElementById('sales');
    const h2Element = document.createElement('h2');
    parentElement.appendChild(h2Element);
    h2Element.textContent= this.city;

    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);

    for (let i=0 ;i< this.hours.length;i++){
      const liElement = document.createElement ('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${this.hours[i]} : ${this.cookiePerHourDubai[i]} cookies `;
    }
    const liTotalElement = document.createElement ('li');
    ulElement.appendChild(liTotalElement);
    liTotalElement.textContent = `total : ${this.totalCookiesSales} cookies`;
  }
};
dubai.render();

// for Paris cookie stand //
const paris = {
  city : 'Paris',
  hours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  minCookieNumber : 20,
  maxCookieNumber : 38,
  average : 2.3,
  customerPerHourParis : [],
  cookiePerHourParis :[] ,
  totalCookiesSales : 0 ,
  randomCookieNumberForEachHour : function (min,max,avg) {
    return Math.ceil((Math.random() * (max - min + 1) + min)*avg);
  },


  render : function (){
    for (let t = 0;t< this.hours.length;t++){
      this.cookiePerHourParis[t] = this.randomCookieNumberForEachHour (this.minCookieNumber,this.maxCookieNumber,this.average);
      this.customerPerHourParis[t]= (Math.ceil(this.cookiePerHourParis[t]/this.average));
      this.totalCookiesSales =this.totalCookiesSales+ this.cookiePerHourParis[t];
    }
    console.log (this.customerPerHourParis);
    console.log (this.cookiePerHourParis);
    const parentElement = document.getElementById('sales');
    const h2Element = document.createElement('h2');
    parentElement.appendChild(h2Element);
    h2Element.textContent= this.city;

    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);

    for (let i=0 ;i< this.hours.length;i++){
      const liElement = document.createElement ('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${this.hours[i]} : ${this.cookiePerHourParis[i]} cookies `;
    }
    const liTotalElement = document.createElement ('li');
    ulElement.appendChild(liTotalElement);
    liTotalElement.textContent = `total : ${this.totalCookiesSales} cookies`;
  }
};
paris.render();

// for Lima cookie stand //
const lima = {
  city : 'Lima',
  hours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  minCookieNumber : 2,
  maxCookieNumber : 16,
  average : 4.6,
  customerPerHourLima : [],
  cookiePerHourLima :[] ,
  totalCookiesSales : 0 ,
  randomCookieNumberForEachHour : function (min,max,avg) {
    return Math.ceil((Math.random() * (max - min + 1) + min)*avg);
  },


  render : function (){
    for (let t = 0;t< this.hours.length;t++){
      this.cookiePerHourLima[t] = this.randomCookieNumberForEachHour (this.minCookieNumber,this.maxCookieNumber,this.average);
      this.customerPerHourLima[t]= (Math.ceil(this.cookiePerHourLima[t]/this.average));
      this.totalCookiesSales =this.totalCookiesSales+ this.cookiePerHourLima[t];
    }
    console.log (this.customerPerHourLima);
    console.log (this.cookiePerHourLima);
    const parentElement = document.getElementById('sales');
    const h2Element = document.createElement('h2');
    parentElement.appendChild(h2Element);
    h2Element.textContent= this.city;

    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);

    for (let i=0 ;i< this.hours.length;i++){
      const liElement = document.createElement ('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${this.hours[i]} : ${this.cookiePerHourLima[i]} cookies `;
    }
    const liTotalElement = document.createElement ('li');
    ulElement.appendChild(liTotalElement);
    liTotalElement.textContent = `total : ${this.totalCookiesSales} cookies`;
  }
};
lima.render();

