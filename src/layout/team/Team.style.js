import styled from "styled-components";

const TeamStyleWrapper = styled.section`
  background: rgba(25, 35, 40, 0.5);
  backdrop-filter: blur(5px);
  position: relative;
  padding: 113px 0px 120px 0px;
  z-index: 1;

  .team_bear_img {
    position: absolute;
    left: 5%;
    top: -150px;
  }

  .dta_creator {
    justify-content: center;
    text-align: center;
    
  }

  .tda_team_content {
    margin-top: 53px;
    position: relative;
    z-index: 1;
    .row {
      row-gap: 30px;
    }
  }
`;

export default TeamStyleWrapper;