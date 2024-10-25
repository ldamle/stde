import {stde} from '../stde';

class Sr_ff extends stde {
    constructor(in_count: number, out_count: number) {
        super('SR', in_count, out_count, (a) => {
            return a;
        });
    }
}

function sr_ff(in_count: number, out_count: number) {
    return new Sr_ff(in_count, out_count);
}

export {Sr_ff, sr_ff};
