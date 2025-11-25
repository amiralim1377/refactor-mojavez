"use client";
import Image from "next/image";
import FilterIcon from "../../../public/icons/icon-filter.svg";
import { Separator } from "../ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import LicenseHolderFilter from "../LicenseHolderFilter/LicenseHolderFilter";
import SliderField from "../base/SliderField";
import SelectField from "../base/SelectField";
import GeographicalLocation from "../GeographicalLocation/GeographicalLocation";
import BusinessLicenseFilter from "../BusinessLicenseFilter/BusinessLicenseFilter";
import SubmitButton from "../base/SubmitButton";

const formSchema = z
  .object({
    licenseholder: z.string().optional(),
    age: z.number().min(18).max(65).optional(),
    gender: z.enum(["male", "female", "all"]).optional(),
    personType: z.enum(["real", "legal", "all"]).optional(),
    province: z.string().optional(),
    city: z.string().optional(),
    licenseTitle: z.string().max(100).optional(),
    startDate: z.preprocess(
      (val) => (val ? new Date(val) : undefined),
      z.date().optional()
    ),
    endDate: z.preprocess(
      (val) => (val ? new Date(val) : undefined),
      z.date().optional()
    ),
  })
  .refine(
    (data) =>
      Object.values(data).some(
        (value) => value !== "" && value !== null && value !== undefined
      ),
    {
      message: "حداقل یک فیلد باید پر شود",
      path: [],
    }
  );

function FilterSection() {
  const methods = useForm({
    mode: "onSubmit",
    resolver: zodResolver(formSchema),
    defaultValues: {
      licenseholder: "",
      age: 18,
      gender: "all",
      personType: "all",
      province: "",
      city: "",
      licenseTitle: "",
      startDate: "",
      endDate: new Date(),
    },
  });

  const { handleSubmit } = methods;

  function onSubmit(data) {
    console.log(data);
  }

  const onError = (err) => {
    console.log("validation errors", err);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="w-full flex flex-col gap-4"
      >
        <div className="flex items-center gap-x-1">
          <Image src={FilterIcon} width={20} height={20} alt="filter-icon" />
          <span className="text-primary">فیلترها</span>
        </div>

        <Separator />

        <LicenseHolderFilter
          label="دارنده مجوز"
          placeholder="دریافت کننده مجوز"
          name="licenseholder"
        />

        <SliderField name="age" label="رده سنی" min={18} max={65} step={1} />

        <SelectField
          name="gender"
          label="جنسیت"
          options={[
            { value: "male", label: "مرد" },
            { value: "female", label: "زن" },
            { value: "all", label: "همه" },
          ]}
        />

        <SelectField
          name="personType"
          label="نوع شخصیت"
          options={[
            { value: "real", label: "شخص حقیقی" },
            { value: "legal", label: "شخص حقوقی" },
            { value: "all", label: "همه موارد" },
          ]}
        />

        <GeographicalLocation label="موقعیت جغرافیایی" />

        <BusinessLicenseFilter label="کسب و کاری" />

        <SubmitButton
          className="bg-[#2563EB] px-4 py-2 text-white w-full rounded-lg hover:cursor-pointer"
          label="اعمال فیلتر"
        />

        <button className="bg-[#F3F4F6] mt-2 hover:bg-gray-200 px-4 py-2 text-gray-800 w-full text-sm rounded-lg">
          حذف فیلتر
        </button>
      </form>
    </FormProvider>
  );
}

export default FilterSection;
