import { AbstractRelated } from './abstract-related';
import { Callable } from './callable';
import { Callback } from './callback';

export class Call extends AbstractRelated {

    /**
     * Has reference.
     */
    protected hasReference(input: any): boolean {
        return new Callable().validate(this.reference);
    }

    /**
     * Get reference value.
     */
    protected getReferenceValue(input: any): any {
        return new Callback(this.reference).call(input);
    }
}
