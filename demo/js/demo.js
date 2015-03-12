$(function () {
    "use strict";
    $('a[href^="#"]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var position = $(href).offset().top - 60;
        $("html, body").animate({scrollTop: position}, speed, "swing");
    });
    $("textarea.code").exCodePrettify({
        showRunButton: true,
        showResetButton: true,
        showDemo: true,
        editCode: true
    });

    $('input[data-filter]').imeEnter();

    $(document).on('focus blur enter.imeEnter', 'input[data-filter]', function (
            event) {
        switch (event.type) {
            case 'focus':
                $(this).imeEnter('on');
                break;
            case 'blur':
                $(this).imeEnter('off');
                break;
            case 'enter':
                // キャレットの位置取得
                var caret = this.selectionEnd;

                // フィルターの取得
                var filter = $(this).data('filter');
                // 現在の文字列の取得
                var str = $(this).val();
                // 文字列の置換え
                var ret = str._f(filter);
                if ($(this).hasClass('price')) {
                    // 金額の入力欄の時は「円」を足す
                    ret += '円';
                }
                // 値のセット
                $(this).val(ret);

                // 変換後の文字列との差分からキャレット位置の変更
                caret += ret.length - str.length;
                // 金額の入力欄の時は「円」を足しているので調整
                if ($(this).hasClass('price') && caret === ret.length) {
                    // キャレットの位置が最後尾の場合「円」の後ろにあるのでキャレット位置を変更する
                    caret -= 1;
                }
                this.selectionStart = caret;
                this.selectionEnd = caret;
                break;
        }
    });

    $('input[data-filter]').trigger($.Event('enter'));
});