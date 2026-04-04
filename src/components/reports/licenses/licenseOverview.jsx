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
import { darkTokens } from "../../../ui/theme";

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

const getProgressStyles = (used, total) => {
  let fill = "#1976d2";

  if (used > total) fill = "#2e7d32";
  if (used === 0) fill = "#d32f2f";

  return {
    height: 8,
    borderRadius: 5,
    mb: 0.5,
    backgroundColor: "#e0e0e0",
    "& .MuiLinearProgress-bar": {
      backgroundColor: fill,
    },
  };
};

const getEvolutionChip = (value) => {
  const isPositive = value > 0;
  const isNegative = value < 0;

  return (
    <Chip
      label={`${isPositive ? "+" : ""}${value}`}
      size="small"
      sx={{
        fontWeight: 550,
        backgroundColor: "#e3f2fd",
        color: isPositive || isNegative ? "#1565c0" : darkTokens.text.primary,
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
      sx={{
        mt: 3,
        borderRadius: "4px",
        position: "relative",
        backgroundColor: darkTokens.background.surface,
        borderColor: darkTokens.border.default,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Typography variant="h6" fontWeight={550} sx={{ color: darkTokens.text.primary }}>
          License overview
        </Typography>

        <Tooltip
          title="Number of available Licenses, Studios, Agents and Controllers"
          placement="top"
          slotProps={{
            tooltip: {
              sx: {
                bgcolor: darkTokens.background.elevated,
                color: darkTokens.text.primary,
                fontSize: 12,
                boxShadow: darkTokens.overlay.shadowTooltip,
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
              color: darkTokens.text.secondary,
            }}
          >
            <InfoOutlinedIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      <Divider sx={{ borderColor: darkTokens.border.default }} />
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
                <TableCell
                  key={column.id}
                  sx={{
                    fontWeight: 550,
                    color: darkTokens.text.secondary,
                    borderColor: darkTokens.border.strong,
                    backgroundColor: darkTokens.background.elevated,
                  }}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : "asc"}
                    onClick={() => handleSort(column.id)}
                    sx={{
                      color: darkTokens.text.secondary,
                      "&.Mui-active": { color: darkTokens.text.primary },
                      "& .MuiTableSortLabel-icon": {
                        color: `${darkTokens.text.secondary} !important`,
                      },
                    }}
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
                    "& td": {
                      borderColor: darkTokens.border.strong,
                      color: darkTokens.text.primary,
                    },
                    "&:hover": {
                      backgroundColor: darkTokens.overlay.rowHover,
                    },
                  }}
                >
                  <TableCell>{row.license}</TableCell>

                  <TableCell>
                    <Box sx={{ width: 240 }}>
                      <LinearProgress
                        variant="determinate"
                        value={Math.min(studiosPercent, 100)}
                        sx={getProgressStyles(row.studiosUsed, row.studiosTotal)}
                      />
                      <Typography variant="caption" sx={{ color: darkTokens.text.secondary }}>
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
                        sx={getProgressStyles(row.agentsUsed, row.agentsTotal)}
                      />
                      <Typography variant="caption" sx={{ color: darkTokens.text.secondary }}>
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
