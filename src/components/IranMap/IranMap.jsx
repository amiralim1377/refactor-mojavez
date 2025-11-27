"use client";

import { useState } from "react";
import { IranMap } from "react-iran-map";
import { IranProvincesMap } from "react-iran-provinces-map";
import provincesData from "./provincesData";
import provinceCityData from "./provinceCityData";
import { Button } from "../ui/button";
import { Home } from "lucide-react";
import { vazirmatn } from "@/app/fonts/fonts";

export default function App() {
  const [selectedProvince, setSelectedProvince] = useState(null);

  const font = vazirmatn.style.fontFamily;

  return (
    <div style={{ fontFamily: font, textAlign: "center", direction: "rtl" }}>
      {!selectedProvince ? (
        <>
          <IranMap
            data={provincesData}
            colorRange="30, 70, 181"
            width={800}
            textColor="#000"
            deactiveProvinceColor="#eee"
            selectedProvinceColor="#3bcc6d"
            tooltipTitle="تعداد شهر:"
            selectProvinceHandler={(province) => setSelectedProvince(province)}
          />
        </>
      ) : (
        <>
          <h2>استان: {selectedProvince.faName}</h2>

          <Button
            onClick={() => setSelectedProvince(null)}
            className="mb-5 bg-blue-500  hover:bg-blue-600 text-white rtl px-4 py-2 flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            نمای کلی
          </Button>
          <div className="my-iran-map">
            <IranProvincesMap
              province={selectedProvince.name}
              provinceData={provinceCityData[selectedProvince.name]}
              colorRange="30, 70, 181"
              selectedProvinceColor="#3bcc6d"
              tooltipTitle="تعداد:"
              width={800}
              selectProvinceHandler={(city) =>
                console.log("شهر انتخاب شد:", city)
              }
            />
          </div>
        </>
      )}
    </div>
  );
}
