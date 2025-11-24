import { Controller, useFormContext } from "react-hook-form";
import DatePicker, { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "./style.css";

function IssueDateFilter() {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-6">
      {/* تاریخ شروع */}
      <div className="flex flex-col">
        <label
          htmlFor="startDate"
          className="mb-2 text-sm font-medium text-gray-700"
        >
          از تاریخ:
        </label>
        <Controller
          control={control}
          name="startDate"
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <DatePicker
                id="startDate"
                value={value || ""}
                onChange={(date) => onChange(date?.isValid ? date : "")}
                calendar={persian}
                locale={persian_fa}
                format="YYYY/MM/DD"
                className=""
                maxDate={new Date()}
                placeholder="از تاریخ"
                containerClassName="custom-container"
                arrowClassName="custom-arrow"
                inputClass="custom-input"
              />
              {error && (
                <span className="text-red-500 text-xs mt-1">
                  تاریخ شروع الزامی است
                </span>
              )}
            </>
          )}
        />
      </div>

      {/* تاریخ پایان */}
      <div className="flex flex-col">
        <label
          htmlFor="endDate"
          className="mb-2 text-sm font-medium text-gray-700"
        >
          تا تاریخ:
        </label>
        <Controller
          control={control}
          name="endDate"
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <DatePicker
                id="endDate"
                value={value || ""}
                onChange={(date) => onChange(date?.isValid ? date : "")}
                calendar={persian}
                locale={persian_fa}
                maxDate={new Date()}
                format="YYYY/MM/DD"
                placeholder="تا تاریخ"
                className="border rounded-md p-2 shadow-sm focus:ring-2 focus:ring-blue-500"
                containerClassName="custom-container"
                arrowClassName="custom-arrow"
                inputClass="custom-input"
              />
              {error && (
                <span className="text-red-500 text-xs mt-1">
                  تاریخ پایان الزامی است
                </span>
              )}
            </>
          )}
        />
      </div>
    </div>
  );
}

export default IssueDateFilter;
