import React from "react";
import { Box, Divider, Drawer } from "@mui/material";
import StatusTile from "../../ui/StatusTile";
import Footer from "./Footer";
import Logo from "./Logo";
import Menu from "./Menu";
import { darkTokens } from "../../ui/theme";

const Sidebar: React.FC = () => {
  const drawerWidth = 240;
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          backgroundColor: darkTokens.background.elevated,
          color: darkTokens.text.primary,
          borderRight: `1px solid ${darkTokens.border.default}`,
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
      <Divider sx={{ borderColor: darkTokens.border.default }} />
      <StatusTile />

      <Footer />
    </Drawer>
  );
};

export default Sidebar;
