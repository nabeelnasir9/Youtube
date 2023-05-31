import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    q: "music",
    part: "snippet,id",
    regionCode: "US",
    maxResults: "50",
    order: "date",
  },
  headers: {
    "X-RapidAPI-Key": '01f08bfe4amshfdbf7c357c75117p177417jsnc57a2d87a6c3',
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
