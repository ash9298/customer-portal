import {
  colors,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
const Menu = () => {
  const MenuItems = [
    { text: "Reports", href: "reports" },
    { text: "Add-ons", href: "addons" },
    { text: "My cases", href: "customercase" },
    { text: "My licenses", href: "license-management" },
    { text: "Downloads", href: "downloads " },
  ];
  return (
    <nav>
      <List>
        {MenuItems.map((item) => (
          <ListItem component="li" key={item.text} sx={{ padding: "0" }}>
            <ListItemButton>
              <Link
                href={item.href}
                style={{ textDecoration: "none", color: colors.grey[800] }}
              >
                <ListItemText primary={item.text} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </nav>
  );
};

export default Menu;
