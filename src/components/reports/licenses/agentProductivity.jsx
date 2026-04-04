import {
  Card,
  Box,
  Typography,
  Divider,
  Grid,
  CircularProgress,
  Tooltip,
  IconButton,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { darkTokens } from "../../../ui/theme";

const dummyAgents = [
  {
    id: "1",
    name: "Leapwork Cloud Agent 1",
    license: "1736246628863999",
    productivity: 2,
  },
  {
    id: "2",
    name: "Leapwork Cloud Agent 2",
    license: "1736246628863999",
    productivity: 1,
  },
  {
    id: "3",
    name: "Remote Agent 1",
    license: "173106072866829",
    productivity: 5,
  },
];

const CircularWithLabel = ({ value, size = 120 }) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      {/* Background Track */}
      <CircularProgress
        variant="determinate"
        value={100}
        size={size}
        thickness={4}
        sx={{
          color: darkTokens.background.muted,
          position: "absolute",
        }}
      />

      {/* Actual Progress */}
      <CircularProgress
        variant="determinate"
        value={value}
        size={size}
        thickness={4}
        sx={{
          color: darkTokens.accent.primary,
          "& .MuiCircularProgress-circle": {
            strokeLinecap: "round",
          },
        }}
      />

      {/* Label */}
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={550}
          sx={{ color: darkTokens.text.primary }}
        >
          {value}%
        </Typography>
      </Box>
    </Box>
  );
};

const AgentProductivity = () => {
  const generalProductivity =
    dummyAgents.reduce((acc, curr) => acc + curr.productivity, 0) /
    dummyAgents.length;

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
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          fontWeight={550}
          sx={{ color: darkTokens.text.primary }}
        >
          Agent productivity
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

      {/* Two Column Layout */}
      <Grid container>
        {/* LEFT COLUMN */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "50%",
            p: 4,
            borderRight: { md: `1px solid ${darkTokens.border.strong}` },
          }}
        >
          <Box textAlign="center">
            <CircularWithLabel value={Math.round(generalProductivity)} />
            <Typography variant="body2" sx={{ mt: 2, color: darkTokens.text.secondary }}>
              General Agent productivity
            </Typography>
          </Box>
        </Grid>

        {/* RIGHT COLUMN */}
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            p: 3,
            maxHeight: 350,
            overflowY: "auto",
            display: "flex",
            minWidth: "50%",
            flexDirection: "column",
            alignItems: "flex-end", // 🔥 RIGHT ALIGN
          }}
        >
          {dummyAgents.map((agent) => (
            <Box
              key={agent.id}
              sx={{
                width: "85%",
                border: `1px solid ${darkTokens.border.subtle}`,
                borderRadius: 2,
                p: 2,
                mb: 2,
                backgroundColor: darkTokens.background.app,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "&:hover": {
                  backgroundColor: darkTokens.background.hoverSoft,
                },
              }}
            >
              <Box>
                <Typography fontWeight={550} sx={{ color: darkTokens.text.primary }}>
                  {agent.name}
                </Typography>
                <Typography variant="body2" sx={{ color: darkTokens.text.secondary }}>
                  Productivity
                </Typography>
                <Typography variant="caption" sx={{ color: darkTokens.text.muted }}>
                  License: {agent.license}
                </Typography>
              </Box>

              <CircularWithLabel value={agent.productivity} size={80} />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Card>
  );
};

export default AgentProductivity;
