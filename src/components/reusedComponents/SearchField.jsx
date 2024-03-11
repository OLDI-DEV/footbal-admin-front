import styled from "styled-components";
import { TextField } from "@mui/material";
import { useState } from "react";
const SearchField = () => {
  const [searchPlayer, setSearchPlayer] = useState("");
  return (
    <SearchFieldContainer>
      <CustomTextField
        defaultValue={searchPlayer}
        label={"Поиск футболиста"}
        onChange={(e) => setSearchPlayer(e.target.value)}
      />
    </SearchFieldContainer>
  );
};

export default SearchField;

const SearchFieldContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
`;

const CustomTextField = styled(TextField)`
  width: 350px;
  padding: 16px 12px;
`;
