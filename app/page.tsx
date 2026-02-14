import Image from 'next/image';
import Link from 'next/link';
import { CTASection } from '@/components/CTASection';
import { PricingTable } from '@/components/PricingTable';
import { SectionTitle } from '@/components/SectionTitle';
import { bookingHref, cases, faqs, servicePackages, strengths } from '@/lib/site';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl space-y-20 px-6 py-14 md:py-20">
      <section className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Lumiere Social</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
            規約配慮×世界観設計で、
            <br className="hidden md:block" />
            問い合わせにつながるインスタ運用
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
            ナイトワーク・接客ビジネス向けに、コミュニティガイドラインへ配慮した発信設計と、DM/外部リンク/問い合わせ導線を一気通貫で最適化します。
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
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#131313] to-[#0a0a0a] p-4 shadow-soft">
          <Image
            src="/images/hero-placeholder.svg"
            alt="Instagram運用イメージ"
            width={800}
            height={960}
            className="h-auto w-full rounded-2xl"
            priority
          />
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle
          eyebrow="Strength"
          title="規約に配慮しながら、魅力を落とさない運用設計"
          description="表現リスクを抑えつつ、保存・DM・問い合わせにつながる投稿戦略を設計します。"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {strengths.map((strength) => (
            <article key={strength.title} className="rounded-2xl border border-white/10 bg-[#101010] p-6">
              <h3 className="text-lg font-semibold text-white">{strength.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{strength.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle
          eyebrow="Service"
          title="サービスパッケージ"
          description="目的と運用体制に合わせ、短期立ち上げから月額伴走まで対応します。"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {servicePackages.map((service) => (
            <article key={service.name} className="rounded-2xl border border-white/10 bg-[#101010] p-6">
              <h3 className="text-lg font-semibold">{service.name}</h3>
              <p className="mt-3 text-sm text-white/70">{service.outline}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {service.deliverables.map((item) => (
                  <li key={item}>・{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-accent">{service.price}</p>
            </article>
          ))}
        </div>
        <PricingTable />
        <p className="text-sm text-white/60">
          詳細金額はアカウント状況と制作体制に応じて個別見積もりでご案内します。
        </p>
      </section>

      <section className="space-y-8">
        <SectionTitle
          eyebrow="Cases"
          title="匿名事例（Before / After）"
          description="数値はサンプルです。運用の方向性により目標指標は個別設計します。"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {cases.map((item) => (
            <article key={item.name} className="rounded-2xl border border-white/10 bg-[#101010] p-6">
              <p className="text-xs uppercase tracking-[0.12em] text-accent">{item.period}</p>
              <h3 className="mt-2 text-base font-semibold">{item.name}</h3>
              <div className="mt-4 space-y-2 text-sm text-white/70">
                <p className="text-white">Before</p>
                {item.before.map((row) => (
                  <p key={row}>- {row}</p>
                ))}
              </div>
              <div className="mt-4 space-y-2 text-sm text-white/70">
                <p className="text-white">After</p>
                {item.after.map((row) => (
                  <p key={row}>- {row}</p>
                ))}
              </div>
              <p className="mt-4 text-sm text-white/80">{item.point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle eyebrow="FAQ" title="よくある質問" />
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-xl border border-white/10 bg-[#101010] p-5">
              <summary className="cursor-pointer list-none text-sm font-semibold text-white md:text-base">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-7 text-white/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
