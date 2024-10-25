import {stde} from '../stde';

class Buf extends stde {
    constructor(in_count: number, out_count: number) {
        super('BUF', in_count, out_count, (a) => {
            return a;
        });
    }
}

function buf(in_count: number, out_count: number) {
    return new Buf(in_count, out_count);
}

export {Buf, buf};