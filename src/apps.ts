import { ID, Device, Sensor, Value, ValueWithTime, Meta, Actuator, App } from "./waziup";
import { get, polishDevice, polishEntity, del, set, polishValue } from "./api";

/**
 * @category Apps
 */
export async function getApps(): Promise<App[]> {
    return get<App[]>("apps");
}