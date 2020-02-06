import { ID, Sensor, Value, ValueWithTime, Meta } from "./waziup";
import { get, polishEntity, del, set, polishValue } from "./api";


// Sensors

export async function getDeviceSensors(device: ID): Promise<Sensor[]> {
    var sensors = await get<Sensor[]>(`devices/${device}/sensors`);
    sensors.forEach(polishEntity);
    return sensors;
}

export async function addDeviceSensor(device: ID, sensor: Sensor): Promise<ID> {
    return set<ID>(`devices/${device}/sensors`, sensor);
}

export async function getDeviceSensor(device: ID, sensor: ID): Promise<Sensor> {
    var ent = await get<Sensor>(`devices/${device}/sensors/${sensor}`);
    polishEntity(ent);
    return ent;
}

export var deleteDeviceSensor = (device: ID, sensor: ID) => del(`devices/${device}/sensors/${sensor}`);

export var getDeviceSensorValue = (device: ID, sensor: ID) => get<Value>(`devices/${device}/sensors/${sensor}/value`);

export var addDeviceSensorValue = (device: ID, sensor: ID, val: Value|ValueWithTime) => set(`devices/${device}/sensors/${sensor}/value`, val);

export async function getDeviceSensorValues(device: ID, sensor: ID) {
    var values = await get<ValueWithTime[]>(`devices/${device}/sensors/${sensor}/values`);
    values.forEach(polishValue);
    return values;
}

export var addDeviceSensorValues = (device: ID, sensor: ID, val: Value[]|ValueWithTime[]) => set(`devices/${device}/sensors/${sensor}/values`, val);

export var setDeviceSensorMeta = (device: ID, sensor: ID, meta: Meta) => set(`devices/${device}/sensors/${sensor}/meta`, meta);