// Синхронизировано с src/shared/styles/tokens/_breakpoints.scss — менять вместе.
export const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
} as const;

export type BreakpointName = keyof typeof BREAKPOINTS;

export const DESKTOP_BREAKPOINT: BreakpointName = "lg";
