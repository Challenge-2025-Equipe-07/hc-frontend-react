type FeatureCardTheme = "warm" | "cold";

export type FeatureCardProps = {
  theme: FeatureCardTheme;
  title: string;
  description: string;
  img: string;
  actionLabel: string;
  link: string;
};
