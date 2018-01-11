import * as chardet from 'chardet';

import { AbstractServiceList } from './abstract-service-list';
import { Readable } from './readable';

export class Charset extends AbstractServiceList {

    /**
     * Get item.
     */
    protected getItem(input: any): any {
        if (new Readable().validate(input)) {
            return chardet.detectFileSync(input);
        }

        return chardet.detect(new Buffer(input));
    }
}
