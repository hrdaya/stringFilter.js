'use strict';
describe('toInt:', function () {
    it('整数への変換', function () {
        var str = 'abcd　－ー１２３かー４５６';
        expect(str._f('toInt')).toEqual(-123456);
        var str2 = 'A0000123456';
        expect(str2._f('toInt')).toEqual(123456);
        var str3 = 'A0000123.456';
        expect(str3._f('toInt')).toEqual(123);
        var str4 = 'A0-000123.456';
        expect(str4._f('toInt')).toEqual(123);
        var str5 = 'A123-00123.456';
        expect(str5._f('toInt')).toEqual(12300123);
        var str6 = 'A-00000123456';
        expect(str6._f('toInt')).toEqual(-123456);
        var str7 = 'abc123456def';
        expect(str7._f('toInt')).toEqual(123456);
    });
});
describe('toFloat:', function () {
    it('浮動小数点への変換', function () {
        var str = 'abcd　－ー１２３かー４．５６';
        expect(str._f('toFloat')).toEqual(-1234.56);
        var str2 = 'A0000123456';
        expect(str2._f('toFloat')).toEqual(123456);
        var str3 = 'A0000123.456';
        expect(str3._f('toFloat')).toEqual(123.456);
        var str4 = 'A0-000123.456';
        expect(str4._f('toFloat')).toEqual(123.456);
        var str5 = 'A123-00123.456';
        expect(str5._f('toFloat')).toEqual(12300123.456);
        var str6 = 'A-00000123456';
        expect(str6._f('toFloat')).toEqual(-123456);
        var str7 = 'abc123456def';
        expect(str7._f('toFloat')).toEqual(123456);
        var str8 = '12.34.56';
        expect(str8._f('toFloat')).toEqual(12.34);
    });
});
describe('numString:', function () {
    it('数字に変換', function () {
        var str = 'abcd　－ー１２３かー４．５６';
        expect(str._f('numString')).toEqual('-1234');
        var str2 = 'A0000123456';
        expect(str2._f('numString')).toEqual('123456');
        var str3 = 'A0000123.456';
        expect(str3._f('numString')).toEqual('123');
        var str4 = 'A0-000123.456';
        expect(str4._f('numString')).toEqual('123');
        var str5 = 'A123-00123.456';
        expect(str5._f('numString')).toEqual('12300123');
        var str6 = 'A-00000123456';
        expect(str6._f('numString')).toEqual('-123456');
        var str7 = 'abc123456def';
        expect(str7._f('numString')).toEqual('123456');
        var str8 = '12.34.56';
        expect(str8._f('numString')).toEqual('12');
        var str9 = '12.34.56';
        expect(str9._f('numString', 2)).toEqual('12.34');
        var str10 = '12.34.56';
        expect(str10._f('numString', 4)).toEqual('12.3400');
        var str11 = 'A0-12345678.456';
        expect(str11._f('numString', 2, true)).toEqual('12,345,678.45');
        var str12 = '-12345678.456';
        expect(str12._f('numString', 2, true, false)).toEqual('12,345,678.45');
    });
});
describe('numFormat:', function () {
    it('数字のフォーマット', function () {
        var str = '12345678';
        expect(str._f('numFormat')).toEqual('12,345,678');
        var str2 = '-12345678';
        expect(str2._f('numFormat')).toEqual('-12,345,678');
        var str3 = '12345678.123456';
        expect(str3._f('numFormat')).toEqual('12,345,678.123456');
        var str4 = '-12345678.123456';
        expect(str4._f('numFormat')).toEqual('-12,345,678.123456');
        var str5 = '12,345,678';
        expect(str5._f('numFormat')).toEqual('12,345,678');
        var str6 = '-12,345,678';
        expect(str6._f('numFormat')).toEqual('-12,345,678');
        var str7 = '12,345,678.123456';
        expect(str7._f('numFormat')).toEqual('12,345,678.123456');
        var str8 = '-12,345,678.123456';
        expect(str8._f('numFormat')).toEqual('-12,345,678.123456');
        var str8 = '-12,345,6789';
        expect(str8._f('numFormat')).toEqual('-12,345,6,789');
        var str9 = '123456789円';
        expect(str9._f('numFormat')).toEqual('123,456,789円');
        var str9 = '-12345円';
        expect(str9._f('numFormat')).toEqual('-12,345円');
    });
});
describe('removeFigure:', function () {
    it('桁区切り文字の削除', function () {
        var str = '12,345,678';
        expect(str._f('removeFigure')).toEqual('12345678');
    });
});
describe('padSlice:', function () {
    it('0埋め切り出し', function () {
        var str = '123';
        expect(str._f('padSlice', 5)).toEqual('00123');
        var str1 = '123';
        expect(str1._f('padSlice', 2)).toEqual('23');
        var str2 = '123';
        expect(str2._f('padSlice', 5, 'a')).toEqual('aa123');
        var str3 = '123';
        expect(str3._f('padSlice', 10, 'ab')).toEqual('bababab123');
        var str4 = '123';
        expect(str4._f('padSlice', -10)).toEqual('23');
        var str5 = '123';
        expect(str5._f('padSlice', 0)).toEqual('123');
    });
});
describe('padFill:', function () {
    it('0埋めループ', function () {
        var str = '123';
        expect(str._f('padFill', 5)).toEqual('00123');
        var str1 = '123';
        expect(str1._f('padFill', 2)).toEqual('123');
        var str2 = '123';
        expect(str2._f('padFill', 5, 'a')).toEqual('aa123');
        var str3 = '123';
        expect(str3._f('padFill', 10, 'ab')).toEqual('abababab123');
        var str4 = '123';
        expect(str4._f('padFill', -10)).toEqual('123');
        var str5 = '123';
        expect(str5._f('padFill', 0)).toEqual('123');
        var str6 = '123';
        expect(str6._f('padFill', 3)).toEqual('123');
    });
});