import { searchURL } from "../config/urls";
import apiClient from "./apiClient";
import { API_KEY } from "./apiKey";

export const searchAPI = async (searchTerm) => {
  const response = await apiClient.get(
    `${searchURL}?api_key=${API_KEY}&language=en-US&include_adult=true&query=${searchTerm}`
  );
  return response.data;
};
