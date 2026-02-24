import React, { useState, useEffect, useRef } from "react";
import Plot from "react-plotly.js";
import { Card, Box, useTheme } from "@mui/material";

const UserActivityChart = () => {
  const theme = useTheme();
  const chartRef = useRef(null);
  const [chartHeight, setChartHeight] = useState(400);
  const [isReady, setIsReady] = useState(false);

  // Your provided data
  const dates = [
    "2026-01-25T00:00:00.000Z",
    "2026-01-26T00:00:00.000Z",
    "2026-01-27T00:00:00.000Z",
    "2026-01-28T00:00:00.000Z",
    "2026-01-29T00:00:00.000Z",
    "2026-01-30T00:00:00.000Z",
    "2026-01-31T00:00:00.000Z",
    "2026-02-01T00:00:00.000Z",
    "2026-02-02T00:00:00.000Z",
    "2026-02-03T00:00:00.000Z",
    "2026-02-04T00:00:00.000Z",
    "2026-02-05T00:00:00.000Z",
    "2026-02-06T00:00:00.000Z",
    "2026-02-07T00:00:00.000Z",
    "2026-02-08T00:00:00.000Z",
    "2026-02-09T00:00:00.000Z",
    "2026-02-10T00:00:00.000Z",
    "2026-02-11T00:00:00.000Z",
    "2026-02-12T00:00:00.000Z",
    "2026-02-13T00:00:00.000Z",
    "2026-02-14T00:00:00.000Z",
    "2026-02-15T00:00:00.000Z",
    "2026-02-16T00:00:00.000Z",
    "2026-02-17T00:00:00.000Z",
    "2026-02-18T00:00:00.000Z",
    "2026-02-19T00:00:00.000Z",
    "2026-02-20T00:00:00.000Z",
    "2026-02-23T00:00:00.000Z",
  ];

  const activeUsers = [
    1, 2, 5, 9, 3, 2, 2, 1, 2, 3, 6, 4, 2, 2, 1, 2, 2, 5, 4, 4, 1, 2, 7, 5, 6,
    4, 6, 3,
  ];

  const totalUsers = [
    440, 440, 440, 445, 445, 445, 445, 445, 445, 446, 448, 449, 449, 449, 449,
    449, 449, 449, 449, 449, 449, 449, 450, 450, 450, 450, 450, 451,
  ];

  // Update chart height on resize
  useEffect(() => {
    const updateHeight = () => {
      if (chartRef.current) {
        const width = chartRef.current.offsetWidth;
        // Set height based on width (maintain aspect ratio)
        setChartHeight(Math.max(400, Math.min(600, width * 0.5)));
      }
    };

    updateHeight();
    setIsReady(true);

    const resizeObserver = new ResizeObserver(updateHeight);
    if (chartRef.current) {
      resizeObserver.observe(chartRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  // Format dates for display (e.g., "Jan 25")
  const formattedDates = dates.map((date) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  });

  const chartData = [
    {
      x: formattedDates,
      y: activeUsers,
      type: "bar",
      name: "Active User",
      marker: {
        color: "#2563eb", // Blue color for bars
      },
      yaxis: "y",
      hovertemplate: "Date: %{x}<br>Active Users: %{y}<extra></extra>",
    },
    {
      x: formattedDates,
      y: totalUsers,
      type: "scatter",
      mode: "lines+markers",
      name: "Total User",
      line: {
        color: "#dc2626", // Red color for line
        width: 2,
      },
      marker: {
        color: "#dc2626",
        size: 4,
      },
      yaxis: "y",
      hovertemplate: "Date: %{x}<br>Total Users: %{y}<extra></extra>",
    },
  ];

  const layout = {
    title: {
      font: {
        size: 16,
        color: "#374151",
      },
      x: 0, // Left align
    },
    xaxis: {
      title: "Date",
      tickangle: -45,
      tickfont: {
        size: 11,
      },
      gridcolor: "#e5e7eb",
      showline: true,
      linecolor: "#d1d5db",
      mirror: true,
      side: "bottom",
      automargin: true, // Add automargin
    },
    yaxis: {
      title: "Number of Users",
      titlefont: {
        color: "#374151",
      },
      tickfont: {
        color: "#374151",
      },
      gridcolor: "#e5e7eb",
      rangemode: "nonnegative",
      zeroline: false,
      side: "left",
      automargin: true, // Add automargin
    },
    legend: {
      orientation: "h",
      yanchor: "top",
      y: -0.15, // Adjusted position
      xanchor: "center",
      x: 0.5,
      bgcolor: "rgba(255,255,255,0.8)",
      bordercolor: "#e5e7eb",
      borderwidth: 1,
    },
    margin: {
      l: 60, // Adjusted margins
      r: 40,
      t: 60,
      b: 80,
      pad: 4,
    },
    paper_bgcolor: "#ffffff",
    plot_bgcolor: "#ffffff",
    hovermode: "x unified",
    hoverlabel: {
      bgcolor: "#ffffff",
      bordercolor: "#e5e7eb",
      font: {
        size: 12,
      },
    },
    barmode: "group",
    bargap: 0.15,
    autosize: true, // Enable autosize
    height: chartHeight, // Set dynamic height
  };

  const config = {
    responsive: true,
    displaylogo: false,
    displayModeBar: true, // Show mode bar for better UX
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
      filename: "user_activity_chart",
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
          width: "100%",
          height: chartHeight,
          minHeight: 400,
          p: 2,
          visibility: isReady ? "visible" : "hidden", // Hide until ready
        }}
      >
        {isReady && (
          <Plot
            data={chartData}
            layout={layout}
            config={config}
            style={{ width: "100%", height: "100%" }}
            useResizeHandler={true}
            onInitialized={() => setIsReady(true)}
            onUpdate={() => setIsReady(true)}
          />
        )}
      </Box>
    </Card>
  );
};

export default UserActivityChart;
