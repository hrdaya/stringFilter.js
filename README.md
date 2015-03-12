# stringFilter.js
[![GitHub release](https://img.shields.io/badge/release-v0.1.0-blue.svg?style=flat)](https://github.com/hrdaya/stringFilter.js/releases)
[![GitHub licence](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat)](https://github.com/hrdaya/stringFilter.js/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/hrdaya/stringFilter.js.svg?branch=master&style=flat)](https://travis-ci.org/hrdaya/stringFilter.js)
[![Coverage Status](https://coveralls.io/repos/hrdaya/stringFilter.js/badge.svg)](https://coveralls.io/r/hrdaya/stringFilter.js)
[![devDependency Status](https://david-dm.org/hrdaya/stringFilter.js/dev-status.svg)](https://david-dm.org/hrdaya/stringFilter.js#info=devDependencies)

「stringFilter.js」はJavaScriptの「String.prototype」を利用して文字列のフィルタリングを実行する拡張を提供します

 - バグ等ありましたら[issue](https://github.com/hrdaya/stringFilter.js/issues)を上げていただけると助かります :smiley:

## 特徴

- JavaScriptの「String.prototype」にフィルタリング用の関数を追加します
- フィルター用の関数を内部に複数持つことにより「String.prototype」の汚染を最小限にします
- 適用するフィルターを順番に複数適用することができます

## 使用方法

[ドキュメント・デモ](http://hrdaya.github.io/stringFilter.js/)をご参照ください

## 内蔵フィルター

|フィルター名|説明|
|:-----------|:-----------|
|removeCtl|タブ文字をnum数のスペースに変換後、改行以外の制御文字を削除|
|removeNl|改行を削除|
|trim|全角スペースを含めたトリム|
|rtrim|全角スペースを含めた右側のみのトリム|
|ltrim|全角スペースを含めた左側のみのトリム|
|alpha|英字のみ（全角半角変換あり）|
|num|数字のみ（全角半角変換あり）|
|alphaNum|英数字のみ（全角半角変換あり）|
|numPyphen|数字とハイフンのみ（全角半角変換あり）|
|numSlash|数字とスラッシュのみ（全角半角変換あり）|
|numColon|数字とコロンのみ（全角半角変換あり）|
|hiragana|ひらがなとスペース・長音符・半角ハイフン・半角数字のみ|
|katakana|カタカナとスペース・長音符・半角ハイフン・半角数字のみ|
|nl2br|改行をBRタグに変換|
|br2nl|BRタグを改行に変換（BRの大文字・小文字の区別なし）|
|tab2space|タブをnum文字のスペースに変換|
|snake2camel|スネークケースからキャメルケースに変換|
|camel2snake|キャメルケースからスネークケースに変換|
|hira2kana|ひらがなを全角カタカナに変換|
|kana2hira|全角カタカナをひらがなに変換|
|hankana2zenkana|半角カタカナを全角カタカナに変換|
|zen2han|全角から半角に置き換え（カタカナは含まない）|
|han2zen|半角から全角に置き換え（カタカナは含まない）|
|one2multi|一文字で表記される文字を複数文字に展開する（主に会社名等で使用される文字）|
|toInt|文字列を整数にして返す（parseInt）|
|toFloat|文字列を浮動小数点にして返す（parseFloat）|
|numString|数字（文字列）に変換して返す|
|numFormat|数字の桁区切り|
|removeFigure|桁区切りの数字から区切り文字の削除（「,」の削除）|
|padSlice|文字列を右からnum文字切り出す（num文字に足りない場合はpadで埋める）|
|padFill|文字列の左側を桁数numになるまで埋める（numを超える場合は何もしない）|
|escapeHTML|HTMLエスケープ（エンティティ文字への置換え）|
|unEscapeHTML|HTMLアンエスケープ（エンティティ文字からの置換え）|
|escapeJs|JavaScriptエスケープ|
|unEscapeJs|JavaScriptアンエスケープ|
|escapeJsHTML|JavaScriptエスケープの後、HTMLエスケープ|
|noScript|外部リンク不可、括弧類のエスケープ|

## ライセンス

[MIT License](https://github.com/hrdaya/stringFilter.js/blob/master/LICENSE)