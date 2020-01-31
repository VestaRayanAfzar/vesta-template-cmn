import { LogLevel } from "@vesta/services";
import { SourceApp } from "../enum/SourceApp";
import { ILog } from "../models/Log";
import { IUser } from "../models/User";

export interface ILogger {
    duration?: number;
    level: LogLevel;
    logs: ILog[];
    start: number;
    sourceApp: SourceApp;
    user: number | IUser;
}
