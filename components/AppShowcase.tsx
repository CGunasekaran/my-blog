"use client";

import { App } from "@/types";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface AppShowcaseProps {
  app: App;
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

export default function AppShowcase({ app, colorIndex = 0 }: AppShowcaseProps) {
  const gradient = gradients[colorIndex % gradients.length];
  const textGradient = textGradients[colorIndex % textGradients.length];

  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
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
              <span className="text-sm text-gray-500 font-medium">
                {app.category}
              </span>
            </div>
          </div>

          {app.featured && (
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4">{app.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {app.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
            >
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
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r ${gradient} text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium`}
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          {app.githubUrl && (
            <a
              href={app.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-4 py-2 border-2 bg-gradient-to-r ${gradient} bg-clip-text text-transparent border-current rounded-lg hover:bg-gradient-to-r hover:${gradient} hover:text-white hover:border-transparent transition-all duration-300 font-medium`}
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
