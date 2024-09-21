export const STATUS = {
  ACTIVE: "active", //? Ish jarayonida
  PAUSED: "paused", //? To'xtatilgan
  BLOCK: "block", //? Blocklangan
  DELETED: "deleted", //? O'chirilgan
};

// eslint-disable-next-line
export const ROLES: any = {
  OWNER: "0", //? Asoschisi
  ADMIN: "1", //? Klientlar bn ishlovchi hodim
  CLINIC: "2", //? Klinikalar
  DOCTOR: "3", //? Klinikaga tegishli bo'lgan doktorlar yoki yakka tartibdagi doktorlar
  USER: "4" //? Foydalanuvchilar
};

export const {
  OWNER,
  ADMIN,
  CLINIC,
  DOCTOR,
  USER
} = ROLES;
