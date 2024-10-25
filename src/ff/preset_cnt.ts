import {stde} from '../stde';

class Preset_cnt extends stde {
    constructor(in_count: number, out_count: number) {
        super('PRESET CNT', in_count, out_count, (a) => {
            return a;
        });
    }
}

function preset_cnt(in_count: number, out_count: number) {
    return new Preset_cnt(in_count, out_count);
}

export {Preset_cnt, preset_cnt};
