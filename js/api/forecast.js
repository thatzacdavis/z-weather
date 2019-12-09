import axios from 'axios';
import { corsAnywhereURL } from '../constants';

const apiKey = process.env.DARK_SKY_KEY;
const latitude = "39.9526";
const longitude = "-75.1652";

const forecastURL = `${corsAnywhereURL}https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`;

export function getForecast(callback) {
    axios
    .get(forecastURL)
    .then(function(response) {
        // handle success
        const weather = response.data;
        callback(weather);
    })
    .catch(function(error) {
        // handle error
        console.log(error);
    });
}

export function getHistory(callback) {
    const temps = [];
    let date = new Date();

    for(let lcv=0; lcv<=10; lcv++) {
        const currentTime = Math.trunc(date.getTime() / 1000);
        const historyURL = `${corsAnywhereURL}https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude},${currentTime}`;

        axios
            .get(historyURL)
            .then(function(response) {
                // handle success
                temps.push(response.data.currently.apparentTemperature);
                callback(temps);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
        
        date.setFullYear(date.getFullYear() - lcv);
    }
}
