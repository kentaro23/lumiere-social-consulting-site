# Lumiere Social Consulting Website

Next.js（App Router）+ TypeScript + Tailwind CSS で構築した、Instagram運用コンサル向けのコーポレートサイトです。

## セットアップ手順

```bash
npm install
```

## 開発起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

## 主要ページ一覧

- `/` ホーム（Hero / 強み / サービス / 料金目安 / 事例 / FAQ / CTA）
- `/services` サービス詳細（納品物・進め方）
- `/cases` 事例まとめ
- `/about` 運営方針（規約配慮・守秘義務）
- `/contact` お問い合わせ（ダミーフォーム）

## 品質チェック

```bash
npm run lint
npm run build
```

## GitHub に push するコマンド例

```bash
git init
git add .
git commit -m "feat: create corporate site for instagram consulting"
git branch -M main
git remote add origin https://github.com/<your-account>/<your-repo>.git
git push -u origin main
```

## Vercel デプロイ手順

### 方法1: GitHub連携

1. GitHub に push
2. Vercel にログイン
3. `Add New...` -> `Project` から対象リポジトリを選択
4. Framework Preset が `Next.js` であることを確認して Deploy

### 方法2: vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

## このリポで次にやること（TODO）

- 実案件データに置き換え（匿名性を維持した事例へ更新）
- OG画像の本制作（ブランドトーンに合わせる）
- 問い合わせフォームを Formspree / API Route に接続
- GA4 / Search Console の導入
- Privacy Policy ページの正式実装
- サービス資料DL導線の追加
