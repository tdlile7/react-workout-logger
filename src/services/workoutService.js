import http from "./httpService";

const apiEndpoint = `/users/workouts`;

function workoutUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getWorkouts() {
  return http.get(apiEndpoint);
}

export function saveWorkout(workout) {
  return http.post(apiEndpoint, workout);
}

export function deleteWorkout(workoutId) {
  return http.delete(workoutUrl(workoutId));
}
