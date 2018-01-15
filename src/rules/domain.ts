import { Validatable } from './../validatable';
import { AbstractRule } from './abstract-rule';
import { Regex } from './regex';
import { StringType } from './string-type';
import { Tld } from './tld';

export class Domain extends AbstractRule {

    /**
     * Tld.
     */
    protected tld: Validatable;

    /**
     * Domain.
     */
    public constructor(tldCheck: boolean = true) {
        super();

        this.tld = tldCheck ? new Tld() : new Regex(/^[a-zA-Z0-9]+$/gi);
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (!new StringType().validate(input)) {
            return false;
        }

        const parts: string[] = String(input).split('.');

        if (parts.length <= 1 || !this.tld.validate(parts.pop())) {
            return false;
        }

        return parts.every((host: string) => {
            const regex: Regex = new Regex(/^(?!:\/\/)([a-zA-Z0-9]+|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])$/gi);

            return regex.validate(host);
        });
    }
}
