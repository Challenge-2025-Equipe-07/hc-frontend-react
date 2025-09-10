import { BrandCard } from "./components/BrandCard/BrandCard";
import { FeatureCard } from "./components/FeatureCard/FeatureCard";
import { SearchComponent } from "./components/Search/Search";
import { FaqCard } from "./components/FaqCard/FaqCard";
import { Button } from "@/components";
import CardDisabledPerson from "@/assets/CardDisabledPerson.png";
import CardTelephoneExample from "@/assets/CardTelephoneExample.png";
import Carf from "@/assets/Carf.png";
import ExemploVideoChamada1 from "@/assets/ExemploVideoChamada1.png";
import ExemploVideoChamada2 from "@/assets/ExemploVideoChamada2.png";

const Landing = () => {
  return (
    <section className="container mx-auto px-4">
      <header className="grid justify-items-center gap-y-2 py-16 text-center">
        <h1 className="hero-title max-w-xl text-gray-800">
          Como podemos te ajudar hoje?
        </h1>
        <h2 className="subtitle text-gray-600">
          Respondemos todas as dúvidas sobre sua reabilitação
        </h2>
        <div className="mb-8 flex gap-x-5">
          <BrandCard brand="hc" />
          <BrandCard brand="imrea" />
          <img src={Carf} alt="1º instituição no Brasil acreditada pela CARF" />
        </div>
        <SearchComponent />
      </header>

      <div className="flex w-full flex-wrap justify-center gap-18">
        <FeatureCard
          img={CardDisabledPerson}
          title="Como é a pré-consulta?"
          description="Como funcionam nossos serviços de psicologia e assistência social"
          actionLabel="Saber mais"
          theme="warm"
        />
        <FeatureCard
          img={CardTelephoneExample}
          title="Manual da teleconsulta"
          description="Cuidar da sua saúde no conforto da sua casa é mais simples do que você imagina"
          actionLabel="Saber mais"
          theme="cold"
        />
      </div>

      <div className="grid gap-y-6 py-12">
        <h2 className="title text-gray-800">Como podemos te ajudar hoje?</h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          <FaqCard theme="blue" title="Teste mano" link="/" />
          <FaqCard theme="yellow" title="Teste mano" link="/" />
          <FaqCard theme="pink" title="Teste mano" link="/" />
          <FaqCard theme="blue" title="Teste mano" link="/" />
        </div>
      </div>

      <section className="my-16 rounded-2xl bg-sky-50">
        <div className="flex flex-col items-center justify-between gap-8 p-8 md:flex-row md:p-12">
          <div className="relative h-64 w-full md:w-1/2">
            <img
              src={ExemploVideoChamada1}
              alt="Video call on a tablet"
              className="absolute top-0 left-0 max-h-50 w-3/4 -rotate-6 transform rounded-lg object-cover shadow-lg"
            />
            <img
              src={ExemploVideoChamada2}
              alt="Video call on a laptop"
              className="absolute right-0 bottom-0 w-3/4 rotate-3 transform rounded-lg shadow-xl"
            />
          </div>

          <div className="justify-items-start-safe grid w-full text-center max-md:justify-items-center md:w-1/2 md:text-left">
            <h2 className="title mb-4 text-4xl font-bold text-gray-800">
              Como funciona a teleconsulta?
            </h2>
            <p className="body mb-6 text-lg text-gray-600">
              Não fique na espera à toa, a teleconsulta pode ser até 4x mais
              rápida do que uma consulta presencial.
            </p>
            <Button asLink to={"/"} icon="question">
              Saiba mais
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
};

export { Landing };
