import {
  Box,
  Tabs,
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
      <Grid container spacing={2}>
        {[
          { label: "Licenses", value: 11 },
          { label: "Studios", value: 44 },
          { label: "Agents", value: 55 },
          { label: "Controllers", value: 11 },
        ].map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.label}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.label}
                </Typography>
                <Typography variant="h5" fontWeight={600}>
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* License overview */}
      <Card variant="outlined" sx={{ mt: 3 }}>
        <CardContent>
          <Typography fontWeight={600} mb={2}>
            License overview
          </Typography>

          <Tabs value={1}>
            <Tab label="Licenses" />
            <Tab label="Studios in use" />
            <Tab label="Studios use evol." />
            <Tab label="Agents in use" />
            <Tab label="Agents use evol." />
          </Tabs>

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
