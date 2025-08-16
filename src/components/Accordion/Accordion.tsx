import type { FaqType } from "../../pages/Faq/Faq.types";

const Accordion = ({ title, content }: FaqType) => {
  return (
    <details className="c-accordion">
      <summary className="c-accordion__title">{title}</summary>
      <div className="c-accordion__content">
        <p className="body">{content}</p>
      </div>
    </details>
  );
};

export { Accordion };
