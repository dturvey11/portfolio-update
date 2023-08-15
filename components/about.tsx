"use client";

import React from 'react'
import SectionHeading from './section-heading';
import {motion} from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {

  const { ref } =useSectionInView('About');

  return (
    <motion.section 
    ref = {ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.175}}
    id="about">
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-3">
        I have recently graduated from <span className="font-medium">The Ohio State University</span> with a degree in <span className="font-medium">Computer Science and Engineering</span>. 
        During my time in school, I was given the opportunity to explore many different areas in Computer Science including: <span className="font-medium">Web Development, Game Development, and Data Science</span>. 
        I have found a <span className="underline">love</span> for learning new technologies. 
        My current favorite technologies to work with include: <span className="font-medium">React, Node.js, Express.js, and MongoDB</span>. 
        I am currently searching for my <span className="font-medium">first full-time position</span> as a software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, playing sports, and hanging out with my friends. I also enjoy{" "}
        <span className="font-medium">learning new skills</span>. I enjoy learning slight of hand card tricks. 
        I also enjoy playing pickleball.
      </p>
    </motion.section>
  )
}
