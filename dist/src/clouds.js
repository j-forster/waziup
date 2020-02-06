"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
function getClouds() {
    return api_1.get("clouds");
}
exports.getClouds = getClouds;
function addCloud(cloud) {
    return api_1.set("clouds", cloud);
}
exports.addCloud = addCloud;
function getCloud(id) {
    return api_1.get(`clouds/${id}`);
}
exports.getCloud = getCloud;
function deleteCloud(id) {
    return api_1.del(`clouds/${id}`);
}
exports.deleteCloud = deleteCloud;
function setCloudPaused(id, paused) {
    return api_1.set(`clouds/${id}/paused`, paused);
}
exports.setCloudPaused = setCloudPaused;
function setCloudCredentials(id, cred) {
    return api_1.set(`clouds/${id}/credentials`, cred);
}
exports.setCloudCredentials = setCloudCredentials;
async function getCloudStatus(id) {
    var status = await api_1.get(`clouds/${id}/status`);
    api_1.polishCloudStatus(status);
    return status;
}
exports.getCloudStatus = getCloudStatus;
//# sourceMappingURL=clouds.js.map