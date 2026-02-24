import {
  Box,
  Typography,
  Grid,
  Card,
  Tooltip,
  IconButton,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const UserActivityStats = () => {
  return (
    <Card
      variant="outlined"
      sx={{ p: 2, borderRadius: 0, position: "relative" }}
    >
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
              <Typography variant="body2" color="text.primary">
                {item.label}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="h5" fontWeight={600}>
                  {item.value}
                </Typography>
                {item.change !== null && item.change !== 0 && (
                  <Typography
                    variant="body2"
                    sx={{
                      backgroundColor: item.change > 0 ? "#d7eddd" : "#feddd7",
                      color: item.change > 0 ? "#37a656" : "#fb5539",
                      display: "flex",
                      alignItems: "center",
                      padding: "0 4px 0 2px",
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
