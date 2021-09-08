export { Fleet } from "./Fleet";
export { Authentication } from "./Authentication";

import { Fleet } from "./Fleet";
import { Authentication } from "./Authentication";

const urlParams = new URLSearchParams(window.location.search);

const urlDevice = urlParams.get("device");
if (urlDevice) {
  Fleet.setDefaultDevice(urlDevice);
}

const urlAuth = urlParams.get("auth");
if (urlAuth) {
  Authentication.loginWithToken(urlAuth);
}
