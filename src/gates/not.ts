import {stde} from '../stde';

class Not extends stde {
    constructor(in_count: number) { //todo in_count>30
        super('NOT', in_count, in_count, (a) => {
            return (~parseInt(a, 2)>>>0).toString(2).slice(-in_count).padStart(in_count, '1');;
        });
    }
}

function not(in_count: number) {
    return new Not(in_count);
}

export {Not, not};
