type Props = {
  title: string;
};

export default function TechBadge({ title }: Props) {
  return (
    <span className="px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500 text-blue-300 text-sm hover:bg-blue-600 transition">
      {title}
    </span>
  );
}
