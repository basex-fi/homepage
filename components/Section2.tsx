import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Section2() {
  return (
    <div className="container max-w-6xl flex relative py-10 items-center gap-10">
      <div className="w-full lg:w-[50%] items-center flex flex-col text-center lg:text-left lg:items-start gap-6 relative z-10">
        <p className="text-2xl font-bold">Earn Passive Income by Staking</p>
        <p>
          BaseX rewards you for locking your BXT tokens for up to two years,
          giving you voting rights and a share of the trading fees. Your veBXT
          tokens also receive more BXT as rewards via rebasing. You can also
          customize the price range of your liquidity, increasing your returns
          and earning more fees, or provide liquidity by gauge to earn BXT
          emission.
        </p>
        <Button color="primary" variant="bordered" className="bg-background" as={Link} href="https://app.basex.fi/gauges">
          Start staking
          <ArrowRight className="w-[1rem] h-[1rem]" />
        </Button>
      </div>
      <div className="w-[50%] flex items-center justify-center absolute lg:static top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] lg:translate-y-0 lg:translate-x-0 lef:left-0 lg:top-0 opacity-20 lg:opacity-100">
        <Image
          src="/section2.png"
          width={1280}
          height={1504}
          className="w-[60%]"
          alt="section1"
        />
      </div>
    </div>
  );
}
