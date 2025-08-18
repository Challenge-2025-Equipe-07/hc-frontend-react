import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-gray-50 p-6 text-center">
      <h1 className="text-5xl font-extrabold text-gray-800">404</h1>
      <h2 className="mt-2 text-2xl font-semibold text-gray-700">
        Página Não Encontrada
      </h2>
      <p className="mt-4 max-w-sm text-gray-500">
        Ops! Parece que a página que você procura não existe ou foi movida de
        lugar.
      </p>

      <Link
        to="/"
        className="focus:ring-opacity-50 mt-8 rounded-lg bg-red-600 px-5 py-3 font-medium text-white shadow-md transition-transform duration-200 ease-in-out hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:outline-none active:scale-95"
      >
        Voltar para o Início
      </Link>
    </section>
  );
};

export { ErrorPage };
