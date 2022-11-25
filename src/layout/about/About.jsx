import Counter from "../../components/counter";
import SectionTitle from "../../components/sectionTitle";
import data from "../../assets/data/aboutData";

import AboutStyleWrapper from "./About.style";

const About = () => {
  const { aboutDescription1, aboutDescription2 } = data;
  return (
    <AboutStyleWrapper id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-left-item">
              <div className="counter_item">
                <h3>
                  <Counter
                    end={1000}
                    decimal="."
                    decimals={1000 % 1 !== 0 ? "2" : "0"}
                    suffix={""}
                  />
                </h3>
                <h6>Current Total Items</h6>
              </div>
              <div className="counter_item">
                <h3>
                  <Counter
                    end={0.03}
                    decimal="."
                    decimals={0.03 % 1 !== 0 ? "2" : "0"}
                    suffix={""}
                  />
                </h3>
                <h6>NFT Mint Price (The Pawns)</h6>
              </div>
              <div className="counter_item">
                <h3><span>0xcb...1eDa</span></h3>
                <h6>Address</h6>
              </div>
              <div className="counter_item">
                <h3>
                 <span>Mumbai</span>
                </h3>
                <h6>
                  Chain
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="v1_about_us_right_sect">
              <SectionTitle title="ABOUT THE DARK ARTS" subtitle="THE STORY " />
              <div className="v1_about_us_right_text">
                <p>{aboutDescription1}</p>
                <p>{aboutDescription2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutStyleWrapper>
  );
};

export default About;
