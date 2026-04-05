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
import { commonSx } from "./styles/commonSx";

const alertBackgrounds = {
  surface: "#2a2a2a",
  app: "#202020",
  warningSoft: "rgba(255, 177, 20, 0.08)",
  danger: "rgba(216, 51, 41, 0.2)",
};

const alertSx = {
  primaryAlert: {
    mt: 2,
    mb: 3,
    borderRadius: 1,
    border: `1px solid ${darkTokens.border.default}`,
    backgroundColor: alertBackgrounds.surface,
    color: darkTokens.text.primary,
    "& .MuiAlert-message": { width: "100%" },
    "& .MuiAlert-icon": { color: darkTokens.status.warning },
  },
  closeIcon: { color: darkTokens.text.secondary },
  title: { fontWeight: 550, mb: 1, color: darkTokens.text.primary },
  secondaryText: { color: darkTokens.text.secondary },
  bodyText: { mb: 1.5, color: darkTokens.text.secondary },
  list: { py: 0, mb: 1.5 },
  listItem: { py: 0.5, pl: 0 },
  listItemIcon: { minWidth: 36 },
  iconTextRow: { display: "flex", alignItems: "center", gap: 0.5 },
  rowWrap: { display: "flex", gap: 2, mb: 1.5 },
  thanksRow: { display: "flex", alignItems: "center", mt: 2, gap: 1 },
  successIcon: { color: darkTokens.status.successLight },
  warningSoftIcon: { color: darkTokens.status.dangerSoft },
  bodyStrong: { fontWeight: 500, color: darkTokens.text.primary },
  paperIntroRow: { display: "flex", alignItems: "flex-start", mb: 2 },
  paperInfoIcon: { mr: 1.5, mt: 0.5, color: darkTokens.status.warning },
  paperHeading: { color: darkTokens.text.primary },
  sectionWrap: { mb: 3 },
  denseListWithIndent: { pl: 2 },
  listItemIconCompact: { minWidth: 32 },
  contactCardsWrap: { display: "flex", flexWrap: "wrap", gap: 2, mt: 1 },
  contactCard: {
    p: 1.5,
    borderRadius: 1,
    bgcolor: alertBackgrounds.app,
    border: `1px solid ${darkTokens.border.subtle}`,
    flex: 1,
    minWidth: 200,
  },
  contactCardTitle: { fontWeight: 550, color: darkTokens.accent.info },
  warningCard: {
    p: 2,
    borderRadius: 1,
    bgcolor: alertBackgrounds.danger,
    border: "1px solid",
    borderColor: darkTokens.status.dangerBorder,
    mb: 2,
  },
  warningRow: { display: "flex", alignItems: "flex-start" },
  warningIcon: { mr: 1, mt: 0.25, color: darkTokens.status.dangerSoft },
  warningTitle: { fontWeight: 550, color: darkTokens.text.primary },
  compactAlert: {
    borderRadius: "4px",
    alignItems: "center",
    border: `1px solid ${darkTokens.status.warningBg}`,
    background: alertBackgrounds.warningSoft,
    marginBottom: "20px",
    "& .MuiAlert-icon": {
      color: darkTokens.status.warning,
    },
  },
  compactIcon: { color: darkTokens.status.warning },
  compactRootText: { color: darkTokens.text.secondary },
  compactBodyText: { fontSize: "12.5px", ...commonSx.secondaryText },
  centerTextWrap: { textAlign: "center", pt: 1 },
  centerSuccessText: {
    fontStyle: "italic",
    fontWeight: 500,
    color: darkTokens.status.successLight,
  },
  dividerY2: { my: 2, ...commonSx.divider },
  dangerAlert: {
    mt: 1.5,
    borderRadius: 1,
    border: `1px solid ${darkTokens.status.dangerBorder}`,
    backgroundColor: alertBackgrounds.danger,
    color: darkTokens.text.primary,
    "& .MuiAlert-icon": { color: darkTokens.status.dangerSoft },
  },
};

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
      sx={alertSx.primaryAlert}
      action={
        <IconButton
          aria-label="close"
          sx={alertSx.closeIcon}
          size="small"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      }
    >
      <AlertTitle sx={alertSx.title}>
        Important License Update Note
      </AlertTitle>
      <Typography variant="body2" sx={alertSx.bodyText}>
        Before applying a new license key, kindly review:
      </Typography>

      <List dense sx={alertSx.list}>
        <ListItem sx={alertSx.listItem}>
          <ListItemIcon sx={alertSx.listItemIcon}>
            <PeopleIcon fontSize="small" sx={alertSx.secondaryText} />
          </ListItemIcon>
          <ListItemText
            primary="Number of users in the User Management section"
            primaryTypographyProps={{
              variant: "body2",
              color: darkTokens.text.secondary,
            }}
          />
        </ListItem>
        <ListItem sx={alertSx.listItem}>
          <ListItemIcon sx={alertSx.listItemIcon}>
            <BusinessIcon fontSize="small" sx={alertSx.secondaryText} />
          </ListItemIcon>
          <ListItemText
            primary="Number of studios assigned to your license"
            primaryTypographyProps={{
              variant: "body2",
              color: darkTokens.text.secondary,
            }}
          />
        </ListItem>
      </List>

      <Typography variant="body2" sx={alertSx.bodyText}>
        If you notice any discrepancies, please reach out to:
      </Typography>

      <Box sx={alertSx.rowWrap}>
        <Box sx={alertSx.iconTextRow}>
          <ContactSupportIcon fontSize="small" sx={alertSx.secondaryText} />
          <Typography variant="body2" sx={alertSx.secondaryText}>
            Leapwork Customer Success Manager (CSM)
          </Typography>
        </Box>
        <Box sx={alertSx.iconTextRow}>
          <ContactSupportIcon fontSize="small" sx={alertSx.secondaryText} />
          <Typography variant="body2" sx={alertSx.secondaryText}>
            Support Team
          </Typography>
        </Box>
      </Box>

      <Alert
        severity="error"
        sx={alertSx.dangerAlert}
        icon={<WarningIcon sx={alertSx.warningSoftIcon} />}
      >
        <Typography variant="body2" sx={alertSx.bodyStrong}>
          Important: Applying a license with a smaller number of studios than
          currently used seats may lead to the deletion of users during the
          upgrade.
        </Typography>
      </Alert>

      <Box sx={alertSx.thanksRow}>
        <CheckCircleIcon sx={alertSx.successIcon} fontSize="small" />
        <Typography
          variant="body2"
          sx={{ fontStyle: "italic", ...alertSx.secondaryText }}
        >
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
  backgroundColor: alertBackgrounds.surface,
  color: darkTokens.text.primary,
  position: "relative",
  overflow: "hidden",
}));

