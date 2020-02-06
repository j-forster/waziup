"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
async function getDeviceSensors(device) {
    var sensors = await api_1.get(`devices/${device}/sensors`);
    sensors.forEach(api_1.polishEntity);
    return sensors;
}
exports.getDeviceSensors = getDeviceSensors;
async function addDeviceSensor(device, sensor) {
    return api_1.set(`devices/${device}/sensors`, sensor);
}
exports.addDeviceSensor = addDeviceSensor;
async function getDeviceSensor(device, sensor) {
    var ent = await api_1.get(`devices/${device}/sensors/${sensor}`);
    api_1.polishEntity(ent);
    return ent;
}
exports.getDeviceSensor = getDeviceSensor;
exports.deleteDeviceSensor = (device, sensor) => api_1.del(`devices/${device}/sensors/${sensor}`);
exports.getDeviceSensorValue = (device, sensor) => api_1.get(`devices/${device}/sensors/${sensor}/value`);
exports.addDeviceSensorValue = (device, sensor, val) => api_1.set(`devices/${device}/sensors/${sensor}/value`, val);
async function getDeviceSensorValues(device, sensor) {
    var values = await api_1.get(`devices/${device}/sensors/${sensor}/values`);
    values.forEach(api_1.polishValue);
    return values;
}
exports.getDeviceSensorValues = getDeviceSensorValues;
exports.addDeviceSensorValues = (device, sensor, val) => api_1.set(`devices/${device}/sensors/${sensor}/values`, val);
exports.setDeviceSensorMeta = (device, sensor, meta) => api_1.set(`devices/${device}/sensors/${sensor}/meta`, meta);
//# sourceMappingURL=sensors.js.map