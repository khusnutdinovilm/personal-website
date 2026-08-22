import { computed } from "vue";

import type { ITextControlProps, TextFieldVariant } from "./types";

export function useTextControl(props: ITextControlProps, block: string) {
  const variant = computed<TextFieldVariant>(() => {
    if (props.isSuccess) return "success";
    if (props.isError) return "error";
    if (props.isWarning) return "warning";
    return "default";
  });

  const rootClasses = computed(() => [block, `${block}--${variant.value}`]);

  return {
    variant,
    rootClasses,
  };
}
