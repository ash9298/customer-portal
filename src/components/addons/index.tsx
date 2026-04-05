import { Box, Card, CardContent, Typography, Grid, Stack } from "@mui/material";
import Download from "../../assets/download.svg";
import AI from "../../assets/ai.svg";
import Cloud from "../../assets/cloud.svg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { PrimaryButton } from "../../ui/Button";
import { darkTokens } from "../../ui/theme";

const addonSx = {
  card: {
    height: "100%",
    width: "400px",
    display: "flex",
    flexDirection: "column",
    border: `1px solid ${darkTokens.border.default}`,
    backgroundColor: darkTokens.background.surface,
    boxShadow: "none",
    borderRadius: "4px",
  },
  cardContent: { flexGrow: 1, p: 2 },
  iconWrap: { display: "flex", justifyContent: "center", my: 2 },
  iconImage: { width: "100%", height: "auto" },
  title: { fontWeight: 550, lineHeight: 1.3, color: darkTokens.text.primary },
  description: { lineHeight: 1.6, mb: 2, color: darkTokens.text.secondary },
  actionRow: { display: "flex", justifyContent: "space-between", pt: 2 },
  activePill: {
    color: darkTokens.status.successLight,
    display: "flex",
    gap: 1,
  },
  actionButton: {
    fontWeight: 500,
    borderRadius: "4px",
    px: 4,
    color: darkTokens.text.primary,
    borderColor: darkTokens.border.default,
    "&:hover": {
      borderColor: darkTokens.text.secondary,
      backgroundColor: darkTokens.background.hover,
    },
  },
};

const Addon = () => {
  const blocks = [
    {
      title: "Boost your testing efficiency with Leapwork's Cloud Agents",
      description:
        "Seamless Integration with Zero Maintenance and Installation Challenges.",
      actionText: "Learn More",
      icon: Download,
      elevation: 2,
    },
    {
      title: "Unlock the power of Cloud Blocks",
      description:
        "Seamless integration, zero installation. Boost productivity with advanced cloud automation.",
      actionText: "Learn More",
      icon: Cloud,
      elevation: 3,
    },
    {
      title: "Build trust in your AI apps with Leapwork",
      description:
        "Enhance software quality with AI testing tools, helping your teams deliver results more effectively.",
      actionText: "Learn More",
      icon: AI,
      elevation: 2,
    },
  ];

  return (
    <Grid container spacing={2}>
      {blocks.map((block, index) => (
        <Card
          sx={addonSx.card}
          elevation={block.elevation}
          key={index}
        >
          <CardContent sx={addonSx.cardContent}>
            <Stack spacing={2}>
              {/* Icon */}
              <Box sx={addonSx.iconWrap}>
                <img
                  src={block.icon}
                  alt=""
                  style={addonSx.iconImage}
                />
              </Box>

              {/* Title */}
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                sx={addonSx.title}
              >
                {block.title}
              </Typography>

              {/* Description */}
              <Typography
                variant="body2"
                sx={addonSx.description}
              >
                {block.description}
              </Typography>

              {/* Action Button */}
              <Box sx={addonSx.actionRow}>
                <Box sx={addonSx.activePill}>
                  <CheckCircleIcon />
                  Active
                </Box>

                <PrimaryButton
                  variant="outlined"
                  color="primary"
                  sx={addonSx.actionButton}
                >
                  {block.actionText}
                </PrimaryButton>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};

export default Addon;
