import type { HeadingType } from "./Heading.types";

const Heading = ({ title, subtitle }: HeadingType) => {
  return (
    <header className="page-header">
      <h2 className="heading">{title}</h2>
      <p className="subheading">{subtitle}</p>
    </header>
  );
};

export { Heading };
