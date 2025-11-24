import DoughnutChart from "../chart/DoughnutChart/DoughnutChart";

function LicenseDistribution() {
  const licenseData = [
    { value: 3500000, name: "مجوز صنفی" },
    { value: 2800000, name: "مجوز خانگی" },
    { value: 1900000, name: "مجوز دستگاهی" },
  ];

  return (
    <div className="bg-white rounded-2xl ">
      <DoughnutChart title="توزیع انواع مجوز" data={licenseData} />
    </div>
  );
}

export default LicenseDistribution;
