class Auth {
  constructor({ link, headers }) {
    this.link = link;
    this.headers = headers;
  }

  _checkTheApiResponse(res) {
    if (!res.ok) {
      return Promise.reject(`${res.status} error!`);
    }
    return res.json();
  }

  registerUser(userData) {
    return fetch(`${this.link}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(userData)
    })
      .then((res) => this._checkTheApiResponse(res))
      .then((data) => {
        localStorage.setItem('jwt', data.token);
        return this.validateUserToken(data.token);
      });
  }

  validateUserToken(token) {
    return fetch(`${this.link}/users/me`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => this._checkTheApiResponse(res));
  }

  userLogin(loginData) {
    return fetch(`${this.link}/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData)
    })
      .then((res) => this._checkTheApiResponse(res))
      .then((data) => {
        localStorage.setItem('jwt', data.token);
        return this.validateUserToken(data.token);
      })
  }
};

const auth = new Auth({
  link: 'https://register.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default auth;