import axios from 'axios';
import { API_URL } from '@constants/baseURLs';

async function request(options) {
  const { path, method, headers = {}, body, params } = options;

  const axiosOptions = {
    method,
    url: `${API_URL}${path}`,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    data: body || null,
    params: params || null,
  };

  try {
    const response = await axios(axiosOptions);
    return {
      hasErrors: false,
      data: response.data,
    };
  } catch (error) {
    return {
      hasErrors: true,
      errors: error.response?.data?.message || error.response?.data?.messages,
    };
  }
}

export default request;
