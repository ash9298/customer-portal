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
import { commonSx } from "../../../ui/styles/commonSx";

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

const agentProductivitySx = {
  circularWrap: { position: "relative", display: "inline-flex" },
  circularTrack: { color: "#e0e0e0", position: "absolute" },
  circularProgress: {
    color: "#1976d2",
    "& .MuiCircularProgress-circle": {
      strokeLinecap: "round",
    },
  },
  circularLabel: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: { mt: 3, ...commonSx.panelCard },
  header: {
    display: "flex",
    justifyContent: "space-between",
    p: 2,
  },
  leftColumn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "50%",
    p: 4,
    borderRight: { md: `1px solid ${darkTokens.border.strong}` },
  },
  rightColumn: {
    p: 3,
    maxHeight: 350,
    overflowY: "auto",
    display: "flex",
    minWidth: "50%",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  agentCard: {
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
  },
};

const CircularWithLabel = ({ value, size = 120 }) => {
  return (
    <Box sx={agentProductivitySx.circularWrap}>
      {/* Background Track */}
      <CircularProgress
        variant="determinate"
        value={100}
        size={size}
        thickness={4}
        sx={agentProductivitySx.circularTrack}
      />

      {/* Actual Progress */}
      <CircularProgress
        variant="determinate"
        value={value}
        size={size}
        thickness={4}
        sx={agentProductivitySx.circularProgress}
      />

      {/* Label */}
      <Box sx={agentProductivitySx.circularLabel}>
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
    <Card variant="outlined" sx={agentProductivitySx.card}>
      {/* Header */}
      <Box sx={agentProductivitySx.header}>
        <Typography
          variant="h6"
          fontWeight={550}
          sx={commonSx.panelTitle}
        >
          Agent productivity
        </Typography>
        <Tooltip
          title="Number of available Licenses, Studios, Agents and Controllers"
          placement="top"
          slotProps={{
            tooltip: {
              sx: commonSx.infoTooltip,
            },
          }}
        >
          <IconButton size="small" sx={commonSx.infoIconButton}>
            <InfoOutlinedIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>

      <Divider sx={commonSx.divider} />

      {/* Two Column Layout */}
      <Grid container>
        {/* LEFT COLUMN */}
        <Grid item xs={12} md={5} sx={agentProductivitySx.leftColumn}>
          <Box textAlign="center">
            <CircularWithLabel value={Math.round(generalProductivity)} />
            <Typography
              variant="body2"
              sx={{ mt: 2, ...commonSx.secondaryText }}
            >
              General Agent productivity
            </Typography>
          </Box>
        </Grid>

        {/* RIGHT COLUMN */}
        <Grid item xs={12} md={7} sx={agentProductivitySx.rightColumn}>
          {dummyAgents.map((agent) => (
            <Box key={agent.id} sx={agentProductivitySx.agentCard}>
              <Box>
                <Typography
                  fontWeight={550}
                  sx={commonSx.panelTitle}
                >
                  {agent.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={commonSx.secondaryText}
                >
                  Productivity
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: darkTokens.text.muted }}
                >
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
