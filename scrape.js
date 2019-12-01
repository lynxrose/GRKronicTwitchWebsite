$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Pacifica&APPID=364c147903df053a3548bef5ff49be68",
function(data){

    console.log(data);
    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = ((data.main.temp - 273.15)*9)/5 + 32;

    $('.weather-icon').attr('src',icon);
    $('.temp').append(temp);

    }
);

