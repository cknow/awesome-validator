import { AbstractRegex } from './abstract-regex';

export class Email extends AbstractRegex {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const stringInput: String = String(input);

        if (!input || stringInput.length > 254 || !super.validate(stringInput)) {
            return false;
        }

        const parts: string[] = stringInput.split('@');

        if (parts[0].length > 64) {
            return false;
        }

        const domainParts: string[] = parts[1].split('.');

        if (domainParts.some((part: string) => part.length > 63)) {
            return false;
        }

        return true;
    }

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        /* tslint:disable max-line-length */
        return /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
        /* tslint:enable max-line-length */
    }
}
