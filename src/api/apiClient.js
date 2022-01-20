import axios from "axios";
import { movieURL } from "../config/urls";

const apiClient = axios.create({
  baseURL: movieURL,
});

export default apiClient;
