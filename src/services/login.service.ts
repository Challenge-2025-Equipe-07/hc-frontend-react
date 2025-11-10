import type { UserType } from "@/context/LoginContext.types";

const BASE_URL = import.meta.env.VITE_SERVER_URL;

class LoginService {
  async login(username: string, token: string): Promise<UserType> {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, token }),
    });

    if (!response.ok) {
      throw new Error("Credenciais incorretas");
    }

    const data = await response.json();
    return data;
  }
}

export default new LoginService();
