import {stde} from '../stde';

class Mux extends stde {
    constructor(in_count: number, preffix_address?: string, preffix_digital?: string) {
        let ind_count = in_count^2;
        super(
            'MUX',
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

function mux(in_count: number, preffix_address?: string, preffix_digital?: string) {
    return new Mux(in_count, preffix_address, preffix_digital);
}

export {Mux, mux};