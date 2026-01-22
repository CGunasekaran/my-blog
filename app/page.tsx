import { getAllPosts, getFeaturedPosts } from "@/lib/blog";
import { apps } from "@/data/apps";
import { authorProfile } from "@/data/profile";
import BlogCard from "@/components/BlogCard";
import AppShowcase from "@/components/AppShowcase";
import ProfileSection from "@/components/ProfileSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredPosts = getFeaturedPosts();
  const featuredApps = apps;
  const allPosts = getAllPosts().slice(0, 6);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProfileSection author={authorProfile} />
      </section>

      {/* Featured Apps Section */}
      <section className="relative bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950 py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1 h-8 bg-gradient-to-b from-sky-500 to-violet-500 rounded-full"></div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                  Featured Projects
                </h2>
              </div>
              <p className="text-slate-300 text-lg ml-6">
                Check out my latest and greatest applications
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-violet-500 text-white rounded-full hover:shadow-lg hover:shadow-black/30 hover:scale-105 transition-all duration-300 font-medium"
            >
              View All
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredApps.map((app, index) => (
              <AppShowcase
                key={app.id}
                app={app}
                colorIndex={index}
                variant="light"
              />
            ))}
          </div>

          <Link
            href="/projects"
            className="md:hidden flex items-center justify-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-sky-500 to-violet-500 text-white rounded-full hover:shadow-lg hover:shadow-black/30 transition-all duration-300 font-medium w-full max-w-sm mx-auto"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-100 mb-2">
              Latest Articles
            </h2>
            <p className="text-slate-300">
              Insights, tutorials, and stories from my development journey
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden md:flex items-center gap-2 text-sky-300 hover:text-sky-200 font-medium"
          >
            View All
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {allPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white/5 border border-white/10 rounded-xl">
            <p className="text-slate-300 mb-4">No blog posts yet.</p>
            <p className="text-sm text-slate-400">
              Stay tuned for upcoming articles about my projects!
            </p>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-sky-400 mb-2">
              {apps.length}
            </div>
            <div className="text-slate-400">Projects Built</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-violet-400 mb-2">
              {new Set(apps.flatMap((app) => app.technologies)).size}
            </div>
            <div className="text-slate-400">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">
              {allPosts.length}
            </div>
            <div className="text-slate-400">Blog Posts</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400 mb-2">
              {apps.filter((app) => app.status === "live").length}
            </div>
            <div className="text-slate-400">Live Apps</div>
          </div>
        </div>
      </section>
    </main>
  );
}
