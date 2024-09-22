//todo Import packages
import { v4 } from "uuid";
import { Link } from "react-router-dom";

//todo Import components
import { Image } from "../../components";

//todo Import images
import Icon1 from "../../assets/images/clock.png";
import Icon2 from "../../assets/images/return.png";
import Icon3 from "../../assets/images/verified-user.png";
import Icon4 from "../../assets/images/icon9.png";

//todo Import mui
import { GridColDef } from "@mui/x-data-grid";
import { Chip, IconButton } from "@mui/material";

//todo Import icons
import { BsEye } from "react-icons/bs";

//todo Import helpers
import { formatDate } from "../helpers";

//! ----------------------------------------------------------------------

export const widgets = [
  {
    title: "sidebar.main.constant",
    total: 35,
    color: "error",
    Icon: () => <Image alt="icon" src={Icon4} />,
  },
  {
    title: "sidebar.main.instalment",
    total: 23,
    color: "success",
    Icon: () => <Image alt="icon" src={Icon1} />,
  },
  {
    title: "sidebar.main.rental",
    total: 5,
    color: "warning",
    Icon: () => <Image alt="icon" src={Icon2} />,
  },
  {
    title: "sidebar.main.debt",
    total: 14,
    color: "warning",
    Icon: () => <Image alt="icon" src={Icon3} />,
  },
];

//! ----------------------------------------------------------------------

export const mainChartData = {
  labels: [
    "01/01/2024",
    "02/01/2024",
    "03/01/2024",
    "04/01/2024",
    "05/01/2024",
    "06/01/2024",
    "07/01/2024",
    "08/01/2024",
    "09/01/2024",
    "10/01/2024",
    "11/01/2024",
    "12/01/2024",
  ],
  series: [
    {
      name: "sidebar.main.export",
      type: "area",
      fill: "gradient",
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 50],
    },
    {
      name: "sidebar.main.import",
      type: "area",
      fill: "gradient",
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 60],
    },
  ],
};



//! ----------------------------------------------------------------------

export const orderCardData = [...Array(5)].map((_, index) => ({
  id: v4(),
  title: [
    "1983, orders, $4220",
    "12 Invoices have been paid",
    "Order #37745 from September",
    "New order placed #XF-2356",
    "New order placed #XF-2346",
  ][index],
  type: index + 1,
  time: String(new Date()),
}));

//! ----------------------------------------------------------------------

export const faceLoginData = {
  access: "qszdxcnvmjvhfudxyzstSFvbnmhgfddrsd",
  refresh: "qszdxcnvmjvhfudxyzstSFvbnmhgfddrsd",
  role: "OWNER",
};

//! ----------------------------------------------------------------------
const getStatusColor = (status: string) => {
  switch (status) {
    case 'ACTIVE':
      return 'success';  // Green color for active status
    case 'WAITING':
      return 'warning';  // Yellow color for waiting status
    case 'FINISHED':
      return 'default';  // Grey color for finished status
    default:
      return 'default';  // Default color for unknown statuses
  }
};


export const AdminColumns: Array<GridColDef> = [
  {
    field: "id",
    headerName: "#",
    minWidth: 80,
  },
  {
    field: "firstName",
    headerName: "First Name",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "username",
    headerName: "Username",
    flex: 1,
    minWidth: 100,
    renderCell: ({ row }) => (
      <Link
        to={`/admins/${row?.username}`}
        className="text-blue-400 cursor-pointer select-none"
      >
        @{row?.username}
      </Link>
    ),
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    minWidth: 100,
    renderCell: ({ row }) => <Chip label={row?.status} color={getStatusColor(row.status)} />,
  },
  {
    field: "createdAt",
    headerName: "Appointed",
    flex: 1,
    minWidth: 100,
    renderCell: ({ row }) => <>{formatDate(row?.createdAt)}</>,
  },
  {
    field: "position",
    headerName: "Number queue",
    flex: 1,
    minWidth: 100,
    renderCell: ({ row }) => <>{(row?.position)}</>,
  },
  {
    field: "actions",
    headerName: "Actions",
    minWidth: 150,
    align: "center",
    headerAlign: "center",
    renderCell: () => (
      <IconButton color="info" >
        <BsEye />
      </IconButton>
    ),
  },
];

