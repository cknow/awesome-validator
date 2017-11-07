import { AbstractRule } from './abstract-rule';
import { Regex } from './regex';

export enum VideoService {
    YouTube,
    Vimeo
}

export class VideoUrl extends AbstractRule {

    /**
     * Services.
     */
    protected services: RegExp[] = [
        /* tslint:disable max-line-length */
        /^https?:\/\/(www\.)?(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^\"&?\/]{11})/i,
        /^https?:\/\/(www\.)?(player\.)?(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/)|(video\/))?([0-9]+)/i
        /* tslint:enable max-line-length */
    ];

    /**
     * VideoUrl.
     */
    public constructor(public readonly service?: VideoService) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (this.service !== undefined && this.services[this.service]) {
            return new Regex(this.services[this.service]).validate(input);
        }

        for (const service of this.services) {
            if (new Regex(service).validate(input)) {
                return true;
            }
        }

        return false;
    }
}
