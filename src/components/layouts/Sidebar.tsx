import React from "react";
import { Box, Divider, Drawer } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import StatusTile from "../../ui/StatusTile";
import Footer from "./Footer";
import Logo from "./Logo";
import Menu from "./Menu";

const Sidebar: React.FC = () => {
  const theme = useTheme();
  const drawerWidth = 240;
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        padding: theme.spacing(1),
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box
        sx={{
          flexShrink: 0,
          p: 2,
        }}
      >
        <Logo />

        <Menu />
      </Box>
      <Divider />
      <StatusTile />

      <Footer />
    </Drawer>
  );
};

export default Sidebar;
