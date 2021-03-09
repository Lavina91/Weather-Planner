// empty array to store all the cities searched 
const searchCities = []


// functions needed

// const init = () => { };

const getAllWeather = (city) => {

   

    // making an ajax call to get the long & lat that the user inputs 
    $.ajax({
        url: `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=7500a47b30cd4310992a9f8b1a25d78d`,
        method: 'GET'
    }).then((data) => {

        // convenience variable to store url link for ajax call with the long & lat previous gotten from above 
        let query = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.results[0].geometry.lat}&lon=${data.results[0].geometry.lng}&appid=097365eec18aa66e2025fa7ae2dc7c31`

            $.ajax({
                url: query,
                method: 'GET'
            }).then((res) => {


                
// ------------ CURRENT DAY ---------------------------------------------------------------------------------

// adding the city's name and the date of the weather's forecast
            var unixTime = res.current.dt;
            var date = new Date(unixTime * 1000);
            $('.city').text(`${city} ${date.toDateString()}`);

// adding the weather condition of current day of the city the user searched for 
            $('.condition0').html(` Condition: ${res.current.weather[0].description}<img src='http://openweathermap.org/img/w/${res.current.weather[0].icon}.png' alt='Icon depicting current weather.'>`);

// adding the temp (in F) of the current day of the city the user searched for 
            var tempF = (res.current.temp - 273.15) * 1.8 + 32;
            $('.temp0').text(`Temp : ${tempF.toFixed(2)}F`);

// adding the UV index of the current day of the city the user searched for 
            $('.uvi0').text(`UVI: ${res.current.uvi}`);

// adding a color background depending on how high the UVI is that day
            if (res.current.uvi >= 0 && res.current.uvi <= 2) {
                $('.uvi0').attr('style', 'background-color:green')
            } else if (res.current.uvi >= 3 && res.current.uvi <= 6) {
                $('.uvi0').attr('style', 'background-color:yellow')
            } else if (res.current.uvi >= 6 && res.current.uvi <= 8) {
                $('.uvi0').attr('style', 'background-color:orange')
            } else if (res.current.uvi >= 8 && res.current.uvi <= 11) {
                $('.uvi0').attr('style', 'background-color:red')
            }

// adding the humidity of the current day of the city the user searched for 
            $('.humidity0').text(`Humidity: ${res.current.humidity}`);

// adding the wind speed of the current day of the city the user searched for 
            $('.wind-speed').text(`Wind Speed: ${res.current.wind_speed}`);


// ------------- NEXT DAY[0] --------------------------------------------------------------------------------

            var unixTime = res.daily[1].dt;
            var date = new Date(unixTime * 1000);
            $('#nextDay').text(`${date.toDateString()}`);


            $('.condition1').html(` Condition: ${res.daily[1].weather[0].description}<img src='http://openweathermap.org/img/w/${res.daily[1].weather[0].icon}.png' alt='Icon depicting current weather.'>`);

            var tempMinF = (res.daily[1].temp.min - 273.15) * 1.8 + 32;
            var tempMaxF = (res.daily[1].temp.max - 273.15) * 1.8 + 32;

            $('.temp1').text(`Temp:  Min: ${tempMinF.toFixed(2)}F
                                     Max: ${tempMaxF.toFixed(2)}F`);


            $('.uvi1').text(`UVI : ${res.daily[1].uvi}`);

            if (res.daily[1].uvi >= 0 && res.daily[1].uvi <= 2) {
                $('.uvi1').attr('style', 'background-color:green')
            } else if (res.daily[1].uvi >= 3 && res.daily[1].uvi <= 6) {
                $('.uvi1').attr('style', 'background-color:yellow')
            } else if (res.daily[1].uvi >= 6 && res.daily[1].uvi <= 8) {
                $('.uvi1').attr('style', 'background-color:orange')
            } else if (res.daily[1].uvi >= 8 && res.daily[1].uvi <= 11) {
                $('.uvi1').attr('style', 'background-color:red')
            }

            $('.humidity1').text(`Humidity: ${res.daily[1].humidity}`);

// ------------- NEXT DAY[1] -------------------------------------------------------------------------------

            var unixTime = res.daily[2].dt;
            var date = new Date(unixTime * 1000);
            $('#nextDay1').text(`${date.toDateString()}`);

            $('.condition2').html(` Condition: ${res.daily[2].weather[0].description}<img src='http://openweathermap.org/img/w/${res.daily[2].weather[0].icon}.png' alt='Icon depicting current weather.'>`);

            var tempMinF = (res.daily[2].temp.min - 273.15) * 1.8 + 32;
            var tempMaxF = (res.daily[2].temp.max - 273.15) * 1.8 + 32;

            $('.temp2').text(`Temp:  Min: ${tempMinF.toFixed(2)}F
                                     Max: ${tempMaxF.toFixed(2)}F`);


            $('.uvi2').text(`UVI : ${res.daily[2].uvi}`);

            if (res.daily[2].uvi >= 0 && res.daily[3].uvi <= 2) {
                $('.uvi2').attr('style', 'background-color:green')
            } else if (res.daily[2].uvi >= 3 && res.daily[2].uvi <= 6) {
                $('.uvi2').attr('style', 'background-color:yellow')
            } else if (res.daily[2].uvi >= 6 && res.daily[2].uvi <= 8) {
                $('.uvi2').attr('style', 'background-color:orange')
            } else if (res.daily[2].uvi >= 8 && res.daily[2].uvi <= 11) {
                $('.uvi2').attr('style', 'background-color:red')
            }


            $('.humidity2').text(`Humidity: ${res.daily[2].humidity}`);


 // ------------- NEXT DAY[2]--------------------------------------------------------------------------------

            var unixTime = res.daily[3].dt;
            var date = new Date(unixTime * 1000);
            $('#nextDay2').text(`${date.toDateString()}`);

            $('.condition3').html(` Condition: ${res.daily[3].weather[0].description}<img src='http://openweathermap.org/img/w/${res.daily[3].weather[0].icon}.png' alt='Icon depicting current weather.'>`);

            var tempMinF = (res.daily[3].temp.min - 273.15) * 1.8 + 32;
            var tempMaxF = (res.daily[3].temp.max - 273.15) * 1.8 + 32;

            $('.temp3').text(`Temp:  Min: ${tempMinF.toFixed(2)}F
                                     Max: ${tempMaxF.toFixed(2)}F`);


            $('.uvi3').text(`UVI : ${res.daily[3].uvi}`);

            if (res.daily[3].uvi >= 0 && res.daily[3].uvi <= 2) {
                $('.uvi3').attr('style', 'background-color:green')
            } else if (res.daily[3].uvi >= 3 && res.daily[3].uvi <= 6) {
                $('.uvi3').attr('style', 'background-color:yellow')
            } else if (res.daily[3].uvi >= 6 && res.daily[3].uvi <= 8) {
                $('.uvi3').attr('style', 'background-color:orange')
            } else if (res.daily[3].uvi >= 8 && res.daily[3].uvi <= 11) {
                $('.uvi3').attr('style', 'background-color:red')
            }


            $('.humidity3').text(`Humidity: ${res.daily[3].humidity}`);


// ------------- NEXT DAY[3] --------------------------------------------------------------------------------

            var unixTime = res.daily[4].dt;
            var date = new Date(unixTime * 1000);
            $('#nextDay3').text(`${date.toDateString()}`);

            $('.condition4').html(` Condition: ${res.daily[4].weather[0].description}<img src='http://openweathermap.org/img/w/${res.daily[4].weather[0].icon}.png' alt='Icon depicting current weather.'>`);

            var tempMinF = (res.daily[4].temp.min - 273.15) * 1.8 + 32;
            var tempMaxF = (res.daily[4].temp.max - 273.15) * 1.8 + 32;

            $('.temp4').text(`Temp:  Min: ${tempMinF.toFixed(2)}F
                                     Max: ${tempMaxF.toFixed(2)}F`);


            $('.uvi4').text(`UVI : ${res.daily[4].uvi}`);

            if (res.daily[4].uvi >= 0 && res.daily[4].uvi <= 2) {
                $('.uvi4').attr('style', 'background-color:green')
            } else if (res.daily[4].uvi >= 3 && res.daily[4].uvi <= 6) {
                $('.uvi4').attr('style', 'background-color:yellow')
            } else if (res.daily[4].uvi >= 6 && res.daily[4].uvi <= 8) {
                $('.uvi4').attr('style', 'background-color:orange')
            } else if (res.daily[4].uvi >= 8 && res.daily[4].uvi <= 11) {
                $('.uvi4').attr('style', 'background-color:red')
            }


            $('.humidity4').text(`Humidity: ${res.daily[4].humidity}`);


// ------------- NEXT DAY[4] --------------------------------------------------------------------------------

            var unixTime = res.daily[5].dt;
            var date = new Date(unixTime * 1000);
            $('#nextDay4').text(`${date.toDateString()}`);

            $('.condition5').html(` Condition: ${res.daily[5].weather[0].description}<img src='http://openweathermap.org/img/w/${res.daily[5].weather[0].icon}.png' alt='Icon depicting current weather.'>`);

            var tempMinF = (res.daily[5].temp.min - 273.15) * 1.8 + 32;
            var tempMaxF = (res.daily[5].temp.max - 273.15) * 1.8 + 32;

            $('.temp5').text(`Temp:  Min: ${tempMinF.toFixed(2)}F
                                     Max: ${tempMaxF.toFixed(2)}F`);


            $('.uvi5').text(`UVI : ${res.daily[5].uvi}`);

            if (res.daily[5].uvi >= 0 && res.daily[5].uvi <= 2) {
                $('.uvi5').attr('style', 'background-color:green')
            } else if (res.daily[5].uvi >= 3 && res.daily[5].uvi <= 6) {
                $('.uvi5').attr('style', 'background-color:yellow')
            } else if (res.daily[5].uvi >= 6 && res.daily[5].uvi <= 8) {
                $('.uvi5').attr('style', 'background-color:orange')
            } else if (res.daily[5].uvi >= 8 && res.daily[5].uvi <= 11) {
                $('.uvi5').attr('style', 'background-color:red')
            }


            $('.humidity5').text(`Humidity: ${res.daily[5].humidity}`)
        })
    });

    // cityButtons();
};


const cityButtons = () => {
    $('#buttonDiv').empty();

    searchCities.forEach(city => {
        // $('#buttonDiv').empty();
        console.log(city)

        btnEl = $('<button>');

        btnEl.addClass('btn btn-primary mb-3 btn-sm')
        btnEl.attr('style', 'width:100px')
        btnEl.text(city)

       $('#buttonDiv').append(btnEl)


        btnEl.on('click', function (event) {
            getAllWeather(city)
        })

    })
}

$('#add-city').on('click', function (event) {
    event.preventDefault();

    // grabbing the value of the city the user inputs 
    let cityName = $('#city-input').val().trim()

    getAllWeather(cityName);

    searchCities.push(cityName)
    localStorage.setItem('city', JSON.stringify(searchCities))

    cityButtons();

});


