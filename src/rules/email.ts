import { AbstractString } from './abstract-string';
import { Regex } from './regex';

export class Email extends AbstractString {

    /**
     * Validate string.
     */
    public validateString(input: string): boolean {
        /* tslint:disable max-line-length */
        const regex: Regex = new Regex(/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/);
        /* tslint:enable max-line-length */

        if (input.length > 254 || !regex.validate(input)) {
            return false;
        }

        const parts: string[] = input.split('@');

        if (parts[0].length > 64) {
            return false;
        }

        const domainParts: string[] = parts[1].split('.');

        if (domainParts.some((part: string) => part.length > 63)) {
            return false;
        }

        return true;
    }
}
