import type { UserDTO } from "@/types/global.types";

const BASE_URL = import.meta.env.VITE_SERVER_URL;
class UserService {
  async getUserById(id: string): Promise<UserDTO> {
    const response = await fetch(`${BASE_URL}/user/${id}`);

    if (!response.ok) {
      throw new Error(`User info on id ${id} failed`);
    }

    const data = await response.json();

    return data;
  }
  async editUserById(
    id: string,
    username: UserDTO["username"],
  ): Promise<UserDTO> {
    const response = await fetch(`${BASE_URL}/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });
    if (!response.ok) {
      throw new Error(`Error while editing user ${id}`);
    }
    const data = await response.json();
    return data;
  }
}

export default new UserService();
