import { ID, Device, Sensor, Value, ValueWithTime, Meta, Actuator, Cloud, Credentials, CloudStatus } from "./waziup";
import { get, polishDevice, polishEntity, del, set, polishValue, polishCloudStatus } from "./api";


// Clouds

/**
 * @category Clouds
 */
export function getClouds(): Promise<{[id: string]: Cloud}> {
    return get<{[id: string]: Cloud}>("clouds");
}

/**
 * @category Clouds
 */
export function addCloud(cloud: Cloud): Promise<ID> {
    return set<ID>("clouds", cloud);
}

/**
 * @category Clouds
 */
export function getCloud(id: ID): Promise<Cloud> {
    return get<Cloud>(`clouds/${id}`);
}

/**
 * @category Clouds
 */
export function deleteCloud(id: ID) {
    return del(`clouds/${id}`);
}

/**
 * @category Clouds
 */
export function setCloudPaused(id: ID, paused: boolean) {
    return set(`clouds/${id}/paused`, paused);
}

/**
 * @category Clouds
 */
export function setCloudCredentials(id: ID, cred: Credentials) {
    return set(`clouds/${id}/credentials`, cred);
}

/**
 * @category Clouds
 */
export async function getCloudStatus(id: ID): Promise<CloudStatus> {
    var status = await get<CloudStatus>(`clouds/${id}/status`);
    polishCloudStatus(status);
    return status;
}