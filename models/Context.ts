import { Database, FieldType, Model, Schema } from "@vesta/core";

export interface IContext {
    id?: number;
    key?: string;
    value?: string;
}

export class Context extends Model implements IContext {
    public static database: Database;
    public static schema: Schema = new Schema("Context");
    public id: number;
    public key: string;
    public value: string;

    constructor(values?: IContext, database?: Database) {
        super(Context.schema, database || Context.database);
        this.setValues(values);
    }
}
Context.schema
    .addField("id")
    .type(FieldType.Integer)
    .primary();
Context.schema
    .addField("key")
    .type(FieldType.String)
    .required()
    .unique()
    .minLength(3)
    .maxLength(10);
Context.schema
    .addField("value")
    .type(FieldType.Text)
    .required();
Context.schema.freeze();
