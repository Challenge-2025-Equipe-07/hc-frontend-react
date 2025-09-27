import { LinkIcon, CheckIcon } from "@phosphor-icons/react";
import { Link } from "react-router";
import type { BreadcrumbProps } from "./Breadcrumb.types";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

const Breadcrumb = (props: BreadcrumbProps) => {
  const { currentUrl } = props;
  const decodedUrl = decodeURIComponent(currentUrl);
  const [isCopied, copyToClipboard] = useCopyToClipboard();

  const handleCopyLink = async () => {
    copyToClipboard(window.location.href);
  };

  return (
    <nav className="text-gray-700">
      <ol className="body flex flex-wrap items-center space-x-2">
        <li>
          <Link
            to=".."
            className="text-blue-600 transition-colors duration-200 hover:text-blue-800"
          >
            Início
          </Link>
        </li>
        <li className="flex items-center space-x-2">
          <span className="mx-2">/</span>
          <p className="text-gray-800">{decodedUrl}</p>

          <div className="relative">
            <button
              onClick={handleCopyLink}
              aria-label={isCopied ? "Link copiado!" : "Copiar link"}
              style={{ anchorName: "--copy-button-anchor" }}
              className={`rounded-full p-1 transition-all duration-300 ease-in-out ${isCopied ? "text-green-500 hover:text-green-600" : "text-gray-600 hover:text-gray-800"} focus:ring-2 focus:ring-offset-2 focus:outline-none ${isCopied ? "focus:ring-green-400" : "focus:ring-gray-400"} `}
            >
              {isCopied ? <CheckIcon size={16} /> : <LinkIcon size={16} />}
            </button>

            <div
              className={`tooltip ${isCopied ? "visible opacity-100" : "hidden opacity-0"}`}
              style={{ positionAnchor: "--copy-button-anchor" }}
            >
              Copiado!
            </div>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export { Breadcrumb };
