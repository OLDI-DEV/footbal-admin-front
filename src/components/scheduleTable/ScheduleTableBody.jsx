import styled from "styled-components";
import {
  CustomTableCellHead,
  CustomTableRow,
  CustomTableHead,
  CustomTableBody,
  CustomTableCellBody,
} from "../reusedComponents/customTable/CustomTable";
import ScheduleTableThemeItem from "./ScheduleTableThemeItem";
const ScheduleTableBody = ({ trainingDate, location, theme }) => {
  return (
    <CustomTableBody>
      <CustomTableCellBody>{trainingDate}</CustomTableCellBody>
      <CustomTableCellBody>{location}</CustomTableCellBody>
      <CustomTableCellBody>
        <ScheduleTableThemeItem theme={theme} />
      </CustomTableCellBody>
    </CustomTableBody>
  );
};

export default ScheduleTableBody;
