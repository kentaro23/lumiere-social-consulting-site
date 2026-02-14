const fallbackSiteUrl = 'https://lumiere-social-consulting-site.vercel.app';

export const siteConfig = {
  name: 'Lumiere Social',
  description:
    '規約配慮と健全寄りの世界観設計で、ナイトワーク・接客ビジネスのInstagram運用を問い合わせ導線まで最適化するSNS支援。',
  url: process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallbackSiteUrl
};

export const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || '';
export const bookingHref = bookingUrl || '/contact';
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || 'hello@lumiere-social.jp';

export const strengths = [
  {
    title: '企画設計',
    description:
      'アカウントの魅力を言語化し、保存されるテーマと投稿ネタを中長期で設計します。'
  },
  {
    title: '撮影台本',
    description:
      '短尺動画向けに撮影の流れとカット割りをテンプレ化し、再現性のある制作体制を作ります。'
  },
  {
    title: '投稿導線',
    description:
      'プロフィール、ハイライト、CTA文言を連動させ、DMや外部リンクへの自然な導線を設計します。'
  },
  {
    title: 'アカウント保全',
    description:
      'コミュニティガイドラインに配慮し、リスクを抑えた運用ルールでシャドウバン・凍結を回避します。'
  }
];

export const servicePackages = [
  {
    name: '2週間ブートキャンプ',
    outline: '短期で運用を立ち上げる初期構築プラン。',
    deliverables: [
      '企画10本',
      '撮影台本10本',
      '撮影テンプレート',
      'プロフィール/ハイライト設計'
    ],
    price: '5万円〜15万円（目安）'
  },
  {
    name: '月額運用サポート',
    outline: '継続的な改善で成果を積み上げる伴走プラン。',
    deliverables: ['週次添削', '投稿改善提案', 'DM導線最適化'],
    price: '10万円〜30万円（目安）'
  },
  {
    name: '撮影同行 / 編集テンプレ',
    outline: '制作効率を上げるオプション支援。',
    deliverables: ['撮影現場ディレクション', '編集テンプレート提供'],
    price: '個別見積もり'
  }
];

export const cases = [
  {
    name: '都内ラウンジ勤務 / 20代女性',
    period: '運用3ヶ月',
    before: ['月間リーチ: 1.8万', '保存数: 120', '月間DM: 9件'],
    after: ['月間リーチ: 7.4万', '保存数: 610', '月間DM: 41件'],
    point: 'プロフィール動線と投稿CTAを統一し、問い合わせ率が向上。'
  },
  {
    name: '地方エリア接客業 / 顔出し最小',
    period: '運用2ヶ月',
    before: ['月間リーチ: 9,000', '保存数: 58', '月間DM: 4件'],
    after: ['月間リーチ: 3.6万', '保存数: 290', '月間DM: 18件'],
    point: '顔出しなしの世界観投稿とストーリーズ導線で接点を増加。'
  },
  {
    name: '店舗アカウント / 新規立ち上げ',
    period: '運用4ヶ月',
    before: ['月間リーチ: 0', '保存数: 0', '月間DM: 0件'],
    after: ['月間リーチ: 5.1万', '保存数: 430', '月間DM: 26件'],
    point: '投稿フォーマット固定化で運用工数を抑えながら認知を拡大。'
  }
];

export const faqs = [
  {
    question: '出勤日や料金は投稿で出したほうが良いですか？',
    answer:
      '公開投稿では詳細を出しすぎず、プロフィールやハイライトで期待値を調整しつつ、最終的な案内はDMや外部リンクで行う設計を推奨しています。'
  },
  {
    question: '炎上や凍結が怖いです。どこまで配慮できますか？',
    answer:
      '投稿表現のガイドライン、NGワード管理、ストーリーズ運用ルールを事前に定義し、運用フローに組み込むことでリスク低減を図ります。'
  },
  {
    question: '顔出しなしでも成果は出せますか？',
    answer:
      '可能です。手元・雰囲気・テキスト演出を軸にした世界観投稿や、保存を促すTips投稿を組み合わせて導線を作ります。'
  },
  {
    question: '最短でどのくらいで相談できますか？',
    answer: 'フォーム送信後、通常24時間以内に初回ヒアリングの日程をご案内します。'
  }
];
