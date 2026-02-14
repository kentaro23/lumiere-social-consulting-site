# Lumiere Social Website

Next.js（App Router）+ TypeScript + Tailwind CSS で構築した、Lumiere Social のコーポレートサイトです。  
規約配慮と健全寄りの世界観設計を軸に、接客ビジネス・ナイトワーク領域のInstagram運用支援を案内します。

## セットアップ手順

```bash
npm install
cp .env.example .env.local
```

`.env.local` の主な設定:

- `NEXT_PUBLIC_FORMSPREE_ENDPOINT`: Formspree の送信先URL（未設定時はフォーム送信時にエラー表示）
- `NEXT_PUBLIC_BOOKING_URL`: 予約URL（Calendly等）
- `NEXT_PUBLIC_CONTACT_EMAIL`: 問い合わせ窓口メール
- `NEXT_PUBLIC_SITE_URL`: 公開URL（OG/metadata用）

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
- `/contact` お問い合わせ（Formspree実送信対応）
- `/privacy` プライバシーポリシー
- `/legal` 特定商取引法に基づく表記

## Formspree 設定手順

1. Formspreeでフォームを作成
2. エンドポイントURL（`https://formspree.io/f/...`）を取得
3. `.env.local` に `NEXT_PUBLIC_FORMSPREE_ENDPOINT` として設定
4. `npm run dev` でフォーム送信し、受信を確認

## 予約URL（Calendly等）設定手順

1. 予約サービスで15分相談用ページを作成
2. URLを `.env.local` の `NEXT_PUBLIC_BOOKING_URL` に設定
3. ヘッダー・各CTA・問い合わせページの予約ボタン遷移を確認

## Vercelの環境変数設定手順

1. Vercel Dashboard で対象プロジェクトを開く
2. `Settings` -> `Environment Variables`
3. 以下を `Production / Preview / Development` に登録
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
   - `NEXT_PUBLIC_BOOKING_URL`
   - `NEXT_PUBLIC_CONTACT_EMAIL`
4. 再デプロイ（`Deployments` から Redeploy も可）

## 動作確認コマンド

```bash
npm run lint
npm run build
npm run dev
```

確認ポイント:

- フォーム送信成功時に完了メッセージが出る
- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` 未設定時にエラーメッセージが出る
- 全CTAが「無料相談（15分）」表記になっている
- フッターから `/privacy` と `/legal` へ遷移できる

## GitHub に push するコマンド例

```bash
git add .
git commit -m "feat: launch-ready legal and contact updates"
git push
```

## Vercel デプロイ手順（CLI）

```bash
vercel --prod
```

## このリポで次にやること（TODO）

- Formspree の spam対策（reCAPTCHA / honeypot）の追加
- 事例の実データ反映（匿名性を維持）
- OG画像の本制作
- Google Analytics / Search Console 連携
- 運営者情報（所在地・連絡先）の正式版記載
