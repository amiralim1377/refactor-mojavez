import LicenseIssuanceBarChart from "@/components/LicenseIssuanceBarChart/LicenseIssuanceBarChart";
import LicenseIssuanceTimeline from "@/components/LicenseIssuanceTimeline/LicenseIssuanceTimeline";
import LicenseMapFilter from "@/components/LicenseMapFilter/LicenseMapFilter";
import TripleGrid from "@/components/TripleGrid/TripleGrid";

export default function Home() {
  return (
    <div className=" my-4 ">
      <LicenseMapFilter />
      <TripleGrid />
      <LicenseIssuanceTimeline />
      <LicenseIssuanceBarChart />
    </div>
  );
}
