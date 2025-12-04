# Kotenbu (古典部) - Pilot Site

古典的な文化を残していくことをコンセプトとしたWebサイトのパイロット版です。

## 🎨 デザインコンセプト

- **Modern Classic / Digital Wabi-Sabi**
- 伝統色（藍・和紙・金）を使用
- 明朝体とゴシック体の組み合わせ
- レスポンシブデザイン

## 🚀 ローカル開発

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:5173/ を開いてください。

### 3. プロダクションビルド（ローカル確認用）

```bash
npm run build
npm run preview
```

## 📦 Cloudflare Pagesへのデプロイ

### 方法1: GitHubリポジトリ経由（推奨）

1. **GitHubにプッシュ**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Cloudflare Pagesでプロジェクト作成**
   - [Cloudflare Dashboard](https://dash.cloudflare.com/) にログイン
   - `Workers & Pages` → `Create application` → `Pages` → `Connect to Git`
   - GitHubリポジトリを選択

3. **ビルド設定（重要！）**
   
   > [!IMPORTANT]
   > ビルドコマンドを間違えると `dist not found` エラーが出ます！
   
   - **フレームワークプリセット**: `Vite`
   - **ビルドコマンド**: `npm run build` ← **`npm install` ではありません！**
   - **ビルド出力ディレクトリ**: `dist`
   - **Root directory**: （空欄でOK）
   - **環境変数** (必要に応じて):
     - `NODE_VERSION`: `18` または `20`

4. **デプロイ**
   - `Save and Deploy` をクリック
   - 数分後、URLが発行されます

### 方法2: Wranglerを使用（CLI経由）

1. **Wranglerのインストール**
   ```bash
   npm install -g wrangler
   ```

2. **Cloudflareにログイン**
   ```bash
   wrangler login
   ```

3. **ビルド**
   ```bash
   npm run build
   ```

4. **デプロイ**
   ```bash
   wrangler pages deploy dist --project-name=kotenbu
   ```

## ⚠️ 注意事項

### npm installについて
- `npm install` のみで問題ありません
- Viteプロジェクトの依存関係は `package.json` で管理されています
- 初回セットアップ時に自動で実行されているはずです

### デプロイ前の確認事項
1. **ビルドが通るか確認**
   ```bash
   npm run build
   ```
   エラーがないことを確認してください。

2. **distフォルダの確認**
   - `dist/` フォルダが生成されていることを確認
   - `.gitignore` に `dist/` が含まれている場合は、Cloudflareが自動でビルドします

3. **環境変数**
   - 現在は環境変数を使用していませんが、今後APIキーなどを使う場合は Cloudflare Pages の設定で追加してください

### トラブルシューティング

#### ❌ `Error: Output directory "dist" not found` が出る場合

**原因**: ビルドコマンドが間違っている

**解決方法**:
1. Cloudflare Pages → プロジェクトの Settings → Builds & deployments
2. Build command を `npm install` → **`npm run build`** に変更
3. Save して Retry deployment

または、ローカルで確認：
```bash
npm run build
ls dist  # distフォルダが生成されているか確認
```

#### ビルドエラーが出る場合
```bash
# キャッシュをクリア
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Cloudflare Pagesでビルドが失敗する場合
- Node.jsのバージョンを明示的に設定:
  - Cloudflare Pages の設定 → 環境変数 → `NODE_VERSION` = `20`

#### デプロイ後に真っ白になる場合
- ブラウザのコンソール（F12）でエラーを確認
- アセットのパスが正しいか確認（Viteは自動で処理します）

## 📁 プロジェクト構造

```
kotenbu-web/
├── index.html              # エントリーポイント
├── package.json            # 依存関係
├── src/
│   ├── main.js            # メインJavaScript
│   ├── styles/
│   │   ├── variables.css  # CSS変数
│   │   └── global.css     # グローバルスタイル
│   └── components/
│       ├── Hero.js        # ヒーローセクション
│       ├── About.js       # 紹介セクション
│       ├── Gallery.js     # ギャラリーセクション
│       └── Footer.js      # フッター
└── dist/                  # ビルド出力（自動生成）
```

## 🔧 今後の改善案

- [ ] コレクションページの実装（古銭、神社、古典籍など）
- [ ] 画像の最適化とレイジーローディング
- [ ] SEOメタタグの充実
- [ ] OGP画像の設定
- [ ] アニメーションの強化
- [ ] CMS連携（将来的に）

## 📝 ライセンス

© 2025 Kotenbu. All rights reserved.
