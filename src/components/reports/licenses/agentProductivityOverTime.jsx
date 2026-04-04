import React from "react";
import Plot from "react-plotly.js";
import {
  Box,
  Typography,
  Divider,
  Card,
  Tooltip,
  IconButton,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { darkTokens } from "../../../ui/theme";

const ORIGINAL_SERIES_COLORS = [
  "#2563eb",
  "#dc2626",
  "#f59e0b",
  "#10b981",
  "#8b5cf6",
  "#ec4899",
];
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
      line: { color: ORIGINAL_SERIES_COLORS[0], width: 2 },
      marker: { color: ORIGINAL_SERIES_COLORS[0], size: 6 },
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
      line: { color: ORIGINAL_SERIES_COLORS[1], width: 2 },
      marker: { color: ORIGINAL_SERIES_COLORS[1], size: 6 },
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
      line: { color: ORIGINAL_SERIES_COLORS[2], width: 2 },
      marker: { color: ORIGINAL_SERIES_COLORS[2], size: 6 },
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
      line: { color: ORIGINAL_SERIES_COLORS[3], width: 2 },
      marker: { color: ORIGINAL_SERIES_COLORS[3], size: 6 },
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
      line: { color: ORIGINAL_SERIES_COLORS[4], width: 2 },
      marker: { color: ORIGINAL_SERIES_COLORS[4], size: 6 },
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
      line: { color: ORIGINAL_SERIES_COLORS[5], width: 2 },
      marker: { color: ORIGINAL_SERIES_COLORS[5], size: 6 },
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
  const colors = ORIGINAL_SERIES_COLORS;

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
        color: darkTokens.text.primary,
        weight: 500,
      },
      x: 0, // Left align
    },
    xaxis: {
      title: {
        text: "Date",
        font: {
          size: 12,
          color: darkTokens.text.secondary,
        },
      },
      tickangle: 0,
      tickfont: {
        size: 11,
        color: darkTokens.text.secondary,
      },
      gridcolor: darkTokens.border.grid,
      showline: true,
      linecolor: darkTokens.border.strong,
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
          color: darkTokens.text.secondary,
        },
      },
      tickfont: {
        color: darkTokens.text.secondary,
        size: 11,
      },
      gridcolor: darkTokens.border.grid,
      rangemode: "nonnegative",
      zeroline: true,
      zerolinecolor: darkTokens.border.strong,
      zerolinewidth: 1,
      side: "left",
      tickvals: [0, 50, 100, 150, 200],
      ticktext: ["0", "50", "100", "150", "200"],
      showline: true,
      linecolor: darkTokens.border.strong,
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
      bgcolor: darkTokens.overlay.panel,
      bordercolor: darkTokens.border.default,
      borderwidth: 1,
      font: {
        size: 11,
        color: darkTokens.text.secondary,
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
    paper_bgcolor: darkTokens.background.surface,
    plot_bgcolor: darkTokens.background.surface,
    hovermode: "x unified",
    hoverlabel: {
      bgcolor: darkTokens.background.elevated,
      bordercolor: darkTokens.border.strong,
      font: {
        size: 12,
        color: darkTokens.text.primary,
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
      sx={{
        mt: 3,
        borderRadius: "4px",
        position: "relative",
        backgroundColor: darkTokens.background.surface,
        borderColor: darkTokens.border.default,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          fontWeight={550}
          sx={{ color: darkTokens.text.primary }}
        >
          Agent productivity over time
        </Typography>
        <Tooltip
          title="Number of available Licenses, Studios, Agents and Controllers"
          placement="top"
          slotProps={{
            tooltip: {
              sx: {
                bgcolor: darkTokens.background.elevated,
                color: darkTokens.text.primary,
                fontSize: 12,
                boxShadow: darkTokens.overlay.shadowTooltip,
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
              color: darkTokens.text.secondary,
            }}
          >
            <InfoOutlinedIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>

      <Divider sx={{ borderColor: darkTokens.border.default }} />

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
