const sw = self;

sw.addEventListener("message", (event) => {
  if (!event.data || !event.data.date || !event.data.time) {
    console.error(
      "Service Worker: Dados para agendamento incompletos.",
      event.data,
    );
    return;
  }

  const { date, time, appointment } = event.data;

  const dateParts = date.split("/");
  if (dateParts.length !== 3) {
    console.error(
      "Service Worker: Formato de data inválido. Esperado 'dd/mm/aaaa'. Recebido:",
      date,
    );
    return;
  }
  const isoDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

  const appointmentDateTime = new Date(`${isoDate}T${time}`);

  if (isNaN(appointmentDateTime.getTime())) {
    console.error("Service Worker: Falha ao criar data/hora do compromisso.", {
      isoDate,
      time,
    });
    return;
  }

  const notificationTime = new Date(appointmentDateTime.getTime());
  notificationTime.setMinutes(notificationTime.getMinutes() - 30);

  const delay = notificationTime.getTime() - Date.now();

  if (delay < 0) {
    console.log(
      "Service Worker: O horário da notificação já passou. Nenhum lembrete será agendado.",
    );
    return;
  }

  console.log(
    `[Agendamento] Lembrete de ${appointment || "consulta"} agendado para ${notificationTime.toLocaleString("pt-BR")}.`,
  );

  setTimeout(() => {
    const options = {
      body: `Lembrete: Sua ${appointment || "consulta"} começa em 30 minutos, às ${time}.`,
      icon: "/IMREA.svg",
      data: {
        url: self.location.origin,
      },
    };

    sw.registration.showNotification("Lembrete de Compromisso", options);
  }, delay);
});

sw.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const promise = async () => {
    const urlToOpen = event.notification.data.url || "/";

    const clientList = await clients.matchAll({
      type: "window",
      includeUncontrolled: true,
    });

    for (const client of clientList) {
      if (client.url === urlToOpen && "focus" in client) {
        return client.focus();
      }
    }

    if (clients.openWindow) {
      return clients.openWindow(urlToOpen);
    }
  };

  event.waitUntil(promise());
});
