import AgeDistribution from "../AgeDistribution/AgeDistribution";
import LicenseDistribution from "../LicenseDistribution/LicenseDistribution";
import PersonalityDistribution from "../PersonalityDistribution/PersonalityDistribution";

function TripleGrid() {
  return (
    <div className="mt-4 grid       grid-cols-1    md:grid-cols-[1fr_2fr_1fr] gap-4 ">
      <div className="min-w-0">
        <PersonalityDistribution />
      </div>
      <div className=" min-w-0 ">
        <AgeDistribution />
      </div>
      <div className=" min-w-0">
        <LicenseDistribution />
      </div>
    </div>
  );
}

export default TripleGrid;
