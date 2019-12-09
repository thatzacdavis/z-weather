import { getForecast } from './api/forecast';

const updateDOM = (weather) => {
    const summaryIcon = document.getElementById("summary-icon");
    var skycons = new Skycons({"color": "blue"});
    skycons.add(summaryIcon, weather.currently.icon);

    const summary = document.getElementById('summary');
    summary.innerText = weather.currently.summary;

    const currentTemp = document.getElementById('current-temp');
    currentTemp.innerText = Math.round(weather.currently.apparentTemperature) + '°';

    const dailySummary = document.getElementById('daily-summary');
    dailySummary.innerText = weather.daily.summary;

    const today = weather.daily.data[0];
    const todayTemp = document.getElementById('today-temp');
    todayTemp.innerText = Math.round(today.apparentTemperatureHigh) + '°';
    const todayIcon = document.getElementById('today-icon');
    skycons.add(todayIcon, today.icon);
    const todaySummary = document.getElementById('today-summary');
    todaySummary.innerText = today.summary;

    const tomorrow = weather.daily.data[1];
    const tomorrowTemp = document.getElementById('tomorrow-temp');
    tomorrowTemp.innerText = Math.round(tomorrow.apparentTemperatureHigh) + '°';
    const tomorrowIcon = document.getElementById('tomorrow-icon');
    skycons.add(tomorrowIcon, tomorrow.icon);
    const tomorrowSummary = document.getElementById('tomorrow-summary');
    tomorrowSummary.innerText = tomorrow.summary;

    const dayAfterTomorrow = weather.daily.data[2];
    const dayAfterTemp = document.getElementById('day-after-temp');
    dayAfterTemp.innerText = Math.round(dayAfterTomorrow.apparentTemperatureHigh) + '°';
    const dayAfterIcon = document.getElementById('day-after-icon');
    skycons.add(dayAfterIcon, dayAfterTomorrow.icon);
    const dayAfterSummary = document.getElementById('day-after-summary');
    dayAfterSummary.innerText = dayAfterTomorrow.summary;

    skycons.play();
};

getForecast(updateDOM);
