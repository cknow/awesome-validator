import { AbstractTryCatch } from './abstract-try-catch';
import { ArrayType } from './array-type';
import { FunctionType } from './function-type';
import { ObjectType } from './object-type';
import { StringType } from './string-type';

export class Callable extends AbstractTryCatch {

    /**
     * Validate Function.
     */
    protected validateFunction(input: any): boolean {
        if (new FunctionType().validate(input)) {
            return true;
        }

        if (new StringType().validate(input)) {
            /* tslint:disable no-eval */
            return new FunctionType().validate(eval(input));
            /* tslint:enable no-eval */
        }

        if (new ArrayType().validate(input) &&
            input.length === 2 &&
            new ObjectType().validate(input[0]) &&
            new StringType().validate(input[1])
        ) {
            return new FunctionType().validate(input[0][input[1]]);
        }

        return false;
    }
}
