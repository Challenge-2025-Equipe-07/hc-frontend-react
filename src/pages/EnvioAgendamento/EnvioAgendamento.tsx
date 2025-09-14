import { Button, Input } from "@/components";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { FormValues } from "./EnvioAgendamento.types";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

const EnvioAgendamento = () => {
  const { register, handleSubmit, watch } = useForm<FormValues>();
  const [isCopied, copyToClipboard] = useCopyToClipboard();
  const protocol = import.meta.env.VITE_HTTPS ? "https" : "http";

  const date = watch("date");
  const time = watch("time");
  const appointment = watch("type");
  const hasDateAndTime = date && time;
  const datetimeString = new Date(`${date}T${time}`).toString();

  const linkParams = new URLSearchParams({
    date: datetimeString,
    appointment,
  });

  const urlToSend = `${protocol}://localhost:5173/agendamento?${linkParams}`;
  const textToSend = `Olá! Passando pra lembrar da sua consulta virtual dia ${date} às ${time}.
  
  Veja mais informações sobre o teleatendimento ou crie um lembrete
  pra sua consulta no link: ${urlToSend}`;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { phone } = data;

    const whatsappParams = new URLSearchParams({
      phone: `55${phone}`,
      text: textToSend,
    });

    const waLink = `https://api.whatsapp.com/send?${whatsappParams.toString()}`;
    window.open(waLink, "_blank");
    console.log("Form data submitted:", waLink);
  };

  const handleCopy = () => {
    copyToClipboard(textToSend);
  };

  return (
    <section className="grid gap-4 pb-6">
      <header>
        <h1 className="heading font-bold">Lembretes de consulta</h1>
        <p className="subtitle text-gray-600">
          Crie um lembrete de consulta e{" "}
          <strong>o envie diretamente para o Whatsapp do paciente.</strong>
        </p>
      </header>
      <div className="flex flex-wrap gap-x-8 gap-y-6">
        <form
          id="schedule-form"
          onSubmit={handleSubmit(onSubmit)}
          className="grid grow-1 auto-rows-max grid-cols-2 gap-2 lg:gap-4 [&>div:first-of-type]:col-span-2 [&>div:last-of-type]:col-span-2"
        >
          <Input
            id="phone"
            label="Whatsapp do paciente"
            {...register("phone", {
              required: true,
              minLength: 11,
              maxLength: 11,
            })}
            placeholder="11999999999"
            autoComplete="tel"
            type="tel"
            color="light"
          />
          <Input
            id="date"
            label="Data da consulta"
            {...register("date", {
              required: true,
            })}
            placeholder="dd/mm/aaaa"
            type="date"
            color="light"
          />
          <Input
            id="time"
            label="Hora da consulta"
            {...register("time", {
              required: true,
            })}
            placeholder="hh:mm"
            type="time"
            color="light"
          />
          <Input
            id="type"
            label="Tipo de consulta"
            {...register("type", {
              required: true,
            })}
            placeholder="Teleconsulta"
            type="text"
            color="light"
          />
        </form>

        <div className="grid auto-rows-max gap-y-1">
          <p className="body w-full max-w-100 rounded-sm text-blue-500">
            Pré-visualização
          </p>
          <div className="mb-4 flex max-w-[402px] justify-end-safe rounded-md bg-[#E8E0D5] p-2">
            <p className="body max-w-72 gap-1 rounded-sm bg-[#D3FFC8] p-2 text-gray-900">
              Olá! Passando pra lembrar da sua consulta virtual dia {date} às{" "}
              {time}.
              <br />
              <br />
              Veja mais informações sobre o teleatendimento ou crie um lembrete
              pra sua consulta no link:
              <br />
              <span className="text-blue-500">
                https://www.ajuda-hc.com.br/co...
              </span>
              <span className="flex text-right text-[14px] text-gray-600">
                11:14
              </span>
            </p>
          </div>
          <div className="flex w-fit flex-wrap justify-between gap-4">
            <div className="relative">
              <Button
                variant="secondary"
                icon="copy"
                onClick={handleCopy}
                style={{ anchorName: "--copy-button-anchor" }}
                disabled={!hasDateAndTime}
              >
                Copiar
              </Button>
              <div
                className={`tooltip ${isCopied ? "visible opacity-100" : "hidden opacity-0"}`}
                style={{ positionAnchor: "--copy-button-anchor" }}
              >
                Copiado!
              </div>
            </div>
            <Button type="submit" icon="redirect" form="schedule-form">
              Enviar lembrete de consulta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { EnvioAgendamento };
