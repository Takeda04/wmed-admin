//todo Import packages
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";

//todo Import icons
import { BiCaretLeft } from "react-icons/bi";

//todo Import mui
import { Accordion, Box } from "@mui/material";
import { AccordionDetails } from "@mui/material";
import { AccordionSummary } from "@mui/material";

//todo Import components
import { Section } from "../../components";

//todo Import utils
import { sidebarItemType } from "../../utils";

interface CustomProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  item: sidebarItemType;
  role: string;
}

//! ----------------------------------------------------------------------

const Item = (props: CustomProps) => {
  const { open, setOpen, item, role } = props;
  const { Icon, childrens, title, path, disabled } = item;

  const { t } = useTranslation();
  const navigate = useNavigate();

  const [accordion, setAccordion] = useState<string | false>();

  const handleChange =
    (panel: string) => (_: SyntheticEvent, isActive: boolean) => {
      setAccordion(isActive ? panel : false);
    };

  if (childrens) {
    return (
      <Accordion
        disabled={disabled}
        expanded={accordion === t(title)}
        onChange={handleChange(t(title))}
        sx={{ backgroundImage: "none" }}
        className="bg-transparent shadow-none"
      >
        <AccordionSummary
          expandIcon={
            <BiCaretLeft
              className={`-rotate-90 duration-300 ${!open && "hidden"}`}
            />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Box className="flex items-center gap-2">
            <Icon
              className={`text-[1.6em] duration-300 ${!open && "scale-0"}`}
            />
            <p className={`duration-300 ${!open && "hidden"} text-[1.2em]`}>
              {t(title)}
            </p>
          </Box>
        </AccordionSummary>
        <AccordionDetails className="ml-2 flex flex-col gap-2">
          {childrens?.map((e: sidebarItemType) =>
            e?.roles?.includes(role.toLocaleUpperCase()) ? (
              <Item
                key={v4()}
                open={open}
                setOpen={setOpen}
                item={e}
                role={role}
              />
            ) : null
          )}
        </AccordionDetails>
      </Accordion>
    );
  }

  return (
    <Box className="px-4 py-3">
      <Section
        onClick={() => {
          navigate(path as string);
          setOpen(false);
        }}
        className="flex items-center gap-2 cursor-pointer"
      >
        <Icon
          className={`text-[1.6em] duration-300 ${!open && "scale-0"} ${
            window.location.pathname === path ? "text-blue-500" : ""
          }`}
        />
        <p
          className={`duration-300 font-normal text-[1.2em] ${
            !open ? "hidden" : ""
          } ${window.location.pathname === path ? "text-blue-500" : ""}`}
          //
        >
          {t(title)}
        </p>
      </Section>
    </Box>
  );
};

export default Item;
