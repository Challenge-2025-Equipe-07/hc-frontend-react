import type { BrandCardType } from "./BrandCard.types";
import HCFmusp from "@/assets/LogoHcFmusp.svg";
import IMREA from "@/assets/LogomarcaColor.svg";
import { useId } from "react";

const BrandCard = ({ brand }: BrandCardType) => {
  const id = useId();
  const BRAND_IMAGES = {
    hc: {
      image: HCFmusp,
      title: (
        <p className="body text-blue-500 max-sm:hidden" id={id}>
          <strong>Hospital das Clínicas</strong> Fmusp
        </p>
      ),
      description: "",
    },
    imrea: {
      image: IMREA,
      title: (
        <p className="body max-sm:hidden" id={id}>
          <span className="text-red-600">I</span>nstituto de{" "}
          <span className="text-red-600">M</span>edicina Física e{" "}
          <span className="text-red-600">Rea</span>bilitação HCFMUSP
        </p>
      ),
      description: "Rede Lucy Montoro",
    },
  };

  const { image, title, description } = BRAND_IMAGES[brand];
  return (
    <article className="relative flex w-fit max-w-[265px] min-w-14 justify-center gap-x-3 rounded-md border border-gray-200 p-2 shadow-sm">
      <img src={image} aria-describedby="" />
      {title}
      {description && (
        <p className="small absolute bottom-0 left-0 translate-y-full text-gray-600 max-sm:hidden">
          {description}
        </p>
      )}
    </article>
  );
};

export { BrandCard };
