"use client";

import { motion } from "framer-motion";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
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
          src="/section3/layer1.png"
          width={1280}
          height={1340}
          className="w-[60%]"
          alt="section1"
        />
        <motion.div
          animate={{
            y: [0, 4, 0],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 2,
          }}
          className="absolute w-[10%] left-[25%] bottom-[22%]"
        >
          <Image
            src="/section3/layer2.png"
            width={209}
            height={208}
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
          className="absolute w-[9%] right-[26%] bottom-[22%]"
        >
          <Image
            src="/section3/layer3.png"
            width={184}
            height={188}
            alt="layer3"
            className="w-full"
          />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 4,
          }}
          className="absolute w-[17%] left-[42%] top-[22%]"
        >
          <Image
            src="/section3/layer4.png"
            width={374}
            height={409}
            alt="layer4"
            className="w-full"
          />
        </motion.div>
      </div>
      <div className="w-full lg:w-[50%] items-center flex flex-col text-center lg:text-left lg:items-start gap-6 relative z-10">
        <p className="text-2xl font-bold">Boost Liquidity for Base Chain</p>
        <p>
          BaseX enables easy access and movement of users and assets from
          Ethereum L1, Coinbase, and other EVM chains. By utilizing the ve (3,3)
          mechanism, BaseX can create a positive feedback loop that increases
          the liquidity and value of the protocols on Base Chain.
        </p>
        <Button
          color="primary"
          variant="bordered"
          className="bg-background"
          as={Link}
          href="https://app.basex.fi/locks"
        >
          Get vote
          <ArrowRight className="w-[1rem] h-[1rem]" />
        </Button>
      </div>
    </motion.div>
  );
}
