import {stde} from '../stde';

class Xor extends stde {
    constructor(group_count: number, in_count?: number[] | number) {
        let seed = 1;
        if (in_count) {
            if (typeof in_count === 'number') {
                seed = in_count;
                in_count = Array(group_count).fill(in_count).flat();
            } else {
                seed = Math.max(...in_count);
            }
        } else {
            in_count = Array.from({length: group_count}, () => 1);
        }
        let in_arr: string[] = [];
        let out_arr: string[] = Array.from({length: seed}, (_, k) => String(k + 1));
        in_count.forEach((i, idx) => {
            if (i > 1) {
                for (let j = 0; j < i; j++) {
                    in_arr.push(String.fromCharCode(idx + 65) + '_' + String(j+1));
                }
            } else {
                in_arr.push(String.fromCharCode(idx + 65));
            }
        });
        let start = parseInt('0'.repeat(seed), 2);
        super('XOR', in_arr, out_arr, (a) => {
            let currentIndex = 0;
            let st = start;
            for (let i = 0; i < group_count; i++) {
                const groupSize = in_count[i];
                const substring = a.slice(currentIndex, currentIndex + groupSize);
                st = st ^ parseInt(substring.padStart(seed, '0'), 2);
                currentIndex += groupSize;
            }
            return st.toString(2).padStart(seed, '0');
        });
    }
}

function xor(group_count: number, in_count?: number[] | number) {
    return new Xor(group_count, in_count);
}

export {Xor, xor};
