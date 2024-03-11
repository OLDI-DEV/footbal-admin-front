import styled from "styled-components";
import { StatsIcon, NoStatsIcon } from "../reusedComponents/Icons";
import { useState } from "react";
import AddStatsModal from "./AddStatsModal";
const NextTrainingTableStatsItem = ({ isActiveStats, playerStatsProps }) => {
  const [isActiveStatsModal, setIsActiveStatsModal] = useState(false);
  const openStatsModal = () => {
    setIsActiveStatsModal(true);
  };
  const closeStatsModal = () => {
    setIsActiveStatsModal(false);
  };
  if (isActiveStats === true) {
    return (
      <>
        <StatsContainer
          isActiveStats={isActiveStats}
          onClick={() => {
            openStatsModal();
          }}
        >
          <StatsIcon />
          <StatsLabel isActiveStats={isActiveStats}>Статистика</StatsLabel>
        </StatsContainer>
        {isActiveStatsModal && (
          <AddStatsModal
            playerStatsProps={playerStatsProps}
            closeStatsModal={closeStatsModal}
          />
        )}
      </>
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
  margin: 0 auto;
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
