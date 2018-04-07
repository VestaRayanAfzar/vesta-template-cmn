import { IVocabs } from "../../medium";
/* tslint:disable */
export const IrVocabs: IVocabs = {
    //
    login: "ورود",
    logout: "خروج",
    register: "ثبت نام",
    ok: "باشه",
    cancel: "لغو",
    retry: "تلاش مجدد",
    yes: "بلی",
    no: "خیر",
    save: "ذخیره",
    add: "افزودن",
    submit: "ارسال",
    edit: "ویرایش",
    update: "بروزرسانی",
    select: "انتخاب",
    home: "خانه",
    about: "درباره ما",
    contact_us: "پشتیبانی",
    send_reset: "ارسال کد بازنشانی",
    forget_pass: "فراموشی کلمه عبور",
    operations: "عملیات",
    description: "توضیحات",
    year: "سال",
    month: "ماه",
    hour: "ساعت",
    minute: "دقیقه",
    filemanager: "مدیریت فایل‌ها",
    app_update: "درحال بروزرسانی...",
    no_records: "رکوردی یافت نشد",
    profile: "پروفایل",
    // general fields
    fld_id: "کد",
    fld_status: "وضعیت",
    fld_desc: "توضیحات",
    fld_type: "نوع",
    fld_date: "تاریخ",
    fld_title: "عنوان",
    // role model
    mdl_role: "نقش‌ها",
    role: "نقش",
    fld_permission: "اجازه",
    fld_resource: "منبع",
    fld_action: "عمل",
    // log model
    mdl_log: "گزارش‌ها",
    fld_level: "سطح",
    fld_message: "پیام",
    fld_method: "تابع",
    fld_file: "فایل",
    // support model
    mdl_support: "پشتیبانی",
    // context
    mdl_context: "متن‌های پیش‌فرض",
    fld_key: "عنوان متن",
    // user model
    mdl_user: "کاربران",
    fld_username: "نام کاربری",
    fld_password: "کلمه عبور",
    fld_conf_password: "تکرار کلمه عبور",
    fld_name: "نام",
    fld_firstname: "نام",
    fld_lastname: "نام خانوادگی",
    fld_user: "کاربر",
    fld_email: "ایمیل",
    fld_mobile: "موبایل",
    fld_gender: "جنسیت",
    fld_image: "تصویر",
    fld_phone: "شماره تماس",
    fld_address: "نشانی",
    fld_sourceapp: "برنامه",
    //
    enum_user: "کاربر",
    enum_admin: "مدیر",
    enum_active: "فعال",
    enum_inactive: "غیرفعال",
    enum_male: "مرد",
    enum_female: "زن",
    enum_error: "خطا",
    enum_warn: "هشدار",
    enum_info: "خبر",
    enum_enduser: "برنامه کاربر",
    enum_panel: "پنل کنترل",
    //
    title_record_detail: "نمایش % شماره %",
    title_record_add: "افزودن % جدید",
    title_record_edit: "ویرایش %",
    //
    err_wrong_user_pass: "نام کاربری یا کلمه عبور وارد شده صحیح نمی باشد",
    err_required: "مقداردهی این فیلد الزامی می باشد",
    err_min_value: "حداقل مقدار ورودی % می باشد",
    err_max_value: "حداکثر مقدار ورودی % می باشد",
    err_min_length: "حداقل تعداد کاراکتر  % می باشد",
    err_max_length: "حداکثر تعداد کاراکتر % می باشد",
    err_ext_length: "تعداد کاراکتر دقیقا % می باشد",
    err_duplicate: "مقدار وارد شده تکراری می باشد",
    err_file_type: "نوع فایل صحیح نمی باشد",
    err_file_size: "حجم فایل باید کمتر از % باشد",
    err_enum: "گزینه وارد شده معتبر نمی باشد",
    err_phone: "شماره تلفن وارد شده معتبر نمی باشد",
    err_url: "آدرس وارد شده معتبر نمی باشد",
    err_validation: "داده های ارسال شده معتبر نمی باشد",
    err_email: "آدرس ایمیل وارد شده صحیح نمی باشد",
    err_invalid_phone: "شماره شما یافت نشد. لطفا ثبت نام نمایید",
    err_db_conn: "خطا در اتصال به دیتابیس",
    err_db_op: "خطای عملیاتی دیتابیس",
    err_dup_entry: "رکورد تکراری",
    err_db_query: "خطا در درخواست از دیتابیس",
    err_db_insert: "خطا در درج رکورد جدید",
    err_db_update: "خطا در آپدیت رکورد",
    err_db_delete: "خطا در حذف رکورد",
    err_db_driver: "خطا در درایور دیتابیس",
    err_db_record_cnt: "رکورد مورد نظر یافت نشد",
    err_db_no_record: "رکورد مورد نظر یافت نشد",
    err_unauthorized: "دسترسی غیر مجاز",
    err_forbidden: "دسترسی ممنوع",
    err_bad_req: "درخواست نامعتبر",
    err_server: "خطای سرور",
    err_token: "خطای مربوط به token",
    err_input: "ورودی نامعتبر",
    err_op: "عملیات نامعتبر",
    err_file: "خطای مربوط به فایل سیستم",
    err_device: "خطا در دستگاه شما",
    err_net_conn: "مشکل ارتباط با شبکه",
    err_unknown: "خطای نامشخص",
    err_admin_login: "ادمین نمی تواند در اپ وارد شود",
    err_user_admin_login: "شما حق ورود به پنل مدیریت را ندارید",
    err_none_user_login: "برای ورود به این برنامه باید ثبت نام کنید",
    err_sms: "در ارسال پیام به همراه شما مشکلی رخ داده است",
    "unexpected end of json input": "امکان برقراری ارتباط با سرور وجود ندارد",
    "unexpected end of input": "امکان برقراری ارتباط با سرور وجود ندارد",
    //
    info_add_record: "رکورد شماره % با موفقیت درج گردید",
    info_update_record: "رکورد شماره % با موفقیت بروزرسانی گردید",
    info_delete_record: "رکورد شماره % با موفقیت حذف گردید",
    info_forget: "کلمه عبور جدید به شماره شما ارسال گردید",
    //
    msg_delete_confirm: "آیا در مورد حذف % مطمین هستید?",
    msg_inprogress: "عملیات در حال اجرا...",
    msg_register_ok: "ثبت نام شما با موفقیت انجام شده است",
    msg_wait: "لطفا منتظر باشید!",
    txt_change_pass: "تغییر کلمه عبور",
    txt_change_image: "تغییر عکس",
    register_accept: "با قوانین و مقررات موافقم",
    call_support: "تماس با پشتیبانی",
    //////////////////////////////
    // application
};