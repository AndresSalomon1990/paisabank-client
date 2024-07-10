// Internal deps
import { MOVEMENTS_TYPES } from "./enums";

export const ROUTES = {
  LOGIN: {
    path: "/login",
    public: true,
  },
  HOME: {
    path: "/home",
    public: false,
  },
  MOVEMENTS: {
    path: "/movements",
    public: false,
  },
};

export const QUICK_FILTER_OPTIONS = [
  {
    id: 1,
    value: "",
    label: "Todos",
  },
  {
    id: 2,
    value: MOVEMENTS_TYPES.SUS,
    label: "Débito aut.",
  },
  {
    id: 3,
    value: MOVEMENTS_TYPES.CASH_IN,
    label: "Recibido",
  },
  {
    id: 4,
    value: MOVEMENTS_TYPES.CASH_OUT,
    label: "Enviado",
  },
];
