"use client";
import Image from "next/image";
import FilterIcon from "../../../public/icons/icon-filter.svg";
import { Separator } from "../ui/separator";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import LicenseHolderFilter from "../LicenseHolderFilter/LicenseHolderFilter";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

function FilterSection() {
  const methods = useForm({
    mode: "onSubmit",
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
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
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="flex items-center gap-x-1">
        <Image src={FilterIcon} width={20} height={20} alt="filter-icon" />
        <span className="text-primary">فیلترها</span>
      </div>
      <Separator />
      <FormProvider {...methods}>
        <LicenseHolderFilter
          label="دارنده مجوز"
          placeholder="دریافت کننده مجوز"
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
      </FormProvider>{" "}
    </form>
  );
}

export default FilterSection;
