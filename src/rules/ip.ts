import { AbstractServiceRegex } from './abstract-service-regex';

export class Ip extends AbstractServiceRegex {

    /**
     * Services.
     */
    protected get services(): Map<string, RegExp> {
        return new Map([
            ['ipv4', this.ipv4()],
            ['ipv6', this.ipv6()]
        ]);
    }

    /**
     * Ipv4.
     */
    private ipv4(): RegExp {
        const v4: string =
            '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';

        return new RegExp(`(?:^${v4}$)`);
    }

    /**
     * Ipv6.
     */
    private ipv6(): RegExp {
        const v4: string =
            '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';

        const v6seg: string = '[0-9a-fA-F]{1,4}';
        const v6: string = `(
(?:${v6seg}:){7}(?:${v6seg}|:)|
(?:${v6seg}:){6}(?:${v4}|:${v6seg}|:)|
(?:${v6seg}:){5}(?::${v4}|(:${v6seg}){1,2}|:)|
(?:${v6seg}:){4}(?:(:${v6seg}){0,1}:${v4}|(:${v6seg}){1,3}|:)|
(?:${v6seg}:){3}(?:(:${v6seg}){0,2}:${v4}|(:${v6seg}){1,4}|:)|
(?:${v6seg}:){2}(?:(:${v6seg}){0,3}:${v4}|(:${v6seg}){1,5}|:)|
(?:${v6seg}:){1}(?:(:${v6seg}){0,4}:${v4}|(:${v6seg}){1,6}|:)|
(?::((?::${v6seg}){0,5}:${v4}|(?::${v6seg}){1,7}|:))
)(%[0-9a-zA-Z]{1,})?`.replace(/\s*\/\/.*$/gm, '').replace(/\n/g, '').trim();

        return new RegExp(`(?:^${v6}$)`);
    }
}

export default Ip;
