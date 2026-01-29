import { useLocation, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  colors,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

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
      <List>
        {MenuItems.map((item) => {
          if (item.children) {
            return (
              <div key={item.text}>
                {/* Reports – TOGGLE ONLY */}
                <ListItem disablePadding>
                  <ListItemButton onClick={() => setOpenReports((p) => !p)}>
                    <ListItemText primary={item.text} />
                    {openReports ? (
                      <ExpandLess sx={{ color: "#aaa" }} />
                    ) : (
                      <ExpandMore sx={{ color: "#aaa" }} />
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
                            "&.active": {
                              backgroundColor: colors.grey[100],
                              fontWeight: 600,
                            },
                          }}
                        >
                          <ListItemText primary={child.text} />
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
                  "&.active": {
                    backgroundColor: colors.grey[100],
                    fontWeight: 600,
                  },
                }}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </nav>
  );
};

export default Menu;
