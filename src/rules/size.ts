import * as fs from 'fs';

import { Range } from './range';

export class Size extends Range {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        try {
            if (input instanceof fs.Stats) {
                return super.validate(input.size);
            }

            if (fs.existsSync(input)) {
                return super.validate(fs.statSync(input).size);
            }
        } catch (e) {}

        return super.validate(input);
    }
}
