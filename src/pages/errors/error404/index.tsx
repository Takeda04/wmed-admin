//todo Import packages
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

//todo Import mui
import { Button } from "@mui/material";

//todo Import images
import error404 from "../../../assets/images/icon12.png";

//todo Import components
import { Description, Image, Main, Title } from "../../../components";

const Error404 = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Main className="w-full h-screen flex flex-col items-center justify-center">
      <Image src={error404} className="w-[25em] mb-10 max-[450px]:w-[18em]" />
      <Title className="w-full text-center text-[2.2em] max-[450px]:text-[2em]">
        {t("errors.404")}
      </Title>
      <Description className="w-full text-center px-10">
        {t("errors.dec")}
      </Description>
      <Button
        color="info"
        className="px-10 mt-12 font-bold"
        onClick={() => navigate("/")}
      >
        {t("errors.back")}
      </Button>
    </Main>
  );
};

export default Error404;
