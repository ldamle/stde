import * as stde from '../../src/stde';
describe('Check OR', () => {
    test('Check OR without group', () => {
        let or1 = stde.or(2);

        expect(or1.name).toEqual('OR');
        expect(or1.in_connections).toEqual(['A', 'B']);
        expect(or1.out_connections[0].out.name).toEqual('1');

        expect(or1.state('00')).toEqual('0');
        expect(or1.state('01')).toEqual('1');
        expect(or1.state('10')).toEqual('1');
        expect(or1.state('11')).toEqual('1');
    });

    test('Check OR with group', () => {
        let or2 = stde.or([3, 1, 4, 2]);

        expect(or2.name).toEqual('OR');
        expect(or2.in_connections).toEqual([
            'A_1',
            'A_2',
            'A_3',
            'B',
            'C_1',
            'C_2',
            'C_3',
            'C_4',
            'D_1',
            'D_2'
        ]);
        expect(or2.out_connections.length).toEqual(4);
        or2.out_connections.forEach((i, ind) => {
            expect(i.out.name).toEqual(String(ind + 1));
        });

        expect(or2.state('0000000001')).toEqual('0001');
        expect(or2.state('0000000010')).toEqual('0010');
        expect(or2.state('0000000011')).toEqual('0011');
        expect(or2.state('1000000000')).toEqual('0100');
        expect(or2.state('0000100000')).toEqual('1000');
        expect(or2.state('0000000011')).toEqual('0011');
        expect(or2.state('0000111100')).toEqual('1111');
        expect(or2.state('0000100000')).toEqual('1000');
        expect(or2.state('1111111111')).toEqual('1111');
    });

    test('Check OR with group2', () => {
        let or3 = stde.or(4, 2);

        expect(or3.name).toEqual('OR');
        expect(or3.in_connections).toEqual([
            'A_1',
            'A_2',
            'B_1',
            'B_2',
            'C_1',
            'C_2',
            'D_1',
            'D_2',
        ]);
        expect(or3.out_connections.length).toEqual(2);
        or3.out_connections.forEach((i, ind) => {
            expect(i.out.name).toEqual(String(ind + 1));
        });


        expect(or3.state('00000000')).toEqual('00');
        expect(or3.state('01010101')).toEqual('01');
        expect(or3.state('00001000')).toEqual('10');
        expect(or3.state('10101010')).toEqual('10');
        expect(or3.state('10011001')).toEqual('11');
        expect(or3.state('00100011')).toEqual('11');
        expect(or3.state('10111010')).toEqual('11');
        expect(or3.state('11111111')).toEqual('11');
    });
});
