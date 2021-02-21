'use strick';
{/* <header id="home-header">
        <img id="logo" src="assets/logo.png" alt="logo">
        <h1>cookie stand</h1>
        <ul>
            <li><a href="sales.html">Sales for our shops</a></li>
        </ul>
    </header> */}

let header = {
  logo : './assets/logo.png',
  render : function (){
    const parentElement = document.getElementById('home-header');

    const imgElement = document.createElement ('img');
    parentElement.appendChild(imgElement);
    imgElement.setAttribute('src', this.logo);
    imgElement.setAttribute ('id','logo');
    imgElement.setAttribute ('alt','logo');

    const h1Element = document.createElement('h1');
    parentElement.appendChild (h1Element);
    h1Element.textContent = 'cookie stand';

    const ulElement = document.createElement('ul');
    parentElement.appendChild (ulElement);
    const aElement = document.createElement('a');
    ulElement.appendChild (aElement);
    aElement.textContent = 'Sales for our shops';
    aElement.setAttribute ('href','sales.html');

  }

};
header.render();

