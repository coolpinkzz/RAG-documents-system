import axios from "axios";
import { ApiResponse } from "@/types";

const api = axios.create({
  baseURL: "/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    // Handle session expiration or unauthorized access
    if (response && response.status === 401) {
      if (window.location.pathname !== "/auth") {
        window.location.href = "/auth";
      }
    }

    return Promise.reject(error);
  }
);

export async function fetchWithAuth<T>(
  url: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await api.request({
      url,
      method: options.method || "GET",
      data: options.body ? JSON.parse(options.body as string) : undefined,
      headers: options.headers as any,
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        success: false,
        error: error.response.data.message || "An error occurred",
      };
    }

    return {
      success: false,
      error: "Network error",
    };
  }
}

export default api;
