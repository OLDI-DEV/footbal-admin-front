import styled from "styled-components";
import { VisitingIcon, NoVisitingIcon } from "../reusedComponents/Icons";
const NextTrainingTableVisitingItem = ({ isVisiting }) => {
  if (isVisiting === true) {
    return (
      <VisitingContainer>
        <VisitingIcon />
        <VisitingLabel isVisiting={isVisiting}>Присутствовал</VisitingLabel>
      </VisitingContainer>
    );
  } else {
    return (
      <VisitingContainer>
        <NoVisitingIcon />
        <VisitingLabel isVisiting={isVisiting}>Отсутсвовал</VisitingLabel>
      </VisitingContainer>
    );
  }
};

export default NextTrainingTableVisitingItem;

const VisitingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  /* width: fit-content; */
`;

const VisitingLabel = styled.div`
  color: ${(props) => (props.isVisiting ? "#4AB538" : "#B53838")};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
