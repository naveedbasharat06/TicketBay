import apiService from "./apiService";
export const addBooking = async (user: any) => {
    const response = await apiService.post<any>("/api/bookings", user);
    return response.data;
  };