// src/pages/SchedulingPage.tsx

import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { useSearchParams } from "react-router";
import { dateFormatter, timeFormatter } from "@/utils/date";
import { FeatureCard } from "@/components";
import GoogleCalendar from "@/assets/GoogleCalendar.svg";
import CardDisabledPerson from "@/assets/CardDisabledPerson.png";
import CardTelephoneExample from "@/assets/CardTelephoneExample.png";
import { NotificationExample } from "./components/NotificationExample/NotificationExample";
import { NotificationWidget } from "./components/Notification/Notification";

const getLocalDateTime = () => {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 16);
};

const formatToUTC = (date: Date) => {
  return date.toISOString().replace(/[-:.]/g, "").slice(0, -1) + "Z";
};

const Agendamento = () => {
  let [searchParams, _] = useSearchParams();

  const startDate = new Date(searchParams.get("date") ?? getLocalDateTime());
  const date = dateFormatter.format(startDate);
  const time = timeFormatter.format(startDate);
  const appointment = searchParams.get("appointment") ?? "teleconsulta";

  const endDate = new Date(startDate.getTime());
  endDate.setHours(endDate.getHours() + 1);

  const formattedStartDate = formatToUTC(startDate);
  const formattedEndDate = formatToUTC(endDate);

  const baseUrl = "https://calendar.google.com/calendar/render";

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: appointment,
    dates: `${formattedStartDate}/${formattedEndDate}`,
  });

  const finalUrl = `${baseUrl}?${params.toString()}`;

  return (
    <section className="grid gap-y-6 pb-8">
      <header className="grid justify-center text-center">
        <h1 className="subheading max-w-120 font-bold text-gray-900">
          Você tem {appointment} no dia{" "}
          <span className="text-red-700">
            {date} às {time}
          </span>
        </h1>
        <p className="subtitle text-gray-600">
          Veja aqui tudo o que você precisa saber
        </p>
      </header>
      <div className="flex w-full flex-wrap justify-center gap-6">
        <NotificationWidget date={date} time={time} appointment={appointment}>
          <NotificationExample
            appointment={appointment}
            date={date}
            hour={time}
          />
        </NotificationWidget>
        <div className="grid max-w-[370px] items-center justify-items-center gap-3 gap-y-1 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-2 shadow-2xl max-md:w-full max-md:grid-cols-[repeat(2,max-content)] md:place-content-center lg:py-6">
          <img
            src={GoogleCalendar}
            alt="Calendário da google"
            className="max-md:row-span-2 max-md:size-10 lg:mb-4"
          />
          <p className="text-lg text-gray-900">Usa calendário do Google?</p>
          <a
            href={finalUrl}
            target="_blank"
            className="flex items-center gap-y-4 text-lg text-blue-500"
          >
            Adicionar ao calendário <ArrowUpRightIcon size={24} />
          </a>
        </div>
      </div>
      <h2 className="subtitle font-bold text-gray-800">
        Se prepare para sua consulta
      </h2>
      <div className="flex flex-wrap justify-center gap-x-32 gap-y-12 rounded-2xl bg-sky-100 px-4 py-6">
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
    </section>
  );
};

export { Agendamento };
