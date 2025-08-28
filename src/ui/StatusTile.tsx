import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Link,
  colors,
  Box,
} from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const StatusTile: React.FC = () => {
  return (
    <Box
      sx={{
        flex: 1, // takes remaining space
        overflowY: "auto",
        m: "10px 0",
        p: 1,
      }}
    >
      <Card
        sx={{
          border: "1px solid #0000001f",
          mb: 2,
          boxShadow: "none",
          borderRadius: "4px",
        }}
      >
        <CardContent>
          <img
            width="50"
            height="auto"
            alt="consent"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICMwMDA7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAuNzVweDsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjNWRhN2ZmOwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Im0yMy4wMywzNC4wOWwtOS4zOS05LjMyYy0uODctLjg2LS44OC0yLjI3LS4wMi0zLjE0bDIuNzItMi43NWMuODYtLjg3LDIuMjctLjg4LDMuMTQtLjAybDUuMSw1LjA3LDEzLjA1LTEyLjg4Yy44Ny0uODYsMi4yOC0uODYsMy4xNC4wMWwyLjcyLDIuNzVjLjg2Ljg3Ljg2LDIuMjgtLjAxLDMuMTRsLTE3LjM0LDE3LjEzYy0uODcuODYtMi4yNi44Ni0zLjEyLDBaIi8+CiAgPGc+CiAgICA8bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIxMiIgeTE9IjIyLjczIiB4Mj0iMTkuODIiIHkyPSIyMi43MyIvPgogICAgPGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSI3LjE5IiBjeT0iMjIuNzMiIHI9IjQuNTEiLz4KICAgIDxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iMjQuMzciIGN5PSIyMi43MyIgcj0iNC41MSIvPgogICAgPGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMjkuMiIgeTE9IjIyLjczIiB4Mj0iMzcuMDEiIHkyPSIyMi43MyIvPgogICAgPGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSI0MS41NyIgY3k9IjIyLjczIiByPSI0LjUxIi8+CiAgPC9nPgo8L3N2Zz4="
          ></img>
          <br />
          <Typography variant="body1" fontWeight="bold" mb={1}>
            Set up Leapwork Reports
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={1}>
            We are almost there! Follow the instructions to complete the setup
            and unlock Leapwork Reports.
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          border: "1px solid #0000001f",
          mb: 2,
          boxShadow: "none",
          borderRadius: "4px",
        }}
      >
        <CardContent>
          <WarningAmberIcon sx={{ color: "#f44336", fontSize: 32, mr: 1 }} />
          <br />
          <Typography variant="body1" fontWeight="bold" mb={1}>
            Having issues with Microsoft Edge automation?
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={1}>
            Visit this{" "}
            <Link
              href="#"
              underline="hover"
              sx={{ fontWeight: 500, color: colors.green[500] }}
            >
              link
            </Link>{" "}
            to read about how to fix it now.
          </Typography>

          <Typography variant="body2" color="text.secondary">
            See a list of other known issues{" "}
            <Link
              href="#"
              underline="hover"
              sx={{ fontWeight: 500, color: colors.green[500] }}
            >
              here
            </Link>
            .
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default StatusTile;
