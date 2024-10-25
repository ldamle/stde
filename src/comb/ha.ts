import {stde} from '../stde';

class Ha extends stde {
    constructor(in_count: number, out_count: number) {
        super('HA', in_count, out_count, (a) => {
            return a;
        });
    }
}

function ha(in_count: number, out_count: number) {
    return new Ha(in_count, out_count);
}

export {Ha, ha};
