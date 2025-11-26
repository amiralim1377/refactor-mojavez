"use client";

import React from "react";
import ReactECharts from "echarts-for-react";
import { vazirmatn } from "@/app/fonts/fonts";

export default function StackedBarChart({
  data = [],
  seriesKeys = [],
  seriesColors = [],
  title = "",
  titleColor,
  subtext = "",
}) {
  if (!data.length || !seriesKeys.length) return null;

  const categories = data.map((item) => item.province);

  const maxValue = Math.max(
    ...data.flatMap((item) => seriesKeys.map((key) => item[key] || 0))
  );

  const font = vazirmatn.style.fontFamily;

  const series = seriesKeys.map((key, idx) => ({
    name: key,
    type: "bar",
    stack: "total",
    label: { show: true, fontFamily: font },
    emphasis: { focus: "series" },
    itemStyle: { color: seriesColors[idx] || "#000" },
    barWidth: 20,
    data: data.map((item) => item[key] || 0),
  }));

  const option = {
    title: {
      text: title,
      subtext: subtext,
      left: "center",
      textStyle: {
        color: titleColor,
        fontSize: 16,
        fontWeight: 900,
        fontFamily: font,
      },
      subtextStyle: {
        color: "#555555",
        fontSize: 12,
        fontFamily: font,
        fontWeight: "bolder",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
      textStyle: { fontFamily: font },
    },
    legend: {
      bottom: 0,
      left: "center",
      data: seriesKeys,
      textStyle: {
        fontFamily: font,
      },
      itemWidth: 14,
      itemHeight: 14,
      borderRadius: 7,
      icon: "circle",
    },
    grid: { left: "3%", right: "4%", bottom: "10%", containLabel: true },
    xAxis: { type: "value", max: maxValue },
    yAxis: {
      type: "category",
      data: categories,
      axisLabel: { interval: 0, fontFamily: font },
    },
    series,
    textStyle: { fontFamily: font },
  };

  return (
    <ReactECharts option={option} style={{ width: "100%", height: 400 }} />
  );
}
