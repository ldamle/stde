import * as stde from '../../src/stde';
describe('Check NOT', () => {
    test('Check NOT', () => {
        let not = stde.not(20);

        expect(not.name).toEqual('NOT');
        expect(not.in_connections).toEqual(Array.from({length: 20}, (_, k) => String(k + 1)));
        not.out_connections.forEach((i, ind) =>
            expect(not.out_connections[ind].out.name).toEqual(String(ind + 1))
        );

        expect(not.state('00000000000000000000')).toEqual('11111111111111111111');
        expect(not.state('00000000000000000001')).toEqual('11111111111111111110');
        expect(not.state('00000000000000000010')).toEqual('11111111111111111101');
        expect(not.state('00000000000000000011')).toEqual('11111111111111111100');
        expect(not.state('00000000000000000100')).toEqual('11111111111111111011');
        expect(not.state('00000000000000000101')).toEqual('11111111111111111010');
        expect(not.state('00000000000000000110')).toEqual('11111111111111111001');
        expect(not.state('00000000000000000111')).toEqual('11111111111111111000');
        expect(not.state('00000000000000001000')).toEqual('11111111111111110111');
        expect(not.state('00000000000000001001')).toEqual('11111111111111110110');
        expect(not.state('00000000000000001010')).toEqual('11111111111111110101');
        expect(not.state('00000000000000001011')).toEqual('11111111111111110100');
    });
});
