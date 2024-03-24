import { CustomTable } from "../reusedComponents/customTable/CustomTable";
import NextTrainingTableBody from "./NextTrainingTableBody";
import NextTrainingTableHead from "./NextTrainingTableHead";
const NextTrainingTable = ({ playerStatsProps }) => {
  return (
    <CustomTable>
      <NextTrainingTableHead />
      <NextTrainingTableBody playerStatsProps={playerStatsProps} />
    </CustomTable>
  );
};

export default NextTrainingTable;
