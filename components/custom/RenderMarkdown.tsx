import ReactMarkdown from "react-markdown";

export const RenderMarkdown = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown className="prose lg:prose-xl dark:prose-invert w-full">
      {content}
    </ReactMarkdown>
  );
};