//! ----------------------------------------------------------------------

export const AdminRows = [
  {
    id: 1,
    fname: "Olimjon",
    lname: "Nishanaliyev",
    username: "detakedawwx",
    status: "ACTIVE",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 2,
    fname: "Shokhista",
    lname: "Rakhimova",
    username: "rakhista",
    status: "ACTIVE",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 3,
    fname: "Bahtibek",
    lname: "Anvarov",
    username: "aanvarov",
    status: "ACTIVE",
    created_at: new Date(),
    updated_at: new Date(),
  }
];

//! ----------------------------------------------------------------------

export const columns: Array<GridColDef> = [
  { field: "id" },
  { field: "desk", headerName: "Desk", flex: 1, minWidth: 110 },
  {
    field: "commodity",
    headerName: "Commodity",
    flex: 1,
    minWidth: 180,
  },
  {
    field: "traderName",
    headerName: "Trader Name",
    flex: 1,
    minWidth: 120,
  },
  {
    field: "traderEmail",
    headerName: "Trader Email",
    flex: 1,
    minWidth: 150,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    type: "number",
    flex: 1,
    minWidth: 140,
  },
  {
    field: "filledQuantity",
    headerName: "Filled Quantity",
    type: "number",
    flex: 1,
    minWidth: 120,
  },
  {
    field: "isFilled",
    headerName: "Is Filled",
    align: "center",
    type: "boolean",
    flex: 1,
    minWidth: 80,
  },
  {
    field: "status",
    headerName: "Status",
    type: "singleSelect",
    valueOptions: ["Open", "PartiallyFilled", "Filled", "Rejected"],
    flex: 1,
    minWidth: 150,
  },
  {
    field: "unitPrice",
    headerName: "Unit Price",
    type: "number",
  },
  {
    field: "unitPriceCurrency",
    headerName: "Unit Price Currency",
    type: "singleSelect",
    valueOptions: [
      "USD",
      "GBP",
      "JPY",
      "EUR",
      "BRL",
      "MXN",
      "AUD",
      "CAD",
      "NZD",
      "ARS",
      "CHF",
      "THB",
      "HKD",
      "TRY",
    ],
    flex: 1,
    minWidth: 120,
  },
  {
    field: "subTotal",
    headerName: "Sub Total",
    type: "number",
    flex: 1,
    minWidth: 120,
  },
  {
    field: "feeRate",
    headerName: "Fee Rate",
    type: "number",
    flex: 1,
    minWidth: 80,
  },
  {
    field: "feeAmount",
    headerName: "Fee Amount",
    type: "number",
    flex: 1,
    minWidth: 120,
  },
  {
    field: "incoTerm",
    type: "singleSelect",
    valueOptions: [
      "EXW (Ex Works)",
      "FAS (Free Alongside Ship)",
      "FCA (Free Carrier)",
      "CPT (Carriage Paid To)",
      "DAP (Delivered at Place)",
      "DPU (Delivered at Place Unloaded)",
      "DDP (Delivered Duty Paid)",
    ],
  },
  {
    field: "totalPrice",
    headerName: "Total in USD",
    type: "number",
    flex: 1,
    minWidth: 160,
  },
  { field: "pnl", headerName: "PnL", type: "number", flex: 1, minWidth: 140 },
  { field: "brokerId", headerName: "Broker Id" },
];

//! ----------------------------------------------------------------------

