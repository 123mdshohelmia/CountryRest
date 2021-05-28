function allCountryName(){
   fetch('https://restcountries.eu/rest/v2/all')
   .then(res => res.json())
   .then(data => {
    displayCountry(data);
   })
}
allCountryName();

const displayCountry = countrise =>{
    const countriseDiv = document.getElementById('countriseName');

    countrise.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className='country';

        const countryInfo = `
        <button onclick="displayCountryDetailsInfo('${country.name}')"><img class="image-section" src = "${country.flag}"></button>
         <h3 class="country-name">${country.name}</h3>
        `;
        // console.log(country.name);
        countryDiv.innerHTML = countryInfo;
        countriseDiv.appendChild(countryDiv);
        
    });
}

const displayCountryDetailsInfo = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then (data =>{
        renderDisplay(data[0]);
    })
}

const renderDisplay = country =>{
    const countryDiv = document.getElementById('countryDetails');
    countryDiv.innerHTML = `
    <img class="image-section-image" src="${country.flag}">
    <p>Country Name : ${country.name}</p><br>
    <p>Country Native Name : ${country.nativeName}</p><br>
    <p>Country Capital : ${country.capital}</p><br>
    <p>Country Region : ${country.region}</p><br>
    <p>Country Subregion : ${country.subregion}</p><br>
    <p>Country Area : ${country.area}</p><br>
    <p>Country Population : ${country.population}</p><br>
    `
}