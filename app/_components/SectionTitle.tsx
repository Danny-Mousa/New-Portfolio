function SectionTitle({ title }: { title: string }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-4">{title}</h2>
      <div className="w-10 h-1 bg-accent rounded-full mb-6" />
    </div>
  );
}

export default SectionTitle;
