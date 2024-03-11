import {
  CustomTableCellHead,
  CustomTableRow,
  CustomTableHead,
} from "../reusedComponents/customTable/CustomTable";

const NextTrainingTableHead = () => {
  return (
    <CustomTableHead>
      <CustomTableRow>
        <CustomTableCellHead>Студенты</CustomTableCellHead>
        <CustomTableCellHead>Посещение</CustomTableCellHead>
        <CustomTableCellHead>Дата оплаты</CustomTableCellHead>
        <CustomTableCellHead>Кол-во тренировок</CustomTableCellHead>
      </CustomTableRow>
    </CustomTableHead>
  );
};

export default NextTrainingTableHead;
