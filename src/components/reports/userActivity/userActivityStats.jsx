import {
  Box,
  Typography,
  Grid,
  Card,
  Tooltip,
  IconButton,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { darkTokens } from "../../../ui/theme";

const UserActivityStats = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        p: 2,
        borderRadius: "4px",
        position: "relative",
        backgroundColor: darkTokens.background.surface,
        borderColor: darkTokens.border.default,
      }}
    >
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
      <Grid
        container
        sx={{
          display: "flex",
        }}
      >
        {[
          { label: "Total users", value: 451, change: null },
          { label: "Total active users", value: 22, change: 10 },
          { label: "Total inactive users", value: 429, change: -5 },
        ].map((item) => (
          <Grid item key={item.label} sx={{ minWidth: "calc(100%/3)" }}>
            <Box>
              <Typography variant="body2" sx={{ color: darkTokens.text.secondary }}>
                {item.label}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="h5" fontWeight={550} sx={{ color: darkTokens.text.primary }}>
                  {item.value}
                </Typography>
                {item.change !== null && item.change !== 0 && (
                  <Typography
                    variant="body2"
                    sx={{
                      backgroundColor:
                        item.change > 0
                          ? darkTokens.status.successBg
                          : darkTokens.status.dangerBg,
                      color:
                        item.change > 0
                          ? darkTokens.status.successLight
                          : darkTokens.status.dangerSoft,
                      display: "flex",
                      alignItems: "center",
                      padding: "0 4px 0 2px",
                      borderRadius: "3px",
                    }}
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
