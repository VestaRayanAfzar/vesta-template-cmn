import {Model} from "../core/Model";
import {Schema} from "../core/Schema";
import {Database} from "../core/Database";
import {FieldType} from "../core/Field";
import {IRole, Role} from "./Role";
import {Status} from "../enum/Status";

export const enum UserGender {Male = 1, Female}

export const enum UserType {Admin = 1, User}

export interface IUser {
    id?: number;
    type?: any;
    username?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    mobile?: string;
    birthDate?: number;
    gender?: UserGender;
    image?: File | string;
    status?: Status;
    role?: number | IRole;
}

export class User extends Model implements IUser {
    public static schema: Schema = new Schema('User');
    public static database: Database;
    public id: number;
    public type: any;
    public username: string;
    public password: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public mobile: string;
    public birthDate: number;
    public gender: UserGender;
    public image: File | string;
    public status: Status;
    public role: number | IRole;

    constructor(values?: IUser) {
        super(User.schema, User.database);
        this.setValues(values);
    }

    public isOfType(type: UserType) {
        return this.type.indexOf(type) >= 0;
    }

}

User.schema.addField('id').type(FieldType.Integer).primary();
///@type({"enum":{"options":["UserType.Staff","UserType.Mechanic","UserType.Technician","UserType.User"]}})
User.schema.addField('type').type(FieldType.Object).required();
User.schema.addField('username').type(FieldType.String).unique().minLength(4).maxLength(16);
// if maxLength is provided, the regenerate schema will enforce that length which is not enough for hashing
///@password({"confidential":true})
User.schema.addField('password').type(FieldType.Password).required().minLength(4).assert((password: string) => password.length < 16);
User.schema.addField('firstName').type(FieldType.String).minLength(2);
User.schema.addField('lastName').type(FieldType.String).minLength(2);
User.schema.addField('email').type(FieldType.EMail).unique();
User.schema.addField('mobile').type(FieldType.Tel).required().minLength(9).maxLength(12);
User.schema.addField('birthDate').type(FieldType.Timestamp);
///@gender({"enum":{"options":["UserGender.Male","UserGender.Female"]}})
User.schema.addField('gender').type(FieldType.Enum).enum(UserGender.Male, UserGender.Female).default(UserGender.Male);
User.schema.addField('image').type(FieldType.File).maxSize(6144).fileType('image/png', 'image/jpeg', 'image/pjpeg');
User.schema.addField('desc').type(FieldType.Text).maxLength(512);
///@status({"enum":{"options":["Status.Active","Status.Inactive"],"path":"enum/Status"}})
User.schema.addField('status').type(FieldType.Enum).enum(Status.Active, Status.Inactive).default(Status.Active);
///@role({"relation":{"model":"Role"}})
User.schema.addField('role').type(FieldType.Relation).isOneOf(Role).required();
User.schema.freeze();