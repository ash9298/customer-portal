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
import { darkTokens } from "./theme";

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
        border: `1px solid ${darkTokens.border.default}`,
        backgroundColor: darkTokens.background.surface,
        color: darkTokens.text.primary,
        "& .MuiAlert-message": { width: "100%" },
        "& .MuiAlert-icon": { color: darkTokens.status.warning },
      }}
      action={
        <IconButton
          aria-label="close"
          sx={{ color: darkTokens.text.secondary }}
          size="small"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      }
    >
      <AlertTitle sx={{ fontWeight: 550, mb: 1, color: darkTokens.text.primary }}>
        Important License Update Note
      </AlertTitle>
      <Typography variant="body2" sx={{ mb: 1.5, color: darkTokens.text.secondary }}>
        Before applying a new license key, kindly review:
      </Typography>

      <List dense sx={{ py: 0, mb: 1.5 }}>
        <ListItem sx={{ py: 0.5, pl: 0 }}>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <PeopleIcon fontSize="small" sx={{ color: darkTokens.text.secondary }} />
          </ListItemIcon>
          <ListItemText
            primary="Number of users in the User Management section"
            primaryTypographyProps={{ variant: "body2", color: darkTokens.text.secondary }}
          />
        </ListItem>
        <ListItem sx={{ py: 0.5, pl: 0 }}>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <BusinessIcon fontSize="small" sx={{ color: darkTokens.text.secondary }} />
          </ListItemIcon>
          <ListItemText
            primary="Number of studios assigned to your license"
            primaryTypographyProps={{ variant: "body2", color: darkTokens.text.secondary }}
          />
        </ListItem>
      </List>

      <Typography variant="body2" sx={{ mb: 1.5, color: darkTokens.text.secondary }}>
        If you notice any discrepancies, please reach out to:
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 1.5 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <ContactSupportIcon fontSize="small" sx={{ color: darkTokens.text.secondary }} />
          <Typography variant="body2" sx={{ color: darkTokens.text.secondary }}>
            Leapwork Customer Success Manager (CSM)
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <ContactSupportIcon fontSize="small" sx={{ color: darkTokens.text.secondary }} />
          <Typography variant="body2" sx={{ color: darkTokens.text.secondary }}>
            Support Team
          </Typography>
        </Box>
      </Box>

      <Alert
        severity="error"
        sx={{
          mt: 1.5,
          borderRadius: 1,
          border: `1px solid ${darkTokens.status.dangerBorder}`,
          backgroundColor: darkTokens.status.dangerBg,
          color: darkTokens.text.primary,
          "& .MuiAlert-icon": { color: darkTokens.status.dangerSoft },
        }}
        icon={<WarningIcon sx={{ color: darkTokens.status.dangerSoft }} />}
      >
        <Typography variant="body2" sx={{ fontWeight: 500, color: darkTokens.text.primary }}>
          Important: Applying a license with a smaller number of studios than
          currently used seats may lead to the deletion of users during the
          upgrade.
        </Typography>
      </Alert>

      <Box sx={{ display: "flex", alignItems: "center", mt: 2, gap: 1 }}>
        <CheckCircleIcon sx={{ color: darkTokens.status.successLight }} fontSize="small" />
        <Typography variant="body2" sx={{ fontStyle: "italic", color: darkTokens.text.secondary }}>
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
  borderLeft: `4px solid ${darkTokens.status.warning}`,
  border: `1px solid ${darkTokens.border.default}`,
  backgroundColor: darkTokens.background.surface,
  color: darkTokens.text.primary,
  position: "relative",
  overflow: "hidden",
}));

