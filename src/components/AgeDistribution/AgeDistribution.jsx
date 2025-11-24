import AgeDistributionChart from "../chart/AgeDistributionChart/AgeDistributionChart";

function AgeDistribution() {
  const ageData = [
    { ageRange: "18-25", male: 80, female: 70 },
    { ageRange: "26-35", male: 150, female: 170 },
    { ageRange: "36-45", male: 120, female: 160 },
  ];

  const seriesKeys = [
    { key: "male", name: "مرد", stack: "gender" },
    { key: "female", name: "زن", stack: "gender" },
  ];

  return (
    <div className="bg-white rounded-2xl">
      <AgeDistributionChart
        title="پراکندگی سنی دارندگان مجوز"
        data={ageData}
        seriesKeys={seriesKeys}
      />
    </div>
  );
}

export default AgeDistribution;
