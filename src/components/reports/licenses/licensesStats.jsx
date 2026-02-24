import {
  Box,
  Typography,
  Grid,
  Card,
  Tooltip,
  IconButton,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const LicensesStats = () => {
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
          { label: "Licenses", value: 11 },
          { label: "Studios", value: 44 },
          { label: "Agents", value: 55 },
          { label: "Controllers", value: 11 },
        ].map((item) => (
          <Grid item key={item.label} sx={{ minWidth: "calc(100%/4)" }}>
            <Box>
              <Typography variant="body2" color="text.primary">
                {item.label}
              </Typography>
              <Typography variant="h5" fontWeight={600}>
                {item.value}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default LicensesStats;
