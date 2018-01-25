import { Validatable } from './../validatable';
import { AbstractWrapper } from './abstract-wrapper';
import { Between } from './between';

export class Port extends AbstractWrapper {

    /**
     * Get Validatable.
     */
    protected getValidatable(input: any): Validatable {
        return new Between(0, 65535);
    }
}

export default Port;
