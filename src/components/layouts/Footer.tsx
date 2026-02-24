import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Avatar,
  Box,
  Typography,
  useTheme,
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
import { type RootState } from "../../store";

const Footer = () => {
  const theme = useTheme();
  const user = useSelector((state: RootState) => state.auth.user);
  const { instance } = useMsal();
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const toggleResources = () => {
    setResourcesOpen(!resourcesOpen);
  };

  const toggleUser = () => {
    setUserOpen(!userOpen);
  };

  const handleLogout = () => {
    setUserOpen(false);
    instance.setActiveAccount(null);
    instance.logoutRedirect();
  };

  const knowledgeResources = [
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
    <Box
      sx={{
        flexShrink: 0,
        p: 2,
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      {/* Knowledge Resources Dropdown Header */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          mb: resourcesOpen ? 1.5 : 2,
          cursor: "pointer",
        }}
        onClick={toggleResources}
      >
        <IconButton size="small" sx={{ color: theme.palette.text.secondary }}>
          <Help fontSize="small" />
        </IconButton>
        <Typography sx={{ fontSize: "12px", color: "#333" }} fontWeight="600">
          Knowledge resources
        </Typography>
        <IconButton size="small" sx={{ p: 0.5 }}>
          {resourcesOpen ? (
            <ExpandLess fontSize="small" />
          ) : (
            <ExpandMore fontSize="small" />
          )}
        </IconButton>
      </Stack>

      {/* Knowledge Resources Content */}
      <Collapse in={resourcesOpen}>
        <List sx={{ py: 0, pl: 1 }}>
          {knowledgeResources.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                px: 0,
                py: 1,
                alignItems: "flex-start",
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                  borderRadius: 1,
                },
                cursor: "pointer",
              }}
            >
              <ListItemIcon sx={{ minWidth: 36, mt: 0.25 }}>
                <Box sx={{ color: theme.palette.primary.main }}>
                  {item.icon}
                </Box>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="body2"
                    fontWeight="500"
                    sx={{
                      color: theme.palette.text.primary,
                      fontSize: "0.875rem",
                    }}
                  >
                    {item.text}
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.3,
                      display: "block",
                      fontSize: "0.75rem",
                    }}
                  >
                    {item.description}
                  </Typography>
                }
                sx={{ m: 0 }}
              />
            </ListItem>
          ))}
        </List>
      </Collapse>

      {resourcesOpen && <Divider sx={{ my: 1.5 }} />}

      {/* User Section Header - Always visible */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          cursor: "pointer",
          mb: userOpen ? 1 : 0,
        }}
        onClick={toggleUser}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar
            sx={{
              bgcolor: "#feebff",
              color: "#af00b8",
              width: 32,
              height: 32,
              fontSize: 12,
              fontWeight: 500,
            }}
          >
            {user
              ? `${user.firstName?.charAt(0)}${user.lastName?.charAt(
                  0,
                )}`.toUpperCase()
              : "AG"}
          </Avatar>
          <Box>
            <Typography variant="body2" fontWeight="500" fontSize="0.875rem">
              {user ? `${user.firstName} ${user.lastName}` : "Ashish Gupta"}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              fontSize="0.75rem"
            >
              {user?.email
                ? user.email.split("@")[0] + "@..."
                : "asgu@leapwork.com"}
            </Typography>
          </Box>
        </Stack>

        <IconButton
          size="small"
          sx={{
            color: theme.palette.text.secondary,
            transform: userOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        >
          <KeyboardArrowDown fontSize="small" />
        </IconButton>
      </Stack>

      {/* Logout Option - Part of collapse container */}
      <Collapse in={userOpen}>
        <Box
          sx={{
            mt: 1,
            borderRadius: 1,
            overflow: "hidden",
          }}
        >
          <Button
            fullWidth
            onClick={handleLogout}
            startIcon={<Logout fontSize="small" />}
            sx={{
              justifyContent: "flex-start",
              px: 2,
              py: 1.5,
              color: theme.palette.error.main,
              textTransform: "none",
              fontSize: "0.875rem",
              fontWeight: 500,
              backgroundColor: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
              "&:hover": {
                backgroundColor: theme.palette.error.light + "20",
                borderColor: theme.palette.error.light,
              },
            }}
          >
            Log out
          </Button>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Footer;
