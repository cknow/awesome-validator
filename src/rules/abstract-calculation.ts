import { AbstractRule } from './abstract-rule';

export abstract class AbstractCalculation extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const c: string = String(input).replace(/[^\d]/g, '');
        const length: number = this.getLength();

        if (c.length !== length || RegExp(`${Number(c[0])}{${length}}`).test(c)) {
            return false;
        }

        return this.validateCalculation(c);

    }

    /**
     * Get Length.
     */
    protected getLength(): number {
        return 11;
    }

    /**
     * Validate Calculation.
     */
    protected abstract validateCalculation(input: string): boolean;
}
