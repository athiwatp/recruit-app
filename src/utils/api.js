import fetchData from './fetch';

const getData = (url, restricted) => fetchData({ url });
const postData = (url, data, restricted) => fetchData({ url, method: 'POST', data, restricted });
const putData = (url, data) => fetchData({ url, method: 'PUT', data });
const deleteData = (url) => fetchData({ url, method: 'DELETE' });

export default {
  getData,
  postData,
  putData,
  deleteData,
};
