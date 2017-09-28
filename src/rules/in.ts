import { AbstractRule } from './abstract-rule';
import { ArrayVal } from './array-val';
import { StringType } from './string-type';

export class In extends AbstractRule {

    /**
     * In.
     */
    public constructor(public readonly haystack?: string | any[] | Object | Set<any> | Map<any, any>) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const haystack: any = this.getHaystack();

        if (new StringType().validate(haystack)) {
            return haystack.indexOf(input) !== - 1;
        }

        if (new ArrayVal().validate(haystack)) {
            return haystack.indexOf(input) !== -1;
        }

        if (haystack instanceof Set) {
            return haystack.has(input);
        }

        if (haystack instanceof Map) {
            return haystack.has(input);
        }

        if (haystack instanceof Object) {
            return haystack.hasOwnProperty(input);
        }

        return false;
    }

    /**
     * Get haystack.
     */
    protected getHaystack(): string | any[] | Object | Set<any> | Map<any, any> {
        if (!this.haystack) {
            throw new TypeError('Invalid haystack.');
        }

        return this.haystack;
    }
}
