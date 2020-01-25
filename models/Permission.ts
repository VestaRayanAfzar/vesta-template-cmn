import { Database, FieldType, Model, Schema } from "@vesta/core";

import { IPermission as ISimplePermission } from "@vesta/services";
import { Status } from "../enum/Status";

export interface IPermission extends ISimplePermission {
    id?: number;
    // action?: string;
    // resource?: string;
    status?: Status;
}

export class Permission extends Model implements IPermission {
    public static database: Database;
    public static schema: Schema = new Schema("Permission");
    public id: number;
    public action: string;
    public resource: string;
    public status: Status = Status.Active;

    constructor(values?: IPermission) {
        super(Permission.schema, Permission.database);
        this.setValues(values);
    }
}

Permission.schema
    .addField("id")
    .type(FieldType.Integer)
    .primary();
Permission.schema
    .addField("action")
    .type(FieldType.String)
    .required();
Permission.schema
    .addField("resource")
    .type(FieldType.String)
    .required();
Permission.schema
    .addField("status")
    .type(FieldType.Boolean)
    .default(true)
    .required();
Permission.schema.freeze();
