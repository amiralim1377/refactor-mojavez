import FilterSection from "../FilterSection/FilterSection";
import LicenseOverview from "../LicenseOverview/LicenseOverview";
import MapWrapper from "../MapWrapper/MapWrapper";

function LicenseMapFilter() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between bg-white gap-4 p-4 rounded-2xl mt-4">
      <div className="w-full lg:w-auto order-3 lg:order-1">
        <FilterSection />
      </div>

      <div className="w-full lg:w-2/3 order-2 lg:order-2">
        <MapWrapper />
      </div>

      <div className="w-full lg:w-auto order-1 lg:order-3">
        <LicenseOverview />
      </div>
    </div>
  );
}

export default LicenseMapFilter;
