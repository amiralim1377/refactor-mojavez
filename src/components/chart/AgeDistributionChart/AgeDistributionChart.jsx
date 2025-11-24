"use client";

import React from "react";
import ReactECharts from "echarts-for-react";
import { vazirmatn } from "@/app/fonts/fonts";

export default function AgeDistributionChart({
  data = [],
  title = "",
  seriesKeys = [],
}) {
  // seriesKeys = [{ key: 'male', name: 'مرد', stack: 'gender' }, { key: 'female', name: 'زن', stack: 'gender' }]

  const ageRanges = data.map((item) => item.ageRange);

  const series = seriesKeys.map(({ key, name, stack }) => ({
    name,
    type: "bar",
    stack: stack || null,
    data: data.map((item) => item[key] || 0),
    barWidth: "40%",
    itemStyle: { borderRadius: [5, 5, 0, 0] },
  }));

  const option = {
    title: {
      text: title,
      left: "center",
      textStyle: {
        fontFamily: `var(${vazirmatn.variable})`,
        fontSize: 12,
        fontWeight: "bold",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
      textStyle: { fontFamily: `var(${vazirmatn.variable})` },
    },
    legend: {
      bottom: 0,
      left: "center",
      textStyle: {
        fontFamily: `var(${vazirmatn.variable})`,
        fontSize: 12,
      },
    },
    xAxis: {
      type: "category",
      data: ageRanges,
      axisLabel: { fontFamily: `var(${vazirmatn.variable})`, fontSize: 12 },
    },
    yAxis: {
      type: "value",
      axisLabel: { fontFamily: `var(${vazirmatn.variable})` },
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
