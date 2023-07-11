import { API_BASE_URL } from '../constants/constants';

class AuthApi {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _handleRes = (res) => {
    try {
      if (res.ok) {
        return res.json();
      }
      return res.json().then((err) => {
        throw new Error(err.error);
      });
    } catch (error) {
      throw error;
    }
  };

  register = ({ email, password }) =>
    fetch(`${this._url}/register`, {
      method: 'POST',
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => this._handleRes(res));
}

const authApi = new AuthApi({
  baseUrl: `${API_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default authApi;
