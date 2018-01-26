import { AbstractString } from './abstract-string';
import { Latitude } from './latitude';
import { Longitude } from './longitude';

export class Coordinate extends AbstractString {

    /**
     * Validate string.
     */
    protected validateString(input: string): boolean {
        const parts: string[] = input.split(',');

        if (!parts || parts.length !== 2) {
            return false;
        }

        const latitude: string = (/^\(/.test(parts[0]) ? parts[0].slice(1) : parts[0]).trim();
        const longitude: string = (/\)$/.test(parts[1]) ? parts[1].slice(0, -1) : parts[1]).trim();

        return new Latitude().validate(latitude) && new Longitude().validate(longitude);
    }
}

export default Coordinate;
