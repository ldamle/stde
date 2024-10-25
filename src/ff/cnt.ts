import {stde} from '../stde';

class Cnt extends stde {
    constructor(in_count: number, out_count: number) {
        super('CNT', in_count, out_count, (a) => {
            return a;
        });
    }
}

function cnt(in_count: number, out_count: number) {
    return new Cnt(in_count, out_count);
}

export {Cnt, cnt};
