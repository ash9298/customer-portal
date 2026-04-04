import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  DataGrid,
  Toolbar,
  ToolbarButton,
  ColumnsPanelTrigger,
  FilterPanelTrigger,
  ExportCsv,
  ExportPrint,
  QuickFilter,
  QuickFilterControl,
  QuickFilterClear,
  QuickFilterTrigger,
} from "@mui/x-data-grid";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import FilterListIcon from "@mui/icons-material/FilterList";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import CancelIcon from "@mui/icons-material/Cancel";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import { darkTokens } from "./theme";

type OwnerState = {
  expanded: boolean;
};

const StyledQuickFilter = styled(QuickFilter)({
  display: "grid",
  alignItems: "center",
});

const StyledToolbarButton = styled(ToolbarButton)<{ ownerState: OwnerState }>(
  ({ theme, ownerState }) => ({
    gridArea: "1 / 1",
    width: "min-content",
    height: "min-content",
    borderRadius: 4,
    color: darkTokens.text.secondary,
    zIndex: 1,
    opacity: ownerState.expanded ? 0 : 1,
    pointerEvents: ownerState.expanded ? "none" : "auto",
    transition: theme.transitions.create(["opacity"]),
    "&:hover": {
      backgroundColor: darkTokens.overlay.hover,
    },
  })
);

const StyledTextField = styled(TextField)<{
  ownerState: OwnerState;
}>(({ theme, ownerState }) => ({
  gridArea: "1 / 1",
  overflowX: "clip",
  width: ownerState.expanded ? 260 : "var(--trigger-width)",
  opacity: ownerState.expanded ? 1 : 0,
  transition: theme.transitions.create(["width", "opacity"]),
  "& .MuiInputBase-root": {
    color: darkTokens.text.primary,
    backgroundColor: darkTokens.background.app,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: darkTokens.border.default,
  },
  "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: darkTokens.text.secondary,
  },
  "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: darkTokens.accent.primary,
  },
  "& .MuiInputBase-input::placeholder": {
    color: darkTokens.text.secondary,
    opacity: 1,
  },
}));

