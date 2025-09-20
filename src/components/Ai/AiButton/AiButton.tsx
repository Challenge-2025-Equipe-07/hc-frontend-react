import type { AiButtonProps } from "./AiButton.types";

const AiButton = ({ onClick }: AiButtonProps) => {
  return (
    <div className="grid w-fit gap-y-2 justify-self-end">
      <button
        onClick={onClick}
        className="flex w-fit flex-col items-end gap-4 overflow-clip rounded-full bg-gray-50 shadow-2xl"
        aria-label="Pedir ajuda da IA"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="103"
          height="103"
          viewBox="0 0 103 103"
          fill="none"
          className="absolute right-0 bottom-0 z-0 h-[103px] w-[103px]"
        >
          <g filter="url(#filter0_f_694_2143)">
            <g
              clipPath="url(#paint0_angular_694_2143_clip_path)"
              data-figma-skip-parse="true"
            >
              <g transform="matrix(0 0.0338625 -0.0338625 0 51.7375 51.6374)">
                <foreignObject
                  x="-1011.07"
                  y="-1011.07"
                  width="2022.15"
                  height="2022.15"
                >
                  <div
                    style={{
                      background:
                        "conic-gradient(from 90deg,rgba(247, 51, 152, 1) 0deg,rgba(255, 255, 255, 1) 120.6deg,rgba(148, 175, 255, 1) 250.2deg,rgba(43, 228, 255, 1) 360deg)",
                      height: "100%",
                      width: "100%",
                      opacity: 0.8,
                    }}
                  ></div>
                </foreignObject>
              </g>
            </g>
            <circle cx="51.7375" cy="51.6374" r="33.8625" />
          </g>
          <defs>
            <filter
              id="filter0_f_694_2143"
              x="0.624969"
              y="0.524902"
              width="102.225"
              height="102.225"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="8.625"
                result="effect1_foregroundBlur_694_2143"
              />
            </filter>
            <clipPath id="paint0_angular_694_2143_clip_path">
              <circle cx="51.7375" cy="51.6374" r="33.8625" />
            </clipPath>
          </defs>
        </svg>

        <div
          className="ai-orb relative z-10 h-[5.25rem] w-[5.25rem] rounded-full"
          style={{
            filter: "blur(8.625px)",
            background:
              "conic-gradient(from var(--gradient-angle) at 50% 50%, rgba(238, 72, 99, 0.8) 0deg, rgba(255, 213, 255, 0.6) 120.6deg, rgba(187, 159, 99, 0.1) 250.2deg, rgba(247, 191, 105, 0.8) 360deg)",
          }}
        ></div>
      </button>
    </div>
  );
};

export { AiButton };
