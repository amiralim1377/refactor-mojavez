"use client";

import React from "react";
import ReactECharts from "echarts-for-react";
import { vazirmatn } from "@/app/fonts/fonts";

export default function LineChart({ data = [], title = "" }) {
  if (!data.length) return null;

  const seriesNames = Object.keys(data[0]).filter((key) => key !== "Year");

  const series = seriesNames.map((name) => ({
    name,
    type: "line",
    showSymbol: false,
    data: data.map((item) => item[name]),
    smooth: true,
  }));

  const option = {
    title: {
      text: title,
      left: "center",
      textStyle: {
        fontFamily: `var(${vazirmatn.variable})`,
        fontSize: 14,
        fontWeight: "bold",
      },
    },
    tooltip: {
      trigger: "axis",
      textStyle: { fontFamily: `var(${vazirmatn.variable})` },
    },
    legend: {
      bottom: 0,
      left: "center",
      textStyle: {
        fontFamily: `var(${vazirmatn.variable})`,
        fontSize: 12,
      },
      data: seriesNames,
    },
    xAxis: {
      type: "category",
      data: data.map((item) => item.Year),
      axisLabel: { fontFamily: `var(${vazirmatn.variable})` },
    },
    xAxis: {
      type: "category",
      data: data.map((item) => item.Year),
      axisLabel: {
        fontFamily: `var(${vazirmatn.variable})`,
        interval: 0,
        rotate: 45,
      },
    },

    series,
  };

  return (
    <ReactECharts
      option={option}
      style={{ width: "100%", height: 350 }}
      opts={{ renderer: "canvas" }}
    />
  );
}
