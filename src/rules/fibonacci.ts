import { AbstractRule } from './abstract-rule';
import { NumberVal } from './number-val';

export class Fibonacci extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (!new NumberVal().validate(input)) {
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
