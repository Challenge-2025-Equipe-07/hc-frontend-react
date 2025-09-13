import { CaretDownIcon } from "@phosphor-icons/react";
import ChromeIcon from "@/assets/Chrome.svg";
import LogoImrea from "@/assets/LogomarcaColor.svg";
import type { NotificationExampleProps } from "./NotificationExample.types";

const NotificationExample = (props: NotificationExampleProps) => {
  const { appointment, date, hour } = props;
  return (
    <div className="grid auto-rows-max grid-cols-[repeat(4,max-content)] items-center gap-x-2 rounded-3xl bg-slate-800/80 py-1.5 pr-1.5 pl-3 text-gray-50">
      <div className="row-span-2 rounded-2xl bg-gray-50 p-[4px]">
        <img
          src={ChromeIcon}
          width={30}
          height={30}
          alt="Navegador Google Chrome"
        />
      </div>
      <div className="grid">
        <h2 className="body line-clamp-1 max-w-[210px] overflow-hidden font-semibold text-ellipsis">
          Lembrete de {appointment}...
        </h2>
        <p className="max-w-[210px] overflow-hidden text-xs text-ellipsis">
          Você tem uma consulta em vídeo amanhã, {date} às {hour}
        </p>
      </div>
      <div className="row-span-2 rounded-full bg-gray-50 p-[5px]">
        <img src={LogoImrea} alt="IMREA" height={19} className="h-[20px]" />
      </div>
      <CaretDownIcon size={24} color="currentColor" className="row-span-2" />
    </div>
  );
};

export { NotificationExample };
