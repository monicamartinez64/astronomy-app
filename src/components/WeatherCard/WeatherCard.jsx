import React from 'react';

const WeatherCard = (props) => {
    return (
        <>
            {props.weatherData.name ? 
                <>
                    {props.weatherData.message ? 
                    <h4>{props.weatherData.message}</h4>
                    :
                    <>
                        <div class="col s12 m7">
                            <h4 class="header">Current Weather for {props.weatherData.name}, {props.weatherData.sys.country}</h4>
                            <div class="card horizontal">
                                <div class="card-stacked">
                                    <div class="card-content">
                                        <p>Conditions:  {props.weatherData.weather[0].main} </p>
                                        <p>Temperature:  {props.weatherData.main.temp} &deg;F </p>
                                        <p>Feels Like:  {props.weatherData.main.feels_like} &deg;F </p>
                                        <p>Humidity:  {props.weatherData.main.humidity}% </p>
                                        <p>Pressure:  {(props.weatherData.main.pressure / 33.864).toFixed(2)} inHg </p>
                                        <p>Visibility:  {(props.weatherData.visibility / 1609).toFixed(1)} miles</p>
                                        <p>Wind:  {(props.weatherData.wind.speed).toFixed(1)} mph</p>
                                        <p>Wind Gusts:  {props.weatherData.wind.gust ? `${(props.weatherData.wind.gust)} mph` : '0 mph'}</p>
                                        <p>Cloud Cover:  {props.weatherData.clouds.all} %</p>
                                        <p>Sunrise:  {props.sunrise} AM</p>
                                        <p>Sunset:  {props.sunset} PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    }
                </>
                :
                <>
                </>
            }
        </>
    )
}

export default WeatherCard;