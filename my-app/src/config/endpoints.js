/*
URLs for retrieving weather information. Notice these links are incomplete as it ends with "?city="

We will be appending the city name to the end of the string prior to our network calls, so the backend
knows which city we are inquiring.

The information is cached from https://openweathermap.org, due to API limitation we will use static
copies of the weather data for now.

This static endpoint is defaulted to "edmonton", with 4 other possible query inputs:
"vancouver", "montreal", "calgary", and "toronto".
*/


export const USER_TOKEN = 'BQCMFsTZaMMmrlTj1YSXTRR7en8sqehOLr_xxMP03rXnpFuDschUwnNikx-xQfSZLjWNKy380NhbefdqZ5U';

export const URL_GET_ALBUM = 'https://api.spotify.com/v1/audio-analysis/06AKEBrKUckW0KREUWRnvT'