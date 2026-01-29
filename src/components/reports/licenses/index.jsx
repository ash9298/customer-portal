import {
  Box,
  Paper,
  Tab,
  Typography,
  Grid,
  Card,
  CardContent,
  Select,
  MenuItem,
  Stack,
  Divider,
} from "@mui/material";

const LicensesTab = () => {
  return (
    <Box mt={3}>
      {/* Summary Cards */}
      <Card variant="outlined" sx={{ p: 2 }}>
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
                <Typography variant="body2" color="text.secondary">
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

      {/* License overview */}
      <Card variant="outlined" sx={{ mt: 3 }}>
        <CardContent>
          <Typography fontWeight={600} mb={2}>
            License overview
          </Typography>

          <Box
            sx={{
              py: 6,
              textAlign: "center",
              color: "text.secondary",
            }}
          >
            No data found
          </Box>
        </CardContent>
      </Card>

      {/* Agent productivity */}
      <Card variant="outlined" sx={{ mt: 3 }}>
        <CardContent>
          <Typography fontWeight={600} mb={4}>
            Agent productivity
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 200,
            }}
          >
            <Typography variant="h4" color="text.secondary">
              0%
            </Typography>
          </Box>

          <Typography variant="body2" textAlign="center" color="text.secondary">
            General Agent productivity
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LicensesTab;
