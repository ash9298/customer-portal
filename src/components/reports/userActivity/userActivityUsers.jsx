import { useEffect, useState, useMemo } from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  Divider,
  Tooltip,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  TableBody,
  Avatar,
  Stack,
  Chip,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { blue, grey } from "@mui/material/colors";

const activeUsers = [
  {
    Id: "1977216E-CA03-447C-AA19-1CF5E98FE7FA",
    User: "chsh",
    "Last Active Date": "2026-02-20T08:13:30.990Z",
  },
  {
    Id: "C51E34D9-7C25-43BC-A744-5742EF66F072",
    User: "localuser",
    "Last Active Date": "2026-02-23T10:09:47.527Z",
  },
  {
    Id: "F3BDF0B9-7A9D-409A-A695-577CB64C4DA9",
    User: "pji",
    "Last Active Date": "2026-02-23T16:57:04.197Z",
  },
  {
    Id: "491B07CF-176C-44DD-8BAC-6831E9279E60",
    User: "sgh",
    "Last Active Date": "2026-02-20T11:55:55.157Z",
  },
  {
    Id: "B53BAF84-75F2-4486-8775-819403507433",
    User: "admin",
    "Last Active Date": "2026-02-23T20:12:36.373Z",
  },
  {
    Id: "8DE57FF3-E8EB-42A3-AE89-86A83ADEFD5C",
    User: "admin",
    "Last Active Date": "2026-02-20T12:32:40.680Z",
  },
  {
    Id: "9AC36293-FA5B-495D-8053-DF3D4CA5C571",
    User: "admin",
    "Last Active Date": "2026-02-20T10:45:43.170Z",
  },
  {
    Id: "16FF60B4-FB8C-4849-A244-FA466639693E",
    User: "admin",
    "Last Active Date": "2026-02-20T05:23:43.087Z",
  },
];

const inactivUsers = [
  {
    Id: "8D234DCF-64BA-4894-896B-00E74E580038",
    User: "gau",
    "Last Active Date": "2024-04-03T10:21:52.013Z",
  },
  {
    Id: "1E5426F1-3163-4B08-B94B-01113006C665",
    User: "User03",
    "Last Active Date": "2025-04-01T12:37:24.840Z",
  },
  {
    Id: "49281B4F-7958-4652-A61F-01470D89BEF6",
    User: "GunjanGulati",
    "Last Active Date": "2025-06-23T13:49:18.407Z",
  },
  {
    Id: "87AB505A-02F9-4794-8408-017C4A50549C",
    User: "admin",
    "Last Active Date": "2025-02-25T10:57:13.323Z",
  },
  {
    Id: "6B5894E2-A6A3-4830-A1E9-03C99ADC716E",
    User: "skr",
    "Last Active Date": "2023-08-03T06:44:39.180Z",
  },
  {
    Id: "49281B4F-7958-4652-A61F-01470D89BEF6",
    User: "GunjanGulati",
    "Last Active Date": "2025-06-23T13:49:18.407Z",
  },
  {
    Id: "87AB505A-02F9-4794-8408-017C4A50549C",
    User: "admin",
    "Last Active Date": "2025-02-25T10:57:13.323Z",
  },
  {
    Id: "6B5894E2-A6A3-4830-A1E9-03C99ADC716E",
    User: "skr",
    "Last Active Date": "2023-08-03T06:44:39.180Z",
  },
];

// Function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

// Function to get initials from username
const getInitials = (username) => {
  return username.charAt(0).toUpperCase();
};

