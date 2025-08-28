import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { Logout } from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        flexShrink: 0,
        p: 2,
        borderTop: "1px solid #eee",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <Avatar sx={{ backgroundColor: theme.palette.primary.main }}>JD</Avatar>
        <Box sx={{ marginLeft: theme.spacing(1), flex: 1 }}>
          <Typography variant="body1" fontWeight="bold">
            John Doe
          </Typography>
          <Typography variant="body2" color="text.secondary">
            john.doe@example.com
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: theme.spacing(1),
          cursor: "pointer",
          color: theme.palette.error.main,
        }}
      >
        <Logout sx={{ marginRight: theme.spacing(1) }} />
        <Typography variant="body2">Logout</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
