export declare type Meta = {
    [key: string]: any;
};
export declare type Value = any;
export declare type ValueWithTime = {
    value: any;
    time: Date;
};
export declare type ID = string;
export declare type Sensor = {
    id: ID;
    name: string;
    value: Value;
    kind: string;
    modified: Date;
    created: Date;
    time: Date;
    meta: Meta;
};
export declare type Actuator = {
    id: ID;
    name: string;
    value: Value;
    kind: string;
    modified: Date;
    created: Date;
    time: Date;
    meta: Meta;
};
export declare type Device = {
    id: ID;
    name: string;
    sensors: Sensor[];
    actuators: Actuator[];
    modified: Date;
    created: Date;
    meta: Meta;
};
export declare type Credentials = {
    username: string;
    token: string;
};
export declare type Cloud = {
    id: ID;
    paused: boolean;
    pausing: boolean;
    pausing_mqtt: boolean;
    rest: string;
    mqtt: string;
    credentials: Credentials;
    statusCode: number;
    statusText: string;
};
export declare type CloudAction = "create" | "modify" | "sync" | "error" | "delete";
export declare type CloudStatus = {
    entity: {
        device: string;
        sensor?: string;
        actuators?: string;
    };
    status: {
        action: CloudAction[];
        remote: Date;
        sleep: number;
        wakeup: Date;
    };
}[];
export declare type Event = {
    code: number;
    msg: string;
    time: Date;
};
export declare type App = {
    name: string;
    type: number;
};
