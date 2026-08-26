import type { RouteLocationRaw } from "vue-router";

export interface INavItem {
  label: string;
  name: string;
}

const HOME_ROUTE = "index";

export const homePageParams: RouteLocationRaw = {
  name: HOME_ROUTE,
};

export const SITE_NAME = "michael-weaver";
export const NAV_ITEMS: INavItem[] = [
  {
    label: "_hello",
    name: HOME_ROUTE,
  },
  {
    label: "_about",
    name: "about",
  },
  {
    label: "_projects",
    name: "projects",
  },
];

export const CONTACT_ITEM: INavItem = {
  label: "_contact-me",
  name: "contact",
};

export const CONTACT_ITEMS: INavItem[] = [CONTACT_ITEM];

export const ALL_NAV_ITEMS: INavItem[] = [...NAV_ITEMS, CONTACT_ITEM];
