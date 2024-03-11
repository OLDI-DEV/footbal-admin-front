import { CustomTable } from "../reusedComponents/customTable/CustomTable";
import NextTrainingTableBody from "./NextTrainingTableBody";
import NextTrainingTableHead from "./NextTrainingTableHead";
const NextTrainingTable = () => {
  const playerStats = {
    name: "Пупкин Алексей",
    team: "Огонь и вода",
    dribbling: 10,
    speed: 11,
    shot: 15,
    jump: 30,
  };

  return (
    <CustomTable>
      <NextTrainingTableHead />
      <NextTrainingTableBody
        studentName={"Пупкин Алексей"}
        datePay={"23.12.2023 19:00"}
        countTraining={1}
        isVisiting={false}
        isActiveStats={false}
        playerStatsProps={playerStats}
      />
    </CustomTable>
  );
};

export default NextTrainingTable;
