import http from "./httpService";
import { apiUrl } from "../config.json";

export function getWorkouts() {
  return http.get(apiUrl + "/workouts");
}
