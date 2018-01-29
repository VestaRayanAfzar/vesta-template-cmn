import { DateTime, ILocale } from "../../../medium";
import { UsLocale } from "./UsLocale";

export class UsDate extends DateTime {
    public locale: ILocale = UsLocale;
    private gregorianDate: Date;

    constructor() {
        super();
        this.gregorianDate = new Date();
    }

    public setFullYear(year: number, month?: number, date?: number) {
        return this.gregorianDate.setFullYear(year, month || this.gregorianDate.getMonth(), date || this.gregorianDate.getDate());
    }

    public setMonth(month: number, date?: number) {
        return this.gregorianDate.setMonth(month, date || this.gregorianDate.getDate());
    }

    public setDate(date: number) {
        return this.gregorianDate.setDate(date);
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
        return this.gregorianDate.getFullYear();
    }

    public getMonth() {
        return this.gregorianDate.getMonth();
    }

    public getDate() {
        return this.gregorianDate.getDate();
    }

    public getDay() {
        return this.gregorianDate.getDay();
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

    protected validateLocale(year: number, month: number, day: number): number {
        const date = new Date(year, month, day);
        const timestamp = date.getTime();
        if (isNaN(timestamp)) { return 0; }
        return timestamp;
    }
}
