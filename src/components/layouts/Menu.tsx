import { useLocation, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { darkTokens } from "../../ui/theme";

const Menu = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [openReports, setOpenReports] = useState(false);

  // Auto-open Reports if user is on a reports route
  useEffect(() => {
    if (currentPath.includes("/dashboard/reports")) {
      setOpenReports(true);
    }
  }, [currentPath]);

  const MenuItems = [
    {
      text: "Reports",
      children: [
        { text: "Licenses", to: "/dashboard/reports/licenses" },
        { text: "User activity", to: "/dashboard/reports/user-activity" },
        { text: "Test results", to: "/dashboard/reports/test-results" },
        { text: "Leapwork usage", to: "/dashboard/reports/leapwork-usage" },
      ],
    },
    { text: "Add-ons", to: "/dashboard/addons" },
    { text: "My cases", to: "/dashboard/customercase" },
    { text: "My licenses", to: "/dashboard/license-management" },
    { text: "Downloads", to: "/dashboard/downloads" },
  ];

  return (
    <nav>
      <List sx={{ py: 0 }}>
        {MenuItems.map((item) => {
          if (item.children) {
            return (
              <div key={item.text}>
                {/* Reports – TOGGLE ONLY */}
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => setOpenReports((p) => !p)}
                    sx={{
                      borderRadius: 1,
                      color: darkTokens.text.primary,
                      "&:hover": {
                        backgroundColor: darkTokens.background.muted,
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        fontSize: "13px",
                        fontWeight: 550,
                      }}
                    />
                    {openReports ? (
                      <ExpandLess sx={{ color: darkTokens.text.secondary }} />
                    ) : (
                      <ExpandMore sx={{ color: darkTokens.text.secondary }} />
                    )}
                  </ListItemButton>
                </ListItem>

                {/* Children */}
                <Collapse in={openReports} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children.map((child) => (
                      <ListItem key={child.text} disablePadding>
                        <ListItemButton
                          component={NavLink}
                          to={child.to}
                          sx={{
                            pl: 4,
                            borderRadius: 1,
                            color: darkTokens.text.secondary,
                            "&:hover": {
                              backgroundColor: darkTokens.background.muted,
                              color: darkTokens.text.primary,
                            },
                            "&.active": {
                              backgroundColor: darkTokens.background.hover,
                              color: darkTokens.text.primary,
                              fontWeight: 550,
                            },
                          }}
                        >
                          <ListItemText
                            primary={child.text}
                            primaryTypographyProps={{
                              fontSize: "13px",
                              fontWeight: 450,
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </div>
            );
          }

          // Normal menu item
          return (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.to}
                sx={{
                  borderRadius: 1,
                  color: darkTokens.text.primary,
                  "&:hover": {
                    backgroundColor: darkTokens.background.muted,
                  },
                  "&.active": {
                    backgroundColor: darkTokens.background.hover,
                    fontWeight: 550,
                  },
                }}
              >
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: "13px",
                    fontWeight: 550,
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </nav>
  );
};

export default Menu;
