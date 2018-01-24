import { Validatable } from './../validatable';
import { AbstractRule } from './abstract-rule';
import { Iterable } from './iterable';

export class Each extends AbstractRule {

    /**
     * Each.
     */
    public constructor(
        public readonly itemValidator?: Validatable | null,
        public readonly keyValidator?: Validatable | null
    ) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (!new Iterable().validate(input)) {
            return false;
        }

        for (const key of Object.keys(input)) {
            if (this.itemValidator && !this.itemValidator.validate(input[key])) {
                return false;
            }

            if (this.keyValidator && !this.keyValidator.validate(key)) {
                return false;
            }
        }

        return true;
    }
}

export default Each;
