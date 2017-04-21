import {Model} from "vesta-schema/Model";
import {Schema} from "vesta-schema/Schema";
import {FieldType} from "vesta-schema/Field";
import {Permission, IPermission} from "./Permission";
import {Database} from "vesta-schema/Database";
import {Status} from "../enum/Status";

export interface IRole {
    id?: number|string;
    name?: string;
    desc?: string;
    permissions?: Array<number|IPermission|Permission>;
    status?: Status;
}

export class Role extends Model implements IRole {
    public static schema: Schema = new Schema('Role');
    public static database: Database;
    public id: number|string;
    public name: string;
    public desc: string;
    public permissions: Array<number|IPermission|Permission> = [];
    public status: Status = Status.Active;

    constructor(values?: any) {
        super(Role.schema, Role.database);
        this.setValues(values);
    }
}

Role.schema.addField('id').type(FieldType.Integer).primary();
Role.schema.addField('name').type(FieldType.String).required().unique();
Role.schema.addField('desc').type(FieldType.Text);
Role.schema.addField('permissions').type(FieldType.Relation).areManyOf(Permission);
Role.schema.addField('status').type(FieldType.Enum).enum(Status.Active, Status.Inactive).required();
Role.schema.freeze();