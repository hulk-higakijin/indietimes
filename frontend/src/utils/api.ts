export const API_BASE_URL = "http://localhost:5150/api";

export const fetcher = (url: string, bearer: string) => fetch(url, {
  headers: {
    'Authorization': `Bearer ${bearer}`,
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
