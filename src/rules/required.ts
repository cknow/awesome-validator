import { Empty } from './empty';

export class Required extends Empty {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return !super.validate(input);
    }
}
