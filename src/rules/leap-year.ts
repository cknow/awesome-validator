import { isLeapYear } from 'date-fns';

import { AbstractDate } from './abstract-date';

export class LeapYear extends AbstractDate {

    /**
     * Validate Date.
     */
    protected validateDate(date: Date): boolean {
        return isLeapYear(date);
    }
}

export default LeapYear;
