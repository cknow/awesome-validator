import { AbstractRelated } from './abstract-related';

export class Key extends AbstractRelated {

    /**
     * Has reference.
     */
    protected hasReference(input: any): boolean {
        if (input instanceof Map) {
            return input.has(this.reference);
        }

        return this.reference in Object(input);
    }

    /**
     * Get reference value.
     */
    protected getReferenceValue(input: any): any {
        if (input instanceof Map) {
            return input.get(this.reference);
        }

        return input[this.reference];
    }
}
