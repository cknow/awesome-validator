import { AbstractRule } from './abstract-rule';
import { IntVal } from './int-val';

export class Factor extends AbstractRule {

    /**
     * Factor.
     */
    public constructor(protected readonly dividend: number) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (this.dividend === 0) {
            return true;
        }

        const intval: IntVal = new IntVal();

        if (!intval.validate(this.dividend) || !intval.validate(input)) {
            return false;
        }

        const n: number = Number(input);

        return n !== 0 && intval.validate(Math.abs(this.dividend) / Math.abs(n));
    }
}
