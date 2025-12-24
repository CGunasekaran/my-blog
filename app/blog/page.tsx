import { getAllPosts, getAllTags } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import { BookOpen, Tag } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Blog - Gunasekaran Dev Blog",
  description: "Read articles about web development, tutorials, and insights",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  // Group posts by month/year
  const postsByDate = posts.reduce((acc, post) => {
    const date = new Date(post.publishedAt);
    const monthYear = date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push(post);
    return acc;
  }, {} as Record<string, typeof posts>);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Blog</h1>
          </div>
          <p className="text-xl text-purple-100 max-w-2xl">
            Insights, tutorials, and stories about web development, modern
            technologies, and software engineering best practices.
          </p>
          <div className="mt-6 flex items-center gap-4 text-purple-100">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold">{posts.length}</span>
              <span>Articles</span>
            </div>
            <div className="w-px h-8 bg-purple-300"></div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold">{tags.length}</span>
              <span>Topics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tags Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Tag className="w-5 h-5 text-purple-600" />
            <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Browse by Topic
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, index) => {
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
              const gradient = gradients[index % gradients.length];

              return (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className={`group px-5 py-2.5 bg-white rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden border-2`}
                >
                  <span
                    className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`}
                  ></span>
                  <span
                    className={`relative z-10 bg-gradient-to-r ${gradient} bg-clip-text text-transparent group-hover:text-white transition-colors font-bold`}
                    style={{
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                    }}
                  >
                    {tag}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              No posts yet
            </h3>
            <p className="text-gray-600">
              Check back soon for new articles and tutorials!
            </p>
          </div>
        ) : (
          Object.entries(postsByDate).map(([monthYear, monthPosts]) => (
            <div key={monthYear} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded"></span>
                {monthYear}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {monthPosts.map((post, index) => (
                  <BlogCard key={post.slug} post={post} colorIndex={index} />
                ))}
              </div>
            </div>
          ))
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            New articles and tutorials are published regularly. Follow me on
            social media to stay connected!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/CGunasekaran"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Follow on GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gunasekaran-chinraj-7a21b063/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
