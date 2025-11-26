"use client";

import React from "react";
import ReactECharts from "echarts-for-react";
import { vazirmatn } from "@/app/fonts/fonts";

export default function DynamicPieChart({ data = [], title = "" }) {
  const font = vazirmatn.style.fontFamily;

  const option = {
    color: ["#2196F3", "#4CAF50", "#9C27B0", "#FFEB3B", "#9E9E9E"],
    title: {
      left: "center",
      top: "center",
      textStyle: {
        fontSize: 10,
        fontWeight: "bold",
        fontFamily: font,
        color: "#333",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ({d}%)",
      textStyle: { fontFamily: font },
      position: "left",
      confine: true,
    },
    legend: {
      bottom: "5%",
      left: "center",
      orient: "horizontal",
      textStyle: {
        fontFamily: font,
        fontSize: 10,
        color: "#333",
      },
      icon: "circle",
    },
    series: [
      {
        name: "Items",
        type: "pie",
        radius: ["80%"],
        avoidLabelOverlap: false,
        label: { show: false },
        emphasis: {
          scale: true,
          scaleSize: 10,
        },
        labelLine: { show: false },
        itemStyle: {
          borderRadius: 2,
          borderColor: "#fff",
          borderWidth: 1,
        },
        data: data.length ? data : [],
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
