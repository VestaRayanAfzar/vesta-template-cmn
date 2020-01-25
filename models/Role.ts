import { Database, FieldType, Model, Schema } from "@vesta/core";
import { IRole as ISimpleRole } from "@vesta/services";
import { Status } from "../enum/Status";
import { IPermission, Permission } from "./Permission";

export interface IRole extends ISimpleRole {
    id?: number;
    desc?: string;
    // name?: string;
    // permissions?: Array<number | IPermission>;
    // status?: Status;
}

export class Role extends Model implements IRole {
    public static database: Database;
    public static schema: Schema = new Schema("Role");
    public id: number;
    public desc: string;
    public name: string;
    public permissions: Array<number | IPermission> = [];
    public status: Status = Status.Active;

    constructor(values?: IRole) {
        super(Role.schema, Role.database);
        this.setValues(values);
    }
}

Role.schema
    .addField("id")
    .type(FieldType.Integer)
    .primary();
Role.schema
    .addField("name")
    .type(FieldType.String)
    .required()
    .unique();
Role.schema
    .addField("desc")
    .type(FieldType.String)
    .maxSize(128);
Role.schema
    .addField("status")
    .type(FieldType.Enum)
    .enum(Status.Active, Status.Inactive)
    .required();
Role.schema
    .addField("permissions")
    .type(FieldType.Relation)
    .areManyOf(Permission);
Role.schema.freeze();
