import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { FaDiscord, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#1a1f36] mt-16">
      <div className="p-10 lg:p-12 container flex flex-col items-center justify-center gap-4">
        <div className="flex items-center">
          <Image src="/logo.png" width={24} height={24} alt="logo" />
          <h1 className="text-lg font-semibold ml-2 text-background">BaseX</h1>
        </div>
        <div className="flex gap-4">
          <Link href="https://github.com/basex-fi" target="_blank">
            <AiFillGithub className="w-[1.2rem] h-[1.2rem] text-primary hover:text-primary/80" />
          </Link>
          <Link href="https://twitter.com/basex_fi" target="_blank">
            <AiFillTwitterCircle className="w-[1.2rem] h-[1.2rem] text-primary hover:text-primary/80" />
          </Link>
          <Link href="https://discord.com/invite/63QCJtzXRk" target="_blank">
            <FaDiscord className="w-[1.2rem] h-[1.2rem] text-primary hover:text-primary/80" />
          </Link>
          <Link href="https://t.me/basex_fi" target="_blank">
            <FaTelegram className="w-[1.2rem] h-[1.2rem] text-primary hover:text-primary/80" />
          </Link>
        </div>
        <span className="text-muted-foreground text-sm">
          Copyright &copy; 2023 BaseX.fi
        </span>
      </div>
    </div>
  );
}
