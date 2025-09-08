import { CaretUpIcon } from "@phosphor-icons/react";
import type { FaqType } from "@/pages/Faq/Faq.types";

const Accordion = ({ title, content }: FaqType) => {
  return (
    <details className="group min-h-[78px] h-max max-w-2xl rounded-lg border border-blue-200 bg-gray-50 px-6 py-4">
      <summary className="body relative cursor-pointer list-none pr-8 font-bold text-blue-900">
        {title}

        <div className="absolute top-1/2 right-0 -translate-y-1/2">
          <CaretUpIcon
            size={24}
            className="text-blue-600 transition-transform duration-300 group-open:rotate-180"
          />
        </div>
      </summary>

      <div className="pt-4 text-gray-600">
        <p>{content}</p>
      </div>
    </details>
  );
};

export { Accordion };
