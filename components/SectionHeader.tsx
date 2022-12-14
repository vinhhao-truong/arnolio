import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { fades, translates } from "../utils/motion/variants";
import useScrollCheck from "../hooks/useScrollCheck";
import useResponsive from "../hooks/useResponsive";

const SectionHeader: React.FC<{ title: string }> = ({ title }) => {
  const responsive = useResponsive();
  const isDesktop: boolean = ["lg", "xl", "2xl"].includes(responsive);
  const { scrollY } = useScroll();

  // useEffect(() => {
  //   console.log(responsive);
  // }, [responsive]);

  return isDesktop ? (
    <motion.div
      initial={{ x: "-3rem", rotate: -90 }}
      whileInView={{
        ...fades.fadeIn,
        x: 0,
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`font-semibold text-center opacity-0 select-none md:absolute md:-left-10 lg:left-6 xl:left-16 md:top-3/4 lg:top-1/4 md:text-5xl text-6xl`}
    >
      {title}
    </motion.div>
  ) : (
    <div className="mt-4 mb-4 text-3xl font-semibold uppercase lg:mb-2 dark:text-white-theme">
      {title}
    </div>
  );
};

export default SectionHeader;
