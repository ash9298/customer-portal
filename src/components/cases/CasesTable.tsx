import { Chip, Avatar, Stack, Tooltip, Typography, Box } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

import { DataTable } from "../../ui/DataTable";
import { darkTokens } from "../../ui/theme";
import { commonSx } from "../../ui/styles/commonSx";

const casesSx = {
  cellContainer: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  description: {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "normal",
    lineHeight: 1.3,
    cursor: "pointer",
    color: darkTokens.text.primary,
  },
  statusChip: {
    borderRadius: "12px",
    bgcolor: darkTokens.accent.soft,
    color: darkTokens.accent.info,
  },
  ownerAvatar: {
    bgcolor: darkTokens.status.warningBg,
    color: darkTokens.status.warning,
    width: 32,
    height: 32,
    fontSize: 14,
  },
  createdByAvatar: {
    bgcolor: darkTokens.accent.soft,
    color: darkTokens.accent.info,
    width: 32,
    height: 32,
    fontSize: 14,
  },
  createdByMeta: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
};

const formatUTCDate = (date) => {
  if (!date) return "-";

  const normalizedDate = date.replace("+0000", "Z");

  return new Date(normalizedDate).toLocaleDateString("en-US", {
    timeZone: "UTC",
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};
const columns = [
  { field: "CaseNumber", headerName: "Case number", flex: 1 },

  { field: "Subject", headerName: "Subject", flex: 1 },

  {
    field: "Desc",
    headerName: "Description",
    flex: 3,
    renderCell: (params) => {
      const value = params.value || "-";

      return (
        <Tooltip title={value} placement="top-start" disableInteractive>
          <Box sx={casesSx.cellContainer}>
            <Typography variant="body2" sx={casesSx.description}>
              {value}
            </Typography>
          </Box>
        </Tooltip>
      );
    },
  },

  {
    field: "Status",
    headerName: "Status",
    flex: 1,
    renderCell: (params) => (
      <Chip
        label={params.value}
        size="small"
        sx={casesSx.statusChip}
      />
    ),
  },

  {
    field: "CaseOwner",
    headerName: "Case owner",
    flex: 2,
    renderCell: (params) => {
      const initials = params.value
        ? params.value
            .split(" ")
            .slice(0, 2)
            .map((n) => n[0])
            .join("")
            .toUpperCase()
        : "";
      return (
        <Box sx={casesSx.cellContainer}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar sx={casesSx.ownerAvatar}>
              {initials}
            </Avatar>
            <Typography variant="body2" sx={commonSx.panelTitle}>
              {params.value}
            </Typography>
          </Stack>
        </Box>
      );
    },
  },

  {
    field: "CreatedAt",
    headerName: "Created at",
    flex: 1,
  },

  {
    field: "CreatedBy",
    headerName: "Created by",
    flex: 2,
    renderCell: (params) => {
      const { name, email } = params.value;

      const initials = name
        ? name
            .split(" ")
            .slice(0, 2)
            .map((n) => n[0])
            .join("")
            .toUpperCase()
        : "";

      return (
        <Box sx={casesSx.cellContainer}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar sx={casesSx.createdByAvatar}>
              {initials}
            </Avatar>
            <Box sx={casesSx.createdByMeta}>
              <Typography variant="body2" sx={commonSx.panelTitle}>
                {name}
              </Typography>
              <Typography variant="caption" sx={commonSx.secondaryText}>
                {email}
              </Typography>
            </Box>
          </Stack>
        </Box>
      );
    },
  },
  {
    field: "LastUpdated",
    headerName: "Last Updated",
    flex: 1,
  },
  {
    field: "",
    headerName: "",
    flex: 1,
    renderCell: () => (
      <ChatIcon fontSize="small" sx={commonSx.secondaryText} />
    ),
  },
];

const Cases = ({ cases }) => {
  const rows = cases.map((caseItem) => ({
    id: caseItem.Id,
    CaseNumber: caseItem.CaseNumber,
    Subject: caseItem.Subject,
    Desc: caseItem.Description,
    Status: caseItem.Status,
    CaseOwner: caseItem.Owner.Name,
    CreatedAt: formatUTCDate(caseItem.Created_Date_Time__c),
    CreatedBy: {
      name: caseItem.Contact.Name,
      email: caseItem.ContactEmail,
    },
    LastUpdated: formatUTCDate(caseItem.LastModifiedDate),
  }));

  return <DataTable rows={rows} columns={columns} showToolbar />;
};

export default Cases;
