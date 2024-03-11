import { CustomTable } from "../reusedComponents/customTable/CustomTable";
import ScheduleTableHead from "./ScheduleTableHead";
import ScheduleTableBody from "./ScheduleTableBody";
const ScheduleTable = () => {
  return (
    <CustomTable>
      <ScheduleTableHead />
      <ScheduleTableBody
        trainingDate={"23.12.2000 19:00"}
        location={"ул. Маршала Еврея 21"}
        theme={"Тренировка"}
      />
    </CustomTable>
  );
};

export default ScheduleTable;
