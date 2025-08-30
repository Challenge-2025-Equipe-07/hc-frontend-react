import { useEffect, useState } from "react";
import type {
  BreakpointsType,
  BreakpointResponseType,
} from "./useResponsive.types";

const BREAKPOINTS: { [key: number]: BreakpointsType } = {
  1280: "xl",
  1024: "lg",
  768: "md",
  640: "sm",
  0: "xs",
};

const getBreakpoint = (width: number): BreakpointsType => {
  const sortedBreakpoints = Object.keys(BREAKPOINTS)
    .map(Number)
    .sort(
      (firstBreakpoint, nextBreakpoint) => nextBreakpoint - firstBreakpoint,
    );

  const matchingBreakpoint = sortedBreakpoints.find((bp) => width >= bp);

  return matchingBreakpoint !== undefined
    ? BREAKPOINTS[matchingBreakpoint]
    : "xs";
};

export const useResponsive = (): BreakpointResponseType => {
  const [breakpoint, setBreakpoint] = useState<BreakpointsType>(() =>
    getBreakpoint(window.innerWidth),
  );

  useEffect(() => {
    const handleResize = () => {
      const newBreakpoint = getBreakpoint(window.innerWidth);
      if (newBreakpoint !== breakpoint) {
        setBreakpoint(newBreakpoint);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);
  const isWeb = ["xl", "lg"].includes(breakpoint);
  return { breakpoint, isWeb };
};
