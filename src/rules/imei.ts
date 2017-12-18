import { Luhn } from './luhn';

export class Imei extends Luhn {

    /**
     * Get Length.
     */
    protected getLength(): number {
        return 15;
    }
}
