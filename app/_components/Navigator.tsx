import { sections } from "@/lib/portfolio-data";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navigator() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-1 sm:gap-2 md:gap-4 p-3 sm:p-4 md:p-6 border-b border-border overflow-x-auto scrollbar-hide">
      {sections.map((section) => (
        <Link
          key={section.title}
          href={section.href}
          className={` cursor-pointer px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium capitalize transition-colors whitespace-nowrap flex-shrink-0 ${
            [section.href, section.href2].includes(pathname)
              ? "text-foreground bg-accent/10"
              : "text-muted-foreground hover:text-foreground hover:bg-secondary"
          }`}
        >
          {section.title}
        </Link>
      ))}
    </nav>
  );
}

export default Navigator;
