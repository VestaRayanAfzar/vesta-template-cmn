import {Model} from "../core/Model";
import {Schema} from "../core/Schema";
import {Database} from "../core/Database";
import {FieldType} from "../core/Field";

export interface IContext {
    id?: number;
    key?: string;
    value?: string;
}

export class Context extends Model implements IContext {
    public static schema: Schema = new Schema('Context');
    public static database: Database;
    public id: number;
    public key: string;
    public value: string;

    constructor(values?: IContext, database?: Database) {
        super(Context.schema, database || Context.database);
        this.setValues(values);
    }
}
Context.schema.addField('id').type(FieldType.Integer).primary();
Context.schema.addField('key').type(FieldType.String).required().unique().minLength(3).maxLength(10);
Context.schema.addField('value').type(FieldType.Text).required();
Context.schema.freeze();
