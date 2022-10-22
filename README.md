# ThreeCardの使い方
3つ横並びの説明内容を表示する

## パラメーター
### displayData(必須)
表示する内容をオブジェクトの配列で定義する
具体的には下記のような感じ
```
[
    {
        title: 'タイトルとして 表示する内容',
        description: '説明文として表示する内容です。 ここに色々書いて行きます。'
        imagePath: '/img/...jpg'
    },
    {
        title: 'タイトルとして 表示する内容',
        description: '説明文として表示する内容です。 ここに色々書いて行きます。'
        imagePath: '/img/...jpg'
    },
    {
        title: 'タイトルとして 表示する内容',
        description: '説明文として表示する内容です。 ここに色々書いて行きます。'
        imagePath: '/img/...jpg'
    }
]
```
titleとdescriptionは改行させたいところにスペースを空けておく

## titleAs
初期値はh3だけど、h2とかh4にしたいときに使う

## style
一番外枠のスタイルを設定しても良い
オブジェクト形式で値を入れる
style={{backgroundColor:'pink'}}
のような感じ

## titleFontSizes
タイトルのフォントサイズを画面サイズの小さい方から順に５個記載
ブレークポイントはbootstrap5と同じにしている

## imageHeights
画像の高さを画面サイズの小さい方から順に５段階、配列で記載
imageHeights={[100,200,300,350,400]}
という感じ