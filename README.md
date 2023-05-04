# weather-app
Neda Weather Map is a simple web application that shows you the current weather of your location.

Getting Started
To get a local copy of the project, after cloning the repository, open the index.html file in your browser.

Prerequisites
This project requires internet connection to work properly.

Built With
HTML
CSS
JavaScript
API Used
ip-api - Used to get the user's current location.
OpenWeatherMap API - Used to get the current weather data of the user's location.
Authors
Neda Saberi - 
License
This project is licensed under the MIT License - see the LICENSE.md file for details.

Acknowledgments
This project was created as part of my learning journey and inspired by various online resources.

Getting a valid appid
----------------------

To use this weather app, you will need a valid `appid` from OpenWeatherMap. Follow these steps to obtain an appid:

1. Go to the [OpenWeatherMap website](https://openweathermap.org/) and sign up for a free account.

2. Once you have signed up, go to the [API keys page](https://home.openweathermap.org/api_keys) and generate a new API key.

3. Copy the generated API key to your clipboard.

Replacing [YOUR_APPID]
----------------------

Now that you have a valid `appid`, you can replace the `[YOUR_APPID]` placeholder in the code with the actual value. To do this:

1. Open the `weather.js` file in your code editor.

2. Find the line that says `const appid = '[YOUR_APPID]';`.

3. Replace `[YOUR_APPID]` with the actual `appid` value you obtained from the OpenWeatherMap website.

4. Save the `weather.js` file and restart the weather app.

That's it! Your weather app should now be able to retrieve weather data from OpenWeatherMap using your valid `appid`.

