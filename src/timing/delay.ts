import {stde} from '../stde';

class Delay extends stde {
    constructor(in_count: number, out_count: number) {
        super('DELAY', in_count, out_count, (a) => {
            return a;
        });
    }
}

function delay(in_count: number, out_count: number) {
    return new Delay(in_count, out_count);
}

export {Delay, delay};