const UserActivityUsers = () => {
  // State for active users table
  const [activeOrderBy, setActiveOrderBy] = useState("User");
  const [activeOrder, setActiveOrder] = useState("asc");

  // State for inactive users table
  const [inactiveOrderBy, setInactiveOrderBy] = useState("User");
  const [inactiveOrder, setInactiveOrder] = useState("asc");

  // Handle sort for active users
  const handleActiveSort = (property) => {
    const isAsc = activeOrderBy === property && activeOrder === "asc";
    setActiveOrder(isAsc ? "desc" : "asc");
    setActiveOrderBy(property);
  };

  // Handle sort for inactive users
  const handleInactiveSort = (property) => {
    const isAsc = inactiveOrderBy === property && inactiveOrder === "asc";
    setInactiveOrder(isAsc ? "desc" : "asc");
    setInactiveOrderBy(property);
  };

  // Sort active users
  const sortedActiveUsers = useMemo(() => {
    return [...activeUsers].sort((a, b) => {
      let valueA, valueB;

      if (activeOrderBy === "Last Active Date") {
        valueA = new Date(a[activeOrderBy]).getTime();
        valueB = new Date(b[activeOrderBy]).getTime();
      } else {
        valueA = a[activeOrderBy]?.toLowerCase() || "";
        valueB = b[activeOrderBy]?.toLowerCase() || "";
      }

      if (valueA < valueB) return activeOrder === "asc" ? -1 : 1;
      if (valueA > valueB) return activeOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [activeUsers, activeOrderBy, activeOrder]);

  // Sort inactive users
  const sortedInactiveUsers = useMemo(() => {
    return [...inactivUsers].sort((a, b) => {
      let valueA, valueB;

      if (inactiveOrderBy === "Last Active Date") {
        valueA = new Date(a[inactiveOrderBy]).getTime();
        valueB = new Date(b[inactiveOrderBy]).getTime();
      } else {
        valueA = a[inactiveOrderBy]?.toLowerCase() || "";
        valueB = b[inactiveOrderBy]?.toLowerCase() || "";
      }

      if (valueA < valueB) return inactiveOrder === "asc" ? -1 : 1;
      if (valueA > valueB) return inactiveOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [inactivUsers, inactiveOrderBy, inactiveOrder]);

  // Get first 5 sorted active users for display
  const displayedActiveUsers = sortedActiveUsers.slice(0, 5);
  const activeUsersCount = activeUsers.length;

  // Get first 5 sorted inactive users for display
  const displayedInactiveUsers = sortedInactiveUsers.slice(0, 5);
  const inactiveUsersCount = inactivUsers.length;

  return (
    <Card
      variant="outlined"
      sx={{ mt: 3, borderRadius: 0, position: "relative" }}
    >
      <Grid container>
        {/* Active Users Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            borderRight: { md: "1px solid #e0e0e0" },
            borderBottom: { xs: "1px solid #e0e0e0", md: "none" },
            position: "relative",
            minWidth: "50%",
          }}
        >
          {/* Active Users Tooltip */}
          <Tooltip
            title="Users who have been active in the last 30 days"
            placement="top"
            arrow
            slotProps={{
              tooltip: {
                sx: {
                  bgcolor: "#fff",
                  color: "#222",
                  fontSize: 12,
                  boxShadow:
                    "0 2px 6px 0 rgba(0, 0, 0, .12), 0 6px 12px 0 rgba(55, 55, 55, .08)",
                  p: 1.5,
                },
              },
            }}
          >
            <IconButton
              size="small"
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                zIndex: 1,
              }}
            >
              <InfoOutlinedIcon fontSize="small" color="action" />
            </IconButton>
          </Tooltip>

          <Box sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
              Active Users
            </Typography>
            <Divider sx={{ mb: 2 }} />

            {/* Active Users Table */}
            <Table size="small" sx={{ minWidth: "100%", mb: 2 }}>
              <TableHead>
                <TableRow sx={{ bgcolor: grey[50] }}>
                  <TableCell
                    sx={{ fontWeight: 600, color: grey[600], border: "none" }}
                  >
                    <TableSortLabel
                      active={activeOrderBy === "User"}
                      direction={activeOrderBy === "User" ? activeOrder : "asc"}
                      onClick={() => handleActiveSort("User")}
                    >
                      User
                    </TableSortLabel>
                  </TableCell>
                  <TableCell
                    sx={{ fontWeight: 600, color: grey[600], border: "none" }}
                  >
                    <TableSortLabel
                      active={activeOrderBy === "Last Active Date"}
                      direction={
                        activeOrderBy === "Last Active Date"
                          ? activeOrder
                          : "asc"
                      }
                      onClick={() => handleActiveSort("Last Active Date")}
                    >
                      Last activity date
                    </TableSortLabel>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedActiveUsers.map((user) => (
                  <TableRow
                    key={user.Id}
                    sx={{
                      "&:last-child td, &:last-child th": {
                        borderBottom: "none",
                      },
                    }}
                  >
                    <TableCell
                      sx={{ borderBottom: "1px solid #e0e0e0", py: 1.5 }}
                    >
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Avatar
                          sx={{
                            width: 32,
                            height: 32,
                            bgcolor: blue[100],
                            color: blue[800],
                            fontSize: "0.875rem",
                            fontWeight: 500,
                          }}
                        >
                          {getInitials(user.User)}
                        </Avatar>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {user.User}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell
                      sx={{ borderBottom: "1px solid #e0e0e0", py: 1.5 }}
                    >
                      <Typography variant="body2" sx={{ color: grey[700] }}>
                        {formatDate(user["Last Active Date"])}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Results Chip */}
            <Stack direction="row" justifyContent="flex-start">
              <Chip
                label={`${activeUsersCount} results`}
                size="small"
                sx={{
                  borderRadius: 1,
                  bgcolor: grey[100],
                  color: grey[800],
                  fontWeight: 500,
                  fontSize: "0.75rem",
                  "& .MuiChip-label": { px: 1.5 },
                }}
              />
            </Stack>
          </Box>
        </Grid>

        {/* Inactive Users Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
            minWidth: "50%",
          }}
        >
          {/* Inactive Users Tooltip */}
          <Tooltip
            title="Users who have been inactive for more than 30 days"
            placement="top"
            arrow
            slotProps={{
              tooltip: {
                sx: {
                  bgcolor: "#fff",
                  color: "#222",
                  fontSize: 12,
                  boxShadow:
                    "0 2px 6px 0 rgba(0, 0, 0, .12), 0 6px 12px 0 rgba(55, 55, 55, .08)",
                  p: 1.5,
                },
              },
            }}
          >
            <IconButton
              size="small"
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                zIndex: 1,
              }}
            >
              <InfoOutlinedIcon fontSize="small" color="action" />
            </IconButton>
          </Tooltip>

          <Box sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
              Inactive Users
            </Typography>
            <Divider sx={{ mb: 2 }} />

            {/* Inactive Users Table */}
            <Table size="small" sx={{ minWidth: "100%", mb: 2 }}>
              <TableHead>
                <TableRow sx={{ bgcolor: grey[50] }}>
                  <TableCell
                    sx={{ fontWeight: 600, color: grey[600], border: "none" }}
                  >
                    <TableSortLabel
                      active={inactiveOrderBy === "User"}
                      direction={
                        inactiveOrderBy === "User" ? inactiveOrder : "asc"
                      }
                      onClick={() => handleInactiveSort("User")}
                    >
                      User
                    </TableSortLabel>
                  </TableCell>
                  <TableCell
                    sx={{ fontWeight: 600, color: grey[600], border: "none" }}
                  >
                    <TableSortLabel
                      active={inactiveOrderBy === "Last Active Date"}
                      direction={
                        inactiveOrderBy === "Last Active Date"
                          ? inactiveOrder
                          : "asc"
                      }
                      onClick={() => handleInactiveSort("Last Active Date")}
                    >
                      Last activity date
                    </TableSortLabel>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedInactiveUsers.map((user) => (
                  <TableRow
                    key={user.Id}
                    sx={{
                      "&:last-child td, &:last-child th": {
                        borderBottom: "none",
                      },
                    }}
                  >
                    <TableCell
                      sx={{ borderBottom: "1px solid #e0e0e0", py: 1.5 }}
                    >
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Avatar
                          sx={{
                            width: 32,
                            height: 32,
                            bgcolor: grey[200],
                            color: grey[700],
                            fontSize: "0.875rem",
                            fontWeight: 500,
                          }}
                        >
                          {getInitials(user.User)}
                        </Avatar>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {user.User}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell
                      sx={{ borderBottom: "1px solid #e0e0e0", py: 1.5 }}
                    >
                      <Typography variant="body2" sx={{ color: grey[700] }}>
                        {formatDate(user["Last Active Date"])}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Results Chip */}
            <Stack direction="row" justifyContent="flex-start">
              <Chip
                label={`${inactiveUsersCount} results`}
                size="small"
                sx={{
                  borderRadius: 1,
                  bgcolor: grey[100],
                  color: grey[800],
                  fontWeight: 500,
                  fontSize: "0.75rem",
                  "& .MuiChip-label": { px: 1.5 },
                }}
              />
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default UserActivityUsers;
