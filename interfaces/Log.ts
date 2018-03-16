import { ILog } from "../models/Log";
import { IUser, SourceApp } from "../models/User";

export interface ILogger {
    duration: number;
    level: number;
    logs: ILog[];
    sourceApp: SourceApp;
    start: number;
    user: number | IUser;
}
