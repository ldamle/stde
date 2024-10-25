import {stde} from '../stde';

class Cmp extends stde {
    constructor(in1_count: number, in2_count: number, preffix_in1?: string, preffix_in2?: string) {
        let in_count = Math.max(in1_count, in2_count);
        super(
            'CMP',
            [
                ...Array.from({length: in1_count}, (_, index) =>
                    preffix_in1 ? preffix_in1 : 'A_' + String(index + 1)
                ),
                ...Array.from({length: in2_count}, (_, index) =>
                    preffix_in2 ? preffix_in2 : 'B_' + String(index + 1)
                )
            ],
            in_count + 1,
            (a) => {
                return a;
            }
        );
        this.style.preffix_name_out_connection = '$out_';
    }
}

function cmp(in1_count: number, in2_count: number, preffix_in1?: string, preffix_in2?: string) {
    return new Cmp(in1_count, in2_count, preffix_in1, preffix_in2);
}

export {Cmp, cmp};
