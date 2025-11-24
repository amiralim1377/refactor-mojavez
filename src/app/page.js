import LicenseIssuanceTimeline from "@/components/LicenseIssuanceTimeline/LicenseIssuanceTimeline";
import LicenseMapFilter from "@/components/LicenseMapFilter/LicenseMapFilter";
import TripleGrid from "@/components/TripleGrid/TripleGrid";

export default function Home() {
  return (
    <div className=" ">
      <LicenseMapFilter />
      <TripleGrid />
      <LicenseIssuanceTimeline />
    </div>
  );
}
