import fetch from 'isomorphic-fetch';
const fetchData = ({ url = '', method = 'GET', data = null, restricted = true }) => {
  return fetch(url, fetchOptions(method, data, restricted)).then(fetchResponse);
};

const fetchOptions = (method, data, restricted) => {
  const headers = { 'Content-Type': 'application/json' };
  if (restricted) {
    headers['X-Auth-Token'] = localStorage.getItem('token');
  }

  const body = data ? { body: JSON.stringify(data) } : {};

  return { ...{ headers, method }, ...body };
};

const fetchResponse = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  } else {
    const error = new Error(response.statusText);
    error.json = response;
    throw response;
  }
};

export default fetchData;
