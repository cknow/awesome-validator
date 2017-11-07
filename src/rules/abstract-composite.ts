import { Validatable } from './../validatable';
import { AbstractRule } from './abstract-rule';

export abstract class AbstractComposite extends AbstractRule {

    /**
     * Rules.
     */
    protected rules: Set<Validatable> = new Set<Validatable>();

    /**
     * AbstractComposite.
     */
    public constructor(...rules: Validatable[]) {
        super();

        this.addRules(...rules);
    }

    /**
     * Get rules.
     */
    public getRules(): Validatable[] {
        return Array.from(this.rules);
    }

    /**
     * Add rule.
     */
    public addRule(rule: Validatable): this {
        this.rules.add(rule);

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
        return this.rules.has(rule);
    }

    /**
     * Remove rule.
     */
    public removeRule(rule: Validatable): this {
        this.rules.delete(rule);

        return this;
    }

    /**
     * Remove rules.
     */
    public removeRules(): this {
        this.rules.clear();

        return this;
    }
}
