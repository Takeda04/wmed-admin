//todo Import packages
import { TFunction } from "i18next";
import { Dispatch } from "@reduxjs/toolkit";

//todo Import store
import { main } from "../../store";

//todo Import types
import { CustomError } from "../types";

//! ----------------------------------------------------------------------

// eslint-disable-next-line
export const ERROR = (e: unknown, d: Dispatch<any>, t: TFunction<any>) => {
  if (e instanceof Error) {
    const {
      response: {
        data: {
          error: { type },
        },
      },
    } = e as unknown as CustomError;

    d(
      main({
        snack: {
          open: true,
          type: "error",
          message: t(`snackbar.${type}`),
        },
      })
    );
  }
};

//! ----------------------------------------------------------------------

export const formatNum = (num: number) =>
  new Intl.NumberFormat("jA-JP").format(+num);

//! ----------------------------------------------------------------------

export const formatPhone = (num: string | number): string => {
  return String(num)
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, "+$1 ($2) $3 $4-$5");
};

//! ----------------------------------------------------------------------

export const fromFormatPhone = (phone: string) =>
  phone?.split(/[+ ()-]/).join("");

//! ----------------------------------------------------------------------

export const formatPhoneNumber = (value: string): string => {
  let formattedValue =
    value.replace(/\D/g, "").length <= 0
      ? ""
      : value.replace(/\D/g, "").length === 1
        ? "998" + value.replace(/\D/g, "")
        : value.replace(/\D/g, "");
  if (formattedValue.length > 12) {
    formattedValue = formattedValue.substring(0, 12);
  }
  const match = formattedValue.match(
    /^(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})$/
  );

  if (match) {
    const [, countryCode, firstGroup, secondGroup, thirdGroup, fourthGroup] =
      match;

    let result = "";

    if (countryCode) {
      result += `+${countryCode}`;
    }

    if (firstGroup) {
      result += ` (${firstGroup}`;
    }

    if (secondGroup) {
      result += `) ${secondGroup}`;
    }

    if (thirdGroup) {
      result += `-${thirdGroup}`;
    }

    if (fourthGroup) {
      result += `-${fourthGroup}`;
    }

    return result;
  }

  return formattedValue;
};

//! ----------------------------------------------------------------------

export const formatDate = (dateString: string): string =>
  new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

//! ----------------------------------------------------------------------

export const navigate = (path: string): void => {
  window.location.href = path;
};
