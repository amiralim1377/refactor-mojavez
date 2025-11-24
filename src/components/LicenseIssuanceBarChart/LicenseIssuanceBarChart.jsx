"use client";

import StackedBarChart from "../chart/StackedBarChart/StackedBarChart";

export default function LicenseIssuanceBarChart() {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-2xl  ">
        <StackedBarChart
          data={[
            {
              province: "تهران",
              خانگی: 100000,
              صنفی: 60000,
              دستگاهی: 1400000,
            },
            {
              province: "فارس",
              خانگی: 300000,
              صنفی: 500000,
              دستگاهی: 600000,
            },
            {
              province: "خراسان رضوی",
              خانگی: 400000,
              صنفی: 450000,
              دستگاهی: 500000,
            },
          ]}
          seriesKeys={["خانگی", "صنفی", "دستگاهی"]}
          seriesColors={["#3A7CEC", "#2ecc71", "#e67e22"]}
          title="بیش ترین صدور مجوز"
          titleColor={"#2ecc71"}
          subtext="استان های با بیش ترین صدور مجوز بر اسا نوع مجوز"
        />
      </div>
      <div className="bg-white rounded-2xl ">
        <StackedBarChart
          data={[
            { province: "ایلام", خانگی: 50000, صنفی: 60000, دستگاهی: 200000 },
            {
              province: "کهگیلویه و بویراحمد",
              خانگی: 30000,
              صنفی: 50000,
              دستگاهی: 60000,
            },
            {
              province: "خراسان شمالی",
              خانگی: 40000,
              صنفی: 45000,
              دستگاهی: 50000,
            },
          ]}
          seriesKeys={["خانگی", "صنفی", "دستگاهی"]}
          seriesColors={["#3A7CEC", "#2ecc71", "#e67e22"]}
          title="کم ترین صدور مجوز"
          titleColor={"#B91C1C"}
          subtext="استان های با کم ترین صدور مجوز بر اسا نوع مجوز"
        />
      </div>
    </div>
  );
}
