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
      <form onSubmit={handleSubmit(onSubmit, onError)}>
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
            { value: "real", label: "حقیقی" },
            { value: "legal", label: "حقوقی" },
            { value: "all", label: "همه موارد" },
          ]}
        />

        <h1>موقعیت جغرافیایی</h1>
        <div>استان</div>
        <div>َشهرستان</div>
        <h3>کسب و کاری</h3>
        <div>عنوان مجوز</div>
        <div>دستگاه مرجع</div>
        <div>دستکاه تابع</div>
        <h3>تاریخ صدور آخرخین عملیات</h3>
        <div>آز تاریخ</div>
        <div>تاریخ</div>
        <button>اعمال فیتلر</button>
        <button>پاک کردن همه فیلترها</button>
        <button type="submit" className="bg-primary ">
          submit
        </button>
      </form>
    </FormProvider>
  );
}

export default FilterSection;
