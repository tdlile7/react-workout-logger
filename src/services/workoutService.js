import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = `${apiUrl}/users/workouts`;

function workoutUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getWorkouts() {
  return http.get(apiEndpoint);
}

export function saveWorkout(workout) {
  console.log(workout);
  return http.post(apiEndpoint, workout);
}

export function deleteWorkout(workoutId) {
  return http.delete(workoutUrl(workoutId));
}
