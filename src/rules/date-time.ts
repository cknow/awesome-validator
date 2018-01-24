import * as moment from 'moment';

import { AbstractDate } from './abstract-date';

export class DateTime extends AbstractDate {

    /**
     * Validate Date.
     */
    protected validateDate(date: moment.Moment): boolean {
        return true;
    }
}

export default DateTime;
