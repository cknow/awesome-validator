import * as subdivisions from './subdivisions';

import { AbstractServiceArray } from './abstract-service-array';

export class SubdivisionCode extends AbstractServiceArray {

    /**
     * Services.
     */
    protected get services(): Map<string, string[]> {
        const list: Map<string, string[]> = new Map<string, string[]>();

        for (const subdivision of Object.keys(subdivisions)) {
            list.set(subdivision, subdivisions[subdivision]);
        }

        return list;
    }
}
