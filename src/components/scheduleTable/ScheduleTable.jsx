import Table from "@mui/material/Table";
import styled from "styled-components";
import ScheduleTableHead from "./CheduleTableHead";
import ScheduleTableBody from "./ScheduleTableBody";
const ScheduleTable = () => {
  return (
    <Table>
      <ScheduleTableHead />
      <ScheduleTableBody/>
    </Table>
  );
};

export default ScheduleTable;
