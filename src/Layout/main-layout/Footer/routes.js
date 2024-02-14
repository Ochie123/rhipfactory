// react-router-dom components

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const router = {
  brand: "Moneysites",
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/Moneysite/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/moneysite",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/moneysite",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://moneysite.com/about-us" },
        { name: "freebies", href: "https://moneysite.com/freebies" },
        { name: "blog", href: "https://moneysite.com/blog" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "affiliate program", href: "https://moneysite.com/affiliate-program"},
        { name: "Our Works", href: "https://moneysite.com/"},
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "https://moneysite.com/contact-us"},
        { name: "knowledge center",href: "https://moneysite.com/knowledge-center" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://moneysite.com/terms-conditions"},
        { name: "privacy policy", href: "https://moneysite.com/privacy-policy" },
      ],
    },
  ],
};

export default router;