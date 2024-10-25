import {stde} from '../stde';

class D_ff extends stde {
    constructor(in_count: number, out_count: number) {
        super('D', in_count, out_count, (a) => {
            return a;
        });
    }
}

function d_ff(in_count: number, out_count: number) {
    return new D_ff(in_count, out_count);
}

export {D_ff, d_ff};
