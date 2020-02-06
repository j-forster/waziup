import { ID, Sensor, ValueWithTime, Meta, Actuator } from "./waziup";
export declare var getID: () => Promise<ID>;
export declare var getName: () => Promise<string>;
export declare var setName: (name: string) => Promise<void>;
export declare function getSensors(device?: ID): Promise<Sensor[]>;
export declare function getSensor(sensor: ID): Promise<Sensor>;
export declare var deleteSensor: (id: string) => Promise<void>;
export declare var getSensorValue: (id: string) => Promise<any>;
export declare var addSensorValue: (id: string, val: any) => Promise<void>;
export declare function getSensorValues(id: ID): Promise<ValueWithTime[]>;
export declare var addSensorValues: (id: string, val: any[] | ValueWithTime[]) => Promise<void>;
export declare var setSensorMeta: (id: string, meta: Meta) => Promise<void>;
export declare function getActuators(): Promise<Actuator[]>;
export declare function getActuator(id: ID): Promise<Actuator>;
export declare var deleteActuator: (id: string) => Promise<void>;
export declare var getActuatorValue: (id: string) => Promise<any>;
export declare var addActuatorValue: (id: string, val: any) => Promise<void>;
export declare function getActuatorValues(id: ID): Promise<ValueWithTime[]>;
export declare var addActuatorValues: (id: string, val: any[] | ValueWithTime[]) => Promise<void>;
export declare var setActuatorMeta: (id: string, meta: Meta) => Promise<void>;
