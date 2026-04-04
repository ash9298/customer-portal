import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Stack,
  Chip,
} from "@mui/material";
import { PrimaryButton, SecondaryButton } from "../../ui/Button";
import AlertBox from "../../ui/Alert";
import { darkTokens } from "../../ui/theme";
const Download = () => {
  return (
    <>
      <Typography sx={{ fontSize: "14px", mb: 2, color: darkTokens.text.secondary }}>
        Keep up to date and discover exciting new features and improvements by
        downloading the latest version of Leapwork's software.
      </Typography>
      <AlertBox variant="compact" />
      <Grid container spacing={3} sx={{ display: "flex", flexWrap: "nowrap" }}>
        {/* LEFT COLUMN – Stable Releases */}
        <Grid item xs={12} md={6} sx={{ maxWidth: "450px" }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: darkTokens.text.primary, fontWeight: 550 }}
          >
            Stable releases
          </Typography>

          <Card
            variant="outlined"
            sx={{
              borderRadius: 1,
              borderColor: darkTokens.border.default,
              backgroundColor: darkTokens.background.surface,
              color: darkTokens.text.primary,
            }}
          >
            <CardContent>
              <Stack spacing={1}>
                <Chip
                  label="Service Release"
                  size="small"
                  sx={{
                    width: "fit-content",
                    bgcolor: darkTokens.status.warningBg,
                    color: darkTokens.status.warning,
                  }}
                />

                <Typography variant="h6" fontWeight={550}>
                  V.2025.4.151
                </Typography>

                <Typography variant="body2" sx={{ color: darkTokens.text.secondary }}>
                  Released on 15-01-2026
                </Typography>

                <Typography variant="body2" sx={{ color: darkTokens.text.primary }}>
                  This service release improves stability across Studio, Run
                  Lists, and Leapwork Cloud. It refines multi‑window behavior
                  and Start Web Browser handling, stabilizes subflow editing,
                  and ensures imported Run Lists keep their intended order and
                  schedules. Administrators can recover faster from problematic
                  schedules and sessions, and enhanced logging in Leapwork Cloud
                  makes browser‑related failures easier to diagnose.
                </Typography>

                <Button
                  size="small"
                  sx={{
                    px: 0,
                    alignSelf: "flex-start",
                    textDecoration: "underline",
                    color: darkTokens.text.secondary,
                  }}
                >
                  Read more
                </Button>
              </Stack>
            </CardContent>

            <CardActions sx={{ px: 2, pb: 2 }}>
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
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: darkTokens.text.primary, fontWeight: 550 }}
          >
            Leapwork Studio Utilities
          </Typography>

          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1,
            }}
          >
            {/* RSAT Migration Tool */}
            <Card
              variant="outlined"
              sx={{
                maxWidth: "450px",
                borderRadius: 1,
                borderColor: darkTokens.border.default,
                backgroundColor: darkTokens.background.surface,
                color: darkTokens.text.primary,
              }}
            >
              <CardContent>
                <Stack spacing={1}>
                  <Typography variant="h6" fontWeight={550}>
                    RSAT Migration Tool
                  </Typography>

                  <Typography variant="body2" sx={{ color: darkTokens.text.secondary }}>
                    Released on 15-01-2026
                  </Typography>

                  <Typography variant="body2" sx={{ color: darkTokens.text.primary }}>
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

                  <Button
                    size="small"
                    sx={{
                    px: 0,
                    alignSelf: "flex-start",
                    textDecoration: "underline",
                    color: darkTokens.text.secondary,
                  }}
                >
                    Read more
                  </Button>
                </Stack>
              </CardContent>

              <CardActions sx={{ px: 2, pb: 2 }}>
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
                maxWidth: "450px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: 1,
                borderColor: darkTokens.border.default,
                backgroundColor: darkTokens.background.surface,
                color: darkTokens.text.primary,
              }}
            >
              <CardContent>
                <Stack spacing={1}>
                  <Typography variant="h6" fontWeight={550}>
                    Diagnosis Report
                  </Typography>

                  <Typography variant="body2" sx={{ color: darkTokens.text.secondary }}>
                    Released on 28-10-2025
                  </Typography>

                  <Typography variant="body2" sx={{ color: darkTokens.text.primary }}>
                    Diagnosis Report is an automated PowerShell check that
                    verifies your machine’s prerequisites and health for running
                    Leapwork, standardizing diagnostics and removing manual
                    checks.
                  </Typography>

                  <Button
                    size="small"
                    sx={{
                    px: 0,
                    alignSelf: "flex-start",
                    textDecoration: "underline",
                    color: darkTokens.text.secondary,
                  }}
                >
                    FAQ's
                  </Button>
                </Stack>
              </CardContent>

              <CardActions sx={{ px: 2, pb: 2 }}>
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
