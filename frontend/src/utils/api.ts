const API_BASE_URL_LOCAL = "http://localhost:5150/api"
const API_BASE_URL_PRODUCTION = "https://indietimes-wjkw.shuttle.app/api";

export const API_BASE_URL = process.env.NODE_ENV === "production" ? API_BASE_URL_PRODUCTION : API_BASE_URL_LOCAL;

export const fetcher = (url: string, bearer: string) => fetch(url, {
  headers: {
    'Authorization': `Bearer ${bearer}`,
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
