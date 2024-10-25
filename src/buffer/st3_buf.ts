import {stde} from '../stde';

class St3_buf extends stde {
    constructor(in_count: number, out_count: number) {
        super('3ST BUF', in_count, out_count, (a) => {
            return a;
        });
    }
}

function st3_buf(in_count: number, out_count: number) {
    return new St3_buf(in_count, out_count);
}

export {St3_buf, st3_buf};