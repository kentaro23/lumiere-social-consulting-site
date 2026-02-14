import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090909]">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Lumiere Social Consulting</p>
          <p className="mt-3 max-w-md text-sm text-white/70">
            規約配慮と世界観設計を軸に、ナイトワーク・接客ビジネスのInstagram運用をサポートします。
          </p>
        </div>
        <div className="text-sm text-white/70 md:justify-self-end md:text-right">
          <div className="space-y-2">
            <p>
              <Link href="/privacy" className="hover:text-white">
                プライバシーポリシー（準備中）
              </Link>
            </p>
            <p>
              免責：各SNSプラットフォームの規約変更やアルゴリズム変更により、成果を保証するものではありません。
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
