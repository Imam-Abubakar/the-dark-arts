import { FiCheck, FiMinus } from "react-icons/fi";
import thumb1 from "../images/art/1.png";
import thumb2 from "../images/art/2.png";
import thumb3 from "../images/art/3.png";

const data = [
  {
    title: "Phase 01",
    thumb: thumb1,
    features: [
      {
        icon: <FiCheck />,
        text: "Creation of DARK ARTS : THE PAWN collection",
      },
      {
        icon: <FiCheck />,
        text: "Publish Token Name",
      },
      {
        icon: <FiCheck />,
        text: "Development of NFT Minting Interface",
      },
      {
        icon: <FiCheck />,
        text: "Project White Paper",
      },
    ],
  },

  {
    title: "Phase 02",
    thumb: thumb2,
    features: [
      {
        icon: <FiCheck />,
        text: "DARK ARTS : THE KNIGHTS Collection Release & Minting",
      },
      {
        icon: <FiCheck />,
        text: "DARK Public Token Launch",
      },
      {
        icon: <FiCheck />,
        text: "Metaverse Smart Contract Creation & Integration",
      },
      {
        icon: <FiCheck />,
        text: "Development of NFT Mint Page",
      },
    ],
  },

  {
    title: "Phase 03",
    thumb: thumb3,
    features: [
      {
        icon: <FiCheck />,
        text: "Migration to Polygon Blockchain",
      },
      {
        icon: <FiCheck />,
        text: "Secret Collection Launch.",
      },
      {
        icon: <FiMinus />,
        text: "NFT Airdrop to testnet holders",
      },
      {
        icon: <FiMinus />,
        text: "Marketing project on social networks",
      },
      {
        icon: <FiMinus />,
        text: "Initial Metaverse Game Release",
      },
    ],
  },
];

export default data;
