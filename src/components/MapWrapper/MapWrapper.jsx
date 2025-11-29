"use client";

import dynamic from "next/dynamic";
import Loading from "../Loading/Loading";

const IranMap = dynamic(() => import("@/components/IranMap/IranMap"), {
  ssr: false,
  loading: () => <Loading />,
});

function MapWrapper() {
  return (
    <div className="border    w-full rounded-2xl p-2 min-h-[300px] sm:min-h-[400px] md:min-h-[600px] lg:min-h-[620px] min-w-full overflow-hidden">
      <IranMap />
    </div>
  );
}

export default MapWrapper;
