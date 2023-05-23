class Auth {
  constructor({ link }) {
    this.link = link;
  }

  _checkTheApiResponse(res) {
    if (!res.ok) {
      return Promise.reject(`${res.status} error!`);
    }
    return res.json();
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

  registerUser({ newEmail, newPassword }) {
    return fetch(`${this.link}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password: newPassword, email: newEmail })
    })
      .then((res) => this._checkTheApiResponse(res))
  }

  userLogin({ newEmail, newPassword }) {
    return fetch(`${this.link}/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password: newPassword, email: newEmail })
    })
      .then((res) => this._checkTheApiResponse(res))
      .then((data) => {
        localStorage.setItem('jwt', data.token);
        localStorage.setItem('email', newEmail);
        return this.validateUserToken(data.token);
      })
  }
};

const auth = new Auth({
  link: 'https://register.nomoreparties.co',
});

export default auth;