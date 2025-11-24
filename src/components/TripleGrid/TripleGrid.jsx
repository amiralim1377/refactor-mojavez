import AgeDistribution from "../AgeDistribution/AgeDistribution";
import LicenseDistribution from "../LicenseDistribution/LicenseDistribution";
import PersonalityDistribution from "../PersonalityDistribution/PersonalityDistribution";

function TripleGrid() {
  return (
    <div
      className="mt-4 grid gap-4 
                    grid-cols-1 
                    md:grid-cols-[1fr_2fr_1fr]"
    >
      <div className="bg-green-200 p-4 text-center">
        <PersonalityDistribution />
      </div>
      <div className="bg-gray-300 p-4 text-center">
        <AgeDistribution />
      </div>
      <div className="  text-center">
        <LicenseDistribution />
      </div>
    </div>
  );
}

export default TripleGrid;
