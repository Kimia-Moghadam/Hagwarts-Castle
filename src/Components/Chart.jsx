import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { chartsData } from "../JSON/Data.js";
import Plot from "react-plotly.js";
import { Button, Card, Typography } from "antd";
import "../CSS/Chart.css";

const { Title } = Typography;

const Chart = () => {
  const { chartName } = useParams();
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (chartsData[chartName]) {
      setChartData(chartsData[chartName]);
    } else {
      console.error("Chart not found");
    }
  }, [chartName]);

  if (!chartData) {
    return <div style={{ color: "white", textAlign: "center", padding: "4rem" }}>Loading..</div>;
  }

  const customLayout = {
    ...chartData.layout,
    plot_bgcolor: "rgba(20, 20, 30, 0.8)",
    paper_bgcolor: "rgba(15, 15, 25, 0.9)",
    font: {
      family: "'Segoe UI', sans-serif",
      size: 14,
      color: "#e0e0ff",
    },
    title: {
      text: chartData.layout.title,
      font: {
        size: 22,
        color: "#ffd700",
        family: "'Cinzel', serif",
      },
    },
    xaxis: {
      ...chartData.layout.xaxis,
      color: "#fff",
      gridcolor: "#444",
    },
    yaxis: {
      ...chartData.layout.yaxis,
      color: "#fff",
      gridcolor: "#444",
    },
    margin: { t: 60, b: 60, l: 50, r: 50 },
  };

  return (
    <div style={{ backgroundColor: "#0a0a0f", minHeight: "100vh", padding: "2rem" }}>
      <Card
        style={{
          maxWidth: "900px",
          margin: "auto",
          borderRadius: "16px",
          background: "linear-gradient(135deg, #1b1b2f, #000000)",
          boxShadow: "0 0 20px rgba(0,0,0,0.7)",
        }}
      >
        <Title level={2} style={{ textAlign: "center", color: "#f9d923" }}>
          ✨ {chartName.replace(/-/g, " ")}
        </Title>

        <Plot
          data={[
            {
              type: chartData.type,
              x: chartData.data.x,
              y: chartData.data.y,
              labels: chartData.data.labels,
              values: chartData.data.values,
              marker: {
                color: chartData.layout.color || "#7f5af0",
                size: 12,
              },
              hole: chartData.type === "pie" ? 0.3 : 0,
            },
          ]}
          layout={customLayout}
          config={{ responsive: true }}
          style={{ width: "100%", height: "450px" }}
        />

        <Button
          type="primary"
          ghost
          size="large"
          style={{ display: "block", margin: "2rem auto 0" }}
          onClick={() => window.history.back()}
        >
         Back To Map🔙
        </Button>
      </Card>
    </div>
  );
};

export default Chart;
