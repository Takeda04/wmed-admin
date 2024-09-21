//todo Import packages
import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";

//todo Import components
import { Main, Section } from "../../../components";
import { Widget } from "../../../components";
import { MyCard } from "../../../components";
import { Search } from "../../../components";
import { Table } from "../../../components";

//todo Import mui
import { Box, Button, Pagination } from "@mui/material";

//todo Import utils
import { AdminColumns, AdminRows, widgets } from "../../../utils";

//todo Import icons
import { CiSaveDown1 } from "react-icons/ci";

//! ----------------------------------------------------------------------

interface CustomState {
  search: string;
}

export const Home = () => {
  const { t } = useTranslation();
  const [state, setState] = useState<CustomState>({
    search: "",
  });

  return (
    <Main className="flex flex-col gap-5 w-full">
      <Box className="grid gap-5 grid-cols-12 max-[600px]:gap-3">
        {widgets?.map(({ title, total, Icon }, i) => (
          <Box className="col-span-3 max-[1100px]:col-span-6" key={i}>
            <Widget
              title={title}
              total={total}
              icon={<Icon />}
              className="px-6 py-10"
            />
          </Box>
        ))}
      </Box>

      <MyCard className="p-5 flex items-center justify-between">
        <Search
          placeholder="Search"
          value={state?.search}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setState((prev: CustomState) => ({
              ...prev,
              search: e.target.value,
            }));
          }}
          handleSubmit={() => {
            console.log(state?.search);
          }}
        /> 
      </MyCard>
      <MyCard id="pdf" className="h-[80vh] p-5">
        <Section className="w-full h-[92%]">
          <Table
            rows={AdminRows}
            columns={AdminColumns}
            dec={t("sidebar.main.home_table_dec")}
          />
        </Section>
        <AdminsFooter />
      </MyCard>
    </Main>
  );
};

const AdminsFooter = () => {
  return (
    <Section className="w-full h-[8%] flex items-end justify-between px-5">
      <Box className="flex items-center gap-5">
        <Button
          variant="outlined"
          startIcon={<CiSaveDown1 />}
          color="success"
          className="w-32"
        >
          excel
        </Button>
        <Button
          variant="outlined"
          startIcon={<CiSaveDown1 />}
          color="warning"
          className="w-32"
        >
          pdf
        </Button>
      </Box>
      <Pagination
        size={"medium"}
        page={1}
        count={20}
        // onChange={(_, newPage: number) => {
        //   setState((prev: { page: number }) => ({
        //     ...prev,
        //     page: newPage,
        //   }));
        // }}
      />
    </Section>
  );
};
