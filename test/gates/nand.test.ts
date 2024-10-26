import * as stde from '../../src/stde';
describe('Check NAND', () => {
    test('Check NAND without group', () => {
        let nand1 = stde.nand(2);

        expect(nand1.name).toEqual('NAND');
        expect(nand1.in_connections).toEqual(['A', 'B']);
        expect(nand1.out_connections[0].out.name).toEqual('1');

        expect(nand1.state('00')).toEqual('1');
        expect(nand1.state('01')).toEqual('1');
        expect(nand1.state('10')).toEqual('1');
        expect(nand1.state('11')).toEqual('0');
    });

    test('Check NAND with group', () => {
        let nand2 = stde.nand([3, 1, 4, 2]);

        expect(nand2.name).toEqual('NAND');
        expect(nand2.in_connections).toEqual([
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
        expect(nand2.out_connections.length).toEqual(4);
        nand2.out_connections.forEach((i, ind) => {
            expect(i.out.name).toEqual(String(ind + 1));
        });

        expect(nand2.state('0000000001')).toEqual('1111');
        expect(nand2.state('0011000101')).toEqual('1110');
        expect(nand2.state('0100001010')).toEqual('1101');
        expect(nand2.state('0111001111')).toEqual('1100');
        expect(nand2.state('1000010000')).toEqual('1011');
        expect(nand2.state('1111011111')).toEqual('1000');
        expect(nand2.state('0000100000')).toEqual('0111');
        expect(nand2.state('1111111111')).toEqual('0000');
    });

    test('Check NAND with group2', () => {
        let nand3 = stde.nand(4, 2);

        expect(nand3.name).toEqual('NAND');
        expect(nand3.in_connections).toEqual([
            'A_1',
            'A_2',
            'B_1',
            'B_2',
            'C_1',
            'C_2',
            'D_1',
            'D_2',
        ]);
        expect(nand3.out_connections.length).toEqual(2);
        nand3.out_connections.forEach((i, ind) => {
            expect(i.out.name).toEqual(String(ind + 1));
        });

        expect(nand3.state('00000000')).toEqual('11');
        expect(nand3.state('10011001')).toEqual('11');
        expect(nand3.state('01010110')).toEqual('11');
        expect(nand3.state('00100011')).toEqual('11');
        expect(nand3.state('10001100')).toEqual('11');
        expect(nand3.state('00001000')).toEqual('11');
        expect(nand3.state('00001000')).toEqual('11');
        expect(nand3.state('11110111')).toEqual('10');
        expect(nand3.state('01011101')).toEqual('10');
        expect(nand3.state('10111010')).toEqual('01');
        expect(nand3.state('11111111')).toEqual('00');
    });
});
