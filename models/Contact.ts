import {Model} from "../core/Model";
import {Schema} from "../core/Schema";
import {Database} from "../core/Database";
import {FieldType} from "../core/Field";

export interface IContact {
    id?: number;
    title?: string;
    content?: string;
    date?: number;
    name?: string;
    phone?: string;
}

export class Contact extends Model implements IContact {
    public static schema: Schema = new Schema('Contact');
    public static database: Database;
    public id: number;
    public title: string;
    public content: string;
    public date: number = Date.now();
    public name: string;
    public phone: string;

    constructor(values?: IContact, database?: Database) {
        super(Contact.schema, database || Contact.database);
        this.setValues(values);
    }
}

Contact.schema.addField('id').type(FieldType.Integer).primary();
Contact.schema.addField('title').type(FieldType.String).required().minLength(4).maxLength(255);
Contact.schema.addField('content').type(FieldType.Text).required();
Contact.schema.addField('date').type(FieldType.Timestamp).required();
Contact.schema.addField('name').type(FieldType.String).required().minLength(3).maxLength(32);
Contact.schema.addField('phone').type(FieldType.Tel);
Contact.schema.freeze();
