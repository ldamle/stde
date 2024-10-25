import {stde} from '../stde';

class Async_cnt extends stde {
    constructor(in_count: number, out_count: number) {
        super('ASYNC CNT', in_count, out_count, (a) => {
            return a;
        });
    }
}

function async_cnt(in_count: number, out_count: number) {
    return new Async_cnt(in_count, out_count);
}

export {Async_cnt, async_cnt};
