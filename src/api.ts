import { config } from "./config";
import { Device, Sensor, Actuator, ValueWithTime, CloudStatus } from "./waziup";

/** @hidden */
var univFetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>;

if (process.title !== "browser") {
    univFetch = require('node-fetch');
} else {
    univFetch = window.fetch;
}

/**
 * @category Generic API
 */
export async function get<T>(path: string) {
    var resp = await univFetch(config.toURL(path));
    if(!resp.ok) {
        if(resp.headers.get("Content-Type").startsWith("application/json")) {
            var data = await resp.json();
            throw data;
        } else {
            var text = await resp.text();
            throw text;
        }
    }
    var data = await resp.json();
    if(!resp.ok) throw data;
    return data as T;
}

/**
 * @category Generic API
 */
export async function del(path: string) {
    var resp = await univFetch(config.toURL(path), {
        method: "DELETE"
    });
    if(!resp.ok) {
        if(resp.headers.get("Content-Type").startsWith("application/json")) {
            var data = await resp.json();
            throw data;
        } else {
            var text = await resp.text();
            throw text;
        }
    }
    return;
}


/**
 * @category Generic API
 */
export async function set<T=void>(path: string, val: any) {
    var resp = await univFetch(config.toURL(path), {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(val)
    });
    if(!resp.ok) {
        if(resp.headers.get("Content-Type").startsWith("application/json")) {
            var data = await resp.json();
            throw data;
        } else {
            var text = await resp.text();
            throw text;
        }
    }
    if(resp.headers.get("Content-Type").startsWith("application/json")) {
        var data = await resp.json();
        return data as T;
    }
    return;
}

/** @hidden */
export function polishEntity(ent: Sensor | Actuator) {
    ent.modified = new Date(ent.modified);
    ent.created = new Date(ent.created);
    ent.time = new Date(ent.time);
}

/** @hidden */
export function polishDevice(device: Device) {
    device.created = new Date(device.created);
    device.modified = new Date(device.modified);
    device.sensors.forEach(polishEntity);
    device.actuators.forEach(polishEntity);
}

/** @hidden */
export function polishValue(val: ValueWithTime) {
    val.time = new Date(val.time);
}

/** @hidden */
export function polishCloudStatus(status: CloudStatus) {
    for(var stat of status) {
        stat.status.remote = new Date(stat.status.remote);
        stat.status.wakeup = new Date(stat.status.wakeup);
    }
}

