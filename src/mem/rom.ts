import {stde} from '../stde';

class Rom extends stde {
    constructor(in_count: number, out_count: number) {
        super('ROM', in_count, out_count, (a) => {
            return a;
        });
    }
}

function rom(in_count: number, out_count: number) {
    return new Rom(in_count, out_count);
}

export {Rom, rom};
