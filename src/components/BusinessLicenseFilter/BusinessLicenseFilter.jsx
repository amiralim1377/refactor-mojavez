import InputField from "../base/InputField";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
function BusinessLicenseFilter(props) {
  const { label } = props;
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="owner">
          <AccordionTrigger>{label}</AccordionTrigger>
          <AccordionContent>
            <InputField placeholder="عنوان مجوز" name="licenseTitle" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default BusinessLicenseFilter;
