import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionTitle } from '@/components/SectionTitle';
import { bookingHref } from '@/lib/site';

export const metadata: Metadata = {
  title: '運営方針',
  description: '運営者情報、規約配慮ポリシー、守秘義務方針について。'
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-14 px-6 py-14 md:py-20">
      <SectionTitle
        eyebrow="About"
        title="運営方針"
        description="Lumiere Social は、表現の魅力とプラットフォーム規約の両立を重視します。"
      />

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-[#101010] p-7">
          <h2 className="text-xl font-semibold">運営者</h2>
          <p className="mt-4 text-sm leading-7 text-white/75">
            SNS運用ディレクター / コンテンツ設計担当。接客ビジネス領域でのInstagram運用支援を中心に、
            投稿設計・撮影ディレクション・導線最適化を担当。
          </p>
        </article>

        <article className="rounded-2xl border border-white/10 bg-[#101010] p-7">
          <h2 className="text-xl font-semibold">守秘義務</h2>
          <p className="mt-4 text-sm leading-7 text-white/75">
            ご相談内容、運用データ、投稿素材は契約範囲内で厳重管理し、許可なく第三者へ開示しません。匿名事例は個人・店舗を特定できない形でのみ掲載します。
          </p>
        </article>
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#101010] p-8">
        <h2 className="text-xl font-semibold">規約配慮ポリシー</h2>
        <ul className="mt-5 space-y-2 text-sm leading-7 text-white/75">
          <li>・コミュニティガイドラインと広告ポリシーに沿った表現設計を行います。</li>
          <li>・露骨な性的表現、直接的サービス示唆、過度な誘導表現は避けます。</li>
          <li>・規約改定やアルゴリズム変更時は、方針を速やかに見直します。</li>
        </ul>
        <Link
          href={bookingHref}
          className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:opacity-85"
        >
          無料相談（15分）
        </Link>
      </section>
    </div>
  );
}
