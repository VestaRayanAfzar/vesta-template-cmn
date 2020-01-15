import { LogLevel } from "@vesta/services";
import { ILog } from "../models/Log";
import { IUser } from "../models/User";

export interface ILogger {
    duration: number;
    level: LogLevel;
    logs: ILog[];
    start: number;
    user: number | IUser;
}
