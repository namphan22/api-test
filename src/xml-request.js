let holder = document.querySelector('.countries');

const getcountry=function(country){


const request = new XMLHttpRequest();
request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
request.send();



request.addEventListener('load',function(){
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    console.log(typeof data);
    const result = `  
    <article class="country">
    <img class="country-img" src="${data.flags.png}" alt="flag viet nam">
    <div class="country-data">
        <h3 class="country-name">${data.altSpellings[3]}</h3>
        <a  class="country-map"href="${data.maps.googleMaps}">Map</a>
        <p class="country-1"><span>Population:</span>${data.population/1000000}M</p>
        <p class="country-1"><span>Time zone:</span>${data.timezones}</p>
        <p class="country-1"><span>Capital:</span>${data.capital}</p>
        
    </div>
</article>`;
    holder.insertAdjacentHTML('beforeend',result) ;

 });
}

getcountry('vietnam');
getcountry('thailand');
getcountry('india');
getcountry('lao');
