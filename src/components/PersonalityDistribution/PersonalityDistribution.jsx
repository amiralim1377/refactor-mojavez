import DynamicPieChart from "../chart/DynamicPieChart/DynamicPieChart";

function PersonalityDistribution() {
  const licenseData = [
    { value: 87658, name: "دستگاه دولتی" },
    { value: 154326, name: "اتباع خارجی" },
    { value: 243789, name: "حقوقی" },
    { value: 412560, name: "حقیقی" },
  ];
  return (
    <div className="bg-white rounded-2xl">
      <DynamicPieChart title="توزیع انواع مجوز" data={licenseData} />
    </div>
  );
}

export default PersonalityDistribution;
