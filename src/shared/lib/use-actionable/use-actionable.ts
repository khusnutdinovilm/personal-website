import { computed } from "vue";
import { NuxtLink } from "#components";

import type { IActionableProps } from "./types";

export function useActionable(props: IActionableProps, defaultTag = "button") {
  const tag = computed(() => {
    if (props.disabled) return defaultTag;
    if (props.to) return NuxtLink;
    if (props.href) return "a";

    return defaultTag;
  });

  const isExternal = computed(() => tag.value === "a");
  const isBlankLink = computed(() => tag.value === "a" && (props.target ?? "_blank") === "_blank");

  const actionableAttrs = computed(() => {
    if (tag.value === NuxtLink) return { to: props.to };
    if (tag.value === "a") {
      return {
        href: props.href,
        target: props.target ?? "_blank",
        rel: isBlankLink.value ? "noopener noreferrer" : undefined,
      };
    }

    if (tag.value === "button") {
      return {
        type: "button" as const,
        disabled: props.disabled || undefined,
      };
    }

    return {};
  });
  return {
    tag,
    isExternal,
    actionableAttrs,
  };
}
