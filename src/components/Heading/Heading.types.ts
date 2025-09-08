import type { ComponentProps } from "react";

export type HeadingType = {
  title: string;
  subtitle?: string;
} & ComponentProps<"div">;
