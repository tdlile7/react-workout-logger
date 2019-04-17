import Raven from "raven-js";

function init() {
  Raven.config("https://63fe9703a1ec4bf7983b3c44bc2a40f2@sentry.io/1441451", {
    release: "1-0-0",
    environment: "development"
  }).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log
};
