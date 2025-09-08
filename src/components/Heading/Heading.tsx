import type { HeadingType } from "./Heading.types";

const Heading = (props: HeadingType) => {
  const { title, subtitle, ...rest } = props;
  return (
    <header className="grid gap-x-2" {...rest}>
      <h2 className="heading text-gray-800">{title}</h2>
      <p className="subheading text-gray-600">{subtitle}</p>
    </header>
  );
};

export { Heading };
