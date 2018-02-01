import { AbstractDate } from './abstract-date';

export class LeapDate extends AbstractDate {

    /**
     * Validate Date.
     */
    protected validateDate(date: Date): boolean {
        return date.getDate() === 29 && date.getMonth() === 1;
    }
}

export default LeapDate;
