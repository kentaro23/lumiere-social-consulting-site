import Link from 'next/link';
import { bookingHref } from '@/lib/site';

const navItems = [
  { href: '/', label: 'ホーム' },
  { href: '/services', label: 'サービス' },
  { href: '/cases', label: '事例' },
  { href: '/about', label: '運営方針' },
  { href: '/contact', label: 'お問い合わせ' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0d0d0dcc] backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-[0.22em] text-accent">
            LUMIERE SOCIAL
          </Link>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href={bookingHref}
            className="rounded-full border border-accent px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-accent transition hover:bg-accent hover:text-black"
          >
            無料相談（15分）
          </Link>
        </div>
        <nav className="mt-3 flex gap-4 overflow-x-auto whitespace-nowrap text-xs text-white/75 md:hidden">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
