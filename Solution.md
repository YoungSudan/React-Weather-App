# Full Stack Take Home Challenge

**Included**
- source code
- ReadME file



## Solution approach
The main goal of this challenge was to be able to get multiple pieces of information from a third party and display it. The data that we recive from the api included things like temperature, humidity, wind speed, and weather conditions. Since we have different types of information I deciede to create different components to display each specific piece. This include current weather, Wind data, air quality, and time . As well as a search bar that the user can use to search for the weather information for a specic city.


## Challenges I face
- One challenged I face was when I created all the components and tried to render them with no data recived from the server, this cause an error stating that the data we are attempting to display is not available/null. To avoid this I decided to use a skeleton component (`<Skeleton/>`) that will be displayed while the UI is waiting for the server to send the information back (either data or errors)
- Another problem I faced was dynamically displaying the right type of icon (cloud, sun, sunny with cloud) depending on the temperature of the city. For this I found that the openweathermap API returns a icon id that you can use to request an icon image from another endpoint `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
- On the backend A small problem I face was running into CORS issues when attempting to make a request from the UI to the backend, to solve this I added the cors middleware to the express app,, allowing request from any origin (not the best security practive but okay for this case)


## Next steps
If I had more time I have a few improvements that I could have implemented:
- Better spacing & fonts for text and components (flex, grids,avoid whitespace etc) and colour selection
- Add better error handling on the server side (creating custom middleware for error handling) & logging - Cache data we revice from API
- Add ability for uses to track and run previous searches (cache?) and compare two cities
- Multi-day view (working progress)
- write more tests and create CI pipeline to check formatting, tests and integration(github actions, buildkite)


