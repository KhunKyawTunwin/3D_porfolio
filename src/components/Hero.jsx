import { motion } from "framer-motion";

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#6ac7f9]" />
          <div className="w-1 sm:h-80 h040 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#6ac7f9]">Khun Kyaw Tun Win</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a passionate Backend Node js developer. I'm currently working
            at ITVisionHub—Pte., Ltd in Myanmar with a strong background in
            creating dynamic and user-friendly websites.
            <br className="sm:block hidden" /> I develop information-sharing
            websites & E-commerce websites, user interfaces, and web
            applications. 🧑‍💻
          </p>
        </div>
      </div>
      {/* <ComputersCanvas /> */}

      <div className="absolute xs:botton-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[54px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
