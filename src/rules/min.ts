import { AbstractInterval } from './abstract-interval';

export class Min extends AbstractInterval {

    /**
     * Validate interval.
     */
    protected validateInterval(input: any, interval: any): boolean {
        if (this.inclusive) {
            return input >= interval;
        }

        return input > interval;
    }
}

export default Min;
