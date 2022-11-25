import SectionTitle from "../../components/sectionTitle";
import FeaturesCard from "./featuresCard/FeaturesCard";
import FeaturesStyleWrapper from "./Features.style";
import data from "../../assets/data/featuresData"

const Features = () => {
  return (
    <FeaturesStyleWrapper className="v2_about_us_section" id="about">
      <div className="v2_about_overlay"></div>
      <div className="container">
        <SectionTitle
          title="HOLDER BENEFITS"
          subtitle="Features"
        />

       
        <div className="row features_items_row">
          {data.map((item, i) => (
            <div key={i} className="col-md-4">
              <FeaturesCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </FeaturesStyleWrapper>
  );
};

export default Features;
