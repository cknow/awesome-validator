import { AbstractRule } from './abstract-rule';
import { ArrayType } from './array-type';
import { Callable } from './callable';
import { StringType } from './string-type';

export class Callback extends AbstractRule {

    /**
     * Parameters.
     */
    protected parameters: any[];

    /**
     * Callback.
     */
    public constructor(
        protected readonly callback: any,
        ...parameters: any[]
    ) {
        super();

        this.parameters = parameters;
    }

    /**
     * Call.
     */
    public call(input: any): any {
        if (!new Callable().validate(this.callback)) {
            return false;
        }

        let fn: Function = this.callback;

        if (new StringType().validate(this.callback)) {
            fn = new Function(`return ${this.callback}`)();
        }

        if (new ArrayType().validate(this.callback)) {
            fn = this.callback[0][this.callback[1]];
        }

        const params: any[] = this.parameters;
        params.unshift(input);

        return fn.apply(this.callback, params);
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return Boolean(this.call(input));
    }
}
