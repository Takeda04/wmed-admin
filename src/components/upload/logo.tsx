//todo Import packages
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";

//todo Import mui
import { Box, IconButton, useTheme } from "@mui/material";

//todo Import components
import { Description, Section, Space, Title } from "../../components";

//todo Import utils
import { tokens } from "../../utils";

//todo Import icons
import { IoClose } from "react-icons/io5";
import { MdCloudUpload } from "react-icons/md";

interface CustomProps {
  onDrop: (f: Array<File>) => void;
  file: File | null;
  title: string;
  label: string;
  handleDelete: () => void;
  isUpload: boolean;
}

//! ----------------------------------------------------------------------

export const LogoUpload = (props: CustomProps) => {
  const theme = useTheme();
  const colors = tokens(theme?.palette?.mode);

  const { onDrop, file, title, label, handleDelete, isUpload } = props;
  const { getInputProps } = useDropzone({ onDrop, maxFiles: 1 });

  const { t } = useTranslation();
  const [url, setUrl] = useState<string>("");
  useEffect(() => {
    setUrl(file ? URL.createObjectURL(file) : "");
  }, [file]);

  const imageSizeInBytes = file?.size || 0;
  const imageSizeInKilobytes = (imageSizeInBytes / 1024).toFixed(2);
  const imageSizeInMegabytes = (Number(imageSizeInKilobytes) / 1024).toFixed(2);

  return (
    <Box className={`w-full h-auto overflow-hidden relative`}>
      <Title className="text-[1.1rem] text-center">{t(title)}</Title>
      <Space />
      <Section
        style={{
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
        }}
        className={`w-full h-full flex flex-col items-center justify-center p-5 `}
      >
        <Box
          sx={{ border: `1px dashed ${colors.text}` }}
          className="w-[10em] h-[10em] cursor-cell rounded-full select-none p-2 max-[850px]:p-1 max-[850px]:w-[7em] max-[850px]:h-[7em]"
        >
          <Box
            sx={{
              background: file ? `url(${url})` : colors.slate,
            }}
            className="w-full h-full flex items-center justify-center object-cover bg-cover rounded-full"
          >
            <Box
              className={`w-full h-full flex flex-col items-center justify-center hover:opacity-100 rounded-full ${file ? "opacity-0 hover:bg-[#080909be]" : ""}`}
            >
              <input id={label} {...getInputProps()} />
              <MdCloudUpload
                className="text-[2rem] max-[850px]:text-[1.5rem]"
                style={{ color: colors.text }}
              />
              <Description className="max-[850px]:text-[0.6em]">
                {label}
              </Description>
            </Box>
          </Box>
        </Box>
        {file ? (
          <Box className="flex mt-5 flex-col items-center gap-0">
            <Description>{file?.name}</Description>
            <Description>
              {Number(imageSizeInKilobytes) < 1024
                ? imageSizeInKilobytes + " KB"
                : imageSizeInMegabytes + " MB"}
            </Description>
          </Box>
        ) : (
          <Box className="flex mt-5 flex-col items-center gap-0">
            <Description className="max-[850px]:text-[0.7rem]">
              {t("clients.create.accept")}
            </Description>
            <Description className="max-[850px]:text-[0.7rem]">
              {t("clients.create.max_size")}
            </Description>
          </Box>
        )}
      </Section>
      {file && !isUpload ? (
        <Box className="absolute top-3 right-3">
          <Box className="flex gap-3">
            <IconButton
              onClick={handleDelete}
              className="w-[24px] h-[24px] p-1 bg-red-700 text-white"
            >
              <IoClose />
            </IconButton>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};
