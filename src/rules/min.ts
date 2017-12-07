import { AbstractInterval } from './abstract-interval';

export class Min extends AbstractInterval {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (this.inclusive) {
            return this.filterInterval(input) >= this.filterInterval(this.interval);
        }

        return this.filterInterval(input) > this.filterInterval(this.interval);
    }
}
