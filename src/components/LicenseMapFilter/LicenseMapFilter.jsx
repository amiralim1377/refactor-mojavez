import FilterSection from "../FilterSection/FilterSection";
import LicenseOverview from "../LicenseOverview/LicenseOverview";

function LicenseMapFilter() {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-2xl mt-4 ">
      {/* بخش فیلتر */}
      <FilterSection />

      {/* بخش نقشه */}
      <div className="license-map-filter__map">Map Section</div>

      {/* بخش آمار / Summary */}
      <LicenseOverview />
    </div>
  );
}

export default LicenseMapFilter;
