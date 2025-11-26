"use client";

import React from "react";
import ReactECharts from "echarts-for-react";
import { vazirmatn } from "@/app/fonts/fonts";

export default function DoughnutChart({ data = [], title = "" }) {
  const font = vazirmatn.style.fontFamily;

  const option = {
    color: ["#4CAF50", "#FF9800", "#2196F3"],
    title: {
      text: title,
      left: "center",
      top: "center",
      textStyle: {
        fontSize: 12,
        fontWeight: "normal",
        fontFamily: font,
        color: "#333",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ({d}%)",
      textStyle: { fontFamily: font },
      position: "top",
      confine: true,
    },
    legend: {
      bottom: "5%",
      left: "center",
      orient: "horizontal",
      textStyle: {
        fontFamily: font,
        fontSize: 12,
        color: "#333",
      },
      icon: "circle",
    },
    series: [
      {
        name: "Items",
        type: "pie",
        radius: ["40%", "65%"],
        avoidLabelOverlap: true,
        label: { show: false },
        emphasis: {
          scale: true,
          focus: "self",
          label: { show: false },
        },
        labelLine: { show: false },
        itemStyle: {
          borderRadius: 4,
          borderColor: "#fff",
          borderWidth: 2,
          shadowBlur: 8,
          shadowColor: "rgba(0, 0, 0, 0.15)",
        },
        data,
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ width: "100%", height: 350 }}
      opts={{ renderer: "canvas" }}
    />
  );
}
