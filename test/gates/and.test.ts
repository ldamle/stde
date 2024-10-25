import * as stde from '../../src/stde';
describe('Check AND', () => {
    test('Check AND without group', () => {
        let and1 = stde.and(2);

        expect(and1.name).toEqual('AND');
        expect(and1.in_connections).toEqual(['A', 'B']);
        expect(and1.out_connections[0].out.name).toEqual('1');

        expect(and1.state('00')).toEqual('0');
        expect(and1.state('01')).toEqual('0');
        expect(and1.state('10')).toEqual('0');
        expect(and1.state('11')).toEqual('1');
    });

    test('Check AND with group', () => {
        let and2 = stde.and(4, [3, 1, 4, 2]);

        expect(and2.name).toEqual('AND');
        expect(and2.in_connections).toEqual([
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
        expect(and2.out_connections.length).toEqual(4);
        and2.out_connections.forEach((i, ind) => {
            expect(i.out.name).toEqual(String(ind + 1));
        });

        expect(and2.state('0000000001')).toEqual('0000');
        expect(and2.state('0011000101')).toEqual('0001');
        expect(and2.state('0100001010')).toEqual('0010');
        expect(and2.state('0111001111')).toEqual('0011');
        expect(and2.state('1000010000')).toEqual('0100');
        expect(and2.state('1111011111')).toEqual('0111');
        expect(and2.state('0000100000')).toEqual('1000');
        expect(and2.state('1111111111')).toEqual('1111');
    });

    test('Check AND with group2', () => {
        let and3 = stde.and(4, 2);

        expect(and3.name).toEqual('AND');
        expect(and3.in_connections).toEqual([
            'A_1',
            'A_2',
            'B_1',
            'B_2',
            'C_1',
            'C_2',
            'D_1',
            'D_2',
        ]);
        expect(and3.out_connections.length).toEqual(2);
        and3.out_connections.forEach((i, ind) => {
            expect(i.out.name).toEqual(String(ind + 1));
        });

        expect(and3.state('00000000')).toEqual('00');
        expect(and3.state('10011001')).toEqual('00');
        expect(and3.state('01010110')).toEqual('00');
        expect(and3.state('00100011')).toEqual('00');
        expect(and3.state('10001100')).toEqual('00');
        expect(and3.state('00001000')).toEqual('00');
        expect(and3.state('00001000')).toEqual('00');
        expect(and3.state('11110111')).toEqual('01');
        expect(and3.state('01011101')).toEqual('01');
        expect(and3.state('10111010')).toEqual('10');
        expect(and3.state('11111111')).toEqual('11');
    });
});
