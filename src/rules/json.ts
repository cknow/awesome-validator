import { ObjectType } from './object-type';

export class Json extends ObjectType {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        try {
            const obj: any = JSON.parse(input);

            return !!obj && super.validate(obj);
        } catch (e) {}

        return false;
    }
}
