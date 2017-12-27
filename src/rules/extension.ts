import { AbstractRule } from './abstract-rule';
import { In } from './in';

export class Extension extends AbstractRule {

    /**
     * Extension.
     */
    public constructor(public readonly extension: any) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const ext: string | undefined = String(input).split('.').pop();

        return ext !== undefined && new In(this.extension, false).validate(ext);
    }
}
