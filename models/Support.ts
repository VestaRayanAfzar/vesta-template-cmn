import { Database, FieldType, Model, Schema } from "../../medium";

export interface ISupport {
    id?: number;
    content?: string;
    date?: number;
    name?: string;
    phone?: string;
    title?: string;
}

export class Support extends Model implements ISupport {
    public static database: Database;
    public static schema: Schema = new Schema("Contact");
    public id: number;
    public content: string;
    public date: number = Date.now();
    public name: string;
    public phone: string;
    public title: string;

    constructor(values?: ISupport, database?: Database) {
        super(Support.schema, database || Support.database);
        this.setValues(values);
    }
}

Support.schema.addField("id").type(FieldType.Integer).primary();
Support.schema.addField("content").type(FieldType.Text).required().minLength(10);
Support.schema.addField("date").type(FieldType.Timestamp).required();
Support.schema.addField("name").type(FieldType.String).minLength(3).maxLength(32);
Support.schema.addField("phone").type(FieldType.Tel);
Support.schema.addField("title").type(FieldType.String).required().minLength(4).maxLength(255);
Support.schema.freeze();
