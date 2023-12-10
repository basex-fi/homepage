import { Button, Link } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Welcome() {
  return (
    <div className="container max-w-6xl">
      <div className="flex justify-between relative overflow-hidden bg-primary rounded-xl p-6 lg:p-8 items-center gap-6">
        <div className="flex flex-col z-10">
          <p className="text-xl font-bold text-background">Begin Now</p>
          <p className="mt-2 text-background/60">
            Start building your passive income streams right away.
          </p>
        </div>
        <Button
          color="primary"
          className="z-10"
          as={Link}
          href="https://app.basex.fi/swap"
        >
          Get started
          <ArrowRight className="w-[1rem] h-[1rem]" />
        </Button>
        <div className="absolute z-0 -top-10 bottom-0 right-0 flex justify-end w-[40%] lg:w-[30%]">
          <Image src="/ellipse.png" alt="bg" className="w-full" fill={true} />
        </div>
      </div>
    </div>
  );
}
