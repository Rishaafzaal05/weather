function getweather(){
    const pickCity_name = document.querySelector( "#city1").value ;
    alert(pickCity_name)
   axios.get('/https://api.weatherapi.com/v1/current.json?key=14d3251c4bcd46b494d82435241912&q=London&aqi=no')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    
  })
}