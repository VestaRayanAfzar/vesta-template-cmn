import { DateTime, ILocale } from "../../../medium";
import { IrLocale } from "./IrLocale";

declare function parseInt(s: string | number, radix?: number): number;

export class IrDate extends DateTime {
    public locale: ILocale = IrLocale;
    private gregorianDate: Date;
    private gregorianDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    private persianDaysInMonth: Array<number> = IrLocale.daysInMonth;

    // constructor();
    // constructor(value:number);
    // constructor(value:string);
    // constructor(year:number, month:number, date?:number, hours?:number, minutes?:number, seconds?:number, ms?:number);
    // constructor(year?:number, month?:number, date?:number, hours?:number, minutes?:number, seconds?:number, ms?:number){}
    constructor() {
        super();
        this.gregorianDate = new Date();
    }

    public toGregorian(year: number, month: number, day: number): Array<number> {
        const jy: number = year - 979;
        const jm: number = month - 1;
        const jd: number = day - 1;

        let j_day_no = 365 * jy + parseInt(jy / 33) * 8 + parseInt((jy % 33 + 3) / 4);
        for (let i = 0; i < jm; ++i) j_day_no += this.persianDaysInMonth[i];

        j_day_no += jd;

        let g_day_no = j_day_no + 79;

        let gy = 1600 + 400 * parseInt(g_day_no / 146097);
        /* 146097 = 365*400 + 400/4 - 400/100 + 400/400 */
        g_day_no = g_day_no % 146097;

        let leap = true;
        if (g_day_no >= 36525) /* 36525 = 365*100 + 100/4 */ {
            g_day_no--;
            gy += 100 * parseInt(g_day_no / 36524);
            /* 36524 = 365*100 + 100/4 - 100/100 */
            g_day_no = g_day_no % 36524;

            if (g_day_no >= 365)
                g_day_no++;
            else
                leap = false;
        }

        gy += 4 * parseInt(g_day_no / 1461);
        /* 1461 = 365*4 + 4/4 */
        g_day_no %= 1461;

        if (g_day_no >= 366) {
            leap = false;

            g_day_no--;
            gy += parseInt(g_day_no / 365);
            g_day_no = g_day_no % 365;
        }
        let i = 0;
        for (; g_day_no >= this.gregorianDaysInMonth[i] + (i == 1 && leap ? 1 : 0); i++)
            g_day_no -= this.gregorianDaysInMonth[i] + (i == 1 && leap ? 1 : 0);
        const gm = i + 1;
        const gd = g_day_no + 1;

        return [gy, gm, gd];
    }

    public toPersian(year: number, month: number, day: number) {
        //year = parseInt(year);
        //month = parseInt(month);
        //day = parseInt(day);
        const gy: number = year - 1600;
        const gm: number = month - 1;
        const gd: number = day - 1;

        let g_day_no = 365 * gy + parseInt((gy + 3) / 4) - parseInt((gy + 99) / 100) + parseInt((gy + 399) / 400);

        for (let i = 0; i < gm; ++i)
            g_day_no += this.gregorianDaysInMonth[i];
        if (gm > 1 && ((gy % 4 == 0 && gy % 100 != 0) || (gy % 400 == 0)))
            /* leap and after Feb */
            ++g_day_no;
        g_day_no += gd;

        let j_day_no = g_day_no - 79;

        const j_np = parseInt(j_day_no / 12053);
        j_day_no %= 12053;

        let jy = 979 + 33 * j_np + 4 * parseInt(j_day_no / 1461);

        j_day_no %= 1461;

        if (j_day_no >= 366) {
            jy += parseInt((j_day_no - 1) / 365);
            j_day_no = (j_day_no - 1) % 365;
        }
        let i = 0;
        for (; i < 11 && j_day_no >= this.persianDaysInMonth[i]; ++i) {
            j_day_no -= this.persianDaysInMonth[i];
        }
        const jm = i + 1;
        const jd = j_day_no + 1;


        return [jy, jm, jd];
    }

