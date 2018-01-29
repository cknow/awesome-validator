import { Validatable } from './../validatable';
import { AbstractWrapper } from './abstract-wrapper';
import { AnyOf } from './any-of';
import { Isbn10 } from './isbn10';
import { Isbn13 } from './isbn13';

export class Isbn extends AbstractWrapper {

    /**
     * Get Validatable.
     */
    protected getValidatable(input: any): Validatable {
        return new AnyOf(new Isbn10(), new Isbn13());
    }
}

export default Isbn;
