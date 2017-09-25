import { AbstractRule } from './abstract-rule';
import { ObjectType } from './object-type';

export class Json extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        try {
            const obj: any = JSON.parse(input);

            return !!obj && new ObjectType().validate(obj);
        } catch (e) {
        }

        return false;
    }
}
