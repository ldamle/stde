import {stde} from '../stde';

class Enc extends stde {
    constructor(in_count: number) {
        super(
            'ENC',
            Array.from({length: in_count}, (_, index) => String(index + 1)),
            Array.from({length: Math.pow(in_count, 0.5)}, (_, index) => String(index + 1)),
            (a) => {
                return a;
            }
        );
        this.style.preffix_name_in_connection = '$D_';
        this.style.preffix_name_out_connection = '$out_';
    }
}

function enc(in_count: number) {
    return new Enc(in_count);
}

export {Enc, enc};