export const LicenseNotePaper = () => {
  return (
    <StyledPaper elevation={0}>
      <Box sx={alertSx.paperIntroRow}>
        <InfoIcon sx={alertSx.paperInfoIcon} />
        <Box>
          <Typography
            variant="h6"
            sx={alertSx.paperHeading}
            gutterBottom
          >
            Note: License Update Instructions
          </Typography>
          <Typography
            variant="body2"
            color={darkTokens.text.secondary}
            paragraph
          >
            Before applying a new license key, please carefully follow these
            steps:
          </Typography>
        </Box>
      </Box>

      <Divider sx={alertSx.dividerY2} />

      <Box sx={alertSx.sectionWrap}>
        <Typography
          variant="subtitle2"
          gutterBottom
          sx={alertSx.title}
        >
          Step 1: Review Current Usage
        </Typography>
        <List dense sx={alertSx.denseListWithIndent}>
          <ListItem sx={alertSx.listItem}>
            <ListItemIcon sx={alertSx.listItemIconCompact}>
              <PeopleIcon
                fontSize="small"
                sx={alertSx.secondaryText}
              />
            </ListItemIcon>
            <ListItemText
              primary="Check the number of users in User Management section"
              secondary="Go to User Management to verify current user count"
              primaryTypographyProps={{
                variant: "body2",
                color: darkTokens.text.primary,
              }}
              secondaryTypographyProps={{
                variant: "caption",
                color: darkTokens.text.secondary,
              }}
            />
          </ListItem>
          <ListItem sx={alertSx.listItem}>
            <ListItemIcon sx={alertSx.listItemIconCompact}>
              <BusinessIcon
                fontSize="small"
                sx={alertSx.secondaryText}
              />
            </ListItemIcon>
            <ListItemText
              primary="Verify studios assigned to your license"
              secondary="Confirm studio count matches your license"
              primaryTypographyProps={{
                variant: "body2",
                color: darkTokens.text.primary,
              }}
              secondaryTypographyProps={{
                variant: "caption",
                color: darkTokens.text.secondary,
              }}
            />
          </ListItem>
        </List>
      </Box>

      <Box sx={alertSx.sectionWrap}>
        <Typography
          variant="subtitle2"
          gutterBottom
          sx={alertSx.title}
        >
          Step 2: Address Discrepancies
        </Typography>
        <Typography variant="body2" color={darkTokens.text.secondary} paragraph>
          If numbers don't match, contact immediately:
        </Typography>
        <Box sx={alertSx.contactCardsWrap}>
          <Box sx={alertSx.contactCard}>
            <Typography
              variant="caption"
              sx={alertSx.contactCardTitle}
            >
              Customer Success Manager
            </Typography>
            <Typography
              variant="body2"
              sx={alertSx.secondaryText}
            >
              Your dedicated CSM for assistance
            </Typography>
          </Box>
          <Box sx={alertSx.contactCard}>
            <Typography
              variant="caption"
              sx={alertSx.contactCardTitle}
            >
              Support Team
            </Typography>
            <Typography
              variant="body2"
              sx={alertSx.secondaryText}
            >
              Technical support and license help
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={alertSx.warningCard}>
        <Box sx={alertSx.warningRow}>
          <WarningIcon sx={alertSx.warningIcon} />
          <Box>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={alertSx.warningTitle}
            >
              Critical Warning
            </Typography>
            <Typography variant="body2" sx={commonSx.panelTitle}>
              Applying a license with fewer studios than currently used seats
              may result in <strong>user deletion</strong> during upgrade.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={alertSx.dividerY2} />

      <Box sx={alertSx.centerTextWrap}>
        <Typography variant="body2" sx={alertSx.centerSuccessText}>
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
      icon={<InfoIcon sx={alertSx.compactIcon} />}
      sx={alertSx.compactAlert}
    >
      <Box sx={alertSx.compactRootText}>
        <Typography
          variant="subtitle2"
          sx={alertSx.title}
        >
          Note
        </Typography>
        <Typography variant="body2" sx={alertSx.compactBodyText}>
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
