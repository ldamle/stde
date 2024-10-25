import {stde} from '../stde';

class Fa extends stde {
    constructor(in_count: number, out_count: number) {
        super('FA', in_count, out_count, (a) => {
            return a;
        });
    }
}

function fa(in_count: number, out_count: number) {
    return new Fa(in_count, out_count);
}

export {Fa, fa};
