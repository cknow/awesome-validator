import { AbstractRule } from './abstract-rule';

export abstract class AbstractCalculation extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const c: string = String(input).replace(/[^\d]/g, '');
        const length: number = this.getLength();

        if (!c || (length > 0 && (c.length !== length || RegExp(`${Number(c[0])}{${length}}`).test(c)))) {
            return false;
        }

        return this.validateCalculation(c);
    }

    /**
     * Get Length.
     */
    protected abstract getLength(): number;

    /**
     * Validate Calculation.
     */
    protected abstract validateCalculation(input: string): boolean;
}
