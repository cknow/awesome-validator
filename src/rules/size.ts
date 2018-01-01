import { Between } from './between';
import { File } from './file';

export class Size extends Between {

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
