import { ID, Value, ValueWithTime, Meta, Actuator } from "./waziup";
import { get, polishEntity, del, set, polishValue } from "./api";


// Actuators

export async function getDeviceActuators(device: ID) {
    var actuators = await get<Actuator[]>(`devices/${device}/actuators`);
    actuators.forEach(polishEntity);
    return actuators;
}

export var addDeviceActuator = (device: ID, actuator: Actuator) => set(`devices/${device}/actuators`, actuator);

export async function getDeviceActuator(device: ID, actuator: ID) {
    var ent = await get<Actuator>(`devices/${device}/actuators/${actuator}`);
    polishEntity(ent);
    return ent;
}

export var deleteDeviceActuator = (device: ID, actuator: ID) => del(`devices/${device}/actuators/${actuator}`);

export var getDeviceActuatorValue = (device: ID, actuator: ID) => get<Value>(`devices/${device}/actuators/${actuator}/value`);

export var addDeviceActuatorValue = (device: ID, actuator: ID, val: Value|ValueWithTime) => set(`devices/${device}/actuators/${actuator}/value`, val);

export async function getDeviceActuatorValues(device: ID, actuator: ID) {
    var values = await get<ValueWithTime[]>(`devices/${device}/actuators/${actuator}/values`);
    values.forEach(polishValue);
    return values;
}

export var addDeviceActuatorValues = (device: ID, actuator: ID, val: Value[]|ValueWithTime[]) => set(`devices/${device}/actuators/${actuator}/values`, val);

export var setDeviceActuatorMeta = (device: ID, actuator: ID, meta: Meta) => set(`devices/${device}/actuators/${actuator}/meta`, meta);