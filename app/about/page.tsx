import { authorProfile } from "@/data/profile";
import ProfileSection from "@/components/ProfileSection";
import { Github, Linkedin, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Section */}
        <ProfileSection author={authorProfile} />

        {/* About Content */}
        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">About Me</h2>
            <div className="prose prose-lg prose-invert text-slate-200 space-y-4">
              <p>
                Hi! I'm {authorProfile.name}, a passionate full-stack developer
                with a love for creating innovative web applications that solve
                real-world problems.
              </p>
              <p>
                I specialize in modern web technologies including Next.js,
                React, TypeScript, and Node.js. My approach to development
                focuses on writing clean, maintainable code while delivering
                exceptional user experiences.
              </p>
              <p>
                Through this blog, I share my journey in software development,
                showcase my projects, and provide insights into the latest web
                development trends and best practices.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-3">
                  Frontend
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Next.js & React</li>
                  <li>• TypeScript & JavaScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• HTML5 & CSS3</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-3">
                  Backend
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Node.js & Express</li>
                  <li>• RESTful APIs</li>
                  <li>• Database Design</li>
                  <li>• Authentication & Security</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">
              Connect With Me
            </h2>
            <div className="flex flex-wrap gap-4">
              {authorProfile.social.github && (
                <a
                  href={authorProfile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 text-slate-100 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              )}
              {authorProfile.social.linkedin && (
                <a
                  href={authorProfile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500 to-violet-500 text-white rounded-lg hover:opacity-95 transition-opacity"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              )}
              {authorProfile.social.website && (
                <a
                  href={authorProfile.social.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 text-slate-100 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
                >
                  <Globe className="w-5 h-5" />
                  <span>Portfolio</span>
                </a>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
