import type { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { DataTable } from "../../ui/DataTable";
import { type LicenseProps } from "./index";

type LicenseTableProps = {
  licenses: LicenseProps[];
  isLoading: boolean;
};

const columns: GridColDef[] = [
  { field: "LicenseId", headerName: "License key id", flex: 2 },
  { field: "MachineName", headerName: "Machine name", flex: 2 },
  { field: "LicenseKey", headerName: "License key", flex: 2 },
  { field: "LicenseType", headerName: "License type", flex: 1 },
  { field: "Email", headerName: "Email", flex: 2 },
  { field: "Status", headerName: "Status", flex: 2 },
  { field: "Controllers", headerName: "Controllers", flex: 1 },
  { field: "MinSeats", headerName: "Seats", flex: 1 },
  { field: "MinAgents", headerName: "Agents", flex: 1 },
  { field: "ExpirationDate", headerName: "Expiration date", flex: 2 },
];

const LicenseTable: React.FC<LicenseTableProps> = ({ licenses, isLoading }) => {
  const rows: GridRowsProp = licenses.map((field) => ({
    id: field.LicenseId,
    LicenseId: field.LicenseId,
    MachineName: field.MachineName,
    LicenseKey: field.LicenseKey,
    LicenseType: field.LicenseType,
    Email: field.Email,
    Status: field.Status,
    Controllers: field.Controllers,
    MinSeats: field.MinSeats,
    MinAgents: field.MinAgents,
    ExpirationDate: field.ExpirationDate,
  }));

  return (
    <DataTable rows={rows} columns={columns} showToolbar loading={isLoading} />
  );
};

export default LicenseTable;
