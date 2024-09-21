//todo Import icons type
import { IconType } from "react-icons/lib";

//! ----------------------------------------------------------------------

export interface CustomError {
  response: {
    data: { success: boolean; error: { status: number; type: string } };
  };
}

//! ----------------------------------------------------------------------

export interface InterfaceStore {
  main: {
    mode: boolean;
    snack: {
      open: boolean;
      type: "success" | "warning" | "error";
      message: string;
    };
  };
  title: string;
}

//! ----------------------------------------------------------------------

export interface sidebarItemType {
  Icon: IconType;
  path?: string;
  title: string;
  roles: Array<string>;
  disabled: boolean;
  childrens?: Array<sidebarItemType> | null;
}

//! ----------------------------------------------------------------------

export interface columnType {
  field: string;
  headerName: string;
  flex?: number;
  minWidth?: number;
  width?: number;
  align?: "left" | "center" | "right";
  headerAlign?: "left" | "center" | "right";
  // eslint-disable-next-line
  renderCell?: (params: { row: any }) => JSX.Element;
}

//! ----------------------------------------------------------------------

export interface widgetPropsType {
  title: string;
  total: number;
  icon: JSX.Element;
  className?: string;
}

//! ----------------------------------------------------------------------

export interface mainChartSeriesType {
  name: string;
  type: string;
  fill: string;
  data: Array<number>;
}

//! ----------------------------------------------------------------------

export interface mainChartPropsType {
  title: string;
  chart: { labels: Array<string>; series: Array<mainChartSeriesType> };
  subheader: string;
}

//! ----------------------------------------------------------------------

export interface orderCardType {
  title: string;
  subheader?: string;
  list: Array<{ id: string; type: number; title: string; time: string }>;
}
