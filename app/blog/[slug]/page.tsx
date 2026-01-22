import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { format } from "date-fns";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const Content = post.contentComponent;

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 bg-white/5 border border-white/10 text-sky-200 text-sm font-medium rounded-full"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-slate-300 mb-6">{post.description}</p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {format(new Date(post.publishedAt), "MMMM dd, yyyy")}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </div>
            {post.author && (
              <div className="flex items-center gap-2">
                <span>By {post.author.name}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cover Image */}
      {post.coverImage && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative h-96 w-full rounded-xl overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <article className="max-w-prose mx-auto px-4 sm:px-6 lg:px-8 py-14">
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
      </article>

      {/* Share Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-white/10">
        <p className="text-slate-300 mb-4">Share this article:</p>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-gradient-to-r from-sky-500 to-violet-500 text-white rounded-lg hover:opacity-95 transition-opacity">
            Twitter
          </button>
          <button className="px-4 py-2 bg-white/5 border border-white/10 text-slate-100 rounded-lg hover:bg-white/10 transition-colors">
            LinkedIn
          </button>
          <button className="px-4 py-2 bg-white/5 border border-white/10 text-slate-100 rounded-lg hover:bg-white/10 transition-colors">
            Copy Link
          </button>
        </div>
      </div>
    </main>
  );
}
