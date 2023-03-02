
let input = document.querySelector('input')
let button = document.querySelector('button')
let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')  
let img = document.querySelector('img')
let form = document.querySelector('form')
let p = document.querySelector('p')
let h4 = document.querySelector('h4')


async function getData(e){
  e.preventDefault()
  try{
      const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=5bf93f3a9b06437890e62654232702&q=${input.value}&aqi=yes`)
      const data = await res.json()
      console.log(data)
      h2.innerText = data.location.name
      h1.innerText = data.current.temp_c
      let icon = 'https:' + data.current.condition.icon
      img.setAttribute("src" , icon)
      let humidity = data.current.humidity
      let wind_speed = data.current.wind_kph
      console.log(wind_speed)
      h4.innerText=`wind speed ${wind_speed} km/h`

      p.innerText =  ` Humidity ${humidity} %  `
  }catch(error){
      window.alert("Enter Valid City Name")
  }
  form.reset()
}

form.addEventListener("submit" , getData)






// let weather = {
//     "apikey": "5b3ab34c0c303f2a3eec9f02f0fc37e7",
//       fetchweather : function (){
//         fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
//         + city 
//         + "&units=metric&appid=" 
//         + appkey
        
//         ).then((response) => response.json())
//         .then((data) => this.displayweather(data));
//     },

//     displayweather: function(data){
//           const {name} = data;
//           const {icon, description} = data.weather;
//           const { temprature, humidity } = data.main;
//           const { speed } = data.wind;
//           console.log(name, icon, description, temprature, humidity, speed)
//     }
// };