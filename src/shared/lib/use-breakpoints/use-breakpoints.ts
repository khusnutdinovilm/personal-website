import { BREAKPOINTS, DESKTOP_BREAKPOINT, type BreakpointName } from "~/shared/config";
import { useMediaQuery, type MediaQueryRef } from "../use-media-query";

export const useBreakpoints = () => {
  const isGreater = (name: BreakpointName): MediaQueryRef =>
    useMediaQuery(`(min-width: ${BREAKPOINTS[name]}px)`);

  const isLess = (name: BreakpointName): MediaQueryRef =>
    useMediaQuery(`(max-width: ${BREAKPOINTS[name] - 0.02}px)`);

  const isBetween = (min: BreakpointName, max: BreakpointName): MediaQueryRef =>
    useMediaQuery(
      `(min-width: ${BREAKPOINTS[min]}px) and (max-width: ${BREAKPOINTS[max] - 0.02}px)`
    );

  const isDesktop: MediaQueryRef = isGreater(DESKTOP_BREAKPOINT);

  const isMobile = computed(() => !isDesktop.value);

  const names = (Object.keys(BREAKPOINTS) as BreakpointName[]).sort(
    (a, b) => BREAKPOINTS[a] - BREAKPOINTS[b]
  );
  const flags = names.map((name) => ({ name, active: isGreater(name) }));
  const current = computed<BreakpointName>(() => {
    let result = names[0];
    for (const { name, active } of flags) if (active.value) result = name;
    return result!;
  });

  return {
    isGreater,
    isLess,
    isBetween,
    isDesktop,
    isMobile,
    current,
  };
};
