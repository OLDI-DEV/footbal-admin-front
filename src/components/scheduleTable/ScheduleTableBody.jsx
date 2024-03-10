import styled from "styled-components";
import {
  CustomTableCellHead,
  CustomTableRow,
  CustomTableHead,
  CustomTableBody,
  CustomTableCellBody,
} from "../reusedComponents/customTable/CustomTable";
const ScheduleTableBody = () => {
  return (
    <CustomTableBody>
      <CustomTableCellBody>23.12.2000 19:00</CustomTableCellBody>
      <CustomTableCellBody>ул. Маршала Еврея 21</CustomTableCellBody>
      <CustomTableCellBody></CustomTableCellBody>
    </CustomTableBody>
  );
};

export default ScheduleTableBody;
