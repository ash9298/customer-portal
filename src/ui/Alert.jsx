import React from "react";
import {
  Paper,
  Typography,
  Box,
  Alert,
  AlertTitle,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import WarningIcon from "@mui/icons-material/Warning";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { styled } from "@mui/material/styles";

// Option 1: Alert-style component
export const LicenseNoteAlert = () => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  if (!open) return null;

  return (
    <Alert
      severity="warning"
      icon={<InfoIcon fontSize="large" />}
      sx={{
        mt: 2,
        mb: 3,
        borderRadius: 1,
        "& .MuiAlert-message": { width: "100%" },
      }}
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      }
    >
      <AlertTitle sx={{ fontWeight: 600, mb: 1 }}>
        Important License Update Note
      </AlertTitle>
      <Typography variant="body2" sx={{ mb: 1.5 }}>
        Before applying a new license key, kindly review:
      </Typography>

      <List dense sx={{ py: 0, mb: 1.5 }}>
        <ListItem sx={{ py: 0.5, pl: 0 }}>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <PeopleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Number of users in the User Management section"
            primaryTypographyProps={{ variant: "body2" }}
          />
        </ListItem>
        <ListItem sx={{ py: 0.5, pl: 0 }}>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <BusinessIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Number of studios assigned to your license"
            primaryTypographyProps={{ variant: "body2" }}
          />
        </ListItem>
      </List>

      <Typography variant="body2" sx={{ mb: 1.5 }}>
        If you notice any discrepancies, please reach out to:
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 1.5 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <ContactSupportIcon fontSize="small" />
          <Typography variant="body2">
            Leapwork Customer Success Manager (CSM)
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <ContactSupportIcon fontSize="small" />
          <Typography variant="body2">Support Team</Typography>
        </Box>
      </Box>

      <Alert
        severity="error"
        sx={{ mt: 1.5, borderRadius: 1 }}
        icon={<WarningIcon />}
      >
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          Important: Applying a license with a smaller number of studios than
          currently used seats may lead to the deletion of users during the
          upgrade.
        </Typography>
      </Alert>

      <Box sx={{ display: "flex", alignItems: "center", mt: 2, gap: 1 }}>
        <CheckCircleIcon color="success" fontSize="small" />
        <Typography variant="body2" sx={{ fontStyle: "italic" }}>
          Thank you for your attention!
        </Typography>
      </Box>
    </Alert>
  );
};

// Option 2: Paper-based component
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1),
  borderLeft: `4px solid ${theme.palette.warning.main}`,
  backgroundColor: theme.palette.warning.light + "20",
  position: "relative",
  overflow: "hidden",
}));

export const LicenseNotePaper = () => {
  return (
    <StyledPaper elevation={0}>
      <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
        <InfoIcon color="warning" sx={{ mr: 1.5, mt: 0.5 }} />
        <Box>
          <Typography variant="h6" color="warning.dark" gutterBottom>
            Note: License Update Instructions
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Before applying a new license key, please carefully follow these
            steps:
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
          Step 1: Review Current Usage
        </Typography>
        <List dense sx={{ pl: 2 }}>
          <ListItem sx={{ py: 0.5, pl: 0 }}>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <PeopleIcon fontSize="small" color="action" />
            </ListItemIcon>
            <ListItemText
              primary="Check the number of users in User Management section"
              secondary="Go to User Management to verify current user count"
              primaryTypographyProps={{ variant: "body2" }}
              secondaryTypographyProps={{ variant: "caption" }}
            />
          </ListItem>
          <ListItem sx={{ py: 0.5, pl: 0 }}>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <BusinessIcon fontSize="small" color="action" />
            </ListItemIcon>
            <ListItemText
              primary="Verify studios assigned to your license"
              secondary="Confirm studio count matches your license"
              primaryTypographyProps={{ variant: "body2" }}
              secondaryTypographyProps={{ variant: "caption" }}
            />
          </ListItem>
        </List>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
          Step 2: Address Discrepancies
        </Typography>
        <Typography variant="body2" paragraph>
          If numbers don't match, contact immediately:
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 1 }}>
          <Box
            sx={{
              p: 1.5,
              borderRadius: 1,
              bgcolor: "background.paper",
              flex: 1,
              minWidth: 200,
            }}
          >
            <Typography
              variant="caption"
              color="primary"
              sx={{ fontWeight: 600 }}
            >
              Customer Success Manager
            </Typography>
            <Typography variant="body2">
              Your dedicated CSM for assistance
            </Typography>
          </Box>
          <Box
            sx={{
              p: 1.5,
              borderRadius: 1,
              bgcolor: "background.paper",
              flex: 1,
              minWidth: 200,
            }}
          >
            <Typography
              variant="caption"
              color="primary"
              sx={{ fontWeight: 600 }}
            >
              Support Team
            </Typography>
            <Typography variant="body2">
              Technical support and license help
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          p: 2,
          borderRadius: 1,
          bgcolor: "error.light",
          border: "1px solid",
          borderColor: "error.main",
          mb: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <WarningIcon color="error" sx={{ mr: 1, mt: 0.25 }} />
          <Box>
            <Typography
              variant="subtitle2"
              color="error.dark"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Critical Warning
            </Typography>
            <Typography variant="body2" color="error.dark">
              Applying a license with fewer studios than currently used seats
              may result in <strong>user deletion</strong> during upgrade.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ textAlign: "center", pt: 1 }}>
        <Typography
          variant="body2"
          color="success.main"
          sx={{ fontStyle: "italic", fontWeight: 500 }}
        >
          Thank you for your attention and careful review!
        </Typography>
      </Box>
    </StyledPaper>
  );
};

// Option 3: Simple compact version
export const LicenseNoteCompact = () => {
  return (
    <Alert
      severity="info"
      icon={<InfoIcon sx={{ color: "#ff8200" }} />}
      sx={{
        borderRadius: "4px",
        alignItems: "center",
        border: "1px solid #ffa84d",
        background: "#fce7cd",
        marginBottom: "20px",
      }}
    >
      <Box sx={{ color: "#333" }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
          Note
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "12.5px" }}>
          Before applying a new license key, kindly review the number of users
          you have in the User Management section of the Leapwork platform and
          the number of studios assigned to your license. If you notice any
          discrepancies, please reach out to the Leapwork Customer Success
          Manager (CSM) or our support team for assistance. Please note that
          applying a license with a smaller number of studios than currently
          used seats may lead to the deletion of users during the upgrade. Thank
          you for your attention!
        </Typography>
      </Box>
    </Alert>
  );
};

// Main component that can be used
const AlertBox = ({ variant = "alert" }) => {
  switch (variant) {
    case "paper":
      return <LicenseNotePaper />;
    case "compact":
      return <LicenseNoteCompact />;
    case "alert":
    default:
      return <LicenseNoteAlert />;
  }
};

export default AlertBox;
