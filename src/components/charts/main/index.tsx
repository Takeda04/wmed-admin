//todo Import package
import { useTranslation } from "react-i18next";

//todo Import components
import Chart, { useChart } from "../../charts";
import { Description, MyCard, Section, Title } from "../../../components";

//todo Import utils
import { mainChartPropsType } from "../../../utils";

//! ----------------------------------------------------------------------

export const MainChart = (props: mainChartPropsType) => {
  const { title, subheader, chart } = props;
  const { t } = useTranslation();

  const options = useChart({
    plotOptions: {
      bar: {
        columnWidth: "16%",
      },
    },
    fill: {
      type: chart?.series.map(({ fill }) => fill),
    },
    labels: chart?.labels,
    xaxis: {
      type: "datetime",
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value: number) => {
          if (typeof value !== "undefined") {
            return `${value.toFixed(0)} ${t("amount")}`;
          }
          return value;
        },
      },
    },
  });

  return (
    <MyCard className="w-full h-[470px] p-5 max-[1300px]:h-[400px] max-[600px]:h-[300px] max-[600px]:p-3 max-[450px]:h-[250px]">
      <Section>
        <Title className="max-[600px]:text-[1rem]">{t(title)}</Title>
        <Description
          className="text-[1rem] max-[1500px]:text-[0.8rem] max-[600px]:text-[0.6rem]"
          sx={{ color: "text.disabled" }}
        >
          {t(subheader)}
        </Description>
      </Section>
      <Chart
        dir="ltr"
        type="line"
        series={chart?.series?.map((e) => ({ ...e, name: t(e.name) }))}
        options={options}
        width="100%"
        height="85%"
      />
    </MyCard>
  );
};
