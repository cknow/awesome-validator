import { Validatable } from './../validatable';
import { AbstractWrapper } from './abstract-wrapper';
import { Regex } from './regex';

export abstract class AbstractRegex extends AbstractWrapper {

    /**
     * Get Validatable.
     */
    protected getValidatable(input: any): Validatable {
        return new Regex(this.getPattern());
    }

    /**
     * Get pattern.
     */
    protected abstract getPattern(): string | RegExp;
}
