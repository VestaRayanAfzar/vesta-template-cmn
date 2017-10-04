import {Database, FieldType, Model, Schema} from "../../medium";
import {Status} from "../enum/Status";

export interface IPermission {
    id?: number;
    resource?: string;
    action?: string;
    status?: Status;
}

export class Permission extends Model implements IPermission {
    public static schema: Schema = new Schema('Permission');
    public static database: Database;
    public id: number;
    public resource: string;
    public action: string;
    public status: Status = Status.Active;

    constructor(values?: IPermission) {
        super(Permission.schema, Permission.database);
        this.setValues(values);
    }
}

Permission.schema.addField('id').type(FieldType.Integer).primary();
Permission.schema.addField('resource').type(FieldType.String).required();
Permission.schema.addField('action').type(FieldType.String).required();
Permission.schema.addField('status').type(FieldType.Boolean).default(true).required();
Permission.schema.freeze();
