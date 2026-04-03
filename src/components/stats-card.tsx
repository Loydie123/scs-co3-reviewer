interface StatsCardProps {
  icon: string;
  label: string;
  value: string | number;
  color?: "blue" | "green" | "orange" | "purple";
}

export function StatsCard({ icon, label, value, color = "blue" }: StatsCardProps) {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-emerald-50 text-emerald-600",
    orange: "bg-orange-50 text-orange-600",
    purple: "bg-purple-50 text-purple-600",
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      <div className={`w-12 h-12 ${colorClasses[color]} rounded-xl flex items-center justify-center mb-3`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="text-2xl font-bold text-slate-900 mb-1">{value}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  );
}
