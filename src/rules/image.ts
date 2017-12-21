import { Validatable } from './../validatable';
import { AbstractWrapper } from './abstract-wrapper';
import { Mimetype } from './mimetype';

export class Image extends AbstractWrapper {

    /**
     * Get Validatable.
     */
    protected getValidatable(): Validatable {
        return new Mimetype(/^image\//i);
    }
}
