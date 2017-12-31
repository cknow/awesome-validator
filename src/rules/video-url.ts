import { AbstractServiceRegex } from './abstract-service-regex';

export class VideoUrl extends AbstractServiceRegex {

    /**
     * Services.
     */
    protected get services(): Map<string, RegExp> {
        return new Map([
            /* tslint:disable max-line-length */
            ['YouTube', /^https?:\/\/(www\.)?(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^\"&?\/]{11})/i],
            ['Vimeo', /^https?:\/\/(www\.)?(player\.)?(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/)|(video\/))?([0-9]+)/i]
            /* tslint:enable max-line-length */
        ]);
    }
}
