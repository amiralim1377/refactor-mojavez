"use client";

import React from "react";
import ReactECharts from "echarts-for-react";
import { vazirmatn } from "@/app/fonts/fonts";

export default function LineChart({ data = [], title = "" }) {
  if (!data.length) return null;

  const seriesNames = Object.keys(data[0]).filter((key) => key !== "Year");

  const font = vazirmatn.style.fontFamily;

  const series = seriesNames.map((name) => ({
    name,
    type: "line",
    showSymbol: false,
    data: data.map((item) => item[name]),
    smooth: true,
  }));

  const isMobile = typeof window !== "undefined" && window.innerWidth < 480;

  const option = {
    title: {
      text: title,
      left: "center",
      textStyle: {
        fontFamily: font,
        fontSize: 14,
        fontWeight: "bold",
      },
    },
    tooltip: {
      trigger: "axis",
      textStyle: { fontFamily: font, fontSize: isMobile ? 10 : 12 },
      confine: true,
      position: function (pos, params, dom, rect, size) {
        const obj = { top: 10 };
        if (pos[0] + size.contentSize[0] > size.viewSize[0]) {
          obj.left = pos[0] - size.contentSize[0] - 10;
        } else {
          obj.left = pos[0] + 10;
        }
        return obj;
      },
    },

    legend: {
      bottom: 0,
      left: "center",
      textStyle: {
        fontFamily: font,
        fontSize: 12,
      },
      data: seriesNames,
    },
    yAxis: {
      type: "value",
      axisLabel: { fontFamily: font },
    },
    xAxis: {
      type: "category",
      data: data.map((item) => item.Year),
      axisLabel: {
        fontFamily: font,
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
