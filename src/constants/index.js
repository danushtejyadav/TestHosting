import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  Google,
  Apple,
  Ather,
  axio,
  BasF,
  coindcx,
  Flipkart,
  Giva,
  Lockheedmartin,
  McDonalds,
  Microsoft,
  Nokia,
  UnitedNations,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "What we offer",
    url: "#what_we_offer",
  },
  {
    id: "1",
    title: "Who we are",
    url: "#who_we_are",
  },
  {
    id: "2",
    title: "Clients",
    url: "#clients",
  },
  {
    id: "3",
    title: "Blogs",
    url: "#blogs",
  },
];


export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "";

export const collabContent = [
  {
    id: "0",
    title: "Black box testing",
    text: collabText,
  },
  {
    id: "1",
    title: "Gray box testing",
  },
  {
    id: "2",
    title: "White box testing",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Google",
    icon: Google,
    width: 45,
    height: 40,
  },
  {
    id: "1",
    title: "Apple",
    icon: Apple,
    width: 45,
    height: 40,
  },
  {
    id: "2",
    title: "Microsoft",
    icon: Microsoft,
    width: 45,
    height: 40,
  },
  {
    id: "3",
    title: "Flipkart",
    icon: Flipkart,
    width: 45,
    height: 40,
  },
  {
    id: "4",
    title: "axio",
    icon: axio,
    width: 45,
    height: 40,
  },
  {
    id: "5",
    title: "McDonalds",
    icon: McDonalds,
    width: 45,
    height: 40,
  },
  {
    id: "6",
    title: "UnitedNations",
    icon: UnitedNations,
    width: 45,
    height: 40,
  },
  {
    id: "7",
    title: "Ather",
    icon: Ather,
    width: 45,
    height: 40,
  },
];

export const clientLogos = [
  { src: Google, alt: "Google" },
  { src: Apple, alt: "Apple" },
  { src: Microsoft, alt: "Microsoft" },
  { src: Flipkart, alt: "Flipkart" },
  { src: Nokia, alt: "Nokia" },
  { src: Ather, alt: "Ather" },
  { src: axio, alt: "axio" },
  { src: BasF, alt: "BasF" },
  { src: Giva, alt: "Giva" },
  { src: Lockheedmartin, alt: "Lockheedmartin" },
  { src: coindcx, alt: "coindcx" },
  { src: McDonalds, alt: "McDonalds" },
  { src: UnitedNations, alt: "UnitedNations" },
];


export const benefits = [
  {
    id: "0",
    title: "Web Application Pentesting",
    text: "Identify and fix any security gaps before they can be exploited, thus enhancing the overall security of the web application.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "1",
    title: "Mobile Application Pentesting",
    text: "Test the unique aspects of mobile platforms, such as the use of mobile device sensors, data storage, and network communication protocols.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "2",
    title: "API Pentesting",
    text: "Examine APIs for vulnerabilities such as API Mass Assignment, broken authentication, SQL Injection, input validation flaws, etc.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  
  {
    id: "3",
    title: "Cloud Pentesting",
    text: "We evaluate the security of a client's infrastructure deployed in the cloud environment. The main focus is to identify weaknesses in the infrastructure, web application firewall, and network configuration files.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Smart Contract Audit",
    text: "Prevent financial losses resulting from contract bugs or security breaches. Fix bugs before the launch and attract investors by providing a robust security posture.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
    
  {
    id: "5",
    title: "Monitoring and Protection",
    text: "Constant protection of your web resource or information system. Forget about DDoS attacks and suspicious activity on a website.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
