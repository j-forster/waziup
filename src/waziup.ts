export type Meta = {
    [key: string]: any;
}

export type Value = any;
export type ValueWithTime = {
    value: any;
    time: Date;
}

export type ID = string;

/**
 * A sensor always belongs to a device.
 */
export type Sensor = {
    /** Unique sensor ID. */
    id: ID;
    /** Sensor name. */
    name: string;
    /** Sensor value. */
    value: Value;
    /** Sensor kind. */
    kind: string;
    /** Time at which the sensor was last modified. */
    modified: Date;
    /** Time at which the sensor was created. */
    created: Date;
    /** Time at which the last value was uploaded for this sensor. */
    time: Date;
    /** Sensor metadata. */
    meta: Meta;
}

export type Actuator = {
    id: ID;
    name: string;
    value: Value;
    kind: string;
    modified: Date;
    created: Date;
    time: Date;
    meta: Meta;
}

export type Device = {
    id: ID;
    name: string;
    sensors: Sensor[];
    actuators: Actuator[];
    modified: Date;
    created: Date;
    meta: Meta;
}

export type Credentials = {
    username: string;
    token: string;
}

export type Cloud = {
    id: ID;
    paused: boolean;
    pausing: boolean;
    pausing_mqtt: boolean;
    rest: string;
    mqtt: string;
    credentials: Credentials,
    statusCode: number;
    statusText: string;
}

export type CloudAction = "create" | "modify" | "sync" | "error" | "delete";

export type CloudStatus = {
    entity: {
        device: string;
        sensor?: string;
        actuators?: string;
    },
    status: {
        action: CloudAction[];
        remote: Date;
        sleep: number;
        wakeup: Date;
    }
}[];

export type Event = {
    code: number;
    msg: string;
    time: Date;
}

/**
 * A Waziup App.
 */
export type App = {
    name: string;
    type: number;
}