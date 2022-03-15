const names = document.getElementById("input");
const form = document.getElementById("form");
const main = document.querySelector('main');

const getCountry = async (countryName) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const data = await response.json();
    return data[0];
}
document.getElementById("search").addEventListener("click",(e)=>{
    e.preventDefault();
    viewCountry(names.value);
    form.reset();
    names.focus();
})
const renderCountry = (data, type = 'country') => {
    const flag = data.flags.svg;
    const countryName = data.name.common;
    const region = data.region;
    const capital = data.capital;
    const population = data.population;
    const languages = data.languages;
    const currencies = data.currencies;
  
    const countryHtmlCard = `
      <img src="${flag}" class="card-img-top border border-secondary" alt="Flag" />
      <div class="card-body">
        <h5 class="card-title">${countryName}</h5>
        <p class="card-text">${region}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><span><i class="fas fa-2x fa-landmark"></i>${capital}</span></li>
        <li class="list-group-item"><span><i class="fas fa-lg fa-users"></i>${(
          population / 1_000_000
        ).toFixed(2)} M</span></li>
        <li class="list-group-item"><span><i class="fas fa-lg fa-comments"></i>${Object.values(
          languages
        )}</span></li>
        <li class="list-group-item">
          <span
            ><i class="fas fa-lg fa-money-bill-wave"></i>${
              Object.values(currencies)[0].name
            } ${Object.values(currencies)[0].symbol}
            </span
          >
        </li>
      </ul>`;
    if (type === 'country') {
      const countryHtml = `<div class="container country">
            <div class="row justify-content-center mt-5">
              <div class="card country-card col col-sm-6 col-lg-3 py-3" >
                ${countryHtmlCard}
              </div>
            </div>
            <div class="row justify-content-start neighbour-container">
          </div>`;
      
      main.innerHTML ="";
      main.insertAdjacentHTML('afterbegin', countryHtml);
    } else if (type === 'neighbour') {
      const neighbourHtml = `<div class="card col col-sm-6 col-lg-3 py-3 neighbour">${countryHtmlCard}</div>`;
      const neighbourDiv = document.querySelectorAll('.neighbour-container');
      neighbourDiv[0].insertAdjacentHTML('beforeend', neighbourHtml);
    }
};

const getNeighbours = async (countryCode) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode}`
    );
    const data = await response.json();
    console.log(data);
    return data[0];
  };
  
const viewCountry = async (countryName) => {
    try {
        const data = await getCountry(countryName);
        console.log(data)
        renderCountry(data);
        if(data.borders){
            data.borders.forEach(async (item) => {
                const neighbour  = await getNeighbours(item);
                renderCountry(neighbour,"neighbour");
            })
    
        } else {
           
            renderError("No neighbours!")
        }
    } catch (error){
        main.innerHTML ="";
        renderError("Not found country!");
        
    } 
    
};
const renderError = (msg) => {
    const inputContainer = document.querySelector('.input-section');
    const errorHtml = document.createElement('div');
  
    errorHtml.classList.add('alert', 'alert-danger', 'alert-container');
    errorHtml.innerText = msg;
    inputContainer.insertAdjacentElement('beforeend', errorHtml);
    setTimeout(()=>{
        errorHtml.remove();
        
    },5000)
};
