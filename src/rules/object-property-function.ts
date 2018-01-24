import { FunctionType } from './function-type';
import { ObjectProperty } from './object-property';

export class ObjectPropertyFunction extends ObjectProperty {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return super.validate(input) && new FunctionType().validate(input[this.property]);
    }
}

export default ObjectPropertyFunction;
