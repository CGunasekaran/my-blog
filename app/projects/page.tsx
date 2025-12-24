import { apps } from "@/data/apps";
import AppShowcase from "@/components/AppShowcase";
import { Filter } from "lucide-react";

export const metadata = {
  title: "Projects - Gunasekaran Dev Blog",
  description: "Browse all my web development projects and applications",
};

export default function ProjectsPage() {
  // Group apps by category
  const categories = Array.from(new Set(apps.map((app) => app.category)));
  const appsByCategory = categories.map((category) => ({
    category,
    apps: apps.filter((app) => app.category === category),
  }));

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Explore my portfolio of web applications built with modern
            technologies. From e-commerce platforms to AI-powered tools, each
            project demonstrates my expertise in full-stack development.
          </p>
          <div className="mt-6 flex items-center gap-4 text-blue-100">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold">{apps.length}</span>
              <span>Projects</span>
            </div>
            <div className="w-px h-8 bg-blue-300"></div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold">{categories.length}</span>
              <span>Categories</span>
            </div>
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {appsByCategory.map(({ category, apps: categoryApps }) => (
          <div key={category} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Filter className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">{category}</h2>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {categoryApps.length}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryApps.map((app) => (
                <AppShowcase key={app.id} app={app} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Tech Stack Summary */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"></div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Technologies Used
              </h2>
              <div className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"></div>
            </div>
            <p className="text-gray-600 text-lg">
              The tech stack powering my projects
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {Array.from(new Set(apps.flatMap((app) => app.technologies))).map(
              (tech, index) => {
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
                  <span
                    key={tech}
                    className={`group px-6 py-3 bg-white rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden border-2`}
                    style={{
                      borderImage: `linear-gradient(to right, var(--tw-gradient-stops)) 1`,
                      borderImageSlice: 1,
                    }}
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
                      {tech}
                    </span>
                  </span>
                );
              }
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
