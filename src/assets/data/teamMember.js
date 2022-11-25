import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

import avatarThumb1 from "../images/avatar.png";

const data = [
  {
    avatar: avatarThumb1,
    name: "Abubakardev",
    designation: "Founder | Developer ",
    socialLinks: [
      {
        icon: <FaLinkedinIn />,
        url: "https://www.linkedin.com/in/imam-abubakar-3b246a217/",
      },
      {
        icon: <FaTwitter />,
        url: "https://twitter.com/abubakardev",
      },
      {
        icon: <FaInstagram />,
        url: "https://instagram.com/abubakardev",
      },
    ],
  },
];

export default data;
