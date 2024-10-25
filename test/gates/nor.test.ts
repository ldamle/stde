import * as stde from '../../src/stde';
describe('Check NOR', () => {
    test('Check NOR without group', () => {
        let nor1 = stde.nor(2);

        expect(nor1.name).toEqual('NOR');
        expect(nor1.in_connections).toEqual(['A', 'B']);
        expect(nor1.out_connections[0].out.name).toEqual('1');

        expect(nor1.state('00')).toEqual('1');
        expect(nor1.state('01')).toEqual('0');
        expect(nor1.state('10')).toEqual('0');
        expect(nor1.state('11')).toEqual('0');
    });

    test('Check NOR with group', () => {
        let nor2 = stde.nor(4, [3, 1, 4, 2]);

        expect(nor2.name).toEqual('NOR');
        expect(nor2.in_connections).toEqual([
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
        expect(nor2.out_connections.length).toEqual(4);
        nor2.out_connections.forEach((i, ind) => {
            expect(i.out.name).toEqual(String(ind + 1));
        });

        expect(nor2.state('0000000001')).toEqual('1110');
        expect(nor2.state('0000000010')).toEqual('1101');
        expect(nor2.state('0000000011')).toEqual('1100');
        expect(nor2.state('1000000000')).toEqual('1011');
        expect(nor2.state('0000100000')).toEqual('0111');
        expect(nor2.state('0000000011')).toEqual('1100');
        expect(nor2.state('0000111100')).toEqual('0000');
        expect(nor2.state('0000100000')).toEqual('0111');
        expect(nor2.state('1111111111')).toEqual('0000');
    });

    test('Check NOR with group2', () => {
        let nor3 = stde.nor(4, 2);

        expect(nor3.name).toEqual('NOR');
        expect(nor3.in_connections).toEqual([
            'A_1',
            'A_2',
            'B_1',
            'B_2',
            'C_1',
            'C_2',
            'D_1',
            'D_2',
        ]);
        expect(nor3.out_connections.length).toEqual(2);
        nor3.out_connections.forEach((i, ind) => {
            expect(i.out.name).toEqual(String(ind + 1));
        });


        expect(nor3.state('00000000')).toEqual('11');
        expect(nor3.state('01010101')).toEqual('10');
        expect(nor3.state('00001000')).toEqual('01');
        expect(nor3.state('10101010')).toEqual('01');
        expect(nor3.state('10011001')).toEqual('00');
        expect(nor3.state('00100011')).toEqual('00');
        expect(nor3.state('10111010')).toEqual('00');
        expect(nor3.state('11111111')).toEqual('00');
    });
});
