import { CheckCircle2 } from "lucide-react";

interface Props {
  items: string[];
}

export default function FeatureList({ items }: Props) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-3">
          <CheckCircle2 size={18} className="text-green-400" />

          <span className="text-gray-300">{item}</span>
        </div>
      ))}
    </div>
  );
}
