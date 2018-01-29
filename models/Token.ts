import { Database, FieldType, Model, Schema } from "../../medium";
import { IUser, User } from "./User";

export interface IToken {
    id?: number;
    token?: string;
    user?: number | IUser;
}

export interface IExtToken extends IToken {
    prevToken?: string;
}

export class Token extends Model implements IToken {
    public static database: Database;
    public static schema: Schema = new Schema("Token");
    public id: number;
    public token: string;
    public user: number | IUser;

    constructor(values?: IToken, database?: Database) {
        super(Token.schema, database || Token.database);
        this.setValues(values);
    }
}

Token.schema.addField("id").type(FieldType.Integer).primary();
///@token({"form":false,"list":false})
Token.schema.addField("token").type(FieldType.String).required().unique();
///@user({"relation":{"model":"User"},"verifyOwner":true})
Token.schema.addField("user").type(FieldType.Relation).required().isOneOf(User);
Token.schema.freeze();
