export enum AclPolicy { Allow = 1, Deny }

export interface IAclAction {
    Add: string;
    All: string;
    Delete: string;
    Edit: string;
    Forget: string;
    Login: string;
    Read: string;
    Register: string;
}

export const AclAction: IAclAction = {
    Add: "add",
    All: "*",
    Delete: "del",
    Edit: "edit",
    Forget: "forget",
    Login: "login",
    Read: "read",
    Register: "register",
};
