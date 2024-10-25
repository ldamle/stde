import {stde} from '../stde';

class Sync_cnt extends stde {
    constructor(in_count: number, out_count: number) {
        super('SYNC CNT', in_count, out_count, (a) => {
            return a;
        });
    }
}

function sync_cnt(in_count: number, out_count: number) {
    return new Sync_cnt(in_count, out_count);
}

export {Sync_cnt, sync_cnt};
