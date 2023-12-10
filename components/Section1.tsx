"use client";

import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Section1() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="container max-w-6xl flex relative py-10 items-center gap-10"
    >
      <div className="w-[50%] flex items-center justify-center absolute lg:static top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] lg:translate-y-0 lg:translate-x-0 lef:left-0 lg:top-0 opacity-20 lg:opacity-100">
        <Image
          src="/section1/layer1.png"
          width={1340}
          height={1436}
          className="w-[60%]"
          alt="section1"
        />
        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 3,
          }}
          className="absolute w-[13%] top-[10%] left-[23%]"
        >
          <Image
            src="/section1/layer2.png"
            width={272}
            height={326}
            alt="layer2"
            className="w-full"
          />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 4, 0],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 2,
          }}
          className="absolute w-[10%] top-[8%] right-[25%]"
        >
          <Image
            src="/section1/layer3.png"
            width={220}
            height={225}
            alt="layer3"
            className="w-full"
          />
        </motion.div>
      </div>
      <div className="w-full lg:w-[50%] items-center flex flex-col text-center lg:text-left lg:items-start gap-6 relative z-10">
        <p className="text-2xl font-bold">
          Enjoy Low-Cost and Low-Slippage Swaps
        </p>
        <p>
          BaseX leverages the scalability of Base Chain, Coinbase&apos;s L2
          network built on Ethereum, to reduce gas costs and increase
          throughput. With the power of UniSwap V3 CLMM and our liquidity
          management partners, you can swap tokens with less slippage and more
          efficiency.
        </p>
        <Button
          color="primary"
          variant="bordered"
          className="bg-background"
          as={Link}
          href="https://app.basex.fi"
        >
          Swap now
          <ArrowRight className="w-[1rem] h-[1rem]" />
        </Button>
      </div>
    </motion.div>
  );
}
