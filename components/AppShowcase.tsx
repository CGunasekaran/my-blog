"use client";

import { App } from "@/types";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface AppShowcaseProps {
  app: App;
  colorIndex?: number;
  variant?: "dark" | "light";
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

export default function AppShowcase({
  app,
  colorIndex = 0,
  variant = "dark",
}: AppShowcaseProps) {
  const gradient = gradients[colorIndex % gradients.length];
  const textGradient = textGradients[colorIndex % textGradients.length];

  const isLight = variant === "light";
  const containerClassName = isLight
    ? "group bg-gradient-to-br from-white via-slate-50 to-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-slate-200/80 hover:shadow-xl"
    : "group bg-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-white/10 hover:bg-white/10";

  const categoryClassName = isLight
    ? "text-sm text-slate-600 font-medium"
    : "text-sm text-slate-400 font-medium";

  const featuredPillClassName = isLight
    ? "px-2 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full"
    : "px-2 py-1 bg-amber-400/15 border border-amber-400/20 text-amber-200 text-xs font-semibold rounded-full";

  const descriptionClassName = isLight
    ? "text-slate-700 mb-4"
    : "text-slate-300 mb-4";

  const techPillClassName = isLight
    ? "px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded"
    : "px-2 py-1 bg-white/5 border border-white/10 text-slate-200 text-xs font-medium rounded";

  const codeButtonClassName = isLight
    ? "flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-800 rounded-lg hover:bg-slate-50 transition-colors font-medium"
    : "flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors font-medium";

  return (
    <div className={containerClassName}>
      {/* Thumbnail */}
      <div
        className={`relative h-48 w-full bg-gradient-to-br ${gradient} overflow-hidden`}
      >
        {app.thumbnail ? (
          <>
            <Image
              src={app.thumbnail}
              alt={app.name}
              fill
              className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-30 group-hover:opacity-20 transition-opacity`}
            ></div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`text-6xl font-bold text-white opacity-50`}>
              {app.name.charAt(0)}
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            {app.favicon && (
              <Image
                src={app.favicon}
                alt={`${app.name} icon`}
                width={32}
                height={32}
                className="rounded"
              />
            )}
            <div>
              <h3
                className={`text-xl font-bold bg-gradient-to-r ${textGradient} bg-clip-text text-transparent`}
              >
                {app.name}
              </h3>
              <span className={categoryClassName}>{app.category}</span>
            </div>
          </div>

          {app.featured && (
            <span className={featuredPillClassName}>Featured</span>
          )}
        </div>

        {/* Description */}
        <p className={descriptionClassName}>{app.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {app.technologies.map((tech) => (
            <span key={tech} className={techPillClassName}>
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r ${gradient} text-white rounded-lg hover:opacity-95 transition-opacity font-medium`}
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          {app.githubUrl && (
            <a
              href={app.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={codeButtonClassName}
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
