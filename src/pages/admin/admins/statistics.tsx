import { mainChartData } from "../../../utils";
import { MainChart } from "../../../components";
import { Box } from "@mui/system";
import { useTranslation } from "react-i18next";

export const AdminsStatistics = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box className="col-span-12 max-[1250px]:col-span-12">
        <MainChart
          title={t("sidebar.main.import_export")}
          subheader={t("sidebar.main.last_one_year")}
          chart={mainChartData}
        />
      </Box>
    </>
  );
};
