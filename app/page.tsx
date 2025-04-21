import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import NextLink from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 py-8 md:py-10 h-full">
      <div className="flex flex-col max-w-xl text-center justify-center gap-10">
        <span className={title({ color: "violet" })}>{siteConfig.name}</span>
        <span className={title({ color: "blue" })}>
          {siteConfig.description}
        </span>
      </div>

      <div className="flex pt-10">
        <NextLink
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.navItems[2].href}
        >
          {`Let's go to`}{" "}
          <span className="bg-gradient-to-r from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent font-bold">
            Memes
          </span>
        </NextLink>
      </div>
    </section>
  );
}
