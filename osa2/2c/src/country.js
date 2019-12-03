import React, { useState, useCallback, useEffect } from 'react'
import axios from 'axios';

export const Country = ({ name }) => {
    const [country, setCountry] = useState();
    const [weather, setWeather] = useState();
    const accessKey = "ca842ea8861accd6f65db0c948a95c5a";
    useEffect(() => {
        axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(({ data }) => setCountry(...data));
      }, []);
    useEffect(() => {
        if(country) {
            axios.get(`http://api.weatherstack.com/current?access_key=${accessKey}&query=${country.capital}`)
            .then(({ data: {
                current: {
                    temperature,
                    weather_icons,
                    wind_speed,
                    wind_dir
                }
            } }) => {
                console.log(weather_icons);
                
                setWeather({
                    temperature,
                    icon: weather_icons[0],
                    wind_speed,
                    wind_dir 
                });
            });
        }
    }, [country])
    // const { capital, population, languages, flag } = country;
    // // name
    return (
        <>
        {
            country ? 
            <>
            <h1>{name}</h1>
            <p>{`capital ${country.capital}`}</p>
            <p>{`populaton ${country.population}`}</p>
            <h3>Languages</h3>
            <ul>
            { 
                country.languages && country.languages.length > 0 ? 
                    country.languages.map(({ name }) => <li key={name}>{name}</li>) :
                    null
            }
            </ul>
            <img src={country && country.flag ? country.flag : ''} alt={`${name}-flag`} width="200px"/>
            <h3>{`Weather in ${country.capital}`}</h3>
            {
                weather ? 
                <>
                    <p>{`${weather.temperature} celcius`}</p>
                    {
                        <img src={weather.icon}/>
                    }
                    <p>{`wind: ${weather.wind_speed} kph direction ${weather.wind_dir}`}</p>
                </> 
                : null
            }
            <p>{}</p>
            </>
            : null
        }
        </>
    )
}