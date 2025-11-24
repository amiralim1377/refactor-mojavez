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

const formSchema = z.object({
  licenseholder: z.string().min(1, "دریافت کننده مجوز الزامی است"),
  age: z.number().min(18).max(65),
  gender: z.enum(["male", "female", "all"], {
    required_error: "انتخاب جنسیت الزامی است",
    invalid_type_error: "گزینه انتخابی معتبر نیست",
  }),
  personType: z.enum(["real", "legal", "all"], {
    required_error: "انتخاب نوع شخصیت الزامی است",
  }),
  province: z.string().min(1, "استان الزامی است"),
  city: z.string().min(1, "شهر الزامی است"),
});

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
    },
  });

  const { handleSubmit, control, resetField, reset } = methods;

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
        className=" max-w-2xs w-full"
      >
        <div className="flex items-center gap-x-1 ">
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

        <button type="submit" className="bg-primary ">
          submit
        </button>
      </form>
    </FormProvider>
  );
}

export default FilterSection;
