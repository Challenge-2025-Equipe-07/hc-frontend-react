import { LinkItem } from "../LinkItem/LinkItem";
import {
  InstagramLogoIcon,
  YoutubeLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import IMREALogoWhite from "@/assets/LogomarcaWhite.svg";

const Footer = () => {
  return (
    <footer className="col-span-full mt-auto grid h-max w-full flex-wrap gap-5 rounded-2xl bg-blue-500 px-8 py-4 text-gray-50">
      <div className="flex flex-wrap gap-x-12 gap-y-4">
        <div className="grid auto-rows-min">
          <img src={IMREALogoWhite} alt="Logotipo IMREA" />
          <h2 className="subtitle font-light">
            <strong>Reabili</strong>
          </h2>
        </div>
        <ul className="grid gap-y-2" id="menuList" aria-labelledby="menuButton">
          <li>
            <LinkItem route="/">Início</LinkItem>
          </li>
          <li>
            <LinkItem route="/faq">FAQ</LinkItem>
          </li>
          <li>
            <LinkItem route="/integrantes">Integrantes</LinkItem>
          </li>
          <li>
            <LinkItem route="/contato">Contato</LinkItem>
          </li>
        </ul>
        <ul
          className="ml-auto flex flex-wrap gap-x-4"
          id="menuList"
          aria-labelledby="menuButton"
        >
          <li>
            <a
              href="#"
              className="link link--decorated body"
              aria-label="Perfil do instagram do HC"
            >
              <InstagramLogoIcon size={24} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="link link--decorated body"
              aria-label="Perfil do youtube do HC"
            >
              <YoutubeLogoIcon size={24} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="link link--decorated body"
              aria-label="Perfil do Linkedin do HC"
            >
              <LinkedinLogoIcon size={24} />
            </a>
          </li>
        </ul>
      </div>
      <hr className="dark:bg-gray-700c-separator my-8 h-px border-0 bg-gray-200" />
      <small className="small">
        Desenvolvido com por Camilo, Carlos e Guilherme - Github
      </small>
    </footer>
  );
};

export { Footer };
