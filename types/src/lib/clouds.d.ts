import { ID, Cloud, Credentials } from "./waziup";
export declare var getClouds: () => Promise<{
    [id: string]: Cloud;
}>;
export declare var addCloud: (cloud: Cloud) => Promise<string>;
export declare var getCloud: (id: string) => Promise<Cloud>;
export declare var deleteCloud: (id: string) => Promise<void>;
export declare var setCloudPaused: (id: string, paused: boolean) => Promise<void>;
export declare var setCloudCredentials: (id: string, cred: Credentials) => Promise<void>;
export declare function getCloudStatus(id: ID): Promise<{
    entity: {
        device: string;
        sensor?: string;
        actuators?: string;
    };
    status: {
        action: import("./waziup").CloudAction[];
        remote: Date;
        sleep: number;
        wakeup: Date;
    };
}[]>;
