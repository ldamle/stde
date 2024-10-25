import {stde} from '../stde';

class Latch extends stde {
    constructor(in_count: number, out_count: number) {
        super('LATCH', in_count, out_count, (a) => {
            return a;
        });
    }
}

function latch(in_count: number, out_count: number) {
    return new Latch(in_count, out_count);
}

export {Latch, latch};
