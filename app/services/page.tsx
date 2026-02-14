import type { Metadata } from 'next';
import Link from 'next/link';
import { CTASection } from '@/components/CTASection';
import { SectionTitle } from '@/components/SectionTitle';
import { bookingHref, servicePackages } from '@/lib/site';

export const metadata: Metadata = {
  title: 'サービス詳細',
  description: 'Instagram運用支援サービスの納品物・進行フロー・料金目安を紹介します。'
};

const flow = [
  'ヒアリング（現状分析・目標設定）',
  '運用設計（投稿テーマ・導線設計・リスク配慮ルール）',
  '制作実行（台本・テンプレ・添削）',
  '改善運用（週次レビュー・指標分析・改善提案）'
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 py-14 md:py-20">
      <SectionTitle
        eyebrow="Services"
        title="サービス詳細"
        description="規約配慮を土台に、企画から導線改善まで実務に落とし込める形で提供します。"
      />

      <section className="grid gap-4 md:grid-cols-3">
        {servicePackages.map((service) => (
          <article key={service.name} className="rounded-2xl border border-white/10 bg-[#101010] p-6">
            <h2 className="text-lg font-semibold">{service.name}</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">{service.outline}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {service.deliverables.map((item) => (
                <li key={item}>・{item}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-accent">{service.price}</p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#101010] p-8">
        <h2 className="text-xl font-semibold text-white">進め方</h2>
        <ol className="mt-5 space-y-3 text-sm text-white/75 md:text-base">
          {flow.map((step, index) => (
            <li key={step}>
              {index + 1}. {step}
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-white/60">
          規約や運用方針の最終判断は、最新ガイドラインを確認しながら都度調整します。
        </p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#101010] p-8">
        <h2 className="text-xl font-semibold text-white">導入前の確認ポイント</h2>
        <ul className="mt-5 space-y-2 text-sm text-white/75">
          <li>・現状アカウントの投稿データ（直近30〜90日）</li>
          <li>・撮影/編集に使える時間と担当者</li>
          <li>・DMまたは外部リンクでの受け皿整備状況</li>
        </ul>
        <Link
          href={bookingHref}
          className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:opacity-85"
        >
          無料相談（15分）
        </Link>
      </section>

      <CTASection />
    </div>
  );
}
