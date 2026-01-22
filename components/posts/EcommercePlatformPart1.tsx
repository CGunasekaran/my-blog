import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { ECOMMERCE_PLATFORM_PART1_MARKDOWN } from "@/content/blog/ecommerce-platform.content";

export default function EcommercePlatformPart1() {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        pre: ({ children, ...props }: any) => (
          <pre
            {...props}
            className="my-6 overflow-x-auto rounded-xl border border-white/10 bg-black/60 p-4"
          >
            {children}
          </pre>
        ),
        code: ({ inline, className, children, ...props }: any) => {
          if (inline) {
            return (
              <code
                {...props}
                className="rounded bg-white/5 px-1 py-0.5 text-sky-200"
              >
                {children}
              </code>
            );
          }

          return (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
        table: ({ children, ...props }: any) => (
          <div className="my-6 overflow-x-auto rounded-xl border border-white/10 bg-black/20">
            <table
              {...props}
              className="w-full border-separate border-spacing-0 text-sm"
            >
              {children}
            </table>
          </div>
        ),
        thead: ({ children, ...props }: any) => (
          <thead {...props} className="bg-white/5">
            {children}
          </thead>
        ),
        th: ({ children, ...props }: any) => (
          <th
            {...props}
            className="px-3 py-2 text-left font-semibold text-slate-100 border-b border-white/10"
          >
            {children}
          </th>
        ),
        td: ({ children, ...props }: any) => (
          <td
            {...props}
            className="px-3 py-2 text-slate-200 border-b border-white/10"
          >
            {children}
          </td>
        ),
      }}
    >
      {ECOMMERCE_PLATFORM_PART1_MARKDOWN}
    </ReactMarkdown>
  );
}
