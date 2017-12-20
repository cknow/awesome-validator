import { AbstractRule } from './abstract-rule';
import { Mimetype } from './mimetype';

export class Image extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new Mimetype(/^image\//i).validate(input);
    }
}
