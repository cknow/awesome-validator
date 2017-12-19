import { File } from './file';
import { Range } from './range';

export class Size extends Range {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (new File().validate(input)) {
            return super.validate(File.stats.size);
        }

        return super.validate(input);
    }
}
