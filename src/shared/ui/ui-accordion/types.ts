import type { ComputedRef, InjectionKey } from "vue";

export type AccordionItemKey = string | number;

export interface IAccordionContext {
  isOpen: (key: AccordionItemKey) => boolean;
  toggle: (key: AccordionItemKey) => void;
}

export interface IAccordionItemContext {
  open: ComputedRef<boolean>;
  toggle: () => void;
  headerId: string;
  bodyId: string;
}

export const ACCORDION_KEY: InjectionKey<IAccordionContext> = Symbol("ui-accordion");
export const ACCORDION_ITEM_KEY: InjectionKey<IAccordionItemContext> = Symbol("ui-accordion-item");

export interface IUiAccordionProps {
  activeItemKey?: AccordionItemKey;
  alwaysOpen?: boolean;
}

export interface IUiAccordionItemProps {
  itemKey?: AccordionItemKey;
}
