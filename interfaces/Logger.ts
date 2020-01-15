import { LogLevel } from "@vesta/services";
import { ILog } from "../models/Log";
import { IUser, SourceApp } from "../models/User";

export interface ILogger {
    duration?: number;
    level: LogLevel;
    logs: ILog[];
    start: number;
    sourceApp: SourceApp;
    user: number | IUser;
}
