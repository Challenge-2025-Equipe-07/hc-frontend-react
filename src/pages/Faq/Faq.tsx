import { Accordion } from "./components/Accordion/Accordion";
import { Heading } from "../../components/Heading/Heading";
import { FAQ_ITEMS } from "./Faq.constants";

const Faq = () => {
  const hasItems = FAQ_ITEMS && Boolean(FAQ_ITEMS.length);
  return (
    <section className="grid gap-6 pt-[72px] pb-8">
      <Heading
        title="FAQ"
        subtitle="Perguntas feitas frequentemente pelos usuários"
      />
      <div className="my-8 grid grid-cols-2 gap-4">
        {hasItems &&
          FAQ_ITEMS.map(({ title, content }) => {
            return <Accordion title={title} content={content} />;
          })}
      </div>
    </section>
  );
};

export { Faq };
