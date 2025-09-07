import { BrandCard } from "./components/BrandCard/BrandCard";
import { FeatureCard } from "./components/FeatureCard/FeatureCard";
import { SearchComponent } from "./components/Search";
import { FaqCard } from "./components/FaqCard/FaqCard";
import CardDisabledPerson from "@/assets/CardDisabledPerson.png";
import CardTelephoneExample from "@/assets/CardTelephoneExample.png";
import carf from "@/assets/carf.png";

const Landing = () => {
  return (
    <section className="container mx-auto px-4 pt-[72px]">
      <header className="grid justify-items-center gap-y-2 py-16 text-center md:py-24">
        <h1 className="hero-title max-w-xl text-gray-800">
          Como podemos te ajudar hoje?
        </h1>
        <h2 className="subtitle text-gray-600">
          Respondemos todas as dúvidas sobre sua reabilitação
        </h2>
        <div className="mb-8 flex gap-x-5">
          <BrandCard brand="hc" />
          <BrandCard brand="imrea" />
          <img src={carf} alt="1º instituição no Brasil acreditada pela CARF" />
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

      {/* === Teleconsulta Callout Section === */}
      <section className="my-16 rounded-2xl bg-amber-50">
        <div className="flex flex-col items-center justify-between gap-8 p-8 md:flex-row md:p-12">
          {/* Image Composition */}
          <div className="relative h-64 w-full md:w-1/2">
            {/* These are placeholders for your images */}
            <img
              src="https://i.imgur.com/L13v2aD.png"
              alt="Video call on a tablet"
              className="absolute top-0 left-0 w-3/4 -rotate-6 transform rounded-lg shadow-lg"
            />
            <img
              src="https://i.imgur.com/H1tIADC.png"
              alt="Video call on a laptop"
              className="absolute right-0 bottom-0 w-3/4 rotate-3 transform rounded-lg shadow-xl"
            />
          </div>
          {/* Content */}
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Como funciona a teleconsulta?
            </h2>
            <p className="mb-6 text-lg text-gray-600">
              Não fique na espera à toa, a teleconsulta pode ser até 4x mais
              rápida do que uma consulta presencial.
            </p>
            <button className="rounded-md bg-red-600 px-8 py-3 font-semibold text-white transition hover:bg-red-700">
              Saber mais
            </button>
          </div>
        </div>
      </section>

      {/* === First Consultation Section === */}
      <section className="py-12">
        <h2 className="mb-8 text-3xl font-bold text-gray-800">
          Minha primeira teleconsulta
        </h2>
        {/* This section uses the same card structure as above */}
        <div className="flex gap-6 overflow-x-auto pb-4">
          {/* Card 1 */}
          <div className="flex w-72 flex-shrink-0 flex-col justify-between rounded-xl bg-yellow-300/80 p-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Como criar o RG HC?
            </h3>
            <a
              href="#"
              className="mt-4 flex items-center gap-2 self-start font-semibold text-gray-800"
            >
              {/* Saiba mais <FaArrowRight /> */}
            </a>
          </div>
          {/* Card 2 */}
          <div className="flex w-72 flex-shrink-0 flex-col justify-between rounded-xl bg-cyan-300/80 p-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Como criar o RG HC?
            </h3>
            <a
              href="#"
              className="mt-4 flex items-center gap-2 self-start font-semibold text-gray-800"
            >
              {/* Saiba mais <FaArrowRight /> */}
            </a>
          </div>
          {/* Card 3 */}
          <div className="flex w-72 flex-shrink-0 flex-col justify-between rounded-xl bg-rose-300/80 p-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Como criar o RG HC?
            </h3>
            <a
              href="#"
              className="mt-4 flex items-center gap-2 self-start font-semibold text-gray-800"
            >
              {/* Saiba mais <FaArrowRight /> */}
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export { Landing };
