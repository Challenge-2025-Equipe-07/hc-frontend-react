// src/pages/SchedulingPage.tsx

import { useState } from "react";

const SchedulingPage = () => {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const handleSchedule = async () => {
    if (!appointmentDate || !appointmentTime) {
      alert("Por favor, selecione data e hora.");
      return;
    }

    // 1. Request Permission from the user
    const permission = await Notification.requestPermission();

    if (permission !== "granted") {
      alert("Permissão para notificações foi negada.");
      return;
    }

    // 2. Check if the Service Worker is ready and send the message
    navigator.serviceWorker.ready.then((registration) => {
      registration.active?.postMessage({
        date: appointmentDate,
        time: appointmentTime,
      });
      alert(
        "Lembrete agendado com sucesso! Você será notificado 24 horas antes.",
      );
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-4 text-center text-2xl font-bold">
          Agende sua Consulta
        </h1>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Data
          </label>
          <input
            type="date"
            id="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="time"
            className="block text-sm font-medium text-gray-700"
          >
            Hora
          </label>
          <input
            type="time"
            id="time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
          />
        </div>
        <button
          onClick={handleSchedule}
          className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
        >
          Agendar e Notificar
        </button>
      </div>
    </div>
  );
};

export { SchedulingPage };
