import { TeamCard } from "./components/TeamCard/TeamCard";
import { Heading } from "@/components/Heading/Heading";
import CamiloMicheletto from "@/assets/TeamCamiloMicheletto.jpeg";
import CarlosSilva from "@/assets/TeamCarlosSilva.jpeg";
import GuilhermeRibeiro from "@/assets/TeamGuilhermeRibeiro.jpeg";

const Integrantes = () => {
  return (
    <section className="grid gap-6 pb-12">
      <Heading title="Integrantes do time" />
      <div className="flex flex-wrap justify-between gap-12">
        <TeamCard
          name="Camilo Micheletto"
          image={CamiloMicheletto}
          description="RM: 564113 | 1TDSPW"
          links={{
            linkedin: "https://linkedin.com/in/camilo-micheletto",
            github: "https://github.com/allyhere",
          }}
        />
        <TeamCard
          name="Carlos André"
          image={CarlosSilva}
          description="RM: 564968 | 1TDSPW"
          links={{
            linkedin: "https://www.linkedin.com/in/ukarlito/",
            github: "https://github.com/uKarlito",
          }}
        />
        <TeamCard
          name="Guilherme Ribeiro"
          image={GuilhermeRibeiro}
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
