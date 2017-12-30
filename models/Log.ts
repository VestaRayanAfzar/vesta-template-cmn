import {Model} from "../core/Model";
import {Schema} from "../core/Schema";
import {Database} from "../core/Database";
import {FieldType} from "../core/Field";

export enum LogLevel {None, Error, Warn, Info}

export interface ILog {
    id?: number;
    level?: LogLevel;
    message?: string;
    method?: string;
    file?: string;
}

export class Log extends Model implements ILog {
    public static schema: Schema = new Schema('Log');
    public static database: Database;
    public id: number;
    public level: LogLevel;
    public message: string;
    public method: string;
    public file: string;

    constructor(values?: ILog, database?: Database) {
        super(Log.schema, database || Log.database);
        this.setValues(values);
    }
}

Log.schema.addField('id').type(FieldType.Integer).primary();
///@level({"enum":{"options":["LogLevel.Error","LogLevel.Warn","LogLevel.Info","LogLevel.None"],"path":""}})
Log.schema.addField('level').type(FieldType.Enum).required().enum(LogLevel.Error, LogLevel.Warn, LogLevel.Info, LogLevel.None).default(LogLevel.Error);
Log.schema.addField('message').type(FieldType.String).required();
Log.schema.addField('method').type(FieldType.String);
Log.schema.addField('file').type(FieldType.String);
Log.schema.freeze();
