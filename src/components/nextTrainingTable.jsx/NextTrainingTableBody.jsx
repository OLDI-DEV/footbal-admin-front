import styled from "styled-components";
import {
  CustomTableCellHead,
  CustomTableRow,
  CustomTableHead,
  CustomTableBody,
  CustomTableCellBody,
} from "../reusedComponents/customTable/CustomTable";
import NextTrainingTableVisitingItem from "./NextTrainingTableVisitingItem";
import NextTrainingTableMoreInfoItem from "./NextTrainingTableMoreInfoItem";
import NextTrainingTableStatsItem from "./NextTrainingTableStatsItem";
const NextTrainingTableBody = ({
  studentName,
  datePay,
  countTraining,
  isVisiting,
  isActiveStats,
  playerStatsProps,
}) => {
  return (
    <CustomTableBody>
      <CustomTableCellBody>{studentName}</CustomTableCellBody>
      <CustomTableCellBody>
        <NextTrainingTableVisitingItem isVisiting={isVisiting} />
      </CustomTableCellBody>
      <CustomTableCellBody>{datePay}</CustomTableCellBody>
      <CustomTableCellBody>{countTraining}</CustomTableCellBody>
      <CustomTableCellBody>
        <NextTrainingTableMoreInfoItem playerStatsProps={playerStatsProps} />
      </CustomTableCellBody>
      <CustomTableCellBody>
        <NextTrainingTableStatsItem isActiveStats={isActiveStats} />
      </CustomTableCellBody>
    </CustomTableBody>
  );
};

export default NextTrainingTableBody;
