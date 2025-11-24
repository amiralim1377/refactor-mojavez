import InputField from "../base/InputField";
import LocationSelectWrapper from "../LocationSelectWrapper/LocationSelectWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

function GeographicalLocation(props) {
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
            <LocationSelectWrapper />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default GeographicalLocation;
