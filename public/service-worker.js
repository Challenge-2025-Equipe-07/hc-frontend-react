const sw = self;

sw.addEventListener("message", (event) => {
  if (!event.data || !event.data.date || !event.data.time) {
    console.error("Service Worker recebeu dados incompletos para teste.");
    return;
  }

  const { date, time } = event.data;
  const testDelay = 5000;

  console.log(
    `[Worker de Teste] Notificação agendada. Será disparada em 5 segundos.`,
  );

  setTimeout(() => {
    const appointmentDate = new Date(`${date}T${time}`);
    const formattedDate = new Intl.DateTimeFormat("pt-BR").format(
      appointmentDate,
    );

    const options = {
      body: `Você tem uma consulta marcada para amanhã, ${formattedDate} às ${time}.`,
      icon: "/IMREA.svg",
      data: {
        url: "https://localhost:5173",
      },
    };

    sw.registration.showNotification("Lembrete de pré-consulta", options);
  }, testDelay);
});

sw.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const promise = async () => {
    const urlToOpen = event.notification.data.url;

    const clientList = await clients.matchAll({
      type: "window",
      includeUncontrolled: true,
    });

    let clientToFocus = null;
    for (const client of clientList) {
      if (client.url.endsWith(urlToOpen)) {
        clientToFocus = client;
        break;
      }
    }

    if (clientToFocus) {
      await clientToFocus.focus();
    } else {
      await clients.openWindow(urlToOpen);
    }
  };

  event.waitUntil(promise());
});
