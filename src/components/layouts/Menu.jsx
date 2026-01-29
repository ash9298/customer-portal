import { useLocation } from "react-router-dom";
import { useState } from "react";
import {
  colors,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
const Menu = () => {
  const location = useLocation();
  const currentPath = location.pathname.replace("/dashboard/", "");
  const [openReports, setOpenReports] = useState(
    currentPath.startsWith("reports"),
  );
  console.log("currentPath", currentPath);
  const MenuItems = [
    {
      text: "Reports",
      href: "reports",
      active: "",
      children: [
        { text: "Licenses", href: "reports/licenses" },
        { text: "User activity", href: "reports/user-activity" },
        { text: "Test results", href: "reports/test-results" },
        { text: "Leapwork usage", href: "reports/leapwork-usage" },
      ],
    },
    { text: "Add-ons", href: "addons", active: "" },
    { text: "My cases", href: "customercase", active: "" },
    { text: "My licenses", href: "license-management", active: "" },
    { text: "Downloads", href: "downloads", active: "" },
  ];
  const isActive = (href) => {
    return currentPath === href || currentPath.startsWith(`${href}/`);
  };
  return (
    <nav>
      <List>
        {MenuItems.map((item) => {
          const active = isActive(item.href);
          if (item.children) {
            return (
              <div key={item.text}>
                {/* Parent Item */}
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => setOpenReports((prev) => !prev)}
                    sx={{
                      backgroundColor: active
                        ? colors.grey[100]
                        : "transparent",
                    }}
                  >
                    <ListItemText
                      primary={item.text}
                      sx={{
                        "& .MuiListItemText-primary": {
                          fontWeight: active ? 600 : 400,
                        },
                      }}
                    />
                    {openReports ? (
                      <ExpandLess sx={{ color: "#aaa" }} />
                    ) : (
                      <ExpandMore sx={{ color: "#aaa" }} />
                    )}
                  </ListItemButton>
                </ListItem>

                {/* Sub Menu */}
                <Collapse in={openReports} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children.map((child) => {
                      const childActive = isActive(child.href);

                      return (
                        <ListItem key={child.text} disablePadding>
                          <ListItemButton
                            component={Link}
                            href={child.href}
                            sx={{
                              pl: 4,
                              backgroundColor: childActive
                                ? colors.grey[100]
                                : "transparent",
                            }}
                          >
                            <ListItemText
                              primary={child.text}
                              sx={{
                                "& .MuiListItemText-primary": {
                                  fontWeight: childActive ? 600 : 400,
                                },
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </Collapse>
              </div>
            );
          }
          return (
            <ListItem component="li" key={item.text} sx={{ padding: "0" }}>
              <ListItemButton
                component={Link}
                href={item.href}
                sx={{
                  textDecoration: "none",

                  backgroundColor: active ? colors.grey[100] : "transparent",
                }}
              >
                <ListItemText
                  primary={item.text}
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontWeight: active ? 600 : 400,
                    },
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
