import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Stack,
  useTheme,
} from "@mui/material";
import Download from "../../assets/download.svg";
import AI from "../../assets/ai.svg";
import Cloud from "../../assets/cloud.svg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { PrimaryButton } from "../../ui/Button";
const Addon = () => {
  const theme = useTheme();

  const blocks = [
    {
      title: "Boost your testing efficiency with Leapwork's Cloud Agents",
      description:
        "Seamless Integration with Zero Maintenance and Installation Challenges.",
      actionText: "Learn More",
      icon: Download,
      chipText: null,
      color: theme.palette.primary.light,
      elevation: 2,
    },
    {
      title: "Unlock the power of Cloud Blocks",
      description:
        "Seamless integration, zero installation. Boost productivity with advanced cloud automation.",
      actionText: "Learn More",
      icon: Cloud,
      chipText: "Active",
      chipColor: "success",
      color: theme.palette.secondary.light,
      elevation: 3,
    },
    {
      title: "Build trust in your AI apps with Leapwork",
      description:
        "Enhance software quality with AI testing tools, helping your teams deliver results more effectively.",
      actionText: "Learn More",
      icon: AI,
      chipText: "Active",
      chipColor: "info",
      color: theme.palette.info.light,
      elevation: 2,
    },
  ];

  return (
    <Grid container spacing={2}>
      {blocks.map((block, index) => (
        <Card
          sx={{
            height: "100%",
            width: "400px",
            display: "flex",
            flexDirection: "column",
            border: `1px solid ${theme.palette.divider}`,
            backgroundColor: theme.palette.background.paper,
            boxShadow: "none",
            borderRadius: "0",
          }}
          elevation={block.elevation}
          key={index}
        >
          <CardContent sx={{ flexGrow: 1, p: 2 }}>
            <Stack spacing={2}>
              {/* Icon */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  my: 2,
                }}
              >
                <img
                  src={block.icon}
                  alt=""
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Box>

              {/* Title */}
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  lineHeight: 1.3,
                }}
              >
                {block.title}
              </Typography>

              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  lineHeight: 1.6,
                  mb: 2,
                }}
              >
                {block.description}
              </Typography>

              {/* Action Button */}
              <Box
                sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}
              >
                <Box
                  sx={{
                    color: "#37a656",
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <CheckCircleIcon />
                  Active
                </Box>

                <PrimaryButton
                  variant="outlined"
                  color="primary"
                  sx={{
                    fontWeight: 500,
                    borderRadius: "4px",
                    px: 4,
                  }}
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
