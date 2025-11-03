const BASE_URL = import.meta.env.VITE_API_BASE_URL;

class LoginService {
  async login(username: string, password: string): Promise<string> {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    return data.token;
  }
}

export default new LoginService();
