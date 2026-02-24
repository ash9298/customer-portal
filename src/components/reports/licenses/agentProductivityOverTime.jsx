import React from "react";
import Plot from "react-plotly.js";
import {
  Box,
  Typography,
  Grid,
  Divider,
  Card,
  Tooltip,
  IconButton,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const AgentProductivityOverTime = () => {
  // Your provided data
  const chartData = [
    {
      x: [
        "2026-02-23T00:00:00.000Z",
        "2026-02-22T00:00:00.000Z",
        "2026-02-21T00:00:00.000Z",
        "2026-02-20T00:00:00.000Z",
        "2026-02-19T00:00:00.000Z",
        "2026-02-18T00:00:00.000Z",
        "2026-02-17T00:00:00.000Z",
      ],
      y: [204.97364000876743, 0, 0, 0, 0, 0, 0],
      mode: "lines+markers",
      name: "Leapwork Cloud Agent 1",
      LicenseId: "1736246628863999",
      type: "scatter",
      hovertemplate:
        "Date: %{x|%Y-%m-%d %H:%M:%S}<br>Run time: %{y} Min<br>License ID: 1736246628863999<extra></extra>",
      line: {
        color: "#2563eb",
        width: 2,
      },
      marker: {
        color: "#2563eb",
        size: 6,
      },
    },
    {
      x: [
        "2026-02-23T00:00:00.000Z",
        "2026-02-22T00:00:00.000Z",
        "2026-02-21T00:00:00.000Z",
        "2026-02-20T00:00:00.000Z",
        "2026-02-19T00:00:00.000Z",
        "2026-02-18T00:00:00.000Z",
        "2026-02-17T00:00:00.000Z",
      ],
      y: [99.97170847058297, 0, 0, 0, 0, 0, 0],
      mode: "lines+markers",
      name: "Leapwork Cloud Agent 2",
      LicenseId: "1736246628863999",
      type: "scatter",
      hovertemplate:
        "Date: %{x|%Y-%m-%d %H:%M:%S}<br>Run time: %{y} Min<br>License ID: 1736246628863999<extra></extra>",
      line: {
        color: "#dc2626",
        width: 2,
      },
      marker: {
        color: "#dc2626",
        size: 6,
      },
    },
    {
      x: [
        "2026-02-23T00:00:00.000Z",
        "2026-02-22T00:00:00.000Z",
        "2026-02-21T00:00:00.000Z",
        "2026-02-20T00:00:00.000Z",
        "2026-02-19T00:00:00.000Z",
        "2026-02-18T00:00:00.000Z",
        "2026-02-17T00:00:00.000Z",
      ],
      y: [123.93357770045598, 0, 0, 0, 0, 0, 0],
      mode: "lines+markers",
      name: "Remote Agent 1",
      LicenseId: "1736246628863999",
      type: "scatter",
      hovertemplate:
        "Date: %{x|%Y-%m-%d %H:%M:%S}<br>Run time: %{y} Min<br>License ID: 1736246628863999<extra></extra>",
      line: {
        color: "#f59e0b",
        width: 2,
      },
      marker: {
        color: "#f59e0b",
        size: 6,
      },
    },
    {
      x: [
        "2026-02-23T00:00:00.000Z",
        "2026-02-22T00:00:00.000Z",
        "2026-02-21T00:00:00.000Z",
        "2026-02-20T00:00:00.000Z",
        "2026-02-19T00:00:00.000Z",
        "2026-02-18T00:00:00.000Z",
        "2026-02-17T00:00:00.000Z",
      ],
      y: [44.73352185686429, 0, 0, 0, 0, 0, 0],
      mode: "lines+markers",
      name: "Remote Agent 2",
      LicenseId: "1736246628863999",
      type: "scatter",
      hovertemplate:
        "Date: %{x|%Y-%m-%d %H:%M:%S}<br>Run time: %{y} Min<br>License ID: 1736246628863999<extra></extra>",
      line: {
        color: "#10b981",
        width: 2,
      },
      marker: {
        color: "#10b981",
        size: 6,
      },
    },
    {
      x: [
        "2026-02-23T00:00:00.000Z",
        "2026-02-22T00:00:00.000Z",
        "2026-02-21T00:00:00.000Z",
        "2026-02-20T00:00:00.000Z",
        "2026-02-19T00:00:00.000Z",
        "2026-02-18T00:00:00.000Z",
        "2026-02-17T00:00:00.000Z",
      ],
      y: [44.29104508360227, 0, 0, 0, 0, 0, 0],
      mode: "lines+markers",
      name: "Remote Agent 4",
      LicenseId: "1736246628863999",
      type: "scatter",
      hovertemplate:
        "Date: %{x|%Y-%m-%d %H:%M:%S}<br>Run time: %{y} Min<br>License ID: 1736246628863999<extra></extra>",
      line: {
        color: "#8b5cf6",
        width: 2,
      },
      marker: {
        color: "#8b5cf6",
        size: 6,
      },
    },
    {
      x: [
        "2026-02-23T00:00:00.000Z",
        "2026-02-22T00:00:00.000Z",
        "2026-02-21T00:00:00.000Z",
        "2026-02-20T00:00:00.000Z",
        "2026-02-19T00:00:00.000Z",
        "2026-02-18T00:00:00.000Z",
        "2026-02-17T00:00:00.000Z",
      ],
      y: [61.467853550116224, 0, 0, 0, 0, 0, 0],
      mode: "lines+markers",
      name: "Remote Agent 3",
      LicenseId: "1736246628863999",
      type: "scatter",
      hovertemplate:
        "Date: %{x|%Y-%m-%d %H:%M:%S}<br>Run time: %{y} Min<br>License ID: 1736246628863999<extra></extra>",
      line: {
        color: "#ec4899",
        width: 2,
      },
      marker: {
        color: "#ec4899",
        size: 6,
      },
    },
  ];

  // Format dates for x-axis (e.g., "Feb 17")
  const formatDateForAxis = (dateString) => {
    const d = new Date(dateString);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  // Get unique formatted dates for x-axis
  const formattedDates =
    chartData[0]?.x.map((date) => formatDateForAxis(date)) || [];

  // Customize colors for each agent
  const colors = [
    "#2563eb", // Blue
    "#dc2626", // Red
    "#f59e0b", // Orange
    "#10b981", // Green
    "#ec4899", // Pink
    "#8b5cf6", // Purple
  ];

  // Update each trace with custom colors
  const updatedChartData = chartData.map((trace, index) => ({
    ...trace,
    line: {
      color: colors[index % colors.length],
      width: 2,
    },
    marker: {
      color: colors[index % colors.length],
      size: 6,
    },
    x: trace.x.map((date) => formatDateForAxis(date)), // Format x-axis dates
  }));

  const layout = {
    title: {
      font: {
        size: 16,
        color: "#111827",
        weight: 500,
      },
      x: 0, // Left align
    },
    xaxis: {
      title: {
        text: "Date",
        font: {
          size: 12,
          color: "#6B7280",
        },
      },
      tickangle: 0,
      tickfont: {
        size: 11,
        color: "#6B7280",
      },
      gridcolor: "#F3F4F6",
      showline: true,
      linecolor: "#E5E7EB",
      linewidth: 1,
      mirror: true,
      side: "bottom",
      tickvals: formattedDates,
      ticktext: formattedDates,
      // Reverse the x-axis order to show Feb 23 first, Feb 17 last
      categoryorder: "array",
      categoryarray: [...formattedDates].reverse(),
    },
    yaxis: {
      title: {
        text: "Run Time (Minutes)",
        font: {
          size: 12,
          color: "#6B7280",
        },
      },
      tickfont: {
        color: "#6B7280",
        size: 11,
      },
      gridcolor: "#F3F4F6",
      rangemode: "nonnegative",
      zeroline: true,
      zerolinecolor: "#E5E7EB",
      zerolinewidth: 1,
      side: "left",
      tickvals: [0, 50, 100, 150, 200],
      ticktext: ["0", "50", "100", "150", "200"],
      showline: true,
      linecolor: "#E5E7EB",
      linewidth: 1,
      mirror: true,
      // Reverse the y-axis (200 at bottom, 0 at top)
    },
    legend: {
      orientation: "h",
      yanchor: "top",
      y: -0.25,
      xanchor: "center",
      x: 0.5,
      bgcolor: "rgba(255,255,255,0.95)",
      bordercolor: "#E5E7EB",
      borderwidth: 1,
      font: {
        size: 11,
        color: "#374151",
      },
      traceorder: "normal",
      itemsizing: "constant",
      itemwidth: 30,
    },
    margin: {
      l: 70,
      r: 40,
      t: 60,
      b: 120,
      pad: 4,
    },
    paper_bgcolor: "#ffffff",
    plot_bgcolor: "#ffffff",
    hovermode: "x unified",
    hoverlabel: {
      bgcolor: "#ffffff",
      bordercolor: "#E5E7EB",
      font: {
        size: 12,
        color: "#111827",
      },
    },
    showlegend: true,
    autosize: true,
  };

  const config = {
    responsive: true,
    displaylogo: false,
    modeBarButtonsToRemove: [
      "zoom2d",
      "pan2d",
      "select2d",
      "lasso2d",
      "zoomIn2d",
      "zoomOut2d",
      "autoScale2d",
      "resetScale2d",
      "hoverClosestCartesian",
      "hoverCompareCartesian",
      "toggleSpikelines",
    ],
    toImageButtonOptions: {
      format: "png",
      filename: "agent_activity_chart",
      height: 500,
      width: 900,
      scale: 2,
    },
  };

  return (
    <Card
      variant="outlined"
      sx={{ mt: 3, borderRadius: 0, position: "relative" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Agent productivity over time
        </Typography>
        <Tooltip
          title="Number of available Licenses, Studios, Agents and Controllers"
          placement="top"
          slotProps={{
            tooltip: {
              sx: {
                bgcolor: "#fff",
                color: "#222",
                fontSize: 12,
                boxShadow:
                  "0 2px 6px 0 rgba(0, 0, 0, .12), 0 6px 12px 0 rgba(55, 55, 55, .08)",
              },
            },
          }}
        >
          <IconButton
            size="small"
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
            }}
          >
            <InfoOutlinedIcon fontSize="small" color="action" />
          </IconButton>
        </Tooltip>
      </Box>

      <Divider />

      <Plot
        data={updatedChartData}
        layout={layout}
        config={config}
        style={{ width: "100%", height: "100%" }}
        useResizeHandler={true}
      />
    </Card>
  );
};

export default AgentProductivityOverTime;
