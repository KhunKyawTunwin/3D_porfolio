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
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
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
        I am a seasoned full-stack developer with a passion for creating robust
        and dynamic web applications. With expertise in both front-end and
        back-end development, I possess a comprehensive skill set that allows me
        to tackle the entire software development process.
        <br />
        Here's an overview of my experience and skills in Front-End Development:
        I am proficient in HTML, CSS, and JavaScript, with a strong
        understanding of modern front-end frameworks such as React.js. Back-End
        Development: I have extensive experience in server-side programming
        languages such as Node.js.
        <br />I am skilled in using frameworks like Express.js to build scalable
        and efficient back-end systems. I am proficient in database management,
        including designing schemas and writing optimized queries.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]"
      >
        ကျွန်ုပ်သည် ကြံ့ခိုင်ပြီး သွက်လက်သော ဝဘ်အက်ပလီကေးရှင်းများကို ဖန်တီးရန်
        ဝါသနာပါသော ရာသီအလိုက် ပြည့်စုံသော ဆော့ဖ်ဝဲရေးသားသူဖြစ်သည်။ front-end
        နှင့် back-end development နှစ်ခုစလုံးတွင် ကျွမ်းကျင်မှုနှင့်အတူ၊
        ကျွန်ုပ်သည် software development process တစ်ခုလုံးကို
        ဖြေရှင်းနိုင်စေမည့် ပြည့်စုံသောကျွမ်းကျင်မှုအစုံကို ပိုင်ဆိုင်ထားပါသည်။
        <br />
        ဤသည်မှာ Front-End Development တွင် ကျွန်ုပ်၏ အတွေ့အကြုံနှင့်
        ကျွမ်းကျင်မှုများ၏ ခြုံငုံသုံးသပ်ချက်ဖြစ်သည်- ကျွန်ုပ်သည် React.js
        ကဲ့သို့သော ခေတ်မီ front-end frameworks များကို ခိုင်ခိုင်မာမာ
        နားလည်ထားပြီး HTML၊ CSS နှင့် JavaScript ကို ကျွမ်းကျင်ပါသည်။ Back-End
        ဖွံ့ဖြိုးတိုးတက်မှု- Node.js ကဲ့သို့သော server-side programming
        languages များတွင် ကျွန်ုပ်တွင် အတွေ့အကြုံများစွာရှိသည်။
        <br />
        အတိုင်းအတာနှင့် ထိရောက်သော back-end စနစ်များကို တည်ဆောက်ရန်အတွက်
        Express.js ကဲ့သို့သော မူဘောင်များကို အသုံးပြုရာတွင် ကျွမ်းကျင်ပါသည်။
        အစီအစဉ်ရေးဆွဲခြင်းနှင့် ပိုမိုကောင်းမွန်အောင်ပြုလုပ်ထားသော
        မေးခွန်းများရေးသားခြင်းအပါအဝင် ဒေတာဘေ့စ်စီမံခန့်ခွဲမှုတွင်
        ကျွမ်းကျင်ပါသည်။
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
