
describe('escapeHTML:', function () {
    it('HTMLエスケープ', function () {
        var str = '<p>あいうえお&かきくけこ\'"さしすせそ</p>';
        var retStr = '&lt;p&gt;あいうえお&amp;かきくけこ&#39;&quot;さしすせそ&lt;/p&gt;';
        expect(str._f('escapeHTML')).toEqual(retStr);
    });
});
describe('unEscapeHTML:', function () {
    it('HTMLのアンエスケープ', function () {
        var str = '&lt;p&gt;あいうえお&amp;かきくけこ&#39;&quot;さしすせそ&lt;/p&gt;';
        var retStr = '<p>あいうえお&かきくけこ\'"さしすせそ</p>';
        expect(str._f('unEscapeHTML')).toEqual(retStr);
    });
});
describe('escapeJs:', function () {
    it('jsのエスケープ', function () {
        var str = 'javascript:/*</style></script>/**/ /<script>1/(alert(1337))//</script>';
        var retStr = 'javascript:\\/*\\x3c\\/style\\x3e\\x3c\\/script\\x3e\\/**\\/ \\/\\x3cscript\\x3e1\\/(alert(1337))\\/\\/\\x3c\\/script\\x3e';
        expect(str._f('escapeJs')).toEqual(retStr);
        var str1 = '</script><script>alert(\'XSS Attack!\');</script>';
        var retStr1 = '\\x3c\\/script\\x3e\\x3cscript\\x3ealert(\\\'XSS Attack!\\\');\\x3c\\/script\\x3e';
        expect(str1._f('escapeJs')).toEqual(retStr1);
    });
});
describe('unEscapeJs:', function () {
    it('jsのアンエスケープ', function () {
        var str = 'javascript:\\/*\\x3c\\/style\\x3e\\x3c\\/script\\x3e\\/**\\/ \\/\\x3cscript\\x3e1\\/(alert(1337))\\/\\/\\x3c\\/script\\x3e';
        var retStr = 'javascript:/*</style></script>/**/ /<script>1/(alert(1337))//</script>';
        expect(str._f('unEscapeJs')).toEqual(retStr);
        var str1 = '\\x3c\\/script\\x3e\\x3cscript\\x3ealert(\\\'XSS Attack!\\\');\\x3c\\/script\\x3e';
        var retStr1 = '</script><script>alert(\'XSS Attack!\');</script>';
        expect(str1._f('unEscapeJs')).toEqual(retStr1);
    });
});
describe('escapeJsHTML:', function () {
    it('jsとHTMLのエスケープ', function () {
        var str = 'javascript:/*</style></script>/**/ /<script>1/(alert(1337))//</script>';
        var retStr = 'javascript:\\/*\\x3c\\/style\\x3e\\x3c\\/script\\x3e\\/**\\/ \\/\\x3cscript\\x3e1\\/(alert(1337))\\/\\/\\x3c\\/script\\x3e';
        expect(str._f('escapeJsHTML')).toEqual(retStr);
        var str1 = "alert('output is'); alert('XSS Attack!'); // .') ";
        var retStr1 = "alert(\\'output is\\'); alert(\\'XSS Attack!\\'); \\/\\/ .\\') ";
        expect(str1._f('escapeJs')).toEqual(retStr1);
    });
});
describe('noScript:', function () {
    it('外部リンク禁止・括弧類のエスケープ', function () {
        var str = 'http://qiita.com/javascript:alert(1234)[]{}';
        var retStr = 'http:／／qiita.com/javascript:alert（1234）［］｛｝';
        expect(str._f('noScript')).toEqual(retStr);
    });
});