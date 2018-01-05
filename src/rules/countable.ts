import { ArrayVal } from './array-val';
import { ObjectPropertyFunction } from './object-property-function';

export class Countable extends ArrayVal {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return super.validate(input) || new ObjectPropertyFunction('count').validate(input);
    }
}
