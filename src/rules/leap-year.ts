import * as moment from 'moment';

import { AbstractDate } from './abstract-date';

export class LeapYear extends AbstractDate {

    /**
     * Validate Date.
     */
    protected validateDate(date: moment.Moment): boolean {
        return date.isLeapYear();
    }
}

export default LeapYear;
