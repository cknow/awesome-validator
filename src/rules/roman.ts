import { Regex } from './regex';

export class Roman extends Regex {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    }
}
