import styled from "styled-components";
import {
  CustomTableCellHead,
  CustomTableRow,
  CustomTableHead,
} from "../reusedComponents/customTable/CustomTable";

const ScheduleTableHead = () => {
  return (
    <CustomTableHead>
      <CustomTableRow>
        <CustomTableCellHead>Дата тренировки </CustomTableCellHead>
        <CustomTableCellHead>Локация </CustomTableCellHead>
        <CustomTableCellHead>Тематика </CustomTableCellHead>
      </CustomTableRow>
    </CustomTableHead>
  );
};

export default ScheduleTableHead;
