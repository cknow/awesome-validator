import { AbstractRule } from './abstract-rule';
import { In } from './in';

import * as subdivisions from './subdivisions';

export class SubdivisionCode extends AbstractRule {

    /**
     * SubdivisionCode.
     */
    public constructor(
        public readonly countryCode: string,
        public readonly identical: boolean = true
    ) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const countryCode: string = this.countryCode.toLocaleUpperCase();

        if (!subdivisions[countryCode]) {
            return false;
        }

        return new In(subdivisions[countryCode], false, this.identical).validate(input);
    }
}
