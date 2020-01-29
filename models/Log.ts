import { Database, FieldType, Model, Schema } from "@vesta/core";
import { LogLevel } from "@vesta/services";

export interface ILog {
    id?: number;
    file?: string;
    level?: LogLevel;
    message?: string;
    method?: string;
}

export class Log extends Model implements ILog {
    public static database: Database;
    public static schema: Schema = new Schema("Log");
    public id: number;
    public file: string;
    public level: LogLevel;
    public message: string;
    public method: string;

    constructor(values?: ILog, database?: Database) {
        super(Log.schema, database || Log.database);
        this.setValues(values);
    }
}

Log.schema
    .addField("id")
    .type(FieldType.Integer)
    .primary();
Log.schema.addField("file").type(FieldType.String);
Log.schema
    .addField("level")
    .type(FieldType.Enum)
    .required()
    .enum(LogLevel.Error, LogLevel.Warning, LogLevel.Info, LogLevel.None)
    .default(LogLevel.Error);
Log.schema
    .addField("message")
    .type(FieldType.String)
    .required();
Log.schema.addField("method").type(FieldType.String);
Log.schema.freeze();
