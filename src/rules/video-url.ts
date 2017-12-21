import { AbstractRule } from './abstract-rule';
import { Regex } from './regex';

export class VideoUrl extends AbstractRule {

    /**
     * Services.
     */
    protected services: Map<string, RegExp> = new Map([
        /* tslint:disable max-line-length */
        ['youtube', /^https?:\/\/(www\.)?(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^\"&?\/]{11})/i],
        ['vimeo', /^https?:\/\/(www\.)?(player\.)?(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/)|(video\/))?([0-9]+)/i]
        /* tslint:enable max-line-length */
    ]);

    /**
     * VideoUrl.
     */
    public constructor(public readonly serviceKey?: string) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const serviceValue: RegExp | undefined = this.serviceKey ? this.services.get(this.serviceKey) : undefined;

        if (serviceValue !== undefined) {
            return new Regex(serviceValue).validate(input);
        }

        for (const service of Array.from(this.services.values())) {
            if (new Regex(service).validate(input)) {
                return true;
            }
        }

        return false;
    }
}
