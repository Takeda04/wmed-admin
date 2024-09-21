//todo Import packages
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

//todo  Import mui
import { LoadingButton } from "@mui/lab";
import { Box, Card, IconButton, InputLabel, useTheme } from "@mui/material";

//todo  Import components
import { Form } from "../../../components";
import { Main } from "../../../components";
import { Image } from "../../../components";
import { Space } from "../../../components";
import { Input } from "../../../components";
import { Title } from "../../../components";
import { Section } from "../../../components";
import { Password } from "../../../components";
import { Description } from "../../../components";
import { TranslateMode } from "../../../components";

//todo  Import icons
import { IoCall } from "react-icons/io5";
import { BsGlobe2 } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

//todo  Import images
import cover from "../../../assets/images/cover5.jpg";
import wmed from "../../../assets/images/wmed.png";


//todo  Import utils
import { ERROR, ROLES, InterfaceStore, tokens } from "../../../utils";

export const Login = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const colors = tokens(theme?.palette?.mode);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  const { mode } = useSelector((store: InterfaceStore) => store?.main);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { username } = Object.fromEntries(
      new FormData(e.target as HTMLFormElement).entries()
    );

    try {
      setLoading(true);

      localStorage.setItem("access", String(username));
      localStorage.setItem("refresh", String(username));
      localStorage.setItem("role", ROLES[String(username)?.toUpperCase()]);
      localStorage.setItem("logo", "");
      navigate("/");
    } catch (err) {
      ERROR(err, dispatch, t);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Main className="flex items-center justify-center relative">
      <Section className="absolute top-16 right-16 max-[500px]:right-6">
        <TranslateMode />
      </Section>
      <Section
        sx={{
          width: "calc(100% - 500px)",
          backgroundPosition: "center center",
          background: `linear-gradient(${colors.gradient}, ${colors.gradient}) center center / contain no-repeat, url(${cover}) !important`,
        }}
        className="h-screen flex flex-col gap-10 items-center justify-center p-20 max-[1000px]:hidden"
      >
        <Title
          className="text-[2.5rem] max-[1300px]:text-[2rem] max-[1200px]:text-[1.8rem]"
          sx={{ color: (mode ? colors.text : "black") }}
        >
          {t("login.hello")}
        </Title>
        <Image
          className="w-[60%] max-[1500px]:w-[80%] max-[1300px]:w-[90%] max-[1200px]:w-full"
          src={wmed}
          alt=""
        />
        <Box className="flex items-center gap-2">
          <Link to={import.meta.env.VITE_INSTAGRAM} target="_blank">
            <IconButton>
              <AiFillInstagram />
            </IconButton>
          </Link>
          <Link to={import.meta.env.VITE_LINKEDIN} target="_blank">
            <IconButton>
              <FaLinkedin />
            </IconButton>
          </Link>
          <Link to={import.meta.env.VITE_WEB_SITE} target="_blank">
            <IconButton>
              <BsGlobe2 />
            </IconButton>
          </Link>
          <Link to={`tel:${import.meta.env.VITE_PHONE}`}>
            <IconButton>
              <IoCall />
            </IconButton>
          </Link>
        </Box>
      </Section>
      <Card
        sx={{ backgroundColor: colors.body, backgroundImage: "none" }}
        className="w-[500px] h-screen flex flex-col items-start justify-center p-16 max-[500px]:p-6"
      >
        <Title className="mb-2 max-[400px]:text-[1.2rem]">
          {" "}
          {t("login.title")}
        </Title>
        <Description className="flex items-center gap-2">
          {t("login.dec")}
          <Link to="/register" className="text-blue-400">
            {t("login.register")}
          </Link>
        </Description>
        <Space />
        <Form onSubmit={handleSubmit} className="w-full h-auto text-white">
          <Box>
            <InputLabel
              htmlFor="login_username"
              className="ml-2 mb-1 cursor-pointer select-none"
            >
              {t("login.username.title")}
            </InputLabel>
            <Input
              required
              disabled={loading}
              id="login_username"
              name="username"
              placeholder={t("login.username.placeholder")}
            />
          </Box>
          <Space />
          <Box>
            <InputLabel
              htmlFor="login_password"
              className="ml-2 mb-1 cursor-pointer select-none"
            >
              {t("login.password.title")}
            </InputLabel>
            <Password
              name="password"
              id="login_password"
              placeholder={t("login.password.placeholder")}
            />
          </Box>
          <Space />
          <LoadingButton
            fullWidth
            color="info"
            type="submit"
            loading={loading}
            variant="contained"
            className="capitalize"
          >
            {t("login.submit")}
          </LoadingButton>
          <Link
            to="/forgot"
            className="w-full mt-3 flex items-center justify-end text-blue-400"
          >
            {t("login.forgot")}
          </Link>
        </Form>
      </Card>
    </Main>
  );
};
