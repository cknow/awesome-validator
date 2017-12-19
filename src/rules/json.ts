import { AbstractTryCatch } from './abstract-try-catch';
import { ObjectType } from './object-type';

export class Json extends AbstractTryCatch {

    /**
     * Validate Function.
     */
    protected validateFunction(input: any): boolean {
        const obj: any = JSON.parse(input);

        return !!obj && new ObjectType().validate(obj);
    }
}
