import { Accordion } from "../../components/Accordion/Accordion";
import { Heading } from "../../components/Heading/Heading";
import { FAQ_ITEMS } from "./Faq.constants";

const Faq = () => {
  const hasItems = FAQ_ITEMS && Boolean(FAQ_ITEMS.length);
  return (
    <section className="l-faq">
      <Heading
        title="FAQ"
        subtitle="Perguntas feitas frequentemente pelos usuários"
      />
      {hasItems &&
        FAQ_ITEMS.map(({ title, content }) => {
          return <Accordion title={title} content={content} />;
        })}
    </section>
  );
};

export { Faq };
