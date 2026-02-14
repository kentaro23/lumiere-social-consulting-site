import Link from 'next/link';
import { bookingHref } from '@/lib/site';

export function CTASection() {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#141414] to-[#1a1a1a] p-8 shadow-soft md:p-12">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">Action</p>
      <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
        規約に配慮した運用設計を、まずは15分で整理しませんか？
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
        現在のアカウント状況をヒアリングし、投稿方針・導線・改善優先度を短時間でご提案します。
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href={bookingHref}
          className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:opacity-85"
        >
          無料相談（15分）
        </Link>
        <Link
          href="/cases"
          className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
        >
          事例を見る
        </Link>
      </div>
    </section>
  );
}
