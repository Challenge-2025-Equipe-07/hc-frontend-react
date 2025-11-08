import { Heading } from "@/components";
import { HeartIcon, UsersIcon, CodeIcon } from "@phosphor-icons/react";

const Sobre = () => {
  return (
    <section className="my-8 grid gap-y-16 px-4">
      <Heading
        title="Sobre o Reabili"
        subtitle="Conectando pacientes a um cuidado acessível e humano."
      />
      <div className="mx-auto grid max-w-5xl gap-12 text-lg text-gray-700 md:grid-cols-2">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <HeartIcon size={48} className="mb-4 text-blue-500" weight="light" />
          <h3 className="subtitle mb-2 text-xl font-bold text-blue-900">
            Nossa Missão
          </h3>
          <p>
            O projeto Reabili nasceu da necessidade de criar uma ponte sólida e
            confiável entre pacientes e profissionais da saúde, utilizando a
            tecnologia para quebrar barreiras geográficas e de acessibilidade.
            Nossa missão é facilitar o acesso a serviços de reabilitação,
            oferecendo uma plataforma intuitiva e segura.
          </p>
        </div>
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <UsersIcon size={48} className="mb-4 text-blue-500" weight="light" />
          <h3 className="subtitle mb-2 text-xl font-bold text-blue-900">
            Foco no Usuário
          </h3>
          <p>
            Acreditamos que todos merecem um cuidado de qualidade. Por isso,
            nossa plataforma foi desenhada com foco total na experiência do
            usuário, garantindo que pacientes, familiares e profissionais possam
            interagir de forma simples e eficiente.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-5xl rounded-xl bg-sky-50 p-8 text-center">
        <CodeIcon
          size={48}
          className="mx-auto mb-4 text-blue-500"
          weight="light"
        />
        <h3 className="subtitle mb-2 text-xl font-bold text-blue-900">
          Tecnologia e Inovação
        </h3>
        <p className="mx-auto max-w-3xl text-lg text-gray-700">
          Utilizando tecnologias modernas como React, TypeScript e Tailwind CSS,
          construímos uma Single Page Application (SPA) robusta e responsiva.
          Nosso compromisso é com a inovação contínua, sempre buscando novas
          formas de melhorar a jornada da saúde para todos.
        </p>
      </div>
    </section>
  );
};

export { Sobre };
