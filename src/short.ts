import { ID, Device, Sensor, Value, ValueWithTime, Meta, Actuator } from "./waziup";
import { get, polishDevice, polishEntity, del, set, polishValue } from "./api";

/**
 * Defines functions to add/remove/modify the sensors and actuators of this Wazigate.
 */

/**
 * Get the ID of this device.
 * @category My Gateway
 */
export var getID: () => Promise<ID> = () => get<ID>("device/id");

// function getDevice is declared by devices.ts

/**
 * Get the gateway name.
 * @category My Gateway
 */
export var getName = () => get<string>("device/name");

/**
 * Change the gateway name.
 * @category My Gateway
 */
export var setName = (name: string) => set("device/name", name);


// Sensors

/**
 * List all gateway sensors.
 * @category My Gateway
 */
export async function getSensors(device?: ID) {
    var sensors = await get<Sensor[]>("sensors");
    sensors.forEach(polishEntity);
    return sensors;
}

/**
 * Get a gateway sensor.
 * @category My Gateway
 */
export async function getSensor(sensor: ID): Promise<Sensor>;
export async function getSensor(device: ID, sensor?: ID) {
    var ent = await get<Sensor>(`sensors/${sensor}`);
    polishEntity(ent);
    return ent;
}

/**
 * @category My Gateway
 */
export var deleteSensor = (id: ID) => del(`sensors/${id}`);

/**
 * @category My Gateway
 */
export var getSensorValue = (id: ID) => get<Value>(`sensors/${id}/value`);

/**
 * @category My Gateway
 */
export var addSensorValue = (id: ID, val: Value|ValueWithTime) => set(`sensors/${id}/value`, val);

/**
 * @category My Gateway
 */
export async function getSensorValues(id: ID) {
    var values = await get<ValueWithTime[]>(`sensors/${id}/values`);
    values.forEach(polishValue);
    return values;
}

/**
 * @category My Gateway
 */
export var addSensorValues = (id: ID, val: Value[]|ValueWithTime[]) => set(`sensors/${id}/values`, val);

/**
 * @category My Gateway
 */
export var setSensorMeta = (id: ID, meta: Meta) => set(`sensors/${id}/meta`, meta);


// Actuators

/**
 * @category My Gateway
 */
export async function getActuators() {
    var actuators = await get<Actuator[]>("actuators");
    actuators.forEach(polishEntity);
    return actuators;
}

/**
 * @category My Gateway
 */
export async function getActuator(id: ID) {
    var actuator = await get<Actuator>(`actuators/${id}`);
    polishEntity(actuator);
    return actuator;
}

/**
 * @category My Gateway
 */
export var deleteActuator = (id: ID) => del(`actuators/${id}`);

/**
 * @category My Gateway
 */
export var getActuatorValue = (id: ID) => get<Value>(`actuators/${id}/value`);

/**
 * @category My Gateway
 */
export var addActuatorValue = (id: ID, val: Value|ValueWithTime) => set(`actuators/${id}/value`, val);

/**
 * @category My Gateway
 */
export async function getActuatorValues(id: ID) {
    var values = await get<ValueWithTime[]>(`actuators/${id}/values`);
    values.forEach(polishValue);
    return values;
}

/**
 * @category My Gateway
 */
export var addActuatorValues = (id: ID, val: Value[]|ValueWithTime[]) => set(`actuators/${id}/values`, val);

/**
 * @category My Gateway
 */
export var setActuatorMeta = (id: ID, meta: Meta) => set(`actuators/${id}/meta`, meta);