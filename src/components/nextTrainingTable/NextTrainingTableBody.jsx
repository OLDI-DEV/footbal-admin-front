import {
  CustomTableBody,
  CustomTableCellBody,
} from "../reusedComponents/customTable/CustomTable";
import NextTrainingTableVisitingItem from "./NextTrainingTableVisitingItem";
import NextTrainingTableMoreInfoItem from "./NextTrainingTableMoreInfoItem";
import NextTrainingTableStatsItem from "./NextTrainingTableStatsItem";
const NextTrainingTableBody = ({ playerStatsProps }) => {
  return (
    <>
      {playerStatsProps.map((player) => (
        <CustomTableBody>
          <CustomTableCellBody>{player.name}</CustomTableCellBody>
          <CustomTableCellBody>
            <NextTrainingTableVisitingItem isVisiting={player.isVisiting} />
          </CustomTableCellBody>
          <CustomTableCellBody>{player.date}</CustomTableCellBody>
          <CustomTableCellBody>{player.trainingCount}</CustomTableCellBody>
          <CustomTableCellBody>
            <NextTrainingTableMoreInfoItem playerStatsProps={player} />
          </CustomTableCellBody>
          <CustomTableCellBody>
            <NextTrainingTableStatsItem
              isActiveStats={player.isActiveStats}
              playerStatsProps={player}
            />
          </CustomTableCellBody>
        </CustomTableBody>
      ))}
    </>
  );
};




export default NextTrainingTableBody;
