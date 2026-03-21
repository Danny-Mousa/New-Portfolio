import { Link } from "lucide-react";

interface ItemDetailsProps {
  item: {
    title: string;
    organization: string;
    period: string;
    description: string;
    url?: string;
  };
}

function ItemDetails({ item }: ItemDetailsProps) {
  return (
    <div className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
      <h4
        className={`text-base md:text-lg hover:${item.url ? "text-accent" : "text-foreground"}  font-semibold text-foreground mb-2`}
      >
        {item.url ? (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {item.title}
            <Link className="text-accent inline w-4 h-4 ml-2" />
          </a>
        ) : (
          item.title
        )}
      </h4>
      <p className="text-xs md:text-sm text-accent mb-2">{item.organization}</p>
      <p className="text-xs md:text-sm text-accent mb-2">{item.period}</p>
      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
        {item.description}
      </p>
    </div>
  );
}

export default ItemDetails;
