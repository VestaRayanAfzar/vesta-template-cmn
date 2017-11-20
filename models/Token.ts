import {IUser, User} from "./User";
import {Model} from "../core/Model";
import {Schema} from "../core/Schema";
import {Database} from "../core/Database";
import {FieldType} from "../core/Field";

export interface IToken {
    id?: number;
    token?: string;
    user?: number | IUser;
}

export interface IExtToken extends IToken {
    prevToken?: string;
}

export class Token extends Model implements IToken {
    public static schema: Schema = new Schema('Token');
    public static database: Database;
    public id: number;
    public token: string;
    public user: number | IUser;

    constructor(values?: IToken, database?: Database) {
        super(Token.schema, database || Token.database);
        this.setValues(values);
    }
}

Token.schema.addField('id').type(FieldType.Integer).primary();
///@token({"form":false,"list":false})
Token.schema.addField('token').type(FieldType.String).required().unique();
///@user({"relation":{"model":"User"},"verifyOwner":true})
Token.schema.addField('user').type(FieldType.Relation).required().isOneOf(User);
Token.schema.freeze();
