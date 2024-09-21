export const getOne = {
  fname: "Olimjon", // string - min(5) max(100)
  lname: "Nishanaliyev", // string - min(5) max(100)
  phone: "998903713153", // string - min(12) max(12)
  passport_front_image: null, // File 3MB:(*.jpeg, *.jpg, *.png)
  passport_back_image: null, // File 3MB:(*.jpeg, *.jpg, *.png)
  role: "OWNER",
  status: "ACTIVE",
  username: "detakedawwx",
  password: "**********",

  company_name: "YTT WMed",
  location: "Uzbekistan, Tashkent, Yunusabat",
  lat: 48.024402067130715, // number
  long: 39.85466330972504, // number
  logo: null, // File 3MB:(*.jpeg, *.jpg, *.png)

  start_time: null, // string
  end_time: null, // string
  tariff: null, // CONSTANT, INSTALMENT, RENTAL, DEBT, FREE

  paid: 0, // number - To'langan yoki to'lanayotgan summa
  daily_pay: 0, // number - Kunlik to'lovi miqdori
  total_payment: 0, // number - Jami to'lov miqdori
};

export const getAll = [
  {
    id: 1,

    logo: null,
    company_name: "",
    phone: "",
    username: "",

    fname: "",
    lname: "",
    role: "",
    status: "",

    tariff: null,
  },
  {
    id: 1,

    logo: null,
    company_name: "",
    phone: "",
    username: "",

    fname: "",
    lname: "",
    role: "",
    status: "",

    tariff: null,
  },
];

export const users = {
  id: 1,

  username: "",
  password: "",
  fname: "",
  lname: "",
  role: "",
  status: "",

  refresh_token: "",
  created_at: "",
  updated_at: "",
  created_user: 1,
};

export const clients = {
  id: 1,
  logo: "https://server.wmed.uz/images/wmed.png", // PATH
  company_name: "YTT WMed",
  phone: "998903713153",
  username: "detakedawwx",
  fname: "Olimjon", //
  lname: "Nishanaliyev", //
  role: "OWNER", // OWNER
  status: "ACTIVE", // ACTIVE, PAUSED, BLOCK, DELETED
  tariff: "CONSTANT", // CONSTANT, INSTALMENT, RENTAL, DEBT, FREE
};
