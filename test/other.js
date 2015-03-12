
describe('複数メソッド:', function () {
    it('制御文字削除後、改行を<br>に変換', function () {
        var str = '<p>\b\tあいうえお\r\nかきくけこ\r\nさしすせそ</p>';
        var retStr = '<p>    あいうえお<br>かきくけこ<br>さしすせそ</p>';
        expect(str._f(['removeCtl', 'nl2br'])).toEqual(retStr);
        var str1 = '\r\n<p>\tあいうえお\r\nかきくけこ\r\nさしすせそ</p>\r\n<p>\tたちつてと\r\nなにぬねの</p>';
        var retStr1 = '<br><p>  あいうえお<br>かきくけこ<br>さしすせそ</p>' +
                '<br><p>  たちつてと<br>なにぬねの</p>';
        expect(str1._f([['removeCtl', 2], 'nl2br'])).toEqual(retStr1);
    });
    it('全角・半角カタカナをひらがなに変換', function () {
        var str = '<p>\b\tあいうえお\r\nかきくけこ\r\nさしすせそ</p>';
        var retStr = '<p>    あいうえお<br>かきくけこ<br>さしすせそ</p>';
        expect(str._f(['removeCtl', 'nl2br'])).toEqual(retStr);
        var str1 = '\r\n<p>\tあいうえお\r\nかきくけこ\r\nさしすせそ</p>\r\n<p>\tたちつてと\r\nなにぬねの</p>';
        var retStr1 = '<br><p>  あいうえお<br>かきくけこ<br>さしすせそ</p>' +
                '<br><p>  たちつてと<br>なにぬねの</p>';
        expect(str1._f([['removeCtl', 2], 'nl2br'])).toEqual(retStr1);
    });
});
describe('addFilter:', function () {
    it('フィルターの追加', function () {
        var filter = {
            abc: function (_this) {
                return _this.replace(/(<br>)/g, 'abc');
            }
        };
        String.prototype._f('addFilter', filter);
        var retStr = '<p>あいうえお<br>かきくけこ<br>さしすせそ</p>';
        expect(retStr._f('abc')).toEqual('<p>あいうえおabcかきくけこabcさしすせそ</p>');
    });
});