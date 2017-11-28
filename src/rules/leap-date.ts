import * as moment from 'moment';

import { AbstractDate } from './abstract-date';

export class LeapDate extends AbstractDate {

    /**
     * Validate Date.
     */
    protected validateDate(date: moment.Moment): boolean {
        return date.format('DD-MM') === '29-02';
    }
}
