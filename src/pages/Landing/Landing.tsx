import { SearchComponent } from "./components/Search";

const Landing = () => {
  return (
    <div className="container mx-auto px-4">
      <SearchComponent />

      {/* === Frequent Doubts Section === */}
      <section className="py-12">
        <h2 className="mb-8 text-3xl font-bold text-gray-800">
          Dúvidas frequentes
        </h2>
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
          {/* Card 4 */}
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
        </div>
      </section>

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
    </div>
  );
};

export { Landing };
