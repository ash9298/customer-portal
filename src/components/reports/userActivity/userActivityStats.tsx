import {
  Box,
  Typography,
  Card,
  Tooltip,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { darkTokens } from "../../../ui/theme";
import { commonSx } from "../../../ui/styles/commonSx";

const userActivityStatsSx = {
  card: {
    p: 2,
    borderRadius: "4px",
    position: "relative",
    backgroundColor: darkTokens.background.surface,
    borderColor: darkTokens.border.default,
  },
  tooltip: {
    ...commonSx.infoTooltip,
  },
  infoButton: {
    position: "absolute",
    top: 8,
    right: 8,
    color: darkTokens.text.secondary,
  },
  row: { display: "flex" },
  col: { minWidth: "calc(100%/3)" },
  label: { color: darkTokens.text.secondary },
  valueRow: { display: "flex", alignItems: "center", gap: 1 },
  value: { color: darkTokens.text.primary },
  changeChip: (change: number) => ({
    backgroundColor:
      change > 0 ? darkTokens.status.successBg : darkTokens.status.dangerBg,
    color: change > 0 ? darkTokens.status.successLight : darkTokens.status.dangerSoft,
    display: "flex",
    alignItems: "center",
    padding: "0 4px 0 2px",
    borderRadius: "3px",
  }),
};

const UserActivityStats = () => {
  return (
    <Card variant="outlined" sx={userActivityStatsSx.card}>
      <Tooltip
        title="Number of available Licenses, Studios, Agents and Controllers"
        placement="top"
        slotProps={{
          tooltip: {
            sx: userActivityStatsSx.tooltip,
          },
        }}
      >
        <IconButton size="small" sx={userActivityStatsSx.infoButton}>
          <InfoOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Grid container sx={userActivityStatsSx.row}>
        {[
          { label: "Total users", value: 451, change: null },
          { label: "Total active users", value: 22, change: 10 },
          { label: "Total inactive users", value: 429, change: -5 },
        ].map((item) => (
          <Grid item key={item.label} sx={userActivityStatsSx.col}>
            <Box>
              <Typography variant="body2" sx={userActivityStatsSx.label}>
                {item.label}
              </Typography>
              <Box sx={userActivityStatsSx.valueRow}>
                <Typography
                  variant="h5"
                  fontWeight={550}
                  sx={userActivityStatsSx.value}
                >
                  {item.value}
                </Typography>
                {item.change !== null && item.change !== 0 && (
                  <Typography
                    variant="body2"
                    sx={userActivityStatsSx.changeChip(item.change)}
                  >
                    {item.change > 0 ? "▲" : "▼"} {Math.abs(item.change)}
                  </Typography>
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default UserActivityStats;
