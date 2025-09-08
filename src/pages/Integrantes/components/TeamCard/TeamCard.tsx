import { LinkedinLogoIcon, GithubLogoIcon } from "@phosphor-icons/react";
import type { TeamCardProps } from "./TeamCard.types";

const TeamCard = (props: TeamCardProps) => {
  const {
    image,
    name,
    description,
    links: { linkedin, github },
  } = props;

  return (
    <article className="relative mb-[34px] grid max-w-80 justify-items-center shadow-2xs">
      <img
        src={image}
        alt={name}
        className="aspect-square w-full max-w-[296px] object-cover"
      />
      <div className="absolute bottom-0 z-1 grid min-w-80 translate-y-2/5 grid-cols-[max-content_1fr] gap-x-3 gap-y-2 rounded-2xl bg-gray-50 px-4 py-2 shadow-xl">
        <h2 className="subtitle font-bold">{name}</h2>
        <p className="body col-start-1 row-start-2">{description}</p>
        <ul className="row-span-2 flex h-full items-center gap-2">
          <li>
            <a
              href={linkedin}
              target="_blank"
              aria-label="linkedin do integrante"
            >
              <LinkedinLogoIcon size={32} />
            </a>
          </li>
          <li>
            <a href={github} target="_blank" aria-label="github do integrante">
              <GithubLogoIcon size={32} />
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export { TeamCard };
