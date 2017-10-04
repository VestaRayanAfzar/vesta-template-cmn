import {IPermission, Permission} from "./Permission";
import {Status} from "../enum/Status";
import {Database, FieldType, Model, Schema} from "../../medium";

export interface IRole {
    id?: number;
    name?: string;
    desc?: string;
    status?: Status;
    permissions?: Array<number | IPermission | Permission>;
}

export class Role extends Model implements IRole {
    public static schema: Schema = new Schema('Role');
    public static database: Database;
    public id: number;
    public name: string;
    public desc: string;
    public status: Status = Status.Active;
    public permissions: Array<number | IPermission | Permission> = [];

    constructor(values?: IRole) {
        super(Role.schema, Role.database);
        this.setValues(values);
    }
}

Role.schema.addField('id').type(FieldType.Integer).primary();
Role.schema.addField('name').type(FieldType.String).required().unique();
Role.schema.addField('desc').type(FieldType.Text);
///@status({"enum":{"options":["Status.Active", "Status.Inactive"], "path": "enum/Status"}})
Role.schema.addField('status').type(FieldType.Enum).enum(Status.Active, Status.Inactive).required();
///@permissions({"relation":{"model":"Permission"}})
Role.schema.addField('permissions').type(FieldType.Relation).areManyOf(Permission);
Role.schema.freeze();