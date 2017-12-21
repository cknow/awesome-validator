import { NumberVal } from './number-val';

export class Fibonacci extends NumberVal {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (!super.validate(input)) {
            return false;
        }

        const sequence: number[] = [0, 1];
        let position: number = 1;

        while (input > sequence[position]) {
            ++position;
            sequence[position] = sequence[position - 1] + sequence[position - 2];
        }

        return sequence[position] === Number(input);
    }
}
