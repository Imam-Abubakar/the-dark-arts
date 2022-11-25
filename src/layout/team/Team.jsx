import SectionTitle from "../../components/sectionTitle";
import TeamMember from "./teamMember"; 
import data from "../../assets/data/teamMember";
import TeamStyleWrapper from "./Team.style";

const Team = () => {
  return (
    <TeamStyleWrapper>
      <div className="tda_team_sect" id="creator"> 
        <div className="container">
          <SectionTitle
            isCenter={true}
            title="MEET THE CREATOR"
            subtitle="CREATOR"
            className="text-center"
          />
          <div className="tda_team_content">
            <div className="row dta_creator">
              {data?.map((member, i) => (
                <div key={i} className="col-lg-3 col-md-4 col-sm-6 ">
                  <TeamMember {...member} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TeamStyleWrapper>
  );
};

export default Team;
