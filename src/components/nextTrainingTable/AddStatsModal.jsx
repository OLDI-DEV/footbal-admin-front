import styled from "styled-components";
import { CloseModalIcon } from "../reusedComponents/Icons";
import { TextField } from "@mui/material";
import { useState } from "react";
const AddStatsModal = ({ playerStatsProps, closeStatsModal }) => {
  const [inputDribbling, setInputDribbling] = useState(
    playerStatsProps.dribbling
  );
  const [inputSpeed, setInputSpeed] = useState(playerStatsProps.speed);
  const [inputJump, setInputJump] = useState(playerStatsProps.jump);
  const [inputShot, setInputShot] = useState(playerStatsProps.shot);
  const onSubmit = () => {
    closeStatsModal();
  };

  return (
    <MoreInfoModalWrapper
      onClick={() => {
        closeStatsModal();
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
          <MoreInfoTitle>Добавить статистику игрока</MoreInfoTitle>
          <CustomTextField
            defaultValue={inputSpeed}
            label={"Скорость"}
            onChange={(e) => setInputSpeed(e.target.value)}
          />
          <CustomTextField
            defaultValue={inputShot}
            label={"Удар"}
            onChange={(e) => setInputShot(e.target.value)}
          />
          <CustomTextField
            defaultValue={inputJump}
            label={"Прыжок"}
            onChange={(e) => setInputJump(e.target.value)}
          />
          <CustomTextField
            defaultValue={inputDribbling}
            label={"Дриблинг"}
            onChange={(e) => setInputDribbling(e.target.value)}
          />
        </StatsPlayer>
        <CloseIconContainer
          onClick={() => {
            closeStatsModal();
          }}
        >
          <CloseModalIcon />
        </CloseIconContainer>
        <ButtonContainer>
          <SaveBtn
            onClick={() => {
              onSubmit();
            }}
          >
            Сохранить
          </SaveBtn>
        </ButtonContainer>
      </MoreInfoModalContainer>
    </MoreInfoModalWrapper>
  );
};

export default AddStatsModal;

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

const CustomTextField = styled(TextField)`
  width: 175px;
  padding: 16px 12px;
`;

const ButtonContainer = styled.div`
  padding: 0 32px 24px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const SaveBtn = styled.button`
  width: fit-content;
  padding: 12px 24px;
  border-radius: 4px;
  background: #4a69bd;
  border: none;
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
`;
