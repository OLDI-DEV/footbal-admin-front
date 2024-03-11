import styled from "styled-components";
import { ThemeIcon } from "../reusedComponents/Icons";
const ScheduleTableThemeItem = ({ theme }) => {
  return (
    <ThemeContainer>
      <ThemeIcon />
      <ThemeLabel>{theme}</ThemeLabel>
    </ThemeContainer>
  );
};

export default ScheduleTableThemeItem;

const ThemeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  /* width: fit-content; */
`;

const ThemeLabel = styled.div`
  color: #60a3bc;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
