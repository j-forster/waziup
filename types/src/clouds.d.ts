import { ID, Cloud, Credentials, CloudStatus } from "./waziup";
export declare function getClouds(): Promise<{
    [id: string]: Cloud;
}>;
export declare function addCloud(cloud: Cloud): Promise<ID>;
export declare function getCloud(id: ID): Promise<Cloud>;
export declare function deleteCloud(id: ID): Promise<void>;
export declare function setCloudPaused(id: ID, paused: boolean): Promise<void>;
export declare function setCloudCredentials(id: ID, cred: Credentials): Promise<void>;
export declare function getCloudStatus(id: ID): Promise<CloudStatus>;
