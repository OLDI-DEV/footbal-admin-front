import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import styled from "styled-components";

export const CustomTableCellHead = styled(TableCell)`
  color: #ccc !important;
  font-family: Roboto !important;
  font-size: 14px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 24px !important;
  text-align: center !important;
  display: flex;
  justify-content: center;
  background-color: #fff !important;
  border-radius: 8px !important;
`;

export const CustomTableCellBody = styled(TableCell)`
  color: #595959 !important;
  font-family: Roboto !important;
  font-size: 16px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 24px !important;
  text-align: center !important;
  background-color: #fff !important;
  border-bottom: 1px solid #e6e6e6 !important;
  border-radius: 8px !important;
  max-width: fit-content !important;
`;
export const CustomTableCellRow = styled(TableCell)`
  color: #595959 !important;
  font-family: Roboto !important;
  font-size: 16px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 24px !important;
  text-align: center !important;
  display: flex !important;
  justify-content: center !important;
  background-color: #fff !important;
`;

export const CustomTable = styled(Table)`
  background: #4a69bd !important;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15) !important;
  background-color: #fff !important;
  max-height: 90vh !important;
  width: 100% !important;
  overflow-y: scroll !important;
`;

export const CustomTableRow = styled(TableRow)`
  color: #595959 !important;
  font-family: Roboto !important;
  font-size: 16px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 24px !important;
  text-align: center !important;
  background-color: #fff !important;
  border-bottom: 1px solid #e6e6e6 !important;
`;

export const CustomTableHead = styled(TableHead)``;
export const CustomTableBody = styled(TableBody)``;

/* export const TableContainer = styled.div`
  max-height: 90vh ;
  width: 100% ;
  overflow-y: scroll;
`; */
