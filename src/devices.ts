import { ID, Device, Sensor, Value, ValueWithTime, Meta, Actuator } from "./waziup";
import { get, polishDevice, polishEntity, del, set, polishValue } from "./api";


// Devices

export async function getDevices(): Promise<Device[]> {
    var devices = await get<Device[]>("devices");
    devices.forEach(polishDevice);
    return devices;
}

export async function addDevice(device: Device) {
    return set("devices", device);
}

export async function getDevice(id?: ID): Promise<Device> {
    if (!id) {
        var device = await get<Device>("device");
    } else {
        var device = await get<Device>(`devices/${id}`);
    }
    polishDevice(device);
    return device;
}

export var setDeviceName = (id: ID, name: string) => set(`devices/${id}/name`, name);

export var deleteDevice = (id: ID) => del(`devices/${id}`);

export var setDeviceMeta = (id: ID, meta: Meta) => set(`devices/${id}/meta`, meta);