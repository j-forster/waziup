"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
async function getDevices() {
    var devices = await api_1.get("devices");
    devices.forEach(api_1.polishDevice);
    return devices;
}
exports.getDevices = getDevices;
async function addDevice(device) {
    return api_1.set("devices", device);
}
exports.addDevice = addDevice;
async function getDevice(id) {
    if (!id) {
        var device = await api_1.get("device");
    }
    else {
        var device = await api_1.get(`devices/${id}`);
    }
    api_1.polishDevice(device);
    return device;
}
exports.getDevice = getDevice;
exports.setDeviceName = (id, name) => api_1.set(`devices/${id}/name`, name);
exports.deleteDevice = (id) => api_1.del(`devices/${id}`);
exports.setDeviceMeta = (id, meta) => api_1.set(`devices/${id}/meta`, meta);
//# sourceMappingURL=devices.js.map