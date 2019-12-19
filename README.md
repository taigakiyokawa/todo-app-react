# TODO App using React
## Dependencies
- [React 16.8.6](https://reactjs.org/)
- [webpack 4.36.1](https://webpack.js.org/)
- [Babel 7.5.5](https://babeljs.io/)
- Other: [package.json](https://github.com/taigakiyokawa/todo-app-react/blob/master/package.json)

## Design
```
- dist/
    - bundle.js
    - index.html

- src/
    - index.jsx
    - index.html
    - assets/
        - style.css
        - theme.js

    - components/
        - App.jsx
        - AllDone.jsx
        - Form.jsx
        - Header.jsx
        - Todo.jsx
        - TodoList.jsx

- .babelrc
- package.json
- webpack.config.js
- .gitignore
- yarn.lock
```

## About the App
This app have some functions.
- Create a new todo{title: string, isDone: bool, isEdit: bool}
- Delete a todo
- Change a todo is done or not to click a checkbox
- Change all of todos are done or not to click one checkbox
- Change edit mode to click a pencil button
- Update a todo title
- Watch and validate form input value is empty
- Count all of todos and all of todos which is done


## Installation
1. Clone this repository to your computer
```
git clone https://github.com/taigakiyokawa/todo-app-react.git
```
2. Install packages belongs to package.json
```
yarn install
```
3. If you build app in development, run this command:
```
yarn run start
```
4. Or you can build the app in production with this command:
```
yarn run build
```

### Other repositories about this app
- [react-todo-app](https://github.com/taigakiyokawa/react-todo-app)

## References
- [React – ユーザインターフェース構築のための JavaScript ライブラリ](https://ja.reactjs.org/)
- [webpack](https://webpack.js.org/)
- 
- [Babelとwebpackを使ってES6でReactを動かすまでのチュートリアル - Qiita](https://qiita.com/akirakudo/items/77c3cd49e2bf39da79dd)
- [最新版で学ぶwebpack 4入門 - スタイルシート（CSSやSass）を取り込む方法 - ICS MEDIA](https://ics.media/entry/17376/)
- [webpack4対応webpack-dev-serverの主要な設定オプション(CLI,webpack.config.js)の意味と挙動 - Qiita](https://qiita.com/riversun/items/d27f6d3ab7aaa119deab)
- [@babel/preset-react · Babel](https://babeljs.io/docs/en/babel-preset-react)
- [Example: Todo List · Redux](https://redux.js.org/basics/example)
- [webpackで開発用/本番用の設定を分ける - Qiita](https://qiita.com/teinen_qiita/items/4e828ac30221efb624e1)
- [Production | webpack](https://webpack.js.org/guides/production/) (webpack の設定ファイルはproduction/developmentでそれぞれ分けることを推奨されていますが今回は小規模のため省略しています。)
- [JavaScript で配列(Array)の合計値, 平均値, 中央値をモダンに求める | phiary](http://phiary.me/javascript-array-sum-average-median/)(こちらの記事を参考に各todoのisDoneの論理積を求める関数を作りました。)
- [javascript/react at master · airbnb/javascript](https://github.com/airbnb/javascript/tree/master/react)
- [React.jsでPropTypesを利用した時の話 - Qiita](https://qiita.com/sfatsfc/items/d32b28ccd10e04bc87ae)
- [joelburton/react-todo: Example todo app w/edit and mongo persistence]( https://github.com/joelburton/react-todo)
- [React JS - how to build a edit cancel text input - YouTube](https://youtu.be/WTh54FMNrbU)
- [ReactでシンプルなTodoアプリケーションを作成する - Qiita](https://qiita.com/sayama0402/items/6364cef848e2c2d1cf7d)
- [【React】ToDoアプリを作ってみよう【前編】 - Qiita](https://qiita.com/mikan3rd/items/20152cdd63a708264a9e)
- [2018年度版、React、webpack、Babelのセットアップ手順をアップデートしてみた - Qiita](https://qiita.com/gipcompany/items/63641286921cbe223c94)
- [最新版で学ぶwebpack 4入門 - Babel 7でES2019環境の構築（React, Vue, Three.js, jQueryのサンプル付き） - ICS MEDIA](https://ics.media/entry/16028/)
- [Reactの環境構築。Create react appを使わずにReactアプリを作る。 - Tatsuya Asami - Medium](https://medium.com/@astatsuya/react%E3%81%AE%E7%92%B0%E5%A2%83%E6%A7%8B%E7%AF%89-create-react-app%E3%82%92%E4%BD%BF%E3%82%8F%E3%81%9A%E3%81%ABreact%E3%82%A2%E3%83%97%E3%83%AA%E3%82%92%E4%BD%9C%E3%82%8B-2c0228b31589)

