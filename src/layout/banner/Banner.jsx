import { useModal } from "../../utils/ModalContext";
import { Slider, SliderItem } from "../../components/slider/Slider";
import Button from "../../components/button";
import BannerV1Wrapper from "./Banner.style";

import imgFrameShape from "../../assets/images/nft/nft-img-shape.png";
import openseaIcon from "../../assets/images/icon/opensea.svg";

import darkArts1 from "../../assets/images/art/2.png";
import darkArts2 from "../../assets/images/art/3.png";
import darkArts3 from "../../assets/images/art/4.png";
import darkArts4 from "../../assets/images/art/5.png";
import darkArts5 from "../../assets/images/art/6.png";
import darkArts6 from "../../assets/images/art/7.png";
import darkArts8 from "../../assets/images/art/1.png";
import overlayImg from "../../assets/images/nft/v4_baner_mesh-grad.png"
import star1 from "../../assets/images/icon/v4_star1.svg"
import star2 from "../../assets/images/icon/v4_star2.svg"
import star3 from "../../assets/images/icon/v4_star3.svg"

import Particle from "./Particles"

const Banner = () => {
  const { mintModalHandle } = useModal();

  const slideImages = [darkArts1, darkArts2, darkArts3, darkArts4, darkArts5, darkArts6]
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 5,
    fade: true,
    autoplaySpeed: 500,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



  return (
    <BannerV1Wrapper id="home">
      <Particle />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-0">
            <div className="darkarts_v1_baner_left">
              <div className="banner_title">
                <h2 className="concept_text" id="mint">Minecraft-like, 
                </h2>
                <h2>Metaverse NFTs</h2>
              </div>

              <div className="coin_info">
                <h4>Telling a old war story in a new age, a peaceful time..or so we thought.</h4>
                <h4>...on Polygon Mumbai Testnet</h4>
              </div>

              <div className="banner_buttons">
                <Button lg variant="mint"  onClick={() => mintModalHandle()}>
                  {" "}
                  Mint now
                </Button>
                <a href="https://testnets.opensea.io/collection/dark-arts-the-pawns" target="_blank" rel="noreferrer">
                <Button lg variant="outline" className="opensea_btn">
                  <img src={openseaIcon} alt="" />
                  View on Opensea
                </Button>
                </a>
                
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-1">
            <div className="darkarts_v4_baner_right">
              <div className="banner_card banner_card_angle">
                <img src={darkArts8} className="banner_img" alt="thumb" />
                <div className="banner_card_shapes">
                  <img src={imgFrameShape} alt="shape" />
                </div>
              </div>
              <div className="banner_card">
                <Slider {...settings}>
                  {slideImages?.map((thumb, idx) => (
                    <SliderItem key={idx}>
                      <img src={thumb} alt="thumb" />
                    </SliderItem>
                  ))}
                </Slider>
                <div className="banner_card_shapes">
                  <img src={imgFrameShape} alt="shape" />
                </div>
              </div>

             
              <div className="star_particles">
                <span className="star_1">
                  <img src={star1} alt="icon" />
                </span>
                <span className="star_2">
                  <img src={star2} alt="icon" />
                </span>
                <span className="star_3">
                  <img src={star3} alt="icon" />
                </span>
              </div>
             
              <span className="bg_overlay">
                <img src={overlayImg} alt="thumb" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </BannerV1Wrapper>
  );
};

export default Banner;
