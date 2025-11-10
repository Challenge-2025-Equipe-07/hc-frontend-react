import { Link } from "react-router";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import type { FaqCardProps } from "./FaqCard.types";
import { FAQ_CARD_VARIANTS } from "./FaqCard.constants";

const FaqCard = (props: FaqCardProps) => {
  const { title, link, theme } = props;
  const selectedVariant = FAQ_CARD_VARIANTS({ color: theme });

  return (
    <div className={selectedVariant}>
      <h2 className="title font-medium">{title}</h2>
      <Link to={link} className="body flex gap-y-2">
        Saiba mais <ArrowUpRightIcon size={24} />
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="190"
        fill="none"
        className="absolute right-0 bottom-0 z-0 translate-y-1.5 opacity-50"
        viewBox="0 0 24.088 30"
      >
        <g
          fill="currentColor"
          fillRule="evenodd"
          clipPath="url(#a)"
          clipRule="evenodd"
        >
          <path d="M20.267 4.578C15.324.29 9.3-1.164 5.202.978c-.08 2.241 1.097 4.41 2.782 6.008.19.183.39.354.592.521.95.862 2.138 1.522 3.326 1.915-.528-1.581-.79-3.429.66-4.613.528-.263 1.188-.263 1.581.13 1.32 1.32.394 3.033-.135 4.483.398-.266.926-.266 1.375-.627q.317-.193.616-.402a14 14 0 0 0 2.738-2.34c.433-.485.998-.97 1.526-1.483M7.662 19.842c-.37.326-.715.664-1.053 1.005 1.65 1.157 3.378 2.007 5.079 2.54-.56-1.284-1.236-2.516-2.21-3.597-.17-.119-.35-.206-.54-.25a1.3 1.3 0 0 0-.604 0 2 2 0 0 0-.676.306M5.15 18.872c.541.616 1.105 1.192 1.682 1.733.95-1.792 1.768-3.648 2.253-5.659q.045-.246.08-.497.065-.5.079-1.009c0-.286-.008-.572-.032-.858-.151-2.007-.866-3.998-2.142-5.747a63 63 0 0 0-.401-.703A36.4 36.4 0 0 0 2.242.18C-1.61 4.388-.408 12.53 5.15 18.872" />
          <path d="M13.09 25.982c.06.27.124.54.183.806q.071.305.135.608c.27.791.406 1.673.592 2.508 2.774.35 5.345-.247 7.245-1.912 4.558-3.997 3.525-12.629-2.309-19.28a24 24 0 0 0-1.427-1.491c-1.16 1.216-2.205 2.579-3.23 3.91-.163.21-.322.422-.485.628q-.227.329-.45.676-.223.345-.436.707c-3.005 3.978-.632 8.596.178 12.84" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h24.088v30H0z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export { FaqCard };
