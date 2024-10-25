import {stde} from '../stde';

class Demux extends stde {
    constructor(in_count: number, preffix_address?: string, preffix_digital?: string) {
        let ind_count = in_count^2;
        super(
            'DEMUX',
            [
                ...Array.from({length: in_count}, (_, index) =>
                    preffix_address ? preffix_address : 'A_' + String(index + 1)
                ),
                ...Array.from({length: ind_count}, (_, index) =>
                    preffix_digital ? preffix_digital : 'D_' + String(index + 1)
                )
            ],
            ['out_1'],
            (a) => {
                return a;
            }
        );
    }
}

function demux(in_count: number, preffix_address?: string, preffix_digital?: string) {
    return new Demux(in_count, preffix_address, preffix_digital);
}

export {Demux, demux};