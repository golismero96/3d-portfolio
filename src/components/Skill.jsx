import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

import { skills } from "../assets";

const ProjectCard = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className="w-full mt-[-2px] flex flex-row gap-5"
    >
      <div className="relative w-full border border-slate-700 rounded-3xl">
        <img
          src={skills}
          alt="skills"
          className="w-full h-auto object-cover rounded-3xl"
        />
      </div>
    </motion.div>
  );
};

const Skill = () => {
  return (
    <div className="text-center md:text-left md:px-20 lg:px-40">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Skills</h2>
      </motion.div>

      <div className="mt-10 md:mt-20 flex flex-col gap-10 md:gap-20">
        <ProjectCard key="Skills" />
      </div>
    </div>
  );
};

export default SectionWrapper(Skill, "skill");
