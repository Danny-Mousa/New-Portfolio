import { aboutData } from "@/lib/portfolio-data";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

function Clients() {
  return (
    <>
      <SectionTitle title="Clients" />
      <div className="relative overflow-hidden pb-4">
        <div className="flex gap-4 md:gap-6 animate-marquee-slow">
          {[...aboutData.clients, ...aboutData.clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24 bg-secondary rounded-xl md:rounded-2xl border border-border flex items-center justify-center  hover:border-accent transition-colors"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={158}
                height={94}
                className="w-full h-full object-fill opacity-100 hover:opacity-70 transition-opacity rounded-xl md:rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Clients;
