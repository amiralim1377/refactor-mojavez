"use client";

import React from "react";
import ReactECharts from "echarts-for-react";
import { vazirmatn } from "@/app/fonts/fonts";

export default function DoughnutChart({ data = [], title = "" }) {
  const option = {
    color: ["#4CAF50", "#FF9800", "#2196F3"],
    title: {
      text: title,
      left: "center",
      top: "center",
      textStyle: {
        fontSize: 12,
        fontWeight: "normal",
        fontFamily: `var(${vazirmatn.variable})`,
        color: "#333",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ({d}%)",
      textStyle: { fontFamily: `var(${vazirmatn.variable})` },
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Items",
        type: "pie",
        radius: ["35%", "60%"],
        avoidLabelOverlap: false,
        label: { show: false },
        emphasis: {
          label: {
            show: false,
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: `var(${vazirmatn.variable})`,
            formatter: "{b}\n{d}%",
            padding: [3, 5, 3, 5],
          },
        },
        labelLine: { show: false },
        data,
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ width: "100%", height: 300 }} />
  );
}
