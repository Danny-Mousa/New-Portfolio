import Link from "next/link";

const sections = [
  { title: "about", href: "/about-me" },
  { title: "resume", href: "/resume" },
  { title: "portfolio", href: "/portfolio" },
  { title: "blog", href: "/blog" },
  { title: "contact", href: "/contact-me" },
];

function PortfolioNavigator() {
  return (
    <nav className="flex gap-1 sm:gap-2 md:gap-4 p-3 sm:p-4 md:p-6 border-b border-border overflow-x-auto scrollbar-hide">
      {sections.map((section) => (
        <Link
          key={section.title}
          href={section.href}
          className={` cursor-pointer px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium capitalize transition-colors whitespace-nowrap flex-shrink-0`}
          // className={` cursor-pointer px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium capitalize transition-colors whitespace-nowrap flex-shrink-0 ${
          //   activeSection === section.title
          //     ? "text-foreground bg-accent/10"
          //     : "text-muted-foreground hover:text-foreground hover:bg-secondary"
          // }`}
        >
          {section.title}
        </Link>
      ))}
    </nav>
  );
}

export default PortfolioNavigator;
