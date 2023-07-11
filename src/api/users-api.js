import { API_BASE_URL } from '../constants/constants';

class UsersApi {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _handleRes = (res) => {
    try {
      if (res.ok) {
        return res.json();
      }
      if (res.status === 404) {
        throw new Error('Not Found');
      }
      return res.json().then((err) => {
        throw new Error(err.error);
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  getUsers = (page) =>
    fetch(`${this._url}/users?page=${page}`, {
      headers: {
        ...this._headers,
      },
    }).then((res) => this._handleRes(res));
}

const usersApi = new UsersApi({
  baseUrl: `${API_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default usersApi;
