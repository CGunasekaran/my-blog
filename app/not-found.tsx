import Link from "next/link";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { ArrowLeft, BookOpen, FolderKanban, Tag } from "lucide-react";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export const metadata = {
  title: "404 - Page not found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  const tags = getAllTags();
  const recentPosts = getAllPosts().slice(0, 3);
  const seriesPosts = getAllPosts()
    .filter(
      (post) =>
        post.slug === "ecommerce-platform" ||
        post.slug === "ecommerce-platform-performance",
    )
    .sort(
      (a, b) =>
        new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime(),
    );

  const gradients = [
    "from-blue-500 to-cyan-400",
    "from-purple-500 to-pink-500",
    "from-orange-500 to-red-500",
    "from-green-500 to-emerald-400",
    "from-indigo-500 to-blue-500",
    "from-rose-500 to-pink-500",
    "from-amber-500 to-yellow-400",
    "from-teal-500 to-cyan-500",
    "from-violet-500 to-purple-500",
    "from-fuchsia-500 to-pink-500",
  ];

  return (
    <main className="min-h-screen">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
          <div className="p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-violet-500 flex items-center justify-center">
                <Tag className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-400">
                  Featured article
                </p>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-100">
                  Building a Modern E-Commerce Platform with Next.js
                </h1>
              </div>
            </div>

            <p className="text-slate-300 text-lg max-w-2xl">
              Here’s the full series content (Part 1 + Part 2). If you landed
              here from a broken link, the exact page might not exist — but you
              can still read everything from here.
            </p>

            {/* Full provided content */}
            {seriesPosts.length > 0 && (
              <div className="mt-14 space-y-28">
                {seriesPosts.map((post) => (
                  <div
                    key={post.slug}
                    className="pb-20 border-b border-white/10 last:border-b-0 last:pb-0"
                  >
                    {(() => {
                      const Content = post.contentComponent;
                      return (
                        <>
                          <div className="flex items-center justify-between gap-4 mb-6">
                            <div>
                              <p className="text-sm text-slate-400">
                                {format(
                                  new Date(post.publishedAt),
                                  "MMM dd, yyyy",
                                )}
                              </p>
                              <h2 className="text-2xl font-bold text-slate-100">
                                {post.title}
                              </h2>
                              <p className="text-slate-300 mt-1">
                                {post.description}
                              </p>
                            </div>
                            <Link
                              href={`/blog/${post.slug}`}
                              className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-100 font-semibold hover:bg-white/10 transition-colors"
                            >
                              <BookOpen className="w-4 h-4" />
                              Open
                            </Link>
                          </div>

                          <div className="bg-slate-900/55 border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl shadow-black/20">
                            <div className="prose prose-lg prose-invert max-w-none text-[17px] leading-8 prose-headings:scroll-mt-24 prose-headings:text-slate-50 prose-headings:font-semibold prose-headings:tracking-tight prose-headings:mt-10 prose-headings:mb-4 prose-p:my-5 prose-p:leading-8 prose-p:text-slate-200 prose-ul:my-5 prose-ol:my-5 prose-li:my-2 prose-li:text-slate-200 prose-li:marker:text-slate-500 prose-hr:my-10 prose-hr:border-white/10 prose-a:text-sky-300 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-50 prose-blockquote:border-white/10 prose-blockquote:text-slate-300 prose-code:text-sky-200 prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:my-6 prose-pre:p-4 prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10">
                              {Content ? (
                                <Content />
                              ) : (
                                <ReactMarkdown
                                  remarkPlugins={[remarkGfm]}
                                  rehypePlugins={[rehypeRaw]}
                                >
                                  {post.content}
                                </ReactMarkdown>
                              )}
                            </div>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                ))}
              </div>
            )}

            {/* Topics */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-4 h-4 text-violet-300" />
                <h2 className="text-lg font-bold text-slate-100">Topics</h2>
              </div>
              {tags.length === 0 ? (
                <p className="text-slate-300">
                  No topics yet — add tags to your blog posts to populate this.
                </p>
              ) : (
                <div className="flex flex-wrap gap-3">
                  {tags.map((tagName, index) => {
                    const gradient = gradients[index % gradients.length];
                    return (
                      <Link
                        key={tagName}
                        href={`/blog?tag=${encodeURIComponent(tagName)}`}
                        className="group px-5 py-2.5 bg-white/5 rounded-full font-bold hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden border border-white/10"
                      >
                        <span
                          className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`}
                        ></span>
                        <span
                          className={`relative z-10 bg-gradient-to-r ${gradient} bg-clip-text text-transparent group-hover:text-white transition-colors font-bold inline-flex items-center gap-2`}
                          style={{
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                          }}
                        >
                          <Tag className="w-4 h-4" />
                          {tagName}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Recent posts */}
            <div className="mt-10">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-violet-300" />
                <h2 className="text-lg font-bold text-slate-100">
                  Recent posts
                </h2>
              </div>
              {recentPosts.length === 0 ? (
                <p className="text-slate-300">No posts yet.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {recentPosts.map((post, index) => {
                    const gradient = gradients[index % gradients.length];
                    return (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors"
                      >
                        <p
                          className={`text-sm font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                        >
                          {format(new Date(post.publishedAt), "MMM dd, yyyy")}
                        </p>
                        <h3 className="mt-2 font-bold text-slate-100 line-clamp-2 group-hover:underline">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-300 line-clamp-2">
                          {post.description}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-violet-500 text-white font-semibold hover:opacity-95 transition-opacity"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-100 font-semibold hover:bg-white/10 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Browse Blog
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-100 font-semibold hover:bg-white/10 transition-colors"
              >
                <FolderKanban className="w-4 h-4" />
                View Projects
              </Link>
            </div>

            <div className="mt-10 border-t pt-6">
              <p className="text-sm text-slate-400">
                Note: the page you requested wasn’t found, but you can keep
                exploring from here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
