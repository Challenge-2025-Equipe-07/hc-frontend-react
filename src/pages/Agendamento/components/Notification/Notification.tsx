import { Button, useNotification } from "@/components";
import type { NotificationProps } from "./Notification.types";

const NotificationWidget = (props: NotificationProps) => {
  const { date, time, appointment, children } = props;
  const { showNotification } = useNotification();

  const handleSchedule = async () => {
    if (!date || !time) {
      showNotification({
        title: "Erro",
        message: "Por favor, selecione data e hora.",
      });
      return;
    }

    const permission = await Notification.requestPermission();

    if (permission !== "granted") {
      showNotification({
        title: "Erro",
        message: "Permissão para notificações foi negada.",
      });
      return;
    }

    navigator.serviceWorker.ready.then((registration) => {
      registration.active?.postMessage({
        date,
        time,
        appointment,
      });
      showNotification({
        title: "Sucesso!",
        message:
          "Lembrete agendado com sucesso! Você receberá uma notificação 30 minutos antes da sua consulta.",
      });
    });
  };

  return (
    <div className="grid max-w-[370px] auto-rows-max gap-y-4 rounded-2xl bg-blue-500 px-4 py-6">
      {children}
      <p className="text-lg text-gray-50">
        Quer receber uma notificação da sua videochamada um dia antes?
      </p>
      <div className="flex flex-wrap justify-between gap-x-2">
        <Button variant="tertiary" icon="redirect" onClick={handleSchedule}>
          Ativar notificação
        </Button>
        <Button variant="tertiary" icon="question">
          Como ativar
        </Button>
      </div>
    </div>
  );
};

export { NotificationWidget };
