import { Validatable } from './../validatable';
import { AllOf } from './all-of';
import { Key } from './key';

export class KeySet extends AllOf {

    /**
     * Add rule.
     */
    public addRule(rule: Validatable): this {
        let r: Validatable | undefined = rule;

        if (rule instanceof AllOf && rule.getRules().length === 1) {
            r = rule.getRules().shift();
        }

        if (r instanceof Key) {
            this.rules.add(r);
        }

        return this;
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return this.hasValidStructure(input) && super.validate(input);
    }

    /**
     * Has valid structure.
     */
    protected hasValidStructure(input: any): boolean {
        let i: number = 0;

        for (const rule of this.getRules()) {
            if (!(rule instanceof Key) || (!new Key(rule.reference).validate(input) && rule.mandatory)) {
                return false;
            }

            i++;
        }

        if (input instanceof Map) {
            return i === input.size;
        }

        return i === Object.keys(input).length;
    }
}

export default KeySet;
