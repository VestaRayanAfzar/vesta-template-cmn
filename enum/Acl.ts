export const enum AclPolicy {Allow = 1, Deny}

export interface IAclAction {
    All: string;
    Read: string;
    Add: string;
    Edit: string;
    Delete: string;
    Login: string;
    Register: string;
    Forget: string;
}

export const AclAction: IAclAction = {
    All: '*',
    Read: 'read',
    Add: 'add',
    Edit: 'edit',
    Delete: 'del',
    Login: 'login',
    Register: 'register',
    Forget: 'forget'
};
