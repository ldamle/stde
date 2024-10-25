import {stde} from '../stde';

class Sreg extends stde {
    constructor(in_count: number, out_count: number) {
        super('SREG', in_count, out_count, (a) => {
            return a;
        });
    }
}

function sreg(in_count: number, out_count: number) {
    return new Sreg(in_count, out_count);
}

export {Sreg, sreg};
