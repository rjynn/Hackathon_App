/*
This helper file is responsible for fetching weather & forecast data from a given city name.

We will be using axios network helper to perform these api calls. https://github.com/axios/axios

At the end of each function call, we will return resulting Promise object created by axios back to
the consumer. It will be up to the consumer (caller) to handle success/failure of these network calls.
*/

import axios from 'axios';

import { USER_TOKEN, URL_GET_ALBUM } from '../config/endpoints';

export const getAlbum = () => {
  const url = URL_GET_ALBUM;
  var headers = {"Authorization": "Bearer "+USER_TOKEN};
  return axios.get(url,{"headers":headers});
};
