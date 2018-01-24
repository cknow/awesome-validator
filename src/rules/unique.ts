import { ArrayVal } from './array-val';

export class Unique extends ArrayVal {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (!super.validate(input)) {
            return false;
        }

        const unique: any[] = input
            .map((value: any) => JSON.stringify(value))
            .reverse()
            .filter((e: any, i: number, a: any[]) => a.indexOf(e, i + 1) === -1)
            .reverse()
            .map((value: any) => JSON.parse(value))
        ;

        return JSON.stringify(input) === JSON.stringify(unique);
    }
}

export default Unique;
