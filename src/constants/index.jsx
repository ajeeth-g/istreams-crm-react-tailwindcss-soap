import { BaggageClaim, ChartColumn, Home, NotepadText, Package, PackagePlus, Settings, ShoppingBag, UserCheck, UserPlus, Users } from "lucide-react";

export const navbarLinks = [
  {
    title: "Dashboard",
    links: [
      {
        label: "Dashboard",
        icon: Home,
        path: "/",
      },
    ],
  },
  {
    title: "Customers",
    links: [
      {
        label: "Customers",
        icon: UserPlus,
        path: "/customers-table",
      },
    ],
  },
  {
    title: "Categories",
    links: [
      {
        label: "Category",
        icon: Package,
        path: "/category",
      },
    ],
  },
  {
    title: "Lists",
    links: [
      {
        label: "Users",
        icon: UserPlus,
        path: "/user-register-list",
      },
      {
        label: "Item List",
        icon: ShoppingBag,
        path: "/item-list",
      },
      {
        label: "Order Creation",
        icon: BaggageClaim,
        path: "/order-creation",
      },
      {
        label: "Service List",
        icon: NotepadText,
        path: "/service-list",
      },
      {
        label: "Order List",
        icon: ChartColumn,
        path: "/order-list",
      },
      {
        label: "Enquiry",
        icon: UserCheck,
        path: "/enquiry-form",
      },
    ],
  },
];
