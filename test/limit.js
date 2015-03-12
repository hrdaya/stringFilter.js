
describe('removeCtl:', function () {
    it('制御文字の削除', function () {
        var str = '\b\t\v\r\n\f\n\0abc\b\t\v\r\n\f\n\0';
        var retStr = '    \n\nabc    \n\n';
        expect(str._f('removeCtl')).toEqual(retStr);
        var retStr1 = '  \n\nabc  \n\n';
        expect(str._f('removeCtl', 2)).toEqual(retStr1);
    });
});
describe('removeNl:', function () {
    it('全角を含めたtrim', function () {
        var str = 'abc\ndef\n\nghi\n';
        var retStr = 'abcdefghi';
        expect(str._f('removeNl')).toEqual(retStr);
    });
});
describe('trim:', function () {
    it('全角を含めたtrim', function () {
        var str = '　 \t\f\v\r\n　 abc　 \t\f\r\n\n' +
                '　 \t\f\n　 def　 \t\f\r\n\n' +
                '　 \t\f\n 　ghi　 \t\f\n\n';
        var retStr = 'abc　 \t\f\r\n\n' +
                '　 \t\f\n　 def　 \t\f\r\n\n' +
                '　 \t\f\n 　ghi';
        expect(str._f('trim')).toEqual(retStr);
        var retStr1 = 'abc\n\n' +
                '\ndef\n\n' +
                '\nghi';
        expect(str._f('trim', true)).toEqual(retStr1);
        var retStr2 = 'abc\n' +
                'def\n' +
                'ghi';
        expect(str._f('trim', true, false)).toEqual(retStr2);
    });
});
describe('rtrim:', function () {
    it('全角を含めた右trim', function () {
        var str = '　 \t\f\v\r\n\n　 abc　 \t\f\r\n\n' +
                '　 \t\f\n　 def　 \t\f\r\n\n' +
                '　 \t\f\n 　ghi　 \t\f\n\n';
        var retStr = '　 \t\f\v\r\n\n　 abc　 \t\f\r\n\n' +
                '　 \t\f\n　 def　 \t\f\r\n\n' +
                '　 \t\f\n 　ghi';
        expect(str._f('rtrim')).toEqual(retStr);
        var retStr1 = '\n\n　 abc\n\n' +
                '\n　 def\n\n' +
                '\n 　ghi';
        expect(str._f('rtrim', true)).toEqual(retStr1);
        var retStr2 = '　 abc\n' +
                '　 def\n' +
                ' 　ghi';
        expect(str._f('rtrim', true, false)).toEqual(retStr2);
    });
});
describe('ltrim:', function () {
    it('全角を含めた左trim', function () {
        var str = '　 \t\f\v\r\n　 abc　 \t\f\r\n\n' +
                '　 \t\f\n　 def　 \t\f\r\n\n' +
                '　 \t\f\n 　ghi　 \t\f\n\n';
        var retStr = 'abc　 \t\f\r\n\n' +
                '　 \t\f\n　 def　 \t\f\r\n\n' +
                '　 \t\f\n 　ghi　 \t\f\n\n';
        expect(str._f('ltrim')).toEqual(retStr);
        var retStr1 = 'abc　 \t\f\r\n\n' +
                '\ndef　 \t\f\r\n\n' +
                '\nghi　 \t\f\n\n';
        expect(str._f('ltrim', true)).toEqual(retStr1);
        var retStr2 = 'abc　 \t\f\r\n' +
                'def　 \t\f\r\n' +
                'ghi　 \t\f';
        expect(str._f('ltrim', true, false)).toEqual(retStr2);
    });
});
describe('alpha:', function () {
    it('英字のみ', function () {
        var str = 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ' +
                'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ' +
                '０１２３４５６７８９' +
                'あいうえお' +
                '＼ ～ ∥ ｜ … ‥ ‘ ’ “ ” （ ） 〔 〕 ［ ］ ｛ ｝ 〈 〉 《 》';
        var retStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                'abcdefghijklmnopqrstuvwxyz';
        expect(str._f('alpha')).toEqual(retStr);
    });
});
describe('num:', function () {
    it('数字のみ', function () {
        var str = 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ' +
                'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ' +
                '０１２３４５６７８９' +
                'あいうえお' +
                '＼ ～ ∥ ｜ … ‥ ‘ ’ “ ” （ ） 〔 〕 ［ ］ ｛ ｝ 〈 〉 《 》';
        var retStr = '0123456789';
        expect(str._f('num')).toEqual(retStr);
    });
});
describe('alphaNum:', function () {
    it('英数字のみ', function () {
        var str = 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ' +
                'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ' +
                '０１２３４５６７８９' +
                'あいうえお' +
                '＼ ～ ∥ ｜ … ‥ ‘ ’ “ ” （ ） 〔 〕 ［ ］ ｛ ｝ 〈 〉 《 》';
        var retStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                'abcdefghijklmnopqrstuvwxyz' +
                '0123456789';
        expect(str._f('alphaNum')).toEqual(retStr);
    });
});
describe('numPyphen:', function () {
    it('数字とハイフンのみ', function () {
        var str = 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ' +
                'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ' +
                '０１２３４５６７８９' +
                'あいうえお' +
                '‐－―ー＋：／' +
                '＼ ～ ∥ ｜ … ‥ ‘ ’ “ ” （ ） 〔 〕 ［ ］ ｛ ｝ 〈 〉 《 》';
        var retStr = '0123456789----';
        expect(str._f('numPyphen')).toEqual(retStr);
    });
});
describe('numSlash:', function () {
    it('数字とスラッシュのみ', function () {
        var str = 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ' +
                'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ' +
                '０１２３４５６７８９' +
                'あいうえお' +
                '‐－―ー＋：／' +
                '＼ ～ ∥ ｜ … ‥ ‘ ’ “ ” （ ） 〔 〕 ［ ］ ｛ ｝ 〈 〉 《 》';
        var retStr = '0123456789/';
        expect(str._f('numSlash')).toEqual(retStr);
    });
});
describe('numColon:', function () {
    it('数字とコロンのみ', function () {
        var str = 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ' +
                'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ' +
                '０１２３４５６７８９' +
                'あいうえお' +
                '‐－―ー＋：／' +
                '＼ ～ ∥ ｜ … ‥ ‘ ’ “ ” （ ） 〔 〕 ［ ］ ｛ ｝ 〈 〉 《 》';
        var retStr = '0123456789:';
        expect(str._f('numColon')).toEqual(retStr);
    });
});
describe('hiragana:', function () {
    it('ひらがなのみ', function () {
        var str = 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ' +
                'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ' +
                '０１２３４５６７８９' +
                'ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞ' +
                'ただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽ' +
                'まみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖゔわ゛ゐ゛ゑ゛を゛ゞゝゞ' +
                'ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾ' +
                'タダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポ' +
                'マミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヴヷヸヹヺヾヽヾ' +
                '‐－―ー＋：／　' +
                '＼～∥｜…‥‘’“”（）〔〕［］｛｝〈〉《》';
        var retStr = '0123456789' +
                'ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞ' +
                'ただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽ' +
                'まみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖゔわ゛ゐ゛ゑ゛を゛ゞゝゞ' +
                '---ー ';
        expect(str._f('hiragana')).toEqual(retStr);
    });
});
describe('katakana:', function () {
    it('ひらがなのみ', function () {
        var str = 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ' +
                'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ' +
                '０１２３４５６７８９' +
                'ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞ' +
                'ただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽ' +
                'まみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖゔわ゛ゐ゛ゑ゛を゛ゞゝゞ' +
                'ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾ' +
                'タダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポ' +
                'マミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヴヷヸヹヺヾヽヾ' +
                '‐－―ー＋：／　' +
                '＼～∥｜…‥‘’“”（）〔〕［］｛｝〈〉《》';
        var retStr = '0123456789' +
                '゛゛゛゛' +
                'ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾ' +
                'タダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポ' +
                'マミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヴヷヸヹヺヾヽヾ' +
                '---ー ';
        expect(str._f('katakana')).toEqual(retStr);
    });
});