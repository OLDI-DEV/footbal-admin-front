import styled from "styled-components";
import { TextField } from "@mui/material";
import { useMemo, useState } from "react";
import { players } from "../../demoDataPlayers";

const SearchField = ({ search, setSearch }) => {
  return (
    <SearchFieldContainer>
      <CustomTextField
        value={search.query}
        label={"Поиск футболиста"}
        onChange={(e) => setSearch({ ...search, query: e.target.value })}
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
