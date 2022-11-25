import CTA from "../cta";
import { footerLinks } from "../../assets/data/insiteLinks";
import backToTopIcon from "../../assets/images/icon/back_to_top.svg";
import footerShapesLeft from "../../assets/images/icon/footer_shapes_left.png";
import footerShapesRight from "../../assets/images/icon/footer_shapes_right.png";

import FooterStyleWrapper from "./Footer.style";
const Footer = () => {
  return (
    <FooterStyleWrapper>
      <CTA />

      <div className="tda_v1_main_footer">
        <div className="tda_v1_main_footer_overlay"></div>
        <div className="footer_bottom">
          <div className="footer_bottom_content">
            <span className="footer_shapes_left">
              <img src={footerShapesLeft} alt="tda nft footer" />
            </span>
            <span className="footer_shapes_right">
              <img src={footerShapesRight} alt="tda nft footer" />
            </span>
            <div className="container">
              <div className="footer_menu">
                <div className="bottom_footer_left">
                  <div className="logo">
                    <a href="#">
                      THE DARK ARTS
                    </a>
                  </div>
                  <div className="copiright_text">
                    <p>Copyright © 2022 Abubakardev</p>
                  </div>
                </div>
                <a href="# " className="bact_to_top_btn">
                  <img src={backToTopIcon} alt="tda nft back to top" />
                </a>
                <div className="bottom_footer_right">
                  <ul>
                    {footerLinks?.map((item, i) => (
                      <li key={i}>
                        <a href={item.url}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterStyleWrapper>
  );
};

export default Footer;
