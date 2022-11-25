import { useModal } from "../../utils/ModalContext";
import { useEffect, useState } from "react";
import { FaGithub, FaWallet } from "react-icons/fa";
import { MdNotes } from "react-icons/md";
import Button from "../../components/button";
import NavWrapper from "./Header.style";
import MobileMenu from "../mobileMenu/MobileMenu";
import { isMetaMaskInstalled } from '../../config';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
  const { 
    walletModalHandle, 
    metamaskModalHandle, 
    account, 
    isWalletAlreadyConnected, 
    disconnectWalletFromApp } = useModal();
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
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
  useEffect(() => {
    const header = document.getElementById("navbar");
    const handleScroll = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });

    return () => {
      window.removeEventListener("sticky", handleScroll);
    };
  }, []);

  useEffect(() => {
    isWalletAlreadyConnected();
  },[isWalletAlreadyConnected]);

  return (
    <NavWrapper className="darkarts_header" id="navbar">
      <div className="container">
       
        <div className="darkarts_menu_sect">
          <div className="darkarts_menu_left_sect">
            <div className="logo">
              <a href="/">
                THE DARK ARTS
              </a>
            </div>
          </div>
          <div className="darkarts_menu_right_sect darkarts_v1_menu_right_sect">
            <div className="darkarts_menu_list">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#roadmap">Roadmap</a>
                </li>
                <li>
                  <a href="#creator">Creator</a>
                </li>
                <li>
                  <a href="#faq">FAQs</a>
                </li>
              </ul>
            </div>
            <div className="darkarts_menu_btns">
              <button className="menu_btn" onClick={() => handleMobileMenu()}>
                <MdNotes />
              </button>
              <a href="https://github.com/Imam-Abubakar/the-dark-arts" target="_blank" rel="noreferrer">
                <Button sm variant="outline" className="github_btn">
                <FaGithub /> Project
              </Button>
              </a>
              { account ?
              <Dropdown>
                <Dropdown.Toggle variant="white" id="dropdown-basic" className="connect_btn">
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
          </div>
        </div>

        {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
      </div>
    </NavWrapper>
  );
};

export default Header;
