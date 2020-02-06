"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
exports.getClouds = () => api_1.get("clouds");
exports.addCloud = (cloud) => api_1.set("clouds", cloud);
exports.getCloud = (id) => api_1.get(`clouds/${id}`);
exports.deleteCloud = (id) => api_1.del(`clouds/${id}`);
exports.setCloudPaused = (id, paused) => api_1.set(`clouds/${id}/paused`, paused);
exports.setCloudCredentials = (id, cred) => api_1.set(`clouds/${id}/credentials`, cred);
async function getCloudStatus(id) {
    var status = await api_1.get(`clouds/${id}/status`);
    api_1.polishCloudStatus(status);
    return status;
}
exports.getCloudStatus = getCloudStatus;
//# sourceMappingURL=clouds.js.map