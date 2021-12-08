import {
  POPULAR_BASE_URL,
  TOP_BASE_URL,
  UP_BASE_URL,
  GENR,
  API_URL,
  API_KEY,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL
} from './config';

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const apiSettings = {
  fetchMovies: async (page) => {
    const endpoint = `${POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchGenr: async () => {
    const endpoint = `${GENR}`;
    return await (await fetch(endpoint)).json();
  },
  fetchByGen: async (genre, page) => {
    const endpoint = `${POPULAR_BASE_URL}&page=${page}with_genres=${genre}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMoviesUp: async (page) => {
    const endpoint = `${UP_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMoviesTop: async (page) => {
    const endpoint = `${TOP_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async movieId => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async movieId => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },
  getRequestToken: async () => {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
    return reqToken.request_token;
  },
  authenticate: async (requestToken, username, password) => {
    const bodyData = {
      username,
      password,
      request_token: requestToken
    };
    const data = await (
      await fetch(LOGIN_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData)
      })
    ).json();
    if (data.success) {
      const sessionId = await (
        await fetch(SESSION_ID_URL, {
          ...defaultConfig,
          body: JSON.stringify({ request_token: requestToken })
        })
      ).json();
      return sessionId;
    }
  },
 };

export default apiSettings;
