import { Empty } from './empty';

export class NotEmpty extends Empty {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return !super.validate(input);
    }
}
