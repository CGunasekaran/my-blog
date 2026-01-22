import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { ECOMMERCE_PLATFORM_PART2_MARKDOWN } from "@/content/blog/ecommerce-platform-performance.content";

export default function EcommercePlatformPart2() {
  const delimiter = "\n\n---\n\n## Incremental Static Regeneration (ISR)";
  const splitIndex = ECOMMERCE_PLATFORM_PART2_MARKDOWN.indexOf(delimiter);
  const before =
    splitIndex >= 0
      ? ECOMMERCE_PLATFORM_PART2_MARKDOWN.slice(0, splitIndex)
      : ECOMMERCE_PLATFORM_PART2_MARKDOWN;
  const after =
    splitIndex >= 0 ? ECOMMERCE_PLATFORM_PART2_MARKDOWN.slice(splitIndex) : "";

  const markdownComponents = {
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
  } as const;

  return (
    <>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={markdownComponents}
      >
        {before}
      </ReactMarkdown>

      {splitIndex >= 0 && (
        <>
          <h2>Architecture Tree (request path)</h2>
          <pre className="my-6 overflow-x-auto rounded-xl border border-white/10 bg-black/60 p-4">
            <code>
              {[
                "Browser",
                "  ├─ CDN / Edge Cache",
                "  │   ├─ Static assets (_next/static, images)",
                "  │   └─ Route cache (ISR HTML)",
                "  ├─ Next.js App Router",
                "  │   ├─ Server Components (fetch + render)",
                "  │   ├─ Suspense boundaries (streaming)",
                "  │   └─ Client Components (interactions)",
                "  ├─ Data layer",
                "  │   ├─ Next.js Data Cache / fetch cache",
                "  │   ├─ Shared cache (Redis/Upstash)",
                "  │   └─ Database (source of truth)",
                "  └─ Observability",
                "      ├─ RUM (Core Web Vitals)",
                "      └─ Logs + traces",
              ].join("\n")}
            </code>
          </pre>

          <h2>Practical Performance Checklist</h2>
          <div className="my-6 overflow-x-auto rounded-xl border border-white/10 bg-black/20">
            <table className="w-full border-separate border-spacing-0 text-sm">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-slate-100 border-b border-white/10">
                    Area
                  </th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-100 border-b border-white/10">
                    What to check
                  </th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-100 border-b border-white/10">
                    Good default
                  </th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-100 border-b border-white/10">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    area: "LCP",
                    check: "Hero image sizing + priority",
                    good: "next/image + correct sizes",
                    notes: "Don’t set priority everywhere",
                  },
                  {
                    area: "CLS",
                    check: "Stable layout + placeholders",
                    good: "Fixed aspect ratio / skeletons",
                    notes: "Avoid late-loading fonts",
                  },
                  {
                    area: "TTFB",
                    check: "Rendering strategy",
                    good: "ISR for public pages",
                    notes: "SSR for private/user-specific",
                  },
                  {
                    area: "CPU",
                    check: "Client JS weight",
                    good: "Server Components first",
                    notes: "Lazy-load interactive widgets",
                  },
                  {
                    area: "Data",
                    check: "Cache behavior",
                    good: "Data Cache + Redis",
                    notes: "Tag-based invalidation",
                  },
                ].map((row) => (
                  <tr key={row.area}>
                    <td className="px-3 py-2 text-slate-200 border-b border-white/10">
                      {row.area}
                    </td>
                    <td className="px-3 py-2 text-slate-200 border-b border-white/10">
                      {row.check}
                    </td>
                    <td className="px-3 py-2 text-slate-200 border-b border-white/10">
                      {row.good}
                    </td>
                    <td className="px-3 py-2 text-slate-200 border-b border-white/10">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {after && (
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={markdownComponents}
        >
          {after}
        </ReactMarkdown>
      )}
    </>
  );
}
