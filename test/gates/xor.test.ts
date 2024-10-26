import * as stde from '../../src/stde';
describe('Check XOR', () => {
    test('Check XOR without group', () => {
        let xor1 = stde.xor(2);

        expect(xor1.name).toEqual('XOR');
        expect(xor1.in_connections).toEqual(['A', 'B']);
        expect(xor1.out_connections[0].out.name).toEqual('1');

        expect(xor1.state('00')).toEqual('0');
        expect(xor1.state('01')).toEqual('1');
        expect(xor1.state('10')).toEqual('1');
        expect(xor1.state('11')).toEqual('0');
    });

    test('Check XOR with group', () => {
        let xor2 = stde.xor([3, 1, 4, 2]);

        expect(xor2.name).toEqual('XOR');
        expect(xor2.in_connections).toEqual([
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
        expect(xor2.out_connections.length).toEqual(4);
        xor2.out_connections.forEach((i, ind) => {
            expect(i.out.name).toEqual(String(ind + 1));
        });

        expect(xor2.state('1000010000')).toEqual('0000');
        expect(xor2.state('0011000101')).toEqual('0000');
        expect(xor2.state('0000000001')).toEqual('0001');
        expect(xor2.state('0100001010')).toEqual('0010');
        expect(xor2.state('0111001111')).toEqual('0010');
        expect(xor2.state('1111011111')).toEqual('0010');
        expect(xor2.state('0000100000')).toEqual('1000');
        expect(xor2.state('1111111111')).toEqual('1010');
        expect(xor2.state('0000111100')).toEqual('1111');
    });

    test('Check XOR with group2', () => {
        let xor3 = stde.xor(4, 2);

        expect(xor3.name).toEqual('XOR');
        expect(xor3.in_connections).toEqual([
            'A_1',
            'A_2',
            'B_1',
            'B_2',
            'C_1',
            'C_2',
            'D_1',
            'D_2',
        ]);
        expect(xor3.out_connections.length).toEqual(2);
        xor3.out_connections.forEach((i, ind) => {
            expect(i.out.name).toEqual(String(ind + 1));
        });


        expect(xor3.state('00000000')).toEqual('00');
        expect(xor3.state('01010101')).toEqual('00');
        expect(xor3.state('11111111')).toEqual('00');
        expect(xor3.state('10101010')).toEqual('00');
        expect(xor3.state('10011001')).toEqual('00');
        expect(xor3.state('00100011')).toEqual('01');
        expect(xor3.state('10111010')).toEqual('01');
        expect(xor3.state('00001000')).toEqual('10');
        expect(xor3.state('00110000')).toEqual('11');
    });
});
