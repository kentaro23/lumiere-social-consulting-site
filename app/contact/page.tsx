import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { SectionTitle } from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: '無料相談フォームと連絡導線。'
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-12 px-6 py-14 md:py-20">
      <SectionTitle
        eyebrow="Contact"
        title="無料相談・お問い合わせ"
        description="現状の課題を確認し、最適な導線設計と運用プランをご提案します。"
      />

      <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <ContactForm />

        <aside className="space-y-4 rounded-2xl border border-white/10 bg-[#101010] p-6 text-sm text-white/75">
          <h2 className="text-base font-semibold text-white">連絡導線（ダミー）</h2>
          <p>Instagram: @lumiere_consulting</p>
          <p>LINE: https://line.me/R/ti/p/@dummy</p>
          <p>Email: hello@example.com</p>
          <p className="pt-3 text-xs text-white/50">
            受付後、ヒアリング日程調整のため24時間以内に返信する想定です。
          </p>
        </aside>
      </div>
    </div>
  );
}
