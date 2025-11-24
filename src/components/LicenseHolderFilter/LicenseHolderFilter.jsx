import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import InputField from "../base/InputField";

function LicenseHolderFilter(props) {
  const { label, placeholder, name } = props;

  return (
    <div>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="owner">
          <AccordionTrigger>{label}</AccordionTrigger>
          <AccordionContent>
            <InputField
              placeholder={placeholder}
              label="عنوان مجوز"
              name={name}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default LicenseHolderFilter;
