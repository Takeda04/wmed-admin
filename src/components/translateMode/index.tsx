//todo Import packages
import { v4 } from "uuid";
import i18next from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

//todo Import mui
import { Menu } from "@mui/material";
import { Fade } from "@mui/material";
import { Badge } from "@mui/material";
import { Tooltip } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useTheme } from "@mui/material";
import { IconButton } from "@mui/material";

//todo  Import components
import { Description, Section } from "../../components";

//todo Import store
import { main } from "../../store";

//todo Import utils
import { tokens, InterfaceStore } from "../../utils";

//todo Import public
import langs from "../../../public/langs.json";

import { MdTranslate } from "react-icons/md";
import { BsMoonStars, BsSun } from "react-icons/bs";

type CustomElement = Element | null;

interface CustomState {
  header_title: string;
  lang: string;
  langOpen: CustomElement;
  profileOpen: CustomElement;
}

//! ----------------------------------------------------------------------

export const TranslateMode = () => {
  const theme = useTheme();
  const colors = tokens(theme?.palette?.mode);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [state, setState] = useState<CustomState>({
    header_title: "main_title",
    lang: localStorage.getItem("i18nextLng") || "uz",
    langOpen: null,
    profileOpen: null,
  });
  const { lang, langOpen } = state;

  const { mode } = useSelector((store: InterfaceStore) => store?.main);

  const sx = {
    bgcolor: colors.body,
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: colors.body,
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  };

  return (
    <Section className="flex items-center gap-3">
      <Tooltip arrow title={t("translate")}>
        <IconButton
          color="inherit"
          id="fade-button"
          aria-haspopup="true"
          aria-expanded={langOpen ? "true" : undefined}
          aria-controls={langOpen ? "fade-menu" : undefined}
          onClick={(e) =>
            setState((prev: CustomState) => ({
              ...prev,
              langOpen: e.currentTarget,
            }))
          }
        >
          <Badge
            badgeContent={
              <span
                className={`flag-icon ${"flag-icon-" + (lang === "kril" ? "ru" : lang)} flag-icon-squared`}
                style={{ borderRadius: "50%" }}
              />
            }
          >
            <MdTranslate className="text-[1.3rem]" />
          </Badge>
        </IconButton>
      </Tooltip>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        open={!!langOpen}
        anchorEl={langOpen}
        onClose={() =>
          setState((prev: CustomState) => ({ ...prev, langOpen: null }))
        }
        TransitionComponent={Fade}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        PaperProps={{ elevation: 0, sx }}
      >
        {langs?.map(({ lang, title, icon }) => (
          <MenuItem
            key={v4()}
            onClick={() => {
              i18next.changeLanguage(lang);
              setState((prev: CustomState) => ({
                ...prev,
                langOpen: null,
                lang,
              }));
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              backgroundColor:
                localStorage.getItem("i18nextLng") === lang
                  ? colors.card[100]
                  : "transparent",
            }}
          >
            <div
              className={`flag-icon ${icon} flag-icon-squared`}
              style={{ borderRadius: "50%" }}
            />
            <Description>{title}</Description>
          </MenuItem>
        ))}
      </Menu>
      <Tooltip arrow title={mode ? t("light_mode") : t("dark_mode")}>
        <IconButton
          color="inherit"
          aria-haspopup="true"
          aria-controls="customized-menu"
          onClick={() => {
            dispatch(main({ mode: !mode }));
          }}
        >
          {mode ? (
            <BsSun className="text-[1.4rem]" />
          ) : (
            <BsMoonStars className="text-[1.4rem]" />
          )}
        </IconButton>
      </Tooltip>
    </Section>
  );
};

export default TranslateMode;
