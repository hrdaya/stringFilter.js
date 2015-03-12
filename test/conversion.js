
describe('nl2br:', function () {
    it('改行を<br>に変換', function () {
        var str = '<p>あいうえお\nかきくけこ\nさしすせそ</p>';
        var retStr = '<p>あいうえお<br>かきくけこ<br>さしすせそ</p>';
        expect(str._f('nl2br')).toEqual(retStr);
        var str1 = '\n<p>あいうえお\nかきくけこ\nさしすせそ</p>\n<p>たちつてと\nなにぬねの</p>';
        var retStr1 = '<br><p>あいうえお<br>かきくけこ<br>さしすせそ</p>' +
                '<br><p>たちつてと<br>なにぬねの</p>';
        expect(str1._f('nl2br')).toEqual(retStr1);
    });
});
describe('br2nl:', function () {
    it('brを改行に変換', function () {
        var str = '<p>あいうえお<br>かきくけこ<BR>さしすせそ</p>';
        var retStr = '<p>あいうえお\nかきくけこ\nさしすせそ</p>';
        expect(str._f('br2nl')).toEqual(retStr);
        var str1 = '<Br><p>あいうえお<bR>かきくけこ<br />さしすせそ</p>' +
                '<BR /><p>たちつてと<Br />なにぬねの</p><bR />';
        var retStr1 = '\n<p>あいうえお\nかきくけこ\nさしすせそ</p>' +
                '\n<p>たちつてと\nなにぬねの</p>\n'
        expect(str1._f('br2nl')).toEqual(retStr1);
    });
});
describe('tab2space:', function () {
    it('brを改行に変換', function () {
        var str = '\t';
        expect(str._f('tab2space')).toEqual('    ');
        expect(str._f('tab2space', 2)).toEqual('  ');
        var str1 = 'abcd\tefg';
        expect(str1._f('tab2space')).toEqual('abcd    efg');
    });
});
describe('snake2camel:', function () {
    it('スネークケースをキャメルケースに変換', function () {
        var str = 'abcd-efg-hijk';
        expect(str._f('snake2camel')).toEqual('abcdEfgHijk');
        var str1 = 'abcd efg hijk';
        expect(str1._f('snake2camel')).toEqual('abcdEfgHijk');
        var str2 = 'abcd_efg_hijk';
        expect(str2._f('snake2camel')).toEqual('abcdEfgHijk');
        var str3 = '-abcd-efg-hijk';
        expect(str3._f('snake2camel', true)).toEqual('AbcdEfgHijk');
        var str4 = ' abcd efg hijk';
        expect(str4._f('snake2camel', true)).toEqual('AbcdEfgHijk');
        var str5 = '_abcd_efg_hijk';
        expect(str5._f('snake2camel', true)).toEqual('AbcdEfgHijk');
        var str6 = 'abc-dEF';
        expect(str6._f('snake2camel')).toEqual('abcDEF');
    });
});
describe('camel2snake:', function () {
    it('キャメルケースをスネークケースに変換', function () {
        var str = 'ABCDEF';
        expect(str._f('camel2snake')).toEqual('abcdef');
        var str1 = 'abcDef';
        expect(str1._f('camel2snake')).toEqual('abc-def');
        var str2 = 'AbcDef';
        expect(str2._f('camel2snake')).toEqual('abc-def');
        var str3 = 'DEFClass';
        expect(str3._f('camel2snake', '_')).toEqual('def_class');
        var str4 = 'classID';
        expect(str4._f('camel2snake', '_')).toEqual('class_id');
        var str5 = 'classIDabc';
        expect(str5._f('camel2snake', '_')).toEqual('class_i_dabc');
        var str6 = 'abcDEFClass';
        expect(str6._f('camel2snake', '_')).toEqual('abc_d_e_f_class');
    });
});
describe('hira2kana:', function () {
    it('全角ひらがなを半角カタカナに変換', function () {
        var hira = 'ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞ' +
                'ただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽ' +
                'まみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖう゛わ゛ゐ゛ゑ゛を゛ゝ゛ゝゞ';
        var kana = 'ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾ' +
                'タダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポ' +
                'マミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヴヷヸヹヺヾヽヾ';
        var kana2 = 'ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾ' +
                'タダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポ' +
                'マミムメモャヤュユョヨラリルレロヮワヰヱヲンヴゕゖヴヷヸヹヺヾヽヾ';

        expect(hira._f('hira2kana')).toEqual(kana);
        expect(hira._f('hira2kana', false)).toEqual(kana2);
    });
});
describe('kana2hira:', function () {
    it('半角カタカナを全角ひらがなに変換', function () {
        var kana = 'ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾ' +
                'タダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポ' +
                'マミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶウ゛ヷヸヹヺヽ゛ヽヾ';
        var hira = 'ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞ' +
                'ただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽ' +
                'まみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖゔわ゛ゐ゛ゑ゛を゛ゞゝゞ';
        var hira2 = 'ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞ' +
                'ただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽ' +
                'まみむめもゃやゅゆょよらりるれろゎわゐゑをんゔヵヶゔわ゛ゐ゛ゑ゛を゛ゞゝゞ';

        expect(kana._f('kana2hira')).toEqual(hira);
        expect(kana._f('kana2hira', false)).toEqual(hira2);
    });
});
describe('hankana2zenkana:', function () {
    it('半角カタカナを全角ひらがなに変換', function () {
        var zen = 'ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾ' +
                'タダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポ' +
                'マミムメモャヤュユョヨラリルレロワヲンヴ。、ー「」・ヷヺ';
        var han = 'ｧｱｨｲｩｳｪｴｫｵｶｶﾞｷｷﾞｸｸﾞｹｹﾞｺｺﾞｻｻﾞｼｼﾞｽｽﾞｾｾﾞｿｿﾞ' +
                'ﾀﾀﾞﾁﾁﾞｯﾂﾂﾞﾃﾃﾞﾄﾄﾞﾅﾆﾇﾈﾉﾊﾊﾞﾊﾟﾋﾋﾞﾋﾟﾌﾌﾞﾌﾟﾍﾍﾞﾍﾟﾎﾎﾞﾎﾟ' +
                'ﾏﾐﾑﾒﾓｬﾔｭﾕｮﾖﾗﾘﾙﾚﾛﾜｦﾝｳﾞ｡､ｰ｢｣･ﾜﾞｦﾞ';

        expect(han._f('hankana2zenkana')).toEqual(zen);
    });
});
describe('zen2han:', function () {
    it('全角を半角に変換', function () {
        var zen = 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ' +
                'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ' +
                '０１２３４５６７８９' +
                '！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝' +
                '‐－―' +
                '＼ｎ' +
                '～〜' +
                '　' +
                '。、「」・';
        var zenAlpha = 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ' +
                'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ';
        var zenNum = '０１２３４５６７８９';
        var zenMark = '！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝' +
                '‐－―';
        var zenTilde = '～〜';
        var zenSpace = '　';
        var zenKana = '。、「」・';
        var hanAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                'abcdefghijklmnopqrstuvwxyz';
        var hanNum = '0123456789';
        var hanMark = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}' +
                '---';
        var hanTilde = '~~';
        var hanSpace = ' ';
        var hanKana = '｡､｢｣･';

        expect(zen._f('zen2han', true, true, true)).toEqual(
                hanAlpha + hanNum + hanMark + '\\n' + hanTilde + hanSpace + hanKana
                );

        expect(zen._f('zen2han')).toEqual(
                hanAlpha + hanNum + hanMark + '\\n' + hanTilde + hanSpace + zenKana
                );
        expect(zen._f('zen2han', false)).toEqual(
                hanAlpha + hanNum + hanMark + '\\n' + zenTilde + hanSpace + zenKana
                );
        expect(zen._f('zen2han', false, false)).toEqual(
                hanAlpha + hanNum + zenMark + '＼n' + zenTilde + hanSpace + zenKana
                );
        expect(zen._f('zen2han', false, false, false)).toEqual(
                hanAlpha + hanNum + zenMark + '＼n' + zenTilde + hanSpace + zenKana
                );
        expect(zen._f('zen2han', false, false, false, false)).toEqual(
                hanAlpha + hanNum + zenMark + '＼n' + zenTilde + zenSpace + zenKana
                );
        expect(zen._f('zen2han', false, false, false, false, false)).toEqual(
                zenAlpha + hanNum + zenMark + '＼ｎ' + zenTilde + zenSpace + zenKana
                );
        expect(zen._f('zen2han', false, false, false, false, false, false)).toEqual(
                zenAlpha + zenNum + zenMark + '＼ｎ' + zenTilde + zenSpace + zenKana
                );
    });
});
describe('han2zen:', function () {
    it('半角を全角に変換', function () {
        var han = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                'abcdefghijklmnopqrstuvwxyz' +
                '0123456789' +
                '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}' +
                '-' +
                '\n' +
                '~' +
                ' ' +
                '｡､｢｣･';
        var zenAlpha = 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ' +
                'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ';
        var zenNum = '０１２３４５６７８９';
        var zenMark = '！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝' +
                '－';
        var zenTilde = '～';
        var zenSpace = '　';
        var zenKana = '。、「」・';
        var hanAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                'abcdefghijklmnopqrstuvwxyz';
        var hanNum = '0123456789';
        var hanMark = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}' +
                '-';
        var hanTilde = '~';
        var hanSpace = ' ';
        var hanKana = '｡､｢｣･';

        expect(han._f('han2zen')).toEqual(
                zenAlpha + zenNum + zenMark + '\n' + zenTilde + zenSpace + zenKana
                );
        expect(han._f('han2zen', false)).toEqual(
                zenAlpha + zenNum + zenMark + '\n' + hanTilde + zenSpace + zenKana
                );
        expect(han._f('han2zen', false, false)).toEqual(
                zenAlpha + zenNum + hanMark + '\n' + hanTilde + zenSpace + zenKana
                );
        expect(han._f('han2zen', false, false, false)).toEqual(
                zenAlpha + zenNum + hanMark + '\n' + hanTilde + zenSpace + hanKana
                );
        expect(han._f('han2zen', false, false, false, false)).toEqual(
                zenAlpha + zenNum + hanMark + '\n' + hanTilde + hanSpace + hanKana
                );
        expect(han._f('han2zen', false, false, false, false, false)).toEqual(
                hanAlpha + zenNum + hanMark + '\n' + hanTilde + hanSpace + hanKana
                );
        expect(han._f('han2zen', false, false, false, false, false, false)).toEqual(
                hanAlpha + hanNum + hanMark + '\n' + hanTilde + hanSpace + hanKana
                );
    });
});
describe('one2multi:', function () {
    it('データベース上展開しておいてほしいものを変換', function () {
        var one = '㈱㈲㈳㈵㈶㈻㈼㍿';
        var multi = '(株)(有)(社)(特)(財)(学)(監)株式会社';

        expect(one._f('one2multi')).toEqual(multi);
    });
});