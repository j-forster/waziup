"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
async function getDeviceActuators(device) {
    var actuators = await api_1.get(`devices/${device}/actuators`);
    actuators.forEach(api_1.polishEntity);
    return actuators;
}
exports.getDeviceActuators = getDeviceActuators;
exports.addDeviceActuator = (device, actuator) => api_1.set(`devices/${device}/actuators`, actuator);
async function getDeviceActuator(device, actuator) {
    var ent = await api_1.get(`devices/${device}/actuators/${actuator}`);
    api_1.polishEntity(ent);
    return ent;
}
exports.getDeviceActuator = getDeviceActuator;
exports.deleteDeviceActuator = (device, actuator) => api_1.del(`devices/${device}/actuators/${actuator}`);
exports.getDeviceActuatorValue = (device, actuator) => api_1.get(`devices/${device}/actuators/${actuator}/value`);
exports.addDeviceActuatorValue = (device, actuator, val) => api_1.set(`devices/${device}/actuators/${actuator}/value`, val);
async function getDeviceActuatorValues(device, actuator) {
    var values = await api_1.get(`devices/${device}/actuators/${actuator}/values`);
    values.forEach(api_1.polishValue);
    return values;
}
exports.getDeviceActuatorValues = getDeviceActuatorValues;
exports.addDeviceActuatorValues = (device, actuator, val) => api_1.set(`devices/${device}/actuators/${actuator}/values`, val);
exports.setDeviceActuatorMeta = (device, actuator, meta) => api_1.set(`devices/${device}/actuators/${actuator}/meta`, meta);
//# sourceMappingURL=actuators.js.map