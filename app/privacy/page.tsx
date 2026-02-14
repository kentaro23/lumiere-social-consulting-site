import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '個人情報の取り扱いに関する方針。'
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-6 py-14 md:py-20">
      <h1 className="text-3xl font-semibold text-white">プライバシーポリシー（準備中）</h1>
      <p className="text-sm leading-7 text-white/75">
        現在、正式版のプライバシーポリシーを整備中です。お問い合わせ時に取得する情報は、連絡対応とサービス案内の目的でのみ利用します。
      </p>
      <p className="text-sm leading-7 text-white/75">
        第三者提供や目的外利用は行わず、適切な安全管理措置のもとで取り扱います。正式版公開時に本ページを更新します。
      </p>
    </div>
  );
}
