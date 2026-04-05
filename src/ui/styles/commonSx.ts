import { darkTokens } from "../theme";

export const commonSx = {
  panelCard: {
    borderRadius: "4px",
    position: "relative",
    backgroundColor: darkTokens.background.surface,
    borderColor: darkTokens.border.default,
  },
  panelHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    p: 2,
  },
  panelTitle: {
    color: darkTokens.text.primary,
    fontWeight: 550,
  },
  secondaryText: {
    color: darkTokens.text.secondary,
  },
  divider: {
    borderColor: darkTokens.border.default,
  },
  infoIconButton: {
    position: "absolute",
    top: 8,
    right: 8,
    color: darkTokens.text.secondary,
  },
  infoTooltip: {
    bgcolor: darkTokens.background.elevated,
    color: darkTokens.text.primary,
    fontSize: 12,
    boxShadow: darkTokens.overlay.shadowTooltip,
  },
  tableHeaderCell: {
    fontWeight: 550,
    color: darkTokens.text.secondary,
    border: "none",
  },
  tableSortLabel: {
    color: darkTokens.text.secondary,
    "&.Mui-active": { color: darkTokens.text.primary },
    "& .MuiTableSortLabel-icon": {
      color: `${darkTokens.text.secondary} !important`,
    },
  },
  noRowBorderOnLast: {
    "&:last-child td, &:last-child th": {
      borderBottom: "none",
    },
  },
  rowDividerCell: {
    borderBottom: `1px solid ${darkTokens.border.strong}`,
    py: 1.5,
  },
  resultsChip: {
    borderRadius: 1,
    bgcolor: darkTokens.background.muted,
    color: darkTokens.text.secondary,
    fontWeight: 500,
    fontSize: "0.75rem",
    "& .MuiChip-label": { px: 1.5 },
  },
};

