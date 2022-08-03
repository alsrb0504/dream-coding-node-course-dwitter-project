export default class AuthService {
  constructor(http) {
    this.http = http;
  }

  async signup(username, password, name, email, url) {
    const res = await this.http.fetch(`/auth/signup`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        name,
        email,
        url,
      }),
    });

    localStorage.setItem("token", res.token);

    return {
      username: res.username,
      token: "abc1234",
    };
  }

  async login(username, password) {
    const res = await this.http.fetch(`/auth/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    // 헤더에 토큰 설정..
    localStorage.setItem("token", res.token);

    return {
      username: res.username,
      // token: res.token,
    };
  }

  async me() {
    const res = await this.http.fetch(`/auth/me`, {
      method: "GET",
    });

    return {
      username: res.username,
      // token: "abc1234",
    };
  }

  async logout() {
    // localStorage.setItem("token", res.token);
    localStorage.clear();

    return;
  }
}