const CustomToolbar = () => {
  const [exportMenuOpen, setExportMenuOpen] = React.useState(false);
  const exportMenuTriggerRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Toolbar style={{ color: darkTokens.text.secondary }}>
      <Typography
        fontWeight={550}
        sx={{ flex: 1, mx: 0.5, color: darkTokens.text.primary }}
      >
        Toolbar
      </Typography>

      <Tooltip
        title="Columns"
        slotProps={{
          tooltip: {
            sx: {
              bgcolor: darkTokens.background.elevated,
              color: darkTokens.text.primary,
              border: `1px solid ${darkTokens.border.default}`,
            },
          },
        }}
      >
        <ColumnsPanelTrigger
          render={
            <ToolbarButton material={{ sx: { color: darkTokens.text.secondary } }} />
          }
        >
          <ViewColumnIcon fontSize="small" sx={{ color: darkTokens.text.secondary }} />
        </ColumnsPanelTrigger>
      </Tooltip>

      <Tooltip
        title="Filters"
        slotProps={{
          tooltip: {
            sx: {
              bgcolor: darkTokens.background.elevated,
              color: darkTokens.text.primary,
              border: `1px solid ${darkTokens.border.default}`,
            },
          },
        }}
      >
        <FilterPanelTrigger
          render={(props, state) => (
            <ToolbarButton
              {...props}
              color="default"
              material={{ sx: { color: darkTokens.text.secondary } }}
            >
              <Badge
                badgeContent={state.filterCount}
                color="primary"
                variant="dot"
              >
                <FilterListIcon
                  fontSize="small"
                  sx={{ color: darkTokens.text.secondary }}
                />
              </Badge>
            </ToolbarButton>
          )}
        />
      </Tooltip>

      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ mx: 0.5, borderColor: darkTokens.border.default }}
      />

      <Tooltip
        title="Export"
        slotProps={{
          tooltip: {
            sx: {
              bgcolor: darkTokens.background.elevated,
              color: darkTokens.text.primary,
              border: `1px solid ${darkTokens.border.default}`,
            },
          },
        }}
      >
        <ToolbarButton
          ref={exportMenuTriggerRef}
          id="export-menu-trigger"
          aria-controls="export-menu"
          aria-haspopup="true"
          aria-expanded={exportMenuOpen ? "true" : undefined}
          onClick={() => setExportMenuOpen(true)}
          material={{ sx: { color: darkTokens.text.secondary } }}
        >
          <FileDownloadIcon
            fontSize="small"
            sx={{ color: darkTokens.text.secondary }}
          />
        </ToolbarButton>
      </Tooltip>

      <Menu
        id="export-menu"
        anchorEl={exportMenuTriggerRef.current}
        open={exportMenuOpen}
        onClose={() => setExportMenuOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{
          list: {
            "aria-labelledby": "export-menu-trigger",
            sx: {
              backgroundColor: darkTokens.background.surface,
              color: darkTokens.text.primary,
            },
          },
          paper: {
            sx: {
              backgroundColor: darkTokens.background.surface,
              border: `1px solid ${darkTokens.border.default}`,
            },
          },
        }}
      >
        <ExportPrint
          render={
            <MenuItem sx={{ color: darkTokens.text.primary, fontSize: 13 }} />
          }
          onClick={() => setExportMenuOpen(false)}
        >
          Print
        </ExportPrint>
        <ExportCsv
          render={
            <MenuItem sx={{ color: darkTokens.text.primary, fontSize: 13 }} />
          }
          onClick={() => setExportMenuOpen(false)}
        >
          Download as CSV
        </ExportCsv>
      </Menu>

      <StyledQuickFilter>
        <QuickFilterTrigger
          render={(triggerProps, state) => (
            <Tooltip
              title="Search"
              enterDelay={0}
              slotProps={{
                tooltip: {
                  sx: {
                    bgcolor: darkTokens.background.elevated,
                    color: darkTokens.text.primary,
                    border: `1px solid ${darkTokens.border.default}`,
                  },
                },
              }}
            >
              <StyledToolbarButton
                {...triggerProps}
                ownerState={{ expanded: state.expanded }}
                color="default"
                aria-disabled={state.expanded}
              >
                <SearchIcon
                  fontSize="small"
                  sx={{ color: darkTokens.text.secondary }}
                />
              </StyledToolbarButton>
            </Tooltip>
          )}
        />
        <QuickFilterControl
          render={({ ref, ...controlProps }, state) => (
            <StyledTextField
              {...controlProps}
              ownerState={{ expanded: state.expanded }}
              inputRef={ref}
              aria-label="Search"
              placeholder="Search..."
              size="small"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon
                        fontSize="small"
                        sx={{ color: darkTokens.text.secondary }}
                      />
                    </InputAdornment>
                  ),
                  endAdornment: state.value ? (
                    <InputAdornment position="end">
                      <QuickFilterClear
                        edge="end"
                        size="small"
                        aria-label="Clear search"
                        material={{ sx: { marginRight: -0.75 } }}
                      >
                        <CancelIcon
                          fontSize="small"
                          sx={{ color: darkTokens.text.secondary }}
                        />
                      </QuickFilterClear>
                    </InputAdornment>
                  ) : null,
                  ...controlProps.slotProps?.input,
                },
                ...controlProps.slotProps,
              }}
            />
          )}
        />
      </StyledQuickFilter>
    </Toolbar>
  );
};

type DataTableProps = React.ComponentProps<typeof DataGrid>;

export const DataTable = (props: DataTableProps) => {
  return (
    <div style={{ height: "683px", width: "100%" }}>
      <DataGrid
        {...props}
        sx={{
          backgroundColor: darkTokens.background.surface,
          color: darkTokens.text.primary,
          borderColor: darkTokens.border.default,
          borderRadius: "4px",
          "& .MuiDataGrid-topContainer": {
            backgroundColor: darkTokens.background.surface,
          },
          "& .MuiDataGrid-toolbarContainer": {
            borderBottom: `1px solid ${darkTokens.border.strong}`,
            minHeight: "40px",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: darkTokens.background.surface,
            borderBottom: `1px solid ${darkTokens.border.strong}`,
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            color: darkTokens.text.secondary,
            fontWeight: 550,
            fontSize: "13px",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: `1px solid ${darkTokens.border.strong}`,
            color: darkTokens.text.primary,
            fontSize: "13px",
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: darkTokens.overlay.rowHover,
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: `1px solid ${darkTokens.border.strong}`,
            color: darkTokens.text.secondary,
          },
          "& .MuiTablePagination-root, & .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows, & .MuiTablePagination-selectIcon":
            {
              color: darkTokens.text.secondary,
            },
          "& .MuiDataGrid-menuIconButton, & .MuiDataGrid-sortIcon, & .MuiIconButton-root":
            {
              color: darkTokens.text.secondary,
            },
          "& .MuiCheckbox-root": {
            color: darkTokens.text.secondary,
          },
          "& .MuiDataGrid-overlay": {
            backgroundColor: darkTokens.background.surface,
            color: darkTokens.text.secondary,
          },
        }}
        slots={{ toolbar: CustomToolbar }}
        initialState={{
          pagination: { paginationModel: { pageSize: 10, page: 0 } },
        }}
        //  pageSizeOptions={[5, 10]}
      />
    </div>
  );
};
