import { ReactNode } from 'react';

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <p className="text-xs uppercase tracking-[0.18em] text-accent">{eyebrow}</p> : null}
      <h2 className="mt-3 text-2xl font-semibold text-white md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-sm leading-7 text-white/70 md:text-base">{description}</p> : null}
    </div>
  );
}
