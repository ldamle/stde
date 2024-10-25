import {stde} from '../stde';

class Jk_ff extends stde {
    constructor(in_count: number, out_count: number) {
        super('JK', in_count, out_count, (a) => {
            return a;
        });
    }
}

function jk_ff(in_count: number, out_count: number) {
    return new Jk_ff(in_count, out_count);
}

export {Jk_ff, jk_ff};
