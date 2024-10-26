import * as stde from '../../src/stde';
describe('Check XNOR', () => {
    test('Check XNOR without group', () => {
        let xnor1 = stde.xnor(2);

        expect(xnor1.name).toEqual('XNOR');
        expect(xnor1.in_connections).toEqual(['A', 'B']);
        expect(xnor1.out_connections[0].out.name).toEqual('1');

        expect(xnor1.state('00')).toEqual('1');
        expect(xnor1.state('01')).toEqual('0');
        expect(xnor1.state('10')).toEqual('0');
        expect(xnor1.state('11')).toEqual('1');
    });

    test('Check XNOR with group', () => {
        let xnor2 = stde.xnor([3, 1, 4, 2]);

        expect(xnor2.name).toEqual('XNOR');
        expect(xnor2.in_connections).toEqual([
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
        expect(xnor2.out_connections.length).toEqual(4);
        xnor2.out_connections.forEach((i, ind) => {
            expect(i.out.name).toEqual(String(ind + 1));
        });

        expect(xnor2.state('1000010000')).toEqual('1111');
        expect(xnor2.state('0011000101')).toEqual('1111');
        expect(xnor2.state('0000000001')).toEqual('1110');
        expect(xnor2.state('0100001010')).toEqual('1101');
        expect(xnor2.state('0111001111')).toEqual('1101');
        expect(xnor2.state('1111011111')).toEqual('1101');
        expect(xnor2.state('0000100000')).toEqual('0111');
        expect(xnor2.state('1111111111')).toEqual('0101');
        expect(xnor2.state('0000111100')).toEqual('0000');
    });

    test('Check XNOR with group2', () => {
        let xnor3 = stde.xnor(4, 2);

        expect(xnor3.name).toEqual('XNOR');
        expect(xnor3.in_connections).toEqual([
            'A_1',
            'A_2',
            'B_1',
            'B_2',
            'C_1',
            'C_2',
            'D_1',
            'D_2'
        ]);
        expect(xnor3.out_connections.length).toEqual(2);
        xnor3.out_connections.forEach((i, ind) => {
            expect(i.out.name).toEqual(String(ind + 1));
        });

        expect(xnor3.state('00000000')).toEqual('11');
        expect(xnor3.state('01010101')).toEqual('11');
        expect(xnor3.state('11111111')).toEqual('11');
        expect(xnor3.state('10101010')).toEqual('11');
        expect(xnor3.state('10011001')).toEqual('11');
        expect(xnor3.state('00100011')).toEqual('10');
        expect(xnor3.state('10111010')).toEqual('10');
        expect(xnor3.state('00001000')).toEqual('01');
        expect(xnor3.state('00110000')).toEqual('00');
    });
});
