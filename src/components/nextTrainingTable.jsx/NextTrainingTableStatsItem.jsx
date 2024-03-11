import styled from "styled-components";
import { StatsIcon, NoStatsIcon } from "../reusedComponents/Icons";
const NextTrainingTableStatsItem = ({ isActiveStats }) => {
  console.log(isActiveStats);
  if (isActiveStats === true) {
    return (
      <StatsContainer isActiveStats={isActiveStats}>
        <StatsIcon />
        <StatsLabel isActiveStats={isActiveStats}>Статистика</StatsLabel>
      </StatsContainer>
    );
  } else {
    return (
      <StatsContainer isActiveStats={isActiveStats}>
        <NoStatsIcon />
        <StatsLabel isActiveStats={isActiveStats}>Статистика</StatsLabel>
      </StatsContainer>
    );
  }
};

export default NextTrainingTableStatsItem;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: fit-content;
  border-radius: 4px;
  border: 1px solid #4a69bd;
  border-color: ${(props) => (props.isActiveStats ? "#4a69bd" : "#CCC")};
  padding: 12px 24px;
  border-radius: 4px;
  cursor: ${(props) => (props.isActiveStats ? "pointer" : "default")};
`;

const StatsLabel = styled.div`
  color: ${(props) => (props.isActiveStats ? "#595959" : "#CCC")};
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
