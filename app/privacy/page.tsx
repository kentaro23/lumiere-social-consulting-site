import type { Metadata } from 'next';
import { contactEmail } from '@/lib/site';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: 'Lumiere Social における個人情報の取り扱い方針。'
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-6 py-14 md:py-20">
      <h1 className="text-3xl font-semibold text-white">プライバシーポリシー</h1>
      <p className="text-sm leading-7 text-white/75">
        Lumiere Social（以下「当方」）は、お問い合わせ時に取得する個人情報を適切に取り扱うため、以下の通り方針を定めます。
      </p>

      <section className="space-y-3 rounded-2xl border border-white/10 bg-[#101010] p-6">
        <h2 className="text-lg font-semibold text-white">1. 収集する情報</h2>
        <ul className="space-y-2 text-sm leading-7 text-white/75">
          <li>・氏名</li>
          <li>・連絡先（メールアドレス等）</li>
          <li>・お問い合わせ内容、相談内容、アカウント情報（任意入力を含む）</li>
        </ul>
      </section>

      <section className="space-y-3 rounded-2xl border border-white/10 bg-[#101010] p-6">
        <h2 className="text-lg font-semibold text-white">2. 利用目的</h2>
        <ul className="space-y-2 text-sm leading-7 text-white/75">
          <li>・お問い合わせへの回答、日程調整、連絡対応のため</li>
          <li>・サービス提供および運用改善提案のため</li>
          <li>・重要なお知らせ（規約変更、提供条件変更等）の連絡のため</li>
        </ul>
      </section>

      <section className="space-y-3 rounded-2xl border border-white/10 bg-[#101010] p-6">
        <h2 className="text-lg font-semibold text-white">3. 第三者提供</h2>
        <p className="text-sm leading-7 text-white/75">
          法令に基づく場合を除き、本人の同意なく第三者へ個人情報を提供しません。
          ただし、問い合わせフォーム送信に Formspree 等の外部サービスを利用する場合、当該サービス事業者のシステムを経由してデータが処理されます。
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-white/10 bg-[#101010] p-6">
        <h2 className="text-lg font-semibold text-white">4. 安全管理・保管期間</h2>
        <p className="text-sm leading-7 text-white/75">
          個人情報への不正アクセス、漏えい、改ざん等を防止するため、合理的な安全管理措置を講じます。取得した情報は利用目的達成に必要な期間のみ保管し、不要となった情報は適切に削除または廃棄します。
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-white/10 bg-[#101010] p-6">
        <h2 className="text-lg font-semibold text-white">5. お問い合わせ窓口</h2>
        <p className="text-sm leading-7 text-white/75">個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。</p>
        <p className="text-sm text-accent">Email: {contactEmail}</p>
      </section>

      <p className="text-xs text-white/50">制定日: 2026年2月14日</p>
    </div>
  );
}
