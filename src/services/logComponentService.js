import http from "./httpService";

const apiEndpoint = `/users/logs`;

function logUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getLogs() {
  return http.get(apiEndpoint);
}

export function saveLog(log) {
  return http.post(apiEndpoint, log);
}

export function deleteLog(logId) {
  return http.delete(logUrl(logId));
}
