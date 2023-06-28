import {
  reactIcon,
  noSqlicon,
  jestIcon,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  carrent,
  cms,
  bankui,
  threejs,
  travelblog,
  education,
  ecomerceproject,
  itVisionHub,
  UpTech,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Node Js Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: reactIcon,
  },
  {
    title: "MongoDB Database",
    icon: noSqlicon,
  },
  {
    title: "Unit Testing",
    icon: jestIcon,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "UpTech",
    icon: UpTech,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Node Js Developer",
    company_name: "ItVisionHub",
    icon: itVisionHub,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "ItVisionHub",
    icon: itVisionHub,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "ItVisionHub",
    icon: itVisionHub,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Mr Yan Aung",
    designation: "Founder",
    company: "itVisionHub company limited",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Mr Kyaw Swar Htet",
    designation: "ItvisionHub",
    company: "Senior Developer",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Mr Kyaw Myo Htite",
    designation: "Senior Full stack Developer",
    company: "AYA Bank",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-commerce app",
    description:
      " This project based course will introduce you to all of the modern toolchain of a React developer in 2023. Along the way, we will build a massive e-commerce application similar to Shopify using React, Redux, React Hooks, React Suspense, React Router, GraphQL, Context API, Firebase, Redux-Saga, Stripe + more. This is going to be a full stack app (MERN stack), using Firebase.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },

      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/KhunKyawTunwin/02_Redux-Hooks-GraphQL-Stripe-Firebase",
  },

  {
    name: "Content Management Systems",
    description:
      "A content management system (CMS) helps companies manage digital content. Whole teams can use these systems to create, edit, organize, and publish content.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite plugin",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: cms,
    source_code_link: "https://omuk-myanmar.netlify.app/",
  },

  {
    name: "Bank and Payment UI UX Design",
    description:
      "A Payment processor manages the card transaction process by transmitting data from your customer's credit/debit card to your bank and the customer's bank.",
    tags: [
      {
        name: "rectjs",
        color: "blue-text-gradient",
      },
      {
        name: "materialui",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: bankui,
    source_code_link: "https://banks-investment-payment.netlify.app/",
  },

  {
    name: "Travel Blog Website",
    description:
      "In this project, you'll use everything you've learned so far to create a travel website enticing viewers to visit an exotic locale.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "framermotion",
        color: "green-text-gradient",
      },
    ],
    image: travelblog,
    source_code_link: "https://tour-traveller.netlify.app/",
  },

  {
    name: "Free-Online-Education Website",
    description:
      "Build Responsive Online Course Websites With HTML CSS JavaScript | 5 Pages Educational Website. This website is Multi Page Website.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "framermotion",
        color: "green-text-gradient",
      },
      {
        name: "swiper",
        color: "blue-text-gradient",
      },
    ],
    image: education,
    source_code_link: "https://free-online-education.netlify.app/",
  },

  {
    name: "Ecommerce Project",
    description:
      "Ecommerce multi-page website using HTML, CSS, and javascript. Ecommerce website using html5, css3, and ES6 javascript.",
    tags: [
      {
        name: "javasript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "swiper",
        color: "blue-text-gradient",
      },
    ],
    image: ecomerceproject,
    source_code_link: "https://ecommerce-full-respone.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
