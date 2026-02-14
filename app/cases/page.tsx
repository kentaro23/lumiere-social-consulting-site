import type { Metadata } from 'next';
import Link from 'next/link';
import { cases } from '@/lib/site';
import { SectionTitle } from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: '事例',
  description: 'Instagram運用の匿名事例と改善アプローチを紹介します。'
};

export default function CasesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-14 px-6 py-14 md:py-20">
      <SectionTitle
        eyebrow="Case Studies"
        title="事例まとめ"
        description="守秘義務に配慮し、匿名化した上で代表的な改善パターンを掲載しています。"
      />

      <div className="space-y-4">
        {cases.map((item) => (
          <article key={item.name} className="rounded-2xl border border-white/10 bg-[#101010] p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-semibold text-white">{item.name}</h2>
              <p className="text-xs uppercase tracking-[0.12em] text-accent">{item.period}</p>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-white">Before</p>
                <ul className="mt-2 space-y-2 text-sm text-white/70">
                  {item.before.map((value) => (
                    <li key={value}>- {value}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">After</p>
                <ul className="mt-2 space-y-2 text-sm text-white/70">
                  {item.after.map((value) => (
                    <li key={value}>- {value}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-white/80">{item.point}</p>
          </article>
        ))}
      </div>

      <section className="rounded-2xl border border-white/10 bg-[#101010] p-8">
        <h2 className="text-xl font-semibold">次に取り組む改善の優先順位を整理します</h2>
        <p className="mt-3 text-sm leading-7 text-white/70">
          リーチだけでなく、保存率・プロフィール遷移率・DM率を見ながら、導線改善を優先順位付きでご提案します。
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:opacity-85"
        >
          相談してみる
        </Link>
      </section>
    </div>
  );
}
