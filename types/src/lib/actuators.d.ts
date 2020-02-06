import { ID, ValueWithTime, Meta, Actuator } from "./waziup";
export declare function getDeviceActuators(device: ID): Promise<Actuator[]>;
export declare var addDeviceActuator: (device: string, actuator: Actuator) => Promise<void>;
export declare function getDeviceActuator(device: ID, actuator: ID): Promise<Actuator>;
export declare var deleteDeviceActuator: (device: string, actuator: string) => Promise<void>;
export declare var getDeviceActuatorValue: (device: string, actuator: string) => Promise<any>;
export declare var addDeviceActuatorValue: (device: string, actuator: string, val: any) => Promise<void>;
export declare function getDeviceActuatorValues(device: ID, actuator: ID): Promise<ValueWithTime[]>;
export declare var addDeviceActuatorValues: (device: string, actuator: string, val: any[] | ValueWithTime[]) => Promise<void>;
export declare var setDeviceActuatorMeta: (device: string, actuator: string, meta: Meta) => Promise<void>;