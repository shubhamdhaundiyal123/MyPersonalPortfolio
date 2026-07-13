type Props = {
  title: string;
  value: string;
};

export default function InfoCard({ title, value }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-blue-500 transition">
      <p className="text-gray-400 text-sm">{title}</p>

      <h3 className="text-xl font-bold mt-2">{value}</h3>
    </div>
  );
}
