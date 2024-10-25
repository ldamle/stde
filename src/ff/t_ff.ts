import {stde} from '../stde';

class T_ff extends stde {
    constructor(in_count: number, out_count: number) {
        super('T', in_count, out_count, (a) => {
            return a;
        });
    }
}

function t_ff(in_count: number, out_count: number) {
    return new T_ff(in_count, out_count);
}

export {T_ff, t_ff};
