"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
var univFetch;
if (process.title !== "browser") {
    univFetch = require('node-fetch');
}
else {
    univFetch = window.fetch;
}
async function get(path) {
    var resp = await univFetch(config_1.config.toURL(path));
    if (!resp.ok) {
        if (resp.headers.get("Content-Type").startsWith("application/json")) {
            var data = await resp.json();
            throw data;
        }
        else {
            var text = await resp.text();
            throw text;
        }
    }
    var data = await resp.json();
    if (!resp.ok)
        throw data;
    return data;
}
exports.get = get;
async function del(path) {
    var resp = await univFetch(config_1.config.toURL(path), {
        method: "DELETE"
    });
    if (!resp.ok) {
        if (resp.headers.get("Content-Type").startsWith("application/json")) {
            var data = await resp.json();
            throw data;
        }
        else {
            var text = await resp.text();
            throw text;
        }
    }
    return;
}
exports.del = del;
async function set(path, val) {
    var resp = await univFetch(config_1.config.toURL(path), {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(val)
    });
    if (!resp.ok) {
        if (resp.headers.get("Content-Type").startsWith("application/json")) {
            var data = await resp.json();
            throw data;
        }
        else {
            var text = await resp.text();
            throw text;
        }
    }
    if (resp.headers.get("Content-Type").startsWith("application/json")) {
        var data = await resp.json();
        return data;
    }
    return;
}
exports.set = set;
function polishEntity(ent) {
    ent.modified = new Date(ent.modified);
    ent.created = new Date(ent.created);
    ent.time = new Date(ent.time);
}
exports.polishEntity = polishEntity;
function polishDevice(device) {
    device.created = new Date(device.created);
    device.modified = new Date(device.modified);
    device.sensors.forEach(polishEntity);
    device.actuators.forEach(polishEntity);
}
exports.polishDevice = polishDevice;
function polishValue(val) {
    val.time = new Date(val.time);
}
exports.polishValue = polishValue;
function polishCloudStatus(status) {
    for (var stat of status) {
        stat.status.remote = new Date(stat.status.remote);
        stat.status.wakeup = new Date(stat.status.wakeup);
    }
}
exports.polishCloudStatus = polishCloudStatus;
//# sourceMappingURL=api.js.map