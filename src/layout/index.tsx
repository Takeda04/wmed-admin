//todo Import packages
import { useState } from "react";

//todo Import mui
import { Box, useTheme } from "@mui/material";

//todo Import utils
import { tokens } from "../utils";

//todo Import components
import Header from "./header";
import Sidebar from "./sidebar";
import { Section } from "../components";

interface CustomProps {
  component: () => JSX.Element;
}

//! ----------------------------------------------------------------------

const Layout = ({ component: Component }: CustomProps) => {
  const theme = useTheme();
  const colors = tokens(theme?.palette?.mode);

  const [open, setOpen] = useState(false);

  return (
    <Section sx={{ display: "flex", backgroundColor: colors.body }}>
      <Box
        className={`absolute top-0 duration-300 z-50 ${open ? "w-full left-0" : "w-[18rem] -left-[20rem]"}`}
      >
        <Sidebar open={open} setOpen={setOpen} />
      </Box>
      <Box
        className={`w-full h-screen flex flex-col items-center justify-start duration-300 relative ${
          open ? "blur-[10px]" : ""
        }`}
      >
        <Header setOpen={setOpen} />
        <Box className="w-full h-[90vh] px-20 py-5 overflow-y-auto max-[1250px]:px-5">
          <Component />
        </Box>
      </Box>
    </Section>
  );
};

export default Layout;
