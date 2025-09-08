import { Heading } from "../../components/Heading/Heading";
import { TeamCard } from "./components/TeamCard/TeamCard";

const Integrantes = () => {
  return (
    <section className="grid gap-6 pt-[72px] pb-12">
      <Heading title="Integrantes do time" className="w-full text-center" />
      <div className="flex flex-wrap justify-center gap-12">
        <TeamCard
          name="Camilo Micheletto"
          image="https://placehold.co/296x300"
          description="RM: 564113 | 1TDSPW"
          links={{
            linkedin: "https://linkedin.com/in/camilo-micheletto",
            github: "https://github.com/allyhere",
          }}
        />
        <TeamCard
          name="Carlos André"
          image="https://placehold.co/296x300"
          description="RM: 564968 | 1TDSPW"
          links={{
            linkedin: "https://www.linkedin.com/in/ukarlito/",
            github: "https://github.com/uKarlito",
          }}
        />
        <TeamCard
          name="Guilherme Ribeiro"
          image="https://placehold.co/296x300"
          description="RM: 562700 | 1TDSPW"
          links={{
            linkedin: "https://www.linkedin.com/in/willahelm-ribeiro/",
            github: "https://github.com/WillahelmGui",
          }}
        />
      </div>
    </section>
  );
};

export { Integrantes };
