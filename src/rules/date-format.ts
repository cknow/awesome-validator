import { AbstractDate } from './abstract-date';

export class DateFormat extends AbstractDate {

    /**
     * Validate Date.
     */
    protected validateDate(date: Date): boolean {
        return true;
    }
}

export default DateFormat;
