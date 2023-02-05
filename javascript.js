async function getWeather(nuevoimput){
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+nuevoimput+'&APPID=eb3aaa61b0200a0998d0e8ddb7aba2bf&lang=sp&units=metric', {mode: 'cors'})
    const catData = await response.json();
    return catData
}

const $city = document.querySelector('.city')
const $citytemp = document.querySelector('.citytemp')
const $tempimg = document.querySelector('.tempimg')
const $boton = document.querySelector('.locationbutton')
const $imput = document.getElementById('lugar')

$boton.addEventListener('click',(e)=>{
    datosweather($imput.value)
})

async function getImgTipoClima(tipoclima){
    const response = await fetch('https://openweathermap.org/img/wn/'+tipoclima+'@2x.png', {mode: 'cors'})
    console.log(response.url)
    $tempimg.src = response.url
}

async function datosweather(nuevoimput){
   try{ const datosclima = await getWeather(nuevoimput)
    $city.innerText = datosclima.name
    console.log(datosclima)
    $citytemp.innerText = Math.round(datosclima.main.temp) + ' C°'
    getImgTipoClima(datosclima.weather[0].icon)
    return datosclima
    }catch(err){
        alert('Coloca una ciudad o pais.')
        datosweather("Santiago")
    }
}
datosweather('Santiago')