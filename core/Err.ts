export class Err implements Error {
    public code: number;
    public message: string;
    public name: string;
    public method: string;
    public file: string;

    public static Code = {
        DBConnection: 560,
        Database: 561,
        DBDuplicateEntry: 562,
        DBQuery: 563,
        DBInsert: 564,
        DBUpdate: 565,
        DBDelete: 566,
        DBInvalidDriver: 567,
        /** When query is suppose to return one record, but returns more */
        DBRecordCount: 568,
        /** When query is suppose to return some records, but returns none */
        DBNoRecord: 569,
        DBRelation: 570,
        // acl
        Unauthorized: 401,
        Forbidden: 403,
        Client: 400,
        Server: 500,
        Token: 571,
        // logical
        WrongInput: 460,
        OperationFailed: 582,
        // form
        Validation: 461,
        //
        FileSystem: 584,
        Device: 462,
        //
        Implementation: 591,
        NoDataConnection: 592,
        Unknown: 599
    };

    public static Message = {
        [Err.Code.DBConnection]: 'err_db_conn',
        [Err.Code.Database]: 'err_db_op',
        [Err.Code.DBDuplicateEntry]: 'err_dup_entry',
        [Err.Code.DBQuery]: 'err_db_query',
        [Err.Code.DBInsert]: 'err_db_insert',
        [Err.Code.DBUpdate]: 'err_db_update',
        [Err.Code.DBDelete]: 'err_db_delete',
        [Err.Code.DBInvalidDriver]: 'err_db_driver',
        [Err.Code.DBRecordCount]: 'err_db_record_cnt',
        [Err.Code.DBNoRecord]: 'err_db_no_record',
        [Err.Code.DBRelation]: 'err_db_relation',
        // acl
        [Err.Code.Unauthorized]: 'err_unauthorized',
        [Err.Code.Forbidden]: 'err_forbidden',
        [Err.Code.Client]: 'err_bad_req',
        [Err.Code.Server]: 'err_server',
        [Err.Code.Token]: 'err_token',
        // logical
        [Err.Code.WrongInput]: 'err_input',
        [Err.Code.OperationFailed]: 'err_op',
        // form
        [Err.Code.Validation]: 'err_validation',
        //
        [Err.Code.FileSystem]: 'err_file',
        [Err.Code.Device]: 'err_device',
        //
        [Err.Code.Implementation]: 'err_method_impl',
        [Err.Code.NoDataConnection]: 'err_net_conn',
        [Err.Code.Unknown]: 'err_unknown'
    };

    constructor(code: number = Err.Code.Unknown, message?: string, method?: string, file?: string) {
        this.code = code;
        this.message = message || Err.getErrorText(code);
        this.method = method || '';
        this.file = file || '';
    }

    static getErrorText(code: number): string {
        return Err.Message[code] || Err.Message[Err.Code.Unknown];
    }
}
