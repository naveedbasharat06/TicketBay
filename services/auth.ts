import apiService from "./apiService";
export const register = async (user: any) => {
  const response = await apiService.post<any>("/api/users", user);
  return response.data;
};

