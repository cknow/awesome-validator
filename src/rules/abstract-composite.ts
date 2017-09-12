import { Validatable } from '../validatable';
import { AbstractRule } from './abstract-rule';

export abstract class AbstractComposite extends AbstractRule {

    /**
     * Rules.
     */
    protected rules: Validatable[] = [];

    /**
     * Abstract Composite.
     */
    public constructor(...rules: Validatable[]) {
        super();

        this.addRules(...rules);
    }

    /**
     * Get rules.
     */
    public getRules(): Validatable[] {
        return this.rules;
    }

    /**
     * Add rule.
     */
    public addRule(rule: Validatable): this {
        this.rules.push(rule);

        return this;
    }

    /**
     * Add rules.
     */
    public addRules(...rules: Validatable[]): this {
        rules.forEach((rule: Validatable) => {
            this.addRule(rule);
        });

        return this;
    }

    /**
     * Has rule.
     */
    public hasRule(rule: Validatable): boolean {
        return this.rules.indexOf(rule) !== -1;
    }

    /**
     * Remove rule.
     */
    public removeRule(rule: Validatable): this {
        if (this.hasRule(rule)) {
            this.rules.splice(this.rules.indexOf(rule), 1);
        }

        return this;
    }

    /**
     * Remove rules.
     */
    public removeRules(): this {
        this.rules = [];

        return this;
    }
}
