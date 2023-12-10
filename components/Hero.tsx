"use client";

import { motion } from "framer-motion";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Images = () => {
  return (
    <motion.div
      className="w-full relative px-6"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
    >
      <Image
        src="/hero/layer1.png"
        width={668}
        height={634}
        alt="layer1"
        className="w-full"
      />
      <motion.div
        className="absolute top-[20%] left-[45%] w-[20%]"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 4,
        }}
      >
        <Image
          src="/hero/layer2.png"
          width={178}
          height={141}
          alt="layer2"
          className="w-full"
        />
      </motion.div>
      <motion.div
        className="absolute top-[8%] right-[15%] w-[3%]"
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 3,
        }}
      >
        <Image
          src="/hero/layer3.png"
          width={25}
          height={56}
          alt="layer3"
          className="w-full"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-[48%] left-[25%] w-[6%]"
        animate={{
          y: [0, 4, 0],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 3,
        }}
      >
        <Image
          src="/hero/layer4.png"
          width={49}
          height={46}
          alt="layer4"
          className="w-full"
        />
      </motion.div>
    </motion.div>
  );
};

const leftContainerVariants = {
  enter: {
    transition: { staggerChildren: 0.05 },
  },
  exit: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

const leftChildVariants = {
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 500, velocity: -100 },
      duration: 0.1,
    },
  },
  exit: {
    y: 5,
    opacity: 0,
    transition: {
      y: { stiffness: 500 },
    },
  },
};

export default function Hero() {
  return (
    <div className="container max-w-6xl flex flex-col lg:flex-row gap-6 justify-between py-12 lg:py-4 items-center relative">
      <motion.div
        initial="exit"
        animate="enter"
        variants={leftContainerVariants}
        className="flex flex-col w-full lg:w-[50%] items-center lg:items-start text-center lg:text-left z-10"
      >
        <motion.p className="text-3xl font-bold" variants={leftChildVariants}>
          Streamlining Your DeFi Journey
        </motion.p>
        <motion.p
          className="text-3xl font-bold mt-2"
          variants={leftChildVariants}
        >
          <span className="text-primary">Effortless</span> and{" "}
          <span className="text-primary">Efficient</span>
        </motion.p>
        <motion.p className="text-lg mt-4" variants={leftChildVariants}>
          Your gateway to seamless DeFi experiences with low-cost, low-slippage
          swaps powered by Coinbase&apos;s Base Chain, UniSwap V3 CLMM and
          ve(3,3) model.
        </motion.p>
        <motion.p
          className="text-lg lg:mt-6 mt-10"
          variants={leftChildVariants}
        >
          <Button color="primary" as={Link} href="https://app.basex.fi">
            Get started <ArrowRight className="w-[1rem] h-[1rem]" />
          </Button>
        </motion.p>
      </motion.div>
      <div className="w-[55%] lg:w-[42%] absolute lg:relative top-[50%] -translate-y-[50%] lg:translate-y-0 lg:top-0 opacity-20 lg:opacity-100">
        <Images />
      </div>
    </div>
  );
}
