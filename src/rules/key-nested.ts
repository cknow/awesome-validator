import { AbstractRelated } from './abstract-related';
import { EndsWith } from './ends-with';
import { Key } from './key';
import { Scalar } from './scalar';

export class KeyNested extends AbstractRelated {

    /**
     * Has reference.
     */
    protected hasReference(input: any): boolean {
        try {
            this.getReferenceValue(input);

            return true;
        } catch (e) {}

        return false;
    }

    /**
     * Get reference pieces.
     */
    protected getReferencePieces(): string [] {
        let reference: string = String(this.reference);

        if (new EndsWith('.').validate(reference)) {
            reference = reference.slice(0, -1);
        }

        return reference.trim().split('.');
    }

    /**
     * Get value.
     */
    protected getValue(value: any, key: any): any {
        if (!new Key(key).validate(value)) {
            throw new TypeError(`Cannot select the property ${this.reference} from the given data.`);
        }

        if (value instanceof Map) {
            return value.get(key);
        }

        return value[key];
    }

    /**
     * Get reference value.
     */
    protected getReferenceValue(input: any): any {
        if (new Scalar().validate(input)) {
            throw new TypeError(`Cannot select the ${this.reference} in the given data.`);
        }

        const keys: string[] = this.getReferencePieces();
        let value: any = input;

        for (const key of keys) {
            value = this.getValue(value, key);
        }

        return value;
    }
}
