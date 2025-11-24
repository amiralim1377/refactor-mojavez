import { Controller, useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { provinces } from "@/data/provinces";
import { useProvinceCity } from "@/hook/useProvinceCity";

function LocationSelectWrapper() {
  const { control } = useFormContext();
  const { selectedProvince, cities } = useProvinceCity({
    control,
    provinces,
  });

  return (
    <div className=" space-y-2">
      <Controller
        name="province"
        control={control}
        rules={{ required: "انتخاب استان الزامی است" }}
        render={({ field, fieldState }) => (
          <div className="w-full">
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full flex-row-reverse justify-between text-right">
                <SelectValue placeholder="استان" />
              </SelectTrigger>
              <SelectContent>
                {provinces.map((prov) => (
                  <SelectItem key={prov.name} value={prov.name}>
                    {prov.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {fieldState.error && (
              <p className="text-destructive text-sm mt-1">
                {fieldState.error.message}
              </p>
            )}
          </div>
        )}
      />
      {/* انتخاب شهر بر اساس استان */}
      <Controller
        name="city"
        control={control}
        rules={{ required: "انتخاب شهر الزامی است" }}
        render={({ field, fieldState }) => (
          <div className="w-full">
            <Select
              value={field.value}
              onValueChange={field.onChange}
              disabled={!selectedProvince}
            >
              <SelectTrigger className="w-full flex-row-reverse justify-between text-right">
                <SelectValue placeholder="شهر" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city, i) => (
                  <SelectItem key={i + 1} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {fieldState.error && (
              <p className="text-destructive text-sm mt-1">
                {fieldState.error.message}
              </p>
            )}
          </div>
        )}
      />
    </div>
  );
}

export default LocationSelectWrapper;
