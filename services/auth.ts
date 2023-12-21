import apiService from "./apiService";
import UsersStore from "@/store/users.store";
export const register = async (user: any) => {
  const response = await apiService.post<any>("/api/users", user);
  return response.data;
};


export const login = async (credentials: any) => {
  try {
    const response = await apiService.post<any>('/api/auth/local', credentials);
    UsersStore.addUser(response.data.user)
    UsersStore.setToken(response.data.jwt)
    return response.data.user;
  } catch (error) {
    // Handle login failure
    console.error('Login failed', error);
    throw error;
  }
};

