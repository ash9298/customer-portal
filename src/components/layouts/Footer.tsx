import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Stack,
  Collapse,
  IconButton,
  Button,
} from "@mui/material";
import {
  Logout,
  Description,
  School,
  Article,
  Help,
  ExpandMore,
  ExpandLess,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { useMsal } from "@azure/msal-react";
import { isMsalConfigured } from "../../auth/msalConfig";
import api from "../../api";
import { logout } from "../../store/authSlice";
import { type AppDispatch, type RootState } from "../../store";
import { darkTokens } from "../../ui/theme";
import { commonSx } from "../../ui/styles/commonSx";
import type { KnowledgeResourceItem } from "../../types/ui";

const footerSx = {
  container: {
    flexShrink: 0,
    p: 2,
    backgroundColor: darkTokens.background.elevated,
    borderTop: `1px solid ${darkTokens.border.default}`,
  },
  sectionHeader: {
    cursor: "pointer",
  },
  iconButton: { color: darkTokens.text.secondary },
  resourceListItem: {
    px: 0,
    py: 1,
    alignItems: "flex-start",
    "&:hover": {
      backgroundColor: darkTokens.background.muted,
      borderRadius: 1,
    },
    cursor: "pointer",
  },
  textPrimary: {
    color: darkTokens.text.primary,
  },
  textSecondary: {
    color: darkTokens.text.secondary,
  },
  resourceHeader: (open: boolean) => ({
    mb: open ? 1.5 : 2,
    cursor: "pointer",
  }),
  resourceTitle: { fontSize: "12px", color: darkTokens.text.secondary },
  resourceToggleIcon: { p: 0.5, color: darkTokens.text.secondary },
  resourceList: { py: 0, pl: 1 },
  resourceItemIconWrap: { minWidth: 36, mt: 0.25 },
  resourceIconAccent: { color: darkTokens.accent.primary },
  resourceItemTitle: { color: darkTokens.text.primary, fontSize: "13px" },
  resourceItemSubtitle: {
    color: darkTokens.text.secondary,
    lineHeight: 1.3,
    display: "block",
    fontSize: "12px",
  },
  listItemTextReset: { m: 0 },
  userHeader: (open: boolean) => ({
    cursor: "pointer",
    mb: open ? 1 : 0,
  }),
  avatar: {
    bgcolor: darkTokens.accent.primary,
    color: darkTokens.text.primary,
    width: 32,
    height: 32,
    fontSize: 12,
    fontWeight: 550,
  },
  userName: { color: darkTokens.text.primary },
  userEmail: { color: darkTokens.text.secondary },
  userChevron: (open: boolean) => ({
    color: darkTokens.text.secondary,
    transform: open ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.2s",
  }),
  logoutWrap: {
    mt: 1,
    borderRadius: 1,
    overflow: "hidden",
  },
  logoutButton: {
    justifyContent: "flex-start",
    px: 2,
    py: 1.5,
    color: darkTokens.status.dangerSoft,
    textTransform: "none",
    fontSize: "13px",
    fontWeight: 550,
    backgroundColor: darkTokens.background.surface,
    border: `1px solid ${darkTokens.border.default}`,
    "&:hover": {
      backgroundColor: darkTokens.status.dangerHoverBg,
      borderColor: darkTokens.status.danger,
    },
  },
};

const Footer = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { instance } = useMsal();
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const displayName =
    user?.name?.trim() ||
    [user?.firstName, user?.lastName].filter(Boolean).join(" ").trim() ||
    (user?.email ? user.email.split("@")[0] : "Guest User");
  const initials = displayName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  const toggleResources = () => {
    setResourcesOpen(!resourcesOpen);
  };

  const toggleUser = () => {
    setUserOpen(!userOpen);
  };

  const handleLogout = async () => {
    setUserOpen(false);
    dispatch(logout());

    try {
      await api.post("/logout", {}, { withCredentials: true });
    } catch (error) {
      console.warn("Logout API call failed:", error);
    }

    instance.setActiveAccount(null);

    if (isMsalConfigured) {
      await instance.logoutRedirect();
      return;
    }

    navigate("/login", { replace: true });
  };

  const knowledgeResources: KnowledgeResourceItem[] = [
    {
      text: "Product docs",
      description:
        "Learn more about Leapwork studio and explore its components",
      icon: <Description fontSize="small" />,
    },
    {
      text: "Knowledge base",
      description:
        "Find solutions, best practices and advice on how to optimize your workflow",
      icon: <Article fontSize="small" />,
    },
    {
      text: "Learning center",
      description:
        "Learn how to master Leapwork with easy, step-by-step tutorials",
      icon: <School fontSize="small" />,
    },
  ];

  return (
    <Box sx={footerSx.container}>
      {/* Knowledge Resources Dropdown Header */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={footerSx.resourceHeader(resourcesOpen)}
        onClick={toggleResources}
      >
        <IconButton size="small" sx={footerSx.iconButton}>
          <Help fontSize="small" />
        </IconButton>
        <Typography sx={footerSx.resourceTitle} fontWeight={550}>
          Knowledge resources
        </Typography>
        <IconButton size="small" sx={footerSx.resourceToggleIcon}>
          {resourcesOpen ? (
            <ExpandLess fontSize="small" />
          ) : (
            <ExpandMore fontSize="small" />
          )}
        </IconButton>
      </Stack>

      {/* Knowledge Resources Content */}
      <Collapse in={resourcesOpen}>
        <List sx={footerSx.resourceList}>
          {knowledgeResources.map((item, index) => (
            <ListItem key={index} sx={footerSx.resourceListItem}>
              <ListItemIcon sx={footerSx.resourceItemIconWrap}>
                <Box sx={footerSx.resourceIconAccent}>{item.icon}</Box>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="body2"
                    fontWeight="500"
                    sx={footerSx.resourceItemTitle}
                  >
                    {item.text}
                  </Typography>
                }
                secondary={
                  <Typography variant="caption" sx={footerSx.resourceItemSubtitle}>
                    {item.description}
                  </Typography>
                }
                sx={footerSx.listItemTextReset}
              />
            </ListItem>
          ))}
        </List>
      </Collapse>

      {resourcesOpen && (
        <Divider sx={{ my: 1.5, ...commonSx.divider }} />
      )}

      {/* User Section Header - Always visible */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={footerSx.userHeader(userOpen)}
        onClick={toggleUser}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar sx={footerSx.avatar}>
            {initials}
          </Avatar>
          <Box>
            <Typography
              variant="body2"
              fontWeight={550}
              fontSize="13px"
              sx={footerSx.userName}
            >
              {displayName}
            </Typography>
            <Typography
              variant="caption"
              sx={footerSx.userEmail}
              fontSize="12px"
            >
              {user?.email}
            </Typography>
          </Box>
        </Stack>

        <IconButton size="small" sx={footerSx.userChevron(userOpen)}>
          <KeyboardArrowDown fontSize="small" />
        </IconButton>
      </Stack>

      {/* Logout Option - Part of collapse container */}
      <Collapse in={userOpen}>
        <Box sx={footerSx.logoutWrap}>
          <Button
            fullWidth
            onClick={handleLogout}
            startIcon={<Logout fontSize="small" />}
            sx={footerSx.logoutButton}
          >
            Log out
          </Button>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Footer;
