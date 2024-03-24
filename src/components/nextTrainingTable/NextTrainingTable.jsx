import { CustomTable } from "../reusedComponents/customTable/CustomTable";
import NextTrainingTableBody from "./NextTrainingTableBody";
import NextTrainingTableHead from "./NextTrainingTableHead";
const NextTrainingTable = () => {
  const playerStats = [
    {
      name: "Пупкин Алексей",
      team: "Огонь и вода",
      dribbling: 10,
      speed: 11,
      shot: 15,
      jump: 30,
      date: "23.12.2023 19:00",
      trainingCount: 3,
      isVisiting: false,
      isActiveStats: false,
    },
    {
      name: "Толик Еболик",
      team: "Кокакола",
      dribbling: 300,
      speed: 266,
      shot: 232,
      jump: 2323,
      date: "12.12.2012 15:00",
      trainingCount: 2,
      isVisiting: true,
      isActiveStats: true,
    },
    {
      name: "Питер Паркер",
      team: "Мстители",
      dribbling: 122,
      speed: 123,
      shot: 543,
      jump: 666,
      date: "11.10.2021 17:00",
      trainingCount: 4,
      isVisiting: true,
      isActiveStats: true,
    },
  ];

  return (
    <CustomTable>
      <NextTrainingTableHead />
      <NextTrainingTableBody playerStatsProps={playerStats} />
    </CustomTable>
  );
};

export default NextTrainingTable;
