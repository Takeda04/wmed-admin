import { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Main, Section, Widget, MyCard, Search, Table } from "../../../components";
import { Box, Button, Pagination } from "@mui/material";
import { AdminColumns, widgets } from "../../../utils";
import { CiSaveDown1 } from "react-icons/ci";
import { io, Socket } from "socket.io-client";

// Interfaces
interface CustomState {
  search: string;
  page: number;
}
interface Patients {
  id: number;
  username: string;
  fullName: string;
  position: number;
  status: "ACTIVE" | "WAITING" | "FINISHED";
}

let socket: Socket;

export const Home = () => {
  const { t } = useTranslation();
  const [state, setState] = useState<CustomState>({ search: "", page: 1 });
  const [users, setUsers] = useState<Patients[]>([]);

  useEffect(() => {
    // Initialize socket connection once
    socket = io("wss://med-production.up.railway.app");

    socket.emit("getAllPatients", (data: Patients[]) => {
      setUsers(data);
    });

    socket.on("queueUpdated", (data: Patients[]) => {
      setUsers(data);
    });

    return () => {
      socket.disconnect(); // Clean up connection
    };
  }, []);

  // const deletePatient = (patientId: number) => {
  //   socket.emit("leaveQueue", { patientId });
  // };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setState((prev) => ({ ...prev, search: value }));
  };

  const handlePaginationChange = (_: unknown, newPage: number) => {
    setState((prev) => ({ ...prev, page: newPage }));
  };

  console.log(users, "Socket connected")

  return (
    <Main className="flex flex-col gap-5 w-full">
      <Box className="grid gap-5 grid-cols-12 max-[600px]:gap-3">
        {widgets?.map(({ title, total, Icon }, i) => (
          <Box className="col-span-3 max-[1100px]:col-span-6" key={i}>
            <Widget title={title} total={total} icon={<Icon />} className="px-6 py-10" />
          </Box>
        ))}
      </Box>

      <MyCard className="p-5 flex items-center justify-between">
        <Search
          placeholder="Search"
          value={state?.search}
          onChange={handleSearchChange}
          handleSubmit={() => {
            console.log(state?.search);
          }}
        />
      </MyCard>

      <MyCard id="pdf" className="h-[80vh] p-5">
        <Section className="w-full h-[92%]">
          <Table rows={users} columns={AdminColumns} dec={t("sidebar.main.home_table_dec")} />
        </Section>
        <AdminsFooter
          page={state.page}
          onPageChange={handlePaginationChange}
        />
      </MyCard>
    </Main>
  );
};

const AdminsFooter = ({
  page,
  onPageChange,
}: {
  page: number;
  onPageChange: (event: unknown, page: number) => void;
}) => {
  return (
    <Section className="w-full h-[8%] flex items-end justify-between px-5">
      <Box className="flex items-center gap-5">
        <Button variant="outlined" startIcon={<CiSaveDown1 />} color="success" className="w-32">
          excel
        </Button>
        <Button variant="outlined" startIcon={<CiSaveDown1 />} color="warning" className="w-32">
          pdf
        </Button>
      </Box>
      <Pagination size={"medium"} page={page} count={20} onChange={onPageChange} />
    </Section>
  );
};
