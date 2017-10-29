import {Model} from "../core/Model";
import {Schema} from "../core/Schema";
import {Database} from "../core/Database";
import {FieldType} from "../core/Field";
import {LogLevel} from "../enum/Log";

export interface IAppConfig {
    id?: number;
    logLevel?: LogLevel;
}

export class AppConfig extends Model implements IAppConfig {
    public static schema: Schema = new Schema('AppConfig');
    public static database: Database;
    public id: number;
    public logLevel: LogLevel;

    constructor(values?: IAppConfig) {
        super(AppConfig.schema, AppConfig.database);
        this.setValues(values);
    }
}

AppConfig.schema.addField('id').type(FieldType.Integer).primary();
AppConfig.schema.addField('logLevel').type(FieldType.Enum).required().enum(LogLevel.Error, LogLevel.Warn, LogLevel.Info, LogLevel.Debug, LogLevel.Verbose, LogLevel.None).default(LogLevel.Warn);
AppConfig.schema.freeze();