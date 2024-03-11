import styled from "styled-components";
import { CloseModalIcon } from "../reusedComponents/Icons";
const MoreInfoModal = ({ closeMoreInfoModal, playerStatsProps }) => {
  console.log(playerStatsProps);
  return (
    <MoreInfoModalWrapper
      onClick={() => {
        closeMoreInfoModal();
      }}
    >
      <MoreInfoModalContainer onClick={(e) => e.stopPropagation()}>
        <InfoPlayer>
          <MoreInfoTitle>Подробно об ученике</MoreInfoTitle>
          <StatsBlock>
            <MoreInfoLabel>Имя</MoreInfoLabel>
            <MoreInfoStat>{playerStatsProps.name}</MoreInfoStat>
          </StatsBlock>
          <StatsBlock>
            <MoreInfoLabel>Команда</MoreInfoLabel>
            <MoreInfoStat>{playerStatsProps.team}</MoreInfoStat>
          </StatsBlock>
        </InfoPlayer>
        <StatsPlayer>
          <MoreInfoTitle>Статистика игрока</MoreInfoTitle>
          <StatsBlock>
            <MoreInfoLabel>Дриблинг</MoreInfoLabel>
            <MoreInfoStat>{playerStatsProps.dribbling}</MoreInfoStat>
          </StatsBlock>
          <StatsBlock>
            <MoreInfoLabel>Скорость</MoreInfoLabel>
            <MoreInfoStat>{playerStatsProps.speed}</MoreInfoStat>
          </StatsBlock>
          <StatsBlock>
            <MoreInfoLabel>Удар</MoreInfoLabel>
            <MoreInfoStat>{playerStatsProps.shot}</MoreInfoStat>
          </StatsBlock>
          <StatsBlock>
            <MoreInfoLabel>Прыжок</MoreInfoLabel>
            <MoreInfoStat>{playerStatsProps.jump}</MoreInfoStat>
          </StatsBlock>
        </StatsPlayer>
        <CloseIconContainer
          onClick={() => {
            closeMoreInfoModal();
          }}
        >
          <CloseModalIcon />
        </CloseIconContainer>
      </MoreInfoModalContainer>
    </MoreInfoModalWrapper>
  );
};

export default MoreInfoModal;

const CloseIconContainer = styled.div`
  position: absolute;
  right: 24px;
  top: 16px;
  cursor: pointer;
`;

const MoreInfoModalWrapper = styled.div`
  position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  cursor: default;
`;

const MoreInfoModalContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 24px;
  z-index: 100;
  min-width: 500px;
  height: fit-content;
  gap: 24px;
  position: relative;
`;

const InfoPlayer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-bottom: 1px solid #e6e6e6;
  padding: 16px 24px;
`;

const StatsPlayer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px 24px;
`;

const MoreInfoTitle = styled.span`
  color: #595959;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  width: fit-content;
`;

const StatsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const MoreInfoLabel = styled.span`
  color: #ccc;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-align-last: left;
`;

const MoreInfoStat = styled.span`
  color: #595959;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-align-last: left;
`;
