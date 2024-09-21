//@ts-nocheck

//todo Import packages
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

//todo Import components
import Item from "./item";

//todo Import mui
import { Paper, Typography } from "@mui/material";

//todo Import assets
import wmed from "../../assets/images/wmed.png";

//todo Import utils
import { sidebarItemType, sidebar } from "../../utils";

//todo Import components
import { Image, Main, Section, Space } from "../../components";

interface CustomProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

//! ----------------------------------------------------------------------

const Sidebar = ({ open, setOpen }: CustomProps) => {
  const role = localStorage.getItem("role") as string;

  return (
    <Main className="w-full flex items-center justify-start">
      <Paper className="bg-transparent backdrop-blur-[10px] shadow-2xl rounded-none">
        <Section className={`w-[18rem] h-screen justify-between py-4 pt-0`}>
          <Section>
            <Section className="h-[7vh] flex items-center mx-4">
              <Link to="/" className={`inline-flex items-center gap-1`}>
                <Image
                  src={wmed}
                  alt="logo"
                  className="w-[50%] mt-5"
                />
                 <Typography className="w-[30%] text-[40px] text-center">
                WMed
              </Typography>
              </Link>
             
            </Section>
            <Space />
            <Section className="w-full h-[90vh] flex flex-col gap-y-2 pb-20 overflow-y-auto">
              {sidebar?.map((e: sidebarItemType) =>
                e?.roles?.includes(role) ? (
                  <Item
                    key={v4()}
                    open={open}
                    setOpen={setOpen}
                    item={e}
                    role={role?.toLocaleLowerCase()}
                  />
                ) : null
              )}
            </Section>
          </Section>
        </Section>
      </Paper>
      <Section
        className={`w-full h-screen bg-transparent duration-300 cursor-pointer ${
          open ? "" : "hidden"
        }`}
        onClick={() => {
          setOpen(false);
        }}
      />
    </Main>
  );
};

export default Sidebar;
