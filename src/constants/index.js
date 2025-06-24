import { 
  facebook, 
  instagram, 
  linkedin, 
  twitter, 
  send, 
  shield, 
  star
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Contact Us",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];


export const techStack = [
  {
    id: "tech-1",
    name: "React",
    icon: "⚛️",
    description: "Frontend UI components",
    className: "inline-flex items-center mr-6" // Added horizontal styling
  },
  {
    id: "tech-2",
    name: "Next.js",
    icon: "⏭️",
    description: "Server-side rendering & routing",
    className: "inline-flex items-center mr-6"
  },
  {
    id: "tech-3",
    name: "D3.js",
    icon: "📊",
    description: "Interactive algorithm visualizations",
    className: "inline-flex items-center mr-6"
  },
  {
    id: "tech-4",
    name: "Tailwind CSS",
    icon: "🎨",
    description: "Utility-first CSS styling",
    className: "inline-flex items-center mr-6"
  },
  {
    id: "tech-5",
    name: "Vercel",
    icon: "▲",
    description: "Cloud deployment platform",
    className: "inline-flex items-center" // No margin on last item
  },
];



export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];
