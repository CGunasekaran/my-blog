import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types";
import { Calendar, Clock, Tag } from "lucide-react";
import { format } from "date-fns";

interface BlogCardProps {
  post: BlogPost;
  colorIndex?: number;
}

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

const textGradients = [
  "from-blue-600 to-cyan-600",
  "from-purple-600 to-pink-600",
  "from-orange-600 to-red-600",
  "from-green-600 to-emerald-600",
  "from-indigo-600 to-blue-600",
  "from-rose-600 to-pink-600",
  "from-amber-600 to-yellow-600",
  "from-teal-600 to-cyan-600",
  "from-violet-600 to-purple-600",
  "from-fuchsia-600 to-pink-600",
];

export default function BlogCard({ post, colorIndex = 0 }: BlogCardProps) {
  const gradient = gradients[colorIndex % gradients.length];
  const textGradient = textGradients[colorIndex % textGradients.length];

  return (
    <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
      {/* Cover Image */}
      {post.coverImage && (
        <Link href={`/blog/${post.slug}`}>
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-10 transition-opacity`}
            ></div>
          </div>
        </Link>
      )}

      <div className="p-6">
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 3).map((tag, tagIndex) => {
              const tagGradient = gradients[tagIndex % gradients.length];
              return (
                <span
                  key={tag}
                  className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${tagGradient} text-white text-xs font-semibold rounded-full`}
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              );
            })}
          </div>
        )}

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h3
            className={`text-xl font-bold bg-gradient-to-r ${textGradient} bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform line-clamp-2`}
          >
            {post.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {format(new Date(post.publishedAt), "MMM dd, yyyy")}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className={`bg-gradient-to-r ${textGradient} bg-clip-text text-transparent font-semibold hover:scale-105 transition-transform inline-block`}
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
}
