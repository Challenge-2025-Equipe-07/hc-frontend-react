import { Button } from "@/components/Button/Button";
import type { FeatureCardProps } from "./FeatureCard.types";
import { FEATURE_CARD_VARIANTS } from "./FeatureCard.constants";

const FeatureCard = (props: FeatureCardProps) => {
  const { theme, title, description, img, actionLabel } = props;
  const selectedVariant = FEATURE_CARD_VARIANTS({ theme: theme });

  return (
    <article className={selectedVariant}>
      <h2 className="subtitle z-1 font-bold text-gray-900">{title}</h2>
      <p className="body z-1 text-gray-600">{description}</p>
      <img
        src={img}
        height={226}
        aria-disabled="true"
        role="presentation"
        className={`absolute right-0 bottom-0`}
      />

      <Button icon="redirect">{actionLabel}</Button>
    </article>
  );
};

export { FeatureCard };