export const rows = [
  {
    id: 1,
    desk: "D-8494",
    commodity: "Sugar No.14",
    traderName: "Harvey Ingram",
    traderEmail: "razurnep@nic.gd",
    quantity: 87990,
    filledQuantity: 0.5310944425502898,
    isFilled: false,
    status: "PartiallyFilled",
    unitPrice: 7.94,
    unitPriceCurrency: "AUD",
    feeRate: 0.223,
    incoTerm: "CPT (Carriage Paid To)",
    pnl: 62330482.0154,
    brokerId: "6d7c278d-ac51-5188-84e1-2ae537b7159a",
  },
  {
    id: 2,
    desk: "D-4526",
    commodity: "Coffee C",
    traderName: "Jimmy Boyd",
    traderEmail: "fidu@zi.tn",
    quantity: 10376,
    filledQuantity: 0.29905551272166536,
    isFilled: false,
    status: "PartiallyFilled",
    unitPrice: 48.01,
    unitPriceCurrency: "EUR",
    feeRate: 0.149,
    incoTerm: "EXW (Ex Works)",
    pnl: -93667505.4953,
    brokerId: "c7cb973a-e428-5e82-a47f-6a4af103c0d0",
  },
  {
    id: 3,
    desk: "D-2723",
    commodity: "Soybeans",
    traderName: "Mildred Atkins",
    traderEmail: "la@hi.pn",
    quantity: 94499,
    filledQuantity: 0.6092974528830993,
    isFilled: false,
    status: "PartiallyFilled",
    unitPrice: 76.52,
    unitPriceCurrency: "HKD",
    feeRate: 0.12,
    incoTerm: "DPU (Delivered at Place Unloaded)",
    pnl: -31773418.3744,
    brokerId: "a171f59e-485b-52ed-b3c9-92e9e55fa9b7",
  },
  {
    id: 4,
    desk: "D-4935",
    commodity: "Soybean Meal",
    traderName: "Myrtie McCormick",
    traderEmail: "zasju@fucaru.bm",
    quantity: 57900,
    filledQuantity: 0.907098445595855,
    isFilled: false,
    status: "PartiallyFilled",
    unitPrice: 90.71,
    unitPriceCurrency: "CHF",
    feeRate: 0.155,
    incoTerm: "EXW (Ex Works)",
    pnl: -56307847.3322,
    brokerId: "d08eba68-b08c-5fc6-8d9e-5280cccad641",
  },
  {
    id: 5,
    desk: "D-9265",
    commodity: "Soybeans",
    traderName: "Alta Walters",
    traderEmail: "jakdof@pezkivar.td",
    quantity: 54289,
    filledQuantity: 0.9953950155648474,
    isFilled: false,
    status: "Rejected",
    unitPrice: 77.18,
    unitPriceCurrency: "MXN",
    feeRate: 0.387,
    incoTerm: "DAP (Delivered at Place)",
    pnl: 17841777.5314,
    brokerId: "1b3e045b-44cd-5915-8312-3393ef8076db",
  },
  {
    id: 6,
    desk: "D-4610",
    commodity: "Soybeans",
    traderName: "Cynthia Bass",
    traderEmail: "ki@etoweku.es",
    quantity: 74191,
    filledQuantity: 0.9732986480839994,
    isFilled: false,
    status: "Filled",
    unitPrice: 71.82,
    unitPriceCurrency: "AUD",
    feeRate: 0.308,
    incoTerm: "DPU (Delivered at Place Unloaded)",
    pnl: 13460531.1323,
    brokerId: "d61cf461-8edc-5c49-91a6-7d6d582f0fa7",
  },
  {
    id: 7,
    desk: "D-5884",
    commodity: "Milk",
    traderName: "Lottie Bowers",
    traderEmail: "peoka@egatof.ss",
    quantity: 44606,
    filledQuantity: 0.8927050172622517,
    isFilled: false,
    status: "Open",
    unitPrice: 8.93,
    unitPriceCurrency: "CHF",
    feeRate: 0.349,
    incoTerm: "CPT (Carriage Paid To)",
    pnl: 69870271.9529,
    brokerId: "e412bad9-636e-524b-9511-e51f55dfea71",
  },
  {
    id: 8,
    desk: "D-7689",
    commodity: "Wheat",
    traderName: "Willie Robertson",
    traderEmail: "ulja@cassimhuh.sa",
    quantity: 33073,
    filledQuantity: 0.08438907870468358,
    isFilled: false,
    status: "Filled",
    unitPrice: 28.99,
    unitPriceCurrency: "MXN",
    feeRate: 0.358,
    incoTerm: "DAP (Delivered at Place)",
    pnl: -79714876.3203,
    brokerId: "9e49f0ef-29e8-531b-85f7-8216f880eb25",
  },
  {
    id: 9,
    desk: "D-7942",
    commodity: "Corn",
    traderName: "Frances Gill",
    traderEmail: "vehuez@ti.me",
    quantity: 59230,
    filledQuantity: 0.3067026844504474,
    isFilled: false,
    status: "Filled",
    unitPrice: 27.16,
    unitPriceCurrency: "AUD",
    feeRate: 0.208,
    incoTerm: "DDP (Delivered Duty Paid)",
    pnl: -76851447.0198,
    brokerId: "382ad1ed-cb18-5fb0-ae72-dfb80645969d",
  },
  {
    id: 10,
    desk: "D-5942",
    commodity: "Cotton No.2",
    traderName: "Eddie Blair",
    traderEmail: "hezbi@hiwoz.aq",
    quantity: 36029,
    filledQuantity: 0.6286047350745233,
    isFilled: false,
    status: "PartiallyFilled",
    unitPrice: 45.65,
    unitPriceCurrency: "THB",
    feeRate: 0.384,
    incoTerm: "EXW (Ex Works)",
    pnl: 88398919.5805,
    brokerId: "51d45667-4193-58f2-83c0-0985b1141743",
  },
  {
    id: 11,
    desk: "D-6563",
    commodity: "Soybeans",
    traderName: "Kyle Ramirez",
    traderEmail: "nisro@hufgufpuz.ke",
    quantity: 21188,
    filledQuantity: 0.17302246554653578,
    isFilled: false,
    status: "Open",
    unitPrice: 99,
    unitPriceCurrency: "NZD",
    feeRate: 0.322,
    incoTerm: "DPU (Delivered at Place Unloaded)",
    pnl: -92713222.9787,
    brokerId: "6377e05d-991b-52c4-9873-a8369f2dac20",
  },
  {
    id: 12,
    desk: "D-5936",
    commodity: "Cocoa",
    traderName: "Lura Sullivan",
    traderEmail: "sorib@agizinbip.tj",
    quantity: 18174,
    filledQuantity: 0.007978430725211842,
    isFilled: false,
    status: "Filled",
    unitPrice: 90.62,
    unitPriceCurrency: "JPY",
    feeRate: 0.251,
    incoTerm: "FCA (Free Carrier)",
    pnl: 10016260.3892,
    brokerId: "87118c7e-07ff-5127-b6c8-8a711a6eb19c",
  },
  {
    id: 13,
    desk: "D-2224",
    commodity: "Soybeans",
    traderName: "Ray Santos",
    traderEmail: "towliz@su.mx",
    quantity: 53263,
    filledQuantity: 0.3468073521957081,
    isFilled: false,
    status: "Rejected",
    unitPrice: 25.68,
    unitPriceCurrency: "NZD",
    feeRate: 0.185,
    incoTerm: "EXW (Ex Works)",
    pnl: 23874796.2285,
    brokerId: "920f2dbf-6ac3-5ad1-a4c9-de4bd8ed41b6",
  },
  {
    id: 14,
    desk: "D-5924",
    commodity: "Adzuki bean",
    traderName: "Clara Sims",
    traderEmail: "zofotver@tunve.im",
    quantity: 5898,
    filledQuantity: 0.4423533401152933,
    isFilled: false,
    status: "Open",
    unitPrice: 62.53,
    unitPriceCurrency: "BRL",
    feeRate: 0.264,
    incoTerm: "DAP (Delivered at Place)",
    pnl: -11246271.1521,
    brokerId: "e6b7e87d-8c8f-5497-b1f1-c969293cf097",
  },
  {
    id: 15,
    desk: "D-4015",
    commodity: "Adzuki bean",
    traderName: "Douglas Brewer",
    traderEmail: "ipso@lalir.tc",
    quantity: 71500,
    filledQuantity: 0.1314965034965035,
    isFilled: false,
    status: "PartiallyFilled",
    unitPrice: 40.49,
    unitPriceCurrency: "CAD",
    feeRate: 0.158,
    incoTerm: "DDP (Delivered Duty Paid)",
    pnl: 14721785.4392,
    brokerId: "a1b389cb-056e-5d0c-818f-ffb6598c6d2c",
  },
  {
    id: 16,
    desk: "D-9420",
    commodity: "Rough Rice",
    traderName: "Beulah Gregory",
    traderEmail: "ov@tupeceje.nf",
    quantity: 66796,
    filledQuantity: 0.6933049883226541,
    isFilled: false,
    status: "Open",
    unitPrice: 37.37,
    unitPriceCurrency: "BRL",
    feeRate: 0.155,
    incoTerm: "FCA (Free Carrier)",
    pnl: 49588636.6349,
    brokerId: "2c32c9b1-045b-56ca-8962-eb6b1f88434b",
  },
  {
    id: 17,
    desk: "D-1045",
    commodity: "Cocoa",
    traderName: "Angel Carson",
    traderEmail: "zihbalcab@wo.sc",
    quantity: 51399,
    filledQuantity: 0.7040993015428316,
    isFilled: false,
    status: "Filled",
    unitPrice: 39.43,
    unitPriceCurrency: "EUR",
    feeRate: 0.169,
    incoTerm: "DDP (Delivered Duty Paid)",
    pnl: -43712422.6243,
    brokerId: "ec0f803f-0462-5bd5-9286-f21217708235",
  },
  {
    id: 18,
    desk: "D-4722",
    commodity: "Soybean Meal",
    traderName: "Frances Mason",
    traderEmail: "iva@ref.ht",
    quantity: 51102,
    filledQuantity: 0.8739971038315526,
    isFilled: false,
    status: "Rejected",
    unitPrice: 48.77,
    unitPriceCurrency: "CAD",
    feeRate: 0.249,
    incoTerm: "EXW (Ex Works)",
    pnl: 987191.2654,
    brokerId: "cc764fe5-2abc-5316-8db1-9c8277c445a8",
  },
  {
    id: 19,
    desk: "D-8129",
    commodity: "Soybeans",
    traderName: "Rhoda Peterson",
    traderEmail: "upi@ageiw.tm",
    quantity: 26263,
    filledQuantity: 0.7890949244183832,
    isFilled: false,
    status: "Open",
    unitPrice: 2.75,
    unitPriceCurrency: "JPY",
    feeRate: 0.385,
    incoTerm: "CPT (Carriage Paid To)",
    pnl: -1539862.2956,
    brokerId: "2e94fd8b-58ff-532b-afaa-afb84755cdf5",
  },
  {
    id: 20,
    desk: "D-9006",
    commodity: "Rapeseed",
    traderName: "Frederick Hale",
    traderEmail: "no@puffetnif.cm",
    quantity: 24936,
    filledQuantity: 0.056384343920436314,
    isFilled: false,
    status: "Filled",
    unitPrice: 35.24,
    unitPriceCurrency: "MXN",
    feeRate: 0.251,
    incoTerm: "DPU (Delivered at Place Unloaded)",
    pnl: 97100403.3462,
    brokerId: "d40f2eae-567a-540e-86e1-cd571f44de60",
  },
];
