import styled from "styled-components";
import { BurgerIcon } from "./reusedComponents/Icons";
const Header = () => {
  return (
    <HeaderContainer>
      <SideBar>
        <BurgerIcon />
        <PageName>Расписание </PageName>
      </SideBar>
      <SideBar>
        <div>ICONS</div>
      </SideBar>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  padding: 13px 24px;
  background-color: #4a69bd;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
`;
const SideBar = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const PageName = styled.div`
  color: #fff;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;
