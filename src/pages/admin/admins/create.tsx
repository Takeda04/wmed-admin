//todo Import packages
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

//todo Import mui
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material";
import { TextField } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Autocomplete } from "@mui/material";

//todo Import components
import { Main } from "../../../components";
import { Space } from "../../../components";
import { Input } from "../../../components";
import { MyCard } from "../../../components";
import { Section } from "../../../components";
import { Password } from "../../../components";
import { LogoUpload } from "../../../components";
import { Description } from "../../../components";
import { PassportUpload } from "../../../components";

//todo Import services and utils
import $axios from "../../../services";
import { tokens } from "../../../utils";
import { ERROR, formatPhoneNumber } from "../../../utils";

//todo Import icons
import { IoIosSave } from "react-icons/io";

interface CustomState {
  logo: null | File;
  fname: string;
  lname: string;
  phone: string;
  status: string;
  username: string;
  password: string;
  passport_front_image: null | File;
  passport_back_image: null | File;
}

export const AdminCreate = () => {
  const theme = useTheme();
  const colors = tokens(theme?.palette?.mode);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [state, setState] = useState<CustomState>({
    fname: "",
    lname: "",
    phone: "",
    status: "",
    username: "",
    password: "",
    logo: null,
    passport_front_image: null,
    passport_back_image: null,
  });

  const autocompleteStyle = {
    ".MuiFormControl-root > div": {
      width: "100%",
      display: "flex",
      gap: "10px",
      background: colors?.slate,
      borderRadius: "12px",
      color: "#858991",
    },

    ".MuiFormControl-root input": {
      padding: "10px 12px !important",
      color: colors?.grey[100],

      "&::placeholder": {
        color: colors?.text,
        opacity: "100%",
      },
    },

    ".MuiInputBase-root": {
      border: "none !important",
    },

    ".MuiOutlinedInput-notchedOutline": {
      border: "1px solid transparent !important",
    },
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("fname", state?.fname);
    formData.append("lname", state?.lname);
    formData.append("phone", state?.phone?.replace(/\D/g, ""));
    formData.append("status", state?.status?.toLocaleLowerCase());
    formData.append("username", state?.username?.toLocaleLowerCase());
    formData.append("password", state?.password);

    state?.logo && formData.append("logo", state?.logo);
    state?.passport_front_image &&
      formData.append("passport_front_image", state?.passport_front_image);
    state?.passport_back_image &&
      formData.append("passport_back_image", state?.passport_back_image);

    try {
      const resp = await $axios.post(`/users/admins`, formData);
      console.log(resp);
    } catch (err) {
      ERROR(err, dispatch, t);
    }
  };

  const uploadFile = (logo: File, key: string) => {
    setState((prev: CustomState) => ({ ...prev, [key]: logo }));
  };

  return (
    <Main className="w-full h-auto flex flex-col items-center justify-start gap-5 px-32 max-[1500px]:p-0">
      <Section className="w-full max-[1500px]:flex max-[1500px]:items-start max-[1500px]:gap-5 max-[1000px]:gap-3 max-[700px]:flex-col">
        <MyCard className="w-full grid grid-cols-2 items-start gap-5 p-5 max-[1500px]:grid-cols-1 max-[1000px]:p-3">
          <Box>
            <InputLabel className="ml-2 mb-1 max-[1000px]:text-[0.8rem]">
              {t("admins.create.inputs.labels.fname")}
            </InputLabel>
            <Input
              required
              placeholder={t("admins.create.inputs.placeholders.fname")}
              value={state?.fname}
              onChange={(e) => {
                setState((prev: CustomState) => ({
                  ...prev,
                  fname: e.target.value,
                }));
              }}
            />
          </Box>
          <Box>
            <InputLabel className="ml-2 mb-1 max-[1000px]:text-[0.8rem]">
              {t("admins.create.inputs.labels.lname")}
            </InputLabel>
            <Input
              required
              placeholder={t("admins.create.inputs.placeholders.lname")}
              value={state?.lname}
              onChange={(e) => {
                setState((prev: CustomState) => ({
                  ...prev,
                  lname: e.target.value,
                }));
              }}
            />
          </Box>
          <Box>
            <InputLabel className="ml-2 mb-1 max-[1000px]:text-[0.8rem]">
              {t("admins.create.inputs.labels.username")}
            </InputLabel>
            <Input
              required
              placeholder={t("admins.create.inputs.placeholders.username")}
              value={state?.username}
              onChange={(e) => {
                setState((prev: CustomState) => ({
                  ...prev,
                  username: e.target.value,
                }));
              }}
            />
          </Box>
          <Box>
            <InputLabel className="ml-2 mb-1 max-[1000px]:text-[0.8rem]">
              {t("admins.create.inputs.labels.password")}
            </InputLabel>
            <Password
              id="password"
              value={state?.password}
              placeholder={t("admins.create.inputs.placeholders.password")}
              onChange={(e) => {
                setState((prev: CustomState) => ({
                  ...prev,
                  password: e.target.value,
                }));
              }}
            />
          </Box>
          <Box>
            <InputLabel className="ml-2 mb-1 max-[1000px]:text-[0.8rem]">
              {t("admins.create.inputs.labels.phone")}
            </InputLabel>
            <Input
              required
              placeholder={t("admins.create.inputs.placeholders.phone")}
              value={formatPhoneNumber(state?.phone)}
              onChange={(e) => {
                setState((prev: CustomState) => ({
                  ...prev,
                  phone: e.target.value,
                }));
              }}
            />
          </Box>
          <Box>
            <InputLabel className="ml-2 mb-1 max-[1000px]:text-[0.8rem]">
              {t("admins.create.inputs.labels.status")}
            </InputLabel>
            <Autocomplete
              sx={autocompleteStyle}
              fullWidth
              size="small"
              options={[
                { name: "ACTIVE" },
                { name: "PAUSED" },
                { name: "BLOCK" },
                { name: "DELETED" },
              ]}
              getOptionLabel={({ name }: { name: string }) => name}
              onChange={(_, newValue) => {
                if (newValue) {
                  setState((prev: CustomState) => ({
                    ...prev,
                    status: newValue?.name,
                  }));
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder={t("admins.create.inputs.placeholders.status")}
                />
              )}
            />
          </Box>
        </MyCard>
        <Space className="max-[1500px]:hidden" />
        <Box className="w-full grid grid-cols-6 gap-5 max-[1500px]:grid-cols-2 max-[1000px]:gap-3">
          <MyCard className="col-span-2 p-5 max-[1000px]:p-3">
            {t("admins.create.upload.logo.title")}
            <LogoUpload
              onDrop={(files: Array<File>) => {
                uploadFile(files[0], "logo");
              }}
              file={state?.logo}
              label={
                state?.logo
                  ? t("admins.create.upload.logo.change")
                  : t("admins.create.upload.logo.upload")
              }
              handleDelete={() => {
                setState((prev: CustomState) => ({ ...prev, logo: null }));
              }}
              title={""}
              isUpload={false}
            />
            {t("admins.create.upload.logo.dec_title")}
            <Description className="max-[850px]:text-[0.7rem]">
              {t("admins.create.upload.logo.dec")}
            </Description>
          </MyCard>
          <MyCard className="col-span-2 p-5 max-[1000px]:p-3">
            {t("admins.create.upload.passport.front.title")}
            <PassportUpload
              title={""}
              isUpload={false}
              file={state?.passport_front_image}
              label={
                state?.passport_front_image
                  ? t("admins.create.upload.passport.front.change")
                  : t("admins.create.upload.passport.front.upload")
              }
              onDrop={(files: Array<File>) => {
                uploadFile(files[0], "passport_front_image");
              }}
              handleDelete={() => {
                setState((prev: CustomState) => ({
                  ...prev,
                  passport_front_image: null,
                }));
              }}
            />
          </MyCard>
          <MyCard className="col-span-2 p-5 max-[1000px]:p-3">
            {t("admins.create.upload.passport.back.title")}
            <PassportUpload
              onDrop={(files: Array<File>) =>
                uploadFile(files[0], "passport_back_image")
              }
              file={state?.passport_back_image}
              label={
                state?.passport_back_image
                  ? t("admins.create.upload.passport.back.change")
                  : t("admins.create.upload.passport.back.upload")
              }
              handleDelete={() => {
                setState((prev: CustomState) => ({
                  ...prev,
                  passport_back_image: null,
                }));
              }}
              title={""}
              isUpload={false}
            />
          </MyCard>
        </Box>
      </Section>
      <Section className="w-full flex items-center justify-end">
        <Button
          variant="contained"
          color="info"
          size="large"
          startIcon={<IoIosSave />}
          onClick={handleSubmit}
          className="w-[250px] max-[700px]:w-full"
        >
          {t("admins.create.submit")}
        </Button>
      </Section>
      <Space className="min-h-20" />
    </Main>
  );
};