    private checkDate(year: number, month: number, day: number): boolean {
        let dayOffset = 0;
        if (month == 12 && (year - 979) % 33 % 4) {
            dayOffset = 1;
        }
        return !(year < 0 || year > 32767 ||
            month < 1 || month > 12 ||
            day < 1 || day > (this.persianDaysInMonth[month - 1] + dayOffset));
    }

    public setFullYear(year: number, month?: number, date?: number) {
        const persianDate = this.toPersian(this.gregorianDate.getFullYear(), this.gregorianDate.getMonth() + 1, this.gregorianDate.getDate());
        if (year < 100) year += 1300;
        persianDate[0] = year;
        if (month != undefined) {
            if (month > 11) {
                persianDate[0] += Math.floor(month / 12);
                month = month % 12;
            }
            persianDate[1] = month + 1;
        }
        if (date != undefined) persianDate[2] = date;
        const g = this.toGregorian(persianDate[0], persianDate[1], persianDate[2]);
        return this.gregorianDate.setFullYear(g[0], g[1] - 1, g[2]);
    }

    public setMonth(month: number, date?: number) {
        const gd = this.gregorianDate.getDate();
        const gm = this.gregorianDate.getMonth();
        const gy = this.gregorianDate.getFullYear();
        const j = this.toPersian(gy, gm + 1, gd);
        if (month > 11) {
            j[0] += Math.floor(month / 12);
            month = month % 12;
        }
        j[1] = month + 1;
        if (date != undefined) j[2] = date;
        const g = this.toGregorian(j[0], j[1], j[2]);
        return this.gregorianDate.setFullYear(g[0], g[1] - 1, g[2]);
    }

    public setDate(d: number) {
        const gd = this.gregorianDate.getDate();
        const gm = this.gregorianDate.getMonth();
        const gy = this.gregorianDate.getFullYear();
        const j = this.toPersian(gy, gm + 1, gd);
        j[2] = d;
        const g = this.toGregorian(j[0], j[1], j[2]);
        return this.gregorianDate.setFullYear(g[0], g[1] - 1, g[2]);
    }

    public setHours(hour: number, minute?: number, second?: number): number {
        minute = isNaN(minute) ? this.gregorianDate.getMinutes() : minute;
        second = isNaN(second) ? this.gregorianDate.getSeconds() : second;
        return this.gregorianDate.setHours(hour, minute, second);
    }

    public setMinutes(minute: number, second?: number): number {
        second = isNaN(second) ? this.gregorianDate.getSeconds() : second;
        return this.gregorianDate.setMinutes(minute, second);
    }

    public setSeconds(second: number): number {
        return this.gregorianDate.setSeconds(second);
    }

    public getFullYear() {
        const gd = this.gregorianDate.getDate();
        const gm = this.gregorianDate.getMonth();
        const gy = this.gregorianDate.getFullYear();
        const j = this.toPersian(gy, gm + 1, gd);
        return j[0];
    }

    public getMonth() {
        const gd = this.gregorianDate.getDate();
        const gm = this.gregorianDate.getMonth();
        const gy = this.gregorianDate.getFullYear();
        const j = this.toPersian(gy, gm + 1, gd);
        return j[1] - 1;
    }

    public getDate() {
        const gd = this.gregorianDate.getDate();
        const gm = this.gregorianDate.getMonth();
        const gy = this.gregorianDate.getFullYear();
        const j = this.toPersian(gy, gm + 1, gd);
        return j[2];
    }

    public getDay() {
        let day = this.gregorianDate.getDay();
        day = (day + 1) % 7;
        return day;
    }

    public getHours(): number {
        return this.gregorianDate.getHours();
    }

    public getMinutes(): number {
        return this.gregorianDate.getMinutes();
    }

    public getSeconds(): number {
        return this.gregorianDate.getSeconds();
    }

    public getTime(): number {
        return this.gregorianDate.getTime();
    }

    public setTime(time: number): number {
        return this.gregorianDate.setTime(time);
    }

    public valueOf(): number {
        return this.gregorianDate.getTime();
    }

    protected validateLocale(year: number, month: number, day: number): boolean {
        const result = this.checkDate(year, month, day);
        if (result) {
            this.setFullYear(year, month - 1, day);
            return true;
        }
        return false;
    }
}
