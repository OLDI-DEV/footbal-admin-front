import styled from "styled-components";
import { MoreInfoIcon } from "../reusedComponents/Icons";
import { useState } from "react";
import MoreInfoModal from "./MoreInfoModal";
const NextTrainingTableMoreInfoItem = ({ playerStatsProps }) => {
  const [isActiveMoreInfoModal, setIsActiveMoreInfoModal] = useState(false);
  const openMoreInfoModal = () => {
    setIsActiveMoreInfoModal(true);
  };
  const closeMoreInfoModal = () => {
    setIsActiveMoreInfoModal(false);
  };
  return (
    <>
      {" "}
      <MoreInfoContainer
        onClick={() => {
          openMoreInfoModal();
        }}
      >
        <MoreInfoIcon />
        <MoreInfoLabel>Подробнее</MoreInfoLabel>
      </MoreInfoContainer>
      {isActiveMoreInfoModal && (
        <MoreInfoModal
          playerStatsProps={playerStatsProps}
          closeMoreInfoModal={closeMoreInfoModal}
        />
      )}
    </>
  );
};

export default NextTrainingTableMoreInfoItem;

const MoreInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  width: fit-content;
  border-radius: 4px;
  border: 1px solid #4a69bd;
  padding: 12px 24px;
`;

const MoreInfoLabel = styled.div`
  color: #595959;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
