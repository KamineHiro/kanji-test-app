# 🎓 漢字マスター - Kanji Master

日本語の漢字読み方を楽しく学べるインタラクティブなクイズアプリケーションです。

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?style=flat-square&logo=typescript)
![Styled Components](https://img.shields.io/badge/Styled_Components-6.1.13-DB7093?style=flat-square&logo=styled-components)

## ✨ 特徴

### 🎯 3つの難易度レベル
- **初級**: 基本的な漢字（数字、曜日、身体、方向、自然、動物など）
- **中級**: 日常でよく使う漢字（時間、家族、色、季節、自然、学習など）
- **上級**: 複雑で高度な漢字（感情、行動、社会、建物、自然、抽象概念など）

### 🎲 ランダム出題システム
- 各レベルから10問をランダムに出題
- Fisher-Yatesシャッフルアルゴリズムで均等な問題選択
- 選択肢もランダムに並び替え

### 🎨 美しいUI/UX
- **大きな○×マーク**: 正解・不正解が一目でわかる視覚的フィードバック
- **フルスクリーンオーバーレイ**: 回答結果を画面全体に表示
- **アニメーション**: スムーズな画面遷移と描画エフェクト
- **レスポンシブデザイン**: スマートフォンからPCまで対応

### 💾 状態の永続化
- リロードしても進行状況を保持
- LocalStorageで自動保存
- URLベースのルーティングで復元

### 🔄 レベル切り替え
- クイズ途中でもレベル変更可能
- 結果画面から別レベルに挑戦
- スムーズな画面遷移

## 🚀 はじめ方

### 前提条件
- Node.js (v14以上)
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/KamineHiro/kanji-test-app.git

# プロジェクトディレクトリに移動
cd kanji-test-app

# 依存関係をインストール
npm install
```

### 開発サーバーの起動

```bash
npm start
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリを表示します。

### ビルド

```bash
npm run build
```

`build` フォルダに本番用の最適化されたビルドが生成されます。

## 📁 プロジェクト構造

```
kanji-test-app/
├── public/              # 静的ファイル
├── src/
│   ├── components/      # Reactコンポーネント
│   │   ├── DifficultySelector.tsx  # レベル選択画面
│   │   ├── Quiz.tsx                # クイズメインロジック
│   │   ├── Question.tsx            # 問題表示
│   │   ├── Options.tsx             # 選択肢
│   │   ├── Result.tsx              # 結果表示（○×マーク）
│   │   ├── FinalResults.tsx        # 最終結果
│   │   ├── Score.tsx               # スコア表示
│   │   ├── Header.tsx              # ヘッダー
│   │   ├── Footer.tsx              # フッター
│   │   └── Illustration.tsx        # イラスト
│   ├── data/
│   │   └── kanjiData.ts            # 漢字データ（90問以上）
│   ├── types/
│   │   └── kanji.ts                # TypeScript型定義
│   ├── utils/
│   │   └── quizUtils.ts            # ユーティリティ関数
│   ├── App.tsx                     # メインアプリ
│   └── index.tsx                   # エントリーポイント
├── package.json
└── README.md
```

## 🛠️ 使用技術

### フロントエンド
- **React 18.3.1**: UIライブラリ
- **TypeScript 4.9.5**: 型安全な開発
- **React Router 6.26.2**: URLルーティング
- **Styled Components 6.1.13**: CSS-in-JS スタイリング

### 開発ツール
- **Create React App**: プロジェクトのセットアップ
- **ESLint**: コード品質チェック

## 🎮 使い方

1. **レベル選択**: 初級、中級、上級から選択
2. **クイズ開始**: 「クイズを開始」ボタンをクリック
3. **問題に回答**: 3つの選択肢から正しい読み方を選択
4. **結果確認**: 大きな○×マークで正解・不正解を確認
5. **次の問題**: 「次の問題へ」ボタンで進む
6. **最終結果**: 10問終了後、スコアと評価を表示

### 便利な機能
- **レベル変更**: 画面右上の「レベル変更」ボタン
- **リスタート**: 結果画面から「同じレベルで再挑戦」
- **別レベルに挑戦**: 結果画面から「別のレベルに挑戦」

## 📊 データ

### 漢字問題数
- 初級: 30問
- 中級: 30問
- 上級: 30問
- **合計**: 90問以上

### カテゴリ
数字、曜日、身体、方向、自然、動物、時間、家族、色、季節、天気、食べ物、場所、学習、活動、感情、行動、社会、建物、抽象概念など

## 🤝 コントリビュート

プルリクエストを歓迎します！大きな変更の場合は、まずissueを開いて変更内容を議論してください。

## 📝 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 👨‍💻 作者

**Kamine Hiroki** - [@KamineHiro](https://github.com/KamineHiro)

## 🙏 謝辞

- イラストデザインのインスピレーション
- React コミュニティ
- Create React App チーム

---

**楽しく漢字を学びましょう！🎓📚**
