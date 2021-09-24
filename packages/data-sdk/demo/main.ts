import { Authentication, Fleet } from "../src/main";
import "./style.css";
(async function () {
  const el = document.querySelector("#app");
  if (el) {
    el.innerHTML = "Connecting";
    if (await Authentication.waitTilAuthenticated()) {
      el.innerHTML = "Authenticated";
      const device = await Fleet.getCurrentDevice();
      console.log(await device.getAvailableCommands());
      await device.sendCommand("get_ros_bag", "bar");
    } else {
      el.innerHTML = "Not Authenticated";
    }
  }
})();
