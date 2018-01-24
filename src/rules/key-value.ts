import { Validatable } from './../validatable';
import { Validator } from './../validator';
import { AbstractRule } from './abstract-rule';
import { Key } from './key';

export class KeyValue extends AbstractRule {

    /**
     * KeyValue.
     */
    public constructor(
        public readonly comparedKey: any,
        public readonly ruleName: any,
        public readonly baseKey: any
    ) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const ruleCompared: Key = new Key(this.comparedKey);
        const ruleBase: Key = new Key(this.baseKey);

        if (!ruleCompared.validate(input) || !ruleBase.validate(input) || !(this.ruleName in Validator)) {
            return false;
        }

        const rule: Validatable = Validator[this.ruleName](ruleBase.getReferenceValueStored());

        return rule.validate(ruleCompared.getReferenceValueStored());
    }
}

export default KeyValue;
