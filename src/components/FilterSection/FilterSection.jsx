"use client";
import Image from "next/image";
import FilterIcon from "../../../public/icons/icon-filter.svg";
import { Separator } from "../ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import LicenseHolderFilter from "../LicenseHolderFilter/LicenseHolderFilter";

const formSchema = z.object({
  licenseholder: z.string().min(1, "دریافت کننده مجوز الزامی است"),
});

function FilterSection() {
  const methods = useForm({
    mode: "onSubmit",
    resolver: zodResolver(formSchema),
    defaultValues: {
      licenseholder: "",
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
        <div>رده سنی </div>
        <div>جنسیت</div>
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
