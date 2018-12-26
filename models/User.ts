import { Database, FieldType, Model, Schema } from "@vesta/core";
import { Status } from "../enum/Status";
import { IRole, Role } from "./Role";

export enum UserGender { Male = 1, Female }

export enum UserType { Admin = 1, User }

export enum SourceApp { Panel = 1, EndUser }

export interface IUser {
    id?: number;
    birthDate?: number;
    email?: string;
    firstName?: string;
    gender?: UserGender;
    image?: File | string;
    lastName?: string;
    mobile?: string;
    password?: string;
    role?: number | IRole;
    sourceApp?: SourceApp;
    status?: Status;
    type?: any;
    username?: string;
    locale?: string;
}

export class User extends Model implements IUser {
    public static database: Database;
    public static schema: Schema = new Schema("User");
    public id: number;
    public birthDate: number;
    public email: string;
    public firstName: string;
    public gender: UserGender;
    public image: File | string;
    public lastName: string;
    public mobile: string;
    public password: string;
    public role: number | IRole;
    public sourceApp: SourceApp;
    public status: Status;
    public type: any;
    public username: string;
    public locale: string;

    constructor(values?: IUser) {
        super(User.schema, User.database);
        this.setValues(values);
    }

    public isOfType(type: UserType) {
        return this.type.indexOf(type) >= 0;
    }

}

User.schema.addField("id").type(FieldType.Integer).primary();
User.schema.addField("birthDate").type(FieldType.Timestamp);
User.schema.addField("email").type(FieldType.EMail).unique();
User.schema.addField("firstName").type(FieldType.String).minLength(2).maxLength(32);
User.schema.addField("gender").type(FieldType.Enum).enum(UserGender.Male, UserGender.Female).default(UserGender.Male);
User.schema.addField("image").type(FieldType.File).maxSize(6144).fileType("image/png", "image/jpeg", "image/pjpeg");
User.schema.addField("lastName").type(FieldType.String).minLength(2).maxLength(64);
User.schema.addField("mobile").type(FieldType.Tel).unique().minLength(8).maxLength(12);
// if maxLength is provided, the regenerate schema will enforce that length which is not enough for hashing
// @password({"confidential":true})
User.schema.addField("password").type(FieldType.Password).required().minLength(6)
    .assert((password: string) => password.length < 16);
User.schema.addField("role").type(FieldType.Relation).isOneOf(Role).required();
// @sourceApp({"form":false,"list":false})
User.schema.addField("sourceApp").type(FieldType.Enum).enum(SourceApp.Panel, SourceApp.EndUser);
User.schema.addField("status").type(FieldType.Enum).required().enum(Status.Active, Status.Inactive).default(Status.Active);
User.schema.addField("type").type(FieldType.Object).required();
User.schema.addField("username").type(FieldType.String).required().unique().minLength(4).maxLength(16);
User.schema.addField("locale").type(FieldType.String).minLength(4).maxLength(6);
User.schema.freeze();
