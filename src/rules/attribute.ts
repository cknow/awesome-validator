import { AbstractRelated } from './abstract-related';
import { ObjectProperty } from './object-property';

export class Attribute extends AbstractRelated {

    /**
     * Has reference.
     */
    protected hasReference(input: any): boolean {
        return new ObjectProperty(this.reference).validate(input);
    }

    /**
     * Get reference value.
     */
    protected getReferenceValue(input: any): any {
        return Reflect.get(input, this.reference);
    }
}

export default Attribute;
