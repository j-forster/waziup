import { Device, Sensor, Actuator, ValueWithTime, CloudStatus } from "./waziup";
export declare function get<T>(path: string): Promise<T>;
export declare function del(path: string): Promise<void>;
export declare function set<T = void>(path: string, val: any): Promise<T>;
export declare function polishEntity(ent: Sensor | Actuator): void;
export declare function polishDevice(device: Device): void;
export declare function polishValue(val: ValueWithTime): void;
export declare function polishCloudStatus(status: CloudStatus): void;
