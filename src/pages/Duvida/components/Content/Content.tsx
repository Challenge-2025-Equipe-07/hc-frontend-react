import type { TextContentProps, VideoContentProps } from "./Content.types";

const VideoContent = (props: VideoContentProps) => {
  const { name, url } = props;
  return (
    <div className="py-2">
      <iframe
        width="560"
        height="315"
        src={url}
        title={name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="h-120 w-full rounded-lg shadow-2xl"
      ></iframe>
    </div>
  );
};

const TextContent = (props: TextContentProps) => {
  const { content, name } = props;
  return (
    <div className="rouded-lg grid h-120 w-full auto-rows-max gap-y-4 bg-gray-50 px-4 py-6">
      <h2 className="subtitle font-bold text-gray-900">{name}</h2>
      <p className="leading-relaxed text-pretty whitespace-pre-line text-gray-800">
        {content}
      </p>
    </div>
  );
};

export { TextContent, VideoContent };
