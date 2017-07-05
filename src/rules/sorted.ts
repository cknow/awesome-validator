import { AbstractRule } from './abstract-rule';

export class Sorted extends AbstractRule {

    /**
     * Sorted.
     */
    public constructor(public readonly fn?: Function | null, public readonly ascending: boolean = true) {
        super();

        if (!this.fn) {
            this.fn = (input: any): any => input;
        }
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (!input) {
            return true;
        }

        const itens: string[] = Object.keys(input);

        if (itens.length < 2 || !this.fn) {
            return true;
        }

        for (let i: number = 1; i < itens.length; i++) {
            if ((this.ascending && this.fn.call(null, input[itens[i]]) < this.fn.call(null, input[itens[i - 1]]))
            || (!this.ascending && this.fn.call(null, input[itens[i]]) > this.fn.call(null, input[itens[i - 1]]))
            ) {
                return false;
            }
        }

        return true;
    }
}