export const LicenseNotePaper = () => {
  return (
    <StyledPaper elevation={0}>
      <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
        <InfoIcon sx={{ mr: 1.5, mt: 0.5, color: darkTokens.status.warning }} />
        <Box>
          <Typography variant="h6" sx={{ color: darkTokens.text.primary }} gutterBottom>
            Note: License Update Instructions
          </Typography>
          <Typography variant="body2" color={darkTokens.text.secondary} paragraph>
            Before applying a new license key, please carefully follow these
            steps:
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2, borderColor: darkTokens.border.default }} />

      <Box sx={{ mb: 3 }}>
        <Typography
          variant="subtitle2"
          gutterBottom
          sx={{ fontWeight: 550, color: darkTokens.text.primary }}
        >
          Step 1: Review Current Usage
        </Typography>
        <List dense sx={{ pl: 2 }}>
          <ListItem sx={{ py: 0.5, pl: 0 }}>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <PeopleIcon fontSize="small" sx={{ color: darkTokens.text.secondary }} />
            </ListItemIcon>
            <ListItemText
              primary="Check the number of users in User Management section"
              secondary="Go to User Management to verify current user count"
              primaryTypographyProps={{ variant: "body2", color: darkTokens.text.primary }}
              secondaryTypographyProps={{ variant: "caption", color: darkTokens.text.secondary }}
            />
          </ListItem>
          <ListItem sx={{ py: 0.5, pl: 0 }}>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <BusinessIcon fontSize="small" sx={{ color: darkTokens.text.secondary }} />
            </ListItemIcon>
            <ListItemText
              primary="Verify studios assigned to your license"
              secondary="Confirm studio count matches your license"
              primaryTypographyProps={{ variant: "body2", color: darkTokens.text.primary }}
              secondaryTypographyProps={{ variant: "caption", color: darkTokens.text.secondary }}
            />
          </ListItem>
        </List>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography
          variant="subtitle2"
          gutterBottom
          sx={{ fontWeight: 550, color: darkTokens.text.primary }}
        >
          Step 2: Address Discrepancies
        </Typography>
        <Typography variant="body2" color={darkTokens.text.secondary} paragraph>
          If numbers don't match, contact immediately:
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 1 }}>
          <Box
            sx={{
              p: 1.5,
              borderRadius: 1,
              bgcolor: darkTokens.background.app,
              border: `1px solid ${darkTokens.border.subtle}`,
              flex: 1,
              minWidth: 200,
            }}
          >
            <Typography
              variant="caption"
              sx={{ fontWeight: 550, color: darkTokens.accent.info }}
            >
              Customer Success Manager
            </Typography>
            <Typography variant="body2" sx={{ color: darkTokens.text.secondary }}>
              Your dedicated CSM for assistance
            </Typography>
          </Box>
          <Box
            sx={{
              p: 1.5,
              borderRadius: 1,
              bgcolor: darkTokens.background.app,
              border: `1px solid ${darkTokens.border.subtle}`,
              flex: 1,
              minWidth: 200,
            }}
          >
            <Typography
              variant="caption"
              sx={{ fontWeight: 550, color: darkTokens.accent.info }}
            >
              Support Team
            </Typography>
            <Typography variant="body2" sx={{ color: darkTokens.text.secondary }}>
              Technical support and license help
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          p: 2,
          borderRadius: 1,
          bgcolor: darkTokens.status.dangerBg,
          border: "1px solid",
          borderColor: darkTokens.status.dangerBorder,
          mb: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <WarningIcon sx={{ mr: 1, mt: 0.25, color: darkTokens.status.dangerSoft }} />
          <Box>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: 550, color: darkTokens.text.primary }}
            >
              Critical Warning
            </Typography>
            <Typography variant="body2" sx={{ color: darkTokens.text.primary }}>
              Applying a license with fewer studios than currently used seats
              may result in <strong>user deletion</strong> during upgrade.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ my: 2, borderColor: darkTokens.border.default }} />

      <Box sx={{ textAlign: "center", pt: 1 }}>
        <Typography
          variant="body2"
          sx={{ fontStyle: "italic", fontWeight: 500, color: darkTokens.status.successLight }}
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
      icon={<InfoIcon sx={{ color: darkTokens.status.warning }} />}
      sx={{
        borderRadius: "4px",
        alignItems: "center",
        border: `1px solid ${darkTokens.status.warningBg}`,
        background: darkTokens.status.warningBgSoft,
        marginBottom: "20px",
        "& .MuiAlert-icon": {
          color: darkTokens.status.warning,
        },
      }}
    >
      <Box sx={{ color: darkTokens.text.secondary }}>
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: 550, color: darkTokens.text.primary }}
        >
          Note
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "12.5px", color: darkTokens.text.secondary }}
        >
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
