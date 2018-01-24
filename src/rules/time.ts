import { AbstractServiceRegex } from './abstract-service-regex';

export class Time extends AbstractServiceRegex {

    /**
     * Services.
     */
    protected get services(): Map<string, RegExp> {
        return new Map([
            ['Full', /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/],
            ['Meridiem', /^([1-9]|1[0-2]):([0-5]\d)\s?(AM|PM)?$/i]
        ]);
    }
}

export default Time;
