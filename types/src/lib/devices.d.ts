import { ID, Device, Meta } from "./waziup";
export declare function getDevices(): Promise<Device[]>;
export declare var addDevice: (device: Device) => Promise<void>;
export declare function getDevice(id?: ID): Promise<Device>;
export declare var setDeviceName: (id: string, name: string) => Promise<void>;
export declare var deleteDevice: (id: string) => Promise<void>;
export declare var setDeviceMeta: (id: string, meta: Meta) => Promise<void>;
