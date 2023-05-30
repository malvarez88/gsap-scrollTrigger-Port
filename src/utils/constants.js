import {
  edlab,
  postapp,
  tmdb,
  pf,
  wa,
  yt,
  ic,
  cebada,
  andes,
  munay,
  nowon,
  vulk,
  daura,
} from "../assets";

const projects = [
  {
    title: "D'Aura Arquitectura",
    slug: "D'Aura",
    description:
      "Web application for an architecture studio in Barcelona. It is made with React, CSS and animated with framer motion. It has a custom cursor.",
    cta: "Deploy",
    image: daura,
    deploy: "https://daura4.netlify.app/",
  },
  {
    title: "Portfolio",
    slug: "Portfolio",
    github: "https://github.com/malvarez88/portfolio/tree/master",
    cta: "Github",
    description:
      "This is my portfolio, actually i don't need to explain a lot, you can see it by yourself 😉 Used technologies: React, Material UI, Javascript, CSS.",
    image: pf,
  },
  {
    title: "Andes Origen - Fresquita",
    slug: "Andes",
    description:
      "Developed a game, using animations in css and jquery. General maintenance of the web application.",
    image: andes,
    cta: "Deploy",
    deploy: "https://andesorigen.com.ar/fresquita/",
  },
  {
    title: "Vulk",
    slug: "Vulk",
    description: "General maintenance of the web application.",
    image: vulk,
  },
  {
    title: "Munay",
    slug: "Munay",
    description: "General maintenance of the web application.",
    image: munay,
    cta: "Deploy",
    deploy: "https://www.somosmunay.org/index.php",
  },
  {
    title: "Nowon",
    slug: "Nowon",
    description: "General maintenance of the web application.",
    image: nowon,
    cta: "Deploy",
    deploy: "https://nowon.us/",
  },
  {
    title: "Cebada Gauchada",
    slug: "Cebada",
    description: "General maintenance of the web application.",
    image: cebada,
    cta: "Deploy",
    deploy: "https://cebadagauchada.com.ar/",
  },

  {
    title: "iCommerce",
    slug: "iCommerce",
    github: "https://github.com/malvarez88/ecommerce-next-tailwind-ts",
    deploy: "https://icommerce-btedsqzk4-malvarez88.vercel.app/",
    cta: "Github",
    ctadeploy: "Deploy",
    description:
      "This is my iCommerce. I've used Typescript, Next.js &  Tailwindcss. For CMS i used Sanity.io, and for Auth, NextAuth. You can also login using Google. Checkout uses Stripe. Please check it out!",
    image: ic,
  },
  {
    title: "Youtube Clone",
    slug: "YT Clone",
    github: "https://github.com/malvarez88/youtube-clone",
    deploy: "https://ytmedia-clone.netlify.app/",
    cta: "Github",
    ctadeploy: "Deploy",
    description:
      "Here, i tried to copy Youtube page. With a Sidebar, a Search bar, and the posibility to watch YT videos and YT Channels. Used technologies: React, Material UI, Javascript, CSS, Axios and the RapidAPI",
    image: yt,
  },
  {
    title: "Post App",
    slug: "Post App",
    github: "https://github.com/malvarez88/memories-project",
    cta: "Github",
    description:
      "I made an App, where you can upload a post, like it & delete it. With JWT Log In, and Google Auth. I have not finished yet, but still working on it. Used technologies: React, Redux, NodeJS, Sequelize, JWT, Google OAuth.",
    image: postapp,
  },
  {
    title: "App for HHRR Managment - Global News",
    slug: "HHRR App",
    github: "https://github.com/diego-scarpati/Global-News-Back",
    cta: "Github",
    description:
      "We made an application for the Global News company in two weeks, which was necessary so that its employees could notify absences and see notifications from their cell phones and at any time. Used technologies: React Native, Redux, NodeJS, Sequelize.",
    image: edlab,
  },
  {
    title: "Ecommerce EDLAB - Backend",
    slug: "EDLAB",
    github: "https://github.com/malvarez88/EDLAB_BACK/tree/master",
    cta: "Github",
    description:
      "We created an ecommerce from scratch, in two weeks. In this project I had to work on the backend. We separate the files in their corresponding folders, so that when checking errors, you would know where to look for them. Used technologies: NodeJS, JWT, Sequelize.",
    image: edlab,
  },
  {
    title: "Weather App",
    slug: "Weather",
    github: "https://github.com/malvarez88/weatherApp/tree/master",
    deploy: "https://weather-app-livid-gamma.vercel.app/",
    cta: "Github",
    ctadeploy: "Deploy",
    description:
      "I made an application to see the weather of any city, using Vanilla Javascript",
    image: wa,
  },
  {
    title: "TMDB - Movie Database",
    slug: "TMDB",
    github: "https://github.com/malvarez88/TMDB/tree/master",
    cta: "Github",
    description:
      "In this proyect i had to use a public API. The one i used was from TMDB. Used technologies: React",
    image: tmdb,
  },
];

const frontend = [
  {
    name: "HTML",
    experience: "Experienced",
  },
  {
    name: "CSS",
    experience: "Experienced",
  },
  {
    name: "Javascript",
    experience: "Experienced",
  },
  {
    name: "Typescript",
    experience: "Intermediate",
  },
  {
    name: "React",
    experience: "Experienced",
  },
  {
    name: "Next",
    experience: "Intermediate",
  },
  {
    name: "Matreial UI",
    experience: "Experienced",
  },
  {
    name: "React Redux",
    experience: "Experienced",
  },
  {
    name: "React Native",
    experience: "Experienced",
  },
  {
    name: "Photoshop",
    experience: "Experienced",
  },
  {
    name: "Illustrator",
    experience: "Experienced",
  },
];

const backend = [
  {
    name: "Node JS",
    experience: "Experienced",
  },
  {
    name: "SQL",
    experience: "Intermediate",
  },
  {
    name: "Sequelize",
    experience: "Experienced",
  },
  {
    name: "Mongo DB",
    experience: "Intermediate",
  },
  {
    name: "Python",
    experience: "Intermediate",
  },
];

export { projects, frontend, backend };
