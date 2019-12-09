# z Weather

[Deployed Version](http://z-weather.surge.sh/)

The main page shows the current weather as well as a short 3-day forecast for Philly. By clicking on the history icon next to the current temperature, you can see the historical temperature over the last 10 years at the current day and time.

## Goal

The goal of this project is to build something cool in JavaScript without using a framework. I chose to use the [DarkSky API](https://darksky.net/dev) along with Skycons [Bootstrap 4](https://getbootstrap.com/), and [FontAwesome 5](https://fontawesome.com/) to make a simple 3-day weather application with a historical view of the temperatures for Philly. I also used it as a chance to learn how to use [Parcel](https://parceljs.org/).

## How to Run

If you wish to run z Weather locally, you need to:

1. Get a DarkSky API key and set it to the `darkSkyKey` environment variable.
2. Run `yarn install`.
3. Run `yarn start`.

## To Do

1. Unit tests
2. Favicon
