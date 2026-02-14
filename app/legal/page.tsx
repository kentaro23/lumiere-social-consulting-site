import type { Metadata } from 'next';
import { contactEmail } from '@/lib/site';

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記',
  description: 'Lumiere Social の特定商取引法に基づく表記。'
};

const operatorName = '大原 健太郎';
const address = '請求があった場合に遅滞なく開示いたします。';
const phone = '請求があった場合に遅滞なく開示いたします。';

export default function LegalPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-6 py-14 md:py-20">
      <h1 className="text-3xl font-semibold text-white">特定商取引法に基づく表記</h1>

      <div className="overflow-hidden rounded-2xl border border-white/10">
        <table className="w-full divide-y divide-white/10 text-sm">
          <tbody className="divide-y divide-white/10 bg-[#101010] text-white/80">
            <tr>
              <th className="w-1/3 px-4 py-4 text-left font-medium text-white">事業者名（屋号）</th>
              <td className="px-4 py-4">Lumiere Social</td>
            </tr>
            <tr>
              <th className="px-4 py-4 text-left font-medium text-white">運営責任者</th>
              <td className="px-4 py-4">{operatorName}</td>
            </tr>
            <tr>
              <th className="px-4 py-4 text-left font-medium text-white">所在地</th>
              <td className="px-4 py-4">{address}</td>
            </tr>
            <tr>
              <th className="px-4 py-4 text-left font-medium text-white">電話番号</th>
              <td className="px-4 py-4">{phone}</td>
            </tr>
            <tr>
              <th className="px-4 py-4 text-left font-medium text-white">メールアドレス</th>
              <td className="px-4 py-4">{contactEmail}</td>
            </tr>
            <tr>
              <th className="px-4 py-4 text-left font-medium text-white">販売価格</th>
              <td className="px-4 py-4">
                2週間ブートキャンプ 5万円〜15万円、月額運用サポート 10万円〜30万円（いずれも目安）。
                正式な提供価格はヒアリング後に個別見積もりで提示します。
              </td>
            </tr>
            <tr>
              <th className="px-4 py-4 text-left font-medium text-white">商品代金以外の必要料金</th>
              <td className="px-4 py-4">銀行振込手数料等、支払時に発生する手数料はお客様負担となります。</td>
            </tr>
            <tr>
              <th className="px-4 py-4 text-left font-medium text-white">支払方法</th>
              <td className="px-4 py-4">銀行振込（必要に応じて別途合意した方法）</td>
            </tr>
            <tr>
              <th className="px-4 py-4 text-left font-medium text-white">支払時期</th>
              <td className="px-4 py-4">契約時に提示する請求条件に基づき、指定期日までにお支払いください。</td>
            </tr>
            <tr>
              <th className="px-4 py-4 text-left font-medium text-white">提供時期</th>
              <td className="px-4 py-4">契約成立および入金確認後、合意した開始日より提供を開始します。</td>
            </tr>
            <tr>
              <th className="px-4 py-4 text-left font-medium text-white">返品・キャンセル</th>
              <td className="px-4 py-4">
                デジタル役務の性質上、提供開始後の返金は原則不可です。
                ただし、当方都合で提供不能となった場合は未提供分に限り協議の上で返金対応します。
              </td>
            </tr>
            <tr>
              <th className="px-4 py-4 text-left font-medium text-white">表現およびサービスに関する注意書き</th>
              <td className="px-4 py-4">
                本サービスは成果を保証するものではありません。SNSプラットフォームの規約変更、アルゴリズム変更、
                競合状況等により、期待される結果が得られない場合があります。
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-xs text-white/50">制定日: 2026年2月14日</p>
      <p className="text-xs text-white/50">
        参考: 電話番号を常時公開する場合は、上記「請求があった場合に遅滞なく開示」を実番号へ差し替えてください。
      </p>
    </div>
  );
}
