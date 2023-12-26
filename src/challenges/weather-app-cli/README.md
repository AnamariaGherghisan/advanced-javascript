# Weather App CLI

## User Story

> As a CLI user I should be able view current and a 5 day forecast weather information for a specific city

## Acceptance Criteria

- When the application starts I should be presented with 2 questions:
  ```
  Enter a city name:
  Would you like to view the 5-day weather forecast?
  ```
- The weather information presented should be in 2 sections
  - Current weather data
  - Daily forecast weather data (only if you have selected YES in question 2)
- If the application was unsuccessful in fetching the weather data then an error message should be displayed `"Failed to fetch weather information. Please enter a valid city name."`
- Current weather information should have the following details:
  - city name
  - temperature
  - humidity
  - pressure
  - wind speed
  - weather description
- Daily forecast weather information should be a list of containing the following details for each day:
  - formatted date (Fri, 2nd Dec, 2022)
  - minimum temperature
  - maximum temperature
  - humidity
  - pressure
  - wind speed
  - weather description
  - uv index

## URLS

[Current Data](https://api.openweathermap.org/data/2.5/weather?q=london&appid=393609ac7b2e5f25ccdd00e626ee13dd)

[Daily forecast Data](https://api.openweathermap.org/data/2.5/onecall?lat=51.5085&lon=0.1257&appid=393609ac7b2e5f25ccdd00e626ee13dd&units=imperial)
