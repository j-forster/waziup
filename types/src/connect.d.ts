import { Waziup } from "./Waziup";
interface ConnectSettings {
    host?: string;
    username?: string;
    password?: string;
    token?: string;
}
export declare function connect(settings?: ConnectSettings): Promise<Waziup>;
export {};
