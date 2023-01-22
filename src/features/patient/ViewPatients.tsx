import {
  DataGrid,
  GridColDef,
  GridValueFormatterParams,
} from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { getPatientsHistoryAsync } from "./api";
import { PatientHistory } from "./types";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "first_name", headerName: "First name" },
  { field: "middle_name", headerName: "Middle name" },
  { field: "last_name", headerName: "Last name" },
  { field: "phone", headerName: "Phone" },
  { field: "age", headerName: "Age" },
  { field: "gender", headerName: "Gender" },
  { field: "blood_type", headerName: "Blood Type" },
  { field: "address", headerName: "Address" },
  //   { field: "symptoms", headerName: "Symptoms" },
  //   { field: "diagnosis", headerName: "Diagnosis" },
  //   { field: "medicine", headerName: "Medicine" },
  {
    field: "created_at",
    headerName: "Date",
    width: 280,
    // valueFormatter: (params: GridValueFormatterParams) => {
    //   if (params.value == null) {
    //     return "";
    //   }

    //   const valueFormatted = new Intl.DateTimeFormat("en-US", {
    //     year: "numeric",
    //     month: "2-digit",
    //     day: "2-digit",
    //     hour: "2-digit",
    //     minute: "2-digit",
    //     second: "2-digit",
    //   }).format(Date(params.value));
    //   return `${valueFormatted}`;
    // },
  },
];

function ViewPatients() {
  const { data } = useQuery({
    queryKey: ["history"],
    queryFn: getPatientsHistoryAsync,
  });

  return (
    <div style={{ height: 400, width: "75%" }}>
      {data !== undefined && (
        <DataGrid
          rows={data!}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      )}
    </div>
  );
}

export default ViewPatients;
