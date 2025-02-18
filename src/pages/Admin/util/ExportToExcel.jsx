import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const ExportToExcel = ({ data, fileName }) => {
  const exportToExcel = () => {
    if (!data || data.length === 0) {
      alert("Aucune donnée à exporter !");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Données");

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const file = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });

    saveAs(file, `${fileName}.xlsx`);
  };

  return (
    <button className="btn succes" onClick={exportToExcel}>
      Exporter en Excel
    </button>
  );
};

export default ExportToExcel;
