"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
exports.getID = () => api_1.get("device/id");
exports.getName = () => api_1.get("device/name");
exports.setName = (name) => api_1.set("device/name", name);
async function getSensors(device) {
    var sensors = await api_1.get("sensors");
    sensors.forEach(api_1.polishEntity);
    return sensors;
}
exports.getSensors = getSensors;
async function getSensor(device, sensor) {
    var ent = await api_1.get(`sensors/${sensor}`);
    api_1.polishEntity(ent);
    return ent;
}
exports.getSensor = getSensor;
exports.deleteSensor = (id) => api_1.del(`sensors/${id}`);
exports.getSensorValue = (id) => api_1.get(`sensors/${id}/value`);
exports.addSensorValue = (id, val) => api_1.set(`sensors/${id}/value`, val);
async function getSensorValues(id) {
    var values = await api_1.get(`sensors/${id}/values`);
    values.forEach(api_1.polishValue);
    return values;
}
exports.getSensorValues = getSensorValues;
exports.addSensorValues = (id, val) => api_1.set(`sensors/${id}/values`, val);
exports.setSensorMeta = (id, meta) => api_1.set(`sensors/${id}/meta`, meta);
async function getActuators() {
    var actuators = await api_1.get("actuators");
    actuators.forEach(api_1.polishEntity);
    return actuators;
}
exports.getActuators = getActuators;
async function getActuator(id) {
    var actuator = await api_1.get(`actuators/${id}`);
    api_1.polishEntity(actuator);
    return actuator;
}
exports.getActuator = getActuator;
exports.deleteActuator = (id) => api_1.del(`actuators/${id}`);
exports.getActuatorValue = (id) => api_1.get(`actuators/${id}/value`);
exports.addActuatorValue = (id, val) => api_1.set(`actuators/${id}/value`, val);
async function getActuatorValues(id) {
    var values = await api_1.get(`actuators/${id}/values`);
    values.forEach(api_1.polishValue);
    return values;
}
exports.getActuatorValues = getActuatorValues;
exports.addActuatorValues = (id, val) => api_1.set(`actuators/${id}/values`, val);
exports.setActuatorMeta = (id, meta) => api_1.set(`actuators/${id}/meta`, meta);
//# sourceMappingURL=short.js.map