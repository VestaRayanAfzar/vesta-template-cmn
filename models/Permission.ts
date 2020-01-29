import { Database, FieldType, Model, Schema } from "@vesta/core";
import { IPermission as ISimplePermission } from "@vesta/services";

export interface IPermission extends ISimplePermission {
    id?: number;
}

export class Permission extends Model implements IPermission {
    public static database: Database;
    public static schema: Schema = new Schema("Permission");
    public id: number;
    public action: string;
    public resource: string;

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
Permission.schema.freeze();
