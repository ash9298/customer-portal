import { Box } from "@mui/material";
import UserActivityStats from "./userActivityStats";
import UserActivityChart from "./userActivityChart";
import UserActivityUsers from "./userActivityUsers";
const UserActivityTab = () => {
  return (
    <Box mt={3}>
      <UserActivityStats />
      <UserActivityChart />
      <UserActivityUsers />
    </Box>
  );
};

export default UserActivityTab;
