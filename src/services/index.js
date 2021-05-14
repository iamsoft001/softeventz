import axios from "axios";
import { v4 } from "uuid";

export const apiClient = axios.create({
  baseURL: "/api/v1",
});

export const uuid = v4;
