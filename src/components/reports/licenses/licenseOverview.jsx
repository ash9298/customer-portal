import { useEffect, useState, useMemo } from "react";

import {
  Box,
  Typography,
  Card,
  Divider,
  Tooltip,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  TableBody,
  LinearProgress,
  Chip,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const licenseOverviewData = [
  {
    license: "1731060543330829",
    studiosUsed: 5,
    studiosTotal: 20,
    studiosEvol: -3,
    agentsUsed: 3,
    agentsTotal: 5,
    agentsEvol: -2,
  },
  {
    license: "1731060616092019",
    studiosUsed: 4,
    studiosTotal: 5,
    studiosEvol: 3,
    agentsUsed: 1,
    agentsTotal: 5,
    agentsEvol: 1,
  },
  {
    license: "173106072866829",
    studiosUsed: 20,
    studiosTotal: 10,
    studiosEvol: -4,
    agentsUsed: 22,
    agentsTotal: 5,
    agentsEvol: 11,
  },
  {
    license: "1736246628863999",
    studiosUsed: 0,
    studiosTotal: 200,
    studiosEvol: 4,
    agentsUsed: 0,
    agentsTotal: 450,
    agentsEvol: 3,
  },
  {
    license: "1739996628863000",
    studiosUsed: 100,
    studiosTotal: 100,
    studiosEvol: 0,
    agentsUsed: 50,
    agentsTotal: 100,
    agentsEvol: -1,
  },
];

const getProgressColor = (used, total) => {
  if (used > total) return "success"; // green
  if (used === 0) return "error"; // red dot case
  return "primary"; // default teal
};

const getEvolutionChip = (value) => {
  const isPositive = value > 0;
  const isNegative = value < 0;

  return (
    <Chip
      label={`${isPositive ? "+" : ""}${value}`}
      size="small"
      sx={{
        fontWeight: 600,
        backgroundColor: "#e3f2fd",
        color: isPositive ? "#1565c0" : isNegative ? "#1565c0" : "text.primary",
      }}
    />
  );
};

const LicenseOverview = () => {
  const [rows, setRows] = useState([]);
  const [orderBy, setOrderBy] = useState("license");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    setRows(licenseOverviewData);
  }, []);

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedRows = useMemo(() => {
    return [...rows].sort((a, b) => {
      const valueA = a[orderBy];
      const valueB = b[orderBy];

      if (valueA < valueB) return order === "asc" ? -1 : 1;
      if (valueA > valueB) return order === "asc" ? 1 : -1;
      return 0;
    });
  }, [rows, orderBy, order]);
  return (
    <Card
      variant="outlined"
      sx={{ mt: 3, borderRadius: 0, position: "relative" }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          License overview
        </Typography>

        <Tooltip
          title="Number of available Licenses, Studios, Agents and Controllers"
          placement="top"
          slotProps={{
            tooltip: {
              sx: {
                bgcolor: "#fff",
                color: "#222",
                fontSize: 12,
                boxShadow:
                  "0 2px 6px 0 rgba(0, 0, 0, .12), 0 6px 12px 0 rgba(55, 55, 55, .08)",
              },
            },
          }}
        >
          <IconButton
            size="small"
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
            }}
          >
            <InfoOutlinedIcon fontSize="small" color="action" />
          </IconButton>
        </Tooltip>
      </Box>
      <Divider />
      {/* Table Section */}
      <Box sx={{ maxHeight: 140, overflowY: "auto" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              {[
                { id: "license", label: "Licenses" },
                { id: "studiosUsed", label: "Studios in use" },
                { id: "studiosEvol", label: "Studios use evol." },
                { id: "agentsUsed", label: "Agents in use" },
                { id: "agentsEvol", label: "Agents use evol." },
              ].map((column) => (
                <TableCell key={column.id} sx={{ fontWeight: 600 }}>
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : "asc"}
                    onClick={() => handleSort(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {sortedRows.map((row) => {
              const studiosPercent = (row.studiosUsed / row.studiosTotal) * 100;
              const agentsPercent = (row.agentsUsed / row.agentsTotal) * 100;

              return (
                <TableRow
                  key={row.license}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                >
                  <TableCell>{row.license}</TableCell>

                  <TableCell>
                    <Box sx={{ width: 240 }}>
                      <LinearProgress
                        variant="determinate"
                        value={Math.min(studiosPercent, 100)}
                        color={getProgressColor(
                          row.studiosUsed,
                          row.studiosTotal,
                        )}
                        sx={{ height: 8, borderRadius: 5, mb: 0.5 }}
                      />
                      <Typography variant="caption">
                        {row.studiosUsed} out of {row.studiosTotal}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell>{getEvolutionChip(row.studiosEvol)}</TableCell>

                  <TableCell>
                    <Box sx={{ width: 240 }}>
                      <LinearProgress
                        variant="determinate"
                        value={Math.min(agentsPercent, 100)}
                        color={getProgressColor(
                          row.agentsUsed,
                          row.agentsTotal,
                        )}
                        sx={{ height: 8, borderRadius: 5, mb: 0.5 }}
                      />
                      <Typography variant="caption">
                        {row.agentsUsed} out of {row.agentsTotal}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell>{getEvolutionChip(row.agentsEvol)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};

export default LicenseOverview;
