//todo Import packages
import { useTranslation } from "react-i18next";

//todo Import components
import { Description, MyCard, Section, Title } from "../../components";

//todo Import utils
import { widgetPropsType, fShortenNumber } from "../../utils";

//! ----------------------------------------------------------------------

export const Widget = ({ title, total, icon }: widgetPropsType) => {
  const { t } = useTranslation();

  return (
    <MyCard
      className={
        "flex items-center gap-5 p-5 max-[600px]:p-3 max-[600px]:gap-3"
      }
    >
      <Section className="w-[64px] h-[64px] max-[1500px]:w-[40px] max-[1500px]:h-[40px] max-[450px]:w-[30px] max-[450px]:h-[30px]">
        {icon}
      </Section>
      <Section>
        <Title className="text-[2.8rem] max-[1500px]:text-[2rem] max-[1100px]:text-[1.8rem] max-[600px]:text-[1rem]">
          {fShortenNumber(total)}
        </Title>
        <Description
          className="text-[1rem] max-[1500px]:text-[0.8rem] max-[600px]:text-[0.6rem]"
          sx={{ color: "text.disabled" }}
        >
          {t(title)}
        </Description>
      </Section>
    </MyCard>
  );
};
