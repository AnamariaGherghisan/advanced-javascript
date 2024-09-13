# Weather App CLI

## User Story

> As a CLI user I should be able view current and a 5 day forecast weather information for a specific city

## Acceptance Criteria

- When the application starts I should be presented with the first question:
  ```
  Enter a city name:
  ```
- After entering a valid city name I should be promoted with a choice question:

  ```
  Select the weather information you want to display:
  - Current forecast
  - 5 day forecast
  - Current and 5 day forecast
  ```

- When I select the option of current forecast then I should be presented with the weather information containing the following fields:

  - city name
  - temperature
  - humidity
  - pressure
  - wind speed
  - weather description

- When I select the option of 5 day forecast then I should be presented with the weather information containing the following fields:

  - formatted date (Monday 15th January, 2024)
  - minimum temperature
  - maximum temperature
  - humidity
  - pressure
  - wind speed
  - weather description
  - uv index

- When I select the option of current forecast and 5 day forecast then I should be presented with the weather information containing the following fields:

  Current forecast:

  - city name
  - temperature
  - humidity
  - pressure
  - wind speed
  - weather description

  5 day forecast:

  - formatted date (Monday 15th January, 2024)
  - minimum temperature
  - maximum temperature
  - humidity
  - pressure
  - wind speed
  - weather description
  - uv index

- If the application was unsuccessful in fetching the weather data then an error message should be displayed `"Failed to fetch weather information. Please enter a valid city name."`

## URLS

[Current Data](https://api.openweathermap.org/data/2.5/weather?q=london&appid=393609ac7b2e5f25ccdd00e626ee13dd)

[Daily forecast Data](https://api.openweathermap.org/data/2.5/onecall?lat=51.5085&lon=0.1257&appid=393609ac7b2e5f25ccdd00e626ee13dd&exclude=hourly,minutely)
