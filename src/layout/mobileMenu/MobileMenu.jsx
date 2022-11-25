import { useState } from "react";
import { useModal } from "../../utils/ModalContext";
import { FaDiscord, FaTwitter, FaWallet } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import Button from "../../components/button";
import openseaIcon from "../../assets/images/icon/opensea.svg";
import Dropdown from 'react-bootstrap/Dropdown';
import { isMetaMaskInstalled } from '../../config';
import MobileMenuStyleWrapper from "./MobileMenu.style";

const MobileMenu = ({ mobileMenuhandle }) => {
  const { walletModalHandle, metamaskModalHandle, account, disconnectWalletFromApp } = useModal();
  const [isSubmenu, setSubmenu] = useState(false);

  const handleSubmenu = () => {
    setSubmenu(!isSubmenu);
  };

  const substr = (str, n) =>{
    return str.length > n ? str.substr(0, n -1) : str;
  }

  const handleWalletConnect = async () =>{
    if(!isMetaMaskInstalled()){
      metamaskModalHandle();
    }else{
      walletModalHandle();
    }
  }
  return (
    <MobileMenuStyleWrapper className="tda_mobile_menu">
      <div className="tda_mobile_menu_content">
        <div className="mobile_menu_logo">
          THE DARK ARTS
          <button
            className="mobile_menu_close_btn"
            onClick={() => mobileMenuhandle()}
          >
            {" "}
            <BsXLg />{" "}
          </button>
        </div>
        <div className="tda_mobile_menu_list">
          <ul>
            <li className="mobile_menu_hide">
              <a href="#home">Home</a>
            </li>
            <li className="mobile_menu_hide">
              <a href="#about">About</a>
            </li>
            <li className="mobile_menu_hide">
              <a href="#roadmap">Roadmap</a>
            </li>
            <li className="mobile_menu_hide">
              <a href="#creator">Creator</a>
            </li>
            <li className="mobile_menu_hide">
              <a href="#faq">FAQ</a>
            </li>
           
          </ul>
        </div>
        <div className="mobile_menu_social_links">
          <a href="https://testnets.opensea.io/collection/dark-arts-the-pawns"  target="_blank" rel="noreferrer">
            <img src={openseaIcon} alt="tda social icon" />
          </a>
          <a href="https://twitter.com/thedarkarts_nft"  target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://discord.gg/Gm3DjV9t" target="_blank" rel="noreferrer">
            <FaDiscord />
          </a>
        </div>
        { account ?
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="connect_btn">
              { substr(account.toString(), 15) }
            </Dropdown.Toggle>
      
            <Dropdown.Menu>
              <Dropdown.Item href="# " onClick={() => disconnectWalletFromApp() }>Disconnect</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          :
          <Button
            sm
            variant="hovered"
            className="connect_btn"
            onClick={() => handleWalletConnect()}
          >
            <FaWallet />
            Connect
          </Button>

          }
      </div>
    </MobileMenuStyleWrapper>
  );
};

export default MobileMenu;
