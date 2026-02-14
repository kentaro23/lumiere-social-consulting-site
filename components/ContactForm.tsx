'use client';

import { FormEvent, useMemo, useState } from 'react';

type FormState = {
  name: string;
  businessType: string;
  instagram: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  businessType: '',
  instagram: '',
  email: '',
  message: ''
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isValid = useMemo(() => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      form.name.trim().length >= 2 &&
      form.businessType.trim().length >= 2 &&
      emailPattern.test(form.email) &&
      form.message.trim().length >= 20
    );
  }, [form]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid) {
      setError('入力内容を確認してください（必須項目・文字数・メール形式）。');
      return;
    }

    setError(null);
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-[#111] p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-white/80">
          お名前（必須）
          <input
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            className="w-full rounded-lg border border-white/15 bg-black px-3 py-2 text-white outline-none ring-accent/40 transition focus:ring"
            placeholder="山田 花子"
          />
        </label>
        <label className="space-y-2 text-sm text-white/80">
          メール（必須）
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            className="w-full rounded-lg border border-white/15 bg-black px-3 py-2 text-white outline-none ring-accent/40 transition focus:ring"
            placeholder="example@mail.com"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm text-white/80">
        業種（必須）
        <input
          value={form.businessType}
          onChange={(event) => setForm((prev) => ({ ...prev, businessType: event.target.value }))}
          className="w-full rounded-lg border border-white/15 bg-black px-3 py-2 text-white outline-none ring-accent/40 transition focus:ring"
          placeholder="ナイトワーク / 接客ビジネス など"
        />
      </label>

      <label className="space-y-2 text-sm text-white/80">
        Instagramアカウント（任意）
        <input
          value={form.instagram}
          onChange={(event) => setForm((prev) => ({ ...prev, instagram: event.target.value }))}
          className="w-full rounded-lg border border-white/15 bg-black px-3 py-2 text-white outline-none ring-accent/40 transition focus:ring"
          placeholder="@sample_account"
        />
      </label>

      <label className="space-y-2 text-sm text-white/80">
        ご相談内容（必須 / 20文字以上）
        <textarea
          rows={5}
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          className="w-full rounded-lg border border-white/15 bg-black px-3 py-2 text-white outline-none ring-accent/40 transition focus:ring"
          placeholder="現在の課題、目標、希望時期などを記載してください。"
        />
      </label>

      {error ? <p className="text-sm text-red-400">{error}</p> : null}
      {submitted ? (
        <p className="text-sm text-emerald-400">
          送信を受け付けました（ダミー送信）。通常24時間以内に返信する想定です。
        </p>
      ) : null}

      <button
        type="submit"
        className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={!isValid}
      >
        送信する
      </button>
      <p className="text-xs text-white/50">将来的に Formspree などへ接続しやすい構成です。</p>
    </form>
  );
}
