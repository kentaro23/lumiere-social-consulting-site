import { servicePackages } from '@/lib/site';

export function PricingTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <table className="min-w-full divide-y divide-white/10 text-left text-sm">
        <thead className="bg-white/5 text-white/90">
          <tr>
            <th className="px-4 py-3 font-medium">プラン</th>
            <th className="px-4 py-3 font-medium">内容</th>
            <th className="px-4 py-3 font-medium">料金目安</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-[#101010] text-white/80">
          {servicePackages.map((service) => (
            <tr key={service.name}>
              <td className="px-4 py-4 font-medium text-white">{service.name}</td>
              <td className="px-4 py-4">{service.deliverables.join(' / ')}</td>
              <td className="px-4 py-4">{service.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
