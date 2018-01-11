import { AbstractRule } from './abstract-rule';
import { Iterable } from './iterable';

export class Sorted extends AbstractRule {

    /**
     * Sorted.
     */
    public constructor(
        protected readonly fn?: Function | null,
        protected readonly ascending: boolean = true
    ) {
        super();

        this.fn = (this.fn) ? this.fn : (input: any): any => input;
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (!new Iterable().validate(input)) {
            return false;
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
