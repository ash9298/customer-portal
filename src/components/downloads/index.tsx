import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Stack,
  Chip,
} from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { PrimaryButton, SecondaryButton } from "../../ui/Button";
import AlertBox from "../../ui/Alert";
import { darkTokens } from "../../ui/theme";
import { commonSx } from "../../ui/styles/commonSx";

const downloadSx = {
  intro: { fontSize: "14px", mb: 2, color: darkTokens.text.secondary },
  heading: { color: darkTokens.text.primary, fontWeight: 550 },
  gridWrap: { alignItems: "flex-start" },
  leftCol: { width: "100%", maxWidth: { md: "520px" } },
  rightCol: { minWidth: 0 },
  stableCard: { width: "100%", maxWidth: { md: "520px" } },
  utilityStack: {
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    gap: 2,
    alignItems: "stretch",
  },
  card: {
    ...commonSx.panelCard,
    borderRadius: 1,
    color: darkTokens.text.primary,
  },
  utilityCard: {
    ...commonSx.panelCard,
    borderRadius: 1,
    color: darkTokens.text.primary,
    width: "100%",
    minWidth: 0,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  serviceChip: {
    width: "fit-content",
    bgcolor: darkTokens.status.warningBg,
    color: darkTokens.status.warning,
  },
  releaseDate: { color: darkTokens.text.secondary },
  details: { color: darkTokens.text.primary },
  readMore: {
    px: 0,
    alignSelf: "flex-start",
    textDecoration: "underline",
    color: darkTokens.text.secondary,
  },
  cardActions: { px: 2, pb: 2 },
};

const Download = () => {
  return (
    <>
      <Typography sx={downloadSx.intro}>
        Keep up to date and discover exciting new features and improvements by
        downloading the latest version of Leapwork's software.
      </Typography>
      <AlertBox variant="compact" />
      <Grid container spacing={3} sx={downloadSx.gridWrap}>
        {/* LEFT COLUMN – Stable Releases */}
        <Grid item xs={12} md={6} sx={downloadSx.leftCol}>
          <Typography
            variant="h6"
            gutterBottom
            sx={downloadSx.heading}
          >
            Stable releases
          </Typography>

          <Card variant="outlined" sx={{ ...downloadSx.card, ...downloadSx.stableCard }}>
            <CardContent>
              <Stack spacing={1}>
                <Chip
                  label="Service Release"
                  size="small"
                  sx={downloadSx.serviceChip}
                />

                <Typography variant="h6" fontWeight={550}>
                  V.2025.4.151
                </Typography>

                <Typography
                  variant="body2"
                  sx={downloadSx.releaseDate}
                >
                  Released on 15-01-2026
                </Typography>

                <Typography
                  variant="body2"
                  sx={downloadSx.details}
                >
                  This service release improves stability across Studio, Run
                  Lists, and Leapwork Cloud. It refines multi‑window behavior
                  and Start Web Browser handling, stabilizes subflow editing,
                  and ensures imported Run Lists keep their intended order and
                  schedules. Administrators can recover faster from problematic
                  schedules and sessions, and enhanced logging in Leapwork Cloud
                  makes browser‑related failures easier to diagnose.
                </Typography>

                <Button size="small" sx={downloadSx.readMore}>
                  Read more
                </Button>
              </Stack>
            </CardContent>

            <CardActions sx={downloadSx.cardActions}>
              <Stack spacing={1} width="100%">
                <SecondaryButton variant="outlined" fullWidth>
                  Copy download link
                </SecondaryButton>
                <PrimaryButton variant="contained" fullWidth>
                  Download V.2025.4.151
                </PrimaryButton>
              </Stack>
            </CardActions>
          </Card>
        </Grid>

        {/* RIGHT COLUMN – Leapwork Studio Utilities */}
        <Grid item xs={12} md={6} sx={downloadSx.rightCol}>
          <Typography
            variant="h6"
            gutterBottom
            sx={downloadSx.heading}
          >
            Leapwork Studio Utilities
          </Typography>

          <Stack sx={downloadSx.utilityStack}>
            {/* RSAT Migration Tool */}
            <Card
              variant="outlined"
              sx={{
                ...downloadSx.utilityCard,
              }}
            >
              <CardContent>
                <Stack spacing={1}>
                  <Typography variant="h6" fontWeight={550}>
                    RSAT Migration Tool
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={downloadSx.releaseDate}
                  >
                    Released on 15-01-2026
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={downloadSx.details}
                  >
                    Many customers and partners have heavily invested in
                    building automated test suites with Microsoft RSAT for D365
                    F&O. However, RSAT’s limitations, especially for
                    cross-platform E2E and data-driven scenarios mean teams
                    eventually outgrow it. Our Migration Tool exists to protect
                    that investment. It eliminates the burden of starting from
                    scratch, providing a fast path from RSAT to Leapwork, while
                    enabling teams to modernize their test automation framework
                    and unlock Leapwork’s full value.
                  </Typography>

                  <Button size="small" sx={downloadSx.readMore}>
                    Read more
                  </Button>
                </Stack>
              </CardContent>

              <CardActions sx={downloadSx.cardActions}>
                <Stack spacing={1} width="100%">
                  <SecondaryButton variant="outlined" fullWidth>
                    Copy download link
                  </SecondaryButton>
                  <PrimaryButton variant="contained" fullWidth>
                    Download
                  </PrimaryButton>
                </Stack>
              </CardActions>
            </Card>

            {/* Diagnosis Report */}
            <Card
              variant="outlined"
              sx={{
                ...downloadSx.utilityCard,
              }}
            >
              <CardContent>
                <Stack spacing={1}>
                  <Typography variant="h6" fontWeight={550}>
                    Diagnosis Report
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={downloadSx.releaseDate}
                  >
                    Released on 28-10-2025
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={downloadSx.details}
                  >
                    Diagnosis Report is an automated PowerShell check that
                    verifies your machine’s prerequisites and health for running
                    Leapwork, standardizing diagnostics and removing manual
                    checks.
                  </Typography>

                  <Button size="small" sx={downloadSx.readMore}>
                    FAQ's
                  </Button>
                </Stack>
              </CardContent>

              <CardActions sx={downloadSx.cardActions}>
                <Stack spacing={1} width="100%">
                  <SecondaryButton variant="outlined" fullWidth>
                    Copy download link
                  </SecondaryButton>
                  <PrimaryButton variant="contained" fullWidth>
                    Download
                  </PrimaryButton>
                </Stack>
              </CardActions>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Download;
