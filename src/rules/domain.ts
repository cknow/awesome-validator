import { Validatable } from './../validatable';
import { AbstractRule } from './abstract-rule';
import { Alnum } from './alnum';
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
    public constructor(
        tldCheck: boolean = true,
        public readonly allowUnderscores: boolean = false,
        public readonly allowTrailingDot: boolean = false
    ) {
        super();

        this.tld = tldCheck ? new Tld() : new Alnum();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (!new StringType().validate(input)) {
            return false;
        }

        let inputString: string = String(input);

        if (this.allowTrailingDot && inputString.substr(-1) === '.') {
            inputString = inputString.slice(0, -1);
        }

        const parts: string[] = inputString.split('.');

        if (parts.length <= 1 || !this.tld.validate(parts.pop())) {
            return false;
        }

        return parts.every((host: string) => {
            const regex: Regex = new Regex(/^(?!:\/\/)([a-z0-9]+|[a-z0-9][a-z0-9-]*[a-z0-9])$/gi);

            return regex.validate(this.allowUnderscores ? host.replace(/_/g, '') : host);
        });
    }
}

export default Domain;
