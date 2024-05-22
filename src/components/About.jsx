import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[240px]  w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-graddient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-4 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 bg-white rounded-full object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview .</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]"
      >
        I am writing to express my interest in the Full Stack Web Developer
        position at ITVISIONHUB Co, Ltd. I am confident I can contribute
        effectively to your team with a robust background in Node.js and
        React.js development and hands-on experience building dynamic web
        applications.
        <br />
        <br />
        During my tenure at ITVISIONHUB Co., Ltd in Yangon, Myanmar, I gained
        invaluable experience developing Learning Management Systems (LMS) and
        information-sharing websites. My technical skills include proficiency in
        JavaScript, Node.js, React.js, MongoDB, and other essential full-stack
        development technologies and tools. At ITVISIONHUB, I played a key role
        in developing an LMS platform. My responsibilities included implementing
        user account management, defining training requirements, integrating
        payment systems using Stripe.js, and ensuring a responsive design for
        optimal user experience. Additionally, I improved Node.js performance
        through load balancing, clustering, and optimization techniques,
        enhancing web application performance.
        <br />
        <br />
        My work on MYANFOBASE, a Myanmar information-sharing website, showcased
        my expertise in both frontend and backend development. Utilizing
        Next.js, Tailwind CSS, Express.js, and MongoDB, I created interactive,
        user-friendly interfaces while ensuring seamless functionality across
        the stack. I am particularly excited about the opportunity to bring my
        technical skills and passion for web development.I am available for an
        interview at your earliest convenience and can be reached via email at
        khunkyaw.tunwin95dev@gmail.com or phone at +66 094 473 9608.
      </motion.p>

      <div className="mt-20 flex justify-center flex-wrap gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
