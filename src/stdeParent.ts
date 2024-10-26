import * as lle from '@ldamle/lle';

class stde extends lle.Element {
    constructor(
        name: string,
        in_count: number | string[],
        out_count: number | string[],
        func: lle.Types.signal.func
    ) {
        if (
            typeof in_count === 'number' &&
            typeof out_count === 'number'
        ) {
            super(
                name,
                Array.from({length: in_count}, (_, index) => String(index + 1)),
                Array.from({length: out_count}, (_, index) => String(index + 1)),
                func
            );
        } else {
            super(
                name,
                in_count as string[],
                out_count as string[],
                func
            );
        }
    }
}

export {stde};