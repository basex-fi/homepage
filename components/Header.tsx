import Image from "next/image";
import NextLink from "next/link";
import { Button, Link } from "@nextui-org/react";

const links = [
  {
    href: "https://medium.com/@basex_fi",
    title: "Blog",
  },
  {
    href: "https://basex.gitbook.io/docs",
    title: "Docs",
  },
  {
    href: "https://linktr.ee/basex_fi",
    title: "Linktree",
  },
];

export default function Header() {
  return (
    <header>
      <div className="container max-w-6xl flex justify-between py-4 md:py-6 lg:py-8">
        <div className="flex items-center">
          <Image src="/logo.png" width={36} height={36} alt="logo" />
          <h1 className="text-2xl font-bold ml-2 text-primary">BaseX</h1>
        </div>
        <div className="flex gap-6 items-center">
          <div className="gap-6 hidden md:flex">
            {links.map((link, idx) => (
              <NextLink
                href={link.href}
                target="_blank"
                className="hover:text-primary"
                key={idx}
              >
                {link.title}
              </NextLink>
            ))}
          </div>
          <Button
            color="primary"
            variant="bordered"
            as={Link}
            href="https://app.basex.fi"
          >
            Launch App
          </Button>
        </div>
      </div>
    </header>
  );
}
