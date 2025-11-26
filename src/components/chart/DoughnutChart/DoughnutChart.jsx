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
        avoidLabelOverlap: false,
        label: { show: false },
        emphasis: {
          label: {
            show: false,
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: font,
            formatter: "{b}\n{d}%",
            padding: [3, 5, 3, 5],
          },
        },
        labelLine: { show: false },
        itemStyle: {
          borderRadius: 4,
          borderColor: "#fff",
          borderWidth: 2,
        },
        data,
        animationType: "scale",
        animationEasing: "cubicOut",
        animationDuration: 1000,
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
