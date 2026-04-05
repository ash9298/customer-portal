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

const LicensesStats = () => {
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
          { label: "Licenses", value: 11 },
          { label: "Studios", value: 44 },
          { label: "Agents", value: 55 },
          { label: "Controllers", value: 11 },
        ].map((item) => (
          <Grid item key={item.label} sx={{ minWidth: "calc(100%/4)" }}>
            <Box>
              <Typography
                variant="body2"
                sx={{ color: darkTokens.text.secondary }}
              >
                {item.label}
              </Typography>
              <Typography
                variant="h5"
                fontWeight={550}
                sx={{ color: darkTokens.text.primary }}
              >
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
