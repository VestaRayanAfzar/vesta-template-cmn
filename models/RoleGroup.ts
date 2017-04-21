import {Model} from "vesta-schema/Model";
import {Schema} from "vesta-schema/Schema";
import {FieldType} from "vesta-schema/Field";
import {Database} from "vesta-schema/Database";
import {IRole, Role} from "./Role";
import {Status} from "../enum/Status";

export interface IRoleGroup {
    id?: number|string;
    name: string;
    desc?: string;
    roles?: Array<number|IRole|Role>;
    status?: Status;
}


export class RoleGroup extends Model implements IRoleGroup {
    public static schema: Schema = new Schema('RoleGroup');
    public static database: Database;
    public id: number|string;
    public name: string;
    public desc: string;
    public roles: Array<number|IRole|Role> = [];
    public status: Status = Status.Active;

    constructor(values?: any) {
        super(RoleGroup.schema, RoleGroup.database);
        this.setValues(values);
    }
}

RoleGroup.schema.addField('id').type(FieldType.Integer).primary();
RoleGroup.schema.addField('name').type(FieldType.String).required().unique();
RoleGroup.schema.addField('desc').type(FieldType.Text);
RoleGroup.schema.addField('roles').type(FieldType.Relation).areManyOf(Role);
RoleGroup.schema.addField('status').type(FieldType.Enum).enum(Status.Active, Status.Inactive).required();
RoleGroup.schema.freeze();