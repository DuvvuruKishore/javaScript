window.addEventListener("load",()=>{
    let long;
    let lat;

    let temperatureDescription=document.querySelector('.temperature-description');
    let temperatureDegree=document.querySelector('.temperature-degree');
    let locationTimezone=document.querySelector('.location-timezone')
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long=position.coords.longitude;
            lat=position.coords.latitude;

           // const api='https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + long + ''
          const api=`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
        
        fetch(api).then(response=>response.json()).then(data=>{
            const temp=data.main.temp;
            const desciption=data.weather[0].description;
            const timezone=data.name;
            temperatureDegree.textContent=temp;
            temperatureDescription.textContent=desciption;
            locationTimezone.textContent=timezone;
          
        })
           
          
        })
    }
})