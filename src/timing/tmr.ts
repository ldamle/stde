import {stde} from '../stde';

class Tmr extends stde {
    constructor(in_count: number, out_count: number) {
        super('TMR', in_count, out_count, (a) => {
            return a;
        });
    }
}

function tmr(in_count: number, out_count: number) {
    return new Tmr(in_count, out_count);
}

export {Tmr, tmr};
