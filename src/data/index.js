import { cdnPanel, ziggurat, portal } from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Ziggurat",
    company_name: "Self Employed",
    date: "2024 - Present",
    details: [
      "Building a large project using Nx technology to manage an admin panel, shopping website and its back-end",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "GreenPlus",
    date: "2021 - Present",
    details: [
      "As Front and Developer, I have collaborated in building a large management panel in the field of cloud infrastructure, CDN, Blockchain, Kubernetes that has more than 5,000 customers.",
      "- I worked more than 3 years only as a front-end developer.",
      "- I improved the quality of the panel by updating essential packages, tree shaking, purgecss and making the program reusable.",
      "- Features such as dark mode and multilingual were added to the panel. I used Sentry for debugging.",
      "- For state management, context, redux, redux-toolkit, as well as Axios and RTK-query were used to send requests to the backend.",
      "- Keycloak was used for authentication, which required running the project with Docker.",
    ],
  },
  {
    title: "Junior Developer",
    company_name: "GreenWeb",
    date: "2020 - 2021",
    details: [
      "As Junior Developer, I have collaborated in building a management panel in the field of infrastructure CDN that has more than 3000 customers.",
      "- I joined the CDN team as a rookie developer.",
      "- I spent 3 months learning and researching Content Distribution Networks (CDN).",
      "- Together with a senior developer, I developed the management panel and its APIs to serve other team members and partner companies.",
      "- For 6 months, I used react and Django to develop the panel.",
    ],
  },
];

const portfolio = [
  {
    name: "Front End Developer",
    description:
      "As Front and Developer, I have collaborated in building a large management panel in the field of cloud infrastructure, CDN, Blockchain, Kubernetes that has more than 5,000 customers.",
    image: portal,
  },
  {
    name: "Ziggurat",
    description:
      "Building a large project using Nx technology to manage an admin panel, shopping website and its back-end",
    image: ziggurat,
  },
  {
    name: "Junior Developer",
    description:
      "As Junior Developer, I have collaborated in building a management panel in the field of infrastructure CDN that has more than 3000 customers.",
    image: cdnPanel,
  },
];

export { experiences, portfolio };
