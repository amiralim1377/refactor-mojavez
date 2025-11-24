import formatNumber from "@/utils/formatNumber";

function LicenseOverview() {
  return (
    <div className="bg-white space-y-3 border rounded-lg p-4">
      <h3>آمار مجوزها</h3>
      <div className="flex items-center flex-col rounded-lg p-4 bg-[#EFF6FF]">
        <span className="text-primary">{formatNumber(8236598)} </span>
        <p className="text-xs text-muted-foreground">
          کل مجوزهای صادر شده در کل کشور
        </p>
      </div>
      <section className="space-y-4">
        <h5>تفکیک به نوع:</h5>
        <div className="flex items-center justify-between">
          <span className="text-sm">مجوز صنفی</span>
          <span className="text-primary">{formatNumber(3500000)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">مجوز خانگی</span>
          <span className="text-primary">{formatNumber(2800000)} </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">مجوز دستگاهی</span>
          <span className="text-primary">{formatNumber(1936598)} </span>
        </div>
      </section>
    </div>
  );
}

export default LicenseOverview;
